import { Link } from 'react-router-dom'
 
const header_user = () => {

    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    );
}

export default header_user