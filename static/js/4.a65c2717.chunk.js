(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[4],{298:function(t,e,s){},302:function(t,e,s){"use strict";s.r(e);var i=s(35),c=s(36),o=s(39),r=s(38),n=s(0),a=s.n(n),l=s(15),j=s(10),u=s(11),b=s(127),p=s(29),d=s(64),h=s(89),O=s(129),f=s(47),x=s(37),m=(s(298),s(1)),v=function(t){return Object(m.jsxs)("div",{className:"mess",children:[Object(m.jsx)("img",{src:"http://wap.photohost.ru/pictures/745260.jpg",alt:"img"}),Object(m.jsx)("p",{children:t.text})]})},g=s(96),k=function(t){var e=Object(n.useState)(!1),s=Object(g.a)(e,2),i=s[0],c=s[1],o=Object(n.useState)(t.status),r=Object(g.a)(o,2),a=r[0],l=r[1];Object(n.useEffect)((function(){l(t.status)}),[t.status]);return Object(m.jsxs)(m.Fragment,{children:[!i&&Object(m.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"------"}),i&&Object(m.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},onBlur:function(){c(!1),t.updateStatus(a)},autoFocus:!0,value:a})]})},F=s(128),S=s(40),P=s.n(S),y=Object(O.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.props,i=t.error;return Object(m.jsxs)("form",{onSubmit:e,children:[i&&Object(m.jsx)("div",{className:P.a.formSummaryError,children:i}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Save"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Full name"}),":  ",Object(x.c)("Full name","fullName",[],x.b)]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Looking for a job"}),":",Object(x.c)("","lookingForAJob",[],x.b,{type:"checkbox"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"My professional skills"}),":",Object(x.c)("My professional skills","lookingForAJobDescription",[],x.a)]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"About me"}),":",Object(x.c)("About me","aboutMe",[],x.a)]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Status"}),":",Object(m.jsx)(k,{status:s.status,updateStatus:s.updateStatus})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Contacts"}),":",Object.keys(s.vk).map((function(t){return Object(m.jsx)("div",{children:Object(m.jsxs)("b",{children:[t,": ",Object(x.c)(t,"contacts."+t,[],x.b)]})},t)}))]})]})})),w=function(t){var e=t.props,s=t.isOwner,i=t.gotoEditMode;return Object(m.jsxs)("div",{children:[s&&Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:i,children:"edit"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Full name"}),":",e.fullName]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Looking for a job"}),":",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(m.jsxs)("div",{children:[" ",Object(m.jsx)("b",{children:"My professional skills"}),":",e.lookingForAJobDescription]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"About me"}),":",e.aboutMe]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Status"}),":",Object(m.jsx)(k,{status:e.status,updateStatus:e.updateStatus})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Contacts"}),":",Object.keys(e.vk).map((function(t){return Object(m.jsx)(N,{contactTitle:t,contactValue:e.vk[t]},t)}))]})]})},N=function(t){var e=t.contactTitle,s=t.contactValue;return Object(m.jsxs)("div",{className:"contact",children:[Object(m.jsx)("b",{children:e}),":",s]})},A=function(t){var e=Object(n.useState)(!1),s=Object(g.a)(e,2),i=s[0],c=s[1];return Object(m.jsxs)("div",{className:"info_user",children:[Object(m.jsx)("img",{src:t.t||F.a,alt:"foto"}),Object(m.jsxs)("div",{className:"text_info_user",children:[Object(m.jsx)("h1",{className:"title",children:t.fullName}),Object(m.jsxs)("p",{className:"subtitle",children:[" \u041e \u0441\u0435\u0431\u0435:",t.aboutMe]}),i?Object(m.jsx)(y,{initialValues:t,props:t,onSubmit:function(e){t.saveProfile(e).then((function(){c(!1)}))}}):Object(m.jsx)(w,{props:t,isOwner:t.isOwner,gotoEditMode:function(){c(!0)}}),t.isOwner&&Object(m.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.saveFoto(e.target.files[0])}})]})]})},M=a.a.memo((function(t){var e=t.state;if(t.profil)var s=e.message.map((function(t){return Object(m.jsx)(v,{text:t.text},t.id)})),i=Object(m.jsx)(A,{lookingForAJob:e.profil.lookingForAJob,lookingForAJobDescription:e.profil.lookingForAJobDescription,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus,isOwner:t.isOwner,saveFoto:t.saveFoto,fullName:e.profil.fullName,t:e.profil.photos.small,aboutMe:e.profil.aboutMe,facebook:e.profil.contacts,vk:e.profil.contacts,website:e.profil.contacts});else d.a;return Object(m.jsxs)("div",{className:"content_profil",children:[i,Object(m.jsx)("div",{className:"posts",children:Object(m.jsx)("h1",{children:"My posts"})}),Object(m.jsxs)("div",{className:"message",children:[Object(m.jsx)(C,{onSubmit:function(e){t.newPost(e.ProfileTextarea)}}),s]})]})})),J=Object(f.a)(15),C=Object(O.a)({form:"MypostsProfile"})((function(t){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsx)(h.a,{name:"ProfileTextarea",component:x.a,placeholder:"Enter your post",validate:[f.b,J]}),Object(m.jsx)("button",{children:"Send"})]})})})),D=M,I=function(t){Object(o.a)(s,t);var e=Object(r.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"refrechProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.userId)||this.props.history.push("/login"),this.props.setFetching(!0),this.props.getUserProfile(t),this.props.setFetching(!1),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refrechProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!=t.match.params.userId&&this.refrechProfile()}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[" ",this.props.isFetching?Object(m.jsx)(d.a,{}):null,Object(m.jsx)(D,{saveFoto:this.props.saveFoto,state:this.props.state,isOwner:!this.props.match.params.userId,newPost:this.props.newPost,profil:this.props.profil,status:this.props.status,updateStatus:this.props.updateStatus,saveProfile:this.props.saveProfile}),")"]})}}]),s}(a.a.Component);e.default=Object(u.d)(Object(l.b)((function(t){return{state:t.profilPage,profil:t.profilPage.profil,isFetching:t.usersPage.isFetching,status:t.profilPage.status,userId:t.auth.userId,isAuth:t.auth.isAuth}}),{saveFoto:b.e,setFetching:p.d,getUserProfile:b.c,newPost:b.d,getStatus:b.b,updateStatus:b.g,saveProfile:b.f}),j.f)(I)}}]);
//# sourceMappingURL=4.a65c2717.chunk.js.map