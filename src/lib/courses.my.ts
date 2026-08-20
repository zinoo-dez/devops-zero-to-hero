export interface LessonMeta {
  slug: string;
  title: string;
  duration: string;
  order: number;
  description?: string;
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonCount: number;
  icon: string;
  color: string;
  badgeColor?: string;
  tags: string[];
  prerequisites: string[];
  learningObjectives: string[];
  lessons: LessonMeta[];
  featured: boolean;
  order: number;
  hasFullContent: boolean;
}


export const COURSES_MY: Course[] = [
  {
    slug: "linux-command-line",
    title: "DevOps အတွက် Linux Command Line",
    description:
      "Terminal ကို ကျွမ်းကျင်စွာအသုံးပြုခြင်း၊ အရေးကြီးသော bash commands တွေ၊ file တွေ စီမံခန့်ခွဲပုံ၊ permissions၊ process management နဲ့ SSH တို့ကို အသုံးပြုပြီး server တွေကို ယုံကြည်မှုရှိရှိ ဝင်ရောက်ကိုင်တွယ်နိုင်အောင် သင်ယူပါ။",
    longDescription:
      "Linux ဟာ ခေတ်မီ DevOps လောကရဲ့ အဓိက Operating System ဖြစ်ပါတယ်။ Container တိုင်း၊ Virtual Machine တိုင်း၊ Cloud Server တိုင်းနဲ့ CI/CD runner တိုင်းဟာ Linux ပတ်ဝန်းကျင်မှာပဲ လည်ပတ်နေကြတာပါ။ ဒီသင်တန်းမှာတော့ Linux ရဲ့ အခြေခံကစပြီး လက်တွေ့လုပ်ဆောင်ပုံတွေကို သင်ယူရမှာဖြစ်ပါတယ် — filesystem ထဲမှာ သွားလာခြင်း၊ permissions တွေ စီမံခန့်ခွဲခြင်း၊ process တွေကို စစ်ဆေးခြင်း၊ network တွေ စစ်ဆေးခြင်းနဲ့ SSH ကနေတစ်ဆင့် အလုပ်လုပ်ကိုင်ခြင်းစတာတွေ ပါဝင်ပါတယ်။",
    level: "Beginner",
    duration: "3.5 hours",
    lessonCount: 10,
    icon: "Terminal",
    color: "from-emerald-500 to-teal-600",
    tags: ["Linux", "Bash", "CLI", "SysAdmin", "Fundamentals"],
    prerequisites: [],
    learningObjectives: [
      "Core navigation commands (pwd, ls, cd, history) တွေကို သုံးပြီး Linux filesystem ထဲမှာ မြန်ဆန်စွာ သွားလာနိုင်ခြင်း",
      "File နဲ့ directory တွေကို လုံခြုံစိတ်ချစွာ ဖန်တီးခြင်း၊ စစ်ဆေးခြင်း၊ ပြင်ဆင်ခြင်းနဲ့ စီမံခန့်ခွဲခြင်း",
      "grep, less, head, tail နဲ့ find တွေကို သုံးပြီး log တွေဖတ်ရှုခြင်းနဲ့ system text တွေ ရှာဖွေခြင်း",
      "Permissions၊ ownership နဲ့ chmod/chown ရဲ့ numeric နဲ့ symbolic mode တွေကို ကျွမ်းကျင်ပိုင်နိုင်ခြင်း",
      "ps, top, htop နဲ့ kill တွေကို သုံးပြီး system processes တွေကို စစ်ဆေးခြင်း၊ စောင့်ကြည့်ခြင်းနဲ့ ပိတ်သိမ်းခြင်း",
      "Debian/Ubuntu ပေါ်မှာ apt ကို သုံးပြီး packages တွေ ထည့်သွင်းခြင်းနဲ့ စီမံခန့်ခွဲခြင်း",
      "curl, ping နဲ့ ss တွေကို သုံးပြီး network connectivity နဲ့ listening ports တွေကို စစ်ဆေးရှာဖွေခြင်း",
      "SSH keys တွေ ထုတ်လုပ်ပြီး remote servers တွေကို လုံခြုံစွာ ချိတ်ဆက်ခြင်း",
    ],
    lessons: [
      {
        slug: "01-why-linux-matters",
        title: "DevOps မှာ Linux ဘကြောင့် အရေးကြီးတာလဲ",
        duration: "15 min",
        order: 1,
        description: "Cloud၊ containers နဲ့ DevOps toolchain တွေကို Linux က ဘာကြောင့် ဦးဆောင်လည်ပတ်နေလဲဆိုတာ နားလည်ပါ။",
      },
      {
        slug: "02-terminal-basics",
        title: "Terminal အခြေခံများနှင့် Navigation",
        duration: "20 min",
        order: 2,
        description: "pwd၊ ls၊ cd၊ clear၊ history နဲ့ autocomplete shortcuts များကို ကျွမ်းကျင်အောင် လုပ်ပါ။",
      },
      {
        slug: "03-files-and-directories",
        title: "Files & Directories များနှင့် အလုပ်လုပ်ခြင်း",
        duration: "25 min",
        order: 3,
        description: "File နဲ့ directory များကို ဖန်တီးခြင်း၊ ရွှေ့ပြောင်းခြင်း၊ ကူးယူခြင်း၊ ဖျက်ဆီးခြင်းနှင့် လုံခြုံစွာ စစ်ဆေးခြင်း.",
      },
      {
        slug: "04-reading-editing-files",
        title: "Files များကို ဖတ်ရှုခြင်းနှင့် ပြင်ဆင်ခြင်း (nano, vim, grep)",
        duration: "25 min",
        order: 4,
        description: "nano/vim ဖြင့် config files များကို ပြင်ဆင်ခြင်းနှင့် grep, find တို့ဖြင့် log များကို အမြန်ရှာဖွေခြင်း။",
      },
      {
        slug: "05-permissions-ownership",
        title: "Permissions & Ownership (chmod, chown)",
        duration: "25 min",
        order: 5,
        description: "rwx permission strings၊ numeric chmod (755/644) နှင့် sudo privileges များကို နားလည်အောင် လုပ်ပါ။",
      },
      {
        slug: "06-process-management",
        title: "Process Management (ps, top, kill)",
        duration: "20 min",
        order: 6,
        description: "CPU/memory သုံးစွဲနေမှုများကို စောင့်ကြည့်ခြင်း၊ background jobs များကို စစ်ဆေးခြင်းနှင့် process များကို ပိတ်သိမ်းခြင်း။",
      },
      {
        slug: "07-package-management",
        title: "apt ဖြင့် Package Management ပြုလုပ်ခြင်း",
        duration: "15 min",
        order: 7,
        description: "Ubuntu ပေါ်တွင် repositories များကို update လုပ်ခြင်း၊ packages များ install လုပ်ခြင်းနှင့် dependencies များကို ရှင်းလင်းခြင်း။",
      },
      {
        slug: "08-networking-basics",
        title: "Networking အခြေခံများ (ping, curl, ss, ip)",
        duration: "25 min",
        order: 8,
        description: "Listening ports များကို စစ်ဆေးခြင်း၊ HTTP requests များ ပို့လွှတ်ခြင်းနှင့် network ချိတ်ဆက်မှု အခက်အခဲများကို ဖြေရှင်းခြင်း။",
      },
      {
        slug: "09-ssh-and-servers",
        title: "SSH နှင့် Remote Servers များသို့ ချိတ်ဆက်ခြင်း",
        duration: "25 min",
        order: 9,
        description: "SSH keypairs များကို ထုတ်လုပ်ခြင်း၊ ssh config ကို သတ်မှတ်ခြင်းနှင့် password မလိုဘဲ ချိတ်ဆက်ခြင်း။",
      },
      {
        slug: "10-productivity-tips",
        title: "Productivity ေမြှင့်တင်ရန် Tips များ၊ Pipes၊ Redirection နှင့် သတိပြုစရာများ",
        duration: "20 min",
        order: 10,
        description: "Pipes၊ redirects (> နှင့် >>)၊ logical operators များကို အသုံးပြု၍ commands များကို ပေါင်းစပ်ခြင်းနှင့် အဖြစ်များသော အမှားများကို ရှောင်ရှားခြင်း။",
      },
    ],
    featured: true,
    order: 0,
    hasFullContent: true,
  },
  {
    slug: "git-github",
    title: "Git & GitHub Fundamentals",
    description:
      "Version control ကို အခြေခံမှစ၍ လေ့လာပါ: staging, commits, branches, merges, remotes, pull requests နှင့် လက်တွေ့သုံး branching strategies များ။",
    longDescription:
      "Git ဟာ ခေတ်မီ software collaboration နဲ့ GitOps workflows တွေရဲ့ အခြေခံအုတ်မြစ် ဖြစ်ပါတယ်။ ဒီသင်တန်းမှာတော့ Git က snapshots တွေကို ဘطور tracking လုပ်တယ်၊ branches တွေ ဘطورခွဲတယ်၊ ပြန်ပေါင်းတယ်၊ conflicts တွေကို ဘطورလွယ်လွယ်ကူကူ ဖြေရှင်းရတယ်ဆိုတာနဲ့ GitHub Pull Requests တွေ, code reviews တွေသုံးပြီး ဘطور ပူးပေါင်းလုပ်ကိုင်ရမယ်ဆိုတာကို သေချာနားလည်လာစေမှာပါ။",
    level: "Beginner",
    duration: "3 hours",
    lessonCount: 8,
    icon: "GitBranch",
    color: "from-orange-500 to-amber-600",
    tags: ["Git", "GitHub", "VCS", "Collaboration", "GitFlow"],
    prerequisites: ["linux-command-line"],
    learningObjectives: [
      "Distributed version control concepts နဲ့ Git internal models များကို နားလည်ခြင်း",
      "Repositories များကို initialize လုပ်ခြင်း၊ changes များကို သေသေချာချာ stage လုပ်ခြင်းနှင့် clean commit messages များ ရေးသားခြင်း",
      "Branches များကို ယုံကြည်မှုရှိရှိ ဖန်တီးခြင်း၊ ပြောင်းလဲခြင်းနှင့် ပေါင်းစပ်ခြင်း",
      "Merge conflicts များကို စိတ်ပူစရာမလိုဘဲ အဆင့်ဆင့် ဖြေရှင်းတတ်ခြင်း",
      "Local repositories များကို remote GitHub repositories များနှင့် ချိတ်ဆက်ခြင်း (push, pull, fetch, clone)",
      "Industry standards များနှင့်အညီ Pull Requests များကို ဖန်တီးခြင်း၊ review လုပ်ခြင်းနှင့် merge လုပ်ခြင်း",
      ".gitignore files များကို configure လုပ်ခြင်းနှင့် atomic commits & conventional commit standards များကို အသုံးပြုခြင်း",
      "Real teams တွေမှာ Git Flow နဲ့ trunk-based development workflows များကို ကျင့်သုံးခြင်း",
    ],
    lessons: [
      {
        slug: "01-what-is-version-control",
        title: "Version Control ဆိုတာ ဘာလဲ",
        duration: "15 min",
        order: 1,
        description: "Videogame checkpoint ဥပမာနှင့်အတူ modern engineering မှာ Git ဘာကြောင့် လိုအပ်လဲဆိုတာကို ရှင်းပြထားပါတယ်။",
      },
      {
        slug: "02-installing-git",
        title: "Git ကို Install လုပ်ခြင်းနှင့် ပထမဆုံး Setup",
        duration: "15 min",
        order: 2,
        description: "OS ပလက်ဖောင်းအမျိုးမျိုးမှာ Git ကို install လုပ်ခြင်းနှင့် user name, email, default branch တို့ကို configure လုပ်ခြင်း။",
      },
      {
        slug: "03-basic-git-workflow",
        title: "အခြေခံ Git Workflow (init, add, commit)",
        duration: "25 min",
        order: 3,
        description: "3-state lifecycle ကို ကျွမ်းကျင်အောင် လုပ်ပါ: Working Directory, Staging Area နှင့် Local Repository။",
      },
      {
        slug: "04-branching-and-merging",
        title: "Branching နှင့် Merging ပြုလုပ်ခြင်း",
        duration: "30 min",
        order: 4,
        description: "Development အတွက် parallel tracks တွေ ဖန်တီးခြင်းနှင့် fast-forward သို့မဟုတ် merge commits တွေနဲ့ ပြန်ပေါင်းခြင်း။",
      },
      {
        slug: "05-remote-repositories",
        title: "Remote Repositories နှင့် GitHub",
        duration: "25 min",
        order: 5,
        description: "SSH မှတစ်ဆင့် သင့်ရဲ့ local Git repository ကို GitHub နဲ့ ချိတ်ဆက်ပြီး push/pull လုပ်ခြင်း။",
      },
      {
        slug: "06-pull-requests",
        title: "Pull Requests နှင့် Code Review",
        duration: "25 min",
        order: 6,
        description: "Changes များကို တင်ပြခြင်း၊ code reviews လုပ်ခြင်း၊ တောင်းဆိုထားသည်များကို ပြင်ဆင်ခြင်းနှင့် PRs များကို လုံခြုံစွာ merge လုပ်ခြင်း။",
      },
      {
        slug: "07-git-best-practices",
        title: "Git Best Practices နှင့် .gitignore",
        duration: "20 min",
        order: 7,
        description: "Conventional commits တွေရေးသားခြင်း၊ .gitignore configure လုပ်ခြင်း၊ git stash သုံးခြင်းနှင့် ရှုပ်ထွေးနေသော history ကို ရှောင်ရှားခြင်း။",
      },
      {
        slug: "08-real-world-workflow",
        title: "လက်တွေ့သုံး Git Workflow (Git Flow & Trunk-Based)",
        duration: "25 min",
        order: 8,
        description: "Git Flow နဲ့ Trunk-Based workflows များကို နှိုင်းယှဉ်လေ့လာပြီး production မှာ release branching လုပ်ပုံကို နားလည်ပါ။",
      },
    ],
    featured: true,
    order: 1,
    hasFullContent: true,
  },
  {
    slug: "github-actions",
    title: "GitHub Actions Automation",
    description:
      "Git events တွေကြောင့် တိုက်ရိုက် trigger ဖြစ်လာတဲ့ testing, linting, building, Docker container publishing နဲ့ deployment workflows များကို အလိုအလျောက် ဖြစ်အောင် လုပ်ဆောင်ပါ။",
    longDescription:
      "GitHub Actions ဟა GitHub မှာ တခါတည်း ပါဝင်လာတဲ့ industry-standard CI/CD platform တစ်ခု ဖြစ်ပါတယ်။ ဒီသင်တန်းမှာတော့ declarative YAML workflows တွေကို ဘطورရေးရမယ်၊ pull requests တွေ သို့မဟုတ် tags တွေမှာ automation ကို ဘطور trigger လုပ်ရမယ်၊ matrix builds တွေကို configure လုပ်ရမယ်၊ sensitive secrets များကို လုံခြုံအောင်ထားရမယ်၊ ultra-fast runs တွေအတွက် dependencies တွေကို cache လုပ်ရမယ်နဲ့ applications များကို automatic deploy လုပ်ရမယ်ဆိုတာတွေကို သင်ယူရမှာပါ။",
    level: "Beginner",
    duration: "4 hours",
    lessonCount: 8,
    icon: "Zap",
    color: "from-indigo-500 to-violet-600",
    tags: ["CI/CD", "Automation", "GitHub Actions", "Workflows", "YAML"],
    prerequisites: ["linux-command-line", "git-github"],
    learningObjectives: [
      "CI/CD core concepts နဲ့ automation economics များကို နားလည်ခြင်း",
      "သန့်ရှင်းပြီး error မရှိတဲ့ GitHub Actions workflow YAML files များကို ရေးသားခြင်း",
      "Triggers အများအပြားကို configure လုပ်ခြင်း: push, pull_request, schedule cron, နှင့် manual dispatch",
      "needs dependencies များကို သုံးပြီး parallel နဲ့ sequential jobs များကို စီမံခန့်ခွဲခြင်း",
      "Secrets, credentials နဲ့ environment variables များကို လုံခြုံစွာ စီမံခန့်ခွဲခြင်း",
      "node_modules အတွက် caching ပါဝင်တဲ့ complete automated test နဲ့ lint pipeline တစ်ခုကို တည်ဆောက်ခြင်း",
      "Docker image တည်ဆောက်ခြင်းနဲ့ container registries တွေဆီ push တင်ခြင်းတို့ကို အလိုအလျောက် လုပ်ဆောင်ခြင်း",
      "Manual approval protection rules တွေပါတဲ့ release environments များကို ဖော်ဆောင်ခြင်း",
    ],
    lessons: [
      {
        slug: "01-what-is-cicd",
        title: "CI/CD ဆိုတာ ဘာလဲ",
        duration: "20 min",
        order: 1,
        description: "Continuous Integration နဲ့ Continuous Delivery/Deployment တို့ကို factory line ဥပမာတွေနဲ့ ရှင်းပြထားပါတယ်။",
      },
      {
        slug: "02-github-actions-intro",
        title: "GitHub Actions မိတ်ဆက်",
        duration: "20 min",
        order: 2,
        description: "Workflows၊ runners၊ jobs၊ steps နဲ့ community marketplace actions များကို ခွဲခြမ်းစိတ်ဖြာလေ့လာပါ။",
      },
      {
        slug: "03-workflow-syntax",
        title: "Workflow YAML Syntax ကို လေ့လာခြင်း",
        duration: "30 min",
        order: 3,
        description: "အရေးကြီးတဲ့ YAML keys အားလုံးကို ကျွမ်းကျင်အောင် လုပ်ပါ: name, on, jobs, runs-on, steps, uses, run, နှင့် with။",
      },
      {
        slug: "04-triggers-and-events",
        title: "Triggers, Filters နှင့် Events များ",
        duration: "25 min",
        order: 4,
        description: "Push၊ pull_request၊ path filters (src/**)၊ cron schedules နဲ့ inputs တွေမှာ pipelines များကို trigger လုပ်ပါ။",
      },
      {
        slug: "05-jobs-and-steps",
        title: "Jobs, Steps, Dependencies နှင့် Matrix Builds များ",
        duration: "30 min",
        order: 5,
        description: "Jobs များကို တပြိုင်နက်တည်း run ခြင်း၊ needs နဲ့ အစဉ်လိုက်ချိတ်ဆက်ခြင်းနှင့် Node/OS version များစွာမှာ test လုပ်ခြင်း။",
      },
      {
        slug: "06-environment-variables",
        title: "Secrets, Variables နှင့် Contexts များ",
        duration: "25 min",
        order: 6,
        description: "GitHub Secrets၊ repository variables၊ GITHUB_SHA contexts များကို ထည့်သွင်းခြင်းနှင့် sensitive tokens များကို ဖုံးကွယ်ခြင်း။",
      },
      {
        slug: "07-build-test-workflow",
        title: "Build & Test Workflow တစ်ခု တည်ဆောက်ခြင်း",
        duration: "35 min",
        order: 7,
        description: "အဆင့်ဆင့်လုပ်ဆောင်ရန်: checkout, setup Node.js, cache dependencies, run ESLint, နှင့် execute test suites။",
      },
      {
        slug: "08-deploy-workflow",
        title: "Continuous Deployment Pipeline",
        duration: "35 min",
        order: 8,
        description: "GitHub Pages ဆီသို့ static site deployment အလိုအလျောက်လုပ်ခြင်းနှင့် SSH ဖြင့် server deployments များ လုပ်ဆောင်ခြင်း။",
      },
    ],
    featured: true,
    order: 2,
    hasFullContent: true,
  },
  {
    slug: "cicd-concepts",
    title: "CI/CD Pipeline Concepts & Architecture",
    description:
      "Pipeline architectures, artifacts, build agents, automated testing pyramids, zero-downtime strategies နဲ့ canary rollouts များကို အသေးစိတ် လေ့လာပါ။",
    longDescription:
      "Automation တွေကို မချဲ့ထွင်ခင်မှာ DevOps engineer တိုင်းဟာ ခိုင်မာတဲ့ CI/CD systems တွေရဲ့ နောက်ကွယ်က core architectural patterns တွေကို နားလည်ထားရပါမယ်: artifact registries, ephemeral test environments, blue-green deployments, canary rollouts, နဲ့ disaster recovery rollback strategies စတာတွေ ဖြစ်ပါတယ်။",
    level: "Intermediate",
    duration: "3 hours",
    lessonCount: 6,
    icon: "Workflow",
    color: "from-blue-500 to-cyan-600",
    tags: ["CI/CD", "Architecture", "Deployment", "BestPractices"],
    prerequisites: ["github-actions"],
    learningObjectives: [
      "Test pyramid (Unit, Integration, E2E) နဲ့ automated gatekeeping များကို ကျွမ်းကျင်ပိုင်နိုင်ခြင်း",
      "Immutable artifacts တွေ တည်ဆောက်ခြင်းနဲ့ provenance ကို နားလည်ခြင်း",
      "Blue-Green, Rolling, နှင့် Canary deployment strategies များကို နှိုင်းယှဉ်လေ့လာခြင်း",
      "Automated rollback နဲ့ synthetic health checks များကို အကောင်အထည်ဖော်ခြင်း",
    ],
    lessons: [
      { slug: "01-pipeline-stages", title: "ခေတ်မီ Pipeline တစ်ခုရဲ့ အစိတ်အပိုင်းများ", duration: "25 min", order: 1 },
      { slug: "02-artifact-management", title: "Artifacts, Registries & Immutability", duration: "25 min", order: 2 },
      { slug: "03-testing-gates", title: "Automated Quality Gates & Security Scans", duration: "30 min", order: 3 },
      { slug: "04-deployment-strategies", title: "Blue-Green, Canary & Rolling Updates", duration: "35 min", order: 4 },
      { slug: "05-observability-in-cicd", title: "Pipeline Metrics, MTTR & DORA Metrics", duration: "25 min", order: 5 },
      { slug: "06-disaster-recovery", title: "Rollback Strategies & Incident Automation", duration: "30 min", order: 6 },
    ],
    featured: false,
    order: 3,
    hasFullContent: true,
  },
  {
    slug: "docker-fundamentals",
    title: "Docker & Container Fundamentals",
    description:
      "Applications များကို ပေါ့ပါးပြီး ပြန်လည်အသုံးပြုနိုင်သော containers တွေအဖြစ် ပုံဖော်ပါ။ Dockerfile instructions, layer caching, image optimization နဲ့ volume mounts များကို ကျွမ်းကျင်အောင် လုပ်ပါ။",
    longDescription:
      "Containers တွေဟာ 'ကျွန်တော့်စက်ထဲမှာတော့ အလုပ်လုပ်တယ်' ဆိုတဲ့ ဂန္ထဝင်ပြဿနာကို အပြီးတိုင် ဖြေရှင်းပေးခဲ့ပါတယ်။ ဒီသင်တန်းမှာတော့ container virtualization နဲ့ VMs တွေရဲ့ ကွာခြားချက်၊ production-ready ဖြစ်တဲ့ multi-stage Dockerfiles တွေ ရေးသားခြင်း၊ container attack surfaces များကို လျှော့ချခြင်း၊ volumes တွေနဲ့ data စီမံခန့်ခွဲခြင်းနဲ့ custom networks တွေနဲ့ containers တွေ ချိတ်ဆက်ခြင်းတို့ကို လေ့လာရမှာပါ။",
    level: "Intermediate",
    duration: "5 hours",
    lessonCount: 10,
    icon: "Box",
    color: "from-sky-500 to-blue-600",
    tags: ["Docker", "Containers", "DevOps", "Images", "Virtualization"],
    prerequisites: ["linux-command-line", "git-github"],
    learningObjectives: [
      "Container architecture ကို နားလည်ခြင်း: namespaces, cgroups, နှင့် container runtimes",
      "Image سizes များကို 80%+ လျှော့ချပေးနိုင်သော multi-stage Dockerfiles များကို ရေးသားခြင်း",
      "Docker Volumes နှင့် Bind Mounts များကို သုံးပြီး database နဲ့ application storage များကို ထိန်းသိမ်းခြင်း",
      "Isolated containers များကို bridge နဲ့ overlay networks များဖြင့် ချိတ်ဆက်ခြင်း",
    ],
    lessons: [
      { slug: "01-containers-vs-vms", title: "Containers နှင့် Virtual Machines နှိုင်းယှဉ်ချက်", duration: "25 min", order: 1 },
      { slug: "02-docker-architecture", title: "Docker Engine, Daemon & Registry Architecture", duration: "25 min", order: 2 },
      { slug: "03-running-first-container", title: "ပထမဆုံး Container ကို Run ခြင်း (docker run, exec, logs)", duration: "30 min", order: 3 },
      { slug: "04-writing-dockerfiles", title: "သန့်ရှင်းသော Dockerfiles ရေးသားခြင်း (FROM, RUN, COPY, CMD)", duration: "35 min", order: 4 },
      { slug: "05-layer-caching", title: "Docker Layer Caching & Build Optimization", duration: "30 min", order: 5 },
      { slug: "06-multi-stage-builds", title: "Production Images သေးငယ်စေရန် Multi-Stage Builds အသုံးပြုခြင်း", duration: "35 min", order: 6 },
      { slug: "07-volumes-and-storage", title: "Volumes, Bind Mounts & Persistent Data", duration: "30 min", order: 7 },
      { slug: "08-container-networking", title: "Container Networking & Port Forwarding", duration: "30 min", order: 8 },
      { slug: "09-docker-hub-registries", title: "Docker Hub & GitHub GHCR သို့ Images များ Push တင်ခြင်း", duration: "25 min", order: 9 },
      { slug: "10-security-best-practices", title: "Non-Root Users, Scanning & Container Hardening", duration: "30 min", order: 10 },
    ],
    featured: true,
    order: 4,
    hasFullContent: true,
  },
  {
    slug: "docker-compose",
    title: "Docker Compose & Multi-Container Apps",
    description:
      "Declarative YAML configuration files များကို သုံးပြီး multi-tier web applications များကို (Next.js, Node.js API, PostgreSQL, Redis) စီမံခန့်ခွဲပါ။",
    longDescription:
      "လက်တွေ့ application တွေမှာ အချင်းချင်းချိတ်ဆက်နေတဲ့ services တွေ အများကြီးပါဝင်ပါတယ်: frontend, backend API, database နဲ့ in-memory cache စတာတွေပါ။ Docker Compose ကတော့ application stacks တစ်ခုလုံးကို command တစ်ခုတည်းနဲ့ define လုပ်ဖို့၊ start လုပ်ဖို့နဲ့ network ချိတ်ဆက်ဖို့ ခွင့်ပြုပါတယ်။",
    level: "Intermediate",
    duration: "3 hours",
    lessonCount: 6,
    icon: "Layers",
    color: "from-cyan-500 to-teal-600",
    tags: ["Docker Compose", "Multi-Tier", "Databases", "Networking"],
    prerequisites: ["docker-fundamentals"],
    learningObjectives: [
      "Environment variables နဲ့ healthchecks တွေပါတဲ့ multi-service docker-compose.yml files များကို ရေးသားခြင်း",
      "Frontends, APIs, နှင့် databases များကို ချောမွေ့စွာ network ချိတ်ဆက်ခြင်း",
      "Compose မှာ secrets နဲ့ database initialization scripts များကို စီမံခန့်ခွဲခြင်း",
    ],
    lessons: [
      { slug: "01-why-docker-compose", title: "Docker Compose ဘာကြောင့် သုံးတာလဲ", duration: "20 min", order: 1 },
      { slug: "02-compose-file-structure", title: "Compose YAML Specification (services, networks, volumes)", duration: "30 min", order: 2 },
      { slug: "03-building-fullstack-app", title: "Web App + Postgres + Redis ကို စတင်လည်ပတ်ခြင်း", duration: "40 min", order: 3 },
      { slug: "04-environment-variables", title: "Environment Configuration & .env Files", duration: "25 min", order: 4 },
      { slug: "05-service-dependencies", title: "Healthchecks နှင့် depends_on Conditions", duration: "30 min", order: 5 },
      { slug: "06-compose-production", title: "Development နှင့် Production မှာ Docker Compose အသုံးပြုပုံ", duration: "25 min", order: 6 },
    ],
    featured: false,
    order: 5,
    hasFullContent: true,
  },
  {
    slug: "kubernetes-basics",
    title: "Kubernetes (K8s) Basics",
    description:
      "Enterprise container orchestrator ကို စတင်လေ့လာပါ: Pods, Deployments, Services, ConfigMaps, Ingress နှင့် self-healing systems များ။",
    longDescription:
      "Kubernetes ဟာ ကမ္ဘာ့အဆင့်မီ ပမာဏကြီးမားတဲ့ containerized applications များကို deployment လုပ်ခြင်း၊ scaling လုပ်ခြင်းနဲ့ စီမံခန့်ခွဲခြင်းတို့ကို အလိုအလျောက် လုပ်ဆောင်ပေးပါတယ်။ ဒီသင်တန်းမှာ K8s architecture ထဲကို ဝင်ရောက်လေ့လာရမှာပါ: Control Plane components, Worker Nodes, Pod lifecycles, declarative YAML manifests, နှင့် cluster service discovery စတာတွေ ပါဝင်ပါတယ်။",
    level: "Intermediate",
    duration: "6 hours",
    lessonCount: 12,
    icon: "Compass",
    color: "from-blue-600 to-indigo-700",
    tags: ["Kubernetes", "K8s", "Orchestration", "CloudNative", "Pods"],
    prerequisites: ["docker-fundamentals", "docker-compose"],
    learningObjectives: [
      "Control Plane (API Server, etcd, Scheduler) နှင့် Worker Node (kubelet, kube-proxy) architecture ကို နားလည်ခြင်း",
      "Pods, ReplicaSets, နှင့် Deployments တွေအတွက် declarative manifests များကို ရေးသားခြင်းနှင့် apply လုပ်ခြင်း",
      "ClusterIP, NodePort, နှင့် LoadBalancer Services များကို သုံးပြီး workloads များကို ချိတ်ဆက်ပေးခြင်း",
      "ConfigMaps နှင့် K8s Secrets များကို သုံးပြီး application configurations များကို စီမံခန့်ခွဲခြင်း",
    ],
    lessons: [
      { slug: "01-why-kubernetes", title: "Kubernetes ဘာကြောင့် သုံးတာလဲ - Orchestration ရှင်းလင်းချက်", duration: "25 min", order: 1 },
      { slug: "02-k8s-architecture", title: "Control Plane & Worker Node Architecture", duration: "30 min", order: 2 },
      { slug: "03-kubectl-cli", title: "kubectl CLI: Commands, Contexts & Namespaces", duration: "30 min", order: 3 },
      { slug: "04-pods", title: "Pods ကို နားလည်ခြင်း: အသေးငယ်ဆုံး Deploy လုပ်နိုင်သော ယူနစ်", duration: "25 min", order: 4 },
      { slug: "05-deployments-replicasets", title: "Deployments & ReplicaSets: Self-Healing & Scaling", duration: "35 min", order: 5 },
      { slug: "06-services-networking", title: "Services & Networking: ClusterIP, NodePort, LoadBalancer", duration: "35 min", order: 6 },
      { slug: "07-configmaps-secrets", title: "ConfigMaps & Secrets: Configurations များကို ခွဲထုတ်ခြင်း", duration: "30 min", order: 7 },
      { slug: "08-ingress-controllers", title: "Ingress Controllers နှင့် HTTP Traffic Routing", duration: "35 min", order: 8 },
      { slug: "09-resource-limits", title: "CPU & Memory Resource Requests and Limits", duration: "25 min", order: 9 },
      { slug: "10-liveness-readiness", title: "Liveness, Readiness & Startup Health Probes", duration: "30 min", order: 10 },
      { slug: "11-storage-pv-pvc", title: "Persistent Volumes (PV) နှင့် PVC Claims", duration: "35 min", order: 11 },
      { slug: "12-rolling-updates", title: "Zero-Downtime Rolling Updates & Rollbacks", duration: "30 min", order: 12 },
    ],
    featured: true,
    order: 6,
    hasFullContent: true,
  },
  {
    slug: "k3s",
    title: "K3s: Lightweight Kubernetes",
    description:
      "Single VPS nodes, edge devices, local development နဲ့ small production clusters တွေမှာ ပေါ့ပါးပြီး fully compliant ဖြစ်တဲ့ Kubernetes ကို run ပါ။",
    longDescription:
      "K3s ဟာ Rancher ရဲ့ ဖန်တီးထားတဲ့ certified ဖြစ်ပြီး ပေါ့ပါးသွက်လက်တဲ့ Kubernetes distribution တစ်ခု ဖြစ်ပါတယ်။ ရှေးဟောင်း cloud providers တွေကို ဖြုတ်ထုတ်ထားပြီး <70MB binary တစ်ခုတည်းနဲ့ ပါဝင်လာတဲ့အတွက် လေ့လာဖို့၊ VPS servers တွေအတွက်၊ home labs နဲ့ edge deployments တွေအတွက် အကောင်းဆုံး Kubernetes platform ဖြစ်ပါတယ်။",
    level: "Intermediate",
    duration: "4 hours",
    lessonCount: 8,
    icon: "Cpu",
    color: "from-yellow-500 to-amber-600",
    tags: ["K3s", "Rancher", "EdgeK8s", "Lightweight", "VPS"],
    prerequisites: ["linux-command-line", "kubernetes-basics"],
    learningObjectives: [
      "Single Linux server ပေါ်မှာ K3s ကို စက္ကန့် ၃၀ အတွင်း install လုပ်ခြင်း",
      "K3s ထဲက embedded SQLite နဲ့ etcd storage engines များကို နားလည်ခြင်း",
      "K3s မှာ တပါတည်းပါလာတဲ့ Traefik ingress ကို သုံးပြီး containerized applications များကို deploy လုပ်ခြင်း",
      "cert-manager နဲ့ Let's Encrypt တို့ကို သုံးပြီး TLS certificates များကို အလိုအလျောက် စီမံခန့်ခွဲခြင်း",
    ],
    lessons: [
      { slug: "01-what-is-k3s", title: "K3s ဆိုတာ ဘာလဲ နှင့် ဘာကြောင့် သုံးသင့်တာလဲ", duration: "25 min", order: 1 },
      { slug: "02-installing-k3s", title: "Linux / VPS ပေါ်မှာ Command တစ်ခုတည်းနဲ့ K3s Install လုပ်ခြင်း", duration: "25 min", order: 2 },
      { slug: "03-traefik-ingress", title: "Built-In Traefik Ingress Controller", duration: "30 min", order: 3 },
      { slug: "04-deploying-apps-k3s", title: "K3s သို့ Full-Stack Applications များကို Deploy လုပ်ခြင်း", duration: "35 min", order: 4 },
      { slug: "05-cert-manager-tls", title: "cert-manager & Let's Encrypt ဖြင့် Automatic HTTPS ပြုလုပ်ခြင်း", duration: "35 min", order: 5 },
      { slug: "06-multi-node-cluster", title: "Multi-Node Cluster တစ်ခုဖြစ်လာစေရန် Worker Nodes များကို ပေါင်းထည့်ခြင်း", duration: "30 min", order: 6 },
      { slug: "07-k3s-backup-restore", title: "Backups, Snapshots & Disaster Recovery", duration: "30 min", order: 7 },
      { slug: "08-monitoring-k3s", title: "Prometheus နှင့် Grafana ဖြင့် Cluster Monitoring ပြုလုပ်ခြင်း", duration: "35 min", order: 8 },
    ],
    featured: false,
    order: 7,
    hasFullContent: true,
  },
  {
    slug: "terraform-iac",
    title: "Terraform & Infrastructure as Code (IaC)",
    description:
      "Declarative infrastructure automation ကို ကျွမ်းကျင်အောင် လုပ်ပါ: HCL syntax, providers, state locking, reusable modules, multi-environment setups, နှင့် CI/CD plan/apply workflows။",
    longDescription:
      "ခေတ်မီ cloud infrastructure တွေကို web consoles တွေကနေ manual လုပ်လို့ မရတော့ပါဘူး။ Terraform နဲ့ Infrastructure as Code (IaC) က အလိုအလျောက်၊ version-controlled ဖြစ်ပြီး ပြန်လည်အသုံးပြုလို့ရတဲ့ cloud architectures များကို ဖန်တီးပေးပါတယ်။ ဒီသင်တန်းမှာ HashiCorp Configuration Language (HCL) ကို သင်ယူရမှာဖြစ်ပြီး remote backends တွေနဲ့ state ကို လုံခြုံစွာ စီမံခန့်ခွဲခြင်း၊ modular code ရေးသားခြင်း၊ configuration drift များကို ကိုင်တွယ်ခြင်းနဲ့ deployment pipelines များကို automation လုပ်ခြင်းတို့ကို သင်ယူရမှာပါ။",
    level: "Intermediate",
    duration: "4.5 hours",
    lessonCount: 8,
    icon: "Boxes",
    color: "from-purple-600 to-indigo-600",
    tags: ["Terraform", "IaC", "Cloud", "HCL", "Automation"],
    prerequisites: ["linux-command-line", "git-github"],
    learningObjectives: [
      "Infrastructure as Code ရဲ့ အကျိုးကျေးဇူးများနှင့် declarative resource management ကို နားလည်ခြင်း",
      "Variables, outputs, နှင့် locals တွေပါတဲ့ HashiCorp Configuration Language (HCL) ကို သန့်ရှင်းစွာ ရေးသားခြင်း",
      "Cloud နဲ့ local hypervisors တွေအတွက် providers များကို configure လုပ်ခြင်း",
      "AWS S3 နဲ့ DynamoDB state locking ကို သုံးပြီး remote state ကို လုံခြုံစွာ စီမံခန့်ခွဲခြင်း",
      "Inputs နဲ့ validation တွေပါတဲ့ ထိန်းသိမ်းရလွယ်ကူပြီး ပြန်သုံးလို့ရတဲ့ infrastructure modules များကို တည်ဆောက်ခြင်း",
      "terraform refresh နဲ့ import တို့ကို သုံးပြီး infrastructure drift များကို ရှာဖွေခြင်းနှင့် ဖြေရှင်းခြင်း",
      "GitHub Actions CI/CD workflows တွေထဲမှာ terraform plan & apply ကို automation လုပ်ခြင်း",
    ],
    lessons: [
      { slug: "01-what-is-iac", title: "Infrastructure as Code ဘာကြောင့် လိုအပ်တာလဲ & Terraform Architecture", duration: "25 min", order: 1 },
      { slug: "02-hcl-syntax-providers", title: "HCL Syntax, Providers & Core Resource Blocks", duration: "30 min", order: 2 },
      { slug: "03-variables-outputs", title: "Input Variables, Locals & Output Values", duration: "30 min", order: 3 },
      { slug: "04-state-management", title: "Terraform State, Remote S3 Backend & State Locking", duration: "35 min", order: 4 },
      { slug: "05-reusable-modules", title: "Production-Grade ရနိုင်သော ပြန်သုံးလို့ရသည့် Infrastructure Modules တည်ဆောက်ခြင်း", duration: "35 min", order: 5 },
      { slug: "06-environments-workspaces", title: "Multi-Environment Stacks (Dev/Staging/Prod) & Workspaces", duration: "30 min", order: 6 },
      { slug: "07-drift-and-import", title: "Drift Detection, State Refresh, and Importing Resources", duration: "35 min", order: 7 },
      { slug: "08-automated-iac-pipeline", title: "GitHub Actions ထဲတွင် Terraform Plan & Apply ကို Automation လုပ်ခြင်း", duration: "40 min", order: 8 },
    ],
    featured: true,
    order: 8,
    hasFullContent: true,
  },
  {
    slug: "monitoring-observability",
    title: "Prometheus, Grafana & Cloud Observability",
    description:
      "Production visibility ကို တည်ဆောက်ပါ: The 3 pillars of observability (metrics, logs, traces), PromQL queries, Node Exporter, Grafana dashboards, Loki log aggregation, နှင့် Alertmanager။",
    longDescription:
      "မမြင်ရတဲ့ ပြဿနာကို ဘယ်တော့မှ ဖြေရှင်းလို့ မရပါဘူး။ ခေတ်မီ distributed systems တွေအတွက် full-stack observability လိုအပ်ပါတယ်။ ဒီသင်တန်းမှာ Prometheus metrics collection နဲ့ PromQL query language ကို ကျွမ်းကျင်အောင်လုပ်ခြင်း၊ Grafana မှာ executive & engineer dashboards တွေ တည်ဆောက်ခြင်း၊ Promtail နဲ့ Loki သုံးပြီး container logs တွေကို စုစည်းခြင်းနဲ့ Alertmanager နဲ့ alert routes တွေကို configure လုပ်ခြင်းတို့ကို သင်ယူရမှာပါ။",
    level: "Intermediate",
    duration: "4.5 hours",
    lessonCount: 8,
    icon: "LineChart",
    color: "from-orange-500 to-rose-600",
    tags: ["Prometheus", "Grafana", "Loki", "Observability", "PromQL"],
    prerequisites: ["linux-command-line", "docker-fundamentals"],
    learningObjectives: [
      "Observability ရဲ့ 3 pillars များကို နားလည်ခြင်း: Metrics, Logs, နှင့် Distributed Traces",
      "Prometheus server scraping targets နဲ့ exporters များကို deploy လုပ်ခြင်းနှင့် configure လုပ်ခြင်း",
      "CPU, memory, error rates, နှင့် 99th percentiles တွေအတွက် လက်တွေ့သုံး PromQL expressions များကို ရေးသားခြင်း",
      "Grafana မှာ auto-refresh နဲ့ variables တွေပါတဲ့ interactive dashboards များကို တည်ဆောက်ခြင်း",
      "Grafana Loki နဲ့ Promtail ကို သုံးပြီး container နဲ့ system logs များကို စုစည်းခြင်း",
      "Alertmanager routing, deduplication, နှင့် Slack/Discord notifications များကို configure လုပ်ခြင်း",
      "Distributed tracing concepts နှင့် OpenTelemetry instrumentation များကို နားလည်ခြင်း",
    ],
    lessons: [
      { slug: "01-observability-pillars", title: "Observability ရဲ့ 3 Pillars (Metrics, Logs, Traces)", duration: "25 min", order: 1 },
      { slug: "02-prometheus-architecture", title: "Prometheus Architecture, Scraping & Time-Series DB", duration: "30 min", order: 2 },
      { slug: "03-promql-mastery", title: "PromQL ကျွမ်းကျင်ပိုင်နိုင်ခြင်း: Rates, Histograms, and Quantiles", duration: "35 min", order: 3 },
      { slug: "04-node-exporter-cAdvisor", title: "System & Container Exporters (Node Exporter, cAdvisor)", duration: "30 min", order: 4 },
      { slug: "05-grafana-dashboards", title: "Grafana တွင် Impact ကြီးမားသော Dashboards များ ဒီဇိုင်းဆွဲခြင်း", duration: "35 min", order: 5 },
      { slug: "06-loki-log-aggregation", title: "Loki & Promtail ဖြင့် Centralized Container Logging ပြုလုပ်ခြင်း", duration: "35 min", order: 6 },
      { slug: "07-alertmanager-alerts", title: "Alertmanager: Alert Rules, Deduplication & Slack Routing", duration: "35 min", order: 7 },
      { slug: "08-opentelemetry-tracing", title: "OpenTelemetry ဖြင့် Distributed Tracing အခြေခံများ", duration: "35 min", order: 8 },
    ],
    featured: true,
    order: 9,
    hasFullContent: true,
  },
  {
    slug: "devsecops-hardening",
    title: "DevSecOps & Cloud Security Hardening",
    description:
      "လုံခြုံရေးကို အဆင့်တိုင်းမှာ ထည့်သွင်းပါ: Shift-left static analysis, Trivy ဖြင့် container image vulnerability scanning, Cosign ဖြင့် image signing, secret management, နှင့် K8s security။",
    longDescription:
      "လုံခြုံရေးဆိုတာ နောက်မှ စဉ်းစားရမယ့်အရာ သို့မဟုတ် အတားအဆီးတစ်ခု မဟုတ်ပါဘူး — ဒါဟာ automated quality gate တစ်ခု ဖြစ်ပါတယ်။ ဒီသင်တန်းမှာ DevSecOps ကျင့်စဉ်များကို ကျွမ်းကျင်အောင်လုပ်ပါမယ်: CI/CD မှာ code ထဲက vulnerabilities နဲ့ leaked credentials များကို scan လုပ်ခြင်း၊ Trivy နဲ့ container base images များကို scan လုပ်ခြင်း၊ Sigstore Cosign နဲ့ immutable container artifacts များကို sign လုပ်ခြင်း၊ HashiCorp Vault နဲ့ secrets များကို စီမံခန့်ခွဲခြင်းနဲ့ RBAC နဲ့ NetworkPolicies များကို သုံးပြီး Kubernetes ကို hardening လုပ်ခြင်းတို့ ပါဝင်ပါတယ်။",
    level: "Intermediate",
    duration: "4.5 hours",
    lessonCount: 8,
    icon: "ShieldAlert",
    color: "from-rose-500 to-red-700",
    tags: ["DevSecOps", "Security", "Trivy", "Cosign", "Hardening"],
    prerequisites: ["linux-command-line", "github-actions", "docker-fundamentals"],
    learningObjectives: [
      "Shift-Left security principles နဲ့ DevSecOps lifecycle ကို နားလည်ခြင်း",
      "CI/CD pipelines တွေမှာ automated SAST နဲ့ secret leak detection (Gitleaks, Semgrep) များကို run ခြင်း",
      "Trivy ဖြင့် container images များကို CVE vulnerabilities အတွက် scan လုပ်ခြင်းနှင့် critical flaws တွေတွေ့ရင် build ကို ရပ်တန့်ခြင်း",
      "Sigstore Cosign ကို သုံးပြီး container images များကို ឌီဂျစ်တယ်စနစ်ဖြင့် sign လုပ်ခြင်းနှင့် စစ်ဆေးခြင်း",
      "Hardcoding လုပ်စရာမလိုဘဲ secrets များကို လုံခြုံစွာ သိမ်းဆည်းခြင်းနှင့် ထည့်သွင်းခြင်း",
      "Linux servers များကို hardening လုပ်ခြင်း: non-root users, SSH key authentication, နှင့် UFW firewall rules",
      "Kubernetes မှာ RBAC, ServiceAccounts & NetworkPolicies များကို သုံးပြီး အနည်းဆုံး လုပ်ပိုင်ခွင့် (least-privilege) ပေးခြင်း",
    ],
    lessons: [
      { slug: "01-shift-left-security", title: "Shift-Left Security & DevSecOps Mindset", duration: "25 min", order: 1 },
      { slug: "02-static-analysis-sast", title: "CI/CD ထဲတွင် Automated SAST & Secret Leak Scanning ပြုလုပ်ခြင်း", duration: "30 min", order: 2 },
      { slug: "03-vulnerability-scanning-trivy", title: "Trivy ဖြင့် Container & Filesystem CVE Scanning ပြုလုပ်ခြင်း", duration: "35 min", order: 3 },
      { slug: "04-container-signing-cosign", title: "Supply Chain Security: Cosign ဖြင့် Images များကို Sign လုပ်ခြင်း", duration: "35 min", order: 4 },
      { slug: "05-secret-management", title: "HashiCorp Vault & Sealed Secrets ဖြင့် Secret Management", duration: "35 min", order: 5 },
      { slug: "06-linux-hardening-ssh", title: "Linux Server Hardening, Firewalls & Non-Root Containers", duration: "35 min", order: 6 },
      { slug: "07-kubernetes-rbac-networkpolicies", title: "Kubernetes Security: RBAC, ServiceAccounts & NetworkPolicies", duration: "40 min", order: 7 },
      { slug: "08-runtime-security-falco", title: "Falco ဖြင့် Runtime Threat Detection & Auditing ပြုလုပ်ခြင်း", duration: "35 min", order: 8 },
    ],
    featured: true,
    order: 10,
    hasFullContent: true,
  },
  {
    slug: "gitops-argocd",
    title: "GitOps & Continuous Delivery with ArgoCD",
    description:
      "ခေတ်မီ declarative GitOps workflows များကို ကျင့်သုံးပါ: ArgoCD architecture, Application CRDs, automated repo syncing, Kustomize overlays, Helm charts, နှင့် progressive Canary delivery။",
    longDescription:
      "GitOps ဟာ Kubernetes delivery အတွက် Git ကို single source of truth အဖြစ် သတ်မှတ်တဲ့ ခေတ်မီရွှေစံနှုန်းတစ်ခု ဖြစ်ပါတယ်။ ဒီသင်တန်းမှာ ArgoCD ကို install လုပ်ခြင်းနဲ့ configure လုပ်ခြင်း၊ Custom Resource Definitions နဲ့ applications များကို declare လုပ်ခြင်း၊ Kustomize နဲ့ Helm တို့ကို သုံးပြီး multi-environment manifests များကို စီမံခန့်ခွဲခြင်း၊ automated drift detection နဲ့ self-healing ကို ဖော်ဆောင်ခြင်းနဲ့ Argo Rollouts နဲ့ progressive Canary rollouts များကို လုပ်ဆောင်ခြင်းတို့ကို သင်ယူရမှာပါ။",
    level: "Advanced",
    duration: "5 hours",
    lessonCount: 8,
    icon: "Boxes",
    color: "from-cyan-500 to-blue-600",
    tags: ["GitOps", "ArgoCD", "Kubernetes", "Kustomize", "ContinuousDelivery"],
    prerequisites: ["git-github", "kubernetes-basics", "k3s"],
    learningObjectives: [
      "GitOps core principles များကို နားလည်ခြင်း: Declarative state, version control, automated pull syncing",
      "Kubernetes မှာ ArgoCD ကို CLI နဲ့ Web UI access တွေနဲ့ deploy လုပ်ခြင်းနှင့် configure လုပ်ခြင်း",
      "Application နဲ့ ApplicationSet Custom Resource Definitions (CRDs) များကို သုံးပြီး applications များကို define လုပ်ခြင်း",
      "Kustomize overlays နဲ့ Helm parameters များကို သုံးပြီး environment overrides များကို သန့်ရှင်းစွာ စီမံခန့်ခွဲခြင်း",
      "Automated sync policies၊ deleted resources များကို pruning လုပ်ခြင်းနှင့် cluster self-healing ကို ဖွင့်ပေးခြင်း",
      "Argo Rollouts ဖြင့် zero-downtime Canary နဲ့ Blue-Green deployments များကို လုပ်ဆောင်ခြင်း",
    ],
    lessons: [
      { slug: "01-gitops-principles", title: "GitOps Core Principles & Declarative Continuous Delivery", duration: "25 min", order: 1 },
      { slug: "02-argocd-architecture", title: "ArgoCD Architecture, Installation & Web UI Tour", duration: "30 min", order: 2 },
      { slug: "03-declarative-apps-crd", title: "Declarative Applications: Application CRDs & Git Repos", duration: "35 min", order: 3 },
      { slug: "04-kustomize-helm-gitops", title: "Kustomize & Helm ဖြင့် Multi-Environment Manifests များကို စီမံခန့်ခွဲခြင်း", duration: "35 min", order: 4 },
      { slug: "05-sync-strategies-drift", title: "Sync Policies: Auto-Sync, Pruning & Self-Healing", duration: "35 min", order: 5 },
      { slug: "06-app-of-apps-pattern", title: "App-of-Apps Pattern & Multi-Cluster Deployments", duration: "35 min", order: 6 },
      { slug: "07-progressive-delivery-rollouts", title: "Argo Rollouts ဖြင့် Progressive Delivery (Canary & Blue-Green)", duration: "40 min", order: 7 },
      { slug: "08-production-gitops-workflow", title: "Production GitOps Architecture & Disaster Recovery", duration: "35 min", order: 8 },
    ],
    featured: true,
    order: 11,
    hasFullContent: true,
  },
  {
    slug: "cicd-project",
    title: "Full Real-World CI/CD Pipeline Project",
    description:
      "Capstone Project: Git + GitHub Actions + Docker + GHCR + K3s Kubernetes တို့ကို အလိုအလျောက် GitOps production deployment တစ်ခုအဖြစ် ပေါင်းစပ်ချိတ်ဆက်ပါ။",
    longDescription:
      "သင်လေ့လာခဲ့တဲ့ ကျွမ်းကျင်မှုအားလုံးကို end-to-end project တစ်ခုတည်းမှာ ပေါင်းစပ်အသုံးပြုပါ။ Next.js production web app တစ်ခုကို တည်ဆောက်ခြင်း၊ multi-stage Dockerfiles ရေးသားခြင်း၊ GitHub Actions CI/CD ကို configure လုပ်ပြီး images များကို GitHub Container Registry သို့ build လုပ်ပြီး push တင်ခြင်း၊ နှင့် live K3s cluster ပေါ်သို့ automated zero-downtime rollouts တွေနဲ့ လုံခြုံစွာ deploy လုပ်ခြင်းတို့ကို လုပ်ဆောင်ရမှာပါ။",
    level: "Advanced",
    duration: "6 hours",
    lessonCount: 10,
    icon: "Trophy",
    color: "from-emerald-500 to-indigo-600",
    tags: ["Capstone", "EndToEnd", "GitOps", "Production", "ZeroDowntime"],
    prerequisites: ["linux-command-line", "git-github", "github-actions", "docker-fundamentals", "k3s"],
    learningObjectives: [
      "ပြီးပြည့်စုံပြီး အလိုအလျောက်ဖြစ်နေသော end-to-end DevOps pipeline တစ်ခုကို အစကနေ တည်ဆောက်ခြင်း",
      "Image building၊ Trivy ဖြင့် scanning လုပ်ခြင်းနှင့် GHCR သို့ publish တင်ခြင်းတို့ကို အလိုအလျောက် လုပ်ဆောင်ခြင်း",
      "K3s Kubernetes clusters တွေဆီသို့ လုံခြုံတဲ့ SSH-less GitOps deployment ကို အကောင်အထည်ဖော်ခြင်း",
      "Automated smoke testing နဲ့ rolling update verifications များကို configure လုပ်ခြင်း",
    ],
    lessons: [
      { slug: "01-project-architecture", title: "Project Blueprint & System Architecture", duration: "30 min", order: 1 },
      { slug: "02-sample-app-setup", title: "Production Next.js + DB App ကို Setup လုပ်ခြင်း", duration: "35 min", order: 2 },
      { slug: "03-optimized-dockerfile", title: "Hardened Multi-Stage Dockerfile ကို ရေးသားခြင်း", duration: "35 min", order: 3 },
      { slug: "04-github-actions-ci", title: "Automated CI Pipeline ကို Configure လုပ်ခြင်း (Lint, Test, Security)", duration: "40 min", order: 4 },
      { slug: "05-registry-publish", title: "GitHub Container Registry (GHCR) သို့ Images များ Build လုပ်ပြီး Push တင်ခြင်း", duration: "30 min", order: 5 },
      { slug: "06-provisioning-k3s", title: "Production K3s Server ကို Provisioning လုပ်ခြင်း", duration: "40 min", order: 6 },
      { slug: "07-k8s-manifests", title: "Production Kubernetes Manifests များကို ရေးသားခြင်း", duration: "45 min", order: 7 },
      { slug: "08-cd-automation", title: "GitHub Actions ဖြင့် K3s သို့ CD Deployments များကို Automation လုပ်ခြင်း", duration: "45 min", order: 8 },
      { slug: "09-domain-and-ssl", title: "Custom Domain, DNS & Free Automated SSL", duration: "30 min", order: 9 },
      { slug: "10-monitoring-celebration", title: "Monitoring, Health Alerts & Project ပြီးဆုံးခြင်း", duration: "30 min", order: 10 },
    ],
    featured: true,
    order: 12,
    hasFullContent: true,
  },
];

