"use client"

import Image from "next/image"

const blogData = [
  {
    id: 1,
    title: "Top 10 Hidden Gems Around the World",
    description: "Discover the world's best-kept secrets, from secluded beaches to off-the-beaten-path towns. These hidden gems are worth the journey.",
    date: "07 May 2025",
    author: "Tarun Singh",
    authorImage: "/images/tarunsingh.png",
    image: "/images/flora-hon-Agqkvme-v-w-unsplash.png",
    featured: true
  },
  {
    id: 2,
    title: "Chasing Sunsets In Santorini",
    description: "Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free...",
    date: "1 day ago",
    author: "Tarun Singh",
    authorImage: "/images/tarunsingh.png",
    image: "/images/5bbcb7f7fa0682379b7051d74d31e8969bd8ea6b.png",
    featured: false
  },
  {
    id: 3,
    title: "Packing Like A Pro: Essentials Only",
    description: "Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free...",
    date: "07 May 2025",
    author: "Tarun Singh",
    authorImage: "/images/tarunsingh.png",
    image: "/images/58c6f7b7c9bf8f6d7cb4d1b8015b24a15f8f0baf.jpg",
    featured: false
  }
]

export function BlogsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className="mb-0"
            style={{
              color: "#16242A",
              fontSize: "42px",
              fontFamily: "Gilroy",
              fontWeight: "600",
              lineHeight: "64px",
              wordWrap: "break-word",
            }}
          >
            Phoenix Fly Blogs
          </h2>
          <p
            className="max-w-3xl mx-auto"
            style={{
              color: "#29383E",
              fontSize: "18px",
              fontFamily: "Gilroy",
              fontWeight: "500",
              lineHeight: "32px",
              wordWrap: "break-word",
            }}
          >
            Get travel tips, destination guides, and real stories from explorers around the globe
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-5 max-w-6xl mx-auto">
          {/* Featured Blog */}
          <div className="lg:w-1/2 relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src={blogData[0].image}
              alt={blogData[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 590px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end gap-5">
              <div className="text-white">
                <h3 className="text-2xl font-semibold capitalize leading-tight mb-2">
                  {blogData[0].title}
                </h3>
                <p className="text-sm font-normal leading-snug mb-4 line-clamp-2">
                  {blogData[0].description}
                </p>
                <div className="flex items-center gap-10 text-sm">
                  <span>{blogData[0].date}</span>
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={blogData[0].authorImage}
                      alt={blogData[0].author}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <span>{blogData[0].author}</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white px-8 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors">
                Read More
              </button>
            </div>
          </div>
          
          {/* Right Side - Two Blog Cards Stacked */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            {blogData.slice(1).map((blog) => (
              <div key={blog.id} className="bg-white rounded-[20px] p-4 shadow-sm">
                <div className="flex gap-5 h-full">
                  {/* Image - Left Side */}
                  <div className="w-[269px] h-[253px] rounded-[10px] overflow-hidden flex-shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={269}
                      height={253}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content - Right Side */}
                  <div className="flex-1 flex flex-col">
                    {/* Date and Author Row */}
                    <div className="flex justify-between items-center mb-2">
                      <span
                        style={{
                          color: "#16242A",
                          fontSize: "14px",
                          fontFamily: "Gilroy",
                          fontWeight: "500",
                          letterSpacing: "-0.28px",
                          lineHeight: "16.98px",
                        }}
                      >
                        {blog.date}
                      </span>
                      <div className="flex items-center gap-2">
                        <Image
                          src={blog.authorImage}
                          alt={blog.author}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                        />
                        <span
                          style={{
                            color: "#16242A",
                            fontSize: "14px",
                            fontFamily: "Gilroy",
                            fontWeight: "500",
                            letterSpacing: "-0.28px",
                            lineHeight: "16.98px",
                            textTransform: "capitalize",
                          }}
                        >
                          {blog.author}
                        </span>
                      </div>
                    </div>
                    
                    {/* Title */}
                                         <h4
                       className="mb-5"
                       style={{
                         color: "#16242A",
                         fontSize: "16px",
                         fontFamily: "Gilroy",
                         fontWeight: "600",
                         letterSpacing: "-0.32px",
                         lineHeight: "19.6px",
                         textTransform: "capitalize",
                       }}
                     >
                      {blog.title}
                    </h4>
                    
                                         {/* Description */}
                     <p
                       className="mb-3 flex-1"
                       style={{
                         color: "#717171",
                         fontSize: "14px",
                         fontFamily: "Gilroy",
                         fontWeight: "500",
                         lineHeight: "30px",
                       }}
                     >
                       {blog.description}
                     </p>
                     
                     {/* Read More Button */}
                     <button
                       style={{
                         color: "#FF6A00",
                         fontSize: "16px",
                         fontFamily: "Gilroy",
                         fontWeight: "600",
                         letterSpacing: "-0.32px",
                         lineHeight: "19.6px",
                         textTransform: "capitalize",
                       }}
                       className="self-start hover:underline"
                     >
                       Read more
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white px-10 py-3 rounded-lg font-semibold text-sm">
            View All
          </button>
        </div>
      </div>
    </section>
  )
}