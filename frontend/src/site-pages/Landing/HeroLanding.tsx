import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './HeroLanding.module.css';

export const HeroLanding: React.FC = () => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroBackground}>
                {/* Minimalist dark background with an image overlay but zero glow */}
                <img 
                    src="/imagesfortrenchlabs/locked in.jpg" 
                    alt="TrenchLabs Background" 
                    className={styles.bgImage} 
                />
                <div className={styles.bgOverlay} />
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className={styles.content}
                >
                    <img 
                        src="/trenchlabs-logo-transparent.png" 
                        alt="TrenchLabs Logo" 
                        className={styles.logo} 
                    />
                    <h1 className={styles.title}>
                        Precision Engineering.
                    </h1>
                    <p className={styles.subtitle}>
                        We build high-performance systems for modern businesses.
                    </p>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className={styles.scrollIndicator}
                >
                    <span className={styles.scrollText}>Scroll to explore</span>
                    <ChevronDown size={24} className={styles.scrollIcon} />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroLanding;
