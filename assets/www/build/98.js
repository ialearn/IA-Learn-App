webpackJsonp([98],{2071:function(n,e,l){"use strict";function View_AddonModQuizIndexPage_0(n){return t._57(0,[t._52(402653184,1,{quizComponent:0}),(n()(),t._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),t._30(2,16384,null,0,C.a,[D.a,t.t,t.V,[2,L.a]],null,null),(n()(),t._55(-1,null,["\n    "])),(n()(),t._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,k.b,k.a)),t._30(5,49152,null,0,E.a,[T.a,[2,L.a],[2,F.a],D.a,t.t,t.V],null,null),t._30(6,212992,null,0,G.a,[E.a,H.a,J.a,K.b],null,null),(n()(),t._55(-1,3,["\n        "])),(n()(),t._31(8,0,null,3,3,"ion-title",[],null,null,null,N.b,N.a)),t._30(9,49152,null,0,U.a,[D.a,t.t,t.V,[2,B.a],[2,E.a]],null,null),(n()(),t._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),t._30(11,540672,null,0,S.a,[t.t,W.b,X.b,Y.b,J.a,H.a,Z.b,$.b,nn.b,en.b,ln.b,tn.b,[2,F.a],[2,an.a],[2,un.a],on.a,K.b,dn.a,rn.a,_n.a,t._11,cn.c],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),t._55(-1,3,["\n\n        "])),(n()(),t._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),t._30(14,16384,null,1,sn.a,[D.a,t.t,t.V,[2,B.a],[2,E.a]],null,null),t._52(603979776,2,{_buttons:1}),(n()(),t._55(-1,null,["\n            "])),(n()(),t._55(-1,null,["\n        "])),(n()(),t._55(-1,3,["\n    "])),(n()(),t._55(-1,null,["\n"])),(n()(),t._55(-1,null,["\n"])),(n()(),t._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,fn.b,fn.a)),t._30(22,4374528,null,0,an.a,[D.a,H.a,bn.a,t.t,t.V,T.a,pn.a,t.M,[2,L.a],[2,F.a]],null,null),(n()(),t._55(-1,1,["\n    "])),(n()(),t._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,l){var t=!0;if("ionRefresh"===e){t=!1!==n.component.quizComponent.doRefresh(l)&&t}return t},null,null)),t._30(25,212992,null,0,hn.a,[H.a,an.a,t.M,mn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),t._55(-1,null,["\n        "])),(n()(),t._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,gn.b,gn.a)),t._30(28,114688,null,0,xn.a,[hn.a,D.a],{pullingText:[0,"pullingText"]},null),t._47(131072,vn.a,[J.a,t.j]),(n()(),t._55(-1,null,["\n    "])),(n()(),t._55(-1,1,["\n\n    "])),(n()(),t._31(32,0,null,1,1,"addon-mod-quiz-index",[],null,[[null,"dataRetrieved"]],function(n,e,l){var t=!0;if("dataRetrieved"===e){t=!1!==n.component.updateData(l)&&t}return t},q.c,q.b)),t._30(33,245760,[[1,4]],0,i.a,[t.C,In.a,[2,an.a],zn.a,Mn.a,Pn.a,yn.a,Rn.a,F.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(n()(),t._55(-1,1,["\n"])),(n()(),t._55(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,6,0);n(e,11,0,l.title,"module",l.module.id,l.courseId);n(e,25,0,l.quizComponent.loaded);n(e,28,0,t._34(1,"",t._56(e,28,0,t._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,l.module,l.courseId)},function(n,e){n(e,4,0,t._44(e,5)._hidden,t._44(e,5)._sbPadding);n(e,21,0,t._44(e,22).statusbarPadding,t._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==t._44(e,25).state,t._44(e,25)._top);n(e,27,0,t._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var t=l(0),a=l(5),u=l(3),o=l(32),d=l(790),i=l(530),r=this&&this.__decorate||function(n,e,l,t){var a,u=arguments.length,o=u<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,l,t);else for(var d=n.length-1;d>=0;d--)(a=n[d])&&(o=(u<3?a(o):u>3?a(e,l,o):a(e,l))||o);return u>3&&o&&Object.defineProperty(e,l,o),o},_=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},c=function(){function AddonModQuizIndexPage(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.title=this.module.name}return AddonModQuizIndexPage.prototype.updateData=function(n){this.title=n.name||this.title},AddonModQuizIndexPage.prototype.ionViewDidEnter=function(){this.quizComponent.ionViewDidEnter()},AddonModQuizIndexPage.prototype.ionViewDidLeave=function(){this.quizComponent.ionViewDidLeave()},r([Object(t._9)(i.a),_("design:type",i.a)],AddonModQuizIndexPage.prototype,"quizComponent",void 0),AddonModQuizIndexPage=r([Object(t.m)({selector:"page-addon-mod-quiz-index",templateUrl:"index.html"}),_("design:paramtypes",[a.t])],AddonModQuizIndexPage)}(),s=this&&this.__decorate||function(n,e,l,t){var a,u=arguments.length,o=u<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,e,l,t);else for(var d=n.length-1;d>=0;d--)(a=n[d])&&(o=(u<3?a(o):u>3?a(e,l,o):a(e,l))||o);return u>3&&o&&Object.defineProperty(e,l,o),o},f=function(){function AddonModQuizIndexPageModule(){}return AddonModQuizIndexPageModule=s([Object(t.I)({declarations:[c],imports:[o.a,d.a,a.l.forChild(c),u.b.forChild()]})],AddonModQuizIndexPageModule)}(),b=l(1570),p=l(1571),h=l(1572),m=l(1573),g=l(1574),x=l(1575),v=l(1576),I=l(1577),z=l(1578),M=l(1579),P=l(1580),y=l(1581),R=l(1582),A=l(1585),Q=l(1586),j=l(1583),V=l(1584),w=l(1587),q=l(1648),O=l(1670),C=l(387),D=l(8),L=l(41),k=l(749),E=l(217),T=l(35),F=l(22),G=l(491),H=l(16),J=l(18),K=l(9),N=l(750),U=l(325),B=l(253),S=l(49),W=l(1),X=l(4),Y=l(10),Z=l(2),$=l(20),nn=l(6),en=l(17),ln=l(11),tn=l(14),an=l(28),un=l(29),on=l(43),dn=l(42),rn=l(30),_n=l(36),cn=l(40),sn=l(388),fn=l(184),bn=l(34),pn=l(111),hn=l(164),mn=l(45),gn=l(218),xn=l(177),vn=l(25),In=l(171),zn=l(259),Mn=l(271),Pn=l(266),yn=l(121),Rn=l(345),An=l(72),Qn=t._29({encapsulation:2,styles:[],data:{}}),jn=t._27("page-addon-mod-quiz-index",c,function View_AddonModQuizIndexPage_Host_0(n){return t._57(0,[(n()(),t._31(0,0,null,null,1,"page-addon-mod-quiz-index",[],null,null,null,View_AddonModQuizIndexPage_0,Qn)),t._30(1,49152,null,0,c,[An.a],null,null)],null,null)},{},{},[]),Vn=l(7),wn=l(23),qn=l(383),On=l(384),Cn=l(386),Dn=l(385),Ln=l(490),kn=l(748),En=l(110),Tn=l(26),Fn=l(282),Gn=l(73),Hn=l(281);l.d(e,"AddonModQuizIndexPageModuleNgFactory",function(){return Jn});var Jn=t._28(f,[],function(n){return t._40([t._41(512,t.o,t._21,[[8,[b.a,p.a,h.a,m.a,g.a,x.a,v.a,I.a,z.a,M.a,P.a,y.a,R.a,A.a,Q.a,j.a,V.a,w.a,q.a,O.a,jn]],[3,t.o],t.K]),t._41(4608,Vn.m,Vn.l,[t.G,[2,Vn.w]]),t._41(4608,wn.x,wn.x,[]),t._41(4608,wn.d,wn.d,[]),t._41(4608,qn.b,qn.a,[]),t._41(4608,On.a,On.b,[]),t._41(4608,Cn.b,Cn.a,[]),t._41(4608,Dn.b,Dn.a,[]),t._41(4608,J.a,J.a,[Ln.a,qn.b,On.a,Cn.b,Dn.b,J.b,J.c]),t._41(512,o.a,o.a,[]),t._41(512,Vn.b,Vn.b,[]),t._41(512,wn.v,wn.v,[]),t._41(512,wn.i,wn.i,[]),t._41(512,wn.s,wn.s,[]),t._41(512,kn.a,kn.a,[]),t._41(512,u.b,u.b,[]),t._41(512,En.a,En.a,[]),t._41(512,Tn.a,Tn.a,[]),t._41(512,Fn.a,Fn.a,[]),t._41(512,Gn.a,Gn.a,[]),t._41(512,d.a,d.a,[]),t._41(512,kn.b,kn.b,[]),t._41(512,f,f,[]),t._41(256,J.c,void 0,[]),t._41(256,J.b,void 0,[]),t._41(256,Hn.a,c,[])])})}});