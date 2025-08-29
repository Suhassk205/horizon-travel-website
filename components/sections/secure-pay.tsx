import Image from "next/image"

export function SecurePay() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Security Text - Exact Figma Typography */}
          <p className="text-lg font-medium font-gilroy text-[#293A3E] mb-8 leading-[32px]">
            Secured Transactions under Our Payments Partner
          </p>

          {/* HDFC Bank Logo - Exact SVG Implementation */}
          <div className="flex justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="228" height="38" viewBox="0 0 228 38" fill="none">
              <g clipPath="url(#clip0_1_11992)">
                <path d="M0.0273438 0.0456924H228.031V38.1211H0.0273438V0.0456924Z" fill="#004C8F"/>
                <path d="M38.0938 0.0456924H228.033V38.1211H38.0938V0.0456924Z" fill="#004C8F"/>
                <path d="M50.0117 27.9297V9.85343H55.9714V16.0071H61.5465V9.85343H67.5061V27.9297H61.5465V21.0069H55.9714V27.9297H50.0117Z" fill="white"/>
                <path d="M76.9236 14.4687H78.4616C79.6151 14.4687 80.3841 14.6609 80.9608 14.8532C81.3453 15.0455 81.7298 15.2378 81.9221 15.6224C82.1143 16.007 82.3066 16.3917 82.4988 16.9686C82.6911 17.5455 82.691 18.1224 82.691 18.8916C82.691 19.8531 82.4988 20.8145 82.3066 21.5837C81.9221 22.3529 81.5376 22.7376 80.9608 23.1222C80.3841 23.5068 79.6151 23.5067 78.4616 23.5067H76.9236V14.4687ZM79.0384 27.9297C80.3841 27.9297 81.5376 27.7374 82.4988 27.5451C83.4601 27.3528 84.229 26.9682 84.8057 26.5836C85.3825 26.199 85.9592 25.6221 86.5359 25.0452C87.1127 24.276 87.4972 23.5067 87.8817 22.3529C88.2662 21.3914 88.4584 20.0453 88.4584 18.6992C88.4584 16.7762 88.074 15.0455 87.305 13.6994C86.536 12.3533 85.5748 11.3918 84.229 10.8149C82.8833 10.238 81.3453 9.85343 79.4229 9.85343H71.1562V27.9297H79.0384Z" fill="white"/>
                <path d="M91.1521 27.9297V9.85343H105.186V14.2764H96.9195V17.1609H103.456V21.3914H96.9195V27.7374L91.1521 27.9297Z" fill="white"/>
                <path d="M124.985 16.9678H119.41C119.218 16.0063 119.026 15.4294 118.449 14.8525C117.872 14.2756 117.295 14.0833 116.334 14.0833C115.373 14.0833 114.412 14.4679 113.835 15.2371C113.258 16.0063 112.874 17.3524 112.874 19.0831C112.874 20.4292 113.066 21.1984 113.258 21.9676C113.45 22.5445 114.027 23.1214 114.412 23.506C114.988 23.8906 115.565 23.8906 116.334 23.8906C117.295 23.8906 117.872 23.6983 118.449 23.1214C119.026 22.5445 119.218 21.9676 119.41 20.8138H125.177C124.985 21.9676 124.793 22.9291 124.408 23.6983C124.024 24.4675 123.64 25.2367 122.871 26.0059C122.102 26.7751 121.14 27.352 120.179 27.7366C119.218 28.1212 117.872 28.3135 116.526 28.3135C115.181 28.3135 113.835 28.1212 112.681 27.7366C111.528 27.352 110.567 26.7751 109.798 26.0059C109.029 25.2367 108.452 24.4675 107.875 23.506C107.299 22.1599 106.914 20.6215 106.914 19.0831C106.914 17.737 107.106 16.3909 107.683 15.2371C108.068 14.0833 108.837 12.9295 109.605 12.1603C110.374 11.3911 111.336 10.8142 112.297 10.2373C113.45 9.66038 114.796 9.46809 116.334 9.46809C117.68 9.46809 118.833 9.66037 119.987 10.045C121.14 10.4296 122.102 11.0065 122.871 11.7757C123.64 12.5449 124.216 13.3141 124.601 14.2756C124.601 15.0448 124.793 15.814 124.985 16.9678Z" fill="white"/>
                <path d="M143.826 14.0841C144.595 14.0841 145.172 14.0841 145.557 14.2764C145.941 14.4687 146.133 14.6609 146.326 14.8532C146.518 15.0455 146.71 15.4301 146.71 15.8147C146.71 16.1993 146.518 16.584 146.133 16.9686C145.749 17.3532 145.172 17.3532 144.211 17.3532H141.904V14.2764H143.826V14.0841ZM145.364 27.9297C146.71 27.9297 147.671 27.9297 148.248 27.7374C148.825 27.5451 149.402 27.3527 149.978 27.1604C150.555 26.7758 150.94 26.5835 151.324 26.1989C151.709 25.8143 152.093 25.2375 152.285 24.6606C152.478 24.0837 152.67 23.3144 152.67 22.5452C152.67 21.3914 152.477 20.6223 151.901 19.8531C151.324 19.0839 150.555 18.6993 149.786 18.3147C151.324 17.3532 152.093 16.0071 152.093 14.4687C152.093 12.9303 151.324 11.5841 149.978 10.8149C149.017 10.238 147.287 9.85343 144.98 9.85343H136.137V27.9297H145.364ZM144.403 20.4299C145.557 20.4299 146.326 20.6223 146.71 20.8146C147.095 21.1992 147.287 21.5838 147.287 21.9684C147.287 22.5453 147.095 22.9298 146.71 23.3144C146.326 23.699 145.557 23.6991 144.403 23.6991H141.904V20.2377L144.403 20.4299Z" fill="white"/>
                <path d="M165.747 21.9684H161.902L163.825 15.4302L165.747 21.9684ZM160.364 27.9297L161.133 25.6221H167.093L167.862 27.9297H173.821L167.285 9.85343H161.325L154.789 27.9297H160.364Z" fill="white"/>
                <path d="M175.934 27.9297V9.85343H181.509L187.661 19.4684V9.85343H193.236V27.9297H187.661L181.509 18.5069V27.9297H175.934Z" fill="white"/>
                <path d="M197.273 27.9297V9.85343H203.041V16.0071L208.424 10.0457H215.345L208.808 16.7762L216.114 27.9297H209L204.771 20.8146L203.233 22.3529V27.9297H197.273Z" fill="white"/>
                <path d="M0.0273438 0.0456924H38.0921V38.1211H0.0273438V0.0456924Z" fill="#ED232A"/>
                <path d="M6.75391 6.58392H31.3615V31.3906H6.75391V6.58392Z" fill="white"/>
                <path d="M17.1367 0.0456924H20.9816V38.1211H17.1367V0.0456924Z" fill="white"/>
                <path d="M0.0273438 17.1608H38.0921V21.0068H0.0273438V17.1608Z" fill="white"/>
                <path d="M13.2891 13.3145H24.6316V24.6602H13.2891V13.3145Z" fill="#004C8F"/>
              </g>
              <defs>
                <clipPath id="clip0_1_11992">
                  <rect width="228" height="38" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* We Accept Text - Exact Figma Typography */}
          <p className="text-lg font-medium font-gilroy text-[#293A3E] mb-6 leading-[32px]">
            We accept
          </p>

          {/* Payment Method Icons - Using PNG files */}
          <div className="flex justify-center items-center space-x-3">
            {/* 1. Visa */}
            <div
              className="relative flex justify-center items-center border border-[#E4E7EC] bg-white rounded-[6.454px] shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: "54.857px",
                height: "38.723px",
              }}
            >
              <Image
                src="/images/Payment Method Icons 1.png"
                alt="Visa"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* 2. UPI */}
            <div
              className="relative flex-shrink-0 border border-[#E4E7EC] bg-white rounded-[4.77px] shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: "52.472px",
                height: "35.776px",
              }}
            >
              <Image
                src="/images/payments method 2.png"
                alt="UPI"
                layout="fill"
                objectFit="contain"
                className="p-2"
              />
            </div>

            {/* 3. Mastercard */}
            <div
              className="relative flex justify-center items-center border border-[#E4E7EC] bg-white rounded-[6.454px] shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: "54.857px",
                height: "38.161px",
              }}
            >
              <Image
                src="/images/Payment Method 3.png"
                alt="Mastercard"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* 4. American Express */}
            <div
              className="relative rounded-[6.454px] shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: "54.857px",
                height: "38.161px",
              }}
            >
              <Image
                src="/images/Payment Method Icons 4.png"
                alt="American Express"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* 5. Google Pay */}
            <div
              className="relative flex-shrink-0 border border-[#E4E7EC] bg-white rounded-[4.77px] shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: "52.472px",
                height: "35.776px",
              }}
            >
              <Image
                src="/images/Payment Method Icon 5.png"
                alt="Google Pay"
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* 6. PayPal */}
            <div
              className="relative flex justify-center items-center border border-[#E4E7EC] bg-white rounded-[6.454px] shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: "54.857px",
                height: "38.161px",
              }}
            >
              <Image
                src="/images/Payment Method Icons 6.png"
                alt="PayPal"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
