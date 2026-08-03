import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Transitions } from '../../components/Transitions';
import { motion } from 'framer-motion';
import { cinematicStagger, cinematicUp, viewportOnce } from '../../lib/motion';
import { CinematicText } from '../../components/effects/CinematicText';
import { CinematicCard } from '../../components/effects/CinematicCard';
import { Seo } from '../../components/Seo';
import { getCaseStudy } from '../../content/caseStudies';
import styles from './CaseStudyDetail.module.css';

export const CaseStudyDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const study = getCaseStudy(id);

    return (
        <Transitions>
            <Seo title={study.title} description={study.tagline} path={`/work/${study.id}`} />
            
            {/* 1. CINEMATIC HERO */}
            <header className={styles.hero} style={{ '--theme-color': study.accent } as React.CSSProperties}>
                <div className={styles.heroGlow} style={{ background: `radial-gradient(circle at top, ${study.accent}20 0%, transparent 60%)` }} />
                <div className="container">
                    <Link to="/work" className={styles.backLink}>
                        <div className={styles.backLinkIcon}><ArrowLeft size={16} /></div>
                        <span>All Projects</span>
                    </Link>
                    <div className={styles.heroGrid}>
                        <motion.div 
                            className={styles.heroContent}
                            variants={cinematicStagger}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.div variants={cinematicUp} className={styles.categoryBadgeWrap}>
                                <span className={styles.categoryBadge} style={{ color: study.accent, border: `1px solid ${study.accent}40`, backgroundColor: `${study.accent}10` }}>
                                    {study.category}
                                </span>
                            </motion.div>
                            <motion.h1 variants={cinematicUp} className={styles.heroTitle}>
                                {study.title}
                            </motion.h1>
                            <CinematicText as="p" className={styles.tagline} staggerDelay={0.03}>{study.tagline}</CinematicText>
                        </motion.div>
                        <motion.div 
                            className={styles.heroImageFrame}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img src={study.image} alt={study.title} className={styles.heroImg} />
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* 1.5 TECH BAR */}
            <div className={styles.techBar}>
                <div className="container">
                    <div className={styles.techGrid}>
                        {study.tech.map((t, i) => (
                            <div key={i} className={styles.techItem}>
                                <div className={styles.techIcon} style={{ color: study.accent }}><CheckCircle2 size={18} /></div>
                                <div className={styles.techDetails}>
                                    <span>Technology</span>
                                    <span>{t}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. ALTERNATING CONTENT SECTIONS */}
            <section className={styles.mainContent}>
                <div className="container">
                    {/* Overview */}
                    <div className={styles.altSection}>
                        <div className={styles.altGrid}>
                            <motion.div className={styles.altText} initial={{opacity:0, y:30}} whileInView={{opacity:1,y:0}} viewport={viewportOnce}>
                                <h2 className={styles.altHeading} style={{ color: study.accent }}>01. Overview</h2>
                                <h3 className={styles.altTitle}>The Baseline</h3>
                                <p className={styles.altDesc}>{study.overview}</p>
                            </motion.div>
                            <motion.div className={styles.altImageFrame} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={viewportOnce}>
                                <img src="/imagesfortrenchlabs/download (4).jpg" alt="Overview" className={styles.altImage} />
                            </motion.div>
                        </div>
                    </div>

                    {/* Challenge (Reversed) */}
                    <div className={styles.altSection}>
                        <div className={`${styles.altGrid} ${styles.reverseGrid}`}>
                            <motion.div className={styles.altText} initial={{opacity:0, y:30}} whileInView={{opacity:1,y:0}} viewport={viewportOnce}>
                                <h2 className={styles.altHeading} style={{ color: study.accent }}>02. The Challenge</h2>
                                <h3 className={styles.altTitle}>Structural Bottlenecks</h3>
                                <p className={styles.altDesc}>{study.challenge}</p>
                            </motion.div>
                            <motion.div className={styles.altImageFrame} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={viewportOnce}>
                                <img src="/imagesfortrenchlabs/locked in.jpg" alt="Challenge" className={styles.altImage} />
                            </motion.div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className={styles.altSection}>
                        <div className={styles.altGrid}>
                            <motion.div className={styles.altText} initial={{opacity:0, y:30}} whileInView={{opacity:1,y:0}} viewport={viewportOnce}>
                                <h2 className={styles.altHeading} style={{ color: study.accent }}>03. Our Solution</h2>
                                <h3 className={styles.altTitle}>Engineered for Scale</h3>
                                <p className={styles.altDesc}>{study.solution}</p>
                            </motion.div>
                            <motion.div className={styles.altImageFrame} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={viewportOnce}>
                                <img src="/imagesfortrenchlabs/LUCES GAMER.jpg" alt="Solution" className={styles.altImage} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MEASURED PERFORMANCE OUTCOMES */}
            <section className={styles.metricsSection}>
                <div className="container">
                    <motion.div 
                        className={styles.metricsHeader}
                        variants={cinematicUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                    >
                        <span className="section-tagline">Results</span>
                        <h2 className="section-title">Performance Metrics</h2>
                    </motion.div>
                    <motion.div 
                        className={styles.metricsGrid}
                        variants={cinematicStagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                    >
                        {study.metrics.map((m, i) => (
                            <CinematicCard key={i} delay={i * 0.1}>
                                <div className={styles.metricCard}>
                                    <div className={styles.metricGlow} style={{ background: `radial-gradient(circle at top right, ${study.accent}20 0%, transparent 60%)` }} />
                                    <div className={styles.metricIconWrap} style={{ color: study.accent, backgroundColor: `${study.accent}12`, border: `1px solid ${study.accent}30` }}>
                                        <TrendingUp size={22} />
                                    </div>
                                    <div className={styles.metricValue}>{m.val}</div>
                                    <p className={styles.metricLabel}>{m.desc}</p>
                                </div>
                            </CinematicCard>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 4. NEXT CASE STUDY NAVIGATOR */}
            <section className={styles.nextSection}>
                <div className="container">
                    <CinematicCard delay={0.2}>
                        <Link to={`/work/${study.nextId}`} className={styles.nextCard}>
                            <div className={styles.nextGlow} style={{ background: `radial-gradient(circle at center, ${study.accent}15 0%, transparent 70%)` }} />
                            <div className={styles.nextText}>
                                <span>Next Case Study &rarr;</span>
                                <h3>{study.nextName}</h3>
                            </div>
                            <div className={styles.nextArrow} style={{ color: study.accent }}><ArrowRight size={28} /></div>
                        </Link>
                    </CinematicCard>
                </div>
            </section>
        </Transitions>
    );
};
export default CaseStudyDetail;
