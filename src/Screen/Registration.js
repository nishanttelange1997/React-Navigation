import {Link} from "react-router-dom";
import {Button,Form,Image} from 'react-bootstrap';
import logo from "./img.jfif"
import "./Design.css";
function Registration() {
    return ( 
    <div>
    <div className=" row " >
  
    <div className="col-lg-4"> </div>
         
      <div className="col-lg-4 fordiv2">    
      <Image src={logo} alt="logo " className="forimg"/>
      <h3 className="text-center text-info">Registration Form</h3>
<Form>
    <Form.Group>
    <Form.Label>Name<span className="text-danger"> *</span></Form.Label>
    <Form.Control  required type="text" placeholder="Enter Your Full Name">
      </Form.Control>
      </Form.Group>
    <Form.Group>
    <Form.Label>Mobile Number <span className="text-danger"> *</span></Form.Label>
    <Form.Control required type="text" placeholder="Enter Your Mobile Number"></Form.Control>
    </Form.Group>
    <Form.Group>
    <Form.Label>Date Of Birth</Form.Label>
    <Form.Control type="date" placeholder="Enter Your Birth Date"></Form.Control>
    </Form.Group ><Form.Group>
    <Form.Label>Education <span className="text-danger">*</span></Form.Label>
        <Form.Check type="checkbox" label="SSC" />
         <Form.Check type="checkbox" label="HSC" /> 
         <Form.Check type="checkbox" label="UG" />
        <Form.Check type="checkbox" label="PG"/>
      </Form.Group>
    
    <Form.Group>
    <Form.Label>City</Form.Label>
    <Form.Control required as="select" placeholder="Select Your City " >
      <option>Pune</option> 
      <option>Amravati</option>
      <option>Mumbai</option>
      <option>Pusad</option>
      <option>Hyderabad</option>
      <option>Delhi</option>
    </Form.Control>
    </Form.Group>
    <Form.Group>
    <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
    <Form.Control  required type="email" placeholder="Enter Your Email Address"></Form.Control>
    </Form.Group>
    <Form.Group>
    <Form.Label>Password<span className="text-danger"></span></Form.Label>
    <Form.Control required type="password" placeholder="Enter Your Password"></Form.Control>
    </Form.Group>
    
      <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Upload You ID Proof" />
      </Form.Group>
      <Button className="outline-success" >SUBMIT</Button>{' '}
    <Button  variant="success ">  <Link to="/login" className="text-light">Login</Link></Button>
    
  </Form>

  </div>
  </div>
  
  

    <div className="col-lg-4">
      </div>
</div>  
    );
  }
  
  export default Registration;