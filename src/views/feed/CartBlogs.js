import React from "react";
import Cartname from "./Form";
import "../auth/auth.scss";

const CartBlogs = () => {
  return (
    <div className="auth-container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div
            className="card card-signin my-5"
            style={{ borderRadius: "20px" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center">Add to Cart</h5>
              <Cartname />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlogs;
