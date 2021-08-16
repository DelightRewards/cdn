const sendPayloadToBackend = (data) => {
  const targetScript = document.querySelector("#delight-tracker");
  if (targetScript) {
    const storeName = targetScript.getAttribute("data-store");
    console.log("got store", storeName);
    // const url =
    //   "https://us-central1-spherical-gate-286620.cloudfunctions.net/sendReferralDataSomewhere";
    // const response = fetch(url, {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     store: storeName,
    //     data: data,
    //     source: "delightrewards",
    //   }),
    // });
  }
};

window.addEventListener("load", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const utmSource = urlParams.get("utm_source");
  const userId = localStorage.getItem("");

  if (utmSource && utmSource === "delightrewards" && targetScript) {
    const storeName = targetScript.getAttribute("data-store");
    if (storeName) {
      sendPayloadToBackend({
        user: userId || "no-storage",
      });
    }
  }
});
