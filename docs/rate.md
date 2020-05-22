---
title: Rate 评分
---

# 评分 

<ClientOnly>
  <rate-demo></rate-demo>
</ClientOnly>

#
<h2>参数说明</h2> 
<table width="100%">
    <tr>
        <td width="80">
                参数
        </td>
        <td width="150">
                说明
        </td>
        <td width="80">
                类型
        </td>
        <td width="80">
                可选值
        </td>
        <td width="300">
                默认值
        </td>
    </tr>
    <tr>
        <td>
                v-model
        </td>
        <td>
                绑定的数值
        </td>
        <td>
                ——
        </td>
        <td>
                ——
        </td>
        <td>
               ——
        </td>
    </tr>
    <tr>
        <td>
                disable
        </td>
        <td>
                是否禁用修改评分
        </td>
        <td>
                boolean
        </td>
        <td>
                ——
        </td>
        <td>
               false
        </td>
    </tr>
    <tr>
        <td>
                icon
        </td>
        <td>
                评分的图标class
        </td>
        <td>
                string
        </td>
        <td>
                ——
        </td>
        <td>
                ★
        </td>
    </tr>
    <tr>
        <td>
                color
        </td>
        <td>
                评分高亮的图标颜色
        </td>
        <td>
                string
        </td>
        <td>
                ——
        </td>
        <td>
                #FF9900
        </td>
    </tr>
    <tr>
        <td>
                showText
        </td>
        <td>
                是否显示评分文字
        </td>
        <td>
                boolean
        </td>
        <td>
                ——
        </td>
        <td>
                false
        </td>
    </tr>
    <tr>
        <td>
                rateText
        </td>
        <td>
                评分文字数组
        </td>
        <td>
                array
        </td>
        <td>
                ——
        </td>
        <td>
                ["垃圾", "较差", "一般", "凑合", "牛逼"]
        </td>
    </tr>
    <tr>
        <td>
                max
        </td>
        <td>
                评分最大数值
        </td>
        <td>
                number
        </td>
        <td>
                ——
        </td>
        <td>
                5
        </td>
    </tr>

</table>



#

<h2>事件说明</h2> 
<table width="100%">
    <tr>
        <td  width="80">
                参数
        </td>
        <td width="500">
                说明
        </td>
        <td width="300">
                返回值
        </td>
    </tr>
    <tr>
        <td >
                change
        </td>
        <td >
                评分修改触发
        </td>
        <td >
                修改后的评分数值
        </td>
    </tr>
  
    
</table>