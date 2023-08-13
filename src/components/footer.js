import { Col, Container, Row, } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";





const HomePageFooter =() =>{
    return (
        <>
        <Container fluid>

        <footer  className='text-center text-lg-start text-muted bg-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-success'>
        <div className='me-5 d-none d-lg-block  text-white'>
          <span> <FaPaperPlane className="mx-2"/>Subscribe to our Newsletter to get connected..</span>
        </div>

        
      </section>

      <section className=''>
        <Container fluid className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
            
           <img src="https://kavya.edu.np/images/background/logo_kavya.png" alt="/" width ="150px"/>
              </h6>
              <p>
              Kavya is a coeducational day and boarding school for grades I to X.
               We welcome and enroll students of all faiths, races, and backgrounds,
               and offer various need-based scholarships each year.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Recent Events</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Award Ceremony
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Extra Activities
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Quiz Program
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Awareness
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigation</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gallery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Calendar
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Event
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              
                Buddhanagar, Kathmandu
              </p>
              <p>
               
                info@example.com
              </p>
              <p>
                 01-4456372
              </p>
              <p>
                 01-44537265
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <hr/>

      <div className='text-center p-4' >
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://kavya.com/'>
          Kavya.com
        </a>
      </div>
    </footer>

        </Container>
        
        
        </>
    )
}


export default HomePageFooter;
