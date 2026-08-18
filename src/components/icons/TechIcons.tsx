import React from "react";

export function DockerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.186V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.186V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m21.616-.763c-.347-.23-1.077-.312-1.73-.186-.11.02-.218.05-.325.09-.37-1.16-1.427-1.92-2.825-1.92-.472 0-.932.09-1.353.264a.188.188 0 00-.112.172v3.743c0 .248-.047.49-.138.718a3.17 3.17 0 01-.767 1.134c-1.066 1.004-2.585 1.576-4.17 1.576H6.38a9.42 9.42 0 01-3.66-.74 6.7 6.7 0 01-1.897-1.348.186.186 0 00-.27.027A7.37 7.37 0 000 16.592c0 2.227 1.637 4.103 3.905 4.48 1.48.246 3.01.372 4.545.372 6.012 0 11.236-3.766 12.82-9.255.434-.055 1.764-.26 2.37-1.438.083-.162.062-.358-.052-.499z" />
    </svg>
  );
}

export function KubernetesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.644.298a.747.747 0 00-.573.125L2.83 6.027a.754.754 0 00-.332.582v10.782c0 .242.124.469.332.582l8.241 5.604a.747.747 0 00.858 0l8.241-5.604a.754.754 0 00.332-.582V6.609a.754.754 0 00-.332-.582L11.93.423a.747.747 0 00-.286-.125zM12 2.054l7.108 4.832v8.528L12 20.246l-7.108-4.832V6.886L12 2.054zm0 2.32L6.155 7.95v5.1l3.037 2.067-.008-2.09 1.816.59v-1.74l-1.808-.588v-1.39l2.808-.912V7.12l-2.01.653-1.042-.708L12 5.097l2.852 1.968-1.042.708-2.01-.653v1.867l2.808.912v1.39l-1.808.588v1.74l1.816-.59-.008 2.09 3.037-2.067V7.95L12 4.374zm-.008 5.767a1.86 1.86 0 100 3.72 1.86 1.86 0 000-3.72z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.622 10.512L13.49.378a2.124 2.124 0 00-3.003 0L8.472 2.392l3.818 3.818a2.52 2.52 0 012.87 2.87l3.666 3.667a2.518 2.518 0 11-1.503 1.411l-3.392-3.392v4.864a2.523 2.523 0 11-2.124 0V9.458a2.526 2.526 0 01-1.347-3.303L6.643 2.341 2.378 6.607a2.124 2.124 0 000 3.003l8.133 10.134a2.124 2.124 0 003.003 0l8.108-8.108a2.124 2.124 0 000-3.124z" />
    </svg>
  );
}

export function GitHubActionsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function LinuxIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

export function K3sIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function TerraformIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.44 0v7.575l6.561 3.79V3.79L1.44 0zm7.559 3.79v7.575l6.562 3.79V7.58L9 3.79zm7.56 3.79v7.574L23.12 19V11.42l-6.56-3.84zM1.44 9.076v7.575L8 20.441V12.87L1.44 9.076zm7.559 3.794v7.575L15.56 24.24V16.66l-6.56-3.79z" />
    </svg>
  );
}

export function PrometheusIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm5.82 17.653a7.355 7.355 0 01-11.64 0c.264-.52.544-1.03.856-1.503a5.71 5.71 0 009.928 0c.312.473.592.983.856 1.503zm-2.023-3.237a4.137 4.137 0 01-7.594 0 9.877 9.877 0 012.357-3.923c.365-.36.758-.7 1.187-.992.518.35.986.76 1.393 1.215a10.026 10.026 0 012.657 3.7zm-3.797-9.403a2.41 2.41 0 012.33 1.63 7.82 7.82 0 00-2.33-1.63z" />
    </svg>
  );
}

export function ArgoCDIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 3.1l6.9 3.8L12 12.7 5.1 8.9 12 5.1zM4.3 10.2l6.7 3.7v7.4l-6.7-3.7v-7.4zm15.4 7.4l-6.7 3.7v-7.4l6.7-3.7v7.4z" />
    </svg>
  );
}

export function ShieldLockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9a2 2 0 114 0v2" />
    </svg>
  );
}