export function getAllCourses(lang?: string): Course[] {
  const sourceCourses = lang === "my" && COURSES_MY ? COURSES_MY : COURSES;
  return sourceCourses.sort((a, b) => a.order - b.order);
}

export function getFeaturedCourses(lang?: string): Course[] {
  const sourceCourses = lang === "my" && COURSES_MY ? COURSES_MY : COURSES;
  return sourceCourses.filter((c) => c.featured).sort((a, b) => a.order - b.order);
}

export function getCourseBySlug(slug: string, lang?: string): Course | undefined {
  const sourceCourses = lang === "my" && COURSES_MY ? COURSES_MY : COURSES;
  return sourceCourses.find((c) => c.slug === slug);
}

export function getLessonBySlug(courseSlug: string, lessonSlug: string, lang?: string): {
  course: Course;
  lesson: LessonMeta;
  nextLesson?: LessonMeta;
  prevLesson?: LessonMeta;
  index: number;
} | undefined {
  const course = getCourseBySlug(courseSlug, lang);
  if (!course) return undefined;

  const index = course.lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return undefined;

  const lesson = course.lessons[index];
  const prevLesson = index > 0 ? course.lessons[index - 1] : undefined;
  const nextLesson = index < course.lessons.length - 1 ? course.lessons[index + 1] : undefined;

  return {
    course,
    lesson,
    prevLesson,
    nextLesson,
    index,
  };
}