'use client'

import { Button } from "@/components/ui"
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5"
import { motion } from "framer-motion"
import { useState } from "react"

const ButtonEmail = () => {
  const [isCopied, setIsCopied] = useState(false)
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
        {!isCopied && (
          <motion.div
            initial={{ translateY: -30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 30, opacity: 0 }}
          >
            Copy Email
          </motion.div>
        )}
        {isCopied && (
          <motion.div
            initial={{ translateY: 30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 30, opacity: 0 }}
          >
            Copied
          </motion.div>
        )}
      </div>
    </Button >
  )
}

export default ButtonEmail