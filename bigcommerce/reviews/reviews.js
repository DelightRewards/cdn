window.addEventListener("load", () => {
  if (window.location.href === "https://teststore.com/") {
    const head = document.getElementsByTagName("head")[0];
    const fontAwesome = document.createElement("link");
    fontAwesome.type = "text/css";
    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css";
    head.appendChild(fontAwesome);
    const delightStyles = document.createElement("link");
    delightStyles.type = "text/css";
    delightStyles.rel = "stylesheet";
    delightStyles.href =
      "https://cdn.jsdelivr.net/gh/DelightRewards/cdn/bigcommerce/reviews/reviews.min.css";
    head.appendChild(delightStyles);

    let reviews = `
			     <section class="section delight-bg">
              <div class="delight-container-fluid delight-container">
                <h2 class="delight-section-title">What our customers say</h2>
                <div class="delight-row">
                  <div class="delight-col-lg-4 text-center">
                    <div>
                      <div>
                        <div class="delight-card">
                          <div class="delight-card-body">
                            <h6 class="delight-card-title">Mindy</h6>
                            <div class="delight-icon-star">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <h6 class="delight-card-subtitle">
                              June 16, 2021
                            </h6>
                            <p class="delight-card-text">
                              "Hands down, we don’t get our nitrite free bacon from anywhere else now!!! This is flavorful, thicker cut, and always cooks up well!! :)"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="delight-col-lg-4 text-center">
                    <div>
                      <div>
                        <div class="delight-card">
                          <div class="delight-card-body">
                            <h6 class="delight-card-title">Cathie</h6>
                            <div class="delight-icon-star">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <h6 class="delight-card-subtitle">
                              June 16, 2021
                            </h6>
                            <p class="delight-card-text">
                              "Love all of their products; very flavorful. Especially like that they are free roaming and humane."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="delight-col-lg-4 text-center">
                    <div>
                      <div>
                        <div class="delight-card">
                          <div class="delight-card-body">
                            <h6 class="delight-card-title">Denise</h6>
                            <div class="delight-icon-star">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <h6 class="delight-card-subtitle">
                              June 16, 2021
                            </h6>
                            <p class="delight-card-text">
                              "I order from this place every other month, and I’m always pleased with the quality of food and the shipping."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      			  <div class="delight-signature-container">
                <a class="delight-signature-text" href="https://delightrewards.com">
                  Powered by Delight
                </a>
              </div>
            </section>
		  `;
    const div = document.createElement("div");
    div.innerHTML = reviews.trim();
    const neighbor = document.querySelector(".map--container > section");
    neighbor.parentNode.insertBefore(div, neighbor.nextSibling);
  }
});
