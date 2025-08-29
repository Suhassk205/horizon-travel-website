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
    description: "Experience the magic of Santorini's legendary sunsets from the best viewpoints across the island.",
    date: "1 day ago",
    author: "Tarun Singh",
    authorImage: "/images/tarunsingh.png",
    image: "/images/5bbcb7f7fa0682379b7051d74d31e8969bd8ea6b.png",
    featured: false
  },
  {
    id: 3,
    title: "Packing Like A Pro: Essentials Only",
    description: "Master the art of smart packing with these essential tips for stress-free travel.",
    date: "07 May 2025",
    author: "Tarun Singh",
    authorImage: "/images/tarunsingh.png",
    image: "/images/58c6f7b7c9bf8f6d7cb4d1b8015b24a15f8f0baf.jpg",
    featured: false
  }
]

export function BlogsSection() {
  return (
    <section className="py-16 bg-[#F3F5F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-[#16242A]">
            Phoenix Fly Blogs
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#717171]">
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
          
          {/* Other Blogs */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            {blogData.slice(1).map((blog) => (
              <div key={blog.id} className="bg-[#EDEFF2] rounded-2xl p-4 h-full">
                 <div className="bg-white rounded-xl p-4 flex gap-5 h-full shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div className="w-2/5 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={240}
                        height={220}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-center gap-2.5 text-sm text-[#16242A] tracking-tighter mb-2">
                        <span>{blog.date}</span>
                        <div className="flex items-center gap-2">
                          <Image
                            src={blog.authorImage}
                            alt={blog.author}
                            width={28}
                            height={28}
                            className="rounded-full object-cover"
                          />
                          <span className="capitalize">{blog.author}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 mb-auto">
                        <h4 className="text-base font-semibold text-[#16242A] capitalize leading-normal tracking-tight">
                          {blog.title}
                        </h4>
                        <p className="text-sm text-[#717171] leading-tight line-clamp-3">
                          {blog.description}
                        </p>
                      </div>
                      <button className="text-[#FF6A00] text-sm font-semibold self-start hover:underline mt-2">
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