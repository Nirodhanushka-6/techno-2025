import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Gallery() {
  const images = [
    "/assets/Gallery/Picture1.jpg",
    "/assets/Gallery/Picture2.jpg",
    "/assets/Gallery/Picture3.jpg",
    "/assets/Gallery/Picture4.jpg",   
    "/assets/Gallery/Picture5.jpg",
    "/assets/Gallery/Picture6.jpg",
    "/assets/Gallery/Picture7.jpg",
  ];

  return (
    <section id="gallery" className="relative w-full py-10 md:py-20 bg-gradient-to-br from-slate-200 via-zinc-100 to-zinc-200 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-full mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-red-800 text-center mb-4">
          Exhibits Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          A glimpse of innovation and creativity from our engineering faculty
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}     // no gap, full bleed
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet bg-gray-400 opacity-70 hover:opacity-100",
            bulletActiveClass:
              "swiper-pagination-bullet-active bg-red-600 opacity-100",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-80 md:h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Optional overlay arrows on hover (hidden by default) */}
                <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto group-hover:bg-black/10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  {/* left & right transparent click areas */}
                  <div className="absolute inset-y-0 left-0 w-1/3"></div>
                  <div className="absolute inset-y-0 right-0 w-1/3"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
