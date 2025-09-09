"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7decdaf-c724-43cd-ab37-cab4f001af5d",
    text1: "FLAT",
    text2: "30-50% OFF",
    buttonText: "Book Now",
  },
  {
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e53ddcbf-c5a7-41a3-af54-1d1e457195e2",
    text1: "Women's Day Special",
    text2: "FLAT 30% OFF",
    buttonText: "Explore Now",
  },
  {
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cb9fadc-7aa3-47de-93d2-3160c97a252c",
    text1: "Refer & Earn Rewards",
    text2: "Show off your adventure and unlock surprise rewards.",
    buttonText: "Explore Now",
  },
  {
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/937775d3-72e4-4aa9-9859-b4c41bf1ce8a",
    text1: "Tag & Earn Rewards",
    text2: "Show off your adventure and unlock surprise rewards.",
    buttonText: "Explore Now",
  },
  {
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf74bd6c-7cab-4661-b4de-159e70ef84b4",
    text1: "Birthday Bonus",
    text2: "Show off your adventure and unlock surprise rewards.",
    buttonText: "Explore Now",
  },
  {
    image:
      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52b2b03c-e028-4512-a8a3-a96aabc7a348",
    text1: "Explore More Exciting Rewards",
    text2: "",
    buttonText: "Explore Now",
  },
]

export function PromotionalCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  return (
    <section className="bg-gray-50 py-12">
      <div className="w-full max-w-6xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-none rounded-2xl">
                <CardContent className="relative flex items-center justify-center h-[372px] p-0">
                  <Image
                    src={slide.image}
                    alt={slide.text1}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl" />
                  <div className="relative z-10 text-white flex flex-col items-start w-full h-full p-12 justify-end">
                    <h2 className="text-3xl font-semibold font-gilroy">{slide.text1}</h2>
                    {slide.text2 && (
                      <p className="text-4xl font-bold font-gilroy mt-2">{slide.text2}</p>
                    )}
                    <Button className="mt-6 bg-[#FF6A00] hover:bg-[#FF8533] text-white font-semibold font-gilroy py-3 px-6 rounded-lg">
                      {slide.buttonText}
                    </Button>
                  </div>
                  
                  {/* Pagination Dots - Inside Slide */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => scrollTo(dotIndex)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          current === dotIndex ? "bg-[#FF6A00]" : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </div>
    </section>
  )
}
