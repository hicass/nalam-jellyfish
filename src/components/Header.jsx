import { Link } from 'react-router-dom';
import logo from '../assets/nalamlogo.png';
import navigateBefore from '../assets/navigate-before.png';

export default function Header() {
  return (
    <>
      <div className="px-16 pt-6 flex relative">
        <Link to="/donor" className="absolute">
          <img src={navigateBefore} alt="Back arrow" className="w-10 pt-5" />
        </Link>
        <Link to="/">
          <img src={logo} alt="nalam" className="mb-8 ml-16 w-20 pt-6" />
        </Link>
      </div>
    </>
  );
}
