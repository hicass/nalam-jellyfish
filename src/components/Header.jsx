import logo from "../assets/nalamlogo.png";

export default function Header() {
  return (
    <>
      <div className="bg-[#EFF1FF] px-16">
        <img src={logo} alt="nalam" className="mb-12 ml-16 w-20 pb-12 pt-6" />
      </div>
    </>
  );
}
