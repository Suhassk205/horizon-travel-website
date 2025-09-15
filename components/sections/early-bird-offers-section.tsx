"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight, Plane, Building2, Car, Mountain } from "lucide-react"
import HotelIcon from "@/public/images/hotel-icon-cards.svg"
import DiscountIcon from "@/public/images/iconamoon_discount-fill.svg"

export function EarlyBirdOffersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420 // Width of a card + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-gray-50 py-17">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 px-6">
          <h2
            className="mb-0"
            style={{
              color: "#16242A",
              fontSize: "42px",
              fontFamily: "Gilroy",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Explore Our Early Bird Offers
          </h2>
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontFamily: "Gilroy",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
            className="max-w-3xl mx-auto"
          >
            Grab our early bird offer deals and enjoy your vacation with multiple benefits
          </p>
        </div>

        {/* Early Bird Offers Carousel */}
        <div className="relative px-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 my-[-2rem]"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* Shimla, Kullu, Manali Card */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/beach-birds-sunset.jpeg"
                  alt="Shimla, Kullu, Manali in Winters"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-3 right-4 inline-flex items-center justify-start gap-1 rounded-[16px] bg-[#FF6A00] px-5 py-2">
                  <DiscountIcon className="h-5 w-5 text-white" />
                  <span className="font-gilroy text-[16px] font-medium text-white">Early Bird Offer</span>
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 27.56%, rgba(0, 0, 0, 0.79) 70.08%, rgba(0, 0, 0, 0.90) 100%)'
                  }}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {/* Duration Badge */}
                  <div 
                    style={{
                      paddingLeft: 16, 
                      paddingRight: 16, 
                      paddingTop: 8, 
                      paddingBottom: 8, 
                      background: 'rgba(0, 0, 0, 0.50)', 
                      borderRadius: 10, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        color: 'white', 
                        fontSize: 16, 
                        fontFamily: 'Gilroy', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}
                    >
                      6N/7D
                  </div>
                  </div>
                  <h3 
                    className="font-semibold font-gilroy"
                    style={{ fontSize: '22px', color: '#FFFFFF' }}
                  >
                    Shimla, Kullu, Manali in Winters
                  </h3>
                  <p className="mb-4 font-gilroy font-medium" style={{ color: '#E6E2C3' }}>Himachal Pradesh</p>

                  {/* Package Details */}
                  <div className="flex gap-3 pt-0 mb-4">
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_flight.svg" alt="Flight" style={{width: '100%', height: '100%'}} />
                    </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        2 Flights
                    </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <HotelIcon className="text-white" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        11 Hotels
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/trekkingg.svg" alt="Activity" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        5 Activities
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_cab.svg" alt="Transfer" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        4 Transfers
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="36" 
                        height="37" 
                        viewBox="0 0 36 37" 
                        fill="none"
                        style={{ width: '36px', height: '36px' }}
                      >
                        <path 
                          d="M27 7.84094H10.5H15C16.5913 7.84094 18.1174 8.47308 19.2426 9.5983C20.3679 10.7235 21 12.2496 21 13.8409C21 15.4322 20.3679 16.9584 19.2426 18.0836C18.1174 19.2088 16.5913 19.8409 15 19.8409H10.5L19.5 28.8409M10.5 13.8409H27" 
                          stroke="#F56600" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span 
                        className="font-gilroy"
                        style={{
                          color: 'white',
                          fontSize: 32,
                          fontWeight: '550',
                          wordWrap: 'break-word',
                          marginLeft: '2px'
                        }}
                      >
                        5,999
                      </span>
                    </div>
                    <span className="line-through font-gilroy font-medium text-lg" style={{ color: '#E6E2C3', marginTop: '10px' }}>
                      ₹12,999
                    </span>
                    <span className="font-gilroy font-medium text-base" style={{ color: '#E6E2C3', marginTop: '10px' }}>Per Person</span>
                  </div>

                  <div className="flex items-center" style={{ marginTop: '-8px' }}>
                    <p 
                      className="font-gilroy"
                      style={{
                        color: '#E6E2C3',
                        fontSize: 16,
                        fontWeight: '400',
                        whiteSpace: 'nowrap',
                        paddingLeft: '5px'
                      }}
                    >
                      Includes taxes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desert Odyssey Card */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Summer Sale Banner */}
              <div className="absolute top-[-12px] left-[-15px] w-[128px] h-[121px] z-10">
                <Image src="/images/Vector 33.svg" alt="Summer sale banner" layout="fill" />
                <span className="absolute top-[75px] left-[12px] transform -rotate-45 origin-top-left text-[#16242A] text-sm font-gilroy font-bold">
                  SUMMER SALE!
                </span>
              </div>

              <div className="h-[450px] bg-gray-100 relative rounded-2xl">
                <img
                  src="/images/desert-camels-dunes.jpeg"
                  alt="The Desert Odyssey - Camels crossing golden sand dunes"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-3 right-4 inline-flex items-center justify-start gap-1 rounded-[16px] bg-[#FF6A00] px-5 py-2">
                  <DiscountIcon className="h-5 w-5 text-white" />
                  <span className="font-gilroy text-[16px] font-medium text-white">Early Bird Offer</span>
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 27.56%, rgba(0, 0, 0, 0.79) 70.08%, rgba(0, 0, 0, 0.90) 100%)'
                  }}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {/* Duration Badge */}
                  <div 
                    style={{
                      paddingLeft: 16, 
                      paddingRight: 16, 
                      paddingTop: 8, 
                      paddingBottom: 8, 
                      background: 'rgba(0, 0, 0, 0.50)', 
                      borderRadius: 10, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        color: 'white', 
                        fontSize: 16, 
                        fontFamily: 'Gilroy', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}
                    >
                      6N/7D
                  </div>
                  </div>
                  <h3 
                    className="font-semibold font-gilroy"
                    style={{ fontSize: '22px', color: '#FFFFFF' }}
                  >
                    The Desert Odyssey
                  </h3>
                  <p className="mb-4 font-gilroy font-medium" style={{ color: '#E6E2C3' }}>Rajasthan</p>

                  {/* Package Details */}
                  <div className="flex gap-3 pt-0 mb-4">
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_flight.svg" alt="Flight" style={{width: '100%', height: '100%'}} />
                    </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        2 Flights
                    </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <HotelIcon className="text-white" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        11 Hotels
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/trekkingg.svg" alt="Activity" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        5 Activities
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_cab.svg" alt="Transfer" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        4 Transfers
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="36" 
                        height="37" 
                        viewBox="0 0 36 37" 
                        fill="none"
                        style={{ width: '36px', height: '36px' }}
                      >
                        <path 
                          d="M27 7.84094H10.5H15C16.5913 7.84094 18.1174 8.47308 19.2426 9.5983C20.3679 10.7235 21 12.2496 21 13.8409C21 15.4322 20.3679 16.9584 19.2426 18.0836C18.1174 19.2088 16.5913 19.8409 15 19.8409H10.5L19.5 28.8409M10.5 13.8409H27" 
                          stroke="#F56600" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span 
                        className="font-gilroy"
                        style={{
                          color: 'white',
                          fontSize: 32,
                          fontWeight: '550',
                          wordWrap: 'break-word',
                          marginLeft: '2px'
                        }}
                      >
                        5,999
                      </span>
                    </div>
                    <span className="line-through font-gilroy font-medium text-lg" style={{ color: '#E6E2C3', marginTop: '10px' }}>
                      ₹12,999
                    </span>
                    <span className="font-gilroy font-medium text-base" style={{ color: '#E6E2C3', marginTop: '10px' }}>Per Person</span>
                  </div>

                  <div className="flex items-center" style={{ marginTop: '-8px' }}>
                    <p 
                      className="font-gilroy"
                      style={{
                        color: '#E6E2C3',
                        fontSize: 16,
                        fontWeight: '400',
                        whiteSpace: 'nowrap',
                        paddingLeft: '5px'
                      }}
                    >
                      Includes taxes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coastal Paradise Card (moved from second set) */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/images/mountain-lake-paradise.jpeg"
                  alt="Coastal Paradise - Crystal clear mountain lake with turquoise water"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-3 right-4 inline-flex items-center justify-start gap-1 rounded-[16px] bg-[#FF6A00] px-5 py-2">
                    <DiscountIcon className="h-5 w-5 text-white" />
                  <span className="font-gilroy text-[16px] font-medium text-white">Early Bird Offer</span>
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 27.56%, rgba(0, 0, 0, 0.79) 70.08%, rgba(0, 0, 0, 0.90) 100%)'
                  }}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {/* Duration Badge */}
                  <div 
                    style={{
                      paddingLeft: 16, 
                      paddingRight: 16, 
                      paddingTop: 8, 
                      paddingBottom: 8, 
                      background: 'rgba(0, 0, 0, 0.50)', 
                      borderRadius: 10, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        color: 'white', 
                        fontSize: 16, 
                        fontFamily: 'Gilroy', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}
                    >
                      5N/6D
                  </div>
                  </div>
                  <h3 
                    className="font-semibold font-gilroy"
                    style={{ fontSize: '22px', color: '#FFFFFF' }}
                  >
                    Coastal Paradise
                  </h3>
                  <p className="mb-4 font-gilroy font-medium" style={{ color: '#E6E2C3' }}>Goa</p>

                  {/* Package Details */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_flight.svg" alt="Flight" style={{width: '100%', height: '100%'}} />
                    </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        2 Flights
                    </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <HotelIcon className="text-white" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        8 Hotels
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/trekkingg.svg" alt="Activity" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        4 Activities
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_cab.svg" alt="Transfer" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        3 Transfers
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="36" 
                        height="37" 
                        viewBox="0 0 36 37" 
                        fill="none"
                        style={{ width: '36px', height: '36px' }}
                      >
                        <path 
                          d="M27 7.84094H10.5H15C16.5913 7.84094 18.1174 8.47308 19.2426 9.5983C20.3679 10.7235 21 12.2496 21 13.8409C21 15.4322 20.3679 16.9584 19.2426 18.0836C18.1174 19.2088 16.5913 19.8409 15 19.8409H10.5L19.5 28.8409M10.5 13.8409H27" 
                          stroke="#F56600" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span 
                        className="font-gilroy"
                        style={{
                          color: 'white',
                          fontSize: 32,
                          fontWeight: '550',
                          wordWrap: 'break-word',
                          marginLeft: '2px'
                        }}
                      >
                        4,999
                      </span>
                    </div>
                    <span className="line-through font-gilroy font-medium text-lg" style={{ color: '#E6E2C3', marginTop: '10px' }}>
                      ₹10,999
                    </span>
                    <span className="font-gilroy font-medium text-base" style={{ color: '#E6E2C3', marginTop: '10px' }}>Per Person</span>
                  </div>

                  <div className="flex items-center" style={{ marginTop: '-8px' }}>
                    <p 
                      className="font-gilroy"
                      style={{
                        color: '#E6E2C3',
                        fontSize: 16,
                        fontWeight: '400',
                        whiteSpace: 'nowrap',
                        paddingLeft: '5px'
                      }}
                    >
                      Includes taxes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mountain Retreat Card (moved from second set) */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/images/snow-stupa-mountains.jpeg"
                  alt="Mountain Retreat - Buddhist stupa in snow-covered mountains"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-3 right-4 inline-flex items-center justify-start gap-1 rounded-[16px] bg-[#FF6A00] px-5 py-2">
                  <DiscountIcon className="h-5 w-5 text-white" />
                  <span className="font-gilroy text-[16px] font-medium text-white">Early Bird Offer</span>
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 27.56%, rgba(0, 0, 0, 0.79) 70.08%, rgba(0, 0, 0, 0.90) 100%)'
                  }}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {/* Duration Badge */}
                  <div 
                    style={{
                      paddingLeft: 16, 
                      paddingRight: 16, 
                      paddingTop: 8, 
                      paddingBottom: 8, 
                      background: 'rgba(0, 0, 0, 0.50)', 
                      borderRadius: 10, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        color: 'white', 
                        fontSize: 16, 
                        fontFamily: 'Gilroy', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}
                    >
                      7N/8D
                  </div>
                  </div>
                  <h3 
                    className="font-semibold font-gilroy"
                    style={{ fontSize: '22px', color: '#FFFFFF' }}
                  >
                    Mountain Retreat
                  </h3>
                  <p className="mb-4 font-gilroy font-medium" style={{ color: '#E6E2C3' }}>Kashmir</p>

                  {/* Package Details */}
                  <div className="flex gap-3 pt-0 mb-4">
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_flight.svg" alt="Flight" style={{width: '100%', height: '100%'}} />
                    </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        2 Flights
                    </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <HotelIcon className="text-white" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        12 Hotels
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/trekkingg.svg" alt="Activity" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        6 Activities
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_cab.svg" alt="Transfer" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        5 Transfers
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="36" 
                        height="37" 
                        viewBox="0 0 36 37" 
                        fill="none"
                        style={{ width: '36px', height: '36px' }}
                      >
                        <path 
                          d="M27 7.84094H10.5H15C16.5913 7.84094 18.1174 8.47308 19.2426 9.5983C20.3679 10.7235 21 12.2496 21 13.8409C21 15.4322 20.3679 16.9584 19.2426 18.0836C18.1174 19.2088 16.5913 19.8409 15 19.8409H10.5L19.5 28.8409M10.5 13.8409H27" 
                          stroke="#F56600" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span 
                        className="font-gilroy"
                        style={{
                          color: 'white',
                          fontSize: 32,
                          fontWeight: '550',
                          wordWrap: 'break-word',
                          marginLeft: '2px'
                        }}
                      >
                        7,999
                      </span>
                    </div>
                    <span className="line-through font-gilroy font-medium text-lg" style={{ color: '#E6E2C3', marginTop: '10px' }}>
                      ₹15,999
                    </span>
                    <span className="font-gilroy font-medium text-base" style={{ color: '#E6E2C3', marginTop: '10px' }}>Per Person</span>
                  </div>

                  <div className="flex items-center" style={{ marginTop: '-8px' }}>
                    <p 
                      className="font-gilroy"
                      style={{
                        color: '#E6E2C3',
                        fontSize: 16,
                        fontWeight: '400',
                        whiteSpace: 'nowrap',
                        paddingLeft: '5px'
                      }}
                    >
                      Includes taxes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tropical Island Escape Card (moved from third set) */}
            <div
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-lg relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="h-[450px] bg-gray-100 relative">
                <img
                  src="/images/tropical-beach-aerial.jpeg"
                  alt="Tropical Island Escape - Aerial view of pristine beach with turquoise waters and colorful boats"
                  className="w-full h-full object-cover"
                />

                {/* Early Bird Badge */}
                <div className="absolute top-3 right-4 inline-flex items-center justify-start gap-1 rounded-[16px] bg-[#FF6A00] px-5 py-2">
                    <DiscountIcon className="h-5 w-5 text-white" />
                  <span className="font-gilroy text-[16px] font-medium text-white">Early Bird Offer</span>
                </div>

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 27.56%, rgba(0, 0, 0, 0.79) 70.08%, rgba(0, 0, 0, 0.90) 100%)'
                  }}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {/* Duration Badge */}
                  <div 
                    style={{
                      paddingLeft: 16, 
                      paddingRight: 16, 
                      paddingTop: 8, 
                      paddingBottom: 8, 
                      background: 'rgba(0, 0, 0, 0.50)', 
                      borderRadius: 10, 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      display: 'inline-flex'
                    }}
                  >
                    <div 
                      style={{
                        color: 'white', 
                        fontSize: 16, 
                        fontFamily: 'Gilroy', 
                        fontWeight: '400', 
                        wordWrap: 'break-word'
                      }}
                    >
                      5N/6D
                  </div>
                  </div>
                  <h3 
                    className="font-semibold font-gilroy"
                    style={{ fontSize: '22px', color: '#FFFFFF' }}
                  >
                    Tropical Island Escape
                  </h3>
                  <p className="mb-4 font-gilroy font-medium" style={{ color: '#E6E2C3' }}>Andaman & Nicobar</p>

                  {/* Package Details */}
                  <div className="flex gap-3 pt-0 mb-4">
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_flight.svg" alt="Flight" style={{width: '100%', height: '100%'}} />
                    </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        2 Flights
                    </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <HotelIcon className="text-white" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        7 Hotels
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/trekkingg.svg" alt="Activity" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        6 Activities
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 10,
                        paddingBottom: 10,
                        background: 'rgba(0, 0, 0, 0.33)',
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        display: 'inline-flex'
                      }}
                    >
                      <div style={{width: 18, height: 18, position: 'relative'}}>
                        <img src="/images/mdi_cab.svg" alt="Transfer" style={{width: '100%', height: '100%'}} />
                      </div>
                      <div style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                        3 Transfers
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="36" 
                        height="37" 
                        viewBox="0 0 36 37" 
                        fill="none"
                        style={{ width: '36px', height: '36px' }}
                      >
                        <path 
                          d="M27 7.84094H10.5H15C16.5913 7.84094 18.1174 8.47308 19.2426 9.5983C20.3679 10.7235 21 12.2496 21 13.8409C21 15.4322 20.3679 16.9584 19.2426 18.0836C18.1174 19.2088 16.5913 19.8409 15 19.8409H10.5L19.5 28.8409M10.5 13.8409H27" 
                          stroke="#F56600" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span 
                        className="font-gilroy"
                        style={{
                          color: 'white',
                          fontSize: 32,
                          fontWeight: '550',
                          wordWrap: 'break-word',
                          marginLeft: '2px'
                        }}
                      >
                        12,999
                      </span>
                    </div>
                    <span className="line-through font-gilroy font-medium text-lg" style={{ color: '#E6E2C3', marginTop: '10px' }}>
                      ₹18,999
                    </span>
                    <span className="font-gilroy font-medium text-base" style={{ color: '#E6E2C3', marginTop: '10px' }}>Per Person</span>
                  </div>

                  <div className="flex items-center" style={{ marginTop: '-8px' }}>
                    <p 
                      className="font-gilroy"
                      style={{
                        color: '#E6E2C3',
                        fontSize: 16,
                        fontWeight: '400',
                        whiteSpace: 'nowrap',
                        paddingLeft: '5px'
                      }}
                    >
                      Includes taxes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrow - Right */}
          <button
            onClick={() => scroll("right")}
            style={{ right: '12px' }}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-[#FF6A00] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg z-10"
            aria-label="Next offers"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#ff6b00] hover:bg-[#e55a00] text-white px-8 py-3 rounded-md font-gilroy font-medium transition-colors text-lg">
            Explore More
          </button>
        </div>
      </div>
      
      {/* Extended Background to Fill Gap */}
      <div className="bg-gray-50 h-16"></div>
    </div>
  )
}
