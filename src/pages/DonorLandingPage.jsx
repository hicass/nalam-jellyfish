import { Link } from 'react-router-dom';
import DonorProfile from '../components/DonorProfile';
import MoreSupport from '../components/MoreSupport';
import logo from '../assets/nalamlogo.png';

export default function DonorLandingPage() {
  return (
    <section className="bg-[#EFF1FF] px-16 py-6">
      <Link to="/">
        <img src={logo} alt="nalam" className="mb-12 ml-16 w-20 pb-12 pt-6" />
      </Link>
      <div className="mt- flex flex-row">
        <DonorProfile />
        <MoreSupport />
      </div>
    </section>
  );
}
