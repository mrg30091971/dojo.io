var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)if(o.hasOwnProperty(t))e[t]=o[t]};return function(o,t){e(o,t);function r(){this.constructor=o}o.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}();(function(e){if(typeof module==="object"&&typeof module.exports==="object"){var o=e(require,exports);if(o!==undefined)module.exports=o}else if(typeof define==="function"&&define.amd){define(["require","exports","@dojo/core/Destroyable","@dojo/core/global","@dojo/core/lang","@dojo/core/util","./project"],e)}})(function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:true});var t=e("@dojo/core/Destroyable");var r=e("@dojo/core/global");var n=e("@dojo/core/lang");var i=e("@dojo/core/util");var d=e("./project");var c=r.default.monaco;var a=function(e){__extends(o,e);function o(o,t){var r=e.call(this)||this;r._onDidChangeModelContent=function(){d.default.setFileDirty(r._currentFile)};r._editor=c.editor.create(o,t);var a=r._editor.onDidChangeModelContent(i.debounce(r._onDidChangeModelContent,1e3));r.own(n.createHandle(function(){r._editor.dispose();a.dispose()}));return r}o.prototype.display=function(e){if(!d.default.includes(e)){throw new Error('File "'+e+'" is not part of the project.')}this._currentFile=e;this._editor.setModel(d.default.getFileModel(e))};return o}(t.default);o.default=a});