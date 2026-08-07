import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Cpu, Palette, ShoppingBag, Terminal, CheckCircle2, Zap, Shield, Code2, Layers, ChevronRight } from 'lucide-react';

import { Seo } from '../../components/Seo';
import { MagneticCTA } from '../../components/premium/MagneticCTA';
import { Transitions } from '../../components/Transitions';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
import styles from './LandingPage.module.css';

export const LandingPage: React.FC = () => {
    const TRACKS = [
        {
            num: '01',
            id: 'web-development',
            name: 'Modern Web Development',
            desc: 'High-performance web applications, portals, and custom marketing frontends engineered for extreme speed and maintenance.',
            icon: Monitor,
            path: '/services/web-development'
        },
        {
            num: '02',
            id: 'e-commerce',
            name: 'E-Commerce Solutions',
            desc: 'Custom Shopify Liquid storefronts, headless checkout flows, and merchandising stacks built for rapid conversion.',
            icon: ShoppingBag,
            path: '/services/e-commerce'
        },
        {
            num: '03',
            id: 'ai-automation',
            name: 'AI Automation Systems',
            desc: 'Custom LLM triggers, automated lead pipelines, and autonomous workflow engines integrated directly with your production databases.',
            icon: Cpu,
            path: '/services/ai-automation'
        },

        {
            num: '04',
            id: 'ui-ux-design',
            name: 'UI / UX Product Design',
            desc: 'Bespoke design systems, product interfaces, and interactive motion components engineered to ship cleanly without developer friction.',
            icon: Palette,
            path: '/services/ui-ux-design'
        },

        {
            num: '05',
            id: 'wordpress',
            name: 'WordPress Development',
            desc: 'Lean native Gutenberg blocks, custom PHP themes, and WooCommerce without heavy page-builders or slow plugins.',
            icon: Terminal,
            path: '/services/wordpress'
        }
    ];

    const PROJECTS = [
        {
            id: 'nexa-restaurant',
            title: 'Nexa Restaurant Booking Portal',
            category: 'Web Development · Real-time Systems',
            tagline: 'High-volume seating reservations & latency-optimized occupancy locks.',
            image: '/imagesfortrenchlabs/download (5).jpg',
            tech: ['React / Vite', 'Node.js API', 'PostgreSQL', 'Redis Lock'],
            path: '/work/nexa-restaurant'
        },
        {
            id: 'velora-fashion',
            title: 'Velora Fashion Storefront',
            category: 'E-Commerce · Custom Liquid',
            tagline: 'Custom Shopify Liquid checkout and ultra-fast variant controllers.',
            image: '/imagesfortrenchlabs/download (2).jpg',
            tech: ['Shopify Liquid', 'GraphQL Admin API', 'TailwindCSS', 'JS Core'],
            path: '/work/velora-fashion'
        },
        {
            id: 'medica-clinic',
            title: 'Medica Clinic Patient Queues',
            category: 'WordPress · Native Blocks',
            tagline: 'HIPAA-aware custom Gutenberg rotas and physician schedule synchronization.',
            image: '/imagesfortrenchlabs/download (3).jpg',
            tech: ['WordPress Core', 'Custom PHP', 'Gutenberg Blocks', 'MySQL'],
            path: '/work/medica-clinic'
        },
        {
            id: 'assistflow-ai',
            title: 'AssistFlow AI Automation Engine',
            category: 'AI Systems · Automated Pipelines',
            tagline: 'Serverless LLM lead scoring, document filing, and automated Slack hooks.',
            image: '/imagesfortrenchlabs/download (2).jpg',
            tech: ['OpenAI REST APIs', 'LangChain', 'Make.com', 'Python'],
            path: '/work/assistflow-ai'
        }
    ];

    const TEAM = [
        {
            name: 'Umar Khan',
            role: 'Founder & CEO',
            bio: 'Umar founded TrenchLabs with a vision to help businesses scale through modern web technologies, AI automation, and high-performance digital solutions.',
            avatar: '/imagesfortrenchlabs/Umer.jpeg'

        },
        {
            name: 'Ali Hamza',
            role: 'Lead Software Engineer',
            bio: 'Ali leads software engineering at TrenchLabs, specializing in full-stack development, Shopify solutions, AI integrations, and scalable web applications.',
            avatar: '/imagesfortrenchlabs/hmzaimgtrench.jpeg'
        },
        {
            name: 'Zunair Shahzad',
            role: 'Growth Officer',
            bio: 'Zunair leads digital marketing, brand strategy, social media management, lead generation, and business growth initiatives for TrenchLabs.',
            avatar: '/imagesfortrenchlabs/zunairfortrench.jpeg'
        },
        {
            name: 'Numan Tehseen',
            role: 'AI Engineer',
            bio: 'Numan designs and implements AI-driven solutions, focusing on machine learning models, natural language processing, and data analysis pipelines.',
            avatar: '/imagesfortrenchlabs/pfp_.jpg'
        }
    ];

    const GALLERY = [
        {
            title: 'Focus & Execution Culture',
            image: '/imagesfortrenchlabs/locked in.jpg'
        },
        {
            title: 'Neural & Data Architecture',
            image: '/imagesfortrenchlabs/Technologie-Netzwerk-Hintergrund_ _ Premium Foto.jpg'
        },
        {
            title: 'High-Contrast UI Engineering',
            image: '/imagesfortrenchlabs/LUCES GAMER.jpg'
        }
    ];

    return (
        <Transitions>
            <div className={styles.landingRoot}>
                <Seo
                    title="TrenchLabs — Engineering Digital Studio"
                    description="Founder-led digital engineering agency building web apps, AI automations, and UI systems without compromise."
                    path="/"
                />

                {/* ─── 1. HERO SECTION ────────────────────────────────────────── */}
                <header className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <div className={styles.badgeCapsule}>
                                    <span className={styles.badgeDot} />
                                    <span>Founder-Led Engineering Agency</span>
                                </div>
                                <h1 className={styles.heroTitle}>
                                    Building intelligent systems for modern businesses
                                </h1>
                                <p className={styles.heroDesc}>
                                    We design AI, automation, and software systems built for scale, speed, and long-term stability—no middlemen, zero template bloat.
                                </p>
                                <div className={styles.heroActions}>
                                    <MagneticCTA to="/consultation" className={styles.primaryBtn}>
                                        Book Strategy Call <ArrowRight size={16} />
                                    </MagneticCTA>
                                    <Link to="/services" className={styles.secondaryBtn}>
                                        Explore Services
                                    </Link>
                                </div>
                                <div className={styles.heroMetaPills}>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Focus</span>
                                        <span className={styles.metaValue}>Startups · SaaS · Commerce</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Delivery</span>
                                        <span className={styles.metaValue}>Ship-Ready Engineering</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaLabel}>Model</span>
                                        <span className={styles.metaValue}>Direct Engineer Handoff</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.heroMediaFrame}>
                                <img
                                    src="/imagesfortrenchlabs/focus vibe.jpg"
                                    alt="TrenchLabs Engineering Workspace"
                                    className={styles.heroImgMain}
                                />
                                <div className={styles.heroMediaOverlay}>
                                    <span className={styles.heroMediaBadge}>Precision Studio</span>
                                    <p className={styles.heroMediaCaption}>High-performance software engineered directly by founders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ─── 2. STATS STRIP ────────────────────────────────────────── */}
                <section className={styles.statsStrip}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}><AnimatedCounter to={99} suffix="%" /></div>
                                <div className={styles.statText}>Client Retention Rate</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}><AnimatedCounter to={1} suffix="K+" /></div>
                                <div className={styles.statText}>API Events Routed</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}><AnimatedCounter to={3} suffix="+" /></div>
                                <div className={styles.statText}>Systems Shipped</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}><AnimatedCounter to={35} prefix="<" suffix="%" /></div>
                                <div className={styles.statText}>Average Latency Reduction</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── 3. CAPABILITIES TRACKS ─────────────────────────────────── */}
                <section className={styles.capabilitiesSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTagline}>Core Capabilities</span>
                            <h2 className={styles.sectionTitle}>Engineering Tracks Built for Outcome</h2>
                            <p className={styles.sectionDesc}>Five specialized practice areas designed to solve structural bottlenecks and accelerate growth.</p>
                        </div>
                        <div className={styles.trackGrid}>
                            {TRACKS.map((t) => {
                                const IconComp = t.icon;
                                return (
                                    <Link key={t.id} to={t.path} className={styles.trackCard}>
                                        <div className={styles.trackHeader}>
                                            <div className={styles.trackIconWrap}>
                                                <IconComp size={24} strokeWidth={1.75} />
                                            </div>
                                            <span className={styles.trackNum}>{t.num}</span>
                                        </div>
                                        <div>
                                            <h3 className={styles.trackName}>{t.name}</h3>
                                            <p className={styles.trackDesc}>{t.desc}</p>
                                        </div>
                                        <div className={styles.trackFooter}>
                                            Explore Track <ChevronRight size={14} />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ─── 4. FEATURED WORK SHOWCASE ─────────────────────────────── */}
                <section className={styles.workSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTagline}>Case Studies</span>
                            <h2 className={styles.sectionTitle}>Systems Shipped & Proven Output</h2>
                            <p className={styles.sectionDesc}>Real production deployments handling real traffic, high concurrency, and strict compliance.</p>
                        </div>
                        <div className={styles.workGrid}>
                            {PROJECTS.map((p) => (
                                <Link key={p.id} to={p.path} className={styles.workCard}>
                                    <div className={styles.workImgFrame}>
                                        <img src={p.image} alt={p.title} className={styles.workImg} />
                                        <span className={styles.workCategoryBadge}>{p.category}</span>
                                    </div>
                                    <div className={styles.workCardBody}>
                                        <h3 className={styles.workTitle}>{p.title}</h3>
                                        <p className={styles.workTagline}>{p.tagline}</p>
                                        <div className={styles.workTechRow}>
                                            {p.tech.map((t) => (
                                                <span key={t} className={styles.techBadge}>{t}</span>
                                            ))}
                                        </div>
                                        <div className={styles.workCtaLink}>
                                            View Case Study <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── 5. TEAM & LEADERSHIP ──────────────────────────────────── */}
                <section className={styles.teamSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTagline}>Engineering Team</span>
                            <h2 className={styles.sectionTitle}>Lead Engineers & Architects</h2>
                            <p className={styles.sectionDesc}>No middle management—you communicate directly with senior engineers building your codebase.</p>
                        </div>
                        <div className={styles.teamGrid}>
                            {TEAM.map((member) => (
                                <div key={member.name} className={styles.teamCard}>
                                    <img src={member.avatar} alt={member.name} className={styles.teamCardImg} />
                                    <div className={styles.teamCardOverlay} />

                                    <div className={styles.teamCardBody}>
                                        <div className={styles.teamCardHeader}>
                                            <h3 className={styles.teamName}>{member.name}</h3>
                                            <div className={styles.teamRole}>{member.role}</div>
                                        </div>
                                        <div className={styles.teamCardHoverContent}>
                                            <p className={styles.teamBio}>{member.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── 6. SYSTEMS GALLERY ─────────────────────────────────────── */}
                <section className={styles.gallerySection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTagline}>Studio Texture</span>
                            <h2 className={styles.sectionTitle}>Architected for Reliability</h2>
                        </div>
                        <div className={styles.galleryGrid}>
                            {GALLERY.map((g, idx) => (
                                <div key={idx} className={styles.galleryFrame}>
                                    <img src={g.image} alt={g.title} className={styles.galleryImg} />
                                    <div className={styles.galleryCaption}>{g.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── 7. CONSULTATION CTA SECTION ───────────────────────────── */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaCard}>
                            <h2 className={styles.ctaTitle}>Ready to build something that lasts?</h2>
                            <p className={styles.ctaDesc}>
                                Schedule a 15-minute scoping call with our core engineers. We will outline requirements, cost, and timeline directly.
                            </p>
                            <div className={styles.ctaActions}>
                                <MagneticCTA to="/consultation" className={styles.primaryBtn}>
                                    Book Strategy Call <ArrowRight size={16} />
                                </MagneticCTA>
                                <Link to="/contact" className={styles.secondaryBtn}>
                                    Email Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Transitions>
    );
};

export default LandingPage;
