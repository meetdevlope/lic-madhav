import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-brand text-white px-10 pt-8 pb-4 tab:px-20 ">
      <div className="flex flex-col gap-4 tab:flex-row justify-between">
        <div className="h-16">
          <img
            src="/images/madhav_lic_logo_white.png"
            alt="logo"
            className="h-full cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        {/* <div className="text-white flex flex-col justify-between tab:flex-row mt-8 gap- tab:my-0"> */}
        <div className="footer-link-container flex flex-col gap-2 text-left">
          <a onClick={() => router.push("/")} className="text-lg">
            Home
          </a>

          <a onClick={() => router.push("/contact-us")} className="text-lg">
            Contact Us
          </a>
          <ul className="footer-link">
            <span className="text-lg font-bold ">Know us</span>
            <li>
              <a onClick={() => router.push("/about-us")}>About Us</a>
            </li>
            <li>
              <a onClick={() => router.push("/awards")}>Awards</a>
            </li>
            <li>
              <a onClick={() => router.push("/testimonials")}>Testimonials</a>
            </li>
            <li>
              <a onClick={() => router.push("/photo-gallery")}>Photo Gallery</a>
            </li>
          </ul>
        </div>
        <div className="text-left flex flex-col gap-2">
          <a onClick={() => router.push("/nri-insurance")} className="text-lg">
            NRI Insurance{" "}
          </a>
          <ul className="footer-link">
            <span className="text-lg font-bold">Our Services</span>
            <li>
              <a onClick={() => router.push("/lifeinsurance")}>Insurance</a>
            </li>
            <li>
              <a onClick={() => router.push("/mutualfunds")}>Mutual Funds</a>
            </li>
            <li>
              <a onClick={() => router.push("/clia")}>CLIA</a>
            </li>
            <li>
              <ul>
                <span className="text-lg tab:text-base">General Insurance</span>
                <li>
                  <a
                    onClick={() =>
                      router.push("/otherinsurance/auto-insurance")
                    }
                  >
                    Auto Insurance
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      router.push("/otherinsurance/health-insurance")
                    }
                  >
                    Health Insurance
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* </div> */}
        <div className="flex flex-col gap-4">
          <span className="font-bold text-lg">Get In Touch</span>
          <div className="flex gap-10 text-white text-xl">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF
                size={20}
                className="hover:text-brand-dark cursor-pointer transition"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram
                size={20}
                className="hover:text-brand-dark cursor-pointer transition"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FiTwitter
                size={20}
                className="hover:text-brand-dark cursor-pointer transition"
              />
            </a>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {" "}
            <a onClick={() => router.push("/privacy-policy")}>Privacy Policy</a>
            <a onClick={() => router.push("/terms&conditions")}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
      {/* <span className="text-white mt-10 text-xs flex justify-center items-center">
        &#169; 2022 All Rights Reserved.Developed by{" "}
        <a
          className="font-semibold text-xs hover:text-brand-dark cursor-pointer text-center"
          target="_blank"
          rel="noreferrer"
          href="https://www.demaze.in/"
        >
          &nbsp;DEMAZE TECHNOLOGIES
        </a>
      </span> */}
    </footer>
  );
};

export default Footer;
