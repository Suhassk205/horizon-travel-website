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
          <div className="flex items-center justify-center mb-2.5" style={{ width: "162px", height: "34px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="162" height="34" viewBox="0 0 162 34" fill="none" style={{ width: "162px", height: "34px" }}>
              <path d="M13.592 34C9.03301 30.1399 5.62822 26.5549 3.37761 23.2448C1.127 19.9348 0.00113267 16.8704 0 14.0517C0 9.82538 1.36656 6.4584 4.09968 3.95078C6.83281 1.44315 9.99691 0.189342 13.592 0.189342C17.1882 0.189342 20.3529 1.44315 23.086 3.95078C25.8191 6.4584 27.1851 9.82538 27.184 14.0517L30.7519 10.5016L33.1305 12.8683L25.485 20.4757L17.8395 12.8683L20.2181 10.5016L23.786 14.0517C23.786 10.9806 22.8017 8.46619 20.8331 6.50855C18.8645 4.55092 16.4508 3.57153 13.592 3.57041C10.732 3.57041 8.31773 4.54979 6.34916 6.50855C4.38059 8.46732 3.39686 10.9817 3.398 14.0517C3.398 16.0522 4.23334 18.3417 5.90402 20.9203C7.5747 23.499 10.1374 26.3656 13.592 29.5201C14.1583 29.0129 14.6822 28.5199 15.1636 28.0409L16.6077 26.6039C16.4661 26.3222 16.3529 26.0196 16.2679 25.6961C16.183 25.3726 16.1405 25.0413 16.1405 24.7021C16.1405 23.5187 16.5511 22.5185 17.3723 21.7014C18.1934 20.8843 19.1987 20.4757 20.388 20.4757C21.5773 20.4757 22.5825 20.8843 23.4037 21.7014C24.2249 22.5185 24.6355 23.5187 24.6355 24.7021C24.6355 25.8854 24.2249 26.8857 23.4037 27.7028C22.5825 28.5199 21.5773 28.9284 20.388 28.9284C20.1615 28.9284 19.9559 28.9143 19.7712 28.8861C19.5866 28.858 19.3958 28.8157 19.1987 28.7593C18.3775 29.6046 17.5065 30.464 16.5856 31.3374C15.6648 32.2109 14.6669 33.0984 13.592 34Z" fill="#16242A"/>
              <path d="M57.7843 0.527447H62.4735V28.9284H57.7843V16.6348H45.5515V28.9284H40.8622V0.527447H45.5515V12.1718H57.7843V0.527447Z" fill="#16242A"/>
              <path d="M75.0701 29.4558C72.0799 29.4558 69.5382 28.428 67.445 26.3723C65.3518 24.3166 64.3052 21.7876 64.3052 18.7852C64.3052 15.7828 65.3518 13.2538 67.445 11.1981C69.5382 9.1424 72.0799 8.11456 75.0701 8.11456C78.0875 8.11456 80.6292 9.1424 82.6952 11.1981C84.7884 13.2538 85.835 15.7828 85.835 18.7852C85.835 21.7876 84.7884 24.3166 82.6952 26.3723C80.6292 28.428 78.0875 29.4558 75.0701 29.4558ZM70.544 23.3699C71.7672 24.5871 73.276 25.1957 75.0701 25.1957C76.8642 25.1957 78.3729 24.5871 79.5962 23.3699C80.8195 22.1527 81.4311 20.6245 81.4311 18.7852C81.4311 16.9459 80.8195 15.4177 79.5962 14.2005C78.3729 12.9833 76.8642 12.3747 75.0701 12.3747C73.276 12.3747 71.7672 12.9833 70.544 14.2005C69.3207 15.4177 68.709 16.9459 68.709 18.7852C68.709 20.6245 69.3207 22.1527 70.544 23.3699Z" fill="#16242A"/>
              <path d="M91.7742 12.0501C92.8888 9.53461 94.9819 8.27685 98.0537 8.27685V13.0239C96.3683 12.9157 94.9004 13.3214 93.6499 14.2411C92.3995 15.1337 91.7742 16.6213 91.7742 18.7041V28.9284H87.3704V8.64201H91.7742V12.0501Z" fill="#16242A"/>
              <path d="M103.02 4.78759C102.476 5.32856 101.824 5.59905 101.063 5.59905C100.302 5.59905 99.6357 5.32856 99.0648 4.78759C98.5212 4.21957 98.2493 3.55688 98.2493 2.79952C98.2493 2.04216 98.5212 1.393 99.0648 0.85203C99.6085 0.28401 100.275 0 101.063 0C101.851 0 102.517 0.28401 103.061 0.85203C103.605 1.393 103.876 2.04216 103.876 2.79952C103.876 3.55688 103.591 4.21957 103.02 4.78759ZM98.861 28.9284V8.64201H103.265V28.9284H98.861Z" fill="#16242A"/>
              <path d="M111.192 24.79H121.1V28.9284H105.197V26.0072L114.739 12.7804H105.605V8.64201H120.692V11.5632L111.192 24.79Z" fill="#16242A"/>
              <path d="M131.147 29.4558C128.156 29.4558 125.615 28.428 123.521 26.3723C121.428 24.3166 120.382 21.7876 120.382 18.7852C120.382 15.7828 121.428 13.2538 123.521 11.1981C125.615 9.1424 128.156 8.11456 131.147 8.11456C134.164 8.11456 136.706 9.1424 138.772 11.1981C140.865 13.2538 141.911 15.7828 141.911 18.7852C141.911 21.7876 140.865 24.3166 138.772 26.3723C136.706 28.428 134.164 29.4558 131.147 29.4558ZM126.62 23.3699C127.844 24.5871 129.352 25.1957 131.147 25.1957C132.941 25.1957 134.449 24.5871 135.673 23.3699C136.896 22.1527 137.508 20.6245 137.508 18.7852C137.508 16.9459 136.896 15.4177 135.673 14.2005C134.449 12.9833 132.941 12.3747 131.147 12.3747C129.352 12.3747 127.844 12.9833 126.62 14.2005C125.397 15.4177 124.786 16.9459 124.786 18.7852C124.786 20.6245 125.397 22.1527 126.62 23.3699Z" fill="#16242A"/>
              <path d="M154.171 8.11456C156.509 8.11456 158.398 8.85839 159.839 10.3461C161.28 11.8337 162 13.8759 162 16.4726V28.9284H157.596V16.9189C157.596 15.4041 157.188 14.2411 156.373 13.4296C155.557 12.6181 154.443 12.2124 153.029 12.2124C151.48 12.2124 150.229 12.6993 149.278 13.673C148.326 14.6197 147.851 16.0804 147.851 18.0549V28.9284H143.447V8.64201H147.851V11.2387C149.183 9.15593 151.29 8.11456 154.171 8.11456Z" fill="#16242A"/>
            </svg>
          </div>
          <p className="text-center max-w-3xl font-gilroy" style={{ color: "#16242A", fontSize: "18px", fontFamily: "Gilroy", fontWeight: "400", lineHeight: "24px", letterSpacing: "-0.36px", textTransform: "capitalize" }}>
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
