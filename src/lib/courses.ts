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

export const COURSES: Course[] = [
  {
    slug: "linux-command-line",
    title: "Linux Command Line for DevOps",
    description:
      "Master the terminal, essential bash commands, file manipulation, permissions, process management, and SSH to navigate servers with confidence.",
    longDescription:
      "Linux is the undisputed operating system of modern DevOps. Every container, virtual machine, cloud server, and CI/CD runner operates in a Linux environment. In this course, you will learn practical Linux from zero — navigating the filesystem, managing permissions, inspecting processes, networking diagnostics, and working over SSH.",
    level: "Beginner",
    duration: "3.5 hours",
    lessonCount: 10,
    icon: "Terminal",
    color: "from-emerald-500 to-teal-600",
    tags: ["Linux", "Bash", "CLI", "SysAdmin", "Fundamentals"],
    prerequisites: [],
    learningObjectives: [
      "Navigate the Linux filesystem quickly with core navigation commands (pwd, ls, cd, history)",
      "Create, inspect, modify, and manage files and directories securely",
      "Read logs and search system text using grep, less, head, tail, and find",
      "Master permissions, ownership, and chmod/chown numeric and symbolic modes",
      "Inspect, monitor, and kill system processes with ps, top, htop, and kill",
      "Install and manage packages on Debian/Ubuntu with apt",
      "Diagnose network connectivity and listening ports with curl, ping, and ss",
      "Generate SSH keys and securely connect to remote servers",
    ],
    lessons: [
      {
        slug: "01-why-linux-matters",
        title: "Why Linux Matters in DevOps",
        duration: "15 min",
        order: 1,
        description: "Understand why Linux powers cloud, containers, and DevOps toolchains.",
      },
      {
        slug: "02-terminal-basics",
        title: "Terminal Basics & Navigation",
        duration: "20 min",
        order: 2,
        description: "Master pwd, ls, cd, clear, history, and autocomplete shortcuts.",
      },
      {
        slug: "03-files-and-directories",
        title: "Working with Files & Directories",
        duration: "25 min",
        order: 3,
        description: "Create, move, copy, remove, and safely inspect files and directories.",
      },
      {
        slug: "04-reading-editing-files",
        title: "Reading & Editing Files (nano, vim, grep)",
        duration: "25 min",
        order: 4,
        description: "Edit config files in nano/vim and search logs rapidly with grep and find.",
      },
      {
        slug: "05-permissions-ownership",
        title: "Permissions & Ownership (chmod, chown)",
        duration: "25 min",
        order: 5,
        description: "Decode rwx permission strings, numeric chmod (755/644), and sudo privileges.",
      },
      {
        slug: "06-process-management",
        title: "Process Management (ps, top, kill)",
        duration: "20 min",
        order: 6,
        description: "Monitor CPU/memory consumers, inspect background jobs, and kill processes.",
      },
      {
        slug: "07-package-management",
        title: "Package Management with apt",
        duration: "15 min",
        order: 7,
        description: "Update repositories, install packages, and clean dependencies on Ubuntu.",
      },
      {
        slug: "08-networking-basics",
        title: "Networking Basics (ping, curl, ss, ip)",
        duration: "25 min",
        order: 8,
        description: "Inspect listening ports, send HTTP requests, and troubleshoot network reachability.",
      },
      {
        slug: "09-ssh-and-servers",
        title: "SSH & Connecting to Remote Servers",
        duration: "25 min",
        order: 9,
        description: "Generate SSH keypairs, configure ssh config, and connect without passwords.",
      },
      {
        slug: "10-productivity-tips",
        title: "Productivity, Pipes, Redirection & Common Pitfalls",
        duration: "20 min",
        order: 10,
        description: "Combine commands with pipes, redirects (> and >>), logical operators, and avoid rookie traps.",
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
      "Learn version control from the ground up: staging, commits, branches, merges, remotes, pull requests, and real-world branching strategies.",
    longDescription:
      "Git is the foundation of modern software collaboration and GitOps workflows. In this course, you will build a solid intuition for how Git tracks snapshots, how branches branch off and merge back, how to resolve conflicts with ease, and how to collaborate using GitHub Pull Requests and code reviews.",
    level: "Beginner",
    duration: "3 hours",
    lessonCount: 8,
    icon: "GitBranch",
    color: "from-orange-500 to-amber-600",
    tags: ["Git", "GitHub", "VCS", "Collaboration", "GitFlow"],
    prerequisites: ["linux-command-line"],
    learningObjectives: [
      "Understand distributed version control concepts and Git internal models",
      "Initialize repositories, stage changes deliberately, and write clean commit messages",
      "Create, switch, and merge branches with confidence",
      "Resolve merge conflicts without panic using step-by-step techniques",
      "Synchronize local repositories with remote GitHub repositories (push, pull, fetch, clone)",
      "Create, review, and merge Pull Requests following industry standards",
      "Configure .gitignore files and leverage atomic commits & conventional commit standards",
      "Apply Git Flow and trunk-based development workflows in real teams",
    ],
    lessons: [
      {
        slug: "01-what-is-version-control",
        title: "What is Version Control?",
        duration: "15 min",
        order: 1,
        description: "The videogame checkpoint analogy and why modern engineering requires Git.",
      },
      {
        slug: "02-installing-git",
        title: "Installing Git & First Setup",
        duration: "15 min",
        order: 2,
        description: "Install Git across OS platforms and configure user name, email, and default branch.",
      },
      {
        slug: "03-basic-git-workflow",
        title: "Basic Git Workflow (init, add, commit)",
        duration: "25 min",
        order: 3,
        description: "Master the 3-state lifecycle: Working Directory, Staging Area, and Local Repository.",
      },
      {
        slug: "04-branching-and-merging",
        title: "Branching & Merging",
        duration: "30 min",
        order: 4,
        description: "Create parallel tracks of development and merge them back with fast-forward or merge commits.",
      },
      {
        slug: "05-remote-repositories",
        title: "Remote Repositories & GitHub",
        duration: "25 min",
        order: 5,
        description: "Connect your local Git repository to GitHub via SSH and push/pull seamlessly.",
      },
      {
        slug: "06-pull-requests",
        title: "Pull Requests & Code Review",
        duration: "25 min",
        order: 6,
        description: "Propose changes, conduct code reviews, resolve requested changes, and merge PRs safely.",
      },
      {
        slug: "07-git-best-practices",
        title: "Git Best Practices & .gitignore",
        duration: "20 min",
        order: 7,
        description: "Write conventional commits, configure .gitignore, use git stash, and avoid messy history.",
      },
      {
        slug: "08-real-world-workflow",
        title: "Real-World Git Workflow (Git Flow & Trunk-Based)",
        duration: "25 min",
        order: 8,
        description: "Compare Git Flow vs Trunk-Based workflows and understand release branching in production.",
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
      "Automate testing, linting, building, Docker container publishing, and deployment workflows triggered directly by Git events.",
    longDescription:
      "GitHub Actions is the industry-standard CI/CD platform built right into GitHub. You will learn how to write declarative YAML workflows, trigger automation on pull requests or tags, configure matrix builds, secure sensitive secrets, cache dependencies for ultra-fast runs, and deploy applications automatically.",
    level: "Beginner",
    duration: "4 hours",
    lessonCount: 8,
    icon: "Zap",
    color: "from-indigo-500 to-violet-600",
    tags: ["CI/CD", "Automation", "GitHub Actions", "Workflows", "YAML"],
    prerequisites: ["linux-command-line", "git-github"],
    learningObjectives: [
      "Understand CI/CD core concepts and automation economics",
      "Write clean, error-free GitHub Actions workflow YAML files",
      "Configure multiple triggers: push, pull_request, schedule cron, and manual dispatch",
      "Orchestrate parallel and sequential jobs using needs dependencies",
      "Safely manage secrets, credentials, and environment variables",
      "Build a complete automated test and lint pipeline with caching for node_modules",
      "Automate Docker image building and pushing to container registries",
      "Implement release environments with manual approval protection rules",
    ],
    lessons: [
      {
        slug: "01-what-is-cicd",
        title: "What is CI/CD?",
        duration: "20 min",
        order: 1,
        description: "Continuous Integration vs Continuous Delivery/Deployment explained with factory line analogies.",
      },
      {
        slug: "02-github-actions-intro",
        title: "Introduction to GitHub Actions",
        duration: "20 min",
        order: 2,
        description: "Deconstruct workflows, runners, jobs, steps, and community marketplace actions.",
      },
      {
        slug: "03-workflow-syntax",
        title: "Workflow YAML Syntax Breakdown",
        duration: "30 min",
        order: 3,
        description: "Master every essential YAML key: name, on, jobs, runs-on, steps, uses, run, and with.",
      },
      {
        slug: "04-triggers-and-events",
        title: "Triggers, Filters & Events",
        duration: "25 min",
        order: 4,
        description: "Trigger pipelines on push, pull_request, path filters (src/**), cron schedules, and inputs.",
      },
      {
        slug: "05-jobs-and-steps",
        title: "Jobs, Steps, Dependencies & Matrix Builds",
        duration: "30 min",
        order: 5,
        description: "Run jobs concurrently, chain them sequentially with needs, and test across multiple Node/OS versions.",
      },
      {
        slug: "06-environment-variables",
        title: "Secrets, Variables & Contexts",
        duration: "25 min",
        order: 6,
        description: "Inject GitHub Secrets, repository variables, GITHUB_SHA contexts, and mask sensitive tokens.",
      },
      {
        slug: "07-build-test-workflow",
        title: "Building a Real Build & Test Workflow",
        duration: "35 min",
        order: 7,
        description: "Step-by-step: checkout, setup Node.js, cache dependencies, run ESLint, and execute test suites.",
      },
      {
        slug: "08-deploy-workflow",
        title: "Continuous Deployment Pipeline",
        duration: "35 min",
        order: 8,
        description: "Automate automated static site deployment to GitHub Pages and server deployments with SSH.",
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
      "Deep dive into pipeline architectures, artifacts, build agents, automated testing pyramids, zero-downtime strategies, and canary rollouts.",
    longDescription:
      "Before scaling automation, every DevOps engineer must understand the core architectural patterns behind robust CI/CD systems: artifact registries, ephemeral test environments, blue-green deployments, canary rollouts, and disaster recovery rollback strategies.",
    level: "Intermediate",
    duration: "3 hours",
    lessonCount: 6,
    icon: "Workflow",
    color: "from-blue-500 to-cyan-600",
    tags: ["CI/CD", "Architecture", "Deployment", "BestPractices"],
    prerequisites: ["github-actions"],
    learningObjectives: [
      "Master the test pyramid (Unit, Integration, E2E) and automated gatekeeping",
      "Understand build immutable artifacts and provenance",
      "Compare Blue-Green, Rolling, and Canary deployment strategies",
      "Implement automated rollback and synthetic health checks",
    ],
    lessons: [
      { slug: "01-pipeline-stages", title: "The Anatomy of a Modern Pipeline", duration: "25 min", order: 1 },
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
      "Package applications into lightweight, reproducible containers. Master Dockerfile instructions, layer caching, image optimization, and volume mounts.",
    longDescription:
      "Containers solved the classic 'it works on my machine' problem forever. In this course, you will understand container virtualization vs VMs, write production-ready multi-stage Dockerfiles, minimize container attack surfaces, manage data with volumes, and connect containers with custom networks.",
    level: "Intermediate",
    duration: "5 hours",
    lessonCount: 10,
    icon: "Box",
    color: "from-sky-500 to-blue-600",
    tags: ["Docker", "Containers", "DevOps", "Images", "Virtualization"],
    prerequisites: ["linux-command-line", "git-github"],
    learningObjectives: [
      "Understand container architecture: namespaces, cgroups, and container runtimes",
      "Write multi-stage Dockerfiles that reduce image sizes by 80%+",
      "Persist database and application storage using Docker Volumes and Bind Mounts",
      "Connect isolated containers with bridge and overlay networks",
    ],
    lessons: [
      { slug: "01-containers-vs-vms", title: "Containers vs Virtual Machines", duration: "25 min", order: 1 },
      { slug: "02-docker-architecture", title: "Docker Engine, Daemon & Registry Architecture", duration: "25 min", order: 2 },
      { slug: "03-running-first-container", title: "Running Your First Container (docker run, exec, logs)", duration: "30 min", order: 3 },
      { slug: "04-writing-dockerfiles", title: "Writing Clean Dockerfiles (FROM, RUN, COPY, CMD)", duration: "35 min", order: 4 },
      { slug: "05-layer-caching", title: "Docker Layer Caching & Build Optimization", duration: "30 min", order: 5 },
      { slug: "06-multi-stage-builds", title: "Multi-Stage Builds for Minimal Production Images", duration: "35 min", order: 6 },
      { slug: "07-volumes-and-storage", title: "Volumes, Bind Mounts & Persistent Data", duration: "30 min", order: 7 },
      { slug: "08-container-networking", title: "Container Networking & Port Forwarding", duration: "30 min", order: 8 },
      { slug: "09-docker-hub-registries", title: "Pushing Images to Docker Hub & GitHub GHCR", duration: "25 min", order: 9 },
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
      "Orchestrate multi-tier web applications (Next.js, Node.js API, PostgreSQL, Redis) with declarative YAML configuration files.",
    longDescription:
      "Real applications consist of multiple interacting services: a frontend, a backend API, a database, and an in-memory cache. Docker Compose allows you to define, start, and network entire application stacks with a single command.",
    level: "Intermediate",
    duration: "3 hours",
    lessonCount: 6,
    icon: "Layers",
    color: "from-cyan-500 to-teal-600",
    tags: ["Docker Compose", "Multi-Tier", "Databases", "Networking"],
    prerequisites: ["docker-fundamentals"],
    learningObjectives: [
      "Write multi-service docker-compose.yml files with environment variables and healthchecks",
      "Network frontends, APIs, and databases seamlessly",
      "Manage secrets and database initialization scripts in Compose",
    ],
    lessons: [
      { slug: "01-why-docker-compose", title: "Why Docker Compose?", duration: "20 min", order: 1 },
      { slug: "02-compose-file-structure", title: "Compose YAML Specification (services, networks, volumes)", duration: "30 min", order: 2 },
      { slug: "03-building-fullstack-app", title: "Spinning Up Web App + Postgres + Redis", duration: "40 min", order: 3 },
      { slug: "04-environment-variables", title: "Environment Configuration & .env Files", duration: "25 min", order: 4 },
      { slug: "05-service-dependencies", title: "Healthchecks and depends_on Conditions", duration: "30 min", order: 5 },
      { slug: "06-compose-production", title: "Docker Compose in Development vs Production", duration: "25 min", order: 6 },
    ],
    featured: false,
    order: 5,
    hasFullContent: true,
  },
  {
    slug: "kubernetes-basics",
    title: "Kubernetes (K8s) Basics",
    description:
      "Step into the standard enterprise container orchestrator: Pods, Deployments, Services, ConfigMaps, Ingress, and self-healing systems.",
    longDescription:
      "Kubernetes automates deployment, scaling, and management of containerized applications at planetary scale. This course takes you inside K8s architecture: Control Plane components, Worker Nodes, Pod lifecycles, declarative YAML manifests, and cluster service discovery.",
    level: "Intermediate",
    duration: "6 hours",
    lessonCount: 12,
    icon: "Compass",
    color: "from-blue-600 to-indigo-700",
    tags: ["Kubernetes", "K8s", "Orchestration", "CloudNative", "Pods"],
    prerequisites: ["docker-fundamentals", "docker-compose"],
    learningObjectives: [
      "Understand Control Plane (API Server, etcd, Scheduler) and Worker Node (kubelet, kube-proxy) architecture",
      "Write and apply declarative manifests for Pods, ReplicaSets, and Deployments",
      "Expose workloads with ClusterIP, NodePort, and LoadBalancer Services",
      "Manage application configurations with ConfigMaps and K8s Secrets",
    ],
    lessons: [
      { slug: "01-why-kubernetes", title: "Why Kubernetes? Orchestration Explained", duration: "25 min", order: 1 },
      { slug: "02-k8s-architecture", title: "Control Plane & Worker Node Architecture", duration: "30 min", order: 2 },
      { slug: "03-kubectl-cli", title: "The kubectl CLI: Commands, Contexts & Namespaces", duration: "30 min", order: 3 },
      { slug: "04-pods", title: "Understanding Pods: The Smallest Deployable Unit", duration: "25 min", order: 4 },
      { slug: "05-deployments-replicasets", title: "Deployments & ReplicaSets: Self-Healing & Scaling", duration: "35 min", order: 5 },
      { slug: "06-services-networking", title: "Services & Networking: ClusterIP, NodePort, LoadBalancer", duration: "35 min", order: 6 },
      { slug: "07-configmaps-secrets", title: "ConfigMaps & Secrets: Decoupling Configurations", duration: "30 min", order: 7 },
      { slug: "08-ingress-controllers", title: "Ingress Controllers & Routing HTTP Traffic", duration: "35 min", order: 8 },
      { slug: "09-resource-limits", title: "CPU & Memory Resource Requests and Limits", duration: "25 min", order: 9 },
      { slug: "10-liveness-readiness", title: "Liveness, Readiness & Startup Health Probes", duration: "30 min", order: 10 },
      { slug: "11-storage-pv-pvc", title: "Persistent Volumes (PV) and PVC Claims", duration: "35 min", order: 11 },
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
      "Run lightweight, fully compliant Kubernetes on single VPS nodes, edge devices, local development, and small production clusters.",
    longDescription:
      "K3s is a certified, packaged lightweight Kubernetes distribution created by Rancher. Stripping out legacy cloud providers and packaged as a single <70MB binary, it is the ideal Kubernetes platform for learning, VPS servers, home labs, and edge deployments.",
    level: "Intermediate",
    duration: "4 hours",
    lessonCount: 8,
    icon: "Cpu",
    color: "from-yellow-500 to-amber-600",
    tags: ["K3s", "Rancher", "EdgeK8s", "Lightweight", "VPS"],
    prerequisites: ["linux-command-line", "kubernetes-basics"],
    learningObjectives: [
      "Install K3s on a single Linux server in under 30 seconds",
      "Understand embedded SQLite vs etcd storage engines in K3s",
      "Deploy containerized applications with Traefik ingress built into K3s",
      "Manage TLS certificates automatically with cert-manager and Let's Encrypt",
    ],
    lessons: [
      { slug: "01-what-is-k3s", title: "What is K3s and Why Use It?", duration: "25 min", order: 1 },
      { slug: "02-installing-k3s", title: "Installing K3s on Linux / VPS with One Command", duration: "25 min", order: 2 },
      { slug: "03-traefik-ingress", title: "Built-In Traefik Ingress Controller", duration: "30 min", order: 3 },
      { slug: "04-deploying-apps-k3s", title: "Deploying Full-Stack Applications to K3s", duration: "35 min", order: 4 },
      { slug: "05-cert-manager-tls", title: "Automatic HTTPS with cert-manager & Let's Encrypt", duration: "35 min", order: 5 },
      { slug: "06-multi-node-cluster", title: "Adding Worker Nodes to Form a Multi-Node Cluster", duration: "30 min", order: 6 },
      { slug: "07-k3s-backup-restore", title: "Backups, Snapshots & Disaster Recovery", duration: "30 min", order: 7 },
      { slug: "08-monitoring-k3s", title: "Cluster Monitoring with Prometheus and Grafana", duration: "35 min", order: 8 },
    ],
    featured: false,
    order: 7,
    hasFullContent: true,
  },
  {
    slug: "cicd-project",
    title: "Full Real-World CI/CD Pipeline Project",
    description:
      "The Capstone: Connect Git + GitHub Actions + Docker + GHCR + K3s Kubernetes into an automated GitOps production deployment.",
    longDescription:
      "Bring all your skills together in a complete end-to-end project. You will build a Next.js production web app, write multi-stage Dockerfiles, configure GitHub Actions CI/CD to build and push images to GitHub Container Registry, and securely deploy updates to a live K3s cluster with automated zero-downtime rollouts.",
    level: "Advanced",
    duration: "6 hours",
    lessonCount: 10,
    icon: "Trophy",
    color: "from-emerald-500 to-indigo-600",
    tags: ["Capstone", "EndToEnd", "GitOps", "Production", "ZeroDowntime"],
    prerequisites: ["linux-command-line", "git-github", "github-actions", "docker-fundamentals", "k3s"],
    learningObjectives: [
      "Architect a complete, automated end-to-end DevOps pipeline from scratch",
      "Automate image building, scanning with Trivy, and publishing to GHCR",
      "Implement secure SSH-less GitOps deployment to K3s Kubernetes clusters",
      "Configure automated smoke testing and rolling update verifications",
    ],
    lessons: [
      { slug: "01-project-architecture", title: "Project Blueprint & System Architecture", duration: "30 min", order: 1 },
      { slug: "02-sample-app-setup", title: "Setting Up the Production Next.js + DB App", duration: "35 min", order: 2 },
      { slug: "03-optimized-dockerfile", title: "Writing the Hardened Multi-Stage Dockerfile", duration: "35 min", order: 3 },
      { slug: "04-github-actions-ci", title: "Configuring the Automated CI Pipeline (Lint, Test, Security)", duration: "40 min", order: 4 },
      { slug: "05-registry-publish", title: "Building & Pushing Images to GitHub Container Registry (GHCR)", duration: "30 min", order: 5 },
      { slug: "06-provisioning-k3s", title: "Provisioning the Production K3s Server", duration: "40 min", order: 6 },
      { slug: "07-k8s-manifests", title: "Writing Production Kubernetes Manifests", duration: "45 min", order: 7 },
      { slug: "08-cd-automation", title: "Automating CD Deployments with GitHub Actions to K3s", duration: "45 min", order: 8 },
      { slug: "09-domain-and-ssl", title: "Custom Domain, DNS & Free Automated SSL", duration: "30 min", order: 9 },
      { slug: "10-monitoring-celebration", title: "Monitoring, Health Alerts & Project Wrap-Up", duration: "30 min", order: 10 },
    ],
    featured: true,
    order: 8,
    hasFullContent: true,
  },
];

export function getAllCourses(): Course[] {
  return COURSES.sort((a, b) => a.order - b.order);
}

export function getFeaturedCourses(): Course[] {
  return COURSES.filter((c) => c.featured).sort((a, b) => a.order - b.order);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getLessonBySlug(courseSlug: string, lessonSlug: string): {
  course: Course;
  lesson: LessonMeta;
  nextLesson?: LessonMeta;
  prevLesson?: LessonMeta;
  index: number;
} | undefined {
  const course = getCourseBySlug(courseSlug);
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
