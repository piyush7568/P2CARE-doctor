import { Link } from "react-router-dom";

const MyPatients = () => {
  return (
    <>
      {/* <!-- /Breadcrumb --> */}
      <div className="container">
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title"style={{width:'75vw'}}>My Patients</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item"  aria-current="page">
                    My Patients
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb --> */}

      <div className="content ">
      <div className="container">

      <div className="col-md-7 col-lg-8 col-xl-9">
        <div className="row row-grid">

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="patient-profile.html" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="patient-profile.html">Richard Wilson</Link>
                      </h3>

                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> P0016
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Alabama, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 952 001 8563</span>
                    </li>
                    <li>
                      Age <span>38 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>AB+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="patient-profile.html" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient1.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="patient-profile.html">Charlene Reed</Link>
                      </h3>

                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> P0001
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> North
                          Carolina, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 828 632 9170</span>
                    </li>
                    <li>
                      Age <span>29 Years, Female</span>
                    </li>
                    <li>
                      Blood Group <span>O+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient2.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Travis Trimble </h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0002
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Maine, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 207 729 9974</span>
                    </li>
                    <li>
                      Age <span>23 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>B+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient3.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Carl Kelly</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0003
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Indiana, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 260 724 7769</span>
                    </li>
                    <li>
                      Age <span>32 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>A+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient4.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Michelle Fairfax</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0004
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Indiana, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 504 368 6874</span>
                    </li>
                    <li>
                      Age <span>25 Years, Female</span>
                    </li>
                    <li>
                      Blood Group <span>B+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient5.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Gina Moore</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0005
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Florida, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 954 820 7887</span>
                    </li>
                    <li>
                      Age <span>25 Years, Female</span>
                    </li>
                    <li>
                      Blood Group <span>AB-</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient6.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Elsie Gilley</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0006
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Kentucky,
                          USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 315 384 4562</span>
                    </li>
                    <li>
                      Age <span>14 Years, Female</span>
                    </li>
                    <li>
                      Blood Group <span>O-</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient7.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Joan Gardner</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0007
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i>
                          California, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 707 2202 603</span>
                    </li>
                    <li>
                      Age <span>25 Years, Female</span>
                    </li>
                    <li>
                      Blood Group <span>A-</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient8.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Daniel Griffing</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0007
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> New Jersey,
                          USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 973 773 9497</span>
                    </li>
                    <li>
                      Age <span>28 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>O+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient9.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Walter Roberson</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0009
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Florida, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 850 358 4445</span>
                    </li>
                    <li>
                      Age <span>28 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>A+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient10.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Robert Rhodes</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0010
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i>
                          California, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 858 259 5285</span>
                    </li>
                    <li>
                      Age <span>19 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>B+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="#" className="booking-doc-img">
                      <img
                        src="/src/assets/img/patients/patient11.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>Harry Williams</h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> PT0011
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Colorado,
                          USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone <span>+1 303 607 7075</span>
                    </li>
                    <li>
                      Age <span>9 Years, Male</span>
                    </li>
                    <li>
                      Blood Group <span>A-</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default MyPatients;
