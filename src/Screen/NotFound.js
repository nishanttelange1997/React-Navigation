import {Link} from "react-router-dom";
import logo from './img.jfif';
import "./Design.css";
import {Image,Button} from 'react-bootstrap';

function NotFound() {
    return (
      <div className="text-center" >
        <Image src={logo} alt="logo "/>
        <h2>Page NOT Found-404 Error</h2>
        <Button variant="warning"> <Link to="/" className="text-light ">HOME</Link></Button>
    
      </div>
    );
  }
  
  export default NotFound;
  