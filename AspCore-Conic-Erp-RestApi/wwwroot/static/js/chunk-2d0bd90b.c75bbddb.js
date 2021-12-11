(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd90b"],{"2d14":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("p",[e._v(e._s(e.response))]),e._v(" "),o("el-card",{staticClass:"box-card"},[o("div",{attrs:{slot:"header"},slot:"header"},[o("add-device"),e._v(" "),o("span",[e._v("جميع الاجهزة")])],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData.filter((function(t){return!e.search||t.Name.toLowerCase().includes(e.search.toLowerCase())})),fit:"",border:"","max-height":"900","highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"Id",width:"80",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[o("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:function(t){return e.getdata()}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"Name",align:"center"},scopedSlots:e._u([{key:"header",fn:function(t){return[o("el-input",{attrs:{placeholder:e.$t("Classification.Name")},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"Ip",label:"IP",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{prop:"Port",label:"Port",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("Classification.Notes"),prop:"Description",width:"220",align:"center"}}),e._v(" "),o("el-table-column",{attrs:{prop:"Name",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:e.$store.getters.size,type:"success"},on:{click:function(o){return e.ClearAdministrators(t.row.Id)}}},[e._v("Clear Administrators")]),e._v(" "),o("el-button",{attrs:{size:e.$store.getters.size,type:"info"},on:{click:function(o){return e.GetAllFaceMember(t.row.Id)}}},[e._v("سحب جميع بصمات الوجه المشتركين")]),e._v(" "),o("el-button",{attrs:{size:e.$store.getters.size,type:"primary"},on:{click:function(o){return e.GetAllLogMember(t.row.Id)}}},[e._v("\n            سحب جميع سجلات المشتركين")]),e._v(" "),o("el-button",{attrs:{size:e.$store.getters.size,type:"warning"},on:{click:function(o){return e.SetAllMember(t.row.Id)}}},[e._v("\n            ارسال جميع معلومات المشتركين")]),e._v(" "),o("el-button",{attrs:{size:e.$store.getters.size,type:"danger"},on:{click:function(o){return e.ClearUserLog(t.row.Id)}}},[e._v("مسح سجلات المشتركين")]),e._v(" "),o("el-button",{attrs:{size:e.$store.getters.size,type:"success"},on:{click:function(o){return e.RestartDevice(t.row.Id)}}},[e._v("اعادة تشغيل الجهاز")])]}}])})],1)],1)],1)},r=[],s=o("4869"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-button",{attrs:{type:"warning",icon:"el-icon-circle-plus",size:e.$store.getters.size},on:{click:function(t){e.dialogFormVisible=!0}}}),e._v(" "),o("el-dialog",{staticStyle:{"margin-top":"-13vh"},attrs:{"show-close":!1,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("div",{staticClass:"dialog-footer",attrs:{slot:"title"},slot:"title"},[o("el-col",{attrs:{span:4}},[o("el-button",{staticStyle:{float:"left"},attrs:{icon:"fa fa-save",type:"primary"},on:{click:function(t){return e.createData()}}})],1),e._v(" "),o("el-col",{attrs:{span:20}},[o("el-divider",[e._v(" إضافة جهاز ")])],1)],1),e._v(" "),o("el-form",{ref:"dataForm",attrs:{rules:e.rulesForm,model:e.tempForm,"label-position":"top","label-width":"70px"}},[o("el-form-item",{attrs:{label:e.$t("Classification.Name"),prop:"Name"}},[o("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Name,callback:function(t){e.$set(e.tempForm,"Name",t)},expression:"tempForm.Name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("Ip"),prop:"Ip"}},[o("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Ip,callback:function(t){e.$set(e.tempForm,"Ip",t)},expression:"tempForm.Ip"}})],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("Classification.Port"),prop:"Port"}},[o("el-input",{attrs:{type:"text"},model:{value:e.tempForm.Port,callback:function(t){e.$set(e.tempForm,"Port",t)},expression:"tempForm.Port"}})],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("Classification.LastSetDateTime"),prop:"LastSetDateTime"}},[o("el-input",{attrs:{type:"text"},model:{value:e.tempForm.LastSetDateTime,callback:function(t){e.$set(e.tempForm,"LastSetDateTime",t)},expression:"tempForm.LastSetDateTime"}})],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("Classification.Notes"),prop:"Description"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.tempForm.Description,callback:function(t){e.$set(e.tempForm,"Description",t)},expression:"tempForm.Description"}})],1)],1)],1)],1)},i=[],l={data:function(){return{dialogFormVisible:!1,tempForm:{Id:void 0,Name:"",Ip:"",Port:"",Status:0,IsPrime:!0,LastSetDateTime:new Date,Description:""},rulesForm:{Name:[{required:!0,message:"يجب إدخال إسم ",trigger:"blur"},{minlength:3,maxlength:50,message:"الرجاء إدخال إسم لا يقل عن 3 أحرف و لا يزيد عن 50 حرف",trigger:"blur"}]}}},created:function(){this.resetTempForm()},methods:{resetTempForm:function(){this.tempForm={Id:void 0,Name:"",Ip:"",Port:"",Status:0,IsPrime:!0,LastSetDateTime:"",Description:""}},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(!t)return console.log("error submit!!"),!1;console.log(e.tempForm),Object(s["d"])(e.tempForm).then((function(t){e.dialogFormVisible=!1,e.$notify({title:"تم ",message:"تم الإضافة بنجاح",type:"success",duration:2e3})})).catch((function(e){console.log(e)}))}))}}},c=l,p=o("2877"),u=Object(p["a"])(c,a,i,!1,null,null,null),m=u.exports,d={name:"Device",components:{AddDevice:m},data:function(){return{tableData:[],loading:!0,search:"",response:""}},created:function(){this.getdata()},methods:{getdata:function(){var e=this;this.loading=!0,Object(s["g"])().then((function(t){console.log(t),e.tableData=t,e.loading=!1})).catch((function(t){e.response=t,console.log(t)}))},SetAllMember:function(e){var t=this;Object(s["k"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},ClearAdministrators:function(e){var t=this;Object(s["b"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},GetAllFaceMember:function(e){var t=this;Object(s["e"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},GetAllLogMember:function(e){var t=this;Object(s["f"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},ClearUserLog:function(e){var t=this;Object(s["c"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))},RestartDevice:function(e){var t=this;Object(s["j"])({DeviceId:e}).then((function(e){t.response=e,console.log(e)})).catch((function(e){t.response=e,console.log(e)}))}}},f=d,v=Object(p["a"])(f,n,r,!1,null,null,null);t["default"]=v.exports}}]);