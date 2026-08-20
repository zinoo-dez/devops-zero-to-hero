const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${GEMINI_API_KEY}`;

const CONTENT_DIR = path.join(__dirname, '../content/courses');
const MY_CONTENT_DIR = path.join(__dirname, '../content/my/courses');

async function translateText(text, retries = 10) {
  const prompt = `Translate the following Markdown content to Myanmar (Burmese) language naturally. 
CRITICAL RULES:
1. Preserve ALL Markdown formatting perfectly (headings, bold, lists).
2. DO NOT translate any code blocks (\`\`\` or \`). Leave code exactly as is.
3. DO NOT translate any component names (like <Terminal>).
4. DO NOT translate URLs or links. 
5. DO NOT add any extra conversational text (e.g. "Here is the translation:"). Just output the translated markdown.
6. The tone should be educational and professional, yet easy to understand for tech students.
7. DO NOT translate technical IT terms (e.g. DevOps, Linux, Command Line, Git, CI/CD, Docker, Kubernetes, Pipeline, Artifact, Volumes, Container, YAML, Terraform, Application, Clean, etc.). Keep them in English. Use natural, conversational Burmese commonly used by developers (Tech-Burmese) rather than formal, literal textbook translations.

Content to translate:
${text}`;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2 }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text.trim();
}

async function processFiles() {
  if (!fs.existsSync(MY_CONTENT_DIR)) {
    fs.mkdirSync(MY_CONTENT_DIR, { recursive: true });
  }

  const courses = fs.readdirSync(CONTENT_DIR);

  let translatedCount = 0;
  for (const course of courses) {
    const coursePath = path.join(CONTENT_DIR, course);
    if (!fs.statSync(coursePath).isDirectory()) continue;

    const myCoursePath = path.join(MY_CONTENT_DIR, course);
    if (!fs.existsSync(myCoursePath)) {
      fs.mkdirSync(myCoursePath, { recursive: true });
    }

    const lessons = fs.readdirSync(coursePath).filter(f => f.endsWith('.mdx'));
    for (const lesson of lessons) {
      const lessonPath = path.join(coursePath, lesson);
      const myLessonPath = path.join(myCoursePath, lesson);

      if (fs.existsSync(myLessonPath)) {
        console.log(`Skipping already translated: ${course}/${lesson}`);
        continue;
      }

      console.log(`Translating: ${course}/${lesson}...`);
      try {
        const content = fs.readFileSync(lessonPath, 'utf8');
        const translated = await translateText(content);
        fs.writeFileSync(myLessonPath, translated, 'utf8');
        console.log(`  -> Success!`);
        translatedCount++;
        // Small delay to avoid rate limits
        await new Promise(r => setTimeout(r, 2000));
      } catch (err) {
        console.error(`  -> Failed to translate ${course}/${lesson}:`, err.message);
      }
    }
  }
  console.log(`Finished! Translated ${translatedCount} files.`);
}

processFiles().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
