(()=>{var e={286:()=>{mp.events.addCommand("veh",((e,o)=>{mp.vehicles.new(mp.joaat(o),new mp.Vector3(e.position.x,e.position.y,e.position.z))})),mp.events.addCommand("repair",(e=>{e.vehicle.repair()})),mp.events.addCommand("delveh",(e=>{e.vehicle?e.vehicle.destroy():e.notify("~r~\u0412\u044b \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c \u0432 \u043c\u0430\u0448\u0438\u043d\u0435.")})),mp.events.addCommand("dl",(e=>{e.getVariable("dl_info")?e.setVariable("dl_info",!1):e.setVariable("dl_info",!0)}))}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return a.d(o,{a:o}),o},a.d=(e,o)=>{for(var t in o)a.o(o,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},a.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";a(286);const e=require("mysql");a.n(e)().createConnection({host:mp.config.database.host,user:mp.config.database.user,password:mp.config.database.password,database:mp.config.database.name}).connect((e=>{e?console.log("\u041e\u0448\u0438\u0431\u043a\u0430:",e):console.log("\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0430.")}))})()})();