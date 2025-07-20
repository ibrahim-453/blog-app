import { PenTool, Newspaper, Users, Mail, Bookmark, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Diverse Blog Categories",
      icon: <Newspaper className="w-10 h-10 text-yellow-300" />,
      description:
        "We cover a wide range of topics — from technology and lifestyle to travel and personal stories — ensuring something for every reader.",
      highlight: "50+ Categories",
    },
    {
      title: "Write & Publish Blogs",
      icon: <PenTool className="w-10 h-10 text-yellow-300" />,
      description:
        "Create and share your own blogs with an intuitive writing platform designed for both beginners and professionals.",
      highlight: "Easy Publishing",
    },
    {
      title: "Community Interaction",
      icon: <Users className="w-10 h-10 text-yellow-300" />,
      description:
        "Connect with other readers and writers through comments, discussions, and collaborative blogging projects.",
      highlight: "10K+ Members",
    },
    {
      title: "Bookmark & Save Posts",
      icon: <Bookmark className="w-10 h-10 text-yellow-300" />,
      description:
        "Save your favorite blogs and create a personal reading list for easy access anytime.",
      highlight: "Personal Library",
    },
    {
      title: "Newsletter Updates",
      icon: <Mail className="w-10 h-10 text-yellow-300" />,
      description:
        "Stay informed with curated newsletters highlighting trending blogs, top authors, and featured stories.",
      highlight: "Weekly Updates",
    },
    {
      title: "Global Reach",
      icon: <Globe className="w-10 h-10 text-yellow-300" />,
      description:
        "Our platform allows writers and readers to share ideas and stories with a worldwide audience.",
      highlight: "Worldwide Access",
    },
  ];

  return (
    <>
      <section className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 py-16 px-5 md:px-10 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text">
            Our Services
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            At MyBlog, we provide a variety of services to empower writers and
            engage readers across the globe. Join our thriving community today.
          </p>
        </div>

        {/* Desktop Grid with Enhanced Animation */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:border-yellow-300/50 transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with Animation */}
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-yellow-300/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block bg-yellow-300/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-yellow-300/30">
                  {service.highlight}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Mobile Swiper */}
        <div className="md:hidden relative z-10">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-yellow-300",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-yellow-300",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            className="pb-12"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} style={{ width: "280px" }}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 h-full min-h-[300px] flex flex-col justify-between relative overflow-hidden group">
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/10 rounded-xl group-hover:bg-yellow-300/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-block bg-yellow-300/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-semibold mb-3 border border-yellow-300/30">
                      {service.highlight}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 relative z-10">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Blogging Journey?
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Join thousands of writers and readers in our vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blogs"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
              >
                Start Writing Today
              </Link>
              <Link
                to="/blogs"
                className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Explore Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-pagination-bullet {
          background: #fcd34d !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2);
        }

        .swiper-slide {
          transition: transform 0.3s ease;
        }

        .swiper-slide-active {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
