import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft } from 'lucide-react';
import { Transitions } from '../../components/Transitions';
import { Seo } from '../../components/Seo';
import { getServiceDetail } from '../../content/services';
import { SERVICE_ICONS } from '../../content/serviceIcons';
import { WORK_PROJECTS } from '../../content/caseStudies';
import { ProjectCard } from '../../components/ProjectCard';
import styles from './ServiceDetail.module.css';

export const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const srv = getServiceDetail(id);
    const routeKey = srv.id;
    const ServiceIcon = SERVICE_ICONS[srv.icon];

    // Build radial glow variable for the theme color
    const themeGlow = `radial-gradient(circle at center, ${srv.color}20 0%, transparent 60%)`;

    return (
        <Transitions>
            <Seo title={srv.name} description={srv.tagline} path={`/services/${routeKey}`} />
            
            {/* 1. CINEMATIC HERO (Split Layout) */}
            <header className={styles.hero}>
                <div className={styles.heroGlow} style={{ background: themeGlow }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Link to="/services" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Services
                    </Link>
                    
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <div className={styles.iconBox} style={{ color: srv.color, backgroundColor: `${srv.color}10`, border: `1px solid ${srv.color}30` }}>
                                <ServiceIcon size={48} strokeWidth={1.5} />
                            </div>
                            <h1 className={styles.heroTitle}>{srv.name}</h1>
                            <p className={styles.tagline} style={{ color: srv.color }}>{srv.tagline}</p>
                            <p className={styles.desc}>{srv.desc}</p>
                        </div>
                        <div className={styles.heroImageFrame}>
                            <img src="/imagesfortrenchlabs/Technologie-Netzwerk-Hintergrund_ _ Premium Foto.jpg" alt={srv.name} className={styles.heroImg} />
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. RELEVANT CASE STUDIES */}
            {(() => {
                const relevantProjects = WORK_PROJECTS.filter(p => srv.name.toLowerCase().includes(p.category.toLowerCase()) || p.category.toLowerCase().includes(srv.name.toLowerCase().replace('modern ', '')));
                if (relevantProjects.length === 0) return null;
                return (
                    <section className={styles.caseStudySection}>
                        <div className="container">
                            <div className={styles.sectionHeader}>
                                <span className="section-tagline" style={{ color: srv.color }}>Proven Output</span>
                                <h2 className="section-title">Systems Shipped Under This Track</h2>
                            </div>
                            <div className={styles.caseStudyGrid}>
                                {relevantProjects.map(proj => (
                                    <div key={proj.id} className={styles.projectWrapper}>
                                        <ProjectCard
                                            id={proj.id}
                                            title={proj.title}
                                            category={proj.category}
                                            tagline={proj.tagline}
                                            tech={proj.tech}
                                            accentColor={srv.color}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })()}

            {/* 3. PRODUCTION PROCESS (Alternating Layout) */}
            <section className={styles.processSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className="section-tagline" style={{ color: srv.color }}>Timeline</span>
                        <h2 className="section-title">Delivery Workflow</h2>
                    </div>
                    <div>
                        {srv.process.map((p, idx) => (
                            <div key={idx} className={styles.altSection}>
                                <div className={`${styles.altGrid} ${idx % 2 !== 0 ? styles.reverseGrid : ''}`}>
                                    <div className={styles.altText}>
                                        <div className={styles.stepNumWrap}>
                                            <div className={styles.stepNum} style={{ color: srv.color, backgroundColor: `${srv.color}15`, border: `1px solid ${srv.color}30` }}>
                                                {p.step}
                                            </div>
                                            <span style={{ color: srv.color }}>Phase {p.step}</span>
                                        </div>
                                        <h3 className={styles.altTitle}>{p.title}</h3>
                                        <p className={styles.altDesc}>{p.body}</p>
                                    </div>
                                    <div className={styles.altImageFrame}>
                                        <img src={`/imagesfortrenchlabs/${idx === 0 ? 'focus vibe.jpg' : idx === 1 ? 'download (4).jpg' : idx === 2 ? 'LUCES GAMER.jpg' : 'locked in.jpg'}`} alt={p.title} className={styles.altImage} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL FAQS */}
            <section className={styles.faqSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className="section-tagline" style={{ color: srv.color }}>FAQ</span>
                        <h2 className="section-title">Technical Specifications</h2>
                    </div>
                    <div className={styles.faqLayout}>
                        <div className={styles.faqImageFrame}>
                            <img src="/imagesfortrenchlabs/download (2).jpg" alt="FAQ" className={styles.faqImage} />
                        </div>
                        <div className={styles.faqList}>
                            {srv.faqs.map((faq, idx) => (
                                <div key={idx} className={styles.faqCard}>
                                    <div className={styles.faqIcon} style={{ color: srv.color }}>
                                        <HelpCircle size={24} />
                                    </div>
                                    <div className={styles.faqText}>
                                        <h4>{faq.q}</h4>
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SERVICE FOOTER CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaGlow} style={{ background: `radial-gradient(circle at top, ${srv.color}20 0%, transparent 60%)` }} />
                        <h2 className={styles.ctaTitle}>Deploy This Specialized Track</h2>
                        <p className={styles.ctaDesc}>Let's schedule a deep-dive call with our engineers to outline custom requirements for your startup.</p>
                        <div className={styles.ctaActions}>
                            <Link to="/consultation" className={styles.primaryBtn} style={{ backgroundColor: srv.color }}>
                                Book Consultation
                            </Link>
                            <Link to="/contact" className={styles.secondaryBtn}>
                                Email us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Transitions>
    );
};
export default ServiceDetail;
