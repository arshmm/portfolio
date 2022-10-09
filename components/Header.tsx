import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[] | null;
  resume: string | undefined;
};

export default function Header({ socials, resume }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
        className="flex flex-row items-center"
      >
        {/* social icons  */}
        {socials?.map((x) => (
          <SocialIcon
            key={x._id}
            url={x.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
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
        className="flex flex-row items-center space-x-1"
      >
        <Link href={resume ? `${resume}?dl=ARSH_MANSURI_RESUME.pdf` : "#"}>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer">
            Resume
          </p>
        </Link>
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </Link>
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
