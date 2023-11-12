import groupPhoto from "../assets/groupphoto.png";

export default function SocialMediaShare() {
  return (
    <>
      <div className="mt-10 flex max-h-[500px] flex-col items-center overflow-y-auto">
        <div id="date-1">
          {/* use date time (next steps) */}
          <p className="mb-4 text-lg">Sept 20</p>
        </div>
        <div id="container-1" className="mb-14">
          <div
            id="message-box-1"
            className="w-[704px] border-2 border-[#25348F] p-6">
            <div id="message-content-1" className="flex">
              <img src={groupPhoto} alt="Group of kids" />
              <p className="text-left">
                Yesterday was the first day of school! Sharing a photo of us
                getting ready for 11th grade!
              </p>
            </div>
          </div>
          {/* JS logic, retrieve data from an object that stores number of hearts, clovers, other emojis and each quantity, if >= 0, button will appear */}
          <div id="like-buttons-1" className="mt-4 flex items-start">
            <button className="mr-6 rounded-full border-2 border-[#25348F]">
              <p className="p-3">❤️ from 5 donors</p>
            </button>
            <button className="mr-6 rounded-full border-2 border-[#25348F]">
              <p className="p-3">🍀 from 10 donors</p>
            </button>
            <button className="mr-6 rounded-full border-2 border-[#25348F]">
              <p className="p-3">🥰 from 23 donors</p>
            </button>
          </div>
        </div>

        <div id="date-2">
          {/* use date time (next steps) */}
          <p className="mb-4 text-lg">Oct 7</p>
        </div>
        <div id="container-2" className="mb-14">
          <div
            id="message-box-2"
            className="w-[704px] border-2 border-[#25348F] p-6">
            <div id="message-content-2" className="flex">
              <p className="text-left">
                Sneha and Apoorva are enrolled in advanced algebra. Sneha
                prefers geometry, but is suffering through algebra and has even
                made it to the top of her class!
              </p>
            </div>
          </div>
          {/* JS logic, retrieve data from an object that stores number of hearts, clovers, other emojis and each quantity, if >= 0, button will appear */}
          <div id="like-buttons-2" className="mt-4 flex items-start">
            <button className="mr-6 rounded-full border-2 border-[#25348F]">
              <p className="p-3">🍀 from 10 donors</p>
            </button>
            <button className="mr-6 rounded-full border-2 border-[#25348F]">
              <p className="p-3">🥰 from 23 donors</p>
            </button>
          </div>
        </div>
        <div id="date-3">
          {/* use date time (next steps) */}
          <p className="mb-4 text-lg">Oct 7</p>
        </div>
        <div id="container-3">
          <div
            id="message-box-3"
            className="w-[704px] border-2 border-[#25348F] p-6">
            <div id="message-content-3" className="flex">
              <p className="text-left">
                Sneha and Apoorva are enrolled in advanced algebra. Sneha
                prefers geometry, but is suffering through algebra and has even
                made it to the top of her class!
              </p>
            </div>
          </div>
          {/* JS logic, retrieve data from an object that stores number of hearts, clovers, other emojis and each quantity, if >= 0, button will appear */}
          <div id="like-buttons-3" className="mt-4 flex items-start">
            <button className="mr-6 rounded-full border-2 border-[#25348F]">
              <p className="p-3">❤️ from 5 donors</p>
            </button>

            <button className="mr-6 rounded-full border-2 border-[#25348F]">
              <p className="p-3">🥰 from 23 donors</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
