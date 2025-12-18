import{f as C,s as D,_ as R}from"./app-Bjfy8Y7s.js";function p(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function $(t){try{if(!t)return new Date;if(typeof t=="string"){const i=new Date(t);if(!isNaN(i.getTime()))return i;const r=Number(t);return isNaN(r)?new Date:new Date(r)}if(typeof t=="number")return t>1e12?new Date(t):t>1e9?new Date(t):new Date(t*1e3);if(t instanceof Date)return t;if(t&&typeof t.toDate=="function")try{return t.toDate()}catch{}const a=new Date(t);if(!isNaN(a.getTime()))return a}catch{}return new Date}function S(t){if(!t)return!1;try{return new URL(t,location.href).origin===location.origin}catch{return!1}}async function I(t,a=160){if(!t)return null;try{if(window.QRCode){const r=window.QRCode;if(typeof r.toDataURL=="function")return await new Promise((n,l)=>r.toDataURL(t,{width:a},(e,o)=>e?l(e):n(o)));if(typeof r.toCanvas=="function")return await new Promise((n,l)=>{try{const e=document.createElement("canvas");r.toCanvas(e,t,{width:a},o=>o?l(o):n(e.toDataURL("image/png")))}catch(e){l(e)}})}const i=await R(()=>import("./browser-rpPU-9HU.js").then(r=>r.b),[]).catch(()=>null);if(i){const r=i,n=r.toDataURL||r.default&&r.default.toDataURL;if(typeof n=="function")return await n(t,{width:a})}}catch(i){console.warn("[QR] génération échouée:",i)}return null}function N(t,a){const i=t.readableId||t.id||"N/A",n=(t.createdAt instanceof Date?t.createdAt:new Date).toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),l=Array.isArray(t.items)&&t.items.length?t.items.map(d=>{const f=d.quantity||1,w=d.title||d.id||"Produit",E=typeof d.price=="object"?Number(d.price?.amount||0):Number(d.price||0),b=typeof d.price=="object"?d.price?.currency||t.currency||"":t.currency||"",h=(E*f).toFixed(2);return`<div style="display:flex;justify-content:space-between;margin:6px 0;font-size:14px;line-height:1.2">
                    <div style="max-width:65%;overflow-wrap:break-word">${p(`${f} × ${w}`)}</div>
                    <div style="white-space:nowrap">${p(h)} ${p(b)}</div>
                  </div>`}).join(""):'<div style="font-size:14px;color:var(--text-muted-color, #6b7280)">Aucun item disponible</div>',e=(typeof t.total=="object"?Number(t.total?.amount||0):Number(t.total||0)).toFixed(2),o=(typeof t.total=="object"?t.total?.currency:t.currency)||"",s=t.store?.logoUrl||null,u=s&&S(s),m=t.store&&t.store.name&&String(t.store.name).trim().charAt(0)||"B",c=`
    :root{
      --bg-color: #ffffff;
      --text-color: #111827;
      --primary-color: #000000;
      --secondary-color: #6B7280;
      --card-bg-color: #ffffff;
      --card-border-color: #E5E7EB;
      --text-muted-color: #6B7280;
      --font-family: Inter, Arial, Helvetica, sans-serif;
    }
    html,body{margin:0;padding:0;font-family:var(--font-family);background:var(--bg-color);color:var(--text-color)}
    .receipt{box-sizing:border-box;width:600px;padding:28px;background:var(--card-bg-color);color:var(--text-color);border:1px solid var(--card-border-color);border-radius:8px}
    .header{text-align:center;margin-bottom:8px}
    .meta{display:flex;justify-content:space-between;margin:18px 0;color:var(--text-muted-color)}
    .items{margin-bottom:18px}
    .footer{display:flex;justify-content:space-between;align-items:center}
    .qrbox{width:140px;height:140px;display:flex;align-items:center;justify-content:center;border:1px solid var(--card-border-color);border-radius:8px;background:var(--card-bg-color)}
    .logo-sq{display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:8px;font-weight:700;color:var(--card-bg-color);background:var(--primary-color);font-size:22px;margin-bottom:4px}
    .logo-img{max-height:40px;object-fit:contain;margin-bottom:4px}
    .items .title{font-size:14px}
  `,y=`
    (function() {
      try {
        const vars = [
          '--bg-color',
          '--text-color',
          '--primary-color',
          '--secondary-color',
          '--card-bg-color',
          '--card-border-color',
          '--text-muted-color',
          '--font-family'
        ];
        const parentStyle = window.parent && window.parent.getComputedStyle
          ? window.parent.getComputedStyle(window.parent.document.documentElement)
          : null;
        if (!parentStyle) return;
        vars.forEach(k => {
          const v = parentStyle.getPropertyValue(k);
          if (v) document.documentElement.style.setProperty(k, v.trim());
        });
      } catch (e) {}
    })();
  `,g=u?`<img class="logo-img" src="${p(s)}" alt="${p(t.store?.name||"")}">`:`<div class="logo-sq" aria-hidden="true">${p(m)}</div>`,v=a?`<img src="${a}" alt="QR" style="width:120px;height:120px;object-fit:contain"/>`:'<div style="font-size:12px;color:var(--text-muted-color)">QR indisponible</div>',x=p(t.store?.name||"Boutique");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script>${y}<\/script>
  <style>${c}</style>
</head>
<body>
  <div class="receipt" id="receipt-root" role="document" aria-label="Récapitulatif de commande">
    <div class="header">
      ${g}
      <h2 style="margin:0 0 6px 0;font-size:20px">Récapitulatif de commande</h2>
      <div style="font-size:12px;color:var(--text-muted-color)">${x}</div>
    </div>

    <div class="meta">
      <div>
        <div style="font-size:12px;color:var(--text-muted-color)">Commande N°</div>
        <div style="font-weight:700">${i}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;color:var(--text-muted-color)">Date</div>
        <div>${p(n)}</div>
      </div>
    </div>

    <div class="items">${l}</div>

    <div class="footer">
      <div style="text-align:left">
        <div style="font-size:12px;color:var(--text-muted-color)">Total</div>
        <div style="font-weight:700;font-size:18px">${p(e)} ${p(o)}</div>
      </div>
      <div class="qrbox">${v}</div>
    </div>
  </div>
</body>
</html>`}async function L(t,a={}){const{timeoutMs:i=15e3,html2canvasCdn:r="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"}=a;return new Promise((n,l)=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.width="900px",e.style.height="900px",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let o=!1;const s=()=>{try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch{}o=!0},u=setTimeout(()=>{o||(s(),l(new Error("Timeout: génération du récapitulatif trop longue.")))},i),m=t.replace("</body>",`<script src="${r}"><\/script></body>`);e.srcdoc=m,e.onload=async()=>{if(!o)try{const c=e.contentWindow,y=e.contentDocument;if(!y)throw new Error("Iframe document inaccessible");const g=Date.now(),v=100;await new Promise((E,b)=>{const h=setInterval(()=>{if(o)return clearInterval(h),b(new Error("Aborted"));if(c.html2canvas)return clearInterval(h),E();if(Date.now()-g>Math.min(i,8e3))return clearInterval(h),b(new Error("html2canvas not loaded in iframe"))},v)});const d=y.getElementById("receipt-root")||y.body;if(!d)return s(),clearTimeout(u),l(new Error("No receipt node inside iframe"));const w=(await c.html2canvas(d,{backgroundColor:"#ffffff"})).toDataURL("image/png");s(),clearTimeout(u),n(w)}catch(c){s(),clearTimeout(u),l(c)}}})}function U(t,a){const i=t.readableId||t.id||"",r=document.getElementById("order-id");r&&(r.textContent=i);const n=document.getElementById("qrcode-container");n&&(n.innerHTML="",(async()=>{if(!t.id||!a){console.error("[QR] orderId ou storeId manquant pour la génération du QR code."),n.textContent="Erreur QR";return}const l=`zflex-order://${a}/${t.id}`,e=await I(l,160);if(e){const o=document.createElement("img");o.src=e,o.alt="QR Code de la commande",o.style.width="160px",o.style.height="160px",n.appendChild(o)}else{const o=document.createElement("span");o.textContent="QR indisponible",o.style.fontSize="12px",o.style.color="var(--text-muted-color, #6b7280)",n.appendChild(o)}})())}async function q(){const t=document.getElementById("loading-state"),a=document.getElementById("success-state"),i=document.getElementById("error-state"),r=document.getElementById("error-message");try{const l=new URLSearchParams(window.location.search).get("id");if(!l)throw new Error("ID de commande manquant dans l'URL.");const e=document.getElementById("zflex-data")||document.querySelector(".zflex-fragment-data");if(!e)throw new Error("Tunnel de data introuvable.");const s=JSON.parse(e.textContent||"{}").storeId;if(!s)throw new Error("ID du store introuvable dans les données de la page.");const u=await C(l,s);if(!u?.valid||!u?.order)throw new Error(u?.message||"Commande invalide ou déjà traitée.");const m=u.order;m.createdAt=$(m.createdAt),U(m,s);const c=document.getElementById("download-receipt-btn"),y=async()=>{if(c){c.disabled=!0,c.textContent="Génération...";try{const g=`zflex-order://${s}/${m.id}`,v=await I(g,300),x=N(m,v),d=await L(x),f=document.createElement("a");f.href=d;const w=m.readableId||m.id||"commande";f.download=`recap-commande-${w}.png`,document.body.appendChild(f),f.click(),f.remove()}catch(g){console.error("Erreur génération du récapitulatif:",g),D("Erreur",g?.message||"Impossible de générer le récapitulatif.",{variant:"error"})}finally{c.disabled=!1,c.textContent="Télécharger le récapitulatif"}}};return c&&c.addEventListener("click",y),t&&(t.style.display="none"),a&&a.classList.remove("hidden"),{destroy:()=>{c&&c.removeEventListener("click",y),console.log("[OrderSuccess] Module détruit.")}}}catch(n){return console.error("[OrderSuccess] Erreur:",n),r&&(r.textContent=n?.message||"Impossible de récupérer la commande."),t&&(t.style.display="none"),i&&i.classList.remove("hidden"),D("Erreur de commande",n?.message||"Impossible de récupérer les détails.",{variant:"error"}),{destroy:()=>{}}}}export{q as initOrderSuccess};
