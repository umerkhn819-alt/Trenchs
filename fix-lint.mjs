import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf-8');
    for (const [target, replacement] of replacements) {
        content = content.replace(target, replacement);
    }
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
}

const base = 'frontend/src/site-pages';

replaceInFile(path.join(base, 'BlogPost/BlogPost.tsx'), [
    ["import { motion, type Variants } from 'framer-motion';", "import { motion } from 'framer-motion';"]
]);

replaceInFile(path.join(base, 'Blog/Blog.tsx'), [
    ["import { motion, type Variants } from 'framer-motion';", "import { motion } from 'framer-motion';"],
    ["import { ArrowLeft, Clock, Calendar, ChevronRight, User } from 'lucide-react';", "import { Clock, Calendar, ChevronRight, User } from 'lucide-react';"],
    ["import { fadeIn, staggerContainer, scaleIn } from '../../utils/animations';", "import { fadeIn, staggerContainer } from '../../utils/animations';"]
]);

replaceInFile(path.join(base, 'Consultation/Consultation.tsx'), [
    ["import { motion, type Variants } from 'framer-motion';", "import { motion } from 'framer-motion';"],
    ["import { fadeIn, staggerContainer, viewportOnce } from '../../utils/animations';", "import { fadeIn, staggerContainer } from '../../utils/animations';"]
]);

replaceInFile(path.join(base, 'Landing/LandingPage.tsx'), [
    ["import { CheckCircle2, ArrowRight, Zap, Shield, Code2, Layers, ChevronRight, Play } from 'lucide-react';", "import { ArrowRight, ChevronRight, Play } from 'lucide-react';"],
    ["import { motion } from 'framer-motion';", ""]
]);

replaceInFile(path.join(base, 'Legal/Privacy.tsx'), [
    ["import { motion, type Variants } from 'framer-motion';", "import { motion } from 'framer-motion';"],
    ["import { CinematicText } from '../../components/CinematicText';", ""]
]);

replaceInFile(path.join(base, 'Legal/Terms.tsx'), [
    ["import { motion, type Variants } from 'framer-motion';", "import { motion } from 'framer-motion';"],
    ["import { CinematicText } from '../../components/CinematicText';", ""]
]);

const baseFeatures = 'frontend/src/features';
replaceInFile(path.join(base, 'Services/Services.tsx'), [
    ["import { FAQAccordion } from '../../components/FAQAccordion';", ""],
    ["import { FAQ_ITEMS } from '../../data/faqs';", ""]
]);

replaceInFile(path.join(base, 'Team/Team.tsx'), [
    ["import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';", "import { Github, Linkedin, Twitter } from 'lucide-react';"],
    ["import { GlowBadge } from '../../components/GlowBadge';", ""],
    ["import { StatCounter } from '../../components/StatCounter';", ""],
    ["import { GridOverlay } from '../../components/GridOverlay';", ""]
]);
