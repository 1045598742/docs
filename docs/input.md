# 输入框 

<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

#
<h2>参数说明</h2> 
<table width="100%">
    <tr>
        <td width="90">
                参数
        </td>
        <td width="249">
                说明
        </td>
        <td width="100">
                类型
        </td>
        <td width="120">
                可选值
        </td>
        <td width="30">
                默认值
        </td>
    </tr>
    <tr>
        <td>
                value/v-model
        </td>
        <td>
                绑定的数据值
        </td>
        <td>
                —
        </td>
        <td>
                —
        </td>
        <td>
                ''
        </td>
    </tr>
    <tr>
        <td>
                type
        </td>
        <td>
                输入框类型
        </td>
        <td>
                string
        </td>
        <td>
                text,textarea
        </td>
        <td>
                text
        </td>
    </tr>
    <tr>
        <td>
                clearable
        </td>
        <td>
                是否使用清除按钮
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
                readonly
        </td>
        <td>
                是否只读输入框
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
                autofocus
        </td>
        <td>
                是否获取焦点
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
                prevIcon
        </td>
        <td>
                使用左侧图标(除textarea)
        </td>
        <td>
                string(类名)
        </td>
        <td>
                —
        </td>
        <td>
                ''
        </td>
    </tr>
    <tr>
        <td>
                nextIcon
        </td>
        <td>
                使用右侧图标(除textarea)
        </td>
        <td>
                string(类名)
        </td>
        <td>
                —
        </td>
        <td>
                ''
        </td>
    </tr>
    <tr>
        <td>
                cols
        </td>
        <td>
              textarea原生属性（只对type=textarea有效）
        </td>
        <td>
                string/number
        </td>
        <td>
                —
        </td>
        <td>
                1
        </td>
    </tr>
    <tr>
        <td>
                rows
        </td>
        <td>
              textarea原生属性（只对type=textarea有效）
        </td>
        <td>
                string/number
        </td>
        <td>
                —
        </td>
        <td>
                3
        </td>
    </tr>
    <tr>
        <td>
                resize
        </td>
        <td>
              textarea是否可缩放（只对type=textarea有效）
        </td>
        <td >
                string
        </td>
        <td >
                none/both/horizontal/vertical/inherit
        </td>
        <td>
                ''
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
                input
        </td>
        <td >
                输入框值改变触发
        </td>
        <td >
                string
        </td>
    </tr>
    <tr>
        <td >
                change
        </td>
        <td >
                输入框值改变触发
        </td>
        <td >
                string
        </td>
    </tr>
    <tr>
        <td >
                blur
        </td>
        <td >
                输入框失去焦点触发
        </td>
        <td >
                $event
        </td>
    </tr>
    <tr>
        <td >
                focus
        </td>
        <td >
                输入框获得焦点触发
        </td>
        <td >
                $event
        </td>
    </tr>
    
</table>