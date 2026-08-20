export type Language = "en" | "my";

export const translations = {
  en: {
    hero: {
      pill: "100% Free • Beginner to Production DevOps",
      titlePart1: "From Zero CLI to",
      titlePart2: "Production DevOps",
      subtitle: "Learn Linux, Git, GitHub Actions, CI/CD, Docker, and Kubernetes step-by-step. Designed with rich interactive diagrams for complete beginners.",
      ctaStart: "Start Learning Now",
      ctaRoadmap: "View Interactive Roadmap",
      feature1: "Beginner-First Language",
      feature2: "Interactive Diagrams",
      feature3: "Real Capstone CI/CD"
    },
    nav: {
      home: "Home",
      courses: "Courses",
      roadmap: "Interactive Roadmap",
      search: "Search",
      startLearning: "Start Learning",
      startLearningFree: "Start Learning for Free"
    },
    stats: {
      courses: "Mastery Courses",
      lessons: "Hands-on Lessons",
      free: "Free & Open Source",
      capstone: "Production Capstone"
    },
    roadmap: {
      badge: "Learning Path",
      titlePart1: "Your 13-Step Roadmap to",
      titlePart2: "DevOps Mastery",
      subtitle: "A structured, zero-confusion journey designed so every concept naturally unlocks the next one.",
      step: "Step",
      explore: "Explore",
      viewFull: "Launch Full Interactive Architecture Roadmap"
    },
    courses: {
      badge: "Featured Curricula",
      title: "Start with These Core Courses",
      subtitle: "Fully interactive lessons packed with terminal commands, analogies, and downloadable workflows.",
      explore: "Explore all 13 courses",
      card: {
        ready: "Ready",
        lessons: "lessons",
        viewCourse: "View Curriculum"
      }
    },
    coursesPage: {
      badge: "Curriculum Directory",
      title: "All 13 DevOps",
      highlight: "Zero-to-Hero Courses",
      subtitle: "Explore the complete learning track from Linux fundamentals to advanced GitOps and Terraform. Packed with practical terminal sessions and real-world architectures.",
      metaTitle: "All DevOps Courses | DevOps Zero to Hero",
      metaDesc: "Explore all 13 free DevOps courses: Linux CLI, Git & GitHub, Docker, CI/CD, Terraform IaC, Kubernetes, Observability, DevSecOps, ArgoCD GitOps, and Real-world Capstone."
    },
    roadmapPage: {
      badge: "Learning Architecture",
      title: "Interactive DevOps",
      highlight: "Mastery Track",
      subtitle: "A structured 13-step progression from your first Linux command to Terraform IaC, Observability, and GitOps delivery. Follow each milestone or switch to the 2D graph view.",
      metaTitle: "Interactive DevOps Roadmap | DevOps Zero to Hero",
      metaDesc: "Explore the visual 13-step interactive roadmap from Linux Command Line to Terraform, Prometheus, DevSecOps, and ArgoCD GitOps.",
      step1Title: "Foundations & Containers",
      step1Desc: "Linux CLI, Git, GitHub, Docker & Compose. Build confidence with terminal workflows and local multi-service stacks.",
      step2Title: "CI/CD & Cloud IaC",
      step2Desc: "GitHub Actions, CI/CD Pipeline Concepts & Terraform. Automate test pipelines and declare cloud infrastructure as code.",
      step3Title: "Kubernetes & Observability",
      step3Desc: "K8s, K3s, Prometheus & Grafana. Deploy self-healing container clusters and build real-time monitoring dashboards.",
      step4Title: "DevSecOps & GitOps",
      step4Desc: "Trivy vulnerability scanning, ArgoCD GitOps, Canary progressive rollouts, and the full end-to-end Capstone project."
    },
    roadmapCanvas: {
      milestones: "13 Progressive Engineering Milestones",
      curriculum: "100% Hands-on Curriculum",
      pathway: "Milestone Pathway",
      graph: "2D Architecture Graph",
      learningModules: "Learning Modules",
      step: "Step",
      practicalLessons: "Practical Lessons",
      explore: "Explore",
      safeNavMode: "Safe Navigation Mode:",
      safeNavDesc: "Page scrolling is preserved. Use the on-canvas zoom buttons (+ / -) or drag inside the box to pan across the architecture nodes.",
      phases: [
        { title: "Core Foundations & Version Control", subtitle: "Master the Linux command line environment and team version control workflows." },
        { title: "Containerization & Multi-Container Stacks", subtitle: "Package applications into immutable containers and orchestrate local microservices." },
        { title: "Automation & Continuous Delivery", subtitle: "Automate code testing, linting, building, and artifact delivery on every commit." },
        { title: "Infrastructure as Code (IaC) & Cloud Provisioning", subtitle: "Declare reproducible cloud environments and automate Terraform pipelines." },
        { title: "Kubernetes Cluster Architecture & Orchestration", subtitle: "Deploy self-healing containers, pods, services, ingress, and lightweight K3s clusters." },
        { title: "Observability, DevSecOps & Advanced GitOps", subtitle: "Full-stack monitoring with Prometheus/Grafana, container security with Trivy, and GitOps with ArgoCD." },
        { title: "Real-World Production Capstone", subtitle: "Connect every tool into a complete automated zero-downtime production deployment." }
      ]
    },
    benefits: {
      badge: "Why DevOps Zero to Hero",
      titlePart1: "Engineered specifically for",
      titlePart2: "Beginner Confidence",
      subtitle: "Stop drowning in confusing cloud documentation. Learn by building mental models that actually stick.",
      items: [
        {
          title: "From Absolute Zero to Fluency",
          description: "Every concept is taught in plain English with relatable analogies (like video game checkpoints and factory lines). No gatekeeping."
        },
        {
          title: "Interactive Flow Diagrams",
          description: "Understand Docker architectures, Kubernetes component relationships, and GitHub Actions pipelines visually with React Flow & Mermaid."
        },
        {
          title: "Real Terminal Commands with Context",
          description: "Don't just memorize commands. Learn when, why, and how to use every command when debugging real staging and production servers."
        },
        {
          title: "Common Mistakes & Pitfalls Included",
          description: "Every lesson has dedicated 'Common Pitfalls' callouts so you don't spend hours debugging cryptic error messages or permission denied traps."
        },
        {
          title: "End-to-End Capstone Deployment",
          description: "Complete a real GitOps deployment pipeline: Git Push → GitHub Actions → Docker Build → GHCR → K3s Kubernetes cluster rollout."
        },
        {
          title: "100% Free & Open For Everyone",
          description: "No paywalls, pay-per-module tricks, or subscription models. Complete high-quality DevOps education accessible to all developers."
        }
      ]
    },
    cta: {
      badge: "Free Access Forever",
      titlePart1: "Ready to Become a Confident",
      titlePart2: "DevOps Hero?",
      subtitle: "Start with Lesson 1 of Linux Command Line right now. No setup required, no credit card, no sign-in friction.",
      button1: "Start Course 01: Linux CLI",
      button2: "Browse All 13 Courses"
    },
    footer: {
      brandDesc: "From your first Linux terminal command to production Kubernetes clusters. 100% free, beginner-first, visual engineering curriculum.",
      tracksTitle: "Learning Tracks",
      track1: "Linux Command Line",
      track2: "Terraform IaC",
      track3: "Observability & Prometheus",
      track4: "ArgoCD & GitOps",
      platformTitle: "Platform",
      platform1: "All 13 Courses",
      platform2: "Visual 13-Step Roadmap",
      platform3: "Capstone CI/CD Project",
      communityTitle: "Community & Open Source",
      community1: "GitHub Repository & Discussions",
      community2: "Contribute a Lesson / Fix",
      community3: "Community Release Notes",
      copyright: "DevOps Zero to Hero. Built for aspiring cloud & DevOps engineers.",
      designedBy: "Designed & Created by",
      madeWith: "Made with",
      forCommunity: "for the community"
    }
  },
  my: {
    hero: {
      pill: "၁၀၀% အခမဲ့ • Beginner မှ Production DevOps အထိ",
      titlePart1: "CLI အခြေခံမှစတင်ပြီး",
      titlePart2: "Production DevOps အထိ",
      subtitle: "Linux, Git, GitHub Actions, CI/CD, Docker နှင့် Kubernetes တို့ကို အဆင့်ဆင့် လေ့လာပါ။ အခြေခံသမားများအတွက် အထူးရည်ရွယ်ပြီး interactive diagram များဖြင့် ရှင်းပြထားပါသည်။",
      ctaStart: "ယခုပဲ စတင်လေ့လာပါ",
      ctaRoadmap: "Interactive Roadmap ကို ကြည့်ရန်",
      feature1: "အခြေခံသမားများအတွက်",
      feature2: "Interactive Diagram များ",
      feature3: "လက်တွေ့ Capstone CI/CD"
    },
    nav: {
      home: "ပင်မစာမျက်နှာ",
      courses: "သင်ခန်းစာများ",
      roadmap: "Interactive Roadmap",
      search: "ရှာဖွေရန်",
      startLearning: "စတင်လေ့လာရန်",
      startLearningFree: "အခမဲ့ စတင်လေ့လာရန်"
    },
    stats: {
      courses: "Mastery သင်တန်းများ",
      lessons: "လက်တွေ့ သင်ခန်းစာများ",
      free: "အခမဲ့ & Open Source",
      capstone: "Production Capstone"
    },
    roadmap: {
      badge: "လေ့လာမှုလမ်းကြောင်း",
      titlePart1: "အဆင့် ၁၃ ဆင့်ပါဝင်သော",
      titlePart2: "DevOps ကျွမ်းကျင်မှု Roadmap",
      subtitle: "အယူအဆတိုင်းသည် နောက်တစ်ခုကို သဘာဝကျကျ ဖွင့်ပေးနိုင်ရန် စနစ်တကျ ပြင်ဆင်ထားသော ရှုပ်ထွေးမှုကင်းသည့် ခရီးစဉ်။",
      step: "အဆင့်",
      explore: "လေ့လာရန်",
      viewFull: "Interactive Architecture Roadmap အပြည့်အစုံ ကြည့်ရန်"
    },
    courses: {
      badge: "အထူးပြု သင်ရိုးများ",
      title: "အဓိက သင်ခန်းစာများဖြင့် စတင်ပါ",
      subtitle: "Terminal command များ၊ ဥပမာများနှင့် ဒေါင်းလုဒ်လုပ်နိုင်သော workflow များ ပါဝင်သည့် အပြည့်အဝ interactive သင်ခန်းစာများ။",
      explore: "သင်ခန်းစာ ၁၃ ခုလုံးကို လေ့လာရန်",
      card: {
        ready: "အဆင်သင့်ဖြစ်ပြီ",
        lessons: "သင်ခန်းစာ",
        viewCourse: "သင်ရိုးကိုကြည့်ရန်"
      }
    },
    coursesPage: {
      badge: "သင်ရိုးမာတိကာ",
      title: "DevOps",
      highlight: "Zero-to-Hero သင်ခန်းစာများ",
      subtitle: "Linux အခြေခံမှသည် အဆင့်မြင့် GitOps နှင့် Terraform အထိ သင်ယူမှုလမ်းကြောင်း အပြည့်အစုံကို လေ့လာပါ။ လက်တွေ့ Terminal လေ့ကျင့်ခန်းများနှင့် လက်တွေ့ကမ္ဘာမှ တည်ဆောက်ပုံများ ပါဝင်သည်။",
      metaTitle: "DevOps သင်ခန်းစာများ အားလုံး | DevOps Zero to Hero",
      metaDesc: "အခမဲ့ DevOps သင်ခန်းစာ ၁၃ ခုလုံးကို လေ့လာပါ- Linux CLI, Git & GitHub, Docker, CI/CD, Terraform IaC, Kubernetes, Observability, DevSecOps, ArgoCD GitOps နှင့် Real-world Capstone."
    },
    roadmapPage: {
      badge: "လေ့လာမှု တည်ဆောက်ပုံ",
      title: "Interactive DevOps",
      highlight: "Mastery Track",
      subtitle: "ပထမဆုံး Linux command မှသည် Terraform IaC၊ Observability နှင့် GitOps တို့အထိ အဆင့် ၁၃ ဆင့်ပါဝင်သော လမ်းညွှန်။ မှတ်တိုင်တစ်ခုစီကို လိုက်လုပ်ပါ (သို့) 2D graph view သို့ ပြောင်းကြည့်ပါ။",
      metaTitle: "Interactive DevOps Roadmap | DevOps Zero to Hero",
      metaDesc: "Linux Command Line မှ Terraform, Prometheus, DevSecOps နှင့် ArgoCD GitOps အထိ အဆင့် ၁၃ ဆင့်ပါ Roadmap ကို လေ့လာပါ။",
      step1Title: "အခြေခံနှင့် Container များ",
      step1Desc: "Linux CLI, Git, GitHub, Docker & Compose။ Terminal ဖြင့် လုပ်ဆောင်ခြင်းနှင့် local multi-service stack များအကြောင်း ယုံကြည်မှုတည်ဆောက်ပါ။",
      step2Title: "CI/CD နှင့် Cloud IaC",
      step2Desc: "GitHub Actions, CI/CD Pipeline Concepts & Terraform။ Test pipeline များကို automate လုပ်ပြီး cloud infrastructure များကို code အဖြစ် ကြေညာပါ။",
      step3Title: "Kubernetes နှင့် Observability",
      step3Desc: "K8s, K3s, Prometheus & Grafana။ Container cluster များကို deploy လုပ်ပြီး real-time monitoring dashboard များ တည်ဆောက်ပါ။",
      step4Title: "DevSecOps နှင့် GitOps",
      step4Desc: "Trivy vulnerability scanning, ArgoCD GitOps, Canary progressive rollout များနှင့် အစမှအဆုံး Capstone project အပြည့်အစုံ။"
    },
    roadmapCanvas: {
      milestones: "အဆင့်လိုက် လေ့လာနိုင်သော မှတ်တိုင် ၁၃ ခု",
      curriculum: "၁၀၀% လက်တွေ့ သင်ရိုး",
      pathway: "မှတ်တိုင် လမ်းကြောင်း",
      graph: "2D Architecture ပုံကြမ်း",
      learningModules: "သင်ခန်းစာ အပိုင်းများ",
      step: "အဆင့်",
      practicalLessons: "လက်တွေ့ သင်ခန်းစာများ",
      explore: "လေ့လာရန်",
      safeNavMode: "ဘေးကင်းသော ရှာဖွေမှုစနစ်-",
      safeNavDesc: "စာမျက်နှာ အပေါ်အောက် ရွှေ့ခြင်း အလုပ်လုပ်ပါသည်။ ပုံကြမ်းအတွင်း ကြည့်ရှုရန် အထဲတွင်ဖိဆွဲပါ (သို့) (+ / -) ခလုတ်များကို အသုံးပြုပါ။",
      phases: [
        { title: "အခြေခံများနှင့် Version Control", subtitle: "Linux command line အသုံးပြုပုံနှင့် အဖွဲ့လိုက် version control လုပ်ဆောင်မှုများကို ကျွမ်းကျင်စွာ တတ်မြောက်ပါ။" },
        { title: "Containerization နှင့် Multi-Container များ", subtitle: "Application များကို container အဖြစ်ပြောင်းလဲပြီး local microservice များကို စီမံခန့်ခွဲပါ။" },
        { title: "Automation နှင့် Continuous Delivery", subtitle: "ကုဒ်ရေးသားမှုတိုင်းတွင် test လုပ်ခြင်း၊ lint လုပ်ခြင်း၊ build လုပ်ခြင်းနှင့် ပေးပို့ခြင်းများကို အလိုအလျောက် လုပ်ဆောင်ပါ။" },
        { title: "Infrastructure as Code (IaC) နှင့် Cloud", subtitle: "ဖန်တီးရလွယ်ကူသော cloud ပတ်ဝန်းကျင်များကို သတ်မှတ်ပြီး Terraform pipeline များကို အလိုအလျောက် လုပ်ဆောင်ပါ။" },
        { title: "Kubernetes Cluster တည်ဆောက်ပုံနှင့် စီမံခြင်း", subtitle: "အလိုအလျောက် ပြင်ဆင်နိုင်သော container များ၊ pod များ၊ service များ၊ ingress နှင့် ပေါ့ပါးသော K3s cluster များကို ဖြန့်ကျက်ပါ။" },
        { title: "Observability, DevSecOps နှင့် GitOps အဆင့်မြင့်", subtitle: "Prometheus/Grafana ဖြင့် အပြည့်အဝ စောင့်ကြည့်ခြင်း၊ Trivy ဖြင့် container လုံခြုံရေးနှင့် ArgoCD ဖြင့် GitOps ပြုလုပ်ခြင်း။" },
        { title: "လက်တွေ့ကမ္ဘာမှ Production Capstone", subtitle: "ကိရိယာအားလုံးကို ချိတ်ဆက်၍ အလိုအလျောက် အလုပ်လုပ်ပြီး down-time မရှိသော production deployment ကြီးတစ်ခု တည်ဆောက်ပါ။" }
      ]
    },
    benefits: {
      badge: "ဘာကြောင့် DevOps Zero to Hero လဲ?",
      titlePart1: "အခြေခံသမားများ ယုံကြည်မှုရှိစေရန်",
      titlePart2: "အထူး ရည်ရွယ်ဖန်တီးထားသည်",
      subtitle: "ရှုပ်ထွေးလှသော cloud documentation များထဲတွင် နစ်မွန်းမနေပါနဲ့တော့။ တကယ်ကို နားလည်သွားစေမယ့် အမြင်ပုံဖော်နည်းများဖြင့် လေ့လာပါ။",
      items: [
        {
          title: "အခြေခံ အစစ်မှသည် ကျွမ်းကျင်သည်အထိ",
          description: "အယူအဆတိုင်းကို (video game checkpoint များနှင့် စက်ရုံထုတ်လုပ်မှုလိုင်းများကဲ့သို့) နားလည်ရလွယ်ကူသော ဥပမာများဖြင့် ရှင်းလင်းစွာ သင်ကြားပေးပါသည်။"
        },
        {
          title: "Interactive Flow Diagram များ",
          description: "Docker တည်ဆောက်ပုံများ၊ Kubernetes အစိတ်အပိုင်းများ ချိတ်ဆက်ပုံနှင့် GitHub Actions pipeline များကို React Flow နှင့် Mermaid တို့ဖြင့် ရှင်းလင်းစွာ မြင်တွေ့နိုင်ပါသည်။"
        },
        {
          title: "လက်တွေ့ Terminal Command များနှင့် အခြေအနေများ",
          description: "Command များကို အလွတ်မကျက်ပါနှင့်။ အမှန်တကယ် production server များကို ပြင်ဆင်ရာတွင် command တစ်ခုချင်းစီကို မည်သည့်အချိန်တွင်၊ ဘာကြောင့်၊ မည်သို့ အသုံးပြုရမည်ကို လေ့လာပါ။"
        },
        {
          title: "အဖြစ်များသော အမှားများ ပါဝင်သည်",
          description: "နားလည်ရခက်သော error message များ ဖြေရှင်းရာတွင် အချိန်မကုန်စေရန် သင်ခန်းစာတိုင်းတွင် 'အဖြစ်များသော အမှားများ' ကို အထူးဖော်ပြပေးထားပါသည်။"
        },
        {
          title: "အစအဆုံး Capstone Deployment",
          description: "Git Push → GitHub Actions → Docker Build → GHCR → K3s Kubernetes cluster rollout အစရှိသည့် အစစ်အမှန် GitOps deployment pipeline တစ်ခုကို ကိုယ်တိုင် လုပ်ဆောင်ရပါမည်။"
        },
        {
          title: "၁၀၀% အခမဲ့ဖြစ်ပြီး လူတိုင်းအတွက်",
          description: "အခကြေးငွေ တောင်းခံခြင်း၊ subscription ပုံစံများ လုံးဝမရှိပါ။ အရည်အသွေးမြင့် DevOps ပညာရေးကို developer တိုင်း လွတ်လပ်စွာ လေ့လာနိုင်ပါသည်။"
        }
      ]
    },
    cta: {
      badge: "အမြဲတမ်း အခမဲ့",
      titlePart1: "ယုံကြည်မှုအပြည့်ရှိသော",
      titlePart2: "DevOps Hero တစ်ယောက်ဖြစ်ဖို့ အဆင်သင့်ပဲလား?",
      subtitle: "Linux Command Line ရဲ့ သင်ခန်းစာ ၁ ကို ယခုပဲ စတင်လိုက်ပါ။ ဘာမှ setup လုပ်စရာမလို၊ ငွေပေးချေစရာမလို၊ အကောင့်ဖွင့်စရာမလိုဘဲ တိုက်ရိုက်လေ့လာနိုင်ပါသည်။",
      button1: "သင်ခန်းစာ ၀၁: Linux CLI ကို စတင်ရန်",
      button2: "သင်ခန်းစာ ၁၃ ခုလုံးကို လေ့လာရန်"
    },
    footer: {
      brandDesc: "Linux terminal command အခြေခံမှစတင်ပြီး production Kubernetes cluster များအထိ။ ၁၀၀% အခမဲ့ဖြစ်ပြီး အခြေခံသမားများအတွက် ရည်ရွယ်သည့် visual engineering သင်ရိုး။",
      tracksTitle: "လေ့လာမှုလမ်းကြောင်းများ",
      track1: "Linux Command Line",
      track2: "Terraform IaC",
      track3: "Observability & Prometheus",
      track4: "ArgoCD & GitOps",
      platformTitle: "Platform",
      platform1: "သင်ခန်းစာ ၁၃ ခုလုံး",
      platform2: "အမြင်ပုံဖော်ထားသော ၁၃-ဆင့် Roadmap",
      platform3: "Capstone CI/CD Project",
      communityTitle: "Community နှင့် Open Source",
      community1: "GitHub Repository နှင့် ဆွေးနွေးမှုများ",
      community2: "သင်ခန်းစာ ပံ့ပိုးရန် (သို့) အမှားပြင်ရန်",
      community3: "Community Release Notes",
      copyright: "DevOps Zero to Hero. အနာဂတ် cloud နှင့် DevOps အင်ဂျင်နီယာများအတွက် ဖန်တီးထားသည်။",
      designedBy: "ဒီဇိုင်းနှင့် ဖန်တီးသူ",
      madeWith: "Made with",
      forCommunity: "for the community"
    }
  }
};
