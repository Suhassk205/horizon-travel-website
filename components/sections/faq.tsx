"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, ArrowUp } from "lucide-react"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqData = [
    {
      id: 1,
      question: "How do I join phoenix fly rewards?",
      answer:
        "Joining Phoenix Fly Rewards is simple! Sign up on our website or mobile app, complete your profile, and start earning points on every booking. You'll receive a welcome bonus and can immediately start accumulating points on flights, hotels, and travel packages.",
    },
    {
      id: 2,
      question: "Can I earn points on all types of bookings?",
      answer:
        "Yes! You can earn points on all types of bookings including flights, hotels, vacation packages, car rentals, and activities. The points earned vary based on the booking value and your membership tier. Premium members earn bonus points on every transaction.",
    },
    {
      id: 3,
      question: "Can I combine points with promotional discounts?",
      answer:
        "Absolutely! You can combine your earned points with promotional discounts and special offers. This allows you to maximize your savings by using both points redemption and current deals simultaneously for the best possible value.",
    },
    {
      id: 4,
      question: "Can I purchase a status instead of earning it through bookings?",
      answer:
        "Yes, you can purchase elite status upgrades to enjoy premium benefits immediately. This is perfect for travelers who want instant access to priority boarding, lounge access, and other exclusive perks without waiting to earn status through bookings.",
    },
    {
      id: 5,
      question: "Can I redeem my points fully for a booking?",
      answer:
        "Yes, you can redeem your points to cover the full cost of eligible bookings. The redemption rate depends on your membership tier, with higher tiers offering better point-to-value ratios. You can also use a combination of points and cash for partial redemptions.",
    },
  ]

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Exact Figma Typography */}
        <div className="text-center mb-16">
          <h2
            className="mb-4"
            style={{
              color: "#16242A",
              fontSize: "42px",
              fontFamily: "Gilroy",
              fontWeight: "600",
              lineHeight: "64px",
              wordWrap: "break-word",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              color: "#29383E",
              fontSize: "18px",
              fontFamily: "Gilroy",
              fontWeight: "500",
              lineHeight: "32px",
              wordWrap: "break-word",
            }}
          >
            Have any questions? Find all your answers in the frequently asked questions.
          </p>
        </div>

        {/* FAQ Items - Exact Figma Layout */}
        <div className="space-y-2.5">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id)

            return (
              <div
                key={item.id}
                className="bg-white border-b border-gray-200 rounded-[10px] overflow-hidden shadow-sm"
              >
                {/* Question Header - Exact Figma Styling */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  {/* Question Text - Exact Figma Typography */}
                  <span className="text-lg font-semibold font-gilroy text-[#16242A] tracking-[-0.02em] leading-[22px]">
                    {item.question}
                  </span>

                  {/* Chevron Icon - Exact Figma Styling */}
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-black transition-transform duration-300" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-black transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Answer Content - Exact Figma Styling */}
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-base text-gray-700 leading-relaxed font-gilroy">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Back to Top Button - Exact Figma Design */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>

      {/* Custom CSS for smooth animations */}
      <style jsx>{`
        /* Smooth expand/collapse animation */
        .faq-content {
          transition: max-height 0.3s ease-in-out;
        }

        /* Enhanced hover effects */
        button:hover .chevron {
          transform: scale(1.1);
        }

        /* Back to top button pulse effect */
        @keyframes pulse-shadow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 102, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 102, 0, 0);
          }
        }

        .fixed button:hover {
          animation: pulse-shadow 2s infinite;
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .fixed {
            bottom: 1rem;
            right: 1rem;
          }
          
          .fixed button {
            width: 3rem;
            height: 3rem;
          }
        }
      `}</style>
    </section>
  )
}
