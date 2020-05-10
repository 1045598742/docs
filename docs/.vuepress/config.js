const moment = require('moment');
module.exports = {
  base:'/docs/',
    title:'Lb-VuElement-Ui',
    description:'李博的个人网站',
    head: [
      ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
      ['meta', { name: 'author', content: '李博' }],
      ['meta', { name: 'keywords', content: '李博的个人网站' }],
    ],
    // markdown: {
    //   lineNumbers: true
    // },
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            moment.locale('zh-CN')
            return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
          }
        }
      ]
    ],
    lastUpdated: 'Last Updated',  //最后更新时间
    themeConfig: {
      displayAllHeaders: true, //显示所有页面的标题链接 默认值：false
      smoothScroll: true,//启用页面滚动效果
      logo: '/assets/img/logo.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '组件介绍', link: '/swiper.html',
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
        ['/', '介绍'],
        {
          title:'入门',
          collapsable:false,
          children:[
            '/install',
            '/startQuick'
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            '/button',
            '/swiper',
          ]
        }
    ]
    }
  }