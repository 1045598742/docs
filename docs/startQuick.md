---
title: StartQuick 快速上手
---

# 快速上手

本组件1.1.0版本已经发布到npm上。

~~~js
//全局引入方式
import Vue from 'vue'
import lbui from 'lb-vue-ui'
import 'lb-vue-ui/Lb-vueUi.css' // 引入组件样式
Vue.use(lbui)

//按需引入的方式
import {
    Button,
    Swiper,
    SwiperItem,
    Select,
    Option,
    Input,
    Rate,
    Switch,
    DatePicker,
    Pagination,
    Tree,
    Dialog,
    Slider,
    ClipImage
} from 'lb-vue-ui'

Vue.use(Button)；
Vue.use(Swiper)；
Vue.use(SwiperItem)；
...
~~~


此组件是本人在下班之余以学习和娱乐目的进行开发，意义在于提升自我，请不要将此组件库使用在生产环境（仅供参考！！！）

此组件主要参考了element-ui以及iview的需求和样式，有些思路灵感来源于这些成熟的UI框架，但是有些实际实现功能的代码相比框架会low一些，欢迎热情活跃的小伙伴来提一些意见或者建议，共同进步！

目前的组件不够完善，可能会有些许bug，后期在迭代中会不断修复和开发新组件。

此页内容待完善