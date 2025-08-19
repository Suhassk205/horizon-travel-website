import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function NewsletterSignup() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      {/* Rectangle Overlay with Background Image and Gradient */}
      <div
        className="relative rounded-[20px] overflow-hidden"
        style={{
          width: "1200px",
          height: "600px",
        }}
      >
        {/* Background Image limited to this box */}
        <Image
          src="/images/tropical-beach-aerial-view.jpeg"
          alt="Aerial view of tropical beach with turquoise water and palm trees"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay on top of the limited background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(76.76deg, rgba(0, 0, 0, 0.7) 3.18%, rgba(0, 0, 0, 0.3) 97.43%)",
          }}
        />

        {/* Content Container (now a child of the image container) */}
        <div
          className="absolute flex flex-col justify-center gap-6"
          style={{
            width: "600px",
            height: "400px",
            left: "40px", // Adjusted left position relative to parent image container
            top: "50%",
            transform: "translateY(-50%)",
            padding: "40px",
            zIndex: 10,
          }}
        >
          {/* Main Heading */}
          <div className="space-y-2">
            <h2 className="text-5xl font-bold text-white leading-tight">Plan Your Holiday</h2>
            <h3 className="text-3xl font-medium text-white/90">Explore India</h3>
          </div>

          {/* CTA Text */}
          <p className="text-2xl font-bold">
            <span className="text-[#ff6600]">SIGN UP</span> <span className="text-white">&amp; GET UPTO 20% OFF</span>
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="h-12 text-base bg-white/95 border-0 placeholder:text-gray-500 text-gray-800 flex-1"
            />
            <Button className="h-12 px-6 text-base font-medium bg-[#ff6600] hover:bg-[#e55a00] text-white whitespace-nowrap">
              Subscribe
            </Button>
          </div>

          {/* Description Text */}
          <div className="text-white/90 space-y-1 max-w-lg">
            <p className="text-base leading-relaxed">
              By Subscribing, You'll Stay Informed About Our Newest And Most Exciting Offers.
            </p>
            <p className="text-base leading-relaxed">
              Ensuring You Never Miss Out On The Freshest And Most Advantageous Opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
