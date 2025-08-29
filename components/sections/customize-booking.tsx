import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CustomizeBooking() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-white">
      <div className="text-center mb-12">
        <h2 
          className="text-4xl font-bold font-gilroy text-gray-900 leading-tight mb-4"
        >
          Customize Your Booking
        </h2>
        <p 
          className="text-lg text-[#29383E] max-w-4xl mx-auto font-gilroy"
        >
          Customize every aspect of your journey to fit your budget, schedule, and group dynamics.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-lg">
          {/* Left Column */}
          <div 
            className="flex flex-col justify-center p-12"
            style={{ background: 'linear-gradient(113deg, #FFD9BD 0%, #B3E5F1 100%)' }}
          >
            <h3 
              className="text-5xl font-bold font-gilroy text-[#16242A] mb-6 leading-tight capitalize"
            >
              Let our experts <br/>tailor a <span className="text-[#FF6A00]">customized <br/>package</span> <br/>that caters to <br/>your preferences
            </h3>
            <div className="flex items-center gap-2.5">
              <p 
                className="text-[#16242A] text-lg font-gilroy font-semibold capitalize"
              >
                Make your custom itinerary now!
              </p>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 10H16.875" stroke="#16242A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.25 4.375L17.5 10L11.25 15.625" stroke="#16242A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="pt-20 px-24 pb-16">
            <div className="grid grid-cols-2 gap-10 mb-20">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <Image src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fcf47df-7091-4f37-b8ae-d52a2b523ce5" alt="Customize" width={56} height={56} />
                </div>
                <h4 
                  className="text-lg font-bold font-gilroy text-[#16242A]"
                >
                  100% Customized<br/>Trips
                </h4>
                <p 
                  className="text-sm text-[#29383E] font-gilroy"
                >
                  Tailor-made travel experiences just for you.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <Image src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ce5c919-9821-48d8-bb2d-6ad2800e2956" alt="Adventures" width={56} height={56} />
                </div>
                <h4 
                  className="text-lg font-bold font-gilroy text-[#16242A]"
                >
                  Multi-City<br/>Adventures
                </h4>
                <p 
                  className="text-sm text-[#29383E] font-gilroy"
                >
                  Visit multiple destinations in one seamless trip.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <Image src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da5ded1c-3056-4cb7-91c9-49b68b7fd8b5" alt="Planning" width={56} height={56} />
                </div>
                <h4 
                  className="text-lg font-bold font-gilroy text-[#16242A]"
                >
                  Instant & Flexible<br/>Planning
                </h4>
                <p 
                  className="text-sm text-[#29383E] font-gilroy"
                >
                  Pick your own dates that fits your schedule.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2">
                  <Image src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1300097b-d57f-42a5-a0cb-acb5bfbb23b1" alt="Budget" width={56} height={56} />
                </div>
                <h4 
                  className="text-lg font-bold font-gilroy text-[#16242A]"
                >
                  Budget-Friendly<br/>Trips
                </h4>
                <p 
                  className="text-sm text-[#29383E] font-gilroy"
                >
                  Smart recommendations that match your budget.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                className="flex-1 h-12 bg-[#16242A] text-white font-gilroy"
              >
                Customize Now
              </Button>
              <Button 
                className="flex-1 h-12 bg-[#42C553] text-white flex items-center gap-2 font-gilroy"
              >
                Whatsapp Us
                <Image src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f02aec3-7ee1-45e6-8515-1c4bf90de2ef" alt="Whatsapp" width={24} height={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
