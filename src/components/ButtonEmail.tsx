'use client'

import { Button } from "@/components/ui"
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const ButtonEmail = () => {
  const [isCopied, setIsCopied] = useState(false)
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  });

  const ButtonVariant = {
    initial: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.75,
      }
    },
    enter: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.75,
      }
    },
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("achmadzaky9d@gmail.com")
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  return (
    <Button
      onClick={handleCopyEmail}
      icon={isCopied ? <IoCheckmarkOutline className="size-5 text-emerald-500" /> : <IoCopyOutline className="size-5 text-neutral-500" />}
      size="md"
      variant={isCopied ? "success" : "outline"}
      className="w-full md:w-auto overflow-hidden"
    >
      <div className="relative">
        <motion.div
          key={isCopied ? "copied" : "copy-email"}
          variants={firstRender.current ? {} : ButtonVariant}
          initial="initial"
          animate="enter"
          exit="initial"
        >
          {isCopied ? "Copied" : "Copy Email"}
        </motion.div>
      </div>
    </Button >
  )
}

export default ButtonEmail