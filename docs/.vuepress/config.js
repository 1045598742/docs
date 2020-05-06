const moment = require('moment');
module.exports = {
  base:'/docs/',
    title:'李博的个人网站',
    description:'李博的个人网站',
    head: [
      ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
      ['meta', { name: 'author', content: '李博' }],
      ['meta', { name: 'keywords', content: '李博的个人网站666' }],
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            moment.locale('zh-CN')
            return moment(timestamp).format('YYYY-YY-DD HH:mm:ss')
          }
        }
      ]
    ],
    lastUpdated: 'Last Updated',  //最后更新时间
    themeConfig: {
      displayAllHeaders: true, //显示所有页面的标题链接
      smoothScroll: true,//启用页面滚动效果
      logo: '/assets/img/logo.png',
      //  displayAllHeaders: true, // 默认值：false
      nav: [
        { text: '首页', link: '/' },
        { text: '组件介绍', link: '/about.html',
        },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        },
        { text: 'External', link: 'https://google.com' },
      ],
      // sidebar: 'auto'//自动模式
      sidebar: [
        ['/', '首页'],
        {
            title: '我的博客',
            children: [
                ['/about.html', '组件列表']
            ]
        }

    ]
    }
  }