(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ZrEh:function(e,n,t){"use strict";t.r(n);var r=t("LoAr"),l=function(){return function(){}}(),u=t("C9Ky"),s=t("981U"),a=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),c=r.qb({encapsulation:0,styles:[[""]],data:{}});function i(e){return r.Mb(0,[(e()(),r.sb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r.rb(1,212992,null,0,s.p,[s.b,r.P,r.j,[8,null],r.h],null,null)],function(e,n){e(n,1,0)},null)}function o(e){return r.Mb(0,[(e()(),r.sb(0,0,null,null,1,"app-home",[],null,null,null,i,c)),r.rb(1,114688,null,0,a,[],null,null)],function(e,n){e(n,1,0)},null)}var b=r.ob("app-home",a,o,{},{},[]),d=t("WT9V"),p=function(){function e(){}return e.prototype.ngOnInit=function(){},e}(),y=r.qb({encapsulation:0,styles:[[""]],data:{}});function f(e){return r.Mb(0,[(e()(),r.sb(0,0,null,null,10,"div",[["class","container-fluid"]],null,null,null,null,null)),(e()(),r.sb(1,0,null,null,9,"div",[["class","row mt-5 justify-content-center mx-sm-2 mx-md-0"]],null,null,null,null,null)),(e()(),r.sb(2,0,null,null,8,"div",[["class","col-md-4"]],null,null,null,null,null)),(e()(),r.sb(3,0,null,null,3,"a",[["class","btn btn-outline-success btn-lg btn-block"],["routerLink","map"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var l=!0;return"click"===n&&(l=!1!==r.Eb(e,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&l),l},null,null)),r.rb(4,671744,null,0,s.n,[s.k,s.a,d.i],{routerLink:[0,"routerLink"]},null),(e()(),r.sb(5,0,null,null,0,"i",[["class","esri-icon-maps"]],null,null,null,null,null)),(e()(),r.Kb(-1,null,[" Map View "])),(e()(),r.sb(7,0,null,null,3,"a",[["class","btn btn-outline-success btn-lg btn-block"],["routerLink","scene"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var l=!0;return"click"===n&&(l=!1!==r.Eb(e,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&l),l},null,null)),r.rb(8,671744,null,0,s.n,[s.k,s.a,d.i],{routerLink:[0,"routerLink"]},null),(e()(),r.sb(9,0,null,null,0,"i",[["class","esri-icon-globe"]],null,null,null,null,null)),(e()(),r.Kb(-1,null,[" Scene View "]))],function(e,n){e(n,4,0,"map"),e(n,8,0,"scene")},function(e,n){e(n,3,0,r.Eb(n,4).target,r.Eb(n,4).href),e(n,7,0,r.Eb(n,8).target,r.Eb(n,8).href)})}function h(e){return r.Mb(0,[(e()(),r.sb(0,0,null,null,1,"app-dashboard",[],null,null,null,f,y)),r.rb(1,114688,null,0,p,[],null,null)],function(e,n){e(n,1,0)},null)}var m=r.ob("app-dashboard",p,h,{},{},[]),w=t("D57K"),v=t("sCFI");function M(e){return w.b(this,void 0,void 0,function(){var n;return w.e(this,function(t){switch(t.label){case 0:return[4,L(e)];case 1:return t.sent(),[4,Object(v.loadModules)(["esri/Map"])];case 2:return n=t.sent()[0],[4,L(e)];case 3:return t.sent(),[2,new n(e)]}})})}function g(e){return w.b(this,void 0,void 0,function(){return w.e(this,function(n){switch(n.label){case 0:return[4,Object(v.loadModules)(["esri/views/MapView"])];case 1:return[2,new(0,n.sent()[0])(e)]}})})}function O(e){return w.b(this,void 0,void 0,function(){return w.e(this,function(n){switch(n.label){case 0:return[4,Object(v.loadModules)(["esri/views/SceneView"])];case 1:return[2,new(0,n.sent()[0])(e)]}})})}function L(e){return w.b(this,void 0,void 0,function(){var n,t,r,l,u;return w.e(this,function(s){switch(s.label){case 0:return e.layers?(n=e,[4,j(e.layers)]):[3,2];case 1:n.layers=s.sent(),s.label=2;case 2:return"string"==typeof e.basemap?[3,4]:(r=t=e.basemap,[4,j(t.baseLayers)]);case 3:r.baseLayers=s.sent(),s.label=4;case 4:return"string"==typeof e.ground?[3,6]:(u=l=e.ground,[4,j(l.layers)]);case 5:u.layers=s.sent(),s.label=6;case 6:return[2]}})})}function j(e){return w.b(this,void 0,void 0,function(){var n,t,r,l;return w.e(this,function(u){switch(u.label){case 0:n=[],t=0,r=e,u.label=1;case 1:return t<r.length?[4,k(r[t])]:[3,4];case 2:l=u.sent(),n.push(l),u.label=3;case 3:return t++,[3,1];case 4:return[2,n]}})})}function k(e){return w.b(this,void 0,void 0,function(){var n,t,r,l,u,s,a,c,i,o,b,d,p,y,f,h,m,M,g,O,L,j,k;return w.e(this,function(w){switch(w.label){case 0:switch(n=e.type,delete e.type,n){case"feature":return[3,1];case"graphics":return[3,3];case"tile":return[3,5];case"web-tile":return[3,7];case"elevation":return[3,9];case"imagery":return[3,11];case"integrated-mesh":return[3,13];case"map-image":return[3,15];case"map-notes":return[3,17];case"point-cloud":return[3,19];case"scene":return[3,21];case"stream":return[3,23];case"vector-tile":return[3,25];case"bing-maps":return[3,27];case"csv":return[3,29];case"georss":return[3,31];case"group":return[3,33];case"kml":return[3,35];case"open-street-map":return[3,37];case"wms":return[3,39];case"wmts":return[3,41]}return[3,43];case 1:return[4,Object(v.loadModules)(["esri/layers/FeatureLayer"])];case 2:return r=w.sent()[0],t=new r(e),[3,44];case 3:return[4,Object(v.loadModules)(["esri/layers/GraphicsLayer"])];case 4:return l=w.sent()[0],t=new l(e),[3,44];case 5:return[4,Object(v.loadModules)(["esri/layers/TileLayer"])];case 6:return u=w.sent()[0],t=new u(e),[3,44];case 7:return[4,Object(v.loadModules)(["esri/layers/WebTileLayer"])];case 8:return s=w.sent()[0],t=new s(e),[3,44];case 9:return[4,Object(v.loadModules)(["esri/layers/ElevationLayer"])];case 10:return a=w.sent()[0],t=new a(e),[3,44];case 11:return[4,Object(v.loadModules)(["esri/layers/ImageryLayer"])];case 12:return c=w.sent()[0],t=new c(e),[3,44];case 13:return[4,Object(v.loadModules)(["esri/layers/IntegratedMeshLayer"])];case 14:return i=w.sent()[0],t=new i(e),[3,44];case 15:return[4,Object(v.loadModules)(["esri/layers/MapImageLayer"])];case 16:return o=w.sent()[0],t=new o(e),[3,44];case 17:return[4,Object(v.loadModules)(["esri/layers/MapNotesLayer"])];case 18:return b=w.sent()[0],t=new b(e),[3,44];case 19:return[4,Object(v.loadModules)(["esri/layers/PointCloudLayer"])];case 20:return d=w.sent()[0],t=new d(e),[3,44];case 21:return[4,Object(v.loadModules)(["esri/layers/SceneLayer"])];case 22:return p=w.sent()[0],t=new p(e),[3,44];case 23:return[4,Object(v.loadModules)(["esri/layers/StreamLayer"])];case 24:return y=w.sent()[0],t=new y(e),[3,44];case 25:return[4,Object(v.loadModules)(["esri/layers/VectorTileLayer"])];case 26:return f=w.sent()[0],t=new f(e),[3,44];case 27:return[4,Object(v.loadModules)(["esri/layers/BingMapsLayer"])];case 28:return h=w.sent()[0],t=new h(e),[3,44];case 29:return[4,Object(v.loadModules)(["esri/layers/CSVLayer"])];case 30:return m=w.sent()[0],t=new m(e),[3,44];case 31:return[4,Object(v.loadModules)(["esri/layers/GeoRSSLayer"])];case 32:return M=w.sent()[0],t=new M(e),[3,44];case 33:return[4,Object(v.loadModules)(["esri/layers/GroupLayer"])];case 34:return g=w.sent()[0],t=new g(e),[3,44];case 35:return[4,Object(v.loadModules)(["esri/layers/KMLLayer"])];case 36:return O=w.sent()[0],t=new O(e),[3,44];case 37:return[4,Object(v.loadModules)(["esri/layers/OpenStreetMapLayer"])];case 38:return L=w.sent()[0],t=new L(e),[3,44];case 39:return[4,Object(v.loadModules)(["esri/layers/WMSLayer"])];case 40:return j=w.sent()[0],t=new j(e),[3,44];case 41:return[4,Object(v.loadModules)(["esri/layers/WMTSLayer"])];case 42:return k=w.sent()[0],t=new k(e),[3,44];case 43:throw new Error("Unknown layer type: "+n);case 44:return[2,t]}})})}var E=function(){function e(e){this.http=e}return e.prototype.ngOnInit=function(){return w.b(this,void 0,void 0,function(){var e,n,t;return w.e(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),[4,M({basemap:"satellite"})];case 1:return e=r.sent(),[4,g({container:this.mapElement.nativeElement,map:e,zoom:7,center:{longitude:113.2,latitude:23.4}})];case 2:return n=r.sent(),this.mapView=n,[4,n.when()];case 3:return r.sent(),[3,5];case 4:return t=r.sent(),console.error(t),[3,5];case 5:return[2]}})})},e.prototype.ngOnDestroy=function(){},e}(),C=t("GiBk"),K=r.qb({encapsulation:0,styles:[["div.map[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;height:100%}"]],data:{}});function V(e){return r.Mb(0,[r.Ib(402653184,1,{mapElement:0}),(e()(),r.sb(1,0,[[1,0],["mapElement",1]],null,0,"div",[["class","map"],["id","map"]],null,null,null,null,null))],null,null)}function I(e){return r.Mb(0,[(e()(),r.sb(0,0,null,null,1,"app-map-view",[],null,null,null,V,K)),r.rb(1,245760,null,0,E,[C.c],null,null)],function(e,n){e(n,1,0)},null)}var S=r.ob("app-map-view",E,I,{},{},[]),T=function(){function e(e){this.http=e}return e.prototype.ngOnInit=function(){return w.b(this,void 0,void 0,function(){var e,n,t;return w.e(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),[4,M({basemap:"satellite",ground:"world-elevation"})];case 1:return e=r.sent(),[4,O({container:this.mapElement.nativeElement,map:e,zoom:7,center:{longitude:113.2,latitude:23.4},viewingMode:"local"})];case 2:return n=r.sent(),this.sceneView=n,[4,n.when()];case 3:return r.sent(),[3,5];case 4:return t=r.sent(),console.error(t),[3,5];case 5:return[2]}})})},e.prototype.ngOnDestroy=function(){this.sceneView&&this.sceneView.destroy()},e}(),q=r.qb({encapsulation:0,styles:[["div.map[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;height:100%}"]],data:{}});function G(e){return r.Mb(0,[r.Ib(402653184,1,{mapElement:0}),(e()(),r.sb(1,0,[[1,0],["mapElement",1]],null,0,"div",[["class","map"],["id","map"]],null,null,null,null,null))],null,null)}function P(e){return r.Mb(0,[(e()(),r.sb(0,0,null,null,1,"app-scene-view",[],null,null,null,G,q)),r.rb(1,245760,null,0,T,[C.c],null,null)],function(e,n){e(n,1,0)},null)}var W=r.ob("app-scene-view",T,P,{},{},[]),A=function(){return function(){}}();t.d(n,"ArcgisModuleNgFactory",function(){return B});var B=r.pb(l,[],function(e){return r.Bb([r.Cb(512,r.j,r.ab,[[8,[u.a,b,m,S,W]],[3,r.j],r.y]),r.Cb(4608,d.m,d.l,[r.v,[2,d.A]]),r.Cb(1073742336,d.c,d.c,[]),r.Cb(1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),r.Cb(1073742336,A,A,[]),r.Cb(1073742336,l,l,[]),r.Cb(1024,s.i,function(){return[[{path:"",component:a,children:[{path:"",component:p},{path:"map",component:E},{path:"scene",component:T}]}]]},[])])})}}]);