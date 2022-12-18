import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <h1 className="products">PRODUCTS</h1>

      <div className="product-container">
        <div class="columns">
          <ul class="price">
            <li class="header">IR10</li>
            <li class="grey">Free Yearly Maintenance</li>
            <li>Monthly Updates </li>
            <li>24 Hour Support</li>
            <li>No Software Access</li>
            <li>0 Day Trial</li>
            <li class="grey">
              <a href="mailto:intel-robotics@ir.dk" class="button">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="columns">
          <ul class="price">
            <li class="green">IR10+ Pro</li>
            <li class="grey">Free Monthly Maintenance</li>
            <li>Weekly Updates</li>
            <li>24 Hour Support</li>
            <li>Full Software Access</li>
            <li>14 Day Trial</li>
            <li class="grey">
              <a href="mailto:intel-robotics@ir.dk" class="button">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="columns">
          <ul class="price">
            <li class="header">IR10+</li>
            <li class="grey">Free Yearly Maintenance</li>
            <li>Monthly Updates</li>
            <li>24 Hour Support</li>
            <li>Limited Software Access</li>
            <li>7 Day Trial</li>
            <li class="grey">
              <a href="mailto:intel-robotics@ir.dk" class="button">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
