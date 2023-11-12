import younggirl from "../assets/younggirl.jpg";

export default function ProjectPageLeft() {
  return (
    <>
      <div className="relative w-2/6">
        <img src={younggirl} className="" alt="Young Girl" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-[#25348F]"></div>
        <div className="absolute bottom-5 w-auto pb-32 pl-10 text-left text-[#FFFFFF] ">
          {/* replace with prop for future implementation */}
          <h1 className="text-5xl">9 girls entering 11th grade</h1>
          <p className="text-3xl font-light">
            Support <strong>9</strong> girls
          </p>
        </div>
      </div>
    </>
  );
}
