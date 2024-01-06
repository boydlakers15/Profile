import React, { useCallback, useEffect, useRef, useState } from "react";

import '../App.css'
import './Profile.css'
import img2 from "./IMG/j.png";
import img3 from "./IMG/pexels.jpg";
import img4 from "./IMG/jared.boyd.10.png";
import img5 from "./IMG/facebook.png";
import img6 from "./IMG/LINKEDIN.png";
import img7 from "./IMG/Github.png";
import PDFFile from "./IMG/Jared-Boyd.pdf";
//import img7 from "../src/components/IMG/facebook.png";
import Navbar from './Navbar.js';
import FooterPage from './FooterPage.js';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBFooter,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



 function Profile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showFacebookModal, setShowFacebookModal] = useState(false);
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [intervalId, setIntervalId] = useState();


  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setIsVisible(true);
  }, []);

  const handleGithubIconClick = () => {
    setShowGithubModal(true);
  };

  const handleCloseGithubModal = () => {
    setShowGithubModal(false);
  };

  const handleLinkedInIconClick = () => {
    setShowLinkedInModal(true);
  };

  const handleCloseLinkedInModal = () => {
    setShowLinkedInModal(false);
  };
  const handleFacebookIconClick = () => {
    setShowFacebookModal(true);
  };

  const handleCloseFacebookModal = () => {
    setShowFacebookModal(false);
  };

  const handleCloseInstagramModal = () => {
    setShowInstagramModal(false);
  };

  const handleInstagramIconClick = () => {
    setShowInstagramModal(true);
  };

 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

   
  };

  const handleResumeClick = () => {
    setShowResumeModal(true);
  };

  const handleCloseResumeModal = () => {
    setShowResumeModal(false);
  };

  const openFacebookLinkInPopup = (url) => {
    const width = 1000;
    const height = 600;

    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      'Facebook Popup',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  const openLinkedInLinkInPopup = (url) => {
    const width = 1000;
    const height = 600;

    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      'LinkedIn Popup',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  const openGithubLinkInPopup = (url) => {
    const width = 1000;
    const height = 600;

    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      'Github Popup',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  const openInstagramLinkInPopup = (url) => {
    const width = 1000;
    const height = 600;

    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      'Instagram Popup',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };
  
  return (
    <section className={`profile-container ${isVisible ? 'visible' : ''}`} >
      <MDBContainer className="py-2">
        <MDBRow>
        <MDBCol className='fa-lg2'>
      
            <a className={`menu ${isSidebarOpen ? 'sidebar-open' : ''}`} href='#' onClick={toggleSidebar} >
              <button className={`btn ${isSidebarOpen ? 'raised' : ''}`} style={{ color: 'white', fontSize: '2rem', padding: '10px 20px', border: '1px solid #ddd', textShadow: '2px 2px 4px #000' }}>
                <i className={`bi bi-house-down-fill ${isSidebarOpen ? '' : ''}`}></i> Menu
              </button>
            </a>
           
         
        </MDBCol>
       
      
        </MDBRow>
        <br />
       <hr />
        <MDBRow>
          {isSidebarOpen && (
            <MDBCol lg="2" className={`d-none d-lg-block ${isSidebarOpen ? 'raised' : ''}`}>
            {/* Sidebar content */}
            <div >
              <br />
              <Navbar  />
            </div>
          </MDBCol>
          )}
          <MDBCol md={isSidebarOpen ? '10' : '12'}>
            {/* Main content */}
            <MDBCarousel className='main'>
              <MDBCarouselItem  itemId={1}>
                <div className="d-flex justify-content-center align-items-center image-card " >
                  {/* Center the image and make it square */}
                  
                </div>
                <div className="centered-content-container">
                  <MDBCarouselCaption>
                    <MDBContainer className="py-5">
                      <MDBRow>
                        <MDBCol md="4" style={{ marginTop: '40px' }}>
                          <MDBCardImage
                            src={img2}
                            alt="avatar"
                            className="square  mb-1 fa-lg2 "
                            style={{ width: '180px' }}
                            fluid
                          />
                          <MDBCard className="mb-4 " style={{
                            transform: 'perspective(1000px) rotateY(10deg) translateZ(50px)',
                             // Adjust alpha value for transparency
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',  // Add box shadow for a subtle fade
                          }}>
                            <MDBCardBody className="text-center main2">
                              <h4 className="text-muted mb-1">Full Stack Developer</h4>
                              <p className="text-muted">Baden-Baden, Baden Württemberg, DE</p>
                              <div className="d-flex justify-content-center">
                                <MDBBtn onClick={handleResumeClick} className="mt-1 fa-lg2  resume-button">
                                  Résumé
                                </MDBBtn>
                              </div>
                              <Modal show={showResumeModal} onHide={handleCloseResumeModal} size="xl">
                                <Modal.Header closeButton>
                                  <Modal.Title>Résumé</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <embed src={PDFFile} type="application/pdf" width="100%" height="700px" />
                                  <Button variant="secondary" onClick={handleCloseResumeModal}>
                                    Close
                                  </Button>
                                </Modal.Body>
                              </Modal>
                            </MDBCardBody>
                          </MDBCard>
                        </MDBCol>
                        <MDBCol md="8" className='p-3' >
                        <MDBCard className=" card-with-fade" >
                            <MDBCardBody >
                              <MDBRow >
                                <MDBCol sm="3">
                                  <MDBCardText>Full Name</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">Jared Boyd</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Email</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">jboyd115@icloud.com</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Mobile</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">+491778805055</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                              <hr />
                              <MDBRow>
                                <MDBCol sm="3">
                                  <MDBCardText>Address</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="9">
                                  <MDBCardText className="text-muted">Baden-Baden, Baden Württemberg ,DE</MDBCardText>
                                </MDBCol>
                              </MDBRow>
                            </MDBCardBody>
                          </MDBCard>
                         
                          <MDBCardBody className="p-3 rounded-3 ">
                            <MDBListGroup flush className="rounded-4 ">
                               <MDBListGroupItem  className="rounded-3 d-flex justify-content-between align-items-center  mb-1 p-3 card-with-fade-right card1" >
                                  <a href='#' onClick={handleFacebookIconClick} className='me-4 text-reset'>
                                  <MDBIcon fab icon="facebook fa-lg card1" style={{ color: '#3b5998' }} />
                                  </a>
                                  <MDBCardText><a className=" facebook fa-lg1 card1left" href='javascript:void(0);'
                                    onClick={() => openFacebookLinkInPopup('https://www.facebook.com/jared.boyd.10')} >Facebook</a></MDBCardText>
                                </MDBListGroupItem> 
                                
                                <MDBListGroupItem className="rounded-3 d-flex justify-content-between align-items-center mb-1 p-3 card-with-fade-right card2">
                                  <a href='#' onClick={handleGithubIconClick} className='me-4 text-reset'>
                                  <MDBIcon fab icon="github fa-lg card2" style={{ color: '#333333' }} />
                                  </a>
                                  <MDBCardText><a className=" github fa-lg1 card1left" href='javascript:void(0);'
                                    onClick={() => openGithubLinkInPopup('https://github.com/boydlakers15')}>Github</a></MDBCardText>
                                </MDBListGroupItem>
                               
                                <MDBListGroupItem className="rounded-3 d-flex justify-content-between align-items-center mb-1 p-3 card-with-fade-right card3">
                                  <a href='#'  onClick={handleLinkedInIconClick} className='me-4 text-reset'>
                                  <MDBIcon fab icon="linkedin fa-lg card3" style={{ color: '#55acee' }} />
                                  </a>
                                  <MDBCardText><a className=" linkedin fa-lg1 card1left" href='javascript:void(0);'
                                    onClick={() => openLinkedInLinkInPopup('https://www.linkedin.com/in/jared-boyd-89963b266/')}>LinkedIn</a></MDBCardText>
                                </MDBListGroupItem>
                             
                                <MDBListGroupItem className="rounded-3 d-flex justify-content-between align-items-center p-3 card-with-fade-right card4">
                                <a href='#' onClick={handleInstagramIconClick} className='me-4 text-reset'>
                                  <MDBIcon fab icon="instagram fa-lg card4" style={{ color: '#ac2bac' }} />
                                  </a>
                                  <MDBCardText><a className=" instagram fa-lg1 card1left" href='javascript:void(0);'
                                    onClick={() => openInstagramLinkInPopup('https://www.instagram.com/jared.boyd.10/')}>Instagram</a></MDBCardText>
                                </MDBListGroupItem>
                                
                              </MDBListGroup>
                            </MDBCardBody>
                          
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBCarouselCaption>
                </div>
            </MDBCarouselItem> 
          </MDBCarousel>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow className="skills-card ">
            <MDBCol  md="6" >
              <MDBCard className="first " id="skills2" >
                <MDBCardBody >
                  <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 ">Web Development</span> Skills</MDBCardText>

                  <MDBCardText className="mt-4 mb-1 " >HTML</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" >CSS</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1">JavaScript</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  {/* Add more skills as needed */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol md="6">
              <MDBCard className="mb-4 mb-md-0 second" id="skills2">
                <MDBCardBody className="" >
                  <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">App Development</span> Skills</MDBCardText>

                  <MDBCardText className="mt-4 mb-1" >React Native</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar className="" width={85} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1">Swift</MDBCardText>
                  <MDBProgress className="rounded ">
                    <MDBProgressBar className="" width={75} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  <MDBCardText className="mt-4 mb-1" >Android (Java/Kotlin)</MDBCardText>
                  <MDBProgress className="rounded">
                    <MDBProgressBar  width={70} valuemin={0} valuemax={100} />
                  </MDBProgress>

                  {/* Add more skills as needed */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
     
      <Modal show={showFacebookModal} onHide={handleCloseFacebookModal}>
        <Modal.Header closeButton>
          <Modal.Title>Follow on Facebook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img5} alt="Facebook Icon" className="img-fluid" />
          {/* Additional content if needed */}
          <p className="text-muted mb-1">Follow Jared Boyd on Facebook?</p>
          <Button variant="secondary" onClick={handleCloseFacebookModal}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showInstagramModal} onHide={handleCloseInstagramModal}>
        <Modal.Header closeButton>
          <Modal.Title>Follow on Instagram</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img4} alt="Instagram Icon" className="img-fluid" />
          {/* Additional content if needed */}
          <p className="text-muted mb-1">Follow Jared Boyd on Instagram?</p>
          <Button variant="secondary" onClick={handleCloseInstagramModal}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showLinkedInModal} onHide={handleCloseLinkedInModal}>
        <Modal.Header closeButton>
          <Modal.Title>Follow on Instagram</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img6} alt="Linkedin Icon" className="img-fluid" />
          {/* Additional content if needed */}
          <p className="text-muted mb-1">Follow Jared Boyd on Linkedin?</p>
          <Button variant="secondary" onClick={handleCloseLinkedInModal}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showGithubModal} onHide={handleCloseGithubModal}>
        <Modal.Header closeButton>
          <Modal.Title>Follow on Github</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img7} alt="Github Icon" className="img-fluid" />
          {/* Additional content if needed */}
          <p className="text-muted mb-1">Follow Jared Boyd on Github?</p>
          <Button variant="secondary" onClick={handleCloseGithubModal}>
            Close
          </Button>
          
        </Modal.Body>
      </Modal>
     
      <FooterPage  />
    </section>
  );
}
export default Profile

