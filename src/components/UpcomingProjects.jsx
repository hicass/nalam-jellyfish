// import youngGirl from "../assets/younggirl.jpg";
// props for number of girls entering whatever grade

export default function UpcomingProjects(props) {
  return (
    <>
      <div className="relative w-44 h-fit mb-6 rounded-md">
        <img src={props.image} alt="Project sneak peak" className="w-54 h-72 rounded-md object-cover" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-white rounded-md opacity-80"></div>
        <div className="absolute bottom-5 w-44 text-[#25348F] font-semibold ">
          {/* replace with prop for future implementation */}
          <h2 className="text-xl text-left pl-4">9 girls entering <br /> 11th grade</h2>
          <p className="text-xs font-light text-left pl-4">Loren Ipsum</p>
        </div>
      </div>
    </>
  );
}
