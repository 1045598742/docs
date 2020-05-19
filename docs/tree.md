---
title: Tree 树形列表
---

# 开关 

<ClientOnly>
  <tree-demo></tree-demo>
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
                data
        </td>
        <td>
                树形的数据
        </td>
        <td>
                array
        </td>
        <td>
                ——
        </td>
        <td>
               []
        </td>
    </tr>
    <tr>
        <td>
                padding
        </td>
        <td>
                父子层级的错位距离（px）
        </td>
        <td>
                number
        </td>
        <td>
                ——
        </td>
        <td>
               20
        </td>
    </tr>
    <tr>
        <td>
                option
        </td>
        <td>
                树形数据的依据（label：树的显示文字的key，children：子数据的数组key）
        </td>
        <td>
                object
        </td>
        <td>
                ——
        </td>
        <td>
            {
              label:'name',
              children:'children'
            }
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
        <td width="100">
                说明
        </td>
        <td width="150">
                返回值
        </td>
    </tr>
    <tr>
        <td >
                node-click
        </td>
        <td >
                树列表点击事件
        </td>
        <td >
                第一个参数的当前节点信息，第二个参数是树的上下依赖关系 （第二个参数：{
                    level:当前节点的层级（第一层level为0），
                    parent：父节点的数据，无则为null，
                    children：子节点的数据，无则为null
                }）
        </td>
    </tr>
  
    
</table>