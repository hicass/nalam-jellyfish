export default function ProjectPageGoal() {
  const donationGoal = '1,200';
  const donationChosenCount = ['3', '15', '140', '2'];
  const donationCost = ['$50', '$100', '$150', 'Other'];

  return (
    <section>
      <div className="bg-[#EFF1FF] rounded-3xl relative">
        <h3 className="text-xl text-[#25348F]">Funding Goal</h3>
        <h1 className="text-5xl font-semibold text-[#25348F]">
          ${donationGoal}
        </h1>

        <hr className="border-t border-[#4E4E4E]" />

        <p className="text-base text-[#4E4E4E]">
          This donation will cover school tuition for 9 girls entering the 11th
          grade.
        </p>
        <div className="h-20 w-full bg-[#25348F] rounded-bl-xl rounded-br-xl z-0 opacity-30"></div>
        <div className="h-20 w-8/12 bg-[#25348F] rounded-bl-xl rounded-br-xl z-10 absolute bottom-0 opacity-70"></div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="my-5 w-2/6 bg-[#FFFFFF] rounded-lg border-[#25348F] border px-2.5 py-1.5 drop-shadow-2xl">
          <p className="text-[#25348F] opacity-30 text-xs py-1">
            {donationChosenCount[0]} others choice
          </p>
          <span className="text-[#25348F] text-base">{donationCost[0]}</span>
        </div>
        <div className="my-5 w-2/6 bg-[#FFFFFF] rounded-lg border-[#25348F] border px-2.5 py-1.5 drop-shadow-2xl">
          <p className="text-[#25348F] opacity-30 text-xs py-1">
            {donationChosenCount[1]} others choice
          </p>
          <span className="text-[#25348F] text-base">{donationCost[1]}</span>
        </div>
        <div className="my-5 w-2/6 bg-[#FFFFFF] rounded-lg border-[#25348F] border px-2.5 py-1.5 drop-shadow-2xl">
          <p className="text-[#25348F] opacity-30 text-xs py-1">
            {donationChosenCount[2]} others choice
          </p>
          <span className="text-[#25348F] text-base">{donationCost[2]}</span>
        </div>
        <div className="my-5 w-2/6 bg-[#FFFFFF] rounded-lg border-[#25348F] border px-2.5 py-1.5 drop-shadow-2xl">
          <p className="text-[#25348F] opacity-30 text-xs py-1">
            {donationChosenCount[3]} others choice
          </p>
          <span className="text-[#25348F] text-base">{donationCost[3]}</span>
        </div>
      </div>
      <div>
        <h2 className="mt-8 text-2xl font-semibold text-[#25348F]">
          More about this donation
        </h2>
        <p>
          Yamini lost her mother and was abandoned by her father. Fortunately, a
          local villager brought her to our girls' orphanage, where she found a
          new sense of hope and joy. Yamini dreams of becoming a doctor!
        </p>
        <p>
          Apoorva lost her parents in a flood and has been at the orphanage for
          10 years. She loves helping younger girls at the orphanage, and one
          day hopes to run her own orphanage.
        </p>
      </div>
    </section>
  );
}
