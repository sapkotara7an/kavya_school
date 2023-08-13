import { useState } from "react";
import { Button, Card, Col, Row, } from "react-bootstrap";
import { Form, NavLink } from "react-router-dom";


const LoginPage = () => {

    const [validated, setValidated] = useState(false);

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
            <main>
                <div className="container mb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">


                            <Card
                            

                                bg={"success"}
                                key={'dark'}
                                className="mb-2 shadow-lg border-0 rounded-lg mt-5">

                                <Card.Header ><h3 className="text-center text-white my-4 ">Login</h3></Card.Header>
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
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0 text-white">
                                        <NavLink className='text-white' to='/'>Forgot Password?</NavLink>
                                        or
                                        <NavLink className='text-white' to="/register">Register</NavLink>

                                        <Button size='sm' variant='primary' type="submit">
                                            Login
                                        </Button>
                                    </div>




                                </Card.Body>
                            </Card>




                        </div>
                    </div>
                </div>
            </main>

        </>

    )
}

export default LoginPage;