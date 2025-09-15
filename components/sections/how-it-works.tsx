import HowItWorksSvg from "@/public/images/How-it-works.svg"

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto">
        {/* Use the complete How It Works design */}
        <div className="w-full flex justify-center">
          <HowItWorksSvg className="object-contain w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
