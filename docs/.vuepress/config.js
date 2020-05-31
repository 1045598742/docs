const moment = require('moment');
module.exports = {
  base:'/docs/',
    title:'Lb-Vue-Ui',
    description:'Lb-Vue-Ui 个人网站 一套记录学习的基于 Vue 2.0 的PC端UI小组件',
    head: [
      ['link', { rel: 'icon', href: '/assets/img/logo.png' }],
      ['meta', { name: 'author', content: 'Lb-Vue-Ui' }],
      ['meta', { name: 'keywords', content: 'Lb-Vue-Ui 个人网站 一套记录学习的基于 Vue 2.0 的PC端UI小组件' }],
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
        { text: '组件介绍', link: '/startQuick.html',
        },
        // {
        //   text: 'Languages',
        //   ariaLabel: 'Language Menu',
        //   items: [
        //     { text: 'Chinese', link: '/language/chinese/' },
        //     { text: 'Japanese', link: '/language/japanese/' }
        //   ]
        // },
        { text: 'github', link: 'https://github.com/1045598742/Lb-VuElement-Ui' },
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
            '/switch',
            '/rate',
            '/input',
            '/select',
            '/date-picker',
            '/pagination',
            '/swiper',
            '/tree',
            '/dialog',
            '/slider',
            '/music',
            '/clip-image',
            '/form',
          ]
        }
    ]
    }
  }