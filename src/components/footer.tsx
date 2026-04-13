import { FaHome, FaMicrophone, FaTrophy, FaLaptopCode, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineEventSeat } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-invofest_secondary mt-8">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                className="w-48"
                alt="Invofest Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Menu Navigasi
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a className="hover:text-invofest flex items-center gap-2" href="/">
                    <FaHome className="text-lg" /> Beranda
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:text-invofest flex items-center gap-2" href="/seminar">
                    <MdOutlineEventSeat className="text-lg" /> Seminar
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:text-invofest flex items-center gap-2" href="/competition">
                    <FaTrophy className="text-lg" /> Competition
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:text-invofest flex items-center gap-2" href="/workshop">
                    <FaLaptopCode className="text-lg" /> Workshop
                  </a>
                </li>
                <li className="mb-4">
                  <a className="hover:text-invofest flex items-center gap-2" href="/talkshow">
                    <FaMicrophone className="text-lg" /> Talkshow
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Ikuti Kami
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://instagram.com/invofest_harkatnegeri" className="hover:text-invofest flex items-center gap-2" target="_blank" rel="noreferrer">
                    <FaInstagram className="text-xl" /> Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.youtube.com/@invofest2024" className="hover:text-invofest flex items-center gap-2" target="_blank" rel="noreferrer">
                    <FaYoutube className="text-xl" /> Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Alamat
              </h2>
              <ul className="w-full text-gray-500 font-medium">
                <li>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1835440601208!2d109.10518467424245!3d-6.868597267201685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9e2805c1c1b%3A0xe3e61e1ae59106ff!2sPoliteknik%20Harapan%20Bersama%20Tegal!5e0!3m2!1sen!2sid!4v1724836082153!5m2!1sen!2sid" 
                    width="250" 
                    height="200" 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className="w-[320px] sm:w-full lg:w-auto" 
                    style={{ border: "none" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025 <a href="https://flowbite.com/" className="hover:underline">INVOFEST</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.youtube.com/@invofest2024" className="text-gray-500 hover:text-gray-900">
               <FaYoutube className="text-xl" />
            </a>
            <a href="https://instagram.com/invofest_harkatnegeri" className="text-gray-500 hover:text-gray-900 ms-5">
               <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}