---
title: Dialog 弹窗
---

# 弹窗 

<ClientOnly>
  <dialog-demo></dialog-demo>
</ClientOnly>

#
<h2>参数说明</h2> 
<table width="100%">
    <tr>
        <td width="150">
                参数
        </td>
        <td width="300">
                说明
        </td>
        <td width="80">
                类型
        </td>
        <td width="80">
                可选值
        </td>
        <td width="100">
                默认值
        </td>
    </tr>
    <tr>
        <td>
                width
        </td>
        <td>
                弹窗的宽度
        </td>
        <td>
               string
        </td>
        <td>
                ——
        </td>
        <td>
               40%
        </td>
    </tr>
    <tr>
        <td>
                title
        </td>
        <td>
                弹窗头部的标题
        </td>
        <td>
                string
        </td>
        <td>
                ——
        </td>
        <td>
               弹窗提示
        </td>
    </tr>
    <tr>
        <td>
                visible
        </td>
        <td>
                弹窗是否显示(支持sync修饰符)
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
                escClose
        </td>
        <td>
                是否需要esc按键关闭弹窗
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
                modeClickClose
        </td>
        <td>
                是否需要点击蒙层关闭弹窗
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
                headerShow
        </td>
        <td>
                是否显示弹窗头部
        </td>
        <td>
                boolean
        </td>
        <td>
                ——
        </td>
        <td>
                true
        </td>
    </tr>
    <tr>
        <td>
                closeButtonShow
        </td>
        <td>
                是否显示弹窗头部关闭按钮
        </td>
        <td>
                boolean
        </td>
        <td>
                ——
        </td>
        <td>
                true
        </td>
    </tr>
    <tr>
        <td>
                drop
        </td>
        <td>
                是否启用dialog拖拽功能
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
                open
        </td>
        <td >
                弹窗开启的事件
        </td>
        <td >
                ——
        </td>
    </tr>
    <tr>
        <td >
                close
        </td>
        <td >
                弹窗关闭的事件
        </td>
        <td >
                ——
        </td>
    </tr>
</table>