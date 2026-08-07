import type { TeamExpertCard, TeamMemberDetail } from './types';

export const TEAM_EXPERTS: TeamExpertCard[] = [
    { id: 'umar-khan', name: 'Umar Khan', role: 'CEO & Founder', roleAbbr: 'CEO', accent: '#0f172a', photo: '/imagesfortrenchlabs/Umer.jpeg' },
    { id: 'ali-hamza', name: 'Ali Hamza', role: 'Lead Software Engineer', roleAbbr: 'CTO', accent: '#0f172a', photo: '/imagesfortrenchlabs/hmzaimgtrench.jpeg' },
    { id: 'zunair-shahzad', name: 'Zunair Shahzad', role: 'Growth Manager', roleAbbr: 'GM', accent: '#0f172a', photo: '/imagesfortrenchlabs/zunairfortrench.jpeg' }
];

export const TEAM_MEMBERS_BY_ID: Record<string, TeamMemberDetail> = {
    'umar-khan': {
        id: 'umar-khan',
        name: 'Umar Khan',
        role: 'Founder & Chief Executive Officer',
        roleAbbr: 'CEO',

        philosophy:
            'Building scalable digital solutions that combine innovation, performance, and business impact.',

        bio:
            'Umar founded TrenchLabs with a vision to help businesses scale through modern web technologies, AI automation, and high-performance digital solutions.',

        skills: [
            { name: 'Business Strategy', val: '98%' },
            { name: 'Project Leadership', val: '96%' },
            { name: 'Client Relations', val: '95%' },
            { name: 'Product Vision', val: '94%' }
        ],
        projects: ['Nexa Restaurant Reservation Ledger', 'AssistFlow Automation Node Orchestrators'],
        accent: '#0f172a'
    },
    'ali-hamza': {
        id: 'ali-hamza',
        name: 'Ali Hamza',

        role: 'Lead Software Engineer',

        roleAbbr: 'CTO',

        philosophy:
            'Turning ideas into scalable software through clean architecture and modern engineering.',

        bio:
            'Ali leads software engineering at TrenchLabs, specializing in full-stack development, Shopify solutions, AI integrations, and scalable web applications.',

        skills: [
            { name: 'Full Stack Development', val: '97%' },
            { name: 'Shopify Development', val: '98%' },
            { name: 'AI Integration', val: '94%' },
            { name: 'System Design', val: '95%' }
        ],
        projects: ['Velora Fashion Conversion Programs', 'GrowthPulse technical performance'],
        accent: '#0f172a'
    },
    'zunair-shahzad': {
        id: 'zunair-shahzad',
        name: 'Zunair Shahzad',
        role: 'Growth Manager',
        roleAbbr: 'GM',
        philosophy: 'Growth happens where creativity meets data-driven marketing.',
        bio: 'Zunair leads digital marketing, brand strategy, social media management, lead generation, and business growth initiatives for TrenchLabs.',
        skills: [
            { name: 'Digital Marketing', val: '97%' },
            { name: 'Brand Strategy', val: '96%' },
            { name: 'Social Media', val: '98%' },
            { name: 'Lead Generation', val: '95%' }
        ],
        projects: ['Redis Double-booking Lock for Nexa', 'HIPAA Secure Patient Directories'],
        accent: '#0f172a'
    }
};

export const DEFAULT_TEAM_MEMBER_ID = 'umar-khan';

export function getTeamMember(id: string | undefined): TeamMemberDetail {
    const key = id && TEAM_MEMBERS_BY_ID[id] ? id : DEFAULT_TEAM_MEMBER_ID;
    return TEAM_MEMBERS_BY_ID[key];
}
