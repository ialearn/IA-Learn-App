webpackJsonp([109],{2061:function(n,e,t){"use strict";function View_AddonModH5PActivityIndexPage_0(n){return l._57(0,[l._52(402653184,1,{h5pComponent:0}),(n()(),l._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),l._30(2,16384,null,0,F.a,[G.a,l.t,l.V,[2,J.a]],null,null),(n()(),l._55(-1,null,["\n    "])),(n()(),l._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,K.b,K.a)),l._30(5,49152,null,0,N.a,[U.a,[2,J.a],[2,q.a],G.a,l.t,l.V],null,null),l._30(6,212992,null,0,z.a,[N.a,B.a,E.a,Q.b],null,null),(n()(),l._55(-1,3,["\n        "])),(n()(),l._31(8,0,null,3,3,"ion-title",[],null,null,null,S.b,S.a)),l._30(9,49152,null,0,W.a,[G.a,l.t,l.V,[2,X.a],[2,N.a]],null,null),(n()(),l._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),l._30(11,540672,null,0,Y.a,[l.t,Z.b,i.b,$.b,E.a,B.a,nn.b,en.b,tn.b,ln.b,an.b,on.b,[2,q.a],[2,un.a],[2,dn.a],rn.a,Q.b,cn.a,_n.a,sn.a,l._11,fn.c],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),l._55(-1,3,["\n\n        "])),(n()(),l._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),l._30(14,16384,null,1,pn.a,[G.a,l.t,l.V,[2,X.a],[2,N.a]],null,null),l._52(603979776,2,{_buttons:1}),(n()(),l._55(-1,null,["\n            "])),(n()(),l._55(-1,null,["\n        "])),(n()(),l._55(-1,3,["\n    "])),(n()(),l._55(-1,null,["\n"])),(n()(),l._55(-1,null,["\n"])),(n()(),l._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,bn.b,bn.a)),l._30(22,4374528,null,0,un.a,[G.a,B.a,hn.a,l.t,l.V,U.a,vn.a,l.M,[2,J.a],[2,q.a]],null,null),(n()(),l._55(-1,1,["\n    "])),(n()(),l._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,t){var l=!0;if("ionRefresh"===e){l=!1!==n.component.h5pComponent.doRefresh(t)&&l}return l},null,null)),l._30(25,212992,null,0,gn.a,[B.a,un.a,l.M,mn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),l._55(-1,null,["\n        "])),(n()(),l._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,yn.b,yn.a)),l._30(28,114688,null,0,Pn.a,[gn.a,G.a],{pullingText:[0,"pullingText"]},null),l._47(131072,xn.a,[E.a,l.j]),(n()(),l._55(-1,null,["\n    "])),(n()(),l._55(-1,1,["\n\n    "])),(n()(),l._31(32,0,null,1,1,"addon-mod-h5pactivity-index",[],null,[[null,"dataRetrieved"]],function(n,e,t){var l=!0;if("dataRetrieved"===e){l=!1!==n.component.updateData(t)&&l}return l},T.c,T.b)),l._30(33,245760,[[1,4]],0,r.a,[l.C,[2,un.a]],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(n()(),l._55(-1,1,["\n"])),(n()(),l._55(-1,null,["\n"]))],function(n,e){var t=e.component;n(e,6,0);n(e,11,0,t.title,"module",t.module.id,t.courseId);n(e,25,0,t.h5pComponent.loaded);n(e,28,0,l._34(1,"",l._56(e,28,0,l._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,t.module,t.courseId)},function(n,e){n(e,4,0,l._44(e,5)._hidden,l._44(e,5)._sbPadding);n(e,21,0,l._44(e,22).statusbarPadding,l._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==l._44(e,25).state,l._44(e,25)._top);n(e,27,0,l._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var l=t(0),a=t(5),o=t(3),u=t(32),d=t(785),i=t(4),r=t(525),c=t(51),_=this&&this.__decorate||function(n,e,t,l){var a,o=arguments.length,u=o<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,t,l);else for(var d=n.length-1;d>=0;d--)(a=n[d])&&(u=(o<3?a(u):o>3?a(e,t,u):a(e,t))||u);return o>3&&u&&Object.defineProperty(e,t,u),u},s=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},f=function(){function AddonModH5PActivityIndexPage(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.title=this.module.name}return AddonModH5PActivityIndexPage.prototype.updateData=function(n){this.title=n.name||this.title},AddonModH5PActivityIndexPage.prototype.ionViewCanLeave=function(){if(this.h5pComponent.playing&&!this.h5pComponent.isOpeningPage)return i.a.instance.showConfirm(c.a.instance.instant("core.confirmleaveunknownchanges"))},_([Object(l._9)(r.a),s("design:type",r.a)],AddonModH5PActivityIndexPage.prototype,"h5pComponent",void 0),AddonModH5PActivityIndexPage=_([Object(l.m)({selector:"page-addon-mod-h5pactivity-index",templateUrl:"index.html"}),s("design:paramtypes",[a.t])],AddonModH5PActivityIndexPage)}(),p=this&&this.__decorate||function(n,e,t,l){var a,o=arguments.length,u=o<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,t,l);else for(var d=n.length-1;d>=0;d--)(a=n[d])&&(u=(o<3?a(u):o>3?a(e,t,u):a(e,t))||u);return o>3&&u&&Object.defineProperty(e,t,u),u},b=function(){function AddonModH5PActivityIndexPageModule(){}return AddonModH5PActivityIndexPageModule=p([Object(l.I)({declarations:[f],imports:[u.a,d.a,a.l.forChild(f),o.b.forChild()]})],AddonModH5PActivityIndexPageModule)}(),h=t(1570),v=t(1571),g=t(1572),m=t(1573),y=t(1574),P=t(1575),x=t(1576),A=t(1577),I=t(1578),M=t(1579),R=t(1580),H=t(1581),j=t(1582),C=t(1585),O=t(1586),w=t(1583),V=t(1584),D=t(1587),L=t(1669),k=t(549),T=t(1643),F=t(387),G=t(8),J=t(41),K=t(749),N=t(217),U=t(35),q=t(22),z=t(491),B=t(16),E=t(18),Q=t(9),S=t(750),W=t(325),X=t(253),Y=t(49),Z=t(1),$=t(10),nn=t(2),en=t(20),tn=t(6),ln=t(17),an=t(11),on=t(14),un=t(28),dn=t(29),rn=t(43),cn=t(42),_n=t(30),sn=t(36),fn=t(40),pn=t(388),bn=t(184),hn=t(34),vn=t(111),gn=t(164),mn=t(45),yn=t(218),Pn=t(177),xn=t(25),An=t(72),In=l._29({encapsulation:2,styles:[],data:{}}),Mn=l._27("page-addon-mod-h5pactivity-index",f,function View_AddonModH5PActivityIndexPage_Host_0(n){return l._57(0,[(n()(),l._31(0,0,null,null,1,"page-addon-mod-h5pactivity-index",[],null,null,null,View_AddonModH5PActivityIndexPage_0,In)),l._30(1,49152,null,0,f,[An.a],null,null)],null,null)},{},{},[]),Rn=t(7),Hn=t(23),jn=t(383),Cn=t(384),On=t(386),wn=t(385),Vn=t(490),Dn=t(748),Ln=t(110),kn=t(26),Tn=t(282),Fn=t(73),Gn=t(545),Jn=t(281);t.d(e,"AddonModH5PActivityIndexPageModuleNgFactory",function(){return Kn});var Kn=l._28(b,[],function(n){return l._40([l._41(512,l.o,l._21,[[8,[h.a,v.a,g.a,m.a,y.a,P.a,x.a,A.a,I.a,M.a,R.a,H.a,j.a,C.a,O.a,w.a,V.a,D.a,L.a,k.a,T.a,Mn]],[3,l.o],l.K]),l._41(4608,Rn.m,Rn.l,[l.G,[2,Rn.w]]),l._41(4608,Hn.x,Hn.x,[]),l._41(4608,Hn.d,Hn.d,[]),l._41(4608,jn.b,jn.a,[]),l._41(4608,Cn.a,Cn.b,[]),l._41(4608,On.b,On.a,[]),l._41(4608,wn.b,wn.a,[]),l._41(4608,E.a,E.a,[Vn.a,jn.b,Cn.a,On.b,wn.b,E.b,E.c]),l._41(512,u.a,u.a,[]),l._41(512,Rn.b,Rn.b,[]),l._41(512,Hn.v,Hn.v,[]),l._41(512,Hn.i,Hn.i,[]),l._41(512,Hn.s,Hn.s,[]),l._41(512,Dn.a,Dn.a,[]),l._41(512,o.b,o.b,[]),l._41(512,Ln.a,Ln.a,[]),l._41(512,kn.a,kn.a,[]),l._41(512,Tn.a,Tn.a,[]),l._41(512,Fn.a,Fn.a,[]),l._41(512,Gn.a,Gn.a,[]),l._41(512,d.a,d.a,[]),l._41(512,Dn.b,Dn.b,[]),l._41(512,b,b,[]),l._41(256,E.c,void 0,[]),l._41(256,E.b,void 0,[]),l._41(256,Jn.a,f,[])])})}});