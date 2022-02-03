const targetScript = document.querySelector("#delight-tracker-loyalty");
  const storeKey = targetScript.getAttribute("data-store");

  const sendPayloadToBackend = async (data) => {
    const url =
      "https://us-central1-spherical-gate-286620.cloudfunctions.net/loyalty-dev";
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ store: storeKey, data }),
    });
    const newTracker = new Date().toISOString();
    await localStorage.setItem("delight-post", newTracker);
  };
  // Grab info from checkout necessary for referral details
  window.addEventListener("load", async () => {
    const tracked = await localStorage.getItem("delight-post");
    if (tracked) {
      const trackedDate = new Date(tracked);
      const now = new Date();
      if (
        trackedDate.toISOString().slice(11, 16).replace(/-/g, "") !==
        now.toISOString().slice(11, 16).replace(/-/g, "")
      ) {
        if (Shopify.checkout) {
          sendPayloadToBackend({
            orderId: Shopify.checkout.order_id,
            email: Shopify.checkout.email,
            name: Shopify.checkout.billing_address.first_name,
            items: Shopify.checkout.line_items,
            user: ShopifyAnalytics.lib.user().traits().uniqToken,
            loyalty: true,
          });
        }
      }
    } else {
      if (Shopify.checkout) {
        sendPayloadToBackend({
          orderId: Shopify.checkout.order_id,
          email: Shopify.checkout.email,
          name: Shopify.checkout.billing_address.first_name,
          items: Shopify.checkout.line_items,
          user: ShopifyAnalytics.lib.user().traits().uniqToken,
          loyalty: true,
        });
      }
    }
  });