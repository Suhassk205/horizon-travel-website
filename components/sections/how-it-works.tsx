import Image from "next/image"

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use the complete How It Works design */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/how-it-works-complete.png"
            alt="How It Works - Customize and book your travel in 3 simple steps"
            width={1200}
            height={600}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
