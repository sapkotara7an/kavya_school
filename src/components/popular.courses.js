import {  Card, Col, Container, Row } from "react-bootstrap";





const PopularCourses = () => {
    return (
        <>
        <Container fluid className="mt-3 px-5">
        <h2 style={{fontWeight:'bold'}} className=" mb-5">Popular Courses!!</h2>
        <Row className="mb-4">
        

            <Col lg={12}  className="d-flex gap-3">
          
            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoa-ft6M43toNHyuPz4f0fx36EClGI9DLCg&usqp=CAU" />
      <Card.Body>
        <Card.Title>IT Courses</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
       
        
      </Card.Body>
            </Card>



            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbq4pIkXftXfNsMzmd1zbN4DXN4AtO1JNCw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Management Courses</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7xxu2cXKH-DFdqsyZJdnqC3Ue1zbUZUwNQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Journalism and Public Relation Courses

        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            





            </Col>
        </Row>

        <Row className="mb-4">
        

            <Col lg={12}  className="d-flex gap-3">
            
           


       


           


            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoa-ft6M43toNHyuPz4f0fx36EClGI9DLCg&usqp=CAU" />
      <Card.Body>
        <Card.Title>Business Law</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
       
        
      </Card.Body>
            </Card>



            <Card className="col-lg-4 col-sm-12 col-xs-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbq4pIkXftXfNsMzmd1zbN4DXN4AtO1JNCw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Engineering</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            <Card className="col-lg-4 col-sm-12">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7xxu2cXKH-DFdqsyZJdnqC3Ue1zbUZUwNQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Technical Courses</Card.Title>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        
        
      </Card.Body>
            </Card>

            





            </Col>
        </Row>

       


        </Container>
        
        </>
    )
}


export default PopularCourses;