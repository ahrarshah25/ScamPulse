import { Plug, Server, FileText, ShieldCheck, Eye } from "lucide-react";

const processModules = [
  {
    id: 1,
    icon: Plug,
    title: "Connect API",
    description: "Connect ScamPulse to your app or website using our secure API endpoints."
  },
  {
    id: 2,
    icon: FileText,
    title: "Send Data",
    description: "Send email, IP, text, or image data to ScamPulse for fraud detection."
  },
  {
    id: 3,
    icon: Server,
    title: "Get Fraud Score",
    description: "Receive a detailed fraud score and verdict in real-time to make informed decisions."
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Display Results",
    description: "Display the fraud detection results clearly in your dashboard or application."
  },
  {
    id: 5,
    icon: Eye,
    title: "Optional Security",
    description: "Additional monitoring for suspicious behavior and bot activity to keep users secure."
  }
];

export default processModules;
