const voluumScript = String.raw`(function(d,e,n,E,q,w,x,k,y,F,f,z,G,p,b,r,t,g,u,A,I,B,C){function D(){for(var a=e.querySelectorAll(".dtpcnt"),c=0,h=a.length;c<h;c++)a[c][y]=a[c][y].replace(/(^|\s+)dtpcnt($|\s+)/g,"")}function H(a,c,h,l){var m=new Date;m.setTime(m.getTime()+(l||864E5));e.cookie=a+"="+c+"; "+h+"samesite=Strict; expires="+m.toGMTString()+"; path=/";n.setItem(a,c);n.setItem(a+"-expires",m.getTime())}function v(a){var c=e.cookie.match(new RegExp("(^| )"+a+"=([^;]+)"));return c?c.pop():n.getItem(a+"-expires")&&+n.getItem(a+"-expires")>(new Date).getTime()?n.getItem(a):null}C="1.0";p=0;B="https:"===d.location.protocol?"secure; ":"";d[f]?E.warn("Loader already executed. Skipping"):(d[f]=function(a){d[f].state.callbackQueue.push(a)},d[f].loaderVersion=C,d[f].state={callbackQueue:[]},d[f].registerConversion=function(a){d[f].state.callbackQueue.push(a)},t=e[w],e[w]=function(){t&&t.apply(this,arguments);if(d[f]&&!d[f].hasOwnProperty("params")&&/loaded|interactive|complete/.test(e.readyState))for(;b=e[x][p++];)/\/?click\/?($|(\/[0-9]+)?$)/.test(b.pathname)&&(b[k]="javascrip"+d.postMessage.toString().slice(4,5)+":"+f+'.l="'+b[k]+'",void 0')},setTimeout(function(){(u=RegExp("[?&]cpid(=([^&#]*)|&|#|$)").exec(d.location.href))&&u[2]&&(g=u[2],A=v("vl-"+g));var a=v("vl-cep"),c=v("vl-cid"),h=location[k],l="savedData"===G,m=l&&c&&(!g||"undefined"===typeof g);l&&a&&(!g||"undefined"===typeof g)&&0>h.indexOf("cep=")&&(l=-1<h.indexOf("?")?"&":"?",h+=l+a);b=e.createElement("script");r=e.scripts[0];b.defer=1;b.src=z+(-1===z.indexOf("?")?"?":"&")+"durl="+q(h)+"&dref="+q(e.referrer)+"&dt="+q(e.title)+"&vtm="+(new Date).getTime()+(m?"&cid="+c:"")+(A?"&uw=no":"");b[F]=function(){for(p=0;b=e[x][p++];)/dtpCallback\.l/.test(b[k])&&(b[k]=decodeURIComponent(b[k]).match(/dtpCallback\.l="([^"]+)/)[1]);D()};r.parentNode.insertBefore(b,r);g&&H("vl-"+g,"1",B)},0),setTimeout(D,7E3))})(window,document,localStorage,console,encodeURIComponent,"onreadystatechange","links","href","className","onerror","dtpCallback","https://link.walletsaint.com/g/.js","savedData");`;

export default function VoluumTracking() {
  return (
    <>
      <meta
        httpEquiv="delegate-ch"
        content="sec-ch-ua https://link.walletsaint.com; sec-ch-ua-mobile https://link.walletsaint.com; sec-ch-ua-arch https://link.walletsaint.com; sec-ch-ua-model https://link.walletsaint.com; sec-ch-ua-platform https://link.walletsaint.com; sec-ch-ua-platform-version https://link.walletsaint.com; sec-ch-ua-bitness https://link.walletsaint.com; sec-ch-ua-full-version-list https://link.walletsaint.com; sec-ch-ua-full-version https://link.walletsaint.com"
      />
      <style>{`.dtpcnt{opacity:0;}`}</style>
      <script dangerouslySetInnerHTML={{ __html: voluumScript }} />
      <noscript>
        <link
          href="https://link.walletsaint.com/g/.js?noscript=true&durl="
          rel="stylesheet"
        />
      </noscript>
    </>
  );
}
