---
title: Switch 开关
---

# 开关 

<ClientOnly>
  <switch-demo></switch-demo>
</ClientOnly>

#
<h2>参数说明</h2> 
<table width="100%">
    <tr>
        <td width="120">
                参数
        </td>
        <td width="250">
                说明
        </td>
        <td width="80">
                类型
        </td>
        <td width="120">
                可选值
        </td>
        <td width="160">
                默认值
        </td>
    </tr>
    <tr>
        <td>
                v-model
        </td>
        <td>
                双向绑定值
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
                custom-value
        </td>
        <td>
                开关状态对应的value
        </td>
        <td>
                object
        </td>
        <td>
                ——
        </td>
        <td>
                { on: true, off: false }
        </td>
    </tr>
    <tr>
        <td>
                on-color
        </td>
        <td>
                开启状态的背景色
        </td>
        <td>
                string
        </td>
        <td>
                css颜色格式即可
        </td>
        <td>
                #3eaf7c
        </td>
    </tr>
    <tr>
        <td>
                off-color
        </td>
        <td>
                关闭状态的背景色
        </td>
        <td>
                string
        </td>
        <td>
                css颜色格式即可
        </td>
        <td>
                #dcdfe6
        </td>
    </tr>
    <tr>
        <td>
                flag-color
        </td>
        <td>
                开关按钮的颜色
        </td>
        <td>
                string
        </td>
        <td>
                css颜色格式即可
        </td>
        <td>
                white
        </td>
    </tr>
    <tr>
        <td>
                disabled
        </td>
        <td>
                是否禁用开关
        </td>
        <td>
                boolean
        </td>
        <td>
                —
        </td>
        <td>
                false
        </td>
    </tr>
    <tr>
        <td>
                switch-width
        </td>
        <td>
                开关的宽度
        </td>
        <td>
                string
        </td>
        <td>
                —
        </td>
        <td>
                50px
        </td>
    </tr>
</table>



#

<h2>事件说明</h2> 
<table width="100%">
    <tr>
        <td  width="200">
                参数
        </td>
        <td width="600">
                说明
        </td>
        <td width="150">
                返回值
        </td>
    </tr>
    <tr>
        <td >
                change
        </td>
        <td >
                开关绑定值改变触发
        </td>
        <td >
                对应的状态值
        </td>
    </tr>
  
    
</table>