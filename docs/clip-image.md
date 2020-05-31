---
title: Clip-Image 图片裁切
---


# 图片裁切 

<ClientOnly><clip-image></clip-image></ClientOnly>

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
        <td width="300">
                可选值
        </td>
        <td width="160">
                默认值
        </td>
    </tr>
    <tr>
        <td>
                type
        </td>
        <td>
                返回的图片数据类型
        </td>
        <td>
                string
        </td>
        <td>
                base64/file/formData
        </td>
        <td>
               base64
        </td>
    </tr>
    <tr>
        <td>
                slice
        </td>
        <td>
                是否开启切片功能
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
                maxWidth
        </td>
        <td>
                处理图片后的宽度
        </td>
        <td>
                number
        </td>
        <td>
                ——
        </td>
        <td>
           750
        </td>
    </tr>
    <tr>
        <td>
                maxHeight
        </td>
        <td>
                处理图片后的高度
        </td>
        <td>
                number
        </td>
        <td>
                ——
        </td>
        <td>
           500
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
        <td width="250">
                返回值
        </td>
    </tr>
    <tr>
        <td >
                finish
        </td>
        <td >
                切片完成后的返回值
        </td>
        <td >
             根据type值返回对应格式的数组
        </td>
    </tr>
</table>