import DonorProfile from "../components/DonorProfile";
import MoreSupport from "../components/MoreSupport";
import logo from "../assets/nalamlogo.png";

export default function DonorLandingPage() {
  return (
    <section className="bg-[#EFF1FF] px-16 py-6">
      <img src={logo} alt="nalam" className="mb-12 ml-16 w-20 pb-12 pt-6" />
      <div className="flex flex-row">
        <DonorProfile />
        <MoreSupport />
      </div>
    </section>
  );
}
