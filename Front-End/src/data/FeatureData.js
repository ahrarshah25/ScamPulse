import {
  MailCheck,
  GlobeLock,
  Brain,
  ShieldAlert,
  Zap,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: MailCheck,
    title: "Email Fraud Detection",
    description:
      "Instantly analyze email patterns to identify fake, disposable, or high-risk addresses before they cause damage.",
  },
  {
    icon: GlobeLock,
    title: "IP & Proxy Detection",
    description:
      "Detect VPNs, proxies, and suspicious IP locations to block anonymous or risky traffic in real time.",
  },
  {
    icon: Brain,
    title: "AI Risk Scoring",
    description:
      "Advanced machine learning assigns a clear risk score so you can make fast, confident decisions.",
  },
  {
    icon: ShieldAlert,
    title: "Phishing & Scam Detection",
    description:
      "Identify phishing attempts and scam content using intelligent pattern recognition and threat analysis.",
  },
  {
    icon: Zap,
    title: "Real-Time API Response",
    description:
      "Get fraud detection results within milliseconds through a fast, reliable, and scalable API.",
  },
  {
    icon: BarChart3,
    title: "Fraud Analytics Dashboard",
    description:
      "Visualize fraud trends, risk levels, and activity insights through a clean and intuitive dashboard.",
  },
];

export default features;
