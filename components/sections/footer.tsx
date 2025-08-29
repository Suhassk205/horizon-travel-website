import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-500 border border-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
    aria-label={href}
  >
    {children}
  </a>
)

const FacebookIcon = () => (
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
  </svg>
)

const InstagramIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
  </svg>
)

const WhatsAppIcon = () => (
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.428-9.889 9.89.002 2.021.63 3.965 1.738 5.63l-1.012 3.693 3.824-1.001z" />
  </svg>
)

const TwitterIcon = () => (
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
  </svg>
)

const YoutubeIcon = () => (
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.73,18.78 17.93,18.84C17.13,18.91 16.44,18.94 15.84,18.94L15,19C12.81,19 11.2,18.84 10.17,18.56C9.27,18.31 8.69,17.73 8.44,16.83C8.31,16.36 8.22,15.73 8.16,14.93C8.09,14.13 8.06,13.44 8.06,12.84L8,12C8,9.81 8.16,8.2 8.44,7.17C8.69,6.27 9.27,5.69 10.17,5.44C11.2,5.16 12.81,5 15,5L15.84,5.06C16.44,5.06 17.13,5.09 17.93,5.16C18.73,5.22 19.36,5.31 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path>
  </svg>
)

export function Footer() {
  const footerLinks = {
    "QUICK LINKS": ["Home", "Destinations", "Offers", "Support", "About Us", "Blogs", "Review & Ratings", "Feedback"],
    SERVICES: [
      "Packages", "Hotels", "Luxury Hotels", "Cruise", "Solo Female Travel", "Trekking", "Community Trips", "Activities",
      "Cabs", "Train", "Bus", "Flights",
    ],
    OFFERS: [
      "Summer Sale", "Diwali Sale", "Phoenix Fly Rewards", "Refer & Earn Rewards", "Tag & Earn Rewards",
      "16th Night Rewards", "Group Booking Rewards", "Cruise Vouchers",
    ],
    PACKAGES: ["India", "International", "All"],
    "DESTINATION WEDDING": [
      "Overview", "Decor", "Mehendi", "Invites & Favours", "Catering", "End-to-End Planning", "Entertainment", "Venue", "Pre-Wedding",
      "Anniversary", "Ceremony", "Receptions", "Post-Wedding Celebrations", "Photography & Cinematography",
      "Accommodation", "Travel & Transportation",
    ],
    "GROUP BOOKINGS": [
      "Overview", "Seminars", "Business Meetings", "Group Travel", "Product Launch", "Planning", "Receptions", "Accommodations",
    ],
  }

  const renderLinks = (title: keyof typeof footerLinks) => (
    <div className="space-y-8">
      <h3 className="text-xl font-bold font-gilroy text-[#16242A] uppercase tracking-wide mb-8">{title}</h3>
      <div
        className={
          title === "SERVICES" || title === "DESTINATION WEDDING"
            ? "grid grid-cols-2 gap-x-8 gap-y-4"
            : "space-y-4"
        }
      >
        {title === "SERVICES" || title === "DESTINATION WEDDING" ? (
          <>
            <div className="space-y-4">
              {footerLinks[title].slice(0, 8).map((link) => (
                <a key={link} href="#" className="block text-lg font-gilroy font-normal text-[#16242A] hover:text-orange-500 transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <div className="space-y-4">
              {footerLinks[title].slice(8).map((link) => (
                <a key={link} href="#" className="block text-lg font-gilroy font-normal text-[#16242A] hover:text-orange-500 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </>
        ) : (
          footerLinks[title].map((link) => (
            <a key={link} href="#" className="block text-lg font-gilroy font-normal text-[#16242A] hover:text-orange-500 transition-colors">
              {link}
            </a>
          ))
        )}
      </div>
    </div>
  )

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          {/* Column 1 */}
          <div className="space-y-32">
            {renderLinks("QUICK LINKS")}
            {renderLinks("PACKAGES")}
          </div>

          {/* Column 2 */}
          <div className="space-y-32">
            {renderLinks("SERVICES")}
            {renderLinks("DESTINATION WEDDING")}
          </div>

          {/* Column 3 */}
          <div className="space-y-32 lg:pl-20">
            {renderLinks("OFFERS")}
            {renderLinks("GROUP BOOKINGS")}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-black opacity-60"></div>
      </div>

      {/* Logo and Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Tagline Section */}
        <div className="flex flex-col items-center mb-[50px]">
          <div className="flex items-center justify-center mb-2.5">
            <Image
              src="/images/horizon-logo1.jpeg"
              alt="Horizon Logo"
              width={162}
              height={34}
              className="h-14 w-auto"
            />
            <span className="text-4xl font-semibold font-gilroy text-[#16242A] ml-3">Horizon</span>
          </div>
          <p className="text-lg font-semibold text-[#16242A] text-center max-w-3xl leading-[24px] tracking-[-0.02em] font-gilroy">
            For the dreamers, explorers, and memory-makers — your journey starts here.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-bold font-gilroy text-[#16242A] uppercase mb-3">Contact us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-6 h-6 text-[#FF6A00]" />
                <span className="text-lg font-normal font-gilroy text-[#16242A]">phoenixflytravel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-6 h-6 text-[#FF6A00]" />
                <span className="text-lg font-normal font-gilroy text-[#16242A]">+91-8861524428</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="text-center">
            <h4 className="text-lg font-bold font-gilroy text-[#16242A] uppercase mb-3">Address</h4>

            <div className="flex items-center space-x-2.5">
              <MapPin className="w-6 h-6 text-[#FF6A00]" />
              <span className="text-lg font-normal font-gilroy text-[#16242A]">
                3rd Floor, Above United Medicals, Ramdev Galli, Belagavi - 590010
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-lg font-bold font-gilroy text-[#16242A] uppercase mb-3">Follow Us</h4>
            <div className="flex items-center space-x-4 font-normal">
              <SocialIcon href="Facebook"><FacebookIcon /></SocialIcon>
              <SocialIcon href="Instagram"><InstagramIcon /></SocialIcon>
              <SocialIcon href="Twitter"><TwitterIcon /></SocialIcon>
              <SocialIcon href="Youtube"><YoutubeIcon /></SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
