"use client";

import { lusitana } from '@/src/app/ui/fonts';
import { motion } from 'framer-motion';

export default function PortfolioDescription() {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col gap-6">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariants}
        className="list-disc space-y-4 pl-5 bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] bg-clip-text text-xl text-transparent md:text-3xl md:leading-normal"
      >
        <motion.li variants={itemVariants}>
          <span className={`${lusitana.className}`}>
            Welcome to the portfolio of Vijay Singh — a Web Technology Specialist with over 10 years of expertise in solution design, architecture, development, and delivery of next-generation web applications.
          </span>
        </motion.li>
        <motion.li variants={itemVariants}>
          <span className={`${lusitana.className}`}>
            Passionate about leveraging advanced web technologies like React and Next.js to craft scalable and efficient web solutions that empower businesses in their digital transformation journey.
          </span>
        </motion.li>
        <motion.li variants={itemVariants}>
          <span className={`${lusitana.className}`}>
            Partnered with leading enterprise clients across diverse industries, including Insurance, Travel (Aviation), Finance, and E-commerce.
          </span>
        </motion.li>
        <motion.li variants={itemVariants}>
          <span className={`${lusitana.className}`}>
            Equipped with a deep understanding of varied business challenges and how innovative web technologies can address them effectively.
          </span>
        </motion.li>
        <motion.li variants={itemVariants}>
          <span className={`${lusitana.className}`}>
            Let’s connect to explore opportunities for collaboration or discuss how my expertise can help bring your vision to life.
          </span>
        </motion.li>
      </motion.ul>
    </div>
  );
}
