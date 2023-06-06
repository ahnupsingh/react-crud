import React, { useState, useEffect } from "react";
import Header from "../../components/Navbar";
import AuthApi from "../../api/auth";
import "./feed.scss";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import Spinner from "../../layouts/Spinner";
import Alert from "../../layouts/Alert";
import { PAGE_SIZES } from "../../config/constants";

const Feed = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery("feed", () => AuthApi.getBlog({
    _page: pageNumber,
    _limit: pageSize
  }));


  useEffect(() => {
    // queryClient.invalidateQueries('feed');
    // console.log("Page Number, page size ---> ", pageNumber, pageSize);
    refetch(pageNumber, pageSize);
  }, [pageNumber, pageSize]);

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
  };

  const handlePageChange = (e) => {
    const page = e.target.value ? Number(e.target.value) - 1 : 0;
    setPageNumber(page);
  }

  const previousPage = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const canPreviousPage = () => {
    return pageNumber > 0;
  };

  const canNextPage = () => {
    return true;
  };


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
          <Link to="/CreateBlog">
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
                    <span className="time">{feed.createdAt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12 d-flex align-items-center justify-content-center">
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="w-25"
            >
              {PAGE_SIZES.map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
            <div className="d-flex align-items-center">
              Page&nbsp;
              <input
                type="number"
                value={pageNumber}
                onChange={handlePageChange}
                style={{ width: "50px", textAlign: "center" }}
              />
            </div>
            <span>
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="btn btn-outline-dark m-1"
              >
                &lt;
              </button>
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="btn btn-outline-dark m-1"
              >
                &gt;
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
