import activeProjectGirl from '../assets/active-project-girl.png';
import badge1 from '../assets/badge-1.png';

export default function ActiveProject({ progressPercent }) {
    return (
      <div className="w-7/8 relative mx-1 mt-2 rounded-xl">
        <img className="h-46 object-cover rounded-xl" src={activeProjectGirl} alt="Young girl" />
  
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#25348F] via-[#25348F]  to-transparent opacity-60"></div>
  
        <div className="absolute top-0 w-full">
          <div className="mx-3 my-2 flex flex-row items-center">
            <img src={badge1} className="h-8" />
            <p className="mx-3 text-[#FFFFFF]">
              Together with <span className="font-extrabold">72</span> donors
            </p>
          </div>
          <h3 className="mx-3 mt-2 text-lg font-semibold text-left text-[#FFFFFF]">
            Launching <br />
            Disabled Kids <br />
            Program
          </h3>
          <span className="mx-3 flex justify-end text-3xl text-5xl font-semibold text-[#FFFFFF]">
            {progressPercent}
          </span>
        </div>
      </div>
    );
  }
  