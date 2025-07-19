// function About() {
//   return (
//     <div className="bg-gray-50 min-h-screen py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-cyan-700 text-center mb-8">
//           About Us
//         </h1>
//         <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
//           Welcome to <span className="font-semibold text-cyan-700">MyBlog</span>, 
//           where we share knowledge, insights, and inspiring stories. 
//           Our goal is to create a platform for writers and readers to connect 
//           and learn from each other.
//         </p>

//         {/* Who We Are Section */}
//         <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
//           <img
//             src="https://source.unsplash.com/600x400/?team,people"
//             alt="Team"
//             className="rounded-lg shadow-lg w-full h-auto object-cover"
//           />
//           <div>
//             <h2 className="text-2xl font-bold text-cyan-700 mb-4">
//               Who We Are
//             </h2>
//             <p className="text-gray-700 mb-4">
//               We are a team of passionate bloggers and developers who believe 
//               in the power of storytelling. Our mission is to empower individuals 
//               and businesses to share their voices with the world.
//             </p>
//             <p className="text-gray-700">
//               With years of experience in content creation and technology, 
//               we aim to provide a seamless blogging experience for everyone.
//             </p>
//           </div>
//         </div>

//         {/* Mission Section */}
//         <div className="bg-white p-8 rounded-lg shadow-md mb-16">
//           <h2 className="text-2xl font-bold text-cyan-700 mb-4">Our Mission</h2>
//           <p className="text-gray-700 leading-relaxed">
//             At MyBlog, our mission is simple: to create a community-driven 
//             platform that helps writers express their ideas and readers 
//             find valuable content. We believe that every story matters and 
//             deserves to be told.
//           </p>
//         </div>

//         {/* Team Section */}
//         <div>
//           <h2 className="text-2xl font-bold text-cyan-700 text-center mb-8">
//             Meet Our Team
//           </h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {["Alice", "Bob", "Charlie"].map((name, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
//               >
//                 <img
//                   src={`https://i.pravatar.cc/150?img=${index + 5}`}
//                   alt={name}
//                   className="w-24 h-24 rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-lg font-semibold text-center">{name}</h3>
//                 <p className="text-gray-600 text-center text-sm">
//                   Blogger & Content Creator
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
