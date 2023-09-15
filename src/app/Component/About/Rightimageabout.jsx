import React from "react";
import Primarybutton from "../../Common/PrimaryButton/index";
import Link from 'next/link'
import { motion } from "framer-motion";
import Learnmore from "../../Common/LearnMore/Learnmore";

function Rightimageabout() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-[2rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="flex items-center justify-center"
        >
          <img
            className="lg:w-[66%] lg:ml-[-2rem] mt-[5rem] lg:mt-0 "
            src="/Homepage/About.png"
            alt="About Image"
          />
        </motion.div>
        <div className="flex-1 ">
          <h4 className="flex  font-bold gradient justify-center lg:justify-start text-[1rem] lg:text-[1.3rem] w-[90%] ">
            ABOUT US
          </h4>
          <h2 className="font-bold text-[2rem] lg:text-[2.5rem] mt-[1rem] lg:mt-[0rem]">
            What we provide ?
          </h2>
          <p className="regular  text-[1rem] text-[#ffffff] mb-[2.6rem] mt-[1rem]">
            We provide a wide range of blockchain services that cater to the
            specific needs of businesses and individuals. Our offerings include
            comprehensive solutions for Smart Contract audits and decentralized
            applications. Our team of highly experienced blockchain experts
            collaborates closely with you to gain a deep understanding of your
            unique requirements. We then deliver customized solutions that
            foster innovation and drive growth.
          </p>
          <h3 className="medium font-bold text-[1.5rem] lg:text-[2rem] text-[#ffffff]">
            Expe dApp Creator
          </h3>
          <p className="regular text-[1rem]  text-[#ffffff] mb-[1.7rem]">
            Leverage blockchain`s benefits with our secure DApp creation
            services. From decentralized marketplaces to financial products, our
            experienced team helps businesses harness the power of reliable
            blockchain technology. Contact us now to bring your ideas to life
            and explore the possibilities.
          </p>
          <div className="group">
            <Link href={"https://t.me/Ritz_Expelee"}>
              <Learnmore text="Lets Talk" />
            </Link>
          </div>
          <div className="mt-[3.6rem]">
            <Link href="/team">
              <Primarybutton text={"More About Us"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightimageabout;
