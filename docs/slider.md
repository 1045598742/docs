---
title: Slider 滑块
---

# 滑块 

<ClientOnly>
  <slider-demo></slider-demo>
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
                type
        </td>
        <td>
                滑块方向
        </td>
        <td>
                string
        </td>
        <td>
                hz/vl
        </td>
        <td>
               hz
        </td>
    </tr>
    <tr>
        <td>
                v-model
        </td>
        <td>
                双向数据绑定的值
        </td>
        <td>
                number
        </td>
        <td>
                ——
        </td>
        <td>
               0
        </td>
    </tr>
    <tr>
        <td>
                max
        </td>
        <td>
                滑块最大值
        </td>
        <td>
                number
        </td>
        <td>
                ——
        </td>
        <td>
           1
        </td>
    </tr>
    <tr>
        <td>
               lang 
        </td>
        <td>
              滑块的宽或高(hz模式下代表宽，vl模式下代表高)  
        </td>
        <td>
                string
        </td>
        <td>
                css单位
        </td>
        <td>
           100%
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
                input
        </td>
        <td >
                滑块变动即触发
        </td>
        <td >
             v-model值
        </td>
    </tr>
    <tr>
        <td >
                change
        </td>
        <td >
                鼠标移动滑块抬起触发
        </td>
        <td >
             v-model值
        </td>
    </tr>
  
    
</table>