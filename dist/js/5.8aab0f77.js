(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{40:function(e,t,n){e.exports=n.p+"/images/grid-img1.446899d7.jpg"},41:function(e,t,n){e.exports=n.p+"/images/grid-img2.5ac9ac93.jpg"},42:function(e,t,n){e.exports=n.p+"/images/grid-img3.4efee83c.jpg"},74:function(e,t,n){},88:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var r=n(7),i=n(8),c=n(10),l=n(9),o=n(11),s=n(0),u=n.n(s),g=n(48),m=n.n(g),p=n(2),f=n(15),d=n.n(f),h=(n(74),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pageCount,n=e.pageSize,a=e.total,r=e.currentPage,i=e.onClick,c=1;return t>=10&&r>=5&&(c=r-2),t?u.a.createElement("div",{className:"pagination"},u.a.createElement("span",{className:"total"},"共 ",a," 条"),u.a.createElement("span",{className:"page-size"},n," 条/页"),u.a.createElement("ul",{className:"page-number"},t>=10&&r>=5&&u.a.Children.toArray([u.a.createElement("li",{onClick:function(){return i(1)}},"1"),u.a.createElement("li",{className:"transition"},"...")]),Array.apply(null,{length:t>=10?5:t}).map(function(e,n){var a=r+2<t||t<10?c:t-4;return u.a.createElement("li",{key:"page-number-".concat(n),className:d()({current:r===n+a}),onClick:function(){return i(n+a)}},n+a)}),t>=10&&t-2>r&&u.a.Children.toArray([u.a.createElement("li",{className:d()("transition",{hide:!(t-r-2-1)||t-5-2-1<=0})},"..."),u.a.createElement("li",{onClick:function(){return i(t)}},t)]))):null}}]),t}(u.a.Component)),b=n(40),v=n.n(b),y=n(41),E=n.n(y),j=n(42),k=n.n(j),O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={listConfig:[],size:15,total:0,currentPage:1,articleLists:[]},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getArticleConfig()}},{key:"getArticleConfig",value:function(){var e=this;m.a.get("/dist/data/article-config.json").then(function(t){e.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},t.data),function(){return e.getPageList()})})}},{key:"getPageList",value:function(){var e=this,t=this.state,n=t.listConfig,a=t.currentPage;m.a.get("/dist/data/".concat(n[a-1])).then(function(t){return e.setState({articleLists:t.data.articleLists})})}},{key:"getImg",value:function(){return[v.a,E.a,k.a][Math.floor(3*Math.random())]}},{key:"render",value:function(){var e=this,t=this.state,n=t.listConfig,a=t.size,r=t.total,i=t.currentPage,c=t.articleLists;return u.a.createElement("div",{className:"services content"},u.a.createElement("div",{className:"about-data"},u.a.createElement("h2",null,"中国梦"),u.a.createElement("p",null,"中国梦，是中国共产党第十八次全国代表大会召开以来，习近平总书记所提出的重要指导思想和重要执政理念， 正式提出于2012年11月29日。习总书记把“中国梦”定义为“实现中华民族伟大复兴，就是中华民族近代以来最伟大梦想”， 并且表示这个梦“一定能实现”。“中国梦”的核心目标也可以概括为“两个一百年”的目标， 也就是：到2021年中国共产党成立100周年和2049年中华人民共和国成立100周年时，逐步并最终顺利实现中华民族的伟大复兴， 具体表现是国家富强、民族振兴、人民幸福，实现途径是走中国特色的社会主义道路、坚持中国特色社会主义理论体系、弘扬民族精神、凝聚中国力量， 实施手段是政治、经济、文化、社会、生态文明五位一体建设。"),Array.apply(null,{length:Math.ceil(c.length/3)}).map(function(e,t){return u.a.createElement("div",{className:"top-grids services-grids",key:"grids-".concat(t)},u.a.createElement("div",{className:"section group"},Array.apply(null,{length:3}).map(function(e,n){var a=3*t+n;if(a+1>c.length)return null;var r=c[a];return u.a.createElement("div",{className:"grid_1_of_3 images_1_of_3 top_grid",key:"grids-".concat(t,"-item-").concat(n)},u.a.createElement("div",{className:"topgrid-desc"},u.a.createElement("h3",null,r.title),u.a.createElement("p",null,r.describe,u.a.createElement(p.b,{to:r.link},"查看全部"))),u.a.createElement("img",{src:r.thumbnail}))})))}),u.a.createElement(h,{pageCount:n.length,pageSize:a,total:r,currentPage:i,onClick:function(t){return e.setState({currentPage:t},function(){return e.getPageList()})}})))}}]),t}(u.a.Component);t.default=O}}]);