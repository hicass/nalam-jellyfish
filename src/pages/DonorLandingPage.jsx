
import DonorProfile from '../components/DonorProfile';
import MoreSupport from '../components/MoreSupport';
import logo from '../assets/nalamlogo.png';

export default function DonorLandingPage() {
  return (
    <section className="bg-[#EFF1FF] py-6 px-16">
        <img src={logo} alt="nalam" className="w-20 pt-6 pb-12 ml-16 mb-12" />
      <div className="flex flex-row">
        <DonorProfile />
        <MoreSupport />
      </div>
    </section>
  );
}
