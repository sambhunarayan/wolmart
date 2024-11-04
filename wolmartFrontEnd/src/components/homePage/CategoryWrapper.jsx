import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/api";


function Category() {
  const [categories, setCategories] = useState([]);
  // Fetch categories
  useEffect(() => {
    const handleFetchCategories = async () => {
      const requestModel = {
        service: "home",
        action: "getCategories",
        input: {
          type: "category",
        },
      };

      try {
        const categoryResponse = await fetchData(requestModel);
        console.log("Category Response:", categoryResponse);

        if (categoryResponse && categoryResponse.data) {
          setCategories(categoryResponse.data.categories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    handleFetchCategories();
  }, []);
  return (
    <>
      <div className="container mb-2">
        <div className="category-wrapper row cols-6 pt-4">
          {categories.map((category) => (
            <div key={category.id} className="category category-ellipse">
              <figure className="category-media">
                <a href="/shop">
                  <img
                    src={category.image_url}
                    alt="Category"
                    style={{ width: '71px', height: '71px' }}
                  />
                </a>
              </figure>
              <div className="category-content">
                <h4 className="category-name">
                  <a href="shop.html">{category.name}</a>
                </h4>
              </div>
            </div>
          ))}
          <div className="category category-ellipse">
            <div className="icon-box icon-colored-circle">
              <span className="icon-box-icon mb-0 text-white">
                <i className="w-icon-hamburger"></i>
              </span>
            </div>
            <div className="category-content">
              <h4 className="category-name">
                <a href="shop.html">Categories</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;




