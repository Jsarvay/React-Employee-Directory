(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),c=n.n(r),s=n(12),i=n.n(s),l=(n(23),n(13)),o=n(14),h=n(17),u=n(16);n(24),n(25);var j=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("h4",{children:"Sort and Search Through your Employee Database!"})]})};n(26);var m=function(e){return Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("form",{className:"search",children:[Object(a.jsx)("input",{name:"search",type:"text",placeholder:"search",className:"form-control",onChange:e.handleInputChange}),Object(a.jsx)("button",{onClick:e.handleSearch,className:"btn btn-primary",children:"Search"})]})})};n(27);var d=function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)("img",{alt:e.firstname,src:e.image})}),Object(a.jsx)("th",{children:e.firstname}),Object(a.jsx)("th",{children:e.lastname}),Object(a.jsx)("th",{children:e.email}),Object(a.jsx)("th",{children:e.phone})]})};n(28);var f=function(e){return Object(a.jsx)("div",{className:"wrapper",children:e.children})},b=n(15),p=n.n(b),O=function(){return p.a.get("https://randomuser.me/api/?results=10&nat=us")},x=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employee:[],filter:[]},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleSearch=function(t){t.preventDefault();var n=e.state.employee.filter((function(t){return t.name.first.includes(e.state.search)||t.name.last.includes(e.state.search)||t.phone.includes(e.state.search)||t.email.includes(e.state.search)}));console.log(n),e.setState({filter:n})},e.firstNameSearch=function(t){t.preventDefault();var n=e.state.filter.sort((function(e,t){var n=e.name.first.toUpperCase(),a=t.name.first.toUpperCase();return n<a?-1:n>a?1:0}));e.setState({filter:n})},e.lastNameSearch=function(t){t.preventDefault();var n=e.state.filter.sort((function(e,t){var n=e.name.last.toUpperCase(),a=t.name.last.toUpperCase();return n<a?-1:n>a?1:0}));e.setState({filter:n})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({employee:t.data.results,filter:t.data.results})})).catch((function(e){return console.log(e)})),console.log(this.state.employee),console.log(this.state.filter)}},{key:"render",value:function(){return Object(a.jsxs)(f,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(m,{handleInputChange:this.handleInputChange,handleSearch:this.handleSearch}),Object(a.jsx)("div",{className:"table-div",children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{className:"sort-button",onClick:this.firstNameSearch,children:"First Name"})}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{className:"sort-button",onClick:this.lastNameSearch,children:"Last Name"})}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Phone Number"})]}),this.state.filter.map((function(e){return Object(a.jsx)(d,{firstname:e.name.first,lastname:e.name.last,email:e.email,phone:e.phone,image:e.picture.thumbnail},e.id.value)}))]})})]})}}]),n}(r.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(47);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),v()}},[[48,1,2]]]);
//# sourceMappingURL=main.0c465af1.chunk.js.map