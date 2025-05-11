// import { blogImage } from "@/data/images";
// import Image from "next/image";
// import Link from "next/link";

// interface BlogCardProps {
//   image: string;
//   title: string;
//   desc: string;
//   tag: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ image, title, desc, tag }) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 w-full">
//       {/* Image Box */}
//       <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-md overflow-hidden">
//         <Image
//           src={blogImage}
//           alt="blog_img"
//           className="object-cover w-full h-full"
//           fill
//         />
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col justify-start text-left w-full md:w-1/2 space-y-2">
//         <Link
//           href="#"
//           className="text-lg md:text-xl font-semibold text-white hover:text-[#007EE5] hover:underline transition-all line-clamp-2"
//         >
//           How to Use Git & GitHub for Version Control – Comprehensive
//           Step-By-Step Guide for Beginners
//         </Link>

//         <p className="text-[13px] text-gray-400 leading-snug md:leading-normal line-clamp-3">
//           Git is a version control system that is used by developers worldwide.
//           It facilitates communication with other developers and allows you to
//           keep track of various iterations of your code. If you're working on a
//           project over time, you might wish to record the modifications made,
//           who made them, and when. If you wind up with a flaw in your code, this
//           becomes much more crucial! Git can assist you in this regard.
//         </p>

//         <span className="self-start text-xs md:text-[10px] px-4 py-1.5 border-2 border-[#007EE5] text-white rounded-full font-medium">
//           Technology
//         </span>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
