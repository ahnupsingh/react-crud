import React,{useState, useEffect} from 'react';
import Header from '../../components/Navbar';
import AuthApi from "../../api/auth";
import './feed.scss';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Spinner from "../../layouts/Spinner";

const Feed = () => {

    
    const { data, isLoading, error, refetch } = useQuery("feed", AuthApi.getBlog);
    console.log("useQuery",data)
        if(isLoading){
           return <Spinner></Spinner>
        }

  return (
    <>
      <Header/>
      <div className="container feed-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">JobLabs</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
              
                    <ul className="navbar-nav topnav  ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">All<span></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Creative</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Programming</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Corporate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Finance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Medical</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Marketing</a>
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
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors1 mb-4">Creative &amp; Art</span>
                        <h5><a href="#">User Experience Designer Employee</a></h5>
                        <ul className="place">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i> New York, USA</p>
                            </li>
                            <li>
                                <p className="ps-5"><i className="fas fa-map-marker-alt pe-2"></i>Full Time</p>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="left">
                                <p>Globe Solution Ltd.</p>
                            </div>
                            <span className="time">2h ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors2 mb-4">Finance &amp; Accounting</span>
                        <h5><a href="#">Foreign Language Research Analyst</a></h5>
                        <ul className="place">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i> New York, USA</p>
                            </li>
                            <li>
                                <p className="ps-5"><i className="fas fa-map-marker-alt pe-2"></i>Full Time</p>
                            </li>
                        </ul>
                        <div className="pricing d-flex justify-content-between align-items-center">
                            <div className="left">
                                <p>Globe Solution Ltd.</p>
                            </div>
                            <span className="time">2h ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors3 mb-4">Medical</span>
                        <h5><a href="#">Medical Assistant, East Valley Primary Care</a></h5>
                        <ul className="place">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i> New York, USA</p>
                            </li>
                            <li>
                                <p className="ps-5"><i className="fas fa-map-marker-alt pe-2"></i>Full Time</p>
                            </li>
                        </ul>
                        <div className="pricing d-flex justify-content-between align-items-center">
                            <div className="left">
                                <p>Globe Solution Ltd.</p>
                            </div>
                            <span className="time">2h ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors4 mb-4">Corporate</span>
                        <h5><a href="#">Foreign Language Research Analyst</a></h5>
                        <ul className="place">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i> New York, USA</p>
                            </li>
                            <li>
                                <p className="ps-5"><i className="fas fa-map-marker-alt pe-2"></i>Full Time</p>
                            </li>
                        </ul>
                        <div className="pricing d-flex justify-content-between align-items-center">
                            <div className="left">
                                <p>Globe Solution Ltd.</p>
                            </div>
                            <span className="time">2h ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors5 mb-4">Marketing</span>
                        <h5><a href="#">User Experience Designer Employee</a></h5>
                        <ul className="place">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i> New York, USA</p>
                            </li>
                            <li>
                                <p className="ps-5"><i className="fas fa-map-marker-alt pe-2"></i>Full Time</p>
                            </li>
                        </ul>
                        <div className="pricing d-flex justify-content-between align-items-center">
                            <div className="left">
                                <p>Globe Solution Ltd.</p>
                            </div>
                            <span className="time">2h ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors2 mb-4">Programming &amp; IT</span>
                        <h5><a href="#">Medical Assistant, East Valley Primary Care</a></h5>
                        <ul className="place">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i> New York, USA</p>
                            </li>
                            <li>
                                <p className="ps-5"><i className="fas fa-map-marker-alt pe-2"></i>Full Time</p>
                            </li>
                        </ul>
                        <div className="pricing d-flex justify-content-between align-items-center">
                            <div className="left">
                                <p>Globe Solution Ltd.</p>
                            </div>
                            <span className="time">2h ago</span>
                        </div>
                    </div>
                </div>
            </div>
            {data?.data.map((feed) => (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors2 mb-4">{feed.title}</span>
                        <h5><a href="#">{feed.description}</a></h5>
                        <ul className="place">
                            <li>
                                <p><i className="fas fa-map-marker-alt pe-2"></i> {feed.location}</p>
                            </li>
                            <li>
                                <p className="ps-5"><i className="fas fa-map-marker-alt pe-2"></i>{feed.workType}</p>
                            </li>
                        </ul>
                        <div className="pricing d-flex justify-content-between align-items-center">
                            <div className="left">
                                <p>Globe Solution Ltd.</p>
                            </div>
                            <span className="time">{feed.createdAt}</span>
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
