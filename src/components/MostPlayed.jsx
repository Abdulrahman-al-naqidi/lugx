const games = [1, 2, 3, 4, 5, 6];

function MostPlayed() {
  return (
    <section className="bg-soft rounded-[120px] mt-40 py-24">
      <div className="max-w-[1620px] mx-auto px-5">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h6 className="text-pink font-semibold mb-3">TOP GAMES</h6>
            <h2 className="text-5xl font-semibold">Most Played</h2>
          </div>
          <a href="#" className="bg-pink text-white font-semibold px-8 py-4 rounded-full hover:bg-main transition">
            VIEW ALL
          </a>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {games.map((number) => (
            <div key={number} className="bg-white rounded-[30px] text-center pb-0">
              <img
                src={`/images/game${number}.jpg`}
                alt="game"
                className="w-full aspect-square object-cover rounded-[30px]"
              />
              <span className="block mt-5 text-gray-500 text-sm">Adventure</span>
              <h4 className="font-semibold text-lg">Assasin Creed</h4>
              <a href="#" className="inline-block bg-pink text-white font-semibold px-6 py-3 rounded-full my-5 hover:bg-main transition">
                EXPLORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostPlayed;
