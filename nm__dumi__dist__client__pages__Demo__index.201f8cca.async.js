"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[9],{95993:function(M,m,e){e.r(m);var a=e(85956),n=e(67294),_=e(52289),L=e(34661),D=function(){var p=(0,a.useParams)(),t=p.id,o=(0,a.useDemo)(t),O=(0,_.m)({id:t,component:o.component,renderOpts:o.renderOpts}),P=O.canvasRef,u=o||{},v=u.component,d=u.renderOpts,r=(0,a.useLiveDemo)(t),s=r.node,c=r.setSource,i=r.error,l=r.loading,R=s||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:P}):v&&(0,n.createElement)(v));return(0,n.useEffect)(function(){var f=function(E){E.data.type==="dumi.liveDemo.setSource"&&c(E.data.value)};return window.addEventListener("message",f),function(){return window.removeEventListener("message",f)}},[c]),(0,n.useEffect)(function(){!l&&(i||s)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:i}})},[i,s,l]),R};m.default=D}}]);
