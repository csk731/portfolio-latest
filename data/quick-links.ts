import { Github, Linkedin, Code, Mail } from "lucide-react";
import commonContent from "@/data/common";

const quickLinksContent = {
  statusOne: "🚀 Open to work! Looking for Full-Time Software Engineering roles.",
  statusTwo: "🎓 Graduating in May 2025.",
  statusThree: "🌟 Always learning something new!",
  links: [
    {
      name: "Mail Me",
      icon: Mail,
      url: `mailto:${commonContent.email}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/chaitanyaallu",
    },
    { name: "GitHub", icon: Github, url: "https://github.com/csk731" },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/csk731",
    },
    
  ],
};

export default quickLinksContent;
