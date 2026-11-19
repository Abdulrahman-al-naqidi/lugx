import { ShoppingBag } from "lucide-react";

const games = [
  { image: "/images/game1.jpg", price: 20, oldPrice: 28 },
  { image: "/images/cat3.jpg", price: 44 },
  { image: "/images/cat4.jpg", price: 44, oldPrice: 64 },
  { image: "/images/dragon.jpg", price: 32 },
];

function Trending() {
  return (
    <section className="max-w-[1620px] mx-auto px-5 mt-40">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h6 className="text-pink font-semibold mb-3">TRENDING</h6>
          <h2 className="text-5xl font-semibold">Trending Games</h2>
        </div>
        <a href="#" className="bg-pink text-white font-semibold px-8 py-4 rounded-full hover:bg-main transition">
          VIEW ALL
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {games.map((game, index) => (
          <div key={index} className="bg-soft rounded-[40px] overflow-hidden">
            <div className="relative">
              <img src={game.image} alt="game" className="w-full h-[260px] object-cover rounded-[40px]" />
              <div className="absolute top-3 right-6 bg-main-light text-white font-bold px-4 py-2 rounded-xl text-center leading-tight">
                {game.oldPrice && <div className="line-through text-sm font-medium">${game.oldPrice}</div>}
                <div className="text-xl">${game.price}</div>
              </div>
            </div>
            <div className="flex items-center justify-between px-8 py-6">
              <div>
                <span className="text-gray-500 text-sm">Action</span>
                <h4 className="font-semibold text-xl">Assasin Creed</h4>
              </div>
              <button className="w-12 h-12 bg-pink rounded-full flex items-center justify-center text-white">
                <ShoppingBag size={20} fill="white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
