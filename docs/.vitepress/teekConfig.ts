import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  author: { name: "Teeker", link: "https://github.com/Kele-Bingtang" },
  wallpaper: {
    enabled: true,
  },
  post: {
    imageViewer: {
      hideOnClickModal: true,
    },
  },
  banner: {
    name: "🎉 Teeker Blog",
    bgStyle: "fullImg",
    imgSrc: ["/banner/banner-bg1.jpg", "/banner/banner-bg2.png"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
  blogger: {
    avatar:
      "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar2.png",
    shape: "square",
    name: "天客 - Teeker",
    slogan: "朝圣的使徒，正在走向编程的至高殿堂！",
  },
  docAnalysis: {
    createTime: "2021-10-19",
    statistics: {
      provider: "busuanzi",
    },
  },
  friendLink: {
    list: [
      {
        avatar: "https://doc.xugaoyi.com/img/logo.png",
        name: "vuepress-theme-vdoing",
        desc: "🚀一款简洁高效的VuePress 知识管理&博客 主题",
        link: "https://doc.xugaoyi.com/",
      },
      {
        avatar: "https://onedayxyy.cn/img/xyy-touxiang.png",
        name: "One",
        desc: "明心静性，爱自己",
        link: "https://onedayxyy.cn/",
      },
      {
        avatar: "https://teek.seasir.top/avatar/avatar.webp",
        name: "Hyde Blog",
        desc: "人心中的成见是一座大山",
        link: "https://teek.seasir.top/",
      },
      {
        avatar: "https://wiki.eryajf.net/img/logo.png",
        name: "二丫讲梵",
        desc: "💻学习📝记录🔗分享",
        link: " https://wiki.eryajf.net/",
      },
    ],
  },
  footerInfo: {
    copyright: {
      createYear: 2025,
      suffix: "Teeker Blog",
    },
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
  },
  social: [
    {
      icon: "mdi:github",
      name: "GitHub",
      link: "https://github.com/kele-bingtang",
    },
    {
      icon: "simple-icons:gitee",
      name: "Gitee",
      link: "https://gitee.com/kele-bingtang",
    },
  ],
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  comment: {
    provider: "twikoo",
    options: {
      envId: "https://twikoo.youngkbt.cn/",
      link: "https://gcore.jsdelivr.net/npm/twikoo@1.6.41/dist/twikoo.all.min.js",
    },
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "d5ee872d9aa1ef8021f4a3921b2e9c2a",
      },
    },
    {
      provider: "google",
      options: {
        id: "G-K5GNDW3L7K",
      },
    },
  ],
});
