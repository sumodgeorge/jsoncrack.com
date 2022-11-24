"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{4062:function(n,e,t){t.r(e),t.d(e,{Graph:function(){return Y}});var r=t(6042),i=t(9396),o=t(828),a=t(7297),u=t(5893),c=t(7294),d=t(6126),l=t(8188),s=t(2011),h=t(1440),f=t(9521);function p(){var n=(0,a.Z)(["\n  text-decoration: underline;\n  pointer-events: all;\n"]);return p=function(){return n},n}function g(){var n=(0,a.Z)(["\n  text-align: ",";\n  font-size: 12px;\n  overflow: hidden;\n  color: ",";\n  pointer-events: none;\n  padding: ",';\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n    box-sizing: border-box;\n  }\n\n  .highlight {\n    border: 2px dashed #ff2970;\n    background: rgba(255, 214, 0, 0.3);\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return g=function(){return n},n}function x(){var n=(0,a.Z)(["\n  display: inline;\n  flex: 1;\n  font-weight: 500;\n  color: ",";\n  font-size: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: ","px;\n"]);return x=function(){return n},n}function v(){var n=(0,a.Z)(["\n  display: block;\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n"]);return v=function(){return n},n}function O(){var n=(0,a.Z)(["\n  color: ",";\n  padding: 10px;\n  margin-left: -15px;\n"]);return O=function(){return n},n}var m=(0,f.ZP)(h.Ld)(p()),C=f.ZP.foreignObject(g(),(function(n){return!n.isObject&&"center"}),(function(n){return n.theme.NODE_COLORS.TEXT}),(function(n){return n.isObject&&"10px"}),(function(n){return n.theme.TEXT_POSITIVE}));var b=f.ZP.span(x(),(function(n){var e=n.theme,t=n.objectKey,r=void 0!==t&&t,i=n.parent;return function(n,e,t){return e?"array"===e?n.NODE_COLORS.PARENT_ARR:n.NODE_COLORS.PARENT_OBJ:t?n.NODE_COLORS.NODE_KEY:n.NODE_COLORS.TEXT}(e,void 0!==i&&i,r)}),(function(n){return n.parent&&"14px"}),(function(n){return!n.objectKey&&10})),y=f.ZP.span.attrs((function(n){return{style:{color:(e=n["data-key"],t=n.theme,Number.isNaN(+e)?"true"===e?t.NODE_COLORS.BOOL.TRUE:"false"===e?t.NODE_COLORS.BOOL.FALSE:"null"===e?t.NODE_COLORS.NULL:t.NODE_COLORS.NODE_VALUE:t.NODE_COLORS.INTEGER)}};var e,t}))(v()),N=f.ZP.span(O(),(function(n){return n.theme.NODE_COLORS.CHILD_COUNT})),w=function(n){var e=n.node,t=n.x,r=n.y,i=e.text,o=e.width,a=e.height,d=e.data,l=c.useRef(null);(0,s.Z)((function(n){return n.performanceMode}));return d.isEmpty?null:(0,u.jsx)(C,{width:o,height:a,x:0,y:0,ref:l,isObject:!0,children:i.map((function(n,e){return(0,u.jsxs)(y,{"data-key":JSON.stringify(n[1]),"data-x":t,"data-y":r,children:[(0,u.jsxs)(b,{objectKey:!0,children:[JSON.stringify(n[0]).replaceAll('"',""),":"," "]}),(0,u.jsx)(m,{children:JSON.stringify(n[1])})]},e)}))})};function Z(n,e){return String(n.node.text)===String(e.node.text)&&n.node.width===e.node.width}var j=c.memo(w,Z),E=t(5434),S=t(30),_=t(7905);function R(){var n=(0,a.Z)(["\n  pointer-events: all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background: rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 40px;\n  border-left: 1px solid ",";\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n"]);return R=function(){return n},n}function k(){var n=(0,a.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return k=function(){return n},n}var L=f.ZP.button(R(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),D=f.ZP.div(k(),(function(n){return n.hasCollapse?"space-between":"center"})),T=function(n){var e=n.node,t=n.x,r=n.y,i=n.hasCollapse,o=void 0!==i&&i,a=e.id,d=e.text,l=e.width,h=e.height,f=e.data,p=c.useRef(null),g=(0,_.Z)((function(n){return n.hideCollapse})),x=(0,_.Z)((function(n){return n.hideChildrenCount})),v=(0,S.Z)((function(n){return n.expandNodes})),O=(0,S.Z)((function(n){return n.collapseNodes})),y=(0,S.Z)((function(n){return n.collapsedParents.includes(a)}));(0,s.Z)((function(n){return n.performanceMode}));return(0,u.jsx)(C,{width:l,height:h,x:0,y:0,hideCollapse:g,hasCollapse:f.parent&&o,ref:p,children:(0,u.jsxs)(D,{hasCollapse:f.parent&&!g,children:[(0,u.jsx)(b,{"data-x":t,"data-y":r,"data-key":JSON.stringify(d),parent:f.parent,children:(0,u.jsx)(m,{children:JSON.stringify(d).replaceAll('"',"")})}),f.parent&&f.childrenCount>0&&!x&&(0,u.jsxs)(N,{children:["(",f.childrenCount,")"]}),f.parent&&o&&!g&&(0,u.jsx)(L,{onClick:function(n){n.stopPropagation(),y?v(a):O(a)},children:y?(0,u.jsx)(E.Qw4,{size:18}):(0,u.jsx)(E.$l_,{size:18})})]})})};function A(n,e){return n.node.text===e.node.text&&n.node.width===e.node.width}var P=c.memo(T,A),z={width:40,height:40,rx:50,ry:50},U=function(n){var e=n.properties,t=e.text,o=e.data;return(0,u.jsx)(l.Node,(0,i.Z)((0,r.Z)({},n,o.isEmpty&&z),{label:(0,u.jsx)(c.Fragment,{}),children:function(n){var e=n.node,r=n.x,i=n.y;return Array.isArray(t)?(0,u.jsx)(j,{node:e,x:r,y:i}):(0,u.jsx)(P,{node:e,hasCollapse:o.childrenCount>0,x:r,y:i})}}))},M=t(2628);function J(){var n=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  img {\n    filter: drop-shadow(2px 4px 6px black);\n  }\n"]);return J=function(){return n},n}function K(){var n=(0,a.Z)(["\n  color: ",";\n"]);return K=function(){return n},n}function B(){var n=(0,a.Z)(["\n  width: 60%;\n  text-align: center;\n  color: ",";\n"]);return B=function(){return n},n}var G=f.ZP.div(J()),I=f.ZP.h2(K(),(function(n){return n.theme.TEXT_DANGER})),W=f.ZP.p(B(),(function(n){return n.theme.TEXT_NORMAL})),X=function(){return(0,u.jsxs)(G,{children:[(0,u.jsx)("img",{src:"/assets/undraw_qa_engineers_dg-5-p.svg",width:"200",height:"200",alt:"oops"}),(0,u.jsx)(I,{children:"JSON Crack is unable to handle this file!"}),(0,u.jsx)(W,{children:"We apologize for the problem you encountered. We are doing our best as an Open Source community to improve our service. Unfortunately, JSON Crack is currently unable to handle such a large file."})]})};function F(){var n=(0,a.Z)(["\n  position: absolute;\n  width: 100%;\n  height: ",";\n  background: ",";\n  background-image: ",";\n  background-size: 15px 15px;\n\n  :active {\n    cursor: move;\n  }\n\n  .dragging,\n  .dragging button {\n    pointer-events: none;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return F=function(){return n},n}var V=f.ZP.div(F(),(function(n){return n.isWidget?"100vh":"calc(100vh - 36px)"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){var e=n.theme;return"radial-gradient(#505050 0.5px, ".concat(e.BACKGROUND_SECONDARY," 0.5px)")}),(function(n){return n.theme.BACKGROUND_NODE})),q=function(n){var e=n.isWidget,t=void 0!==e&&e,a=n.openModal,h=n.setSelectedNode,f=(0,S.Z)((function(n){return n.setLoading})),p=(0,s.Z)((function(n){return n.setConfig})),g=(0,s.Z)((function(n){return n.centerView})),x=(0,S.Z)((function(n){return n.loading})),v=(0,S.Z)((function(n){return n.direction})),O=(0,S.Z)((function(n){return n.nodes})),m=(0,S.Z)((function(n){return n.edges})),C=(0,o.Z)(c.useState({width:1,height:1}),2),b=C[0],y=C[1],N=c.useCallback((function(n,e){h&&h(e.text),a&&a()}),[a,h]),w=c.useCallback((function(n){p("zoomPanPinch",n)}),[p]),Z=c.useCallback((function(n){if(n.width&&n.height){var e=n.width*n.height,r=Math.abs(100*e/(b.width*b.height)-100);y({width:n.width+400,height:n.height+400}),requestAnimationFrame((function(){setTimeout((function(){f(!1),setTimeout((function(){return(r>75||t)&&g()}),0)}),0)}))}}),[b.width,b.height,f,t,g]),j=c.useCallback((function(){var n=document.querySelector("input:focus");n&&n.blur()}),[]);return O.length>8e3?(0,u.jsx)(X,{}):(0,u.jsxs)(V,{isWidget:t,onContextMenu:function(n){return n.preventDefault()},children:[x&&(0,u.jsx)(M.g,{message:"Painting graph..."}),(0,u.jsx)(d.d$,{maxScale:2,minScale:.05,initialScale:.4,wheel:{step:.08},zoomAnimation:{animationType:"linear"},doubleClick:{disabled:!0},onInit:w,onPanning:function(n){var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.add("dragging")},onPanningStop:function(n){var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.remove("dragging")},children:(0,u.jsx)(d.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden",display:x?"none":"block"},children:(0,u.jsx)(l.Canvas,{className:"jsoncrack-canvas",nodes:O,edges:m,maxWidth:b.width,maxHeight:b.height,direction:v,onLayoutChange:Z,onCanvasClick:j,zoomable:!1,animated:!1,readonly:!0,dragEdge:null,dragNode:null,fit:!0,node:function(n){return(0,u.jsx)(U,(0,i.Z)((0,r.Z)({},n),{onClick:N}))},edge:function(n){return(0,u.jsx)(l.Edge,(0,i.Z)((0,r.Z)({},n),{containerClassName:"edge-".concat(n.id)}))}},v)})})]})},Y=c.memo(q)}}]);