import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function NewsletterSignup() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center bg-gray-50">
      {/* Rectangle Overlay with Background Image and Gradient */}
      <div
        className="relative rounded-[20px] overflow-hidden"
        style={{
          width: "1200px",
          height: "530px",
        }}
      >
        {/* Background Image limited to this box */}
        <Image
          src="/images/tropical-beach-aerial-view.jpeg"
          alt="Aerial view of tropical beach with turquoise water and palm trees"
          fill
          className="object-cover transform scale-x-[-1]"
          priority
        />
        {/* Gradient overlay on top of the limited background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(43deg, rgba(0, 0, 0, 0.79) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="absolute top-1/2 left-20 -translate-y-1/2 text-white z-10 space-y-8">
          <div className="space-y-2.5">
            <h2 
              className="text-6xl font-bold font-gilroy capitalize"
              style={{ fontWeight: '550', lineHeight: '1.1', letterSpacing: '-0.03em' }}
            >
              Stay in the Loop,<br />
              <span style={{ display: 'inline-block', marginTop: '0.1em' }}>Travel Smarter</span>
            </h2>
            <p 
              className="text-2xl font-semibold font-gilroy capitalize opacity-70"
            >
              Subscribe to Our Newsletter
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="w-[476px] h-[70px] bg-white/90 rounded-2xl border-0 px-5 text-lg font-gilroy text-gray-800 placeholder:text-gray-400"
              style={{ fontSize: '18px',
                fontWeight: '500'
               }}
            />
            <Button 
              className="h-[70px] px-10 text-lg bg-[#FF6A00] hover:bg-[#FF6A00]/90 rounded-2xl font-gilroy"
            >
              Subscribe
            </Button>
          </div>
          <p 
            className="text-lg capitalize leading-relaxed font-gilroy"
          >
            By subscribing, you'll stay informed about our newest and most exciting offers. <br />
            ensuring you never miss out on the freshest and most advantageous opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
