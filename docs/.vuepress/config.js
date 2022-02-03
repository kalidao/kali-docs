module.exports = {
  title: "Kali",
  description: `Kali is an optimized DAC protocol.`,
  themeConfig: {
    repo: "kalidao/kali-docs",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkTest: "Make a PR on GitHub to help us improve this page.",
    nav: [
      { text: "Home", link: "/" },
      { text: "FAQ", link: "/faq/" },
    ],
  },
  dest: "public",
  sidebarDepth: 3,
  sidebar: "auto",
  smoothScroll: true,
};
