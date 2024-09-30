'use client'

import { motion } from 'framer-motion';

const MotionSection = ({ children, delay = 0 }: { children: React.ReactNode, delay: number }) => {
    return (
        <motion.section
            initial={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', ease: "easeInOut", duration: 0.75, delay: delay }}
        >
            {children}
        </motion.section>
    );
};

export default MotionSection;
