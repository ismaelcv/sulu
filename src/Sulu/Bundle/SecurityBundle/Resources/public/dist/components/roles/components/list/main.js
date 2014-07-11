define(function(){"use strict";var a=function(){this.sandbox.on("sulu.list-toolbar.add",function(){this.sandbox.emit("sulu.roles.new")}.bind(this)),this.sandbox.on("sulu.list-toolbar.delete",function(){this.sandbox.emit("husky.datagrid.items.get-selected",function(a){this.sandbox.emit("sulu.roles.delete",a)}.bind(this))}.bind(this)),this.sandbox.on("husky.datagrid.item.click",function(a){this.sandbox.emit("sulu.roles.load",a)}.bind(this))};return{name:"Sulu Security Role List",view:!0,layout:{content:{width:"max",leftSpace:!1,rightSpace:!1}},header:function(){return{title:"security.roles.title",noBack:!0,breadcrumb:[{title:"navigation.settings"},{title:"security.roles.title"}]}},templates:["/admin/security/template/role/list"],initialize:function(){this.initializeDataGrid(),a.call(this)},initializeDataGrid:function(){this.sandbox.dom.html(this.$el,this.renderTemplate("/admin/security/template/role/list")),this.sandbox.sulu.initListToolbarAndList.call(this,"rolesFields","/admin/api/roles/fields",{el:this.$find("#list-toolbar-container"),instanceName:"roles",inHeader:!0},{el:this.sandbox.dom.find("#roles-list",this.$el),url:"/admin/api/roles?flat=true",viewOptions:{table:{fullWidth:!0}}})}}});