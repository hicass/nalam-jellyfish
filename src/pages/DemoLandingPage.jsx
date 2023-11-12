import { Link } from 'react-router-dom';
import logo from '../assets/nalamlogo.png';
import mehendiHands from '../assets/mehendi-hands.jpg';

export default function DemoLandingPage() {
  return (
    <section className="bg-[#EFF1FF] h-screen">
      <header className="p-3 py-6 px-16">
        <img src={logo} alt="Nalam" className="w-20 pt-6 pb-12 ml-16 mb-12" />
      </header>

      <div className="flex">
        <div className="flex flex-col items-center flex-wrap justify-between">
          <h1 className="text-left text-4xl flex text-center font-semibold text-[#25348F]">
            Thank you for viewing Team Jellyfishes demo!
          </h1>
          <p className="my-6 mx-28 text-lg text-[#4E4E4E]">
            We are Team Jellyfish, driven by the compelling narrative of the
            girls at NALAM. Our inspiration lies in weaving together these
            unique stories to create a profound connection between donors and
            the lives they impact. Through our personalized donor portal, we
            empower contributors to become active participants in the narrative.
            Donors can 1) select donation projects aligned with their personal
            passions, fostering a deeper sense of investment, and 2) receive
            real-time progress updates, captivating photos, and heartfelt
            messages from the recipients. This immersive experience ensures that
            donors not only contribute but also witness the transformative
            impact they've made on the lives of others, fostering a sense of joy
            and fulfillment. Join us in making a meaningful difference!
          </p>

          <Link
            to="/donor"
            className="h-fit w-52 rounded-full border-2 border-[#25348F] bg-[#EFF1FF] text-[#25348F] hover:bg-[#25348F] hover:text-white"
            type="button"
          >
            <p className="px-10">Donor Portal</p>
          </Link>
        </div>

        <img src={mehendiHands} alt="Childrens hands with Mehendi above books." className="w-96 mx-16" />
      </div>
    </section>
  );
}
