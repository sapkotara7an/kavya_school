import { useFormik } from "formik";
import * as Yup from 'yup';
import { Button, Card, Col, Form,  } from "react-bootstrap";
import { FaPaperPlane, FaTrash } from "react-icons/fa6";








const RegisterPage = () => {

  
 

const userSchema = Yup.object({
  
    name: Yup.string().required(),
    email:Yup.string().email().required(),
    role: Yup.string().matches(/customer|seller/),
    phone:Yup.string().nullable(),
    address: Yup.string(),
    image: Yup.string()
                
})

     
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      role:'',
      phone:'',
      address:'',
      image:''
                  },
               

   validationSchema: userSchema,

})

  

  return (
    <>

      <main>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className=" col-sm-12 col-lg-8 col-md-10">


              <Card
                
              
                key={'dark'}
                

                className="mb-2  border-0 rounded-lg mt-5 bg-success"
                
                >
              
                <Card.Header className=" text-white" ><h3 className="text-center  my-4">User Registration</h3></Card.Header>
                <Card.Body style={{width:'90%'}}>


                  <Form onSubmit={formik.handleSubmit}>
                   
                      <Form.Group className="row mb-3" controlId="formGridName">
                        <Form.Label className="text-white col-sm-3">Name</Form.Label>
                        <Col sm={9}>

                        <Form.Control
                        name="name"
                        onChange={formik.handleChange}
                         size="sm"
                          type="text"
                          placeholder="Enter your Full Name"
                          />
                          <span className="text-white">{formik.errors?.name}</span>
                            
                        </Col>
                      </Form.Group>


                    

                    <Form.Group controlId="formGridEmail" className=" row mb-3 text-white">
                      <Form.Label className="col-sm-3">Email</Form.Label>
                      <Col sm={9}>
                      <Form.Control 
                       size="sm" 
                       type="email" 
                       name="email" 
                       onChange={formik.handleChange}
                       placeholder=" Email" />
                       <span className="text-white">{formik.errors?.email}</span>
                      </Col>
                    </Form.Group>

                    <Form.Group className="mb-3 row text-white" controlId="formGridAddress2" >
                      <Form.Label className="col-sm-3">Phone no.</Form.Label>
                      <Col sm={9}>
                      <Form.Control
                       onChange={formik.handleChange} 
                       name="Phone" 
                       size="sm"
                        type="tel"
                         placeholder="Phone Number" />
                         <span className="text-danger">{formik.errors?.phone}</span>
                      </Col>
                      
                    </Form.Group>

                    <Form.Group className="mb-3 row text-white" controlId="formGridAddress2" >
                      <Form.Label className="col-sm-3">Address</Form.Label>
                      <Col sm={9}>
                      <Form.Control
                      as={'textarea'}
                      size="sm"
                      rows={5}
                      name="address"
                      onChange={formik.handleChange}
                      />
                      <span className="text-danger">{formik.errors?.address}</span>
                      </Col>
                      
                    </Form.Group>

                   


                     


                      <Form.Group className="=mb-3 row text-white" controlId="formGridImage">
                        <Form.Label className="col-sm-3">Image</Form.Label>
                        <Col sm={7}>
                        <Form.Control 
                        size="sm"
                        name="images" 
                        onChange={(e) => {
                          //single file upload
                          //{0:uploadedFileObject}
                          //{0:uploaded, 1: uploaded}
                          let single = e.target.files[0];
                         if(single){
                          let ext = (single.name.split(".")).pop();
                          console.log(single, single.size)

                          if(['jpg','jpeg', 'png', 'bmp', 'svg', 'webp'].includes(ext.toLowerCase())){

                            if(single.size <=5000000){
                              formik.setValues({
                                ...formik.values,
                                image: single
                              })
                            }else{
                              formik.setErrors({
                                ...formik.errors,
                                image: "File size should be less than 5mb"
                              })
                            }
                            
                          }else{
                            formik.setErrors({
                              ...formik.errors,
                              image: "Image can not be null/empty"
                            })
                          }

                         

                          // formik.setErrors({
                          //   ...formik.errors,
                          //   image: "Error Msg"
                          // })


                         }else{
                         formik.setValues({
                          ...formik.values,
                          image: null
                         })
                         }

                        }} 

                        type="file" 
                        />
                        <span className="text-danger">{formik.errors && formik.touched.image ?formik.errors.image : ''}</span>
                        
                        </Col>

                        <Col sm={2}>
                          {
                            formik.values && formik.values.image && typeof (formik.values.image)=== 'object'
                            ? 
                            <img src={URL.createObjectURL(formik.values.image)} className="img img-fluid" alt=""/>
                            :<></>
                          }
                        </Col>

                      
                      </Form.Group>

                      <Form.Group className="mt-3 mb-3 justify-content-end">
                        <Col sm={{offset:3, span: 9}}>

                        <Button size="sm" variant="danger"type="reset" className="me-3">
                        <FaTrash/>&nbsp; &nbsp; Delete
                        </Button>
                        
                        <Button  size="sm" variant="primary"type="submit">
                        <FaPaperPlane/>&nbsp; &nbsp; Submit
                        </Button>
                          
                      
                    
                        </Col>
                      </Form.Group>
                  </Form>


                </Card.Body>
              </Card>




            </div>
          </div>
        </div>
      </main>

    </>
  )
}


export default RegisterPage;