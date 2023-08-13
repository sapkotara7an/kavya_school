import { Carousel, Col, Container, Row } from "react-bootstrap"


const Banner =() => {
    return(
        <>
         <Carousel>
      <Carousel.Item>
        < img  className="w-100" src="	https://ingrails.com/school/assets/gallery/fyL0kxJw9877wfYs.jpg" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src="https://ingrails.com/school/assets/gallery/0S1tXQuKni99Vrbs.jpg" text="Second slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src="https://veda-app.s3.ap-south-1.amazonaws.com/assets/118/gallery/2023-02-17/oiS2UVxNGTUl0ZoN-1676624899.jpg" text="Third slide" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Container fluid className='mt-4'>
      <Row>
        <Col lg={7} className="p-5">
        <h4>Welcome to </h4>
        <h1>Kavya School</h1>
        <p>Kavya is a coeducational day and boarding school for grades I to X. We welcome and enroll students of all faiths, races, and backgrounds, and offer various need-based scholarships each year. We have small class size which enables staff to build strong relationship with the children, know their families well and work teachers and parents together as a team for the benefit of the children in our care. Each child is fully supported at each stage of learning.<br/>

We are guided by "Parents in school" and "Teachers at Home" principle where staff, teachers, students and parents work together in a safe, caring and tolerant community to provide holistic environment with respect and dignity. This enables the students to achieve emotional, social, physical, moral and spiritual development. In this partnership, Kavya focuses on integrity in technology, skills and value to teamwork in diversified community incorporating local 
brains with global ideas. All members of the school community will model the behaviors expected from the students. In doing this, the school will be a centre of excellence at the forefront of education, community development and environment awareness.</p>

        </Col>

        <Col lg={4}className="p-5 d-flex gap-3">
          <div> 
                                  <img width='300px' src="https://veda-app.s3.ap-south-1.amazonaws.com/assets/veda-media-digitalocean/assets/about/2AyYHMLjkB6yojBi.jpg"/>
"
                                </div>
          <div>
          <h3 className="mb-2">PRINCIPAL'S MESSAGE</h3>
            <p>It is both my pleasure and privilege to welcome you to Kavya, a school with a new vision. We have successfully completed the sixth year, the most challenging<a href="#">Read More</a>
                                </p></div>

        
        </Col>
      </Row>
    </Container>
        </>
    )
}

export default Banner;