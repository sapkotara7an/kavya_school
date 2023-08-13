import { useState } from "react";
import { Button, Card, Col, Container, Nav, NavItem, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HomePageFooter from "./footer";
import { useNavigate } from 'react-router-dom';
import HomePageLayout from "../home.page.layout";





const LandingPage = () => {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    function handleClick() {
        navigate('/homepage'); 
      }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
         <Container fluid >
    <Row className="bg-success text-white justify-content-center p5-5 pt-2  ">
        
        <Col lg={2}>
                    <img className="bg-white" width='150px' src='https://kavya.edu.np/images/background/logo_kavya.png' alt='/'/></Col>

                    <Col lg={6}>
        
        <h2 className=''>Welocme to Kavya School!!</h2>
                <p>Please login for more info...</p>
        </Col>
        <Col lang={4} className="ms-0 text-center">
            <Nav className='float-end gap-5'>
                <NavItem>calendar</NavItem>
                <NavItem>Routine</NavItem>
                <NavItem>Events</NavItem>
                <NavItem>Downloads</NavItem>
            </Nav>
        </Col>
    </Row>
    </Container>

         <main>
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">


                            <Card
                            

                                bg={"success"}
                                key={'dark'}
                                className="mb-2 shadow-lg border-0 rounded-lg mt-5">

                                <Card.Header  >
                                   <NavLink> <h3 className="text-center text-white my-4 ">Login</h3></NavLink>
                                    
                                    </Card.Header>
                                <Card.Body style={{display:'block'}}>
                                    <Row>
                                        <Col lg={3} className="text-white">Username:</Col>
                                    <Col offset={9}>
                                    <input className="w-100 mb-3" placeholder="user name..."/>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} className="text-white">Password:</Col>
                                    <Col offset={9}>
                                    <input className="w-100 mb-3" placeholder="password..."/>
                                    </Col>
                                    </Row>


                                    <div className="form-check mb-3">
                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                        <label className="form-check-label text-white" for="inputRememberPassword">Remember Password</label>
                                    </div>
                                    <div className="float-end align-items-center justify-content-between mt-4 mb-0 text-white">
                                       
                                        <NavLink className='text-white me-5' to="/register">Register</NavLink>

                                        <Button onClick={handleClick} size='sm' variant='primary' type="submit">
                                            Login
                                        </Button>
                                    </div>




                                </Card.Body>
                            </Card>




                        </div>
                    </div>
                </div>
            </main>
            <HomePageFooter/>
        </>
    )
}

export default LandingPage;