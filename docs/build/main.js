webpackJsonp([1],{118:function(n,l,a){"use strict";var u=function(){return function(){}}();a.d(l,"a",function(){return i});var i=function(){function n(){}return n.getDataList=function(){return n._dataList?n._dataList:(n.check(),n._dataList)},n.getDataMap=function(){return n._dataMap?n._dataMap:(n.check(),n._dataMap)},n.check=function(){n._dataList=[],n._dataMap={},console.log(n.data);for(var l in n.data){console.log(l);var a=new u,i=n.data[l];a.name=l,a.id=i.id,a.list=i.list,a.how=i.how,a.base=i.base,a.comment=i.comment,a.commentChild=i.commentChild,a.battleCoin=i.battleCoin,a.hierarchy=i.hierarchy,n.data[l].select&&n._dataList.push(a),n._dataMap[a.id]=a}console.log(n._dataMap)},n.data={"フェリヤ":{hierarchy:2,id:"feriya",how:"白の塔"},"神フェリヤ":{hierarchy:1,id:"god-feriya",select:!0,base:"feriya",list:[{id:"feriya",num:2},{id:"god-guardian",num:2},{id:"evil-guardian",num:1},{id:"dragon-guardian",num:1}]},"魔フェリヤ":{hierarchy:1,id:"evil-feriya",select:!0,base:"feriya",list:[{id:"feriya",num:2},{id:"god-guardian",num:1},{id:"evil-guardian",num:2},{id:"dragon-guardian",num:1}]},"竜フェリヤ":{hierarchy:1,id:"dragon-feriya",select:!0,base:"feriya",list:[{id:"feriya",num:2},{id:"god-guardian",num:1},{id:"evil-guardian",num:1},{id:"dragon-guardian",num:2}]},"神の守護者":{hierarchy:3,id:"god-guardian",select:!0,base:"guardian",list:[{id:"guardian",num:1},{id:"fight-munia",num:2},{id:"archimedes",num:2},{id:"cardia",num:2}]},"魔の守護者":{hierarchy:3,id:"evil-guardian",select:!0,base:"guardian",list:[{id:"guardian",num:1},{id:"fight-branjetta",num:2},{id:"shyturn",num:3},{id:"rokujo",num:3}]},"竜の守護者":{hierarchy:3,id:"dragon-guardian",select:!0,base:"guardian",list:[{id:"guardian",num:1},{id:"fight-guelius",num:2},{id:"caocao",num:3},{id:"theresia",num:3}]},"守護者":{hierarchy:4,id:"guardian",how:"白の塔"},"闘化ムーニア":{hierarchy:5,id:"fight-munia",select:!0,base:"munia",list:[{id:"archimedes",num:1},{id:"god-soul",num:3},{id:"diamond-carbuncle",num:2},{id:"platinum-carbuncle",num:3}]},"闘化ブランジェッタ":{hierarchy:5,id:"fight-branjetta",select:!0,base:"branjetta",list:[{id:"moruana",num:1},{id:"evil-soul",num:3},{id:"diamond-carbuncle",num:2},{id:"platinum-carbuncle",num:3}]},"闘化グエリアス":{hierarchy:5,id:"fight-guelius",select:!0,base:"guelius",list:[{id:"theresia",num:1},{id:"dragon-soul",num:3},{id:"diamond-carbuncle",num:2},{id:"platinum-carbuncle",num:3}]},"アルキメデス":{hierarchy:7,id:"archimedes",how:"絶望決戦"},"カルディア":{hierarchy:7,id:"cardia",how:"絶望決戦"},"六条御息所":{hierarchy:7,id:"rokujo",how:"絶望決戦"},"シャイターン":{hierarchy:7,id:"shyturn",how:"絶望決戦"},"曹操":{hierarchy:7,id:"caocao",how:"絶望決戦"},"モルアナ":{hierarchy:7,id:"moruana",how:"絶望決戦"},"テレジア":{hierarchy:7,id:"theresia",how:"絶望決戦"},"ゴッドソウル":{hierarchy:8,id:"god-soul",how:"バトルコイン",battleCoin:20},"エビルソウル":{hierarchy:8,id:"evil-soul",how:"バトルコイン",battleCoin:20},"ドラゴソウル":{hierarchy:8,id:"dragon-soul",how:"バトルコイン",battleCoin:20},"ダイアモンドカーバンクル":{hierarchy:9,id:"diamond-carbuncle",how:"バトルコイン",battleCoin:100},"プラチナカーバンクル":{hierarchy:9,id:"platinum-carbuncle",how:"バトルコイン",battleCoin:80},"ムーニア":{hierarchy:6,id:"munia",how:"バトルコイン",battleCoin:100},"ブランジェッタ":{hierarchy:6,id:"branjetta",how:"バトルコイン",battleCoin:100},"グエリアス":{hierarchy:6,id:"guelius",how:"バトルコイン",battleCoin:100}},n}()},130:function(n,l){function a(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}a.keys=function(){return[]},a.resolve=a,n.exports=a,a.id=130},161:function(n,l,a){function u(n){var l=i[n];return l?a.e(l[1]).then(function(){return a(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var i={"../pages/material/material.module.ngfactory":[233,0]};u.keys=function(){return Object.keys(i)},u.id=161,n.exports=u},197:function(n,l,a){"use strict";function u(n){return r._19(0,[(n()(),r.Z(0,0,null,null,7,"ion-item",[["class","button item item-block"],["detail-none",""],["menuClose",""]],null,[[null,"click"]],function(n,l,a){var u=!0,i=n.component;if("click"===l){u=!1!==r._11(n,6).close()&&u}if("click"===l){u=!1!==i.onClick(n.context.$implicit)&&u}return u},Y.b,Y.a)),r.Y(1,1097728,null,3,Z.a,[z.a,M.a,r.j,r.z,[2,L.a]],null,null),r._16(335544320,7,{contentLabel:0}),r._16(603979776,8,{_buttons:1}),r._16(603979776,9,{_icons:1}),r.Y(5,16384,null,0,D.a,[],null,null),r.Y(6,16384,null,0,P.a,[x.a],{menuClose:[0,"menuClose"]},null),(n()(),r._18(7,2,["\n        ","\n      "]))],function(n,l){n(l,6,0,"")},function(n,l){n(l,7,0,l.context.$implicit.name)})}function i(n){return r._19(0,[r._16(402653184,1,{mycontent:0}),(n()(),r.Z(1,0,null,null,25,"ion-menu",[["role","navigation"]],null,null,null,F.b,F.a)),r._14(6144,null,O.a,null,[B.a]),r.Y(3,245760,null,2,B.a,[x.a,r.j,M.a,R.a,r.z,$.a,E.l,H.a,T.a],{content:[0,"content"]},null),r._16(335544320,2,{menuContent:0}),r._16(335544320,3,{menuNav:0}),(n()(),r._18(-1,0,["\n  "])),(n()(),r.Z(7,0,null,0,18,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,V.b,V.a)),r.Y(8,4374528,[[2,4]],0,q.a,[M.a,R.a,H.a,r.j,r.z,T.a,$.a,r.u,[2,G.a],[2,I.a]],null,null),(n()(),r._18(-1,1,["\n    "])),(n()(),r.Z(10,0,null,1,14,"ion-list",[],null,null,null,null,null)),r.Y(11,16384,null,0,N.a,[M.a,r.j,r.z,R.a,E.l,H.a],null,null),(n()(),r._18(-1,null,["\n      "])),(n()(),r.Z(13,0,null,null,7,"ion-item",[["class","item item-block"],["detail-none",""],["menuClose",""]],null,[[null,"click"]],function(n,l,a){var u=!0,i=n.component;if("click"===l){u=!1!==r._11(n,19).close()&&u}if("click"===l){u=!1!==i.toHome()&&u}return u},Y.b,Y.a)),r.Y(14,1097728,null,3,Z.a,[z.a,M.a,r.j,r.z,[2,L.a]],null,null),r._16(335544320,4,{contentLabel:0}),r._16(603979776,5,{_buttons:1}),r._16(603979776,6,{_icons:1}),r.Y(18,16384,null,0,D.a,[],null,null),r.Y(19,16384,null,0,P.a,[x.a],{menuClose:[0,"menuClose"]},null),(n()(),r._18(-1,2,["ホーム"])),(n()(),r._18(-1,null,["\n      "])),(n()(),r.U(16777216,null,null,1,null,u)),r.Y(23,802816,null,0,U.h,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(n()(),r._18(-1,null,["\n    "])),(n()(),r._18(-1,1,["\n  "])),(n()(),r._18(-1,0,["\n"])),(n()(),r._18(-1,null,["\n"])),(n()(),r.Z(28,0,null,null,2,"ion-nav",[],null,null,null,X.b,X.a)),r._14(6144,null,O.a,null,[J.a]),r.Y(30,4374528,[[1,4],["mycontent",4]],0,J.a,[[2,G.a],[2,I.a],T.a,M.a,R.a,r.j,r.u,r.z,r.i,E.l,S.a,[2,W.a],H.a,r.k],{root:[0,"root"]},null),(n()(),r._18(-1,null,["\n\n"]))],function(n,l){var a=l.component;n(l,3,0,r._11(l,30));n(l,19,0,"");n(l,23,0,a.dataList);n(l,30,0,a.rootPage)},function(n,l){n(l,7,0,r._11(l,8).statusbarPadding,r._11(l,8)._hasRefresher)})}function t(n){return r._19(0,[(n()(),r.Z(0,0,null,null,24,"ion-item",[["class","button item item-block"]],null,[[null,"click"]],function(n,l,a){var u=!0;if("click"===l){u=!1!==n.component.onClick(n.context.$implicit)&&u}return u},Y.b,Y.a)),r.Y(1,1097728,null,3,Z.a,[z.a,M.a,r.j,r.z,[2,L.a]],null,null),r._16(335544320,2,{contentLabel:0}),r._16(603979776,3,{_buttons:1}),r._16(603979776,4,{_icons:1}),r.Y(5,16384,null,0,D.a,[],null,null),(n()(),r._18(-1,2,["\n      "])),(n()(),r.Z(7,0,null,2,16,"div",[["class","flex-container"]],null,null,null,null,null)),(n()(),r._18(-1,null,["\n        "])),(n()(),r.Z(9,0,null,null,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),r.Y(10,16384,null,0,Q.a,[],null,null),(n()(),r._18(-1,null,["\n          "])),(n()(),r.Z(12,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),r._18(-1,null,["\n        "])),(n()(),r._18(-1,null,["\n        "])),(n()(),r.Z(15,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),r._18(16,null,["",""])),(n()(),r._18(-1,null,["\n        "])),(n()(),r.Z(18,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),r._18(-1,null,["\n          "])),(n()(),r.Z(20,0,null,null,1,"ion-icon",[["name","arrow-dropright"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(21,147456,[[4,4]],0,nn.a,[M.a,r.j,r.z],{name:[0,"name"]},null),(n()(),r._18(-1,null,["\n        "])),(n()(),r._18(-1,null,["\n      "])),(n()(),r._18(-1,2,["\n    "]))],function(n,l){n(l,21,0,"arrow-dropright")},function(n,l){n(l,12,0,"./assets/chara-image-icon/"+l.context.$implicit.id+".png");n(l,16,0,l.context.$implicit.name);n(l,20,0,r._11(l,21)._hidden)})}function e(n){return r._19(0,[(n()(),r.Z(0,0,null,null,20,"ion-header",[],null,null,null,null,null)),r.Y(1,16384,null,0,ln.a,[M.a,r.j,r.z,[2,G.a]],null,null),(n()(),r._18(-1,null,["\n  "])),(n()(),r.Z(3,0,null,null,16,"ion-navbar",[["class","toolbar"],["hideBackButton",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,an.b,an.a)),r.Y(4,49152,null,0,un.a,[T.a,[2,G.a],[2,I.a],M.a,r.j,r.z],{hideBackButton:[0,"hideBackButton"]},null),(n()(),r._18(-1,3,["\n    "])),(n()(),r.Z(6,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(n,l,a){var u=!0;if("click"===l){u=!1!==r._11(n,8).toggle()&&u}return u},tn.b,tn.a)),r.Y(7,1097728,[[1,4]],0,en.a,[[8,""],M.a,r.j,r.z],null,null),r.Y(8,1064960,null,0,on.a,[x.a,[2,G.a],[2,en.a],[2,un.a]],{menuToggle:[0,"menuToggle"]},null),r.Y(9,16384,null,1,rn.a,[M.a,r.j,r.z,[2,cn.a],[2,un.a]],null,null),r._16(603979776,1,{_buttons:1}),(n()(),r._18(-1,0,["\n      "])),(n()(),r.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(13,147456,null,0,nn.a,[M.a,r.j,r.z],{name:[0,"name"]},null),(n()(),r._18(-1,0,["\n    "])),(n()(),r._18(-1,3,["\n    "])),(n()(),r.Z(16,0,null,3,2,"ion-title",[],null,null,null,dn.b,dn.a)),r.Y(17,49152,null,0,_n.a,[M.a,r.j,r.z,[2,cn.a],[2,un.a]],null,null),(n()(),r._18(-1,0,["闘化キャラを選択"])),(n()(),r._18(-1,3,["\n  "])),(n()(),r._18(-1,null,["\n"])),(n()(),r._18(-1,null,["\n"])),(n()(),r.Z(22,0,null,null,9,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,V.b,V.a)),r.Y(23,4374528,null,0,q.a,[M.a,R.a,H.a,r.j,r.z,T.a,$.a,r.u,[2,G.a],[2,I.a]],null,null),(n()(),r._18(-1,1,["\n  "])),(n()(),r.Z(25,0,null,1,5,"ion-list",[],null,null,null,null,null)),r.Y(26,16384,null,0,N.a,[M.a,r.j,r.z,R.a,E.l,H.a],null,null),(n()(),r._18(-1,null,["\n    "])),(n()(),r.U(16777216,null,null,1,null,t)),r.Y(29,802816,null,0,U.h,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(n()(),r._18(-1,null,["\n  "])),(n()(),r._18(-1,1,["\n"])),(n()(),r._18(-1,null,["\n"]))],function(n,l){var a=l.component;n(l,4,0,"");n(l,8,0,"");n(l,13,0,"menu");n(l,29,0,a.dataList)},function(n,l){n(l,3,0,r._11(l,4)._hidden,r._11(l,4)._sbPadding);n(l,6,0,r._11(l,8).isHidden);n(l,12,0,r._11(l,13)._hidden);n(l,22,0,r._11(l,23).statusbarPadding,r._11(l,23)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var o=a(33),r=a(0),c=(a(5),a(73),a(71)),d=a(72),_=a(118),s=function(){function n(n){this.navCtrl=n,this.dataList=_.a.getDataList(),this.dataMap=_.a.getDataMap()}return n.prototype.ionViewDidEnter=function(){},n.prototype.onClick=function(n){this.navCtrl.setRoot("page-material",{id:n.id})},n}(),h=function(){function n(n,l,a){this.rootPage=s,n.ready().then(function(){l.styleDefault(),a.hide()}),this.dataList=_.a.getDataList(),this.dataMap=_.a.getDataMap()}return n.prototype.ionViewDidEnter=function(){},n.prototype.onClick=function(n){this.mycontent.setRoot("page-material",{id:n.id})},n.prototype.toHome=function(){this.mycontent.setRoot(s)},n}(),m=function(){return function(){}}(),f=a(47),g=a(186),b=a(187),p=a(188),y=a(189),k=a(190),v=a(191),w=a(192),j=a(193),C=a(194),Y=a(75),Z=a(15),z=a(12),M=a(1),L=a(35),D=a(45),P=a(94),x=a(22),F=a(231),O=a(32),B=a(64),R=a(3),$=a(23),E=a(6),H=a(9),T=a(8),V=a(119),q=a(21),G=a(4),I=a(18),N=a(39),U=a(11),X=a(232),J=a(52),S=a(29),W=a(16),A=r.X({encapsulation:2,styles:[],data:{}}),K=r.V("ng-component",h,function(n){return r._19(0,[(n()(),r.Z(0,0,null,null,1,"ng-component",[],null,null,null,i,A)),r.Y(1,49152,null,0,h,[R.a,d.a,c.a],null,null)],null,null)},{},{},[]),Q=a(113),nn=a(34),ln=a(76),an=a(195),un=a(26),tn=a(36),en=a(19),on=a(74),rn=a(77),cn=a(41),dn=a(196),_n=a(54),sn=r.X({encapsulation:2,styles:[],data:{}}),hn=r.V("page-home",s,function(n){return r._19(0,[(n()(),r.Z(0,0,null,null,1,"page-home",[],null,null,null,e,sn)),r.Y(1,49152,null,0,s,[I.a],null,null)],null,null)},{},{},[]),mn=a(97),fn=a(20),gn=a(86),bn=a(88),pn=a(96),yn=a(31),kn=a(93),vn=a(120),wn=a(49),jn=a(40),Cn=a(101),Yn=a(59),Zn=a(105),zn=a(99),Mn=a(114),Ln=a(184),Dn=a(98),Pn=a(95),xn=a(100),Fn=r.W(m,[f.b],function(n){return r._7([r._8(512,r.i,r.S,[[8,[g.a,b.a,p.a,y.a,k.a,v.a,w.a,j.a,C.a,K,hn]],[3,r.i],r.s]),r._8(5120,r.r,r._15,[[3,r.r]]),r._8(4608,U.k,U.j,[r.r,[2,U.s]]),r._8(5120,r.b,r._1,[]),r._8(5120,r.p,r._9,[]),r._8(5120,r.q,r._12,[]),r._8(4608,o.c,o.q,[U.c]),r._8(6144,r.D,null,[o.c]),r._8(4608,o.f,mn.a,[]),r._8(5120,o.d,function(n,l,a,u,i){return[new o.k(n,l),new o.o(a),new o.n(u,i)]},[U.c,r.u,U.c,U.c,o.f]),r._8(4608,o.e,o.e,[o.d,r.u]),r._8(135680,o.m,o.m,[U.c]),r._8(4608,o.l,o.l,[o.e,o.m]),r._8(6144,r.B,null,[o.l]),r._8(6144,o.p,null,[o.m]),r._8(4608,r.G,r.G,[r.u]),r._8(4608,o.h,o.h,[U.c]),r._8(4608,o.i,o.i,[U.c]),r._8(4608,fn.k,fn.k,[]),r._8(4608,fn.c,fn.c,[]),r._8(4608,gn.a,gn.a,[T.a,M.a]),r._8(4608,bn.a,bn.a,[T.a,M.a]),r._8(4608,pn.a,pn.a,[]),r._8(4608,z.a,z.a,[]),r._8(4608,yn.a,yn.a,[R.a]),r._8(4608,$.a,$.a,[M.a,R.a,r.u,H.a]),r._8(4608,kn.a,kn.a,[T.a,M.a]),r._8(5120,U.f,vn.c,[U.q,[2,U.a],M.a]),r._8(4608,U.e,U.e,[U.f]),r._8(5120,wn.b,wn.d,[T.a,wn.a]),r._8(5120,W.a,W.b,[T.a,wn.b,U.e,jn.b,r.i]),r._8(4608,Cn.a,Cn.a,[T.a,M.a,W.a]),r._8(4608,Yn.a,Yn.a,[T.a,M.a]),r._8(4608,Zn.a,Zn.a,[T.a,M.a,W.a]),r._8(4608,zn.a,zn.a,[M.a,R.a,H.a,T.a,E.l]),r._8(4608,Mn.a,Mn.a,[T.a,M.a]),r._8(4608,S.a,S.a,[R.a,M.a]),r._8(4608,d.a,d.a,[]),r._8(4608,c.a,c.a,[]),r._8(512,U.b,U.b,[]),r._8(512,r.k,Ln.a,[]),r._8(256,M.b,{},[]),r._8(1024,Dn.a,Dn.b,[]),r._8(1024,R.a,R.b,[o.b,Dn.a,r.u]),r._8(1024,M.a,M.c,[M.b,R.a]),r._8(512,H.a,H.a,[R.a]),r._8(512,x.a,x.a,[]),r._8(512,T.a,T.a,[M.a,R.a,[2,x.a]]),r._8(512,E.l,E.l,[T.a]),r._8(256,wn.a,{links:[{loadChildren:"../pages/material/material.module.ngfactory#MaterialPageModuleNgFactory",name:"page-material",segment:"material/:id",priority:"low",defaultHistory:[]}]},[]),r._8(512,r.h,r.h,[]),r._8(512,Pn.a,Pn.a,[r.h]),r._8(1024,jn.b,jn.c,[Pn.a,r.o]),r._8(1024,r.c,function(n,l,a,u,i,t,e,r,c,d,_,s,h){return[o.s(n),xn.a(l),pn.b(a,u),zn.b(i,t,e,r,c),jn.d(d,_,s,h)]},[[2,r.t],M.a,R.a,H.a,M.a,R.a,H.a,T.a,E.l,M.a,wn.a,jn.b,r.u]),r._8(512,r.d,r.d,[[2,r.c]]),r._8(131584,r.f,r.f,[r.u,r.T,r.o,r.k,r.i,r.d]),r._8(512,r.e,r.e,[r.f]),r._8(512,o.a,o.a,[[3,o.a]]),r._8(512,fn.j,fn.j,[]),r._8(512,fn.d,fn.d,[]),r._8(512,fn.i,fn.i,[]),r._8(512,vn.a,vn.a,[]),r._8(512,m,m,[]),r._8(256,f.a,h,[]),r._8(256,U.a,"/",[])])});Object(r.M)(),Object(o.j)().bootstrapModuleFactory(Fn)}},[197]);