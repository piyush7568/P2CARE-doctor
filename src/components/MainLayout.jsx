import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import doc from "../assets/img/doctors/doctor-thumb-02.jpg";

const MainLayout = () => {
  //   const navigate = useNavigate();
  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="row">
          <div className="profile-sidebar">
            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <Link to="#" className="booking-doc-img">
                  <img src="#" alt="User Image" />
                </Link>
                <div className="profile-det-info">
                  <h3>Dr. Darren Elder</h3>

                  <div className="patient-details">
                    <h5 className="mb-0">
                      BDS, MDS - Oral & Maxillofacial Surgery
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-widget">
              <nav className="dashboard-menu">
                <ul>
                  <li className="active">
                    <Link to="/">
                      <i className="fas fa-columns"></i>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="appointments">
                      <i className="fas fa-calendar-check"></i>
                      <span>Appointments</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="my-patients">
                      <i className="fas fa-user-injured"></i>
                      <span>My Patients</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="schedule-timings">
                      <i className="fas fa-hourglass-start"></i>
                      <span>Schedule Timings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="available-timings">
                      <i className="fas fa-clock"></i>
                      <span>Available Timings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="invoices">
                      <i className="fas fa-file-invoice"></i>
                      <span>Invoices</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="accounts">
                      <i className="fas fa-file-invoice-dollar"></i>
                      <span>Accounts</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="reviews">
                      <i className="fas fa-star"></i>
                      <span>Reviews</span>
                    </Link>
                  </li>
                  {/* <li>
                          <Link to="chat-doctor">
                            <i className="fas fa-comments"></i>
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </Link>
                        </li> */}
                  <li>
                    <Link to="profile-setting">
                      <i className="fas fa-user-cog"></i>
                      <span>Profile Settings</span>
                    </Link>
                  </li>
                  {/* <li>
                          <Link to="social-media">
                            <i className="fas fa-share-alt"></i>
                            <span>Social Media</span>
                          </Link>
                        </li> */}
                  <li>
                    <Link to="reset-password">
                      <i className="fas fa-lock"></i>
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="login">
                      <i className="fas fa-sign-out-alt"></i>
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MainLayout;
