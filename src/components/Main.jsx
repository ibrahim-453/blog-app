// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";

// const blogs = [
//   {
//     id: 1,
//     title: "How to Learn React in 2025",
//     excerpt: "React is still one of the best frontend libraries. Here’s how you can master it in 2025...",
//     image: "https://source.unsplash.com/800x400/?technology,react",
//   },
//   {
//     id: 2,
//     title: "Tailwind CSS Tips for Clean UI",
//     excerpt: "Tailwind CSS has revolutionized UI design. Here’s a guide for building clean, reusable components...",
//     image: "https://source.unsplash.com/800x400/?technology,css",
//   },
//   {
//     id: 3,
//     title: "Why Appwrite is Great for Developers",
//     excerpt: "Appwrite provides a powerful backend as a service. Learn why developers love it...",
//     image: "https://source.unsplash.com/800x400/?technology,backend",
//   },
// ];

// function Main() {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-cyan-700 mb-8">
//           Featured Blogs
//         </h2>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="rounded-lg overflow-hidden"
//         >
//           {blogs.map((blog) => (
//             <SwiperSlide key={blog.id}>
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {blog.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
//                   <Link
//                     to={`/blogs/${blog.id}`}
//                     className="text-cyan-600 font-semibold hover:underline"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Main;
