import DonorProfile from "../components/DonorProfile";
import MoreSupport from "../components/MoreSupport";

export default function DonorLandingPage() {
  return (
    <section>
      <div className="flex">
        <DonorProfile />
        <MoreSupport />
      </div>
    </section>
  );
}
