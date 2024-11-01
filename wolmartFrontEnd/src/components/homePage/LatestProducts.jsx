import { useNavigate } from "react-router-dom";

function LatesProducts({ latesProductsList }) {
  const navigate = useNavigate();

   // Create an array of 5 empty sub-arrays
  const chunkedProducts = Array.from({ length: 5 }, () => []);

  // Distribute products into the 5 chunks
  for (let i = 0; i < latesProductsList.length; i++) {
    // Calculate which chunk to place the product into
    const chunkIndex = i % 5; // This will cycle through 0 to 4
    chunkedProducts[chunkIndex].push(latesProductsList[i]);
  }

  return (
    <>
      <div className="container">
        <div
          className="tab tab-latest-product tab-nav-center tab-nav-underline tab-line-grow filter-with-title appear-animate fadeIn appear-animation-visible"
          style={{ animationDuration: "1.2s" }}
        >
          <h2
            className="title title-latest-product font-secondary font-weight-bolder ls-normal appear-animate fadeIn appear-animation-visible"
            style={{ animationDuration: "1.2s" }}
          >
            Latest Products
          </h2>
          <ul className="nav nav-tabs bb-no justify-content-center" role="tablist">
            <li className="nav-item mb-2">
              <a className="nav-link active ls-normal" href="#tab1-1">
                New arrivals
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link ls-normal" href="#tab1-2">
                Best seller
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link ls-normal" href="#tab1-3">
                Top Rated
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link ls-normal" href="#tab1-4">
                Featured
              </a>
            </li>
          </ul>
        </div>

        <div
          className="tab-content product-wrapper appear-animate fadeIn appear-animation-visible"
          style={{ animationDuration: "1.2s" }}
        >
          <div className="tab-pane active" id="tab1-1">
            <div
              className="swiper-container swiper-theme latest-product-wrapper shadow-swiper appear-animate mb-0"
              data-swiper-options="{
                'spaceBetween': 20,
                'slidesPerView': 2,
                'breakpoints': {
                  '576': {
                    'slidesPerView': 2
                  },
                  '768': {
                    'slidesPerView': 3
                  },
                  '992': {
                    'slidesPerView': 4
                  },
                  '1200': {
                    'slidesPerView': 5
                  }
                }
              }"
              style={{ animationDuration: "1.2s" }}
            >
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-09af49faed4106859"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                {chunkedProducts.map((productChunk, chunkIndex) => (
                  <div
                    className="swiper-slide"
                    role="group"
                    aria-label={`${chunkIndex + 1} / ${chunkedProducts.length}`}
                    style={{ width: "208px", marginRight: "20px" }}
                    key={chunkIndex}
                  >
                    {productChunk.map((product, index) => (
                      <div className="product product-image-gap product-simple" key={index}>
                        <figure className="product-media">
							
                          <a href={'/productDefault/' + product._id} onClick={localStorage.setItem("product_Id", product._id)} >
                            <img src={product.images[0]} alt="Product" width="295" height="335" />
                            {product.images[1] && (
                              <img src={product.images[1]} alt="Product" width="295" height="335" />
                            )}
                          </a>
						  <div className="product-action">
							<a
								href={'/productDefault/' + product._id}
								className="btn-product btn-quickview"
								title="Quick View"
								onClick={localStorage.setItem("product_Id", product._id)
								}
							>
								Quick View
							</a>
						</div>
                          {/* Additional logic for the first column */}
                          {chunkIndex === 0 && (
                            <div className="product-countdown-container">
                              {/* Add countdown logic here */}
                              <span className="countdown-row countdown-show4">
                                {/* Countdown sections */}
                              </span>
                            </div>
                          )}
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="/product-default">{product.name}</a>
                          </h4>
                          <div className="product-pa-wrapper">
                            <div className="product-price">
                              {product.sale_price ? (
                                <>
                                  <ins className="new-price">₹{product.sale_price}</ins>
                                  <del className="old-price">₹{product.base_price}</del>
                                </>
                              ) : (
                                <ins className="new-price">₹{product.base_price}</ins>
                              )}
                            </div>
                            <div className="product-action">
                              <a href="/cart" className="btn-cart btn-product btn btn-link btn-underline">
                                Add To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatesProducts;
