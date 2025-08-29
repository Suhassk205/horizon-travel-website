import Image from "next/image"

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto">
        {/* Use the complete How It Works design */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/how-it-works-complete.png"
            alt="How It Works - Customize and book your travel in 3 simple steps"
            width={1500}
            height={750}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
