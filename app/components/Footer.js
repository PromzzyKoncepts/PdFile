"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <div className={`bg-[#FAFAF9] relative `}>
      <section className="section ">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>

      <div className="bg-gradient-to-t to-slate-600 from-slate-900 pt-10 px-5  pb-7 sm:px-24">
        <div className=" text-white  flex flex-wrap items-start justify-between gap-6">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-orange pb-3">Quick Links</h3>
            <Link href="/lrbf">About</Link>
            <Link href="/videos">Services</Link>
            <Link href="/record">Portfolio</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl text-orange font-bold  pb-3">Enquiry</h3>
            <Link href="/read">Contact</Link>
            <Link href="/t&c">Terms and Conditions</Link>
            <Link href="/faqs">FAQS</Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl text-orange font-bold  pb-3">Support</h3>
            <a href="mailto:okechukwupromise638@gmail.com" className="flex items-center gap-1">
              <CiMail /> Email Support
            </a>
            <a href="tel:07012897856" className="flex items-center gap-1">
              <CiPhone /> Phone Support
            </a>
            
          </div>
          <div className="">
            <h3 className="text-xl text-orange pb-3 font-bold  ">Connect with Us</h3>
            <div className="flex gap-2 items-center">
              <a
                href="https://facebook.com"
                className="p-3 bg-blue-500 rounded-full"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://x.com/"
                className="p-3 bg-blue-500 text-white rounded-[100%]"
              >
                <FaXTwitter />{" "}
              </a>
              <a
                href="https://x.com/"
                className="p-3 bg-lime-600 text-white rounded-[100%]"
              >
                <FaWhatsapp />{" "}
              </a>
              
            </div>
          </div>
        </div>

        <div className="pt-7 text-white">
          <h3>GET DAILY/WEEKLY UPDATES</h3>
          <small>Receive emails on our newsletters</small>
          <form className="mt-4  flex items-center  sm:w-fit bg-white rounded-xl">
            <input
              type="email"
              name="email"
              className="bg-transparent text-black p-2 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="  bg-gradient-to-bl from-amber-300 to-orange-400  rounded-r-xl p-3"
            >
              subscribe
            </button>
          </form>
        </div>

        <hr className="my-6 border-slate-500" />

        <div className="text-xs text-center  text-slate-400 sm:float-right">
          Copyright &copy; {currentYear} PDFile All Rights
          Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
