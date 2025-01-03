import quickLinksContent from "@/data/quick-links";
import commonContent from "@/data/common";

const footerContent = {
  copyright: `© ${new Date().getFullYear()} ${commonContent.display_name}. All rights reserved.`,
  socialLinks: quickLinksContent.links,
};

export default footerContent;