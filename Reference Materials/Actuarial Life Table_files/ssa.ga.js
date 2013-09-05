/* GOOGLE ANALYTICS SCRIPTS */


// TRACKING CODE FROM E-NOR
// ---------------------------
hostname = document.location.hostname;
hostname = hostname.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1];
hostname = hostname.toLowerCase() ;
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-25977386-2']);
_gaq.push(['_setDomainName', hostname]);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_setVisitorCookieTimeout', 15768000000]);
_gaq.push(['_setCampaignCookieTimeout', 15768000000]);
_gaq.push(['_setVisitorCookieTimeout', 15768000000]);
_gaq.push(['_gat._anonymizeIp']);
_gaq.push(['_trackPageview']);
// FUNCTION IS ALREADY REPLICATED IN GSA TRACKING CODE
// (function() {
// var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
// ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
// var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();


// TRACKING CODE FROM GSA
// --------------------------
/*
 
 * v0.1 121011 : First Test Version
 * v1.0 121012 : Added Cookie Synchronizing and filtered out Outbound tracking of cross- and sub-domain links
 * v1.1 121015 : Changed cross-domain to use setAllowAnchor and fixed problem with some links
 * v1.2 121015-2 : Added incoming cross-domain tracking to default _gaq tracker by adding _setAllowLinker and _setAllowAnchor
 * v1.3 121015-3 : All Cross-domain Tracking removed
 * v1.4 121015-4 : Multiple Search parameters and XDT links tracked as events
 * v1.5 121122 : Change to sub-domain level visits (cookies). _DOMReady delays tracking so goes last. ECereto Review. JSHinted
 * v1.6 130107 : Added Agency, sub-agency and Cookie timeout variables and functions
 * v1.61 130115 : Fix for (elm in ... now for (var elm = 0 Added Agency, sub-agency and Cookie timeout variables and functions
 * v1.62 130123 : Using Slots 33, 34, 35 for Page Level Custom Vars

 Brian Katz, Cardinal Path - Google Analytics Government Wide Site Usage Measurement
 
  */

var _gaq=_gaq||[],_gas=_gas||[],GSA_CPwrapGA=function(){var t,e={VERSION:"v1.62 130123 : Using Slots 33, 34, 35 for Page Level Custom Vars",GAS_PATH:"",SEARCH_PARAMS:"querytext|nasaInclude|k|QT",HOST_DOMAIN_OR:document.location.hostname,LEADING_PERIOD:".",GWT_UAID:"UA-33523145-1",AGENCY:"SSA",VISITOR_TIMEOUT:6,CAMPAIGN_TIMEOUT:-1,VISIT_TIMEOUT:-1,ANONYMIZE_IP:!0},a={agency:{key:"Agency",slot:33,scope:3},sub_agency:{key:"Sub-Agency",slot:34,scope:3},version:{key:"Code Ver",slot:35,scope:3}},r=function(){e.HOST_DOMAIN_OR||(e.HOST_DOMAIN_OR=o()),e.HOST_DOMAIN_OR=e.HOST_DOMAIN_OR.replace(/^www\./i,"")
var t=i(e.HOST_DOMAIN_OR)
e.LEADING_PERIOD=t[1],_gas.push(["GSA_CP._setAccount",e.GWT_UAID]),e.ANONYMIZE_IP&&_gaq.push(["_gat._anonymizeIp"]),_gas.push(["GSA_CP._setDomainName",e.LEADING_PERIOD+e.HOST_DOMAIN_OR]),n(),t[0]&&_gas.push(["GSA_CP._setAllowHash",!1]),_gas.push(["GSA_CP._gasTrackOutboundLinks"]),_gas.push(["GSA_CP._gasTrackDownloads"]),_gas.push(["GSA_CP._gasTrackMailto"]),_gas.push(["_addHook","_trackEvent",function(t,e){var a=e.match(/([^.]+\.(gov|mil)$)/)
return"Outbound"===t&&"string"==typeof e&&a?-1===document.location.hostname.indexOf(a[1]):void 0}]),_gas.push(["_addHook","_trackPageview",function(t){var a=RegExp("([?&])("+e.SEARCH_PARAMS+")(=[^&]*)","i")
return a.test(t)&&(t=t.replace(a,"$1query$3")),[t]}])},n=function(){e.VISIT_TIMEOUT>-1&&_gaq.push(["GSA_CP._setSessionCookieTimeout",60*1e3*e.VISIT_TIMEOUT]),e.VISITOR_TIMEOUT>-1&&_gaq.push(["GSA_CP._setVisitorCookieTimeout",30.416667*24*60*60*1e3*e.VISITOR_TIMEOUT]),e.CAMPAIGN_TIMEOUT>-1&&_gaq.push(["GSA_CP._setCampaignCookieTimeout",30.416667*24*60*60*1e3*e.CAMPAIGN_TIMEOUT])},o=function(t){if(t=t||document.location.hostname,t=t.match(/^(?:https?:\/\/)?([^\/:]+)/)[1],t.match(/(\d+\.){3}(\d+)/)||-1==t.search(/\./))return t
try{t=/\.(gov|mil)$/i.test(t)?t.match(/\.([^.]+\.(gov|mil)$)/i)[1]:t.match(/(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/)[1]}catch(e){}return t.toLowerCase()},s=function(t){return fromGaJs_h=function(t){return void 0==t||"-"==t||""==t},fromGaJs_s=function(t){var e,a,r=1,n=0
if(!fromGaJs_h(t))for(r=0,e=t.length-1;e>=0;e--)a=t.charCodeAt(e),r=(268435455&r<<6)+a+(a<<14),n=266338304&r,r=0!==n?r^n>>21:r
return r},fromGaJs_s(t)},i=function(e){var a=document.cookie.match(/__utma=[^.]+/g),r=[!1,""]
if(!a)return r
t=s(e)
for(var n=0;a.length>n;n++){a[n]=a[n].substr(7)
var o=t==a[n]
if(o)return r[0]=!1,r
o=s("."+e)==a[n],r[1]=o?".":"",r[0]=r[0]||"1"==a[n]}return r},c=function(){e.AGENCY&&(u(e.AGENCY,a.agency),u(e.AGENCY+" - "+document.location.hostname,a.sub_agency))},u=function(t,e){if(t){var a=_gat._getTrackerByName(),r=a._getVisitorCustomVar(e.slot)
r||_gas.push(["GSA_CP._setCustomVar",e.slot,e.key,t,e.scope])}}
this.onEveryPage=function(){var t=document.location.pathname+document.location.search+document.location.hash
if(-1!==document.title.search(/404|not found/i)){var r="/vpv404/"+t
t=r.replace(/\/\//g,"/")+"/"+document.referrer}u(e.VERSION,a.version),c(),_gas.push(["GSA_CP._trackPageview",t])},r()};(function(t,e){function a(){var t=this
t.version="1.10.1",t._accounts={},t._accounts_length=0,t._queue=I,t._default_tracker="_gas1",t.gh={},t._hooks={_addHook:[t._addHook]},t.push(function(){t.gh=new S})}function r(t){return t===_gas._default_tracker?"":t+"."}function n(e){if(_gas.debug_mode)try{console.log(e)}catch(a){}return t._gaq.push(e)}function o(t,e){if("string"!=typeof t)return!1
var a=t.split("?")[0]
return a=a.split("."),a=a[a.length-1],a&&this.inArray(e,a)?a:!1}function s(){var t,e,a=0,r=0,n=x.getElementsByTagName("meta")
for(t=0;n.length>t;t++)if("ga_trans"===n[t].name){if(e=n[t].content.split("^"),3>e.length)break
for(;8>e.length;)e.push("")
_gas.push(["_addTrans",e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]]),a++}else"ga_item"===n[t].name&&(e=n[t].content.split("^"),6===e.length&&(_gas.push(["_addItem",e[0],e[1],e[2],e[3],e[4],e[5]]),r++))
a>0&&r>0&&_gas.push(["_trackTrans"])}function i(t){for(;t&&"HTML"!==t.nodeName&&"FORM"!==t.nodeName;)t=t.parentNode
return"FORM"===t.nodeName?t.name||t.id||"none":"none"}function c(t){_gas.push(["_trackEvent",this.tagName,t.type,this.currentSrc])}function u(){var a,r,n=x.getElementsByTagName("meta")
for(a=0;n.length>a;a++)"ga_vpv"===n[a].name?(r=n[a].content,function(a){t._gas.push(["_addHook","_trackPageview",function(t){return t===e?[a]:e}])}(r)):"ga_custom_var"===n[a].name&&(r=n[a].content.split("^"),4===r.length&&t._gas.push(["_setCustomVar",parseInt(r[0],10),r[1],r[2],parseInt(r[3],10)]))}function _(){var a=this
a._addEventListener(x,"mousedown",function(a){var r
for(r=a.target;"HTML"!==r.nodeName&&(r.getAttribute("x-ga-event-category")&&t._gas.push(["_trackEvent",r.getAttribute("x-ga-event-category"),r.getAttribute("x-ga-event-action"),r.getAttribute("x-ga-event-label")||e,parseInt(r.getAttribute("x-ga-event-value"),10)||0,"true"===r.getAttribute("x-ga-event-noninteractive")?!0:!1]),r.getAttribute("x-ga-social-network")&&t._gas.push(["_trackSocial",r.getAttribute("x-ga-social-network"),r.getAttribute("x-ga-social-action"),r.getAttribute("x-ga-social-target")||e,r.getAttribute("x-ga-social-pagepath")||e]),null!==r.parentNode);r=r.parentNode);},!0)}function g(){return t.innerHeight||G.clientHeight||x.body.clientHeight||0}function l(){return t.pageYOffset||x.body.scrollTop||G.scrollTop||0}function h(){return Math.max(x.body.scrollHeight||0,G.scrollHeight||0,x.body.offsetHeight||0,G.offsetHeight||0,x.body.clientHeight||0,G.clientHeight||0)}function d(){return 100*((l()+g())/h())}function p(t){return J&&clearTimeout(J),t===!0?($=Math.max(d(),$),e):(J=setTimeout(function(){$=Math.max(d(),$)},400),e)}function f(){if(p(!0),$=Math.floor($),!(0>=$||$>100)){var t=($>10?1:0)*(10*Math.floor(($-1)/10)+1)
t=t+""+"-"+(10*Math.ceil($/10)+""),_gas.push(["_trackEvent",Y.category,P,t,Math.floor($),!0])}}function m(e){this._maxScrollTracked||(this._maxScrollTracked=!0,Y=e||{},Y.category=Y.category||"Max Scroll",this._addEventListener(t,"scroll",p),this._addEventListener(t,"beforeunload",f))}function v(e){if(!this._multidomainTracked){this._multidomainTracked=!0
var a,r,n,o=x.location.hostname,s=this,i=x.getElementsByTagName("a")
for("now"!==e&&"mousedown"!==e&&(e="click"),a=0;i.length>a;a++)if(n=i[a],0===L.call(n.href,"http")){if(n.hostname===o||L.call(n.hostname,z)>=0)continue
for(r=0;F.length>r;r++)L.call(n.hostname,F[r])>=0&&("now"===e?n.href=s.tracker._getLinkerUrl(n.href,_gas._allowAnchor):"click"===e?this._addEventListener(n,e,function(e){return this.target&&"_blank"===this.target?t.open(s.tracker._getLinkerUrl(this.href,_gas._allowAnchor)):_gas.push(["_link",this.href,_gas._allowAnchor]),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}):this._addEventListener(n,e,function(){this.href=s.tracker._getLinkerUrl(this.href,_gas._allowAnchor)}))}return!1}}function k(t){if(X[t.player_id]||(X[t.player_id]={},X[t.player_id].timeTriggers=D.call(K)),X[t.player_id].timeTriggers.length>0&&100*t.data.percent>=X[t.player_id].timeTriggers[0]){var e=X[t.player_id].timeTriggers.shift()
_gas.push(["_trackEvent","Vimeo Video",e+"%",te[t.player_id]])}}function y(t,e,a){if(!a.contentWindow||!a.contentWindow.postMessage||!JSON)return!1
var r=a.getAttribute("src").split("?")[0],n=JSON.stringify({method:t,value:e})
return a.contentWindow.postMessage(n,r),!0}function T(t){if(L.call(t.origin,"//player.vimeo.com")>-1){var e=JSON.parse(t.data)
"ready"===e.event?E.call(_gas.gh):e.method?"getVideoUrl"===e.method&&(te[e.player_id]=e.value):"playProgress"===e.event?k(e):_gas.push(["_trackEvent",Q.category,e.event,te[e.player_id]])}}function E(){for(var e,a,r,n=x.getElementsByTagName("iframe"),o=0,s=Q.force,i=Q.percentages,c=0;n.length>c;c++)if(L.call(n[c].src,"//player.vimeo.com")>-1){if(e="gas_vimeo_"+c,a=n[c].src,r="?",L.call(a,"?")>-1&&(r="&"),0>L.call(a,"api=1")){if(!s)continue
a+=r+"api=1&player_id="+e}else-1>L.call(a,"player_id=")&&(a+=r+"player_id="+e)
if(o++,n[c].id=e,n[c].src!==a){n[c].src=a
break}y("getVideoUrl","",n[c]),y("addEventListener","play",n[c]),y("addEventListener","pause",n[c]),y("addEventListener","finish",n[c]),i&&(K=i,y("addEventListener","playProgress",n[c]))}o>0&&ee===!1&&(this._addEventListener(t,"message",T,!1),ee=!0)}function A(t,a){if(oe[a]===e||0>=oe[a].timeTriggers.length)return!1
var r=100*(t.getCurrentTime()/t.getDuration())
if(r>=oe[a].timeTriggers[0]){var n=oe[a].timeTriggers.shift()
_gas.push(["_trackEvent",re.category,n+"%",t.getVideoUrl()])}oe[a].timer=setTimeout(A,1e3,t,a)}function b(t){var e=t.getVideoUrl()
oe[e]&&oe[e].timer&&(A(t,e),clearTimeout(oe[e].timer))}function w(t){if(ne&&ne.length){var e=t.getVideoUrl()
oe[e]?b(t):(oe[e]={},oe[e].timeTriggers=D.call(ne)),oe[e].timer=setTimeout(A,1e3,t,e)}}function H(t){var e=""
switch(t.data){case 0:e="finish",b(t.target)
break
case 1:e="play",w(t.target)
break
case 2:e="pause",b(t.target)}e&&_gas.push(["_trackEvent",re.category,e,t.target.getVideoUrl()])}function O(t){_gas.push(["_trackEvent",re.category,"error ("+t.data+")",t.target.getVideoUrl()])}function M(){for(var t,e,a,r=x.getElementsByTagName("object"),n=/(https?:\/\/www\.youtube(-nocookie)?\.com[^\/]*).*\/v\/([^&?]+)/,o=0;r.length>o;o++){t=r[o].getElementsByTagName("param")
for(var s=0;t.length>s;s++)if("movie"===t[s].name&&t[s].value){a=t[s].value.match(n),a&&a[1]&&a[3]&&(e=x.createElement("iframe"),e.src=a[1]+"/embed/"+a[3]+"?enablejsapi=1",e.width=r[o].width,e.height=r[o].height,e.setAttribute("frameBorder","0"),e.setAttribute("allowfullscreen",""),r[o].parentNode.insertBefore(e,r[o]),r[o].parentNode.removeChild(r[o]),o--)
break}}}function N(e){var a=e.force,r=e.percentages
if(a)try{M()}catch(n){_gas.push(["_trackException",n,"GAS Error on youtube.js:_ytMigrateObjectEmbed"])}for(var o=[],s=x.getElementsByTagName("iframe"),i=0;s.length>i;i++)if(L.call(s[i].src,"//www.youtube.com/embed")>-1){if(0>L.call(s[i].src,"enablejsapi=1")){if(!a)continue
s[i].src+=0>L.call(s[i].src,"?")?"?enablejsapi=1":"&enablejsapi=1"}o.push(s[i])}if(o.length>0){r&&r.length&&(ne=r),t.onYouTubePlayerAPIReady=function(){for(var e,a=0;o.length>a;a++)e=new t.YT.Player(o[a]),e.addEventListener("onStateChange",H),e.addEventListener("onError",O)}
var c=x.createElement("script"),u="http:"
"https:"===x.location.protocol&&(u="https:"),c.src=u+"//www.youtube.com/player_api",c.type="text/javascript",c.async=!0
var _=x.getElementsByTagName("script")[0]
_.parentNode.insertBefore(c,_)}}var S=function(){this._setDummyTracker()}
S.prototype._setDummyTracker=function(){if(!this.tracker){var e=t._gat._getTrackers()
e.length>0&&(this.tracker=e[0])}},S.prototype.inArray=function(t,e){if(t&&t.length)for(var a=0;t.length>a;a++)if(t[a]===e)return!0
return!1},S.prototype._sanitizeString=function(t,e){return t=t.toLowerCase().replace(/^\ +/,"").replace(/\ +$/,"").replace(/\s+/g,"_").replace(/[áàâãåäæª]/g,"a").replace(/[éèêë?]/g,"e").replace(/[íìîï]/g,"i").replace(/[óòôõöøº]/g,"o").replace(/[úùûü]/g,"u").replace(/[ç¢©]/g,"c"),e&&(t=t.replace(/[^a-z0-9_-]/g,"_")),t.replace(/_+/g,"_")},S.prototype._addEventListener=function(e,a,r,n){var o=function(a){return a&&a.target||(a=t.event,a.target=a.srcElement),r.call(e,a)}
return e.addEventListener?(e.addEventListener(a,o,!!n),!0):e.attachEvent?e.attachEvent("on"+a,o):(a="on"+a,"function"==typeof e[a]&&(o=function(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}(e[a],o)),e[a]=o,!0)},S.prototype._liveEvent=function(t,e,a){var r=this
t=t.toUpperCase(),t=t.split(","),r._addEventListener(x,e,function(e){for(var n=e.target;"HTML"!==n.nodeName&&!r.inArray(t,n.nodeName)&&null!==n.parentNode;n=n.parentNode);n&&r.inArray(t,n.nodeName)&&a.call(n,e)},!0)},S.prototype._DOMReady=function(a){function r(){r.done||(r.done=!0,a.apply(n,arguments))}var n=this
return/^(interactive|complete)/.test(x.readyState)?r():(this._addEventListener(x,"DOMContentLoaded",r,!1),this._addEventListener(t,"load",r,!1),e)},t._gaq=t._gaq||[]
var I=t._gas||[]
if(!(I._accounts_length>=0)){var x=t.document,C=(Object.prototype.toString,Object.prototype.hasOwnProperty),D=(Array.prototype.push,Array.prototype.slice),L=(String.prototype.trim,String.prototype.indexOf),P=x.location.href,G=x.documentElement
a.prototype._addHook=function(t,a){return"string"==typeof t&&"function"==typeof a&&(_gas._hooks[t]===e&&(_gas._hooks[t]=[]),_gas._hooks[t].push(a)),!1},a.prototype._execute=function(){var t,a,o,s,i,c=D.call(arguments),u=this,_=c.shift(),g=!0,l=0
if("function"==typeof _)return n(function(t,e){return function(){t.call(e)}}(_,u.gh))
if("object"==typeof _&&_.length>0){if(a=_.shift(),L.call(a,".")>=0?(s=a.split(".")[0],a=a.split(".")[1]):s=e,o=u._hooks[a],o&&o.length>0)for(t=0;o.length>t;t++)try{i=o[t].apply(u.gh,_),i===!1?g=!1:i&&i.length>0&&(_=i)}catch(h){"_trackException"!==a&&u.push(["_trackException",h])}if(g===!1)return 1
if("_setAccount"===a){for(t in u._accounts)if(u._accounts[t]===_[0]&&s===e)return 1
return s=s||"_gas"+(u._accounts_length+1+""),u._accounts._gas1===e&&-1!==L.call(s,"_gas")&&(s="_gas1"),u._accounts[s]=_[0],u._accounts_length+=1,s=r(s),l=n([s+a,_[0]]),u.gh._setDummyTracker(),l}if("_link"===a||"_linkByPost"===a||"_require"===a||"_anonymizeIp"===a)return c=D.call(_),c.unshift(a),n(c)
var d
if(s&&u._accounts[s])return d=r(s)+a,c=D.call(_),c.unshift(d),n(c)
if(!(u._accounts_length>0))return c=D.call(_),c.unshift(a),n(c)
for(t in u._accounts)C.call(u._accounts,t)&&(d=r(t)+a,c=D.call(_),c.unshift(d),l+=n(c))
return l?1:0}},a.prototype.push=function(){for(var e=this,a=D.call(arguments),r=0;a.length>r;r++)(function(e,a){t._gaq.push(function(){a._execute.call(a,e)})})(a[r],e)},t._gas=_gas=new a,_gas.push(["_addHook","_trackException",function(t,e){return _gas.push(["_trackEvent","Exception "+(t.name||"Error"),e||t.message||t,P]),!1}]),_gas.push(["_addHook","_setDebug",function(t){_gas.debug_mode=!!t}]),_gas.push(["_addHook","_popHook",function(t){var e=_gas._hooks[t]
return e&&e.pop&&e.pop(),!1}]),_gas.push(["_addHook","_gasSetDefaultTracker",function(t){return _gas._default_tracker=t,!1}]),_gas.push(["_addHook","_trackPageview",function(){var t=D.call(arguments)
return t.length>=2&&"string"==typeof t[0]&&"string"==typeof t[1]?[{page:t[0],title:t[1]}]:t}])
var V=function(t){var e=this
if(!e._downloadTracked){e._downloadTracked=!0,t?"string"==typeof t?t={extensions:t.split(",")}:t.length>=1&&(t={extensions:t}):t={extensions:[]},t.category=t.category||"Download"
var a="xls,xlsx,doc,docx,ppt,pptx,pdf,txt,zip"
return a+=",rar,7z,exe,wma,mov,avi,wmv,mp3,csv,tsv",a=a.split(","),t.extensions=t.extensions.concat(a),e._liveEvent("a","mousedown",function(){var a=this
if(a.href){var r=o.call(e,a.href,t.extensions)
r&&_gas.push(["_trackEvent",t.category,r,a.href])}}),!1}}
_gas.push(["_addHook","_gasTrackDownloads",V]),_gas.push(["_addHook","_trackDownloads",V]),_gas.push(["_addHook","_gasMetaEcommerce",s]),_gas.push(["_addHook","_trackEvent",function(){var t=D.call(arguments)
return t[3]&&(t[3]=(0>t[3]?0:Math.round(t[3]))||0),t}])
var R=function(t){if(!this._formTracked){this._formTracked=!0
var e=this
"object"!=typeof t&&(t={}),t.category=t.category||"Form Tracking"
var a=function(e){var a=e.target,r=a.name||a.id||a.type||a.nodeName,n=i(a),o="form ("+n+")",s=r+" ("+e.type+")"
_gas.push(["_trackEvent",t.category,o,s])}
e._DOMReady(function(){var t,r,n=["input","select","textarea","hidden"],o=["form"],s=[]
for(t=0;n.length>t;t++)for(s=x.getElementsByTagName(n[t]),r=0;s.length>r;r++)e._addEventListener(s[r],"change",a)
for(t=0;o.length>t;t++)for(s=x.getElementsByTagName(o[t]),r=0;s.length>r;r++)e._addEventListener(s[r],"submit",a)})}}
_gas.push(["_addHook","_gasTrackForms",R]),_gas.push(["_addHook","_trackForms",R])
var U=function(t){var e=this
e._liveEvent(t,"play",c),e._liveEvent(t,"pause",c),e._liveEvent(t,"ended",c)},q=function(){this._videoTracked||(this._videoTracked=!0,U.call(this,"video"))},B=function(){this._audioTracked||(this._audioTracked=!0,U.call(this,"audio"))}
_gas.push(["_addHook","_gasTrackVideo",q]),_gas.push(["_addHook","_gasTrackAudio",B]),_gas.push(["_addHook","_trackVideo",q]),_gas.push(["_addHook","_trackAudio",B]),_gas.push(["_addHook","_gasMeta",u]),_gas.push(["_addHook","_gasHTMLMarkup",_])
var j=function(t){return this._mailtoTracked?e:(this._mailtoTracked=!0,t||(t={}),t.category=t.category||"Mailto",this._liveEvent("a","mousedown",function(e){var a=e.target
a&&a.href&&a.href.toLowerCase&&0===L.call(a.href.toLowerCase(),"mailto:")&&_gas.push(["_trackEvent",t.category,a.href.substr(7)])}),!1)}
_gas.push(["_addHook","_gasTrackMailto",j]),_gas.push(["_addHook","_trackMailto",j])
var Y,J=null,$=0
_gas.push(["_addHook","_gasTrackMaxScroll",m]),_gas.push(["_addHook","_trackMaxScroll",m]),_gas._allowAnchor=!1,_gas.push(["_addHook","_setAllowAnchor",function(t){_gas._allowAnchor=!!t}]),_gas.push(["_addHook","_link",function(t,a){return a===e&&(a=_gas._allowAnchor),[t,a]}]),_gas.push(["_addHook","_linkByPost",function(t,a){return a===e&&(a=_gas._allowAnchor),[t,a]}])
var z,F=[]
_gas.push(["_addHook","_setDomainName",function(t){return 0>L.call("."+x.location.hostname,t)?(F.push(t),!1):(z=t,e)}]),_gas.push(["_addHook","_addExternalDomainName",function(t){return F.push(t),!1}])
var W=function(){var t=this,e=D.call(arguments)
t&&t._DOMReady&&t._DOMReady(function(){v.apply(t,e)})}
_gas.push(["_addHook","_gasMultiDomain",W]),_gas.push(["_addHook","_setMultiDomain",W])
var Z=function(t){if(!this._outboundTracked){this._outboundTracked=!0
var e=this
t||(t={}),t.category=t.category||"Outbound",e._liveEvent("a","mousedown",function(){var e=this
if(("http:"===e.protocol||"https:"===e.protocol)&&-1===L.call(e.hostname,x.location.hostname)){var a=e.pathname+e.search+"",r=L.call(a,"__utm");-1!==r&&(a=a.substring(0,r)),_gas.push(["_trackEvent",t.category,e.hostname,a])}})}}
_gas.push(["_addHook","_gasTrackOutboundLinks",Z]),_gas.push(["_addHook","_trackOutboundLinks",Z])
var Q,K=[],X={},te={},ee=!1,ae=function(t){var e=this
return("boolean"==typeof t||"force"===t)&&(t={force:!!t}),t=t||{},t.category=t.category||"Vimeo Video",t.percentages=t.percentages||[],t.force=t.force||!1,Q=t,e._DOMReady(function(){E.call(e)}),!1}
_gas.push(["_addHook","_gasTrackVimeo",ae]),_gas.push(["_addHook","_trackVimeo",ae])
var re,ne=[],oe={},se=function(t){var e=D.call(arguments)
!e[0]||"boolean"!=typeof e[0]&&"force"!==e[0]||(t={force:!!e[0]},e[1]&&e[1].length&&(t.percentages=e[1])),t=t||{},t.force=t.force||!1,t.category=t.category||"YouTube Video",t.percentages=t.percentages||[],re=t
var a=this
return a._DOMReady(function(){N.call(a,t)}),!1}
for(_gas.push(["_addHook","_gasTrackYoutube",se]),_gas.push(["_addHook","_trackYoutube",se]);_gas._queue.length>0;)_gas.push(_gas._queue.shift())
_gaq&&_gaq.length>=0&&function(){var t=x.createElement("script")
t.type="text/javascript",t.async=!0,t.src=("https:"===x.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js"
var e=x.getElementsByTagName("script")[0]
e.parentNode.insertBefore(t,e)}()}})(window),_gas.push(function(){this._DOMReady(function(){try{var t=new GSA_CPwrapGA
document._gsaDelayGA||t.onEveryPage()}catch(e){try{console.log(e.message)}catch(e){}}})})