(()=>{var e={964:(e,o,t)=>{t.g.browser=e=>{e?(mp.gui.cursor.show(!0,!0),mp.gui.chat.activate(!1),mp.gui.chat.show(!1),mp.game.ui.displayRadar(!1)):(mp.gui.chat.activate(!0),mp.gui.chat.show(!0),mp.gui.cursor.show(!1,!1),mp.game.ui.displayRadar(!0))}},230:()=>{mp.events.add("render",(()=>{mp.players.local.getVariable("dl_info")&&mp.vehicles.forEachInStreamRange((e=>{mp.game.gameplay.getDistanceBetweenCoords(mp.players.local.position.x,mp.players.local.position.y,mp.players.local.position.z,e.position.x,e.position.y,e.position.z,!0)>15&&mp.game.graphics.drawText(`ID ${e.id} - MODEL: ${mp.game.vehicle.getDisplayNameFromVehicleModel(e.getModel())}\nX: ${e.position.x.toFixed(3)} Y: ${e.position.y.toFixed(3)} Z: ${e.position.z.toFixed(3)}`,[e.position.x,e.position.y,e.position.z],{font:4,color:[255,255,255,185],scale:[.5,.5]})}))}))},103:()=>{mp.events.add("guiReady",(()=>{browser(!0),callCef("authorization",'{"type": "show"}')}))},136:(e,o,t)=>{t.g.uiBrowser=mp.browsers.new("package://ui/index.html"),t.g.callCef=(e,o)=>{try{uiBrowser&&isValidJSON(o)&&uiBrowser.execute(`trigger('${e}', '${o}')`)}catch(e){}},t.g.isValidJSON=function(e){try{return JSON.parse(e),!0}catch(e){return!1}}}},o={};function t(i){var r=o[i];if(void 0!==r)return r.exports;var a=o[i]={exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";t(964),t(230),t(103),t(136)})()})();