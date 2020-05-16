# 分页器

<ClientOnly>
  <pagination-demo></pagination-demo>
</ClientOnly>

#

<h2>属性说明</h2> 
<table width="100%">
    <tr>
        <td  width="80">
                参数
        </td>
        <td width="249">
                说明
        </td>
        <td width="50">
                类型
        </td>
        <td width="120">
                可选值
        </td>
        <td width="100">
                默认值
        </td>
    </tr>
    <tr>
        <td >
                pageIndex
        </td>
        <td >
                当前显示的页码(支持sync修饰符)
        </td>
        <td >
                number
        </td>
        <td >
                ≥1
        </td>
        <td >
                1
        </td>
    </tr>
        <tr>
        <td >
                pageLimit
        </td>
        <td >
                当前显示的每页条数(支持sync修饰符)
        </td>
        <td >
                number
        </td>
        <td >
                ≥1
        </td>
        <td >
                10
        </td>
    </tr>
        <tr>
        <td>
                pageCount
        </td>
        <td>
                页面显示出现的最大数量(不包括省略号)
        </td>
        <td>
                ≥4
        </td>
        <td>
                —
        </td>
        <td >
                7
        </td>
    </tr>
        <tr>
        <td>
                limitOption
        </td>
        <td>
                每页条数可选项
        </td>
        <td>
                array
        </td>
        <td>
                —
        </td>
        <td >
                [10, 20, 30, 50]
        </td>
    </tr>
        <tr>
        <td>
                layout
        </td>
        <td>
                分页的布局
        </td>
        <td>
                array
        </td>
        <td>
                limit, prev, page, next, go, total
        </td>
        <td>
                [limit, prev, page, next, go, total]
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
                pageIndexChange
        </td>
        <td >
                当前页码改变触发
        </td>
        <td >
                number
        </td>
    </tr>
    <tr>
        <td >
                pageLimitChange
        </td>
        <td >
                当前每页条数改变触发
        </td>
        <td >
                number
        </td>
    </tr>
    
</table>
