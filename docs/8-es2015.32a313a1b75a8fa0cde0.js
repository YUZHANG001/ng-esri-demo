(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXpd:function(e,t,n){"use strict";n.r(t);var i=n("2kYt"),o=n("NcZ/"),r=n("sEIs"),s=n("D57K"),c=n("69HR"),a=n("EM62"),d=n("1i8C");const l=["editorEl"],b=[{path:"",component:(()=>{class e{constructor(e){this.map=e}ngOnInit(){this.messageEventHandler=this.receiveMessage.bind(this),addEventListener("message",this.messageEventHandler,!1)}ngOnDestroy(){removeEventListener("message",this.messageEventHandler)}loadWebSceneToEditor(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.map.loadWebSceneProperties();this.editorEl.nativeElement.contentWindow.postMessage({language:"json",value:JSON.stringify(e,null,"  ")},"*")}))}updateWebScene(){return Object(s.a)(this,void 0,void 0,(function*(){const e=yield this.map.loadWebSceneProperties();this.map.sceneView.subscribe(t=>{e.initialViewProperties.viewingMode=t.viewingMode,e.initialViewProperties.viewpoint=t.viewpoint,this.loadWebSceneToEditor()})}))}updateSceneView(){this.editorEl.nativeElement.contentWindow.postMessage("getValue","*")}cloneWebScene(){const e=JSON.stringify(this.webscene);return JSON.parse(e)}receiveMessage(e){this.editorEl.nativeElement.src.startsWith(e.origin)&&this.map.sceneView.subscribe(t=>Object(s.a)(this,void 0,void 0,(function*(){try{const n=JSON.parse(e.data);this.webscene=n;const i=this.cloneWebScene(),o=yield c.c(i);t.map=o}catch(n){alert("\u914d\u7f6e\u9519\u8bef\uff01"),console.error(n)}})))}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(d.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-scene-editor-home"]],viewQuery:function(e,t){var n;1&e&&a.uc(l,!0),2&e&&a.oc(n=a.ec())&&(t.editorEl=n.first)},decls:12,vars:0,consts:[["href","https://developers.arcgis.com/javascript/latest/api-reference/","target","_blank",1,"m-1","text-muted"],[1,"fas","fa-info-circle"],["src","https://beginor.github.io/monaco-editor/index.html",1,"code-editor","border","border-secondary","m-1",3,"load"],["editorEl",""],[1,"tools","btn-group","btn-group-sm","m-1"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],[1,"fa","fa-fw","fa-angle-double-left"],[1,"fa","fa-fw","fa-angle-double-right"]],template:function(e,t){1&e&&(a.Rb(0,"a",0),a.Nb(1,"i",1),a.yc(2," ArcGIS JS API Reference"),a.Qb(),a.Rb(3,"iframe",2,3),a.dc("load",(function(e){return t.loadWebSceneToEditor()})),a.Qb(),a.Rb(5,"div",4),a.Rb(6,"button",5),a.dc("click",(function(e){return t.updateWebScene()})),a.Nb(7,"i",6),a.yc(8," \u66f4\u65b0\u914d\u7f6e "),a.Qb(),a.Rb(9,"button",5),a.dc("click",(function(e){return t.updateSceneView()})),a.Nb(10,"i",7),a.yc(11," \u66f4\u65b0\u5730\u56fe "),a.Qb(),a.Qb())},styles:["[_nghost-%COMP%]{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}[_nghost-%COMP%]   .code-editor[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}"]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[r.c.forChild(b)],r.c]}),e})();n.d(t,"SceneEditorModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[i.b,o.b,u]]}),e})()}}]);