function Hero() {
  return (
    <section className="relative bg-main text-white rounded-b-[200px] pt-40 pb-64 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-main-light rounded-bl-[300px]"></div>
      <div className="relative max-w-[1620px] mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h6 className="text-2xl font-medium mb-6">WELCOME TO LUGX</h6>
          <h2 className="text-6xl font-bold mb-10">
            BEST <span className="underline decoration-pink decoration-4 underline-offset-8">GAMING</span> SITE EVER!
          </h2>
          <p className="max-w-xl leading-8 mb-16">
            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and
            use this layout for commercial purposes. Please tell your friends about TemplateMo.
          </p>
          <form className="flex w-fit bg-white rounded-full">
            <input
              type="text"
              placeholder="Type Something"
              className="px-8 py-4 w-72 rounded-full text-gray-600 outline-none"
            />
            <button className="bg-pink px-8 rounded-full font-semibold hover:bg-main transition">SEARCH NOW</button>
          </form>
        </div>

        <div className="relative lg:ml-auto w-full max-w-[520px]">
          <img src="/images/hero.jpg" alt="hero" className="w-full h-[625px] object-cover rounded-[40px]" />
          <span className="absolute top-6 right-6 bg-main px-5 py-2 rounded-full text-2xl font-bold">$22</span>
          <span className="absolute -bottom-10 -left-8 w-32 h-32 bg-pink rounded-full flex items-center justify-center text-4xl font-bold">
            -40%
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
