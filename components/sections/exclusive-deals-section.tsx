"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Clock,
  IndianRupee,
  MapPin,
  Plane,
  Building2,
  Car,
  Activity,
  Ship,
  Mountain,
  Ticket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const categories = [
  "Deals",
  "Hotels",
  "Packages",
  "Cruise",
  "Cabs",
  "Activities",
  "Community Trips",
  "Trekking",
]

const dealsData = [
  {
    type: "Hotel",
    title: "Lemon Tree Hotel",
    location: "New Delhi",
    price: 5999,
    originalPrice: 12999,
    imageUrl: "/images/hotel-room-tropical.jpeg",
    timer: "Ends in 11h : 32m : 45s",
  },
  {
    type: "Package",
    title: "Shimla, Kullu & Manali",
    location: "Manali",
    price: 10999,
    originalPrice: 12999,
    duration: "6N/7D",
    inclusions: [
      { icon: Plane, text: "2 Flights" },
      { icon: Building2, text: "11 Hotels" },
      { icon: Mountain, text: "5 Activities" },
      { icon: Car, text: "4 Transfers" },
    ],
    imageUrl: "/images/mountain-lake-paradise.jpeg",
    timer: "Ends in 11h : 32m : 45s",
  },
  {
    type: "Cruise",
    title: "Cordelia Cruise",
    location: "Chennai - Chennai",
    price: 10999,
    originalPrice: 12999,
    duration: "6N/7D",
    date: "16 October 2023",
    imageUrl: "/images/tropical-sunset-beach.jpeg",
    timer: "Ends in 11h : 32m : 45s",
  },
  {
    type: "Trekking",
    title: "Spiti Valley Trek",
    location: "Himachal Pradesh",
    price: 10999,
    originalPrice: 12999,
    duration: "6N/7D",
    dates: "12 Oct 2023, 22 Nov 2023, 01 Dec 2023 +2 more",
    imageUrl: "/images/snow-stupa-mountains.jpeg",
    timer: "Ends in 11h : 32m : 45s",
  },
  {
    type: "Community Trip",
    title: "Zanskar Valley Trip",
    location: "Leh",
    price: 10999,
    originalPrice: 12999,
    duration: "6N/7D",
    dates: "12 Oct 2023, 22 Nov 2023, 01 Dec 2023 +2 more",
    imageUrl: "/images/starry-mountain-night.jpeg",
    timer: "Ends in 11h : 32m : 45s",
  },
]

const ExclusiveDealsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Deals")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420 // Width of a card + gap
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }


  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 
          className="text-center mb-8"
          style={{
            color: '#16242A',
            fontSize: '42px',
            fontFamily: 'Gilroy',
            fontWeight: '600',
            lineHeight: '64px',
            wordWrap: 'break-word'
          }}
        >
          Exclusive Deals & Offers
        </h2>
        <div className="bg-white rounded-2xl p-6 max-w-7xl mx-auto">
                    <div 
            style={{
              width: '100%', 
              height: '100%', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              display: 'inline-flex'
            }}
            className="mb-6"
          >
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 16,
                  paddingBottom: 16,
                  background: activeCategory === category ? '#FFEFDF' : 'transparent',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                <div
                  style={{
                    color: activeCategory === category ? '#FF6A00' : '#16242A',
                    fontFamily: 'Gilroy',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    letterSpacing: '-0.8px',
                    lineHeight: '24.5px'
                  }}
                >
                  {category}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {dealsData.map((deal, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden group flex-shrink-0"
                  style={{ 
                    scrollSnapAlign: "start",
                    width: '410px',
                    height: '450px',
                    borderRadius: '20px'
                  }}
                >
                  <Image
                    src={deal.imageUrl}
                    alt={deal.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 27.56%, rgba(0, 0, 0, 0.79) 70.08%, rgba(0, 0, 0, 0.90) 100%)'
                    }}
                  />

                  <div 
                    className="absolute top-4 right-4 text-white flex items-center gap-1"
                    style={{
                      display: 'flex',
                      width: '224px',
                      height: '40px',
                      padding: '10px 20px',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0,
                      borderRadius: '16px',
                      background: '#FF6A00'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        width: '20px',
                        height: '20px',
                        padding: '1.667px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Clock size={16} />
                    </div>
                    <span 
                      className="text-white text-base font-medium font-gilroy"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Gilroy, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal'
                      }}
                    >
                      {deal.timer}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-black/50 px-3 py-1 rounded-lg">
                        <span className="text-sm font-gilroy font-medium">{deal.type}</span>
                      </div>
                      {deal.duration && (
                        <div className="bg-black/50 px-3 py-1 rounded-lg">
                          <span className="text-sm font-gilroy font-medium">{deal.duration}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold font-gilroy">{deal.title}</h3>
                    <p className="text-gray-300 mb-4 font-gilroy">{deal.location}</p>

                    {deal.inclusions && (
                      <div className="grid grid-cols-4 gap-2 pt-0 mb-4">
                        {deal.inclusions.map((inclusion, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center bg-black/70 px-2 py-1 rounded-md"
                          >
                            <inclusion.icon className="w-5 h-5 text-[#ff6b00] mb-1" />
                            <span className="text-xs font-gilroy text-gray-300">{inclusion.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {deal.date && (
                      <div className="flex items-center gap-2 my-4">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="21" 
                          viewBox="0 0 20 21" 
                          fill="none"
                          style={{ width: '20px', height: '20px' }}
                        >
                          <path d="M6.66667 12.0079C6.43056 12.0079 6.2325 11.9279 6.0725 11.7679C5.9125 11.6079 5.83278 11.4102 5.83333 11.1746C5.83333 10.9385 5.91333 10.7404 6.07333 10.5804C6.23334 10.4204 6.43111 10.3407 6.66667 10.3413C6.90278 10.3413 7.10083 10.4213 7.26084 10.5813C7.42084 10.7413 7.50056 10.939 7.5 11.1746C7.5 11.4107 7.42 11.6088 7.26 11.7688C7.1 11.9288 6.90222 12.0085 6.66667 12.0079ZM10 12.0079C9.76389 12.0079 9.56583 11.9279 9.40583 11.7679C9.24583 11.6079 9.16611 11.4102 9.16667 11.1746C9.16667 10.9385 9.24667 10.7404 9.40667 10.5804C9.56667 10.4204 9.76445 10.3407 10 10.3413C10.2361 10.3413 10.4342 10.4213 10.5942 10.5813C10.7542 10.7413 10.8339 10.939 10.8333 11.1746C10.8333 11.4107 10.7533 11.6088 10.5933 11.7688C10.4333 11.9288 10.2356 12.0085 10 12.0079ZM13.3333 12.0079C13.0972 12.0079 12.8992 11.9279 12.7392 11.7679C12.5792 11.6079 12.4994 11.4102 12.5 11.1746C12.5 10.9385 12.58 10.7404 12.74 10.5804C12.9 10.4204 13.0978 10.3407 13.3333 10.3413C13.5694 10.3413 13.7675 10.4213 13.9275 10.5813C14.0875 10.7413 14.1672 10.939 14.1667 11.1746C14.1667 11.4107 14.0867 11.6088 13.9267 11.7688C13.7667 11.9288 13.5689 12.0085 13.3333 12.0079ZM4.16667 18.6746C3.70833 18.6746 3.31583 18.5113 2.98917 18.1846C2.6625 17.8579 2.49945 17.4657 2.5 17.0079V5.34127C2.5 4.88293 2.66333 4.49043 2.99 4.16377C3.31667 3.8371 3.70889 3.67405 4.16667 3.6746H5V2.00793H6.66667V3.6746H13.3333V2.00793H15V3.6746H15.8333C16.2917 3.6746 16.6842 3.83793 17.0108 4.1646C17.3375 4.49127 17.5006 4.88349 17.5 5.34127V17.0079C17.5 17.4663 17.3367 17.8588 17.01 18.1854C16.6833 18.5121 16.2911 18.6752 15.8333 18.6746H4.16667ZM4.16667 17.0079H15.8333V8.6746H4.16667V17.0079Z" fill="white"/>
                        </svg>
                        <span className="text-sm font-gilroy text-white">{deal.date}</span>
                      </div>
                    )}

                    {deal.dates && (
                      <div className="flex items-center gap-2 my-4">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="21" 
                          viewBox="0 0 20 21" 
                          fill="none"
                          style={{ width: '20px', height: '20px' }}
                        >
                          <path d="M6.66667 12.0079C6.43056 12.0079 6.2325 11.9279 6.0725 11.7679C5.9125 11.6079 5.83278 11.4102 5.83333 11.1746C5.83333 10.9385 5.91333 10.7404 6.07333 10.5804C6.23334 10.4204 6.43111 10.3407 6.66667 10.3413C6.90278 10.3413 7.10083 10.4213 7.26084 10.5813C7.42084 10.7413 7.50056 10.939 7.5 11.1746C7.5 11.4107 7.42 11.6088 7.26 11.7688C7.1 11.9288 6.90222 12.0085 6.66667 12.0079ZM10 12.0079C9.76389 12.0079 9.56583 11.9279 9.40583 11.7679C9.24583 11.6079 9.16611 11.4102 9.16667 11.1746C9.16667 10.9385 9.24667 10.7404 9.40667 10.5804C9.56667 10.4204 9.76445 10.3407 10 10.3413C10.2361 10.3413 10.4342 10.4213 10.5942 10.5813C10.7542 10.7413 10.8339 10.939 10.8333 11.1746C10.8333 11.4107 10.7533 11.6088 10.5933 11.7688C10.4333 11.9288 10.2356 12.0085 10 12.0079ZM13.3333 12.0079C13.0972 12.0079 12.8992 11.9279 12.7392 11.7679C12.5792 11.6079 12.4994 11.4102 12.5 11.1746C12.5 10.9385 12.58 10.7404 12.74 10.5804C12.9 10.4204 13.0978 10.3407 13.3333 10.3413C13.5694 10.3413 13.7675 10.4213 13.9275 10.5813C14.0875 10.7413 14.1672 10.939 14.1667 11.1746C14.1667 11.4107 14.0867 11.6088 13.9267 11.7688C13.7667 11.9288 13.5689 12.0085 13.3333 12.0079ZM4.16667 18.6746C3.70833 18.6746 3.31583 18.5113 2.98917 18.1846C2.6625 17.8579 2.49945 17.4657 2.5 17.0079V5.34127C2.5 4.88293 2.66333 4.49043 2.99 4.16377C3.31667 3.8371 3.70889 3.67405 4.16667 3.6746H5V2.00793H6.66667V3.6746H13.3333V2.00793H15V3.6746H15.8333C16.2917 3.6746 16.6842 3.83793 17.0108 4.1646C17.3375 4.49127 17.5006 4.88349 17.5 5.34127V17.0079C17.5 17.4663 17.3367 17.8588 17.01 18.1854C16.6833 18.5121 16.2911 18.6752 15.8333 18.6746H4.16667ZM4.16667 17.0079H15.8333V8.6746H4.16667V17.0079Z" fill="white"/>
                        </svg>
                        <span className="text-sm font-gilroy text-white">{deal.dates}</span>
                      </div>
                    )}

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
                          <span className="text-white text-3xl font-bold font-gilroy ml-1">
                            {deal.price.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-white line-through font-gilroy text-lg">
                          ₹{deal.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-white font-gilroy text-sm">Per Person</span>
                      </div>
                    <div className="flex items-center">
                      <div style={{ width: '36px' }}></div>
                      <p className="text-white font-gilroy text-xs">Includes taxes</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#FF6A00] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors z-10"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExclusiveDealsSection
