function Shop() {
  return (
    <section id="shop" className="max-w-[1620px] mx-auto px-5 mt-64 mb-40">
      <div className="relative lg:h-[670px] flex flex-col lg:block gap-8">
        <img
          src="/images/game2.jpg"
          alt="shop"
          className="hidden lg:block absolute left-[29.5%] -top-[150px] w-[42.5%] h-[687px] object-cover"
        />

        <div className="relative z-10 bg-soft rounded-[40px] p-12 lg:p-24 lg:absolute lg:left-0 lg:top-0 lg:w-[40.5%] lg:h-full">
          <h6 className="text-pink font-semibold mb-6">OUR SHOP</h6>
          <h2 className="text-5xl font-semibold leading-snug mb-16">
            Go Pre-Order Buy &amp; Get Best <span className="text-main">Prices</span> For You!
          </h2>
          <p className="font-medium text-gray-700 leading-8 mb-16">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
          </p>
          <a href="#" className="inline-block bg-pink text-white font-semibold px-9 py-4 rounded-full hover:bg-main transition">
            SHOP NOW
          </a>
        </div>

        <div className="relative z-10 bg-soft rounded-[40px] p-12 lg:p-20 lg:absolute lg:right-0 lg:bottom-0 lg:w-[40.5%] lg:h-[538px]">
          <h6 className="text-pink font-semibold mb-6">NEWSLETTER</h6>
          <h2 className="text-5xl font-semibold leading-snug mb-16">
            Get Up To $100 Off Just Buy <span className="text-main">Subscribe</span> Newsletter!
          </h2>
          <form className="flex bg-white rounded-full">
            <input
              type="email"
              placeholder="Your email..."
              className="px-8 py-4 w-full rounded-full outline-none text-gray-600"
            />
            <button className="bg-pink text-white font-semibold px-8 rounded-full whitespace-nowrap hover:bg-main transition">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Shop;
