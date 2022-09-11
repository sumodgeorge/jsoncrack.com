"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{5562:function(a,b,c){c.r(b),c.d(b,{Graph:function(){return L}});var d=c(6042),e=c(9396),f=c(828),g=c(7297),h=c(5893),i=c(7294),j=c(6126),k=c(8188),l=c(9189),m=c(2125),n=c(1440);function o(){var a=(0,g.Z)(["\n  text-decoration: underline;\n  pointer-events: all;\n"]);return o=function(){return a},a}function p(){var a=(0,g.Z)(["\n  text-align: ",";\n  font-size: 12px;\n  overflow: hidden;\n  color: ",";\n  pointer-events: none;\n  padding: ",';\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n  }\n\n  .highlight {\n    border: 2px dashed #FF2970;\n    background: rgba(255, 214, 0, 0.3);\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return p=function(){return a},a}function q(){var a=(0,g.Z)(["\n  display: inline;\n  flex: 1;\n  font-weight: 500;\n  color: ",";\n  font-size: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: ",";\n"]);return q=function(){return a},a}function r(){var a=(0,g.Z)(["\n  display: block;\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n"]);return r=function(){return a},a}var s=(0,m.ZP)(n.Ld)(o()),t=m.ZP.foreignObject(p(),function(a){return!a.isObject&&"center"},function(a){return a.theme.TEXT_NORMAL},function(a){return a.isObject&&"10px"},function(a){return a.theme.TEXT_POSITIVE}),u=m.ZP.span(q(),function(a){var b,c,d,e=a.theme,f=a.objectKey,g=a.parent;return b=e,c=void 0!==g&&g,d=void 0!==f&&f,c?b.NODE_KEY:d?b.OBJECT_KEY:b.TEXT_POSITIVE},function(a){return a.parent&&"14px"},function(a){return a.parent&&"10px"}),v=m.ZP.span.attrs(function(a){var b,c;return{style:{color:(b=a["data-key"],c=a.theme,Number.isNaN(+b)?"true"===b?c.TEXT_POSITIVE:"false"===b?c.TEXT_DANGER:void 0:"#FD0079")}}})(r()),w=function(a){var b=a.width,c=a.height,d=a.value,e=a.x,f=a.y,g=i.useRef(null);return(0,l.Z)(function(a){return a.performanceMode}),(0,h.jsx)(t,{width:b,height:c,x:0,y:0,ref:g,isObject:!0,children:d.map(function(a,b){return(0,h.jsxs)(v,{"data-key":JSON.stringify(a[1]),"data-x":e,"data-y":f,children:[(0,h.jsxs)(u,{objectKey:!0,children:[JSON.stringify(a[0]).replaceAll('"',""),":"," "]}),(0,h.jsx)(s,{children:JSON.stringify(a[1])})]},b)})})},x=i.memo(w,function(a,b){return a.width===b.width&&a.height===b.height}),y=c(5434),z=c(3719),A=c(9577);function B(){var a=(0,g.Z)(["\n  pointer-events: all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background: rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 40px;\n  border-left: 1px solid ",";\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n"]);return B=function(){return a},a}function C(){var a=(0,g.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return C=function(){return a},a}var D=m.ZP.button(B(),function(a){return a.theme.TEXT_NORMAL},function(a){return a.theme.BACKGROUND_MODIFIER_ACCENT}),E=m.ZP.div(C(),function(a){return a.hasCollapse?"space-between":"center"}),F=function(a){var b=a.node,c=a.width,d=a.height,e=a.value,g=a.isParent,j=void 0!==g&&g,k=a.hasCollapse,m=void 0!==k&&k,n=a.x,o=a.y,p=i.useRef(null),q=((0,l.Z)(function(a){return a.performanceMode}),(0,A.Z)(function(a){return a.hideCollapse})),r=(0,z.Z)(function(a){return a.expandNodes}),v=(0,z.Z)(function(a){return a.collapseNodes}),w=(0,f.Z)(i.useState(!0),2),x=w[0],B=w[1],C=function(a){a.stopPropagation(),B(!x),x?v(b.id):r(b.id)};return(0,h.jsx)(t,{width:c,height:d,x:0,y:0,"data-nodeid":b.id,ref:p,hideCollapse:q,hasCollapse:j&&m,children:(0,h.jsxs)(E,{hasCollapse:j&&!q,children:[(0,h.jsx)(u,{"data-x":n,"data-y":o,"data-key":JSON.stringify(e),parent:j,children:(0,h.jsx)(s,{children:JSON.stringify(e).replaceAll('"',"")})}),j&&m&&!q&&(0,h.jsx)(D,{onClick:C,children:(0,h.jsx)(y.GKy,{size:18})})]})})},G=i.memo(F,function(a,b){return a.value===b.value}),H=function(a){var b=a.properties;return(0,h.jsx)(k.Node,(0,e.Z)((0,d.Z)({},a),{label:(0,h.jsx)(i.Fragment,{}),children:function(a){var c=a.width,d=a.height,e=a.x,f=a.y,g=a.node;return Array.isArray(b.text)?(0,h.jsx)(x,{value:b.text,width:c,height:d,x:e,y:f}):(0,h.jsx)(G,{node:g,isParent:b.data.isParent,value:b.text,width:c,height:d,hasCollapse:b.data.hasChild,x:e,y:f})}}))};function I(){var a=(0,g.Z)(["\n  position: absolute;\n  width: 100%;\n  height: ",";\n  background: ",";\n  background-image: ",";\n  background-size: 15px 15px;\n\n  :active {\n    cursor: move;\n  }\n\n  .dragging {\n    pointer-events: none;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return I=function(){return a},a}var J=m.ZP.div(I(),function(a){return a.isWidget?"100vh":"calc(100vh - 36px)"},function(a){return a.theme.BACKGROUND_SECONDARY},function(a){var b=a.theme;return"radial-gradient(#505050 0.5px, ".concat(b.BACKGROUND_SECONDARY," 0.5px)")},function(a){return a.theme.BACKGROUND_NODE}),K=function(a){var b=a.isWidget,c=a.openModal,g=a.setSelectedNode,m=(0,l.Z)(function(a){return a.setConfig}),n=(0,l.Z)(function(a){return a.layout}),o=(0,z.Z)(function(a){return a.nodes}),p=(0,z.Z)(function(a){return a.edges}),q=(0,f.Z)(i.useState({width:2e3,height:2e3}),2),r=q[0],s=q[1],t=i.useCallback(function(a,b){g(b.text),c()},[c,g]),u=i.useCallback(function(a){m("zoomPanPinch",a)},[m]),v=i.useCallback(function(a){a.width&&a.height&&s({width:a.width+400,height:a.height+400})},[]),w=i.useCallback(function(){var a=document.querySelector("input:focus");a&&a.blur()},[]);return(0,h.jsx)(J,{isWidget:b,children:(0,h.jsx)(j.d$,{maxScale:2,minScale:.5,initialScale:.7,wheel:{step:.05},zoomAnimation:{animationType:"linear"},doubleClick:{disabled:!0},onInit:u,onPanning:function(a){var b;return null===(b=a.instance.wrapperComponent)|| void 0===b?void 0:b.classList.add("dragging")},onPanningStop:function(a){var b;return null===(b=a.instance.wrapperComponent)|| void 0===b?void 0:b.classList.remove("dragging")},children:(0,h.jsx)(j.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,h.jsx)(k.Canvas,{nodes:o,edges:p,maxWidth:r.width,maxHeight:r.height,direction:n,onLayoutChange:v,onCanvasClick:w,zoomable:!1,animated:!1,readonly:!0,dragEdge:null,dragNode:null,fit:!0,node:function(a){return(0,h.jsx)(H,(0,e.Z)((0,d.Z)({},a),{onClick:t}))},edge:function(a){return(0,h.jsx)(k.Edge,(0,e.Z)((0,d.Z)({},a),{containerClassName:"edge-".concat(a.id)}))}},n)})})})},L=i.memo(K)},1111:function(a,b,c){c.r(b),c.d(b,{default:function(){return ag}});var d=c(7297),e=c(5893),f=c(7294),g=c(2125),h=c(828),i=c(8193),j=c(9647),k=c(5434),l=c(6042),m=c(9396),n=c(155),o=function(){var a=document.querySelectorAll("foreignObject.searched, .highlight");null==a||a.forEach(function(a){a.classList.remove("highlight"),a.classList.remove("searched")})},p=function(a,b){null==a||a.forEach(function(a){var b,c,d;console.log(null===(b=a.parentElement)|| void 0===b?void 0:b.closest("foreignObject")),null===(d=null===(c=a.parentElement)|| void 0===c?void 0:c.closest("foreignObject"))|| void 0===d||d.classList.add("searched")}),a[b].classList.add("highlight")},q=c(9189),r=function(){var a=(0,q.Z)(function(a){return a.setConfig}),b=(0,q.Z)(function(a){return a.zoomPanPinch}),c=(0,h.Z)(f.useState(0),2),d=c[0],e=c[1],g=(0,h.Z)(f.useState({value:"",debounced:""}),2),i=g[0],j=g[1],k=function(){return e(function(a){return a+1})};return f.useEffect(function(){a("performanceMode",!i.value.length);var b=setTimeout(function(){j(function(a){return(0,m.Z)((0,l.Z)({},a),{debounced:i.value})})},800);return function(){return clearTimeout(b)}},[i.value,a]),f.useEffect(function(){if(b){var a,c=b.instance.wrapperComponent,f=(a="span[data-key*='".concat(i.debounced,"' i]"),document.querySelectorAll("".concat(a))),g=f[d]||null;if(o(),c&&g&&g.parentElement){var h=1,j=Number(g.getAttribute("data-x")),k=Number(g.getAttribute("data-y")),l=(c.offsetLeft-j)*h+c.clientWidth/2-g.getBoundingClientRect().width/2,m=(c.offsetLeft-k)*h+c.clientHeight/2-g.getBoundingClientRect().height/2;p(f,d),null==b||b.setTransform(l,m,h)}else e(0);return function(){i.value||e(0)}}},[i.debounced,i.value,d,b]),[i,j,k]};function s(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  height: 25px;\n"]);return s=function(){return a},a}function t(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 4px 6px;\n"]);return t=function(){return a},a}function u(){var a=(0,d.Z)(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return u=function(){return a},a}function v(){var a=(0,d.Z)(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return v=function(){return a},a}var w=g.ZP.div(s(),function(a){return a.theme.BACKGROUND_TERTIARY}),x=g.ZP.form(t()),y=g.ZP.input(u(),function(a){return a.theme.TEXT_NORMAL}),z=g.ZP.button(v(),function(a){return a.theme.INTERACTIVE_NORMAL}),A=function(){var a=(0,h.Z)(r(),3),b=a[0],c=a[1],d=a[2],f=function(a){a.preventDefault(),d()},g=function(a){a.preventDefault(),c({value:"",debounced:""})};return(0,e.jsx)(w,{children:(0,e.jsxs)(x,{onSubmit:f,children:[(0,e.jsx)(y,{type:"text",value:b.value,onChange:function(a){return c(function(b){return(0,m.Z)((0,l.Z)({},b),{value:a.target.value})})},placeholder:"Search Node"}),(0,e.jsx)(z,{type:"reset","aria-label":"search",onClick:g,children:b.value?(0,e.jsx)(n.Lp2,{size:18}):(0,e.jsx)(i.RB5,{size:18})})]})})},B=c(7471),C=c(7106),D=c(1342),E=c(1649);function F(){var a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  width: 100%;\n  gap: 6px;\n"]);return F=function(){return a},a}function G(){var a=(0,d.Z)(["\n  color: ",";\n  font-weight: 500;\n  cursor: pointer;\n"]);return G=function(){return a},a}function H(){var a=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  width: 40px;\n  height: 24px;\n  padding: 2px;\n  border-radius: 14px;\n  background: ",";\n  cursor: pointer;\n\n  input {\n    display: none;\n  }\n"]);return H=function(){return a},a}var I=g.ZP.div(F()),J=g.ZP.label(G(),function(a){return a.theme.INTERACTIVE_ACTIVE}),K=g.ZP.div(H(),function(a){return a.active?"right":"left"},function(a){return a.active?"#3AA55D":"#72767c"}),L=function(a){var b=a.children,c=a.checked,d=a.onChange,g=(0,h.Z)(f.useState(void 0!==c&&c),2),i=g[0],j=g[1],k=function(){j(!i),d&&d(!i)};return(0,e.jsxs)(I,{children:[(0,e.jsxs)(K,{active:i,onClick:k,children:[i?(0,e.jsx)(E.be3,{size:22,color:"white"}):(0,e.jsx)(E.mpJ,{size:22,color:"white"}),(0,e.jsx)("input",{type:"checkbox",checked:i,onChange:k})]}),(0,e.jsx)(J,{onClick:k,children:b})]})},M=c(9577),N=c(374);function O(){var a=(0,d.Z)(["\n  flex-flow: row-reverse;\n  background: black;\n"]);return O=function(){return a},a}function P(){var a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]);return P=function(){return a},a}var Q=(0,g.ZP)(L)(O()),R=g.ZP.div(P()),S=function(a){var b=a.visible,c=a.setVisible,d=(0,M.Z)(function(a){return a.lightmode}),f=(0,M.Z)(function(a){return a.setLightTheme}),g=(0,h.Z)((0,M.Z)(function(a){return[a.toggleHideCollapse,a.hideCollapse]},N.Z),2),i=g[0],j=g[1];return(0,e.jsxs)(D.u,{visible:b,setVisible:c,children:[(0,e.jsx)(D.u.Header,{children:"Settings"}),(0,e.jsx)(D.u.Content,{children:(0,e.jsxs)(R,{children:[(0,e.jsx)(Q,{onChange:i,checked:j,children:"Hide Collapse/Expand Button"}),(0,e.jsx)(Q,{onChange:function(){return f(!d)},checked:d,children:"Enable Light Theme"})]})}),(0,e.jsx)(D.u.Controls,{setVisible:c})]})};function T(){var a=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n  box-shadow: 0 1px 0px ",";\n  z-index: 1;\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return T=function(){return a},a}function U(){var a=(0,d.Z)(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n  padding: 6px;\n  border-radius: 3px;\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return U=function(){return a},a}var V=g.ZP.div(T(),function(a){return a.theme.BACKGROUND_PRIMARY},function(a){return a.theme.SILVER},function(a){return a.theme.BACKGROUND_TERTIARY}),W=g.ZP.button(U(),function(a){return a.theme.INTERACTIVE_NORMAL},function(a){return a.theme.INTERACTIVE_HOVER}),X=function(){var a=(0,h.Z)(f.useState(!1),2),b=a[0],c=a[1],d=(0,h.Z)(f.useState(!1),2),g=d[0],l=d[1],m=(0,q.Z)(function(a){return a.hideEditor}),n=(0,q.Z)(function(a){return a.setConfig}),o=(0,q.Z)(function(a){return a.zoomIn}),p=(0,q.Z)(function(a){return a.zoomOut}),r=(0,q.Z)(function(a){return a.centerView}),s=function(){return n("hideEditor",!m)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(V,{children:[(0,e.jsx)(W,{"aria-label":"fullscreen",onClick:s,children:(0,e.jsx)(i.vju,{})}),(0,e.jsx)(W,{"aria-label":"settings",onClick:function(){return c(!0)},children:(0,e.jsx)(C.sDK,{})}),(0,e.jsx)(A,{}),(0,e.jsx)(W,{"aria-label":"save",onClick:function(){return l(!0)},children:(0,e.jsx)(j._hL,{})}),(0,e.jsx)(W,{"aria-label":"center canvas",onClick:r,children:(0,e.jsx)(k.XIv,{})}),(0,e.jsx)(W,{"aria-label":"zoom out",onClick:p,children:(0,e.jsx)(i.ywL,{})}),(0,e.jsx)(W,{"aria-label":"zoom in",onClick:o,children:(0,e.jsx)(i.Lfi,{})})]}),(0,e.jsx)(B._,{visible:g,setVisible:l}),(0,e.jsx)(S,{visible:b,setVisible:c})]})},Y=c(6501),Z=c(3565);function $(){var a=(0,d.Z)(["\n  resize: none;\n  width: 100%;\n  min-height: 200px;\n\n  padding: 10px;\n  background: ",";\n  color: ",";\n  outline: none;\n  border-radius: 4px;\n  line-height: 20px;\n  border: none;\n"]);return $=function(){return a},a}var _=g.ZP.textarea($(),function(a){return a.theme.BACKGROUND_TERTIARY},function(a){return a.theme.INTERACTIVE_NORMAL}),aa=function(a){var b=a.selectedNode,c=a.visible,d=a.closeModal,f=Array.isArray(b)?Object.fromEntries(b):b,g=function(){Y.ZP.success("Content copied to clipboard!"),navigator.clipboard.writeText(JSON.stringify(f)),d()};return(0,e.jsxs)(D.u,{visible:c,setVisible:d,children:[(0,e.jsx)(D.u.Header,{children:"Node Content"}),(0,e.jsx)(D.u.Content,{children:(0,e.jsx)(_,{defaultValue:JSON.stringify(f,function(a,b){return"string"==typeof b?b.replaceAll('"',""):b},2),readOnly:!0})}),(0,e.jsx)(D.u.Controls,{setVisible:d,children:(0,e.jsxs)(Z.z,{status:"SECONDARY",onClick:g,children:[(0,e.jsx)(j.C3L,{size:18})," Clipboard"]})})]})},ab=c(3719),ac=c(5562),ad=function(a){var b=a.isWidget,c=void 0!==b&&b,d=(0,h.Z)(f.useState(!1),2),g=d[0],i=d[1],j=(0,h.Z)(f.useState([]),2),k=j[0],l=j[1],m=f.useCallback(function(){return i(!0)},[]),n=(0,ab.Z)(function(a){return a.collapsedNodes}),o=(0,ab.Z)(function(a){return a.collapsedEdges});return f.useEffect(function(){var a=n.map(function(a){return'[id$="node-'.concat(a,'"]')}),b=o.map(function(a){return'[class$="edge-'.concat(a,'"]')});if(document.querySelectorAll(".hide").forEach(function(a){return a.classList.remove("hide")}),a.length){var c=document.querySelectorAll(a.join(",")),d=document.querySelectorAll(b.join(","));c.forEach(function(a){return a.classList.add("hide")}),d.forEach(function(a){return a.classList.add("hide")})}},[n,o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ac.Graph,{openModal:m,setSelectedNode:l,isWidget:c}),!c&&(0,e.jsx)(aa,{selectedNode:k,visible:g,closeModal:function(){return i(!1)}})]})};function ae(){var a=(0,d.Z)(["\n  position: relative;\n"]);return ae=function(){return a},a}var af=g.ZP.div(ae()),ag=function(){return(0,e.jsxs)(af,{children:[(0,e.jsx)(X,{}),(0,e.jsx)(ad,{})]})}}}])