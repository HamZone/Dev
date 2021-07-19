module.exports = {
    lang: 'zh-CN',
    title: 'HamZone.cn开放接口文档',
    description: 'HamZone.cn开放接口，方便无线电爱好者或有需求的朋友们二次开发',
    themeConfig: {
      logo: '',
      darkMode:true,
      nav: [
        { text: '首页', link: '/' },
        { text: '社区', link: 'https://bbs.hamzone.cn', target:'_blank'},
      ],
      search: true,
      searchMaxSuggestions: 10,
      smoothScroll: true,
      nextLinks: false,
      prevLinks: false,
      // lastUpdated: 'Last Updated',
      locales: {
        '/': {
          selectText: 'Languages',
          label: '简体中文',
          sidebar: [
            {
              title: '接口',   // 必要的
              path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 3,    // 可选的, 默认值是 1
              children: [
                '/',
                '/zh-CN/desc/',
                '/zh-CN/site/',
                '/zh-CN/tools/'
              ]
            },
          ],
        },
        '/zh-HK/': {
          selectText: 'Languages',
          label: '繁體中文',
        },
        '/en-US/': {
          selectText: 'Languages',
          label: 'English',
        }
      }
    },
    port: 9090,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'HamZone.cn 开放接口文档',
            description: 'HamZone.cn 开放接口文档 - 中文站点',
        },
        '/zh-HK/': {
          lang: 'zh-HK',
          title: 'HamZone.cn 開放接口文檔',
          description: 'HamZone.cn 開放接口文檔 - 中文繁體站點',
        },
        '/en-US/': {
          lang: 'en-US',
          title: 'HamZone.cn Developer\'s Doc',
          description: 'HamZone.cn Developer\'s Doc - For English',
        },
    },
    plugins: [
      '@vuepress/back-to-top',
    ],
    plugins: {
      'sitemap': {
          hostname: 'https://dev.hamzone.cn'
      },
  },
  }