"use strict";var exports=module.exports={},anObject=require("./_an-object.js"),IE8_DOM_DEFINE=require("./_ie8-dom-define.js"),toPrimitive=require("./_to-primitive.js"),dP=Object.defineProperty;exports.f=require("./_descriptors.js")?Object.defineProperty:function(e,r,t){if(anObject(e),r=toPrimitive(r,!0),anObject(t),IE8_DOM_DEFINE)try{return dP(e,r,t)}catch(i){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[r]=t.value),e};