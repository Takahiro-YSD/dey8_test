(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{219:function(t,e,n){"use strict";var r=n(231).a({space:"oodhus1frod9",accessToken:"oh6QID0thGH2kCjO04TfeIyiVlb23T-zIKtFyQIs-E0"});e.a=r},230:function(t,e){},344:function(t,e,n){"use strict";n.r(e);n(52);var r=n(19),c=n(219),o={data:function(){return{message:"Contentful のテスト"}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getEntries({content_type:"yoshidaTest"});case 2:return e=t.sent,n=e.items,t.abrupt("return",{items:n});case 5:case"end":return t.stop()}}),t)})))()}},l=n(44),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.message))]),t._v(" "),n("div",[n("table",{staticClass:"table table-hover table-striped"},[t._m(0),t._v(" "),n("tbody",t._l(t.items,(function(e,i){return n("tr",{key:i},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.fields.title))]),t._v(" "),n("td",[n("nuxt-link",{attrs:{to:{name:"blog-id",params:{id:e.sys.id}}}},[t._v("\n                リンク\n              ")])],1)])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("title")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("link")])])])}],!1,null,null,null);e.default=component.exports}}]);