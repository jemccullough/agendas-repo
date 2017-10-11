    <table>
<#list resultset as node>
     <tr>
       <td><img src="${url.context}${node.icon16}"/>
       <td><a href="${url.serviceContext}/api/node/content/${node.nodeRef.storeRef.protocol}/${node.nodeRef.storeRef.identifier}/${node.nodeRef.id}/${node.name?url}">${node.name}</a>
     </tr>
</#list>
    </table>
    
<!-- ${queryTest}  
TEST
-->