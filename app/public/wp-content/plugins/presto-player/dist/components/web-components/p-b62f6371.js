import{m as n,a as e}from"./p-3e9a58ac.js";import{P as r}from"./p-37e4ab3e.js";export default function(t){var a=t.config,o=t.selector,i=t.src,u=t.preload;return new Promise(function(){var t=n(regeneratorRuntime.mark((function n(t){var c,s,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.Hls){n.next=6;break}case 1:if(window.hasOwnProperty("Hls")){n.next=6;break}return n.next=4,new Promise((function(n){return setTimeout(n,50)}));case 4:n.next=1;break;case 6:if(!window.Hls.isSupported()){n.next=16;break}return s=!["metadata","none"].includes(u),null!==(c=wp)&&void 0!==c&&c.blocks&&(s=!0),(w=new window.Hls({autoStartLoad:s})).loadSource(i),w.on(window.Hls.Events.LEVEL_SWITCHED,(function(n,e){o.closest(".presto-player__wrapper").querySelector(".plyr__menu__container [data-plyr='quality'][value='0'] span").innerHTML=w.autoLevelEnabled?"AUTO (".concat(w.levels[e.level].height,"p)"):"AUTO"})),w.on(window.Hls.Events.MANIFEST_PARSED,(function(){var n=w.levels.map((function(n){return n.height}));n.unshift(0);var i=n.findIndex((function(n){var e;return n===parseInt(null===(e=prestoPlayer)||void 0===e?void 0:e.hls_start_level)}));w.startLevel=i?i-1:2,a.quality={default:0,options:n,forced:!0,onChange:function(n){0===n?prestoHLS.currentLevel=-1:prestoHLS.levels.forEach((function(e,r){e.height===n&&(console.log("Found quality match with "+n),prestoHLS.currentLevel=r)}))}},w.attachMedia(o),window.prestoHLS=w;var u=new r(o,e({},a));return u.hls=w,u.on("waiting",(function n(){w.startLoad(-1),u.off("waiting",n)})),u.on("languagechange",(function(){setTimeout((function(){return w.subtitleTrack=u.currentTrack}),50)})),t(u)})),n.abrupt("return");case 16:if(!o.canPlayType("application/vnd.apple.mpegurl")){n.next=18;break}return n.abrupt("return",t(new r(o,e({},a))));case 18:return n.abrupt("return",t(new r(o,e({},a))));case 19:case"end":return n.stop()}}),n)})));return function(n,e){return t.apply(this,arguments)}}())}