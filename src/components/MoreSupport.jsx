import { Link } from "react-router-dom";
import UpcomingProjects from "./UpcomingProjects";

// props for number of girls entering whatever grade

export default function MoreSupport() {
  const numOfCards = 12;

  const repeatedCards = Array.from({ length: numOfCards }, (item, index) => (
    <Link to="/project">
      <UpcomingProjects className="" key={index} />
    </Link>
  ));

  const buttonTypes = [
    "Education",
    "Medical",
    "Facility",
    "Job",
    "Upper Education",
  ];
  return (
    <>
      <div id="more-support-container" className="px-6">
        <h1 className="pb-6 text-left text-4xl font-semibold text-[#25348F]">
          We need your support!
        </h1>

        <div id="sort-by" className="flex flex-col pb-6">
          <div id="sort-section" className="flex">
            <div>
              <p className="pr-4 text-3xl text-base font-medium text-[#25348F]">
                sort by:
              </p>
            </div>
            <div id="sort-buttons" className="flex">
              {buttonTypes.map((buttonType, index) => (
                <button
                  key={index}
                  className="mr-4 rounded-full border-2 border-[#25348F] bg-[#EFF1FF] text-[#25348F] hover:bg-[#25348F] hover:text-white"
                  type="button">
                  <p className="px-10">{buttonType}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          id="scroll-bar-container"
          className="max-h-[500px] overflow-y-auto">
          <div className="flex flex-wrap justify-between ">
            {/* <UpcomingProject /> */}
            {repeatedCards}
          </div>
        </div>
      </div>
    </>
  );
}
