import React from 'react';

export const Whistle = ({ className = '', size = 100, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path
      d="M50 20 L50 60 M40 30 L60 30"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M45 65 C45 70 55 70 55 65"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
    <circle cx="50" cy="70" r="8" fill="var(--color-gold)" />
    <line x1="30" y1="35" x2="40" y2="30" stroke={color} strokeWidth="2" />
  </svg>
);

export const Trophy = ({ className = '', size = 100, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path
      d="M30 30 L30 50 Q30 70 50 70 Q70 70 70 50 L70 30"
      fill="none"
      stroke={color}
      strokeWidth="3"
    />
    <line x1="20" y1="30" x2="80" y2="30" stroke={color} strokeWidth="3" />
    <line x1="50" y1="70" x2="50" y2="85" stroke={color} strokeWidth="3" />
    <line x1="35" y1="85" x2="65" y2="85" stroke={color} strokeWidth="3" />
    <rect x="40" y="18" width="20" height="15" fill="var(--color-gold)" rx="2" />
    <path d="M20 35 Q15 45 20 50" stroke={color} strokeWidth="2" fill="none" />
    <path d="M80 35 Q85 45 80 50" stroke={color} strokeWidth="2" fill="none" />
  </svg>
);

export const Football = ({ className = '', size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <ellipse
      cx="50"
      cy="50"
      rx="35"
      ry="25"
      fill="var(--color-orange)"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="50" y1="25" x2="50" y2="75" stroke="white" strokeWidth="2" />
    <line x1="40" y1="40" x2="40" y2="60" stroke="white" strokeWidth="1.5" />
    <line x1="45" y1="35" x2="45" y2="65" stroke="white" strokeWidth="1.5" />
    <line x1="55" y1="35" x2="55" y2="65" stroke="white" strokeWidth="1.5" />
    <line x1="60" y1="40" x2="60" y2="60" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const Basketball = ({ className = '', size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <circle
      cx="50"
      cy="50"
      r="35"
      fill="var(--color-orange)"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M15 50 Q35 30, 50 15 T85 50 M15 50 Q35 70, 50 85 T85 50"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const Clipboard = ({ className = '', size = 100, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect
      x="25"
      y="15"
      width="50"
      height="70"
      rx="4"
      fill="none"
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M35 15 L35 10 A5 5 0 0 1 40 5 L60 5 A5 5 0 0 1 65 10 L65 15"
      stroke={color}
      strokeWidth="3"
      fill="none"
    />
    <line x1="35" y1="35" x2="65" y2="35" stroke={color} strokeWidth="2" />
    <line x1="35" y1="50" x2="65" y2="50" stroke={color} strokeWidth="2" />
    <line x1="35" y1="65" x2="55" y2="65" stroke={color} strokeWidth="2" />
  </svg>
);

export const Stopwatch = ({ className = '', size = 100, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <circle cx="50" cy="55" r="30" stroke={color} strokeWidth="3" />
    <line x1="50" y1="55" x2="50" y2="35" stroke="var(--color-gold)" strokeWidth="3" />
    <line x1="50" y1="55" x2="65" y2="55" stroke="var(--color-gold)" strokeWidth="2" />
    <rect x="40" y="15" width="20" height="8" rx="2" fill={color} />
    <path d="M50 23 L50 25" stroke={color} strokeWidth="2" />
  </svg>
);

export const Megaphone = ({ className = '', size = 100, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <path
      d="M20 50 L50 30 L50 70 L20 50 Z"
      fill="var(--color-gold)"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M50 30 L75 20 L75 80 L50 70"
      fill="var(--color-orange)"
      stroke={color}
      strokeWidth="2"
    />
    <circle cx="20" cy="50" r="8" fill={color} />
  </svg>
);

export const Playbook = ({ className = '', size = 100, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <rect x="20" y="20" width="60" height="60" rx="4" fill="var(--color-green)" opacity="0.2" />
    <rect x="20" y="20" width="60" height="60" rx="4" stroke={color} strokeWidth="2" fill="none" />
    <circle cx="35" cy="40" r="6" stroke="var(--color-gold)" strokeWidth="2" />
    <circle cx="65" cy="40" r="6" stroke="var(--color-gold)" strokeWidth="2" />
    <path d="M43 58 L57 68 M57 58 L43 68" stroke="var(--color-navy)" strokeWidth="2.5" />
    <path d="M35 45 L35 58 M32 55 L35 58 L38 55" stroke={color} strokeWidth="1.5" />
    <path d="M65 45 Q50 50, 50 63 M47 60 L50 63 L53 60" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const CheckCircle = ({ className = '', size = 100, color = 'var(--color-green)' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="3" />
    <polyline
      points="35,50 45,60 65,40"
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Star = ({ className = '', size = 100, filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill={filled ? "var(--color-gold)" : "none"}
    className={className}
  >
    <path
      d="M50 15 L60 40 L87 40 L65 57 L75 82 L50 65 L25 82 L35 57 L13 40 L40 40 Z"
      stroke="var(--color-gold)"
      strokeWidth="2"
    />
  </svg>
);

export default {
  Whistle,
  Trophy,
  Football,
  Basketball,
  Clipboard,
  Stopwatch,
  Megaphone,
  Playbook,
  CheckCircle,
  Star
};
