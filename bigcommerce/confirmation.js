const getCookie=e=>{const t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(t)return t[2]},sendPayloadToBackend=e=>{const t=localStorage.getItem("source"),o=document.querySelector("#delight-confirmation").getAttribute("data-store");if(o){fetch("https://us-central1-spherical-gate-286620.cloudfunctions.net/sendReferralDataSomewhere",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({store:o,data:e,source:t})});localStorage.removeItem("delight-data"),localStorage.removeItem("source")}};window.addEventListener("load",async()=>{const e=localStorage.getItem("user-token"),t=document.querySelector("#delight-confirmation"),o=await JSON.parse(localStorage.getItem("delight-data"));t&&o&&sendPayloadToBackend({...o,user:e||"no-storage"})});