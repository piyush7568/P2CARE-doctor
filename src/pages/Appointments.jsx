import { Link } from "react-router-dom"


const Appointments = () => {
  return (
    <>
    
    {/* <!-- Breadcrumb --> */}
    <div className="">
    <div className="breadcrumb-bar-two">
      <div className="container">
        <div className="row align-items-center inner-banner">
          <div className="col-md-12 col-12 text-center">
            <h2 className="breadcrumb-title" style={{width:'75vw'}}>Appointments</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                <li className="breadcrumb-item" aria-current="page">Appointments</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- /Breadcrumb --> */}
    
    {/* <!-- Page Content --> */}
    <div className="content ">
      <div className="container">

        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar" style=
    {{width:'4%'}}>
            
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="appointments">

              
              {/* <!-- Appointment List --> */}
              <div className="appointment-list">
                <div className="profile-info-widget">
                  <Link to="/patient-profile" className="booking-doc-img">
                    <img src="/src/assets/img/patients/patient10.jpg" alt="User Image"/>
                  </Link>
                  <div className="profile-det-info">
                    <h3><Link to="/patient-profile">Robert Rhodes</Link></h3>
                    <div className="patient-details">
                      <h5><i className="far fa-clock"></i> 4 Nov 2023, 11.00 AM</h5>
                      <h5><i className="fas fa-map-marker-alt"></i> California, United States</h5>
                      <h5><i className="fas fa-envelope"></i> <Link to="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="42302d20273036302a2d26273102273a232f322e276c212d2f">[email&#160;protected]</Link></h5>
                      <h5 className="mb-0"><i className="fas fa-phone"></i> +1 858 259 5285</h5>
                    </div>
                  </div>
                </div>
                <div className="appointment-action">
                  <Link to="#" className="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
                    <i className="far fa-eye"></i> View
                  </Link>
                  <Link to="javascript:void(0);" className="btn btn-sm bg-success-light">
                    <i className="fas fa-check"></i> Accept
                  </Link>
                  <Link to="javascript:void(0);" className="btn btn-sm bg-danger-light">
                    <i className="fas fa-times"></i> Cancel
                  </Link>
                </div>
              </div>
              {/* <!-- /Appointment List --> */}
              
              {/* <!-- Appointment List --> */}
              <div className="appointment-list">
                <div className="profile-info-widget">
                  <Link to="/patient-profile" className="booking-doc-img">
                    <img src="/src/assets/img/patients/patient11.jpg" alt="User Image"/>
                  </Link>
                  <div className="profile-det-info">
                    <h3><Link to="/patient-profile">Harry Williams</Link></h3>
                    <div className="patient-details">
                      <h5><i className="far fa-clock"></i> 3 Nov 2023, 6.00 PM</h5>
                      <h5><i className="fas fa-map-marker-alt"></i> Colorado, United States</h5>
                      <h5><i className="fas fa-envelope"></i> <Link to="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d0b8b1a2a2a9a7b9bcbcb9b1bda390b5a8b1bda0bcb5feb3bfbd">[email&#160;protected]</Link></h5>
                      <h5 className="mb-0"><i className="fas fa-phone"></i> +1 303 607 7075</h5>
                    </div>
                  </div>
                </div>
                <div className="appointment-action">
                  <Link to="#" className="btn btn-sm bg-info-light" data-bs-toggle="modal" data-bs-target="#appt_details">
                    <i className="far fa-eye"></i> View
                  </Link>
                  <Link to="javascript:void(0);" className="btn btn-sm bg-success-light">
                    <i className="fas fa-check"></i> Accept
                  </Link>
                  <Link to="javascript:void(0);" className="btn btn-sm bg-danger-light">
                    <i className="fas fa-times"></i> Cancel
                  </Link>
                </div>
              </div>
              {/* <!-- /Appointment List --> */}
              
            </div>
          </div>
        </div>

      </div>

    </div>		
    </div>		
    {/* <!-- /Page Content --> */}
    
    </>
  )
}

export default Appointments