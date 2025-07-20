import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Footer from "../components/Footer";

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "FOUNDER & CEO",
      initials: "SJ",
      color: "from-yellow-300 to-yellow-500",
    },
    {
      name: "Michael Chen",
      role: "CTO & CO-FOUNDER",
      initials: "MC",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Emily Rodriguez",
      role: "HEAD OF COMMUNITY",
      initials: "ER",
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "David Kim",
      role: "LEAD DESIGNER",
      initials: "DK",
      color: "from-green-400 to-teal-500",
    },
    {
      name: "Aisha Patel",
      role: "CONTENT STRATEGIST",
      initials: "AP",
      color: "from-red-400 to-orange-500",
    },
    {
      name: "James Wilson",
      role: "BACKEND ENGINEER",
      initials: "JW",
      color: "from-indigo-400 to-purple-600",
    },
  ];

  return (
   <>
     <div className="min-h-screen bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center min-h-[60vh] px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight">
            About Us
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-yellow-300 mx-auto mb-4"></div>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Welcome to{" "}
            <span className="text-xl sm:text-2xl font-bold text-yellow-300 bg-yellow-300/10 px-2 py-1 rounded-lg">
              MyBlog
            </span>
            , where we share knowledge, insights, and inspiring stories. Our
            goal is to create a platform for writers and readers to connect and
            learn from each other.
          </p>
        </div>
      </div>

      {/* Mission & Core Values */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg">
          <h2 className="text-yellow-300 font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
            Our Mission
          </h2>
          <p className="text-white/90 mb-3 leading-relaxed text-sm sm:text-base">
            At MyBlog, our mission is to create a{" "}
            <span className="text-yellow-300 font-semibold">
              community-driven platform
            </span>
            that empowers writers to express their unique ideas and helps
            readers discover valuable content.
          </p>
          <p className="text-white/80 text-xs sm:text-sm mb-5 leading-relaxed">
            Every story matters and deserves to be told. We aim to connect
            diverse perspectives and foster meaningful conversations.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-2 bg-white/5 rounded-xl border border-white/10">
              <div className="text-yellow-300 font-bold text-lg sm:text-xl md:text-2xl">
                10K+
              </div>
              <div className="text-white/70 text-xs sm:text-sm">
                Active Writers
              </div>
            </div>
            <div className="text-center p-2 bg-white/5 rounded-xl border border-white/10">
              <div className="text-yellow-300 font-bold text-lg sm:text-xl md:text-2xl">
                50K+
              </div>
              <div className="text-white/70 text-xs sm:text-sm">
                Monthly Readers
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg">
          <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3">
            Our Core Values
          </h3>
          <div className="w-14 sm:w-16 h-1 bg-yellow-300 mb-5"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Authenticity",
                desc: "We encourage genuine, original content.",
              },
              {
                title: "Community",
                desc: "Building supportive global connections.",
              },
              { title: "Growth", desc: "Constantly improving and evolving." },
            ].map((value, i) => (
              <div
                key={i}
                className="text-center p-4 cursor-pointer bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-300 rounded-full"></div>
                </div>
                <h4 className="text-white  font-semibold text-base sm:text-lg mb-1">
                  {value.title}
                </h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
            Meet Our Team
          </h3>
          <div className="w-14 sm:w-16 h-1 bg-yellow-300 mx-auto mb-3"></div>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl sm:max-w-3xl mx-auto">
            Behind MyBlog is a passionate team of writers, developers, and
            community builders dedicated to creating the best platform.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {teamMembers.map((member, i) => (
              <SwiperSlide key={i}>
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full mx-auto flex items-center justify-center text-sm font-bold text-gray-800`}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    {member.name}
                  </h4>
                  <p className="text-yellow-300 font-medium text-xs mb-3 tracking-wide">
                    {member.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full mx-auto flex items-center justify-center text-sm font-bold text-gray-800`}
                >
                  {member.initials}
                </div>
              </div>
              <h4 className="text-white font-bold text-sm mb-1">
                {member.name}
              </h4>
              <p className="text-yellow-300 font-medium text-xs mb-3 tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
   </>
  );
}
