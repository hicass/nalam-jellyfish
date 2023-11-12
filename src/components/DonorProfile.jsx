import ActiveProject from './ActiveProject';
import donorSelfie from '../assets/donor-selfie.png';
import badge1 from '../assets/badge-1.png';
import badge2 from '../assets/badge-2.png';
import badge3 from '../assets/badge-3.png';
import badge4 from '../assets/badge-4.png';
import badge5 from '../assets/badge-5.png';

export default function DonorProfile() {
  const name = 'Jane';
  const progressPercent = ['70%', '100%'];

  return (
    <div className="w-8/12 h-full p-6 pb-12 bg-[#FFFFFF] drop-shadow-2xl rounded-3xl">
      <div className="flex flex-row items-center">
        <img
          src={donorSelfie}
          className="w-16 h-16 rounded-full object-cover"
          alt="Donor"
        />
        <h1 className="mx-8 text-3xl text-2xl mt-3.5 font-semibold">
          Hello, <span className="font-bold">{name}</span>
        </h1>
      </div>
      <div className="flex items-center justify-center mt-10">
        <img src={badge1} className="h-14 m-1 object-cover" />
        <img src={badge2} className="h-14 m-1 object-cover" />
        <img src={badge3} className="h-14 m-1 object-cover" />
        <img src={badge4} className="h-14 m-1 object-cover" />
        <img src={badge5} className="h-16 m-1 object-cover" />
      </div>
      <div>
        <h2 className="mt-8 text-2xl font-extrabold text-left text-[#25348F]">
          Your Donations
        </h2>
        <div className="max-h-96  overflow-y-scroll pr-4">
          <ActiveProject progressPercent={progressPercent[0]} />
          <ActiveProject progressPercent={progressPercent[1]} />
          <ActiveProject progressPercent={progressPercent[1]} />
          <ActiveProject progressPercent={progressPercent[1]} />
        </div>
      </div>
    </div>
  );
}
