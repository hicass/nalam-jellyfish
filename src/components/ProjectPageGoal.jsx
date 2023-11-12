export default function ProjectPageGoal() {
  const donationGoal = "1,200";
  const donationChosenCount = ["3", "15", "140", "2"];
  const donationCost = ["$50", "$100", "$150", "Other"];

  return (
    // items-center justify-center
    <section className="flex">
      <div className="w-5/6" id="PPG-wrapper">
        <div className="relative rounded-3xl bg-[#EFF1FF]">
          <div id="funding-goal-text" className="pl-6 pt-6">
            <h1 className="mb-4 pl-2 text-left text-3xl text-[#25348F]">
              Funding Goal
            </h1>
            <h2 className="mb-6 text-left text-6xl font-bold text-[#25348F]">
              ${donationGoal}
            </h2>
          </div>

          <hr className="mx-auto mb-8 w-11/12 border-t border-[#4E4E4E]" />

          <p className="pb-8 pl-8 text-left text-base text-[#4E4E4E]">
            This donation will cover school tuition for 9 girls entering the
            11th grade.
          </p>
          <div className="z-0 h-20 w-full rounded-bl-xl rounded-br-xl bg-[#25348F] opacity-30"></div>
          <div className="absolute bottom-0 z-10 h-20 w-8/12 rounded-bl-xl rounded-br-xl bg-[#25348F] opacity-70"></div>
        </div>

        <div className="flex flex-row justify-center">
          <button className="my-5 mr-6 w-2/6 rounded-lg border border-[#25348F]  bg-[#FFFFFF] px-2.5 py-1.5 text-[#25348F] drop-shadow-2xl hover:bg-[#25348F] hover:text-white">
            <p className="py-1 text-xs opacity-30">
              {donationChosenCount[0]} others choice
            </p>
            <span className="text-base">{donationCost[0]}</span>
          </button>
          <button className="my-5 mr-6 w-2/6 rounded-lg border border-[#25348F]  bg-[#FFFFFF] px-2.5 py-1.5 text-[#25348F] drop-shadow-2xl hover:bg-[#25348F] hover:text-white">
            <p className="py-1 text-xs opacity-30">
              {donationChosenCount[1]} others choice
            </p>
            <span className="text-base">{donationCost[1]}</span>
          </button>
          <button className="my-5 mr-6 w-2/6 rounded-lg border border-[#25348F]  bg-[#FFFFFF] px-2.5 py-1.5 text-[#25348F] drop-shadow-2xl hover:bg-[#25348F] hover:text-white">
            <p className="py-1 text-xs opacity-30">
              {donationChosenCount[2]} others choice
            </p>
            <span className="text-base">{donationCost[2]}</span>
          </button>
          <button className="my-5 mr-6 w-2/6 rounded-lg border border-[#25348F]  bg-[#FFFFFF] px-2.5 py-1.5 text-[#25348F] drop-shadow-2xl hover:bg-[#25348F] hover:text-white">
            <p className="py-1 text-xs opacity-30">
              {donationChosenCount[3]} others choice
            </p>
            <span className="text-base">{donationCost[3]}</span>
          </button>
        </div>
        <div>
          <h2 className="mt-8 py-10 pl-6 text-left text-4xl font-bold text-[#25348F]">
            More about this donation
          </h2>
          <div id="about-donation" className="pl-6 text-left">
            <p>
              Yamini lost her mother and was abandoned by her father.
              Fortunately, a local villager brought her to our girls' orphanage,
              where she found a new sense of hope and joy. Yamini dreams of
              becoming a doctor!
            </p>
            <p>
              Apoorva lost her parents in a flood and has been at the orphanage
              for 10 years. She loves helping younger girls at the orphanage,
              and one day hopes to run her own orphanage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
