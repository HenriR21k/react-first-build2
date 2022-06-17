import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    // Properties ----------------------------
    // Hooks ---------------------------------
    // Context -------------------------------
    // Methods -------------------------------
    // View ---------------------------------

    return (
        <header>
            <Link to="/">
                <img src = "https://img.icons8.com/bubbles/344/bbb.png"/>
            </Link>
            <Link to="/">
                <h1>My Learning</h1>
            </Link>
            <div className = "login">
                <p>Welcome Henri!</p>
            </div>
        </header>

    )

}

export default Header;