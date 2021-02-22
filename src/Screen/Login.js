import {Link} from "react-router-dom";
import {Button,Form,Image} from 'react-bootstrap';
import logo from './img.jfif';
import "./Design.css";
function Login() {
    return (
      <div>
       <div className="row">
    <div className="col-lg-4"></div>
    <div className="col-lg-4 fordiv2">
    <Image src={logo} alt="logo" className="forimg"/>
      <Form>
<Form.Group  >
<Form.Label>Mobile Number <span className="text-danger"> *</span></Form.Label>
<Form.Control required type="text" placeholder="Enter Your Mobile Number"></Form.Control>
</Form.Group>
<Form.Group>
<Form.Label>Password <span className="text-danger"> *</span></Form.Label>
<Form.Control required type="password" placeholder="Enter Your Password"></Form.Control>
</Form.Group>

<Button className="danger ">Login</Button>{'     '}
<Button variant="success">  <Link to="/registration" className="text-light">Registration</Link></Button>{' '}
<Button variant="warning" > <Link to="/" className="text-light">HOME</Link></Button>
</Form>
</div>


</div>


<div className="col-lg-4"></div>

     
        
      </div>
    );
  }
  
  export default Login;
  