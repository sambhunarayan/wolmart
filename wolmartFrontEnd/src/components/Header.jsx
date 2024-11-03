function header() {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-left">
              <p className="welcome-msg">Welcome to dream deal Store</p>
            </div>
            <div className="header-right">
              <a href="my-account.html" className="d-lg-show">
                My Account
              </a>
              <a href="login.html" className="d-lg-show login sign-in">
                <i className="w-icon-account"></i>Sign In
              </a>
              <span className="delimiter d-lg-show">/</span>
              <a href="signup.html" className="ml-0 d-lg-show login register">
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="header-middle sticky-content fix-top sticky-header border-no">
          <div className="container">
            <div className="header-left mr-md-4">
              <a href="#" className="mobile-menu-toggle w-icon-hamburger"></a>
              <a href="index.html" className="logo">
                <img
                  src="/assets/img/logo.png"
                  alt="logo"
                  width="205"
                  height="45"
                />
              </a>
              <form
                method="get"
                action="#"
                className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex"
              >
                <div className="select-box bg-white">
                  <select id="category" name="category">
                    <option value="">All Categories</option>
                    <option value="">Fashion</option>
                    <option value="">Furniture</option>
                    <option value="">Shoes</option>
                    <option value="">Sports</option>
                    <option value="">Games</option>
                    <option value="">Computers</option>
                    <option value="">Electronics</option>
                    <option value="">Kitchen</option>
                    <option value="">Clothing</option>
                  </select>
                </div>
                <input
                  type="text"
                  className="form-control bg-white pt-0 pb-0"
                  name="search"
                  id="search"
                  placeholder="Search in..."
                  required
                />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search"></i>
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              <div className="header-call d-xs-show d-lg-flex align-items-center">
                <a href="tel:#" className="w-icon-call"></a>
                <div className="call-info d-lg-show">
                  <h4 className="chat font-size-md text-normal ls-normal text-white mb-0">
                    <a
                      href="mailto:#"
                      className="text-capitalize text-primary font-weight-normal"
                    >
                      Live Chat
                    </a>
                    <span className="text-light font-weight-normal">or :</span>
                  </h4>
                  <a
                    href="tel:#"
                    className="phone-number font-weight-bolder ls-50"
                  >
                    0(800)123-456
                  </a>
                </div>
              </div>
              <a
                className="wishlist label-down link d-xs-show"
                href="wishlist.html"
              >
                <i className="w-icon-heart"></i>
                <span className="wishlist-label d-lg-show">Wishlist</span>
              </a>
              <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                <div className="cart-overlay"></div>
                <a href="#" className="cart-toggle label-down link">
                  <i className="w-icon-cart">
                    <span className="cart-count text-white">2</span>
                  </i>
                  <span className="cart-label">Cart</span>
                </a>
                <div className="dropdown-box">
                  <div className="cart-header">
                    <span>Shopping Cart</span>
                    <a href="#" className="btn-close">
                      Close<i className="w-icon-long-arrow-right"></i>
                    </a>
                  </div>
                  <div className="products">
                    <div className="product product-cart">
                      <div className="product-detail">
                        <a href="product-default.html" className="product-name">
                          Beige knitted elas runner shoes
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$25.68</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="/src/assets/img/products/product-1.jpg"
                            alt="product"
                            height="84"
                            width="94"
                          />
                        </a>
                      </figure>
                      <button className="btn btn-link btn-close">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="product product-cart">
                      <div className="product-detail">
                        <a href="product-default.html" className="product-name">
                          Blue utility
                        </a>
                        <div className="price-box">
                          <span className="product-quantity">1</span>
                          <span className="product-price">$32.99</span>
                        </div>
                      </div>
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="/src/assets/img/products/product-2.jpg"
                            alt="product"
                            width="84"
                            height="94"
                          />
                        </a>
                      </figure>
                      <button className="btn btn-link btn-close">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-total">
                    <label>Subtotal:</label>
                    <span className="price">$58.67</span>
                  </div>
                  <div className="cart-action">
                    <a
                      href="/cart"
                      className="btn btn-dark btn-outline btn-rounded"
                    >
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="btn btn-primary btn-rounded"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
