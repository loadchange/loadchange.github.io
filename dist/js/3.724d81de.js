(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n(6),r=n(8),s=n(7),c=n(9),l=n(0),u=n.n(l),o=n(13),m=n.n(o),h=n(38),f=n.n(h),d=n(39),p=n.n(d),g=n(40),b=n.n(g),v=(n(78),[f.a,p.a,b.a]),y=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(r.a)(this,Object(s.a)(e).call(this,t))).imgWrap=u.a.createRef(),n.state={current:1,delay:!0,bannerWidth:0,imgList:[]},n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){var t=this;this.setState({imgList:[v[v.length-1]].concat(v,[v[0]])},function(){for(var e=t.imgWrap.current,n=e.offsetWidth,a=e.firstChild,i=0;i<a.children.length;i++){a.children[i].firstChild.style.width="".concat(n,"px")}t.setState({bannerWidth:n},function(){a.style.width="".concat(a.children.length*n,"px")})})}},{key:"turn",value:function(t){var e=this,n=this.state,a=n.current,i=n.imgList,r=t?a+1:a-1;this.setState({current:r},function(){(r>=i.length-1||!r)&&setTimeout(function(){e.setState({delay:!1},function(){e.setState({current:r?1:i.length-2}),setTimeout(function(){e.setState({delay:!0})},18)})},300)})}},{key:"render",value:function(){var t=this,e=this.state,n=e.imgList,a=e.delay;return u.a.createElement("div",{className:"banner"},u.a.createElement("div",{className:"banner-text"},u.a.createElement("h2",null,u.a.createElement("span",null,"宴安鸩毒，不可怀也。")),u.a.createElement("h2",null,"不管前方的路有多苦，只要走的方向正确，都比站在原地更接近幸福。")),u.a.createElement("div",{className:"img-list",ref:this.imgWrap},u.a.createElement("ul",{className:m()("slides",{delay:a}),style:this.seat},n.map(function(t,e){return u.a.createElement("li",{key:"img-".concat(e)},u.a.createElement("img",{src:t}))})),u.a.createElement("button",{className:"slides-left",onClick:function(){return t.turn()}},"前"),u.a.createElement("button",{className:"slides-right",onClick:function(){return t.turn(!0)}},"后")))}},{key:"seat",get:function(){var t=this.state,e=t.bannerWidth,n=t.current;return{transform:"translateX(-".concat(e*n,"px)")}}}]),e}(u.a.Component);e.default=y},38:function(t,e,n){t.exports=n.p+"/images/slide1.f3e695b8.jpg"},39:function(t,e,n){t.exports=n.p+"/images/slide2.ec2ad7f2.jpg"},40:function(t,e,n){t.exports=n.p+"/images/slide3.cdb87438.jpg"},78:function(t,e,n){}}]);