// Import necessary MDB components
import React, { useState, useEffect } from 'react';
import './SkillsPage.css';
import "./LandingPage.css";
import './Profile.css';
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

const SkillsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setIsVisible(true);
  }, []);

 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const handleResumeClick = () => {
    setShowResumeModal(true);
  };

  const handleCloseResumeModal = () => {
    setShowResumeModal(false);
  };

  return (
    <section className={`profile-container ${isVisible ? 'visible' : ''}`} >
      <MDBContainer className="py-2">
        <MDBRow className="new">
            <MDBCol className='fa-lg2'>
          
                <a className={`menu ${isSidebarOpen ? 'sidebar-open' : ''}`} href='#' onClick={toggleSidebar} >
                  <button className={`btn menu-button ${isSidebarOpen ? 'raised' : ''}`} style={{ color: 'white', fontSize: '2rem', padding: '10px 20px', border: '1px solid #ddd', textShadow: '2px 2px 4px #000' }}>
                    <i className={`bi bi-house-down-fill ${isSidebarOpen ? '' : ''}`}></i> Menu
                  </button>
                </a>
              
            
            </MDBCol>
          
          
            </MDBRow>
              <br />
              <hr />
            <MDBRow>
              {isSidebarOpen && (
                <MDBCol lg="2" className={`d-lg-block ${isSidebarOpen ? 'raised' : ''}`}>
                  {/* Sidebar content */}
                  <div>
                    <br />
                  <Navbar />
              
                  </div>
                </MDBCol>
                  )}
                  <MDBCol  md={isSidebarOpen ? '10' : '12'} >
                    {/* Main content */}
                    <MDBCarousel className='main'>
                      <MDBCarouselItem itemId={1}>
                        <div className="d-flexbox justify-content-center align-items-center image-card ">
                          {/* Center the image and make it square */}
                        </div>
                        <div className="centered-content-container">
                          <MDBCarouselCaption>
                            <MDBContainer className="py-5">
                              <MDBRow>
                              <h1><MDBCardText className="mb-4"><span className="text-primary font-italic me-1 ">Web Development</span> Skills</MDBCardText></h1>
                                <MDBCol className="skills-card ">
                                  <MDBCol  >
                                      <MDBCard className="first " id="skills2">
                                          <MDBCardBody >
                                            <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 "><strong style={{fontSize: '18px'}}>Frontend Development</strong></span> <hr /></MDBCardText>
                                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}></MDBCardText>

                                            <MDBCardText className="mt-4 mb-1 " >HTML5</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1 " >CSS3</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1 " >Responsive Web Design</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1" >ReactJS</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1">JavaScript </MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                          {/* Add more skills as needed */}
                                        </MDBCardBody>
                                    </MDBCard>
                                  </MDBCol>

                                        <MDBCol>
                                          <MDBCard className="first " id="skills2" >
                                            <MDBCardBody >
                                              <MDBCardText className="mb-4"><span className="text-primary font-italic "><strong style={{fontSize: '18px'}}>Backend Development</strong></span> <hr /></MDBCardText>
                                              

                                              <MDBCardText className="mt-4 mb-1 " >NodeJS/ExpressJS</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1 " >APIs (REST, GraphQL)</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              
                                            
                                              {/* Add more skills as needed */}
                                            </MDBCardBody>
                                          </MDBCard>
                                        </MDBCol>

                                        <MDBCol>
                                          <MDBCard className="first " id="skills2">
                                              <MDBCardBody >
                                              <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 "><strong style={{fontSize: '18px'}}>Version Control System</strong></span><hr /></MDBCardText>
                                              <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}><strong><em></em></strong></MDBCardText>
                                              <MDBCardText className="mt-4 mb-1 " >Git</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1 " >Github</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              {/* Add more skills as needed */}
                                            </MDBCardBody>
                                          </MDBCard>
                                        </MDBCol>

                                        <MDBCol>
                                          <MDBCard className="first " id="skills2">
                                              <MDBCardBody >
                                              <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 "><strong style={{fontSize: '18px'}}>Databases</strong></span><hr /></MDBCardText>

                                              <MDBCardText className="mt-4 mb-1 " >PostgreSQL</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1 " >MySQL</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1" >MongoDB</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                            
                                              {/* Add more skills as needed */}
                                            </MDBCardBody>
                                          </MDBCard>
                                        </MDBCol>
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
                    <MDBRow>
                      
                        
                  </MDBRow>
                  <MDBCol  md={isSidebarOpen ? '10' : '12'} >
                    {/* Main content */}
                    <MDBCarousel className='main'>
                      <MDBCarouselItem itemId={1}>
                        <div className="d-flexbox justify-content-center align-items-center image-card ">
                          {/* Center the image and make it square */}
                        </div>
                        <div className="centered-content-container">
                          <MDBCarouselCaption>
                            <MDBContainer className="py-5">
                              <MDBRow>
                              <h1><MDBCardText className="mb-4"><span className="text-primary font-italic me-1 ">Web Development</span> Skills</MDBCardText></h1>
                                <MDBCol className="skills-card ">
                                  <MDBCol  >
                                      <MDBCard className="first " id="skills2">
                                          <MDBCardBody >
                                            <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 "><strong style={{fontSize: '18px'}}>Frontend Development</strong></span> <hr /></MDBCardText>
                                            <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}></MDBCardText>

                                            <MDBCardText className="mt-4 mb-1 " >HTML5</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1 " >CSS3</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1 " >Responsive Web Design</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1" >ReactJS</MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                            <MDBCardText className="mt-4 mb-1">JavaScript </MDBCardText>
                                            <MDBProgress className="rounded">
                                              <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                            </MDBProgress>

                                          {/* Add more skills as needed */}
                                        </MDBCardBody>
                                    </MDBCard>
                                  </MDBCol>

                                        <MDBCol>
                                          <MDBCard className="first " id="skills2" >
                                            <MDBCardBody >
                                              <MDBCardText className="mb-4"><span className="text-primary font-italic "><strong style={{fontSize: '18px'}}>Backend Development</strong></span> <hr /></MDBCardText>
                                              

                                              <MDBCardText className="mt-4 mb-1 " >NodeJS/ExpressJS</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1 " >APIs (REST, GraphQL)</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              
                                            
                                              {/* Add more skills as needed */}
                                            </MDBCardBody>
                                          </MDBCard>
                                        </MDBCol>

                                        <MDBCol>
                                          <MDBCard className="first " id="skills2">
                                              <MDBCardBody >
                                              <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 "><strong style={{fontSize: '18px'}}>Version Control System</strong></span><hr /></MDBCardText>
                                              <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}><strong><em></em></strong></MDBCardText>
                                              <MDBCardText className="mt-4 mb-1 " >Git</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1 " >Github</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              {/* Add more skills as needed */}
                                            </MDBCardBody>
                                          </MDBCard>
                                        </MDBCol>

                                        <MDBCol>
                                          <MDBCard className="first " id="skills2">
                                              <MDBCardBody >
                                              <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 "><strong style={{fontSize: '18px'}}>Databases</strong></span><hr /></MDBCardText>

                                              <MDBCardText className="mt-4 mb-1 " >PostgreSQL</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1 " >MySQL</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={90} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                              <MDBCardText className="mt-4 mb-1" >MongoDB</MDBCardText>
                                              <MDBProgress className="rounded">
                                                <MDBProgressBar width={85} valuemin={0} valuemax={100} />
                                              </MDBProgress>

                                            
                                              {/* Add more skills as needed */}
                                            </MDBCardBody>
                                          </MDBCard>
                                        </MDBCol>
                                      </MDBCol>  
                                      
                                    </MDBRow>
                                    
                                  </MDBContainer>
                                  
                                </MDBCarouselCaption>
                              </div>
                            </MDBCarouselItem> 
                            </MDBCarousel>
                          </MDBCol>
      </MDBContainer>
     
      
        <MDBCol md={isSidebarOpen ? '6' : '12'}>
          <MDBCard className="mb-4 mb-md-0">
            <MDBCardBody>
            
            
              

              <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Tools:</MDBCardText>
              <ul>
                <li>Git, and GitHub</li>
                <li>Postman</li>
              </ul>

              <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Best Practices:</MDBCardText>
              <ul>
                <li>UX/UI Fundamentals (Figma)</li>
                <li>Agile Methodologies (SCRUM)</li>
                <li>SEO</li>
                <li>Project Management (Trello, JIRA)</li>
              </ul>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
     
      <FooterPage  />
    </section>
  );
};

export default SkillsPage;
