const images = ["/images/cat1.jpg", "/images/cat2.jpg", "/images/cat3.jpg", "/images/cat4.jpg", "/images/cat2.jpg"];

function Categories() {
  return (
    <section className="max-w-[1620px] mx-auto px-5 mt-24 text-center">
      <h6 className="text-pink font-semibold mb-3">CATEGORIES</h6>
      <h2 className="text-5xl font-semibold mb-16">Top Categories</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-main rounded-[40px] pt-6">
            <h4 className="text-white font-semibold text-xl mb-6">Action</h4>
            <img src={image} alt="category" className="w-full h-[281px] object-cover rounded-[40px]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
