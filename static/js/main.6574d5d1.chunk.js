(this["webpackJsonpgroups-finder"]=this["webpackJsonpgroups-finder"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},63:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(12),l=c.n(s),i=(c(48),c(10)),r=(c(49),c(14)),o=c(15),d=c(17),j=c(16),b=function(){function e(t,c,n,a,s){Object(r.a)(this,e),this.name=t,this.surname=c,this.description=n,this.photoSrc=a,this.tags=s}return Object(o.a)(e,[{key:"newName",set:function(e){this.name=e}}]),e}(),h=c(8),u=(c(50),c.p+"static/media/person.47618eed.png"),m=c(20),x=(c(56),c(1)),O=function(e){var t=a.a.useState(""),c=Object(i.a)(t,2),n=c[0],s=c[1],l=a.a.useState(""),r=Object(i.a)(l,2),o=r[0],d=r[1],j=a.a.useState(""),h=Object(i.a)(j,2),O=h[0],g=h[1],p=a.a.useState(""),v=Object(i.a)(p,2),f=v[0],N=v[1],S=a.a.useState(""),w=Object(i.a)(S,2),y=w[0],C=w[1],k=a.a.useState(!1),L=Object(i.a)(k,2),D=L[0],F=L[1],T=null;function I(t){if("Enter"===t.code){var c;if(""!==n&&""!==o)return""===y?(c=f.split(" "),T=new b(n,o,O,u,c)):(c=f.split(" "),T=new b(n,o,O,y,c)),null!==T?(e.appendStudent(T),T=null,s(""),d(""),g(""),C(""),N(""),F(!1),console.log("ok"),m.NotificationManager.success("Application has been added correctly","Success")):m.NotificationManager.error("Something gone wrong","Error",5e3);(""===n||""===n)&&F(!0)}}return Object(x.jsxs)(x.Fragment,{children:[D&&Object(x.jsx)("div",{className:"panel container col-10 col-lg-4 float-center adding-form mt-4",children:Object(x.jsxs)("div",{className:"col-12 mb-2 centered-text",children:[Object(x.jsx)("div",{className:"col-12 mb-2",children:Object(x.jsx)("h3",{children:"Wrong entery!"})}),Object(x.jsx)("div",{className:"col-12 mb-2",children:Object(x.jsx)("h6",{children:"Need to enter name and surename"})})]})}),Object(x.jsx)("div",{className:"panel container col-10 col-lg-7 float-center mt-3 adding-form main-text-type",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-8 mb-4 mt-4 offset-2 centered-text",children:Object(x.jsx)("h3",{children:"Student application"})}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"name",children:"Name: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"text",value:n,id:"name",className:"bg-light form-control",onChange:function(e){return s(e.target.value)},onKeyDown:I})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"surname",children:"Surname: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"text",value:o,id:"surname",className:"bg-light form-control",onChange:function(e){return d(e.target.value)},onKeyDown:I})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"description",children:"Description: "})}),Object(x.jsx)("div",{className:"col-lg-12 col-xl-8",children:Object(x.jsx)("textarea",{value:O,id:"description",className:"bg-light form-control break-text",onChange:function(e){return g(e.target.value)},onKeyDown:I})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"tags",children:"Tags: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"text",value:f,id:"tags",className:"bg-light form-control",onChange:function(e){return N(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"img",children:"Photo: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"file",id:"img",name:"img",accept:"image/*",className:"bg-light form-control",onChange:function(e){C(URL.createObjectURL(e.target.files[0]))}})})]}),Object(x.jsx)("div",{className:"row col-12 mb-2 centered-text",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("button",{className:"btn btn-success my-button",onClick:function(){var t;if(""!==n&&""!==o)return""===y?(t=f.toLowerCase().split(" "),T=new b(n,o,O,u,t)):(t=f.toLowerCase().split(" "),T=new b(n,o,O,y,t)),null!==T?(e.appendStudent(T),T=null,s(""),d(""),g(""),C(""),N(""),F(!1),m.NotificationManager.success("Application has been added correctly","Success")):m.NotificationManager.error("Something gone wrong","Error",5e3);(""===n||""===n)&&F(!0)},children:"Apply"}),Object(x.jsx)(m.NotificationContainer,{})]})})]})})]})},g=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=0,t=n.Children.map(n.Children.toArray(this.props.children),(function(t){if(null!==t)return e++,Object(x.jsx)(x.Fragment,{children:t})}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"container-fluid col-12 m-3 ",children:Object(x.jsx)("div",{className:" col-12 panel pane-text-type align-content-center",children:Object(x.jsxs)("h5",{children:["Found ",e," results."]})})}),t]})}}]),c}(n.Component),p=(c(58),c(31)),v=c(26),f=(c(34),c(59),function(e){var t=a.a.useState(e.curStudent.name),c=Object(i.a)(t,2),n=c[0],s=c[1],l=a.a.useState(e.curStudent.surname),r=Object(i.a)(l,2),o=r[0],d=r[1],j=a.a.useState(e.curStudent.description),b=Object(i.a)(j,2),h=b[0],u=b[1],m=a.a.useState(function(e){var t="";return e.map((function(e){t=t.concat(e," ")})),t}(e.curStudent.tags)),O=Object(i.a)(m,2),g=O[0],f=O[1],N=a.a.useState(e.curStudent.photoSrc),S=Object(i.a)(N,2),w=S[0],y=S[1],C=a.a.useState(!1),k=Object(i.a)(C,2),L=k[0],D=k[1];function F(t){var c;"Enter"===t.code&&(""!==n&&""!==o?(e.curStudent.name=n,e.curStudent.surname=o,e.curStudent.description=h,c=g.toLowerCase().split(" "),e.curStudent.tags=c,e.curStudent.photoSrc=w,e.curStudent.name=n,e.onHide()):(""===n||""===n)&&D(!0))}return Object(x.jsx)("div",{className:"",children:Object(x.jsxs)(v.a,Object(p.a)(Object(p.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,styles:{overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 0, 0, 0.4)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"5px solid #ccc",background:"#0",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"10px",outline:"none",padding:"20px",backgroundColor:"rgba(255, 0, 0, 0.4)"}},children:[Object(x.jsx)(v.a.Header,{closeButton:!0,children:Object(x.jsx)("div",{className:"col-8 mb-4 mt-4 offset-2 centered-text main-text-type",children:Object(x.jsx)("h3",{children:"Edit student application"})})}),Object(x.jsxs)(v.a.Body,{children:[L&&Object(x.jsx)("div",{className:" container col-12 col-lg-4 float-center edit-form mt-4",children:Object(x.jsxs)("div",{className:"col-12 mb-2 centered-text",children:[Object(x.jsx)("div",{className:"col-12 mb-2",children:Object(x.jsx)("h3",{children:"Wrong entery!"})}),Object(x.jsx)("div",{className:"col-12 mb-2",children:Object(x.jsx)("h6",{children:"Need to enter name and surename"})})]})}),Object(x.jsx)("div",{className:" container col-12  float-center mt-3 edit-form main-text-type",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"name",children:"Name: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"text",value:n,id:"name",className:"bg-light form-control",onChange:function(e){return s(e.target.value)},onKeyDown:F})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"surname",children:"Surname: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"text",value:o,id:"surname",className:"bg-light form-control",onChange:function(e){return d(e.target.value)},onKeyDown:F})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"description",children:"Description: "})}),Object(x.jsx)("div",{className:"col-lg-12 col-xl-8",children:Object(x.jsx)("textarea",{value:h,id:"description",className:"bg-light form-control break-text",onChange:function(e){return u(e.target.value)},onKeyDown:F})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"tags",children:"Tags: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"text",value:g,id:"tags",className:"bg-light form-control",onChange:function(e){return f(e.target.value)}})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2",children:[Object(x.jsx)("div",{className:"col-3 col-sm-3",children:Object(x.jsx)("label",{htmlFor:"img",children:"Photo: "})}),Object(x.jsx)("div",{className:"col-9 col-lg-6",children:Object(x.jsx)("input",{type:"file",id:"img",name:"img",accept:"image/*",className:"bg-light form-control",onChange:function(e){y(URL.createObjectURL(e.target.files[0]))}})})]}),Object(x.jsxs)("div",{className:"row col-12 mb-2 centered-text pt-3",children:[Object(x.jsx)("div",{className:"col-sm-12 col-lg-6 pt-3",children:Object(x.jsx)("button",{className:"btn btn-success my-button",onClick:function(){var t;""!==n&&""!==o?(e.curStudent.name=n,e.curStudent.surname=o,e.curStudent.description=h,t=g.toLowerCase().split(" "),e.curStudent.tags=t,e.curStudent.photoSrc=w,e.curStudent.name=n,e.onHide()):(""===n||""===n)&&D(!0)},children:"Save"})}),Object(x.jsx)("div",{className:"col-sm-12 col-lg-6 pt-3",children:Object(x.jsx)("button",{className:"btn btn-info my-button",onClick:e.onHide,children:"Close"})})]})]})})]})]}))})}),N=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={student:e.props.studentInfo,show:!1},e.togglePop=function(){e.setState({show:!e.state.show})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.student.tags.map((function(e,t){return Object(x.jsxs)("li",{style:{display:"inline"},children:[e," "]},t+10)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"panel container-fluid m-3 pane-text-type",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-12 col-sm-3",children:Object(x.jsx)("img",{className:"img-fluid photo photo-border",src:this.state.student.photoSrc,alt:"Profile"})}),Object(x.jsx)("div",{className:"col-12 col-sm-7 container-fluid",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("div",{className:"row col-12",children:Object(x.jsxs)("h5",{children:[this.state.student.name," ",this.state.student.surname]})}),Object(x.jsxs)("div",{className:"row col-12",children:[Object(x.jsx)("h6",{children:"Description:"}),Object(x.jsx)("div",{class:"w-100"}),Object(x.jsx)("p",{className:"text-justify",children:this.state.student.description})]}),Object(x.jsxs)("div",{className:"row col-12",children:[Object(x.jsx)("h6",{children:"Tags:"}),Object(x.jsx)("ul",{children:e})]})]})}),Object(x.jsx)("div",{className:" col-sm-12 col-md-2 message-box",children:Object(x.jsx)("button",{className:"btn edit-button",onClick:this.togglePop,children:"Edit"})})]})}),Object(x.jsx)(f,{show:this.state.show,onHide:this.togglePop,curStudent:this.state.student})]})}}]),c}(n.Component),S=c.p+"static/media/linus.361cd7d9.jpg",w=c.p+"static/media/sample_pic.4c2f34a8.png",y=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={searchedDesc:"",searchedTag:""},e.handleDescInputChange=function(t){e.setState({searchedDesc:t.target.value}),e.props.captureDescSearching(t.target.value)},e.handleTagInputChange=function(t){e.setState({searchedTag:t.target.value}),e.props.captureTagSearching(t.target.value)},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"col-12 container panel p-3",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("label",{htmlFor:"descSearch",className:"main-text-type",children:"Search in description"})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("form",{className:"form-check-inline",children:Object(x.jsx)("input",{className:"form-control",type:"search",placeholder:"Description","aria-label":"Description",id:"descSearch",onChange:this.handleDescInputChange})})}),Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("label",{htmlFor:"tagSearch",className:"main-text-type",children:"Search for tag"})}),Object(x.jsx)("div",{className:"col-12",children:Object(x.jsx)("form",{className:"form-check-inline",children:Object(x.jsx)("input",{className:"form-control",type:"search",placeholder:"Tag","aria-label":"Tag",id:"tagSearch",onChange:this.handleTagInputChange})})})]})]})})}}]),c}(n.Component),C=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={studentsList:[new b("Artur","Sobolewski","Co\u015b tam umiem",S,["javascript","css","java"]),new b("Konrad","Brzezi\u0144ski","Jestem komunikatywn\u0105 osob\u0105. Student 3 roku",u,["javascript","css","react","c++"]),new b("Mateusz","Wo\u017aniak","Ambitny, otwarty na zdobycie nowych umiej\u0119tno\u015bci",w,["c","c++","python"])],searchingDesc:"",searchingTag:""},e.appendStudent=function(t){e.setState({studentsList:e.state.studentsList.concat(t)})},e.handleSearchingDescValue=function(t){e.setState({searchingDesc:t})},e.handleSearchingTagValue=function(t){e.setState({searchingTag:t.toString().toLowerCase()})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.studentsList.map((function(t,c){if(""===e.state.searchingDesc){if(""===e.state.searchingTag)return Object(x.jsx)(N,{studentInfo:t},c+100);if(t.tags.includes(e.state.searchingTag))return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N,{studentInfo:t},c+100)})}else if(""===e.state.searchingTag){if(t.description.toString().toLocaleLowerCase().includes(e.state.searchingDesc.toLocaleLowerCase()))return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N,{studentInfo:t},c+100)})}else if(t.description.toString().toLocaleLowerCase().includes(e.state.searchingDesc.toLocaleLowerCase())&&t.tags.includes(e.state.searchingTag))return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N,{studentInfo:t},c+100)})}));return Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{path:"/",exact:!0,children:Object(x.jsx)("div",{className:"main-cont",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-12 col-md-3 container-fluid float-center centered-text p-3",children:Object(x.jsx)(y,{captureDescSearching:this.handleSearchingDescValue,captureTagSearching:this.handleSearchingTagValue})}),Object(x.jsx)("div",{className:"col-12 col-md-7 offset-md-2 float-center",id:"listOfStudents",children:Object(x.jsx)(g,{children:function(){var e={renderStudentsList:t};return Object.keys(e).map((function(t){return e[t]}))}()})})]})})}),Object(x.jsx)(h.a,{path:"/new",children:Object(x.jsx)("div",{className:"container-fluid float-center",children:Object(x.jsx)(O,{appendStudent:this.appendStudent})})})]})}}]),c}(n.Component),k=c(19),L=(c(63),c.p+"static/media/logo.e88016e0.png"),D=(c(37),c(64),c(76)),F=c(79),T=c(77),I=c(78);var A=function(){var e=a.a.useState(!0),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(x.jsxs)(k.a,{basename:"/PIW-Lab5-Sobolewski",children:[Object(x.jsx)("header",{children:Object(x.jsx)("div",{className:"container-fluid nav-cont mt-2",children:Object(x.jsxs)("nav",{className:"navbar navBar navbar-static-top navbar-light navbar-expand-md display-inline",children:[Object(x.jsx)("div",{className:"logo-box",children:Object(x.jsx)(k.b,{to:"/",exact:!0,children:Object(x.jsx)("img",{className:"d-inline-block img-fluid logo border",src:L,alt:"Logo"})})}),Object(x.jsx)(D.a,{onClick:function(){return n(!c)},className:"mr-2"}),Object(x.jsx)(F.a,{isOpen:!c,navbar:!0,children:Object(x.jsxs)(T.a,{navbar:!0,children:[Object(x.jsx)(I.a,{children:Object(x.jsx)(k.b,{to:"/",exact:!0,children:Object(x.jsx)("div",{className:"nav-panel my-1 mx-5 main-text-type",children:"Students list"})})}),Object(x.jsx)(I.a,{children:Object(x.jsx)(k.b,{to:"/new",children:Object(x.jsx)("div",{className:"nav-panel my-1 mx-5 main-text-type",children:"Add new student"})})})]})})]})})}),Object(x.jsx)(C,{})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),P()}},[[73,1,2]]]);
//# sourceMappingURL=main.6574d5d1.chunk.js.map