import React, { useState, useEffect } from "react";
import Header from "../../components/Navbar";
import AuthApi from "../../api/auth";
import "./feed.scss";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Spinner from "../../layouts/Spinner";
import Alert from "../../layouts/Alert";

const Feed = () => {
  const { data, isLoading, error, refetch } = useQuery("feed", AuthApi.getBlog);
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    return <Alert type="danger" header={error.message}></Alert>;
  }

  return (
    <>
      <Header />
      <div className="container feed-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">JobLabs</a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav topnav  ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    All<span></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Creative
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Programming
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Corporate
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Finance
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Medical
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="f-right m-all-1rem">
          <Link to="/CartBlogs">
            <button>Create Blog</button>
          </Link>
        </div>
        <div className="row w-100">
          {data?.data.map((feed) => (
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="category mb-30">
                <div className="job">
                  <span className="colors2 mb-4">{feed.title}</span>
                  <h5>
                    <a href="#">{feed.description}</a>
                  </h5>
                  <ul className="place">
                    <li>
                      <p>
                        <i className="fas fa-map-marker-alt pe-2"></i>{" "}
                        {feed.location}
                      </p>
                    </li>
                    <li>
                      <p className="ps-5">
                        <i className="fas fa-map-marker-alt pe-2"></i>
                        {feed.workType}
                      </p>
                    </li>
                  </ul>
                  <div className="pricing d-flex justify-content-between align-items-center">
                    <div className="left">
                      <p></p>
                    </div>
                    <span className="time">{feed.chooseDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="btn btn-primary mb-30">
              <span>Find More</span>
              <span className="fas fa-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
