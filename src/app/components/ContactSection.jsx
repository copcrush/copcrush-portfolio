/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <>
      <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-5">
              Hello there!{" "}
            </h3>
            <p className="text-base lg:text-lg mt-5">
              Thank you for taking the time to explore my portfolio. If you're
              interested in discussing potential opportunities or have any
              inquiries, I'd love to hear from you. Please feel free to reach
              out using the contact form below, and I'll get back to you as soon
              as possible. Looking forward to connecting with you!
            </p>
            <p className="text-base lg:text-lg mt-10">Best Regards,</p>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-5">
              Navaphan Singkaew
            </h3>
          </div>
          <Image
            src="/images/contact.jpg"
            width={500}
            height={500}
            className="rounded-xl"
            alt="contact logo"
          />
        </div>
      </section>
      <section className="text-white">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Get in touch with Social Media
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 m-16">
          <div className="flex flex-row justify-center items-center mr-2 py-4 px-4 rounded-full border-2 text-white border-purple-500 bg-[#181818] hover:border-white cursor-pointer">
            <Image
              src="/images/facebook.png"
              width={50}
              height={50}
              alt="facebook logo"
            />
            <Link
              href="https://www.facebook.com/navaphan.singkaew"
              className="px-5 font-semibold text-xl"
            >
              Navaphan Singkaew
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center mr-2 py-4 px-4 rounded-full border-2 text-white border-purple-500 bg-[#181818] hover:border-white cursor-pointer">
            <Image
              src="/images/linkedin.png"
              width={50}
              height={50}
              alt="linkedin logo"
            />
            <Link
              href="https://www.linkedin.com/in/navaphan-singkaew-bb9575240/"
              className="px-5 font-semibold text-xl"
            >
              Navaphan Singkaew
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center mr-2 py-4 px-4 rounded-full border-2 text-white border-purple-500 bg-[#181818] hover:border-white cursor-pointer">
            <Image
              src="/images/github.png"
              width={50}
              height={50}
              alt="github logo"
            />
            <Link
              href="https://github.com/copcrush"
              className="px-5 font-semibold text-xl"
            >
              copcrush
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center mr-2 py-4 px-4 rounded-full border-2 text-white border-purple-500 bg-[#181818] hover:border-white">
            <Image
              src="/images/gmail.png"
              width={50}
              height={50}
              alt="gmail logo"
            />
            <div className="px-5 font-semibold text-xl">
              copnavaphan@gmail.com
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mr-2 py-4 px-4 rounded-full border-2 text-white border-purple-500 bg-[#181818] hover:border-white cursor-pointer">
            <Image
              src="/images/instagram.png"
              width={50}
              height={50}
              alt="instagram logo"
            />
            <Link
              href="https://www.instagram.com/copcrush/"
              className="px-5 font-semibold text-xl"
            >
              copcrush
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center mr-2 py-4 px-4 rounded-full border-2 text-white border-purple-500 bg-[#181818] hover:border-white cursor-pointer">
            <Image
              src="/images/phone.png"
              width={50}
              height={50}
              alt="phone logo"
            />
            <div className="px-5 font-semibold text-xl">(+66) 9 6924 2515</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
