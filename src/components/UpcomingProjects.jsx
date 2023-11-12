import youngGirl from "../assets/younggirl.jpg";
// props for number of girls entering whatever grade

export default function UpcomingProjects(props) {
  return (
    <>
      <div className="relative mb-6">
        <img src={props.image} className="w-52" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="absolute bottom-5 w-52 text-[#FFFFFF] ">
          {/* replace with prop for future implementation */}
          <h2 className="text-xl">9 girls entering 11th grade</h2>
          <p>Loren Ipsum</p>
        </div>
      </div>
    </>
  );
}
