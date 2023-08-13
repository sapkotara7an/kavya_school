import React from 'react';
import { Container, Row, Col, Form, Nav, NavItem, Navbar,Button, NavDropdown} from 'react-bootstrap';
import  { FaRegUser,} from 'react-icons/fa6'
import { FaSearch, } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';




const HomeMenu= () =>{
   
    return(<>
    
    <Container fluid >
    <Row className="bg-success text-white justify-content-center px-5 pt-2  ">
        <Col ><p className=''>Welocme to Kavya School!!</p></Col>
        <Col className="ms-0 text-center">
            <Nav className='float-end gap-5'>
                <NavItem>calendar</NavItem>
                <NavItem>Routine</NavItem>
                <NavItem>Notifications</NavItem>
                <NavItem>Downloads</NavItem>
            </Nav>
        </Col>
    </Row>
    </Container>

    <Container fluid style={{background:"#F7F7F7", paddingTop:'20px'}}>
            <Row style={{padding:'0px 30px'}}>
                <Col lg={2}>
                    <img width='150px' src='https://kavya.edu.np/images/background/logo_kavya.png' alt='/'/>
                </Col>

                <Col lg={4} sm={4} >
                   <Form>
                    <Form.Group className='input-group'>
                    <Form.Control placeholder='search our courses...' style={{borderRadius:'10px 0px 0px 10px'}} />
                    <Button variant="success">
                        <FaSearch/>
                    </Button>
                   
                    </Form.Group>
                   </Form>
                </Col>

                <Col lg={4} sm={4} style={{padding: '0px 30px' }}>
                    <h4>Call us: +977 445673 </h4>
                    <p style={{color:'grey', fontSize:'14px' }}>from 8:00 to 21:00 (Mon-Sun) </p>
                </Col>

                <Col lg={2}style={{display:'inline-flex', fontSize:'18px', }} className='gap-4' >
               
                    <NavLink to='login'><FaRegUser className='text-success'/> Student Login</NavLink>
                    <NavLink to='register'>Register</NavLink>
                     
                       
                   
                </Col>
            </Row>

            <Row >

            
            <Navbar style={{textDecoration:'none'}}>
     
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5 "  >
            <NavLink className='' to='/'>Home</NavLink>
            <NavLink to='/error'>Admission</NavLink>
            <NavLink to='/error' >Curriculam
          </NavLink>
            <NavLink to='/error' >About US</NavLink>
            <NavLink to='/error'>Activities</NavLink>
            <NavLink to='/error'>News</NavLink>
            <NavLink to='/error'>Contact</NavLink>
           

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
          
            </Row>

            </Container>
            
            


                        

    
      

    

    </>
                    )
}

export default HomeMenu;