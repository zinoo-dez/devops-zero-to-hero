const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${GEMINI_API_KEY}`;

const SOURCE_FILE = path.join(__dirname, '../src/lib/courses.ts');
const DEST_FILE = path.join(__dirname, '../src/lib/courses.my.ts');

async function translateText(text, retries = 5) {
  const prompt = `Translate the string values in this TypeScript file to Myanmar (Burmese) language naturally.
CRITICAL RULES:
1. ONLY translate the strings for: 'title', 'description', 'longDescription', 'learningObjectives'.
2. DO NOT translate the 'slug', 'level', 'duration', 'icon', 'color', 'tags', 'prerequisites', or object keys.
3. DO NOT translate code syntax. Ensure the output is valid TypeScript.
4. DO NOT add any extra conversational text or markdown formatting like \`\`\`typescript. Just output the raw TypeScript code.
5. The tone should be educational and professional.
6. DO NOT translate technical IT terms (e.g. DevOps, Linux, Command Line, Git, CI/CD, Docker, Kubernetes, Pipeline, Artifact, Volumes, Container, YAML, Terraform, Application, Clean, etc.). Keep them in English. Use natural, conversational Burmese commonly used by developers (Tech-Burmese) rather than formal, literal textbook translations.
7. The name of the exported array should be COURSES_MY instead of COURSES.
8. DO NOT add any import statements at the top of the file.

Content to translate:
${text}`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1 }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        if (response.status === 429 || response.status === 503) {
          console.log(`API Error ${response.status}. Retrying in 10s... (Attempt ${attempt}/${retries})`);
          await new Promise(r => setTimeout(r, 10000));
          continue;
        }
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      let code = data.candidates[0].content.parts[0].text.trim();
      if (code.startsWith("\`\`\`typescript")) {
        code = code.substring(13);
      } else if (code.startsWith("\`\`\`ts")) {
        code = code.substring(5);
      }
      if (code.endsWith("\`\`\`")) {
        code = code.substring(0, code.length - 3);
      }
      return code;
    } catch (err) {
      if (attempt === retries) throw err;
      console.log(`Fetch Error: ${err.message}. Retrying in 10s...`);
      await new Promise(r => setTimeout(r, 10000));
    }
  }
}

async function processFile() {
  console.log("Translating courses.ts...");
  const content = fs.readFileSync(SOURCE_FILE, 'utf8');
  
  // To avoid hitting context limits or messing up the whole file, I will extract just the COURSES array
  // and send it. Actually, the file is ~600 lines, Gemini Flash handles 1M tokens, so 600 lines is perfectly fine.
  
  try {
    const translated = await translateText(content);
    
    // We only want the COURSES_MY array, not the interfaces and helper functions.
    // Let's just output whatever it gives us to courses.my.ts
    // Wait, the prompt tells it to name it COURSES_MY and just output the TypeScript.
    fs.writeFileSync(DEST_FILE, translated, 'utf8');
    console.log("Success! Wrote courses.my.ts.");
  } catch (err) {
    console.error("Failed to translate:", err.message);
  }
}

processFile().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
