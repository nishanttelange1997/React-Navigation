
import {Link} from "react-router-dom";
import {Button,Image,Dropdown} from 'react-bootstrap';
import logo from './Screen/img.jfif';
import './Screen/Design.css';

function App() {
  return (
    <div className="text-center">
      <h1>Welcome to <Image src={logo} alt="logo" className="forimg1"/> Website</h1>
     <Button variant="success"> <Link to="/login" className="text-light">Login</Link></Button>{' '}
     <Button>  <Link to="/registration" className="text-light">Registration</Link></Button>

    </div>
  );
}

export default App;
