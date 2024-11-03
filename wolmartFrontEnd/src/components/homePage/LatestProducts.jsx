import { fetchData } from "../../api/api";



function LatesProducts({ latesProductsList }) {
  // Initialize empty arrays to hold lists
  const list1 = [];
  const list2 = [];
  const list3 = [];
  const list4 = [];
  const list5 = [];

  // Distribute two items per list
  const lists = [list1, list2, list3, list4, list5];

  for (let i = 0; i < latesProductsList.length; i++) {
    const listIndex = Math.floor(i / 2);
    if (lists[listIndex]) {
      lists[listIndex].push(latesProductsList[i]);
    }
  }

  console.log("List 1:", list1);
  console.log("List 2:", list2);
  console.log("List 3:", list3);
  console.log("List 4:", list4);
  console.log("List 5:", list5);

  const addToCart = async (product_Id) => {
    const requestModel = {
      service: "cart",
      action: "addToCart",
      input: {
        product_id: product_Id,
        product_variant_id: "67208d325554671c2e066aec",
        quantity: 1,
      },
    };

    try {
      const response = await fetchData(requestModel);
      console.log("Add to cart Response:", response);

      // Set product details from response
      if (response && response.data) {
        setProductDetails(response.data);
      }
    } catch (error) {
      console.error("Error fetching ProductDetails:", error);
    }
  };
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
          <ul
            className="nav nav-tabs bb-no justify-content-center"
            role="tablist"
          >
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
              className="swiper-container swiper-theme latest-product-wrapper shadow-swiper appear-animate mb-0 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events fadeIn appear-animation-visible"
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
                className="swiper-wrapper "
                id="swiper-wrapper-09af49faed4106859"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 5"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  {/* FIRST COLUMN */}
                  {list1.map((list1, index) => (
                    <div
                      className="product product-image-gap product-simple"
                      key={index}
                    >
                      <figure className="product-media">
                        <a
                          href="/productDefault"
                          onClick={()=>localStorage.setItem(
                            "product_id",
                            list1._id
                          )}
                        >
                          <img
                            src={list1.images[0]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                          <img
                            src={list1.images[1]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                        </a>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </div>
                        <div className="product-countdown-container">
                          <div
                            className="product-countdown countdown-compact is-countdown"
                            data-until="2024, 12, 9"
                            data-format="DHMS"
                            data-compact="false"
                            data-labels-short="Days, Hours, Mins, Secs"
                          >
                            <span className="countdown-row countdown-show4">
                              <span className="countdown-section">
                                <span className="countdown-amount">43</span>
                                <span className="countdown-period">Days</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">15</span>
                                <span className="countdown-period">Hrs</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">50</span>
                                <span className="countdown-period">Mins</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">48</span>
                                <span className="countdown-period">Secs</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </figure>
                      <div className="product-details">
                        <a
                          href="#"
                          className="btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <h4 className="product-name">
                          <a href="product-default.html">{list1.name}</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (1 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">${list1.sale_price}</ins>
                            <del className="old-price">${list1.base_price}</del>
                          </div>
                          <div className="product-action">
                            <a
                              href="product-default.html"
                              className="btn-primary btn-product btn btn-link btn-underline"
                            >
                              Select Options
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* SECOND COLUMN */}

                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 5"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  {list2.map((list2, index) => (
                    <div
                      className="product product-image-gap product-simple"
                      key={index}
                    >
                      <figure className="product-media">
                        <a
                          href="/productDefault"
                          onClick={()=>localStorage.setItem(
                            "product_id",
                            list2._id
                          )}
                        >
                          {" "}
                          <img
                            src={list2.images[0]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                          <img
                            src={list2.images[1]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                        </a>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <a
                          href="#"
                          className="btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <h4 className="product-name">
                          <a href="product-default.html">{list2.name}</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "0%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (0 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">${list2.base_price}</ins>
                          </div>
                          <div className="product-action">
                            <a
                              // href="#"
                              onClick={() => addToCart(list2._id)}
                              className="btn-cart btn-product btn btn-link btn-underline"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* THIRD COLUMN */}
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 5"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  {list3.map((list3, index) => (
                    <div
                      className="product product-image-gap product-simple"
                      key={index}
                    >
                      <figure className="product-media">
                        <a
                          href="/productDefault"
                          onClick={()=>localStorage.setItem(
                            "product_id",
                            list3._id
                          )}
                        >
                          {" "}
                          <img
                            src={list3.images[0]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                          <img
                            src={list3.images[1]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                        </a>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <a
                          href="#"
                          className="btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <h4 className="product-name">
                          <a href="product-default.html">{list3.name}</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "0%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (0 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">${list3.base_price}</ins>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-cart btn-product btn btn-link btn-underline"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* FOURTH COLUMN */}
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 5"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  {list4.map((list4, index) => (
                    <div
                      className="product product-image-gap product-simple"
                      key={index}
                    >
                      <figure className="product-media">
                        <a
                          href="/productDefault"
                          onClick={()=>localStorage.setItem(
                            "product_id",
                            list4._id
                          )}
                        >
                          {" "}
                          <img
                            src={list4.images[0]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                          <img
                            src={list4.images[1]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                        </a>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <a
                          href="#"
                          className="btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <h4 className="product-name">
                          <a href="product-default.html">{list4.name}</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "0%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (0 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">${list4.base_price}</ins>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-cart btn-product btn btn-link btn-underline"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* FIFTH COLUMN */}
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="5 / 5"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  {list5.map((list5, index) => (
                    <div
                      className="product product-image-gap product-simple"
                      key={index}
                    >
                      <figure className="product-media">
                        <a
                          href="/productDefault"
                          onClick={()=>localStorage.setItem(
                            "product_id",
                            list5._id
                          )}
                        >
                          {" "}
                          <img
                            src={list5.images[0]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                          <img
                            src={list5.images[1]}
                            alt="Product"
                            width="295"
                            height="335"
                          />
                        </a>

                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <a
                          href="#"
                          className="btn-wishlist w-icon-heart"
                          title="Add to wishlist"
                        ></a>
                        <h4 className="product-name">
                          <a href="product-default.html">{list5.name}</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "0%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (0 reviews)
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">${list5.base_price}</ins>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn-cart btn-product btn btn-link btn-underline"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
          {/* <!-- End of Tab Pane --> */}
          <div className="tab-pane" id="tab1-2">
            <div
              className="swiper-container swiper-theme latest-product-wrapper shadow-swiper appear-animate mb-0 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events fadeIn appear-animation-visible"
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
                className="swiper-wrapper "
                id="swiper-wrapper-877f51cb6233ec5f"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/1-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/1-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact is-countdown"
                          data-until="2024, 12, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          <span className="countdown-row countdown-show4">
                            <span className="countdown-section">
                              <span className="countdown-amount">43</span>
                              <span className="countdown-period">Days</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">15</span>
                              <span className="countdown-period">Hrs</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">50</span>
                              <span className="countdown-period">Mins</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">48</span>
                              <span className="countdown-period">Secs</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Gold Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="product-default.html"
                            className="btn-primary btn-product btn btn-link btn-underline"
                          >
                            Select Options
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/1-4-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/1-4-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact is-countdown"
                          data-until="2024, 12, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          <span className="countdown-row countdown-show4">
                            <span className="countdown-section">
                              <span className="countdown-amount">43</span>
                              <span className="countdown-period">Days</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">15</span>
                              <span className="countdown-period">Hrs</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">50</span>
                              <span className="countdown-period">Mins</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">48</span>
                              <span className="countdown-period">Secs</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Mini Wireless Earphone
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$59.17 - $129.27</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="product-default.html"
                            className="btn-primary btn-product btn btn-link btn-underline"
                          >
                            Select Options
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-3-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-3-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Plastic Cup</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$10.62</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-7-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-7-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Charming Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "40%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$30.73</ins>
                          <del className="old-price">$34.38</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-4-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-4-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Wonderful Sound Music Player
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$80.15</ins>
                          <del className="old-price">$84.30</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-8-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-8-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Mobile Electronic Recorder
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "20%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$59.26</ins>
                          <del className="old-price">$63.27</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/3-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/3-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Red Cap Sound Marker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$31.00</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/3-2-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/3-2-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Wireless Mouse</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.78</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="5 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Multi-colorful Music Player
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$60.11</ins>
                          <del className="old-price">$72.83</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-5-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-5-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Cavin Fashion Suede Hand bag
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "20%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.70</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="6 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/1-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/1-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Gold Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/1-2-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/1-2-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Electronics Black Wrist Watch
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
          {/* <!-- End of Tab Pane --> */}
          <div className="tab-pane" id="tab1-3">
            <div
              className="swiper-container swiper-theme latest-product-wrapper shadow-swiper appear-animate mb-0 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events fadeIn appear-animation-visible"
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
                className="swiper-wrapper "
                id="swiper-wrapper-81ef13327e6b32f5"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/1-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/1-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact is-countdown"
                          data-until="2024, 12, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          <span className="countdown-row countdown-show4">
                            <span className="countdown-section">
                              <span className="countdown-amount">43</span>
                              <span className="countdown-period">Days</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">15</span>
                              <span className="countdown-period">Hrs</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">50</span>
                              <span className="countdown-period">Mins</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">48</span>
                              <span className="countdown-period">Secs</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Gold Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="product-default.html"
                            className="btn-primary btn-product btn btn-link btn-underline"
                          >
                            Select Options
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/1-4-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/1-4-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact is-countdown"
                          data-until="2024, 12, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          <span className="countdown-row countdown-show4">
                            <span className="countdown-section">
                              <span className="countdown-amount">43</span>
                              <span className="countdown-period">Days</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">15</span>
                              <span className="countdown-period">Hrs</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">50</span>
                              <span className="countdown-period">Mins</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">48</span>
                              <span className="countdown-period">Secs</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Mini Wireless Earphone
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$59.17 - $129.27</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="product-default.html"
                            className="btn-primary btn-product btn btn-link btn-underline"
                          >
                            Select Options
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-3-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-3-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Plastic Cup</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: " 0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$10.62</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-7-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-7-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Charming Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "40%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$30.73</ins>
                          <del className="old-price">$34.38</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-4-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-4-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Wonderful Sound Music Player
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$80.15</ins>
                          <del className="old-price">$84.30</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-8-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-8-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Mobile Electronic Recorder
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "20%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$59.26</ins>
                          <del className="old-price">$63.27</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/3-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/3-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Red Cap Sound Marker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$31.00</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/3-2-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/3-2-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Wireless Mouse</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.78</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="5 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="./src/assets/img/products/2-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="./src/assets/img/products/2-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Multi-colorful Music Player
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$60.11</ins>
                          <del className="old-price">$72.83</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/2-5-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/2-5-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Cavin Fashion Suede Hand bag
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "20%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.70</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="6 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/1-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/1-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Gold Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/1-2-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/1-2-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Electronics Black Wrist Watch
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
          {/* <!-- End of Tab Pane --> */}
          <div className="tab-pane" id="tab1-4">
            <div
              className="swiper-container swiper-theme latest-product-wrapper shadow-swiper appear-animate mb-0 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events fadeIn appear-animation-visible"
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
                className="swiper-wrapper "
                id="swiper-wrapper-9b7310c6027baa0aa"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/1-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/1-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact is-countdown"
                          data-until="2024, 12, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          <span className="countdown-row countdown-show4">
                            <span className="countdown-section">
                              <span className="countdown-amount">43</span>
                              <span className="countdown-period">Days</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">15</span>
                              <span className="countdown-period">Hrs</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">50</span>
                              <span className="countdown-period">Mins</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">48</span>
                              <span className="countdown-period">Secs</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Gold Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="product-default.html"
                            className="btn-primary btn-product btn btn-link btn-underline"
                          >
                            Select Options
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/1-4-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/1-4-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact is-countdown"
                          data-until="2024, 12, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          <span className="countdown-row countdown-show4">
                            <span className="countdown-section">
                              <span className="countdown-amount">43</span>
                              <span className="countdown-period">Days</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">15</span>
                              <span className="countdown-period">Hrs</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">50</span>
                              <span className="countdown-period">Mins</span>
                            </span>
                            <span className="countdown-section">
                              <span className="countdown-amount">48</span>
                              <span className="countdown-period">Secs</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Mini Wireless Earphone
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$59.17 - $129.27</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="product-default.html"
                            className="btn-primary btn-product btn btn-link btn-underline"
                          >
                            Select Options
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="2 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/2-3-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/2-3-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Plastic Cup</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$10.62</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/2-7-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/2-7-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Charming Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "40%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$30.73</ins>
                          <del className="old-price">$34.38</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="3 / 6"
                  style={{ width: "208px", marginRight: "20px;" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/2-4-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/2-4-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Wonderful Sound Music Player
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "60%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$80.15</ins>
                          <del className="old-price">$84.30</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/2-8-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/2-8-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Mobile Electronic Recorder
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "20%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$59.26</ins>
                          <del className="old-price">$63.27</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/3-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/3-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Red Cap Sound Marker</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$31.00</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/3-2-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/3-2-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Wireless Mouse</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "0%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (0 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.78</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="5 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/2-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/2-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Multi-colorful Music Player
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$60.11</ins>
                          <del className="old-price">$72.83</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/2-5-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/2-5-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Cavin Fashion Suede Hand bag
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "20%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.70</ins>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="6 / 6"
                  style={{ width: "208px", marginRight: "20px" }}
                >
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/1-1-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/1-1-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">Gold Watch</a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "80%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (1 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product product-image-gap product-simple">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src="assets/img/products/1-2-1.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                        <img
                          src="assets/img/products/1-2-2.jpg"
                          alt="Product"
                          width="295"
                          height="335"
                        />
                      </a>

                      <div className="product-action">
                        <a
                          href="#"
                          className="btn-product btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </div>
                    </figure>
                    <div className="product-details">
                      <a
                        href="#"
                        className="btn-wishlist w-icon-heart"
                        title="Add to wishlist"
                      ></a>
                      <h4 className="product-name">
                        <a href="product-default.html">
                          Electronics Black Wrist Watch
                        </a>
                      </h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span
                            className="ratings"
                            style={{ width: "100%" }}
                          ></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$25.68</ins>
                          <del className="old-price">$30.45</del>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-cart btn-product btn btn-link btn-underline"
                          >
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
          {/* <!-- End of Tab Pane --> */}
        </div>
      </div>
    </>
  );
}

export default LatesProducts;
