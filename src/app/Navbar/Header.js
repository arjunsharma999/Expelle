"use client";
import PrimaryButton from "../Common/PrimaryButton/index"
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import {HiMenuAlt3} from "react-icons/Hi"
import { motion } from "framer-motion";
import Link from "next/link";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="container-fluid shadow-md bg-[#6d6d6d9d] w-full fixed top-0 left-0 py-2 z-50">
        <div className="container mx-auto">
          <div className="flex flex-row mx-auto px-5 justify-between items-center bg-bgGrey relative text-textWhite">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <Link href={"/"}>
              <img
                className="w-[10rem] lg:w-[10rem] lg:h-[3.5rem]"
                src="https://www.expelee.com/static/logo.svg"
                alt="Expelee Logo"
              />
            </Link>
          </motion.div>
            <div className="sm:flex flex-row justify-between items-center gap-10 hidden ">
              <div className="font-semibold flex gap-1 items-center duration-300">
              Home
              </div>
              <div className="font-semibold flex gap-1 items-center group/Home">
                Services
                <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
                {/* dropdown */}
                <div className="absolute top-[65%] py-6 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300 ">
                  <div className="w-full">
                    <div className=" bg-[#dffbfffe] blurBg2  px-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <h1>Hello</h1>
                              <p className="text-sm">
                                Unlocking possibilities and exceeding
                                expectations through our comprehensive range of
                                exceptional services.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <h1>Hello</h1>
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits (KYC)
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee NFT
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Marketing
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <h1>Hello</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* dropdown */}
              </div>
              <div className="font-semibold flex gap-1 items-center   group/Home">
              About
                <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
                <div className="absolute top-[70%] py-5 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300">
                  <div className="w-full   bg-[#ffffff] backdrop-blur bg-blur">
                    <div className="container mx-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <h1>Hello</h1>
                              <p className="text-sm">
                                Unlock the potential of blockchain technology
                                with our innovative solutions, leading the way
                                towards a decentralized future.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                            <h1>Hello</h1>
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <h1>Hello</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-semibold flex gap-1 items-center   group/Home">
              Portfolio
                <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
                <div className="absolute top-[70%] py-5 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300">
                  <div className="w-full   bg-[#ffffff] backdrop-blur bg-blur">
                    <div className="container mx-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                            <h1>Hello</h1>
                              <p className="text-sm">
                                Gain deeper insights about the exceptional team
                                and individuals driving Expelee's success and
                                revolutionizing the blockchain industry
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <h1>Hello</h1>
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits (KYC)
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <a
                              href="#"
                              className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                            >
                              Expelee Audits (KYC)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-semibold flex gap-1 items-center   group/Home">
                Resouces
                <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
                <div className="absolute top-[70%] py-5 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300">
                  <div className="w-full   bg-[#ffffff] backdrop-blur bg-blur duration-300">
                    <div className="container mx-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                            <h1>Hello</h1>
                              <p className="text-sm">
                                Empower your blockchain journey with our
                                comprehensive suite of resources, including case
                                studies & insightful blogs
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                            <h1>Hello</h1>
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Case Study
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Marketing
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <a
                              href="#"
                              className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                            >
                              Expelee Marketing
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-semibold flex gap-1 items-center">
              Testinomal
              </div>
              <div className="font-semibold flex gap-1 items-center">
              Contact
              </div>
            </div>
            <div className="hidden lg:block">
                  <PrimaryButton text="Get Started" />
            </div>
            <div
              className="blocl lg:hidden relative"
              onClick={() => {
                setShowMenu(showMenu === true ? false : true);
              }}
            >
              <div><HiMenuAlt3 size={30} /></div>
            </div>
          </div>
        </div>
        <div
          className={`${
            showMenu ? "flex lg:hidden" : "hidden fixed top-[5%] lg:hidden duration-300"
          }`}
        >
          <div className="my-5 mx-5">
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-2 relative">
                <div className="flex gap-2 items-center group/Drops">
                  <p className="text-normal">Home</p>
                </div>
                <div className="hidden flex-col gap-1 bg-transperent  group-hover/Drops:flex ">
                  <p className="text-normal">Services</p>
                  <p className="text-normal">Services</p>
                  <p className="text-normal">Services</p>
                </div>
              </div>

            <div className="flex gap-4 items-center">
              <p className="text-normal">Services</p>

              <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Solutions</p>

              <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Company</p>

              <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Resouces</p>

              <BiChevronDown className="group-hover/Home:rotate-180 duration-300" />
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Contract</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Navbar;
