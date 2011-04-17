AUI.add("aui-scroller",function(o){var f=o.Lang,n=f.isNumber,i=f.isString,v="boundingBox",j="clientWidth",k="contentBox",p="duration",w="horizontal",a="offsetHeight",b="offsetLeft",l="offsetTop",g="offsetWidth",u="orientation",e="px",d="scrollHeight",s="scroller",q="vertical",t=o.getClassName,m=t(s,w),h=t(s,"item"),c=t(s,q);var r=o.Component.create({NAME:s,ATTRS:{duration:{validator:function(x){return n(x);},value:0.5},itemSelector:{value:">*"},orientation:{validator:function(x){return i(x)&&(x===w||x===q);},value:w}},UI_ATTRS:[u],prototype:{nodeSelection:null,initializer:function(){var x=this;x._boundingBox=x.get(v);x._contentBox=x.get(k);x._duration=x.get(p);x._orientation=x.get(u);x._updateNodeSelection();},bindUI:function(){var x=this;x.publish("scroll",{defaultFn:x._defaultScrollFn});x.after({durationChange:x._afterDurationChange,orientationChange:x._afterOrientationChange});x._contentBox.on("mousemove",o.rbind(x._onMouseMove,x,x._boundingBox,x._contentBox,x._orientation));},_afterDurationChange:function(y){var x=this;x._duration=y.newVal;},_afterOrientationChange:function(y){var x=this;x._orientation=y.newVal;},_defaultScrollFn:function(A){var x=this;var y=x._contentBox;var z=x._orientation;var B={duration:x._duration};if(z==w){B.left=A.offsetX+e;}else{B.top=A.offsetY+e;}y.transition(B);},_onMouseMove:function(x,B,F,y){var K=this;var E=B.get(a);var L=B.get(g);var A=x.pageX-B.get(b);var z=x.pageY-B.get(l);var H=F.get(j)-L;var G=F.get(d)-E;var J=H/L;var I=G/E;var D=-(A*J);var C=-(z*I);K.fire("scroll",{factorX:J,factorY:I,offsetX:D,offsetY:C,x:A,y:z});},_uiSetOrientation:function(A){var x=this;var z=x._boundingBox;var y=(A===w);z.toggleClass(m,y);z.toggleClass(c,!y);},_updateNodeSelection:function(){var x=this;var y=x.get("itemSelector");x.nodeSelection=x._contentBox.all(y).addClass(h);}}});o.Scroller=r;},"@VERSION@",{requires:["aui-base","transition"],skinnable:true});