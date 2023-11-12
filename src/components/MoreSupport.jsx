import UpcomingProjects from "./UpcomingProjects";

// props for number of girls entering whatever grade

export default function MoreSupport() {
  const numOfCards = 5;

  const repeatedCards = Array.from({ length: numOfCards }, (item, index) => (
    <UpcomingProjects className="px-4" key={index} />
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
        <h1 className="pb-10 text-4xl font-semibold text-[#25348F]">
          Show More Support On
        </h1>

        <div id="sort-by" className="flex flex-col">
          <div id="sort-section" className="flex">
            <div>
              <p className="text-3xl text-base font-medium text-[#25348F]">
                sort by:
              </p>
            </div>
            <div id="sort-buttons" className="flex">
              {buttonTypes.map((buttonType, index) => (
                <button
                  key={index}
                  className="mr-4 rounded-full bg-[#25348F]"
                  type="button">
                  <p className="px-10 text-white">{buttonType}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {/* <UpcomingProject /> */}
          {repeatedCards}
        </div>
      </div>
    </>
  );
}
