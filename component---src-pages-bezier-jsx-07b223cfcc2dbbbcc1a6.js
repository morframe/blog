"use strict";(self.webpackChunkmy_learning_site=self.webpackChunkmy_learning_site||[]).push([[433],{270:function(t,e,i){i.r(e),i.d(e,{Head:function(){return f},default:function(){return u}});var s=i(7294),n=i(4578);let o=function(){function t(t,e){this.x=t||0,this.y=e||0}var e=t.prototype;return e.isIntersect=function(t,e){return void 0===e&&(e=1e-11),this.minus(t).squareLength()<e*e},e.add=function(e){return new t(this.x+e.x,this.y+e.y)},e.minus=function(e){return new t(this.x-e.x,this.y-e.y)},e.multiply=function(e){return new t(this.x*e.x,this.y*e.y)},e.multiplyScalar=function(e){return this.multiply(new t(e,e))},e.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.squareLength=function(){return this.x*this.x+this.y*this.y},e.distanceTo=function(t){return this.minus(t).length()},e.copyFrom=function(t){return this.x=t.x,this.y=t.y,this},e.clone=function(){return new t(this.x,this.y)},e.isZero=function(){return 0==this.x&&0==this.y},t}();function h(t,e){let i=[1];const s=1-e;for(let n=1;n<=t;n++){let t=0;for(let o=0;o<n;o++){let n=i[o];i[o]=t+s*n,t=e*n}i[n]=t}return i}let r=function(){this.status=0},a=function(t){function e(e,i){var s;return(s=t.call(this)||this).position=new o(e||0,i||0),s.radius=10,s.index=-1,s}(0,n.Z)(e,t);var i=e.prototype;return i.isIntersect=function(t,e,i){return void 0===i&&(i=1e-10),this.position.distanceTo(new o(t,e))<=i},i.moveTo=function(t){return this.position.copyFrom(t),this},i.move=function(t){return t.isZero()||this.position.copyFrom(this.position.add(t)),this},i.draw=function(t){const e=t.getContext();e.save(),0==this.status?e.strokeStyle="black":1==this.status?e.strokeStyle="orange":2==this.status&&(e.strokeStyle="blue"),this.drawNormal(t,e),e.restore()},i.drawNormal=function(t,e){const i=t.toScreenX(this.position.x),s=t.toScreenY(this.position.y);e.beginPath(),e.arc(i,s,this.radius,0,2*Math.PI,!0),e.fillStyle="white",e.stroke(),e.fill(),e.fillStyle="black",e.fillText(this.index.toString(),i-this.radius/2,s+this.radius/3)},e}(r),l=function(t){function e(e){var i;return(i=t.call(this)||this).controlPoints=e||[],i.n=i.controlPoints.length-1,i}(0,n.Z)(e,t);var i=e.prototype;return i.addControlPoint=function(t){this.controlPoints.push(t),this.n=this.controlPoints.length-1},i.getPoint=function(t){let e=h(this.n,t),i=new o;for(let s=0;s<=this.n;s++)i=i.add(this.controlPoints[s].multiplyScalar(e[s]));return i},i.clear=function(){this.controlPoints=[],this.n=this.controlPoints.length-1},i.draw=function(t){const e=t.getContext();e.save(),e.beginPath(),e.strokeStyle="#8B008B";let i=this.getPoint(0);e.moveTo(t.toScreenX(i.x),t.toScreenY(i.y));for(let s=0;s<1;s+=.01)i=this.getPoint(s),e.lineTo(t.toScreenX(i.x),t.toScreenY(i.y));e.stroke(),e.beginPath(),e.strokeStyle="#B8860B",i=this.controlPoints[0],e.moveTo(t.toScreenX(i.x),t.toScreenY(i.y));for(let s=1;s<this.controlPoints.length;s++)i=this.controlPoints[s],e.lineTo(t.toScreenX(i.x),t.toScreenY(i.y));e.stroke(),e.restore()},e}(r),c=function(){function t(t){this._id=0,this.points=[],this.curve=new l,this.canvas=t||document.createElement("canvas"),this.tip=document.createElement("span"),this.tip.innerText=(new Date).toString(),this.tip.style.setProperty("display","none"),this.tip.style.setProperty("boxShadow ","0px 0px 2px 1px rgba(0,0,0,0.4)"),this.tip.style.setProperty("padding","0px 5px"),this.tip.style.setProperty("position","fixed"),document.body.appendChild(this.tip),document.addEventListener("mousemove",(t=>{t.toElement!=this.canvas?this.tip.style.setProperty("display","none"):(this.tip.style.setProperty("top",t.clientY+10+"px"),this.tip.style.setProperty("left",t.clientX+10+"px"))})),this.selectItem=null,this.highlightItem=null,this.mouseDown=!1,this.mouseStartX=0,this.mouseStartY=0,this.zoom=1,this.offsetX=0,this.offsetY=0,this.panStart=new o,this.panOffset=new o,this.width=this.canvas.width,this.height=this.canvas.height,this.snapConfig={radius:3},this.snappedPoint=new o,this.snapResult=!1,this.canvas.addEventListener("pointerdown",this.onPointerDown.bind(this)),this.canvas.addEventListener("pointerup",this.onPointerUp.bind(this)),this.canvas.addEventListener("pointermove",this.onPointerMove.bind(this)),this.canvas.addEventListener("wheel",this.onWheel.bind(this)),this.initCurve(),this.draw()}var e=t.prototype;return e.updateCurve=function(){this.needUpdate&&(this.curve.clear(),this.points.forEach((t=>{this.curve.addControlPoint(t.position)})),this.needUpdate=!1)},e.createPoint=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0);let i=new a(t,e);return i.index=this.points.length,this.points.push(i),this.needUpdate=!0,i},e.initCurve=function(){this.createPoint(-150,10),this.createPoint(-80,100),this.createPoint(160,50),this.createPoint(200,10)},e.resize=function(t,e){this.canvas.width=t,this.canvas.height=e,this.width=this.canvas.width,this.height=this.canvas.height,this.draw()},e.toWorldLength=function(t){return this.toWorldPosition(0,t).minus(this.toWorldPosition(0,0)).length()},e.snapPoint=function(t,e){void 0===e&&(e=new o);for(let o of this.points)if((!this.drag||o!=this.selectItem)&&o.isIntersect(t.x,t.y,this.toWorldLength(o.radius)))return e.copyFrom(o.position),!0;const i=this.toWorldLength(5),s=this.toWorldPosition(this.width,this.height),n=this.toWorldPosition(0,0);let h=this.getTickLength((n.y-s.y)/5)/5,r=Math.round(t.x/h),a=Math.round(t.y/h),l=new o(r*h,a*h);return!!l.isIntersect(t,i)&&(e.copyFrom(l),!0)},e.onPointerMove=function(t){const e=this.toWorldPosition(t.offsetX,t.offsetY);if(this.snapPoint(e,this.snappedPoint)?(this.snapResult=!0,e.copyFrom(this.snappedPoint),this.tip.innerText=e.x.toFixed(2)+", "+e.y.toFixed(2),this.tip.style.setProperty("display","inline")):(this.tip.style.setProperty("display","none"),this.snapResult=!1),this.drag){if(this.selectItem){const t=e.x,i=e.y,s=new o(t,i);this.selectItem.position.copyFrom(this.pos),this.selectItem.move(s.minus(this._dragStart))}}else if(this.mouseDown){let e=new o(t.offsetX,t.offsetY).minus(this.panStart);this.offsetX=this.panOffset.x-e.x,this.offsetY=this.panOffset.y+e.y}else{this.highlightItem&&(this.highlightItem.status=this.selectItem==this.highlightItem?2:0,this.highlightItem=null);const e=this.toWorldX(t.offsetX),i=this.toWorldY(t.offsetY);for(let t of this.points)if(t.isIntersect(e,i,this.toWorldLength(t.radius))){this.highlightItem=t,this.highlightItem.status=1;break}}this.draw()},e.onPointerUp=function(t){this.drag=!1,this.mouseDown=!1,this.panStart=new o(t.offsetX,t.offsetY),this.panOffset=new o},e.onPointerDown=function(t){if(this.mouseDown=!0,this.mouseStartX=t.offsetX,this.mouseStartY=t.offsetY,this.panStart=new o(t.offsetX,t.offsetY),this.panOffset=new o(this.offsetX,this.offsetY),this.selectItem&&(this.selectItem.status=0,this.selectItem=null),this.highlightItem){const e=this.toWorldPosition(t.offsetX,t.offsetY);this.snapResult&&e.copyFrom(this.snappedPoint),this.selectItem=this.highlightItem,this.selectItem.status=2,this.drag=!0,this._dragStart=e,this.pos=this.selectItem.position.clone()}},e.onWheel=function(t){t.preventDefault();const e=this.getZoomScale(t.deltaY);t.deltaY>0?this.zoom*=e:t.deltaY<0&&(this.zoom/=e),this.draw()},e.getZoomScale=function(t){const e=Math.abs(.01*t);return Math.pow(.95,e)},e.toScreenX=function(t){const e=t*this.zoom-this.offsetX;return this.width/2+e},e.toScreenY=function(t){const e=t*this.zoom-this.offsetY;return this.height/2-e},e.toWorldPosition=function(t,e,i){return void 0===i&&(i=0),new o((t-this.width/2+this.offsetX)/this.zoom,(this.height/2+this.offsetY-e)/this.zoom,i)},e.toWorldX=function(t){return this.toWorldPosition(t,0).x},e.toWorldY=function(t){return this.toWorldPosition(0,t).y},e.getContext=function(){return this.canvas.getContext("2d")},e.draw=function(){this.updateCurve();const t=this.getContext();t.save(),t.clearRect(0,0,this.width,this.height),this.drawGrid(t),this.curve.draw(this),this.points.forEach((t=>t.draw(this))),t.strokeRect(0,0,this.width,this.height),t.restore()},e.getTickLength=function(t){let e=1;if(t>1){for(;t/10>1;)t/=10,e*=10;return t<2?1*e:t<5?2*e:5*e}},e.drawAxis=function(t,e,i){t.moveTo(this.toScreenX(i.x),this.toScreenY(i.y)),t.lineTo(this.toScreenX(e.x),this.toScreenY(e.y)),t.stroke()},e.drawLabel=function(t,e,i){t.fillText(i,this.toScreenX(e.x),this.toScreenY(e.y))},e.drawGrid=function(t){t.save();const e=this.toWorldPosition(this.width,this.height),i=this.toWorldPosition(0,0);let s=[],n=[0],h=[],r=[],a=20/this.zoom;a=this.getTickLength((i.y-e.y)/5),a<0&&(a=0);let l=a/5,c=Math.max(Math.abs(i.y),Math.abs(e.y)),u=c/l;for(let f=1;f<u;f++){if(f%5==0)continue;let t=l*f;t<i.y&&r.push(new o(i.x,t),new o(e.x,t)),-t>e.y&&r.push(new o(i.x,-t),new o(e.x,-t))}u=c/a;for(let f=1;f<u;f++){let t=a*f;t<i.y&&(n.push(t),s.push(new o(i.x,t),new o(e.x,t))),-t>e.y&&(n.push(-t),s.push(new o(i.x,-t),new o(e.x,-t)))}c=Math.max(Math.abs(i.x),Math.abs(e.x)),u=c/l;for(let f=1;f<u;f++){if(f%5==0)continue;let t=l*f;t<e.x&&r.push(new o(t,e.y),new o(t,i.y)),-t>i.x&&r.push(new o(-t,e.y),new o(-t,i.y))}u=c/l;for(let f=1;f<u;f++){let t=a*f;t<e.x&&(s.push(new o(t,e.y),new o(t,i.y)),h.push(t)),-t>i.x&&(s.push(new o(-t,e.y),new o(-t,i.y)),h.push(-t))}t.beginPath(),t.strokeStyle="rgb(232,232,232)";for(let o=0;o<r.length;o+=2)this.drawAxis(t,r[o],r[o+1]);t.stroke(),t.beginPath(),t.strokeStyle="rgb(192,192,192)";for(let o=0;o<s.length;o+=2)this.drawAxis(t,s[o],s[o+1]);t.stroke(),t.beginPath(),t.strokeStyle="red",this.drawAxis(t,new o(i.x,0),new o(e.x,0)),t.stroke(),t.beginPath(),t.strokeStyle="green",this.drawAxis(t,new o(0,e.y),new o(0,i.y)),t.stroke(),n.forEach((e=>this.drawLabel(t,new o(0,e),e))),h.forEach((e=>this.drawLabel(t,new o(e,0),e))),t.restore()},t}();var u=()=>{const t=s.useRef(),[e,i]=s.useState();return s.useEffect((()=>{t&&t.current&&(t.current.hasChildNodes()||(e=>{let s=new c;s.resize(t.current.clientWidth,t.current.clientHeight),e.appendChild(s.canvas),i(s),window.addEventListener("resize",(e=>{const i=t.current.clientWidth,n=t.current.clientHeight;s.resize(i,n)}))})(t.current))}),[t]),s.createElement("div",null,s.createElement("div",null,s.createElement("h1",null," bezier curve "),s.createElement("button",{onClick:()=>{e.createPoint()}},"add point")),s.createElement("div",{id:"canvasContainer",ref:t,style:{height:"80vh"}}))};const f=()=>s.createElement("title",null,"Bezier Page")}}]);