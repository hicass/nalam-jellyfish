import DonorProfile from "../components/DonorProfile";
import MoreSupport from "../components/MoreSupport";

export default function DonorLandingPage() {
  return (
    <div className="flex justify-center bg-[#EFF1FF]">
      <DonorProfile />
      <div className="w-3/5">
        <MoreSupport />
      </div>
    </div>
  );
}
