import activeProjectGirl from '../assets/active-project-girl.png';
import badge1 from '../assets/badge-1.png';

export default function ActiveProject({ progressPercent }) {
    return (
      <div className="w-7/8 relative mx-1 mt-2 rounded-xl">
        <img className="h-40 w-full object-cover rounded-xl" src={activeProjectGirl} alt="Young girl" />
  
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#25348F] via-[#25348F]  to-transparent opacity-60"></div>
  
        <div className="absolute top-0 w-full">
          <div className="mx-3 my-2 flex flex-row items-center">
            <img src={badge1} alt="Donor Badge" className="h-8" />
            <p className="mx-3 text-[#FFFFFF]">
              Together with <span className="font-extrabold">72</span> donors
            </p>
          </div>
          <h3 className="mx-3 mt-2 text-base font-semibold text-left text-[#FFFFFF]">
            Launching <br />
            Disabled Kids <br />
            Program
          </h3>
          <span className="mx-3 flex justify-end text-2xl text-6xl font-semibold text-[#FFFFFF] absolute right-0 -bottom-9">
            {progressPercent}
          </span>
        </div>
      </div>
    );
  }
  