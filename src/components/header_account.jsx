import { Link } from 'react-router-dom'
//TODO Tenerary visibility  statement for login register (: ? )

const header_account = () => {
    return (
        <div>
            <Link to="/">Login</Link>
            <Link to="/">Sign Up</Link>
            

        </div>
    )
}

export default header_account 