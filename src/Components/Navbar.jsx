import {Link} from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';
import './Navbar.css';

function Navbar(){
    
    return(
        <>
        
        <nav className='nav-bar'>
            <div className='nav-brand'>
                <Link to="/" className="brand-link">
                    <span className="brand-icon"></span>
                    <span className="brand-text">Weather Now</span>
                </Link>
            </div>
            <div className='nav-links'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
            
        </nav>
        
        </>
    );
}

export default Navbar;