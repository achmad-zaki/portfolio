'use client'

import { motion } from 'framer-motion';
import { FC } from 'react';

interface IMotionSectionProps {
    children: React.ReactNode
    delay?: number
}

const MotionSection: FC<IMotionSectionProps> = ({
    children,
    delay,
}) => {

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
