(this.webpackJsonpconvector=this.webpackJsonpconvector||[]).push([[0],{15:function(e,t,n){e.exports={header:"Valute_header__12Zm1",favorites:"Valute_favorites__1m-r8",valute:"Valute_valute__3kq7U",tablica:"Valute_tablica__2QsOb"}},40:function(e,t,n){e.exports={header:"Converter_header__s3Bjz"}},47:function(e,t,n){},48:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(17),s=n.n(i),o=(n(47),n(3)),u=(n(48),n(18)),l=n(19),d=n(22),j=n(21),h=n(13),v=n(11),b=n(40),f=n.n(b),O=n(20),p=n.n(O),x=n(10),y=n(5),g="GET_VALUTES",m="ADD_FAVORITE",V="DEL_FAVORITE",C="CHEACK",_="UPDATE_COUNT",w="COUNT_MONEY",k={valutes:[],favorite:[],count:0,money:0},N=function(e){return{type:g,valutes:e}},T=n(23),D=n.n(T),F=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://www.cbr-xml-daily.ru/daily_json.js").then((function(t){return e.props.getValute(Object.values(t.data.Valute))}))}},{key:"change",value:function(e){this.props.updateCount(e),this.props.countMoney(this.props.valutes.filter((function(e){return e.CharCode===D()("#valute").val()}))[0].Value)}},{key:"changeValute",value:function(){this.props.countMoney(this.props.valutes.filter((function(e){return e.CharCode===D()("#valute").val()}))[0].Value)}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:f.a.header,children:Object(c.jsxs)("div",{style:{textAlign:"center",fontSize:50,paddingTop:30,color:"blue"},children:[Object(c.jsx)("div",{children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"}),Object(c.jsx)(v.b,{to:"/",children:Object(c.jsx)("button",{style:{fontSize:30,height:50,width:200,marginTop:30},children:"\u0412\u0430\u043b\u044e\u0442\u044b"})})]})}),Object(c.jsxs)("div",{style:{margin:"0 auto",width:400,marginTop:100},children:[Object(c.jsxs)("div",{style:{float:"left"},children:[Object(c.jsx)("div",{children:Object(c.jsx)("select",{id:"valute",onChange:this.changeValute.bind(this),children:this.props.valutes.map((function(e){return Object(c.jsx)("option",{children:e.CharCode},e.CharCode)}))})}),Object(c.jsx)("input",{id:"count",style:{marginTop:50,height:30,fontSize:25,width:100},onChange:function(){return e.change(D()("#count").val())},value:this.props.count})]}),Object(c.jsxs)("div",{style:{paddingLeft:300},children:[Object(c.jsx)("div",{id:"sum",children:"RUB"}),Object(c.jsx)("div",{id:"esc",style:{marginTop:50,height:30,fontSize:25,width:100},children:this.props.count*this.props.money})]})]}),Object(c.jsx)("div",{})]})}}]),n}(a.a.Component),I=Object(h.b)((function(e){return{valutes:e.reducersValue.valutes,count:e.reducersValue.count,money:e.reducersValue.money}}),{getValute:N,updateCount:function(e){return{type:_,count:e}},countMoney:function(e){return{type:w,money:e}}})(F),S=n(15),A=n.n(S),E=n.p+"static/media/preloader.40ed8d54.gif",M=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsx)("img",{src:E})})})},z=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={favorite:Object(x.a)(c.props.favorite.concat(JSON.parse(localStorage.getItem("favr"))))},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getValutThunk()}},{key:"addFavori",value:function(e){this.props.addFavorite(e),this.props.cheack(e.ID),localStorage.setItem("favr",JSON.stringify(Object(x.a)(this.props.favorite.concat([e])))),this.setState({favorite:[].concat(Object(x.a)(this.props.favorite),[e])})}},{key:"delFavorite",value:function(e){this.props.delFavorite(e)}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:A.a.header,children:[Object(c.jsx)("div",{children:"\u0412\u0430\u043b\u044e\u0442\u044b \u0441\u0442\u0440\u0430\u043d \u043c\u0438\u0440\u0430"}),Object(c.jsx)(v.b,{to:"/converter",children:Object(c.jsx)("button",{style:{height:50,width:150,fontSize:20},children:"Converter"})})]}),Object(c.jsxs)("div",{children:[this.state.favorite.length>0&&Object(c.jsxs)("div",{className:A.a.favorites,children:["\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",Object(c.jsx)("div",{children:this.state.favorite.length>0&&this.state.favorite.map((function(e){return Object(c.jsxs)("div",{className:A.a.tablica,children:[Object(c.jsx)("div",{style:{width:500,border:"1px solid silver",float:"left"},children:e.Name}),Object(c.jsx)("div",{style:{width:100,border:"1px solid silver",float:"left",color:"blue"},children:e.Value})]},e.ID)}))})]}),Object(c.jsxs)("div",{className:A.a.valute,children:[Object(c.jsx)("div",{style:{textAlign:"center"},children:"\u0412\u0430\u043b\u044e\u0442\u044b"}),this.props.valutes.length<=0&&Object(c.jsx)(M,{}),this.props.valutes.map((function(t){return Object(c.jsxs)("div",{className:A.a.tablica,children:[Object(c.jsx)("div",{style:{width:500,border:"1px solid silver",float:"left"},children:t.Name}),Object(c.jsx)("div",{style:{width:100,border:"1px solid silver",float:"left",color:"blue"},children:t.Value}),Object(c.jsx)("button",{onClick:function(){e.addFavori({ID:t.ID,Name:t.Name,Value:t.Value})},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]},t.ID)}))]})]})]})}}]),n}(a.a.Component),U=Object(h.b)((function(e){return{valutes:e.reducersValue.valutes,favorite:e.reducersValue.favorite}}),{getValute:N,addFavorite:function(e){return{type:m,favorite:e}},delFavorite:function(e){return{type:V,id:e}},cheack:function(e){return{type:C,id:e}},getValutThunk:function(){return function(e){return p.a.get("https://www.cbr-xml-daily.ru/daily_json.js").then((function(t){return e(N(Object.values(t.data.Valute)))}))}}})(z);var L=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",exact:!0,component:function(){return Object(c.jsx)(U,{})}}),Object(c.jsx)(o.a,{path:"/converter",exact:!0,component:function(){return Object(c.jsx)(I,{})}})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},J=n(14),P=n(41),R=Object(J.c)({reducersValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(y.a)(Object(y.a)({},e),{},{valutes:t.valutes});case m:return Object(y.a)(Object(y.a)({},e),{},{favorite:[].concat(Object(x.a)(e.favorite),[t.favorite])});case V:return Object(y.a)(Object(y.a)({},e),{},{favorite:Object(x.a)(e.favorite.filter((function(e){return e.ID!=t.id})))});case C:return Object(y.a)(Object(y.a)({},e),{},{valutes:Object(x.a)(e.valutes.filter((function(e){return e.ID!=t.id})))});case _:return Object(y.a)(Object(y.a)({},e),{},{count:t.count});case w:return Object(y.a)(Object(y.a)({},e),{},{money:t.money});default:return Object(y.a)({},e)}}}),q=Object(J.d)(R,Object(J.a)(P.a));s.a.render(Object(c.jsx)(v.a,{children:Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h.a,{store:q,children:Object(c.jsx)(L,{})})})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.48a35b46.chunk.js.map