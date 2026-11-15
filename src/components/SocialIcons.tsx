import React from "react";
import { Github, Linkedin } from "lucide-react";

interface IconProps {
  className?: string;
}

export const LeetCodeIcon: React.FC<IconProps> = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className} fill-current`}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
  >
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.111.696-1.744.696a2.285 2.285 0 0 1-1.743-.696L3.648 14.3a2.453 2.453 0 0 1-.744-1.768c0-.68.258-1.349.744-1.8l5.074-4.887c.451-.434 1.173-.42 1.61.031a1.083 1.083 0 0 1-.03 1.583L5.32 12.247c-.207.2-.207.53 0 .73l6.275 6.042c.2.193.53.193.73 0l2.196-2.127a1.084 1.084 0 0 1 1.583.03 1.127 1.127 0 0 1-.002 1.608zm5.253-5.263l-2.015 1.954a1.083 1.083 0 0 1-1.58-.031 1.128 1.128 0 0 1 .03-1.584l2.008-1.947c.2-.193.2-.53 0-.73l-6.276-6.042c-.2-.193-.53-.193-.73 0L7.6 10.366a1.128 1.128 0 0 1-1.584-.03 1.083 1.083 0 0 1 .03-1.58l5.215-5.04c.465-.45 1.112-.696 1.745-.696.632 0 1.277.246 1.743.696l6.276 6.042c.983.948.983 2.502.002 3.45z" />
    <path d="M12.43 14.24a1.24 1.24 0 0 1-.87-.36l-2.27-2.23a1.25 1.25 0 0 1 0-1.76 1.24 1.24 0 0 1 1.75 0l2.27 2.23a1.25 1.25 0 0 1 0 1.76 1.24 1.24 0 0 1-.88.36z" />
  </svg>
);

export const SocialPlatformIcon: React.FC<{ platform: string; className?: string }> = ({
  platform,
  className = "h-5 w-5"
}) => {
  switch (platform.toLowerCase()) {
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "leetcode":
      return <LeetCodeIcon className={className} />;
    default:
      return null;
  }
};
