import type { FooterItem, MainNavItem } from '@/types';

import { Airplay, BarChart, Link2, QrCode, Users, Webhook } from 'lucide-react';
export type SiteConfig = typeof siteConfig;

const links = {
  twitter: '',
  github: '',
  githubAccount: '',
  discord: '',
};

export const siteConfig = {
  name: 'Voiceflow',
  description: 'The AI chatbot platform that meets your ambition.',
  url: '',
  ogImage: '',
  links,
  mainNav: [
    {
      title: 'Product',
      items: [
        {
          title: 'Agent creation platform',
          href: '/solutions',
          description: 'Build agents with a powerfull low-code tools.',
          items: [],
        },
        {
          title: 'Knowledge Base',
          href: '/products/knowledge-base',
          description: 'Train again on your data.',
          items: [],
        },
        {
          title: 'Shareable prototypes',
          href: '/prototypes',
          description: 'Create and share agent prototypes.',
          items: [],
        },
        {
          title: 'Developers hand-Off',
          href: '/use-case/developers-hand-off',
          description: 'Hand-off agent designs to developer .',
          items: [],
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          title: 'Marketplace',
          href: '/marketplace',
          description: 'Explore community build tools.',
          items: [],
        },
        {
          title: 'Community Discord',
          href: '/discord.gg',
          description: 'meet and share with Voiceflow users.',
          items: [],
        },
      ],
    },
    {
      title: 'Docs',
      href: '/docs',
    },
    {
      title: 'Templates',
      href: '/templates',
    },
    {
      title: 'Enterprise',
      items: [
        {
          title: 'Overview',
          href: '/overview',
          description: 'Explore Voiceflow enterprise platform.',
          items: [],
        },
        {
          title: 'Customers',
          href: '/customers',
          description: 'Learn about Voiceflow customers.',
          items: [],
        },
        {
          title: 'Security',
          href: '/legal/security',
          description: 'Learn  about Voiceflow security features.',
          items: [],
        },
        {
          title: 'Contact Sales',
          href: '/demo',
          description: 'Get in touch with the Voiceflow sales team.',
          items: [],
        },
      ],
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
  ] satisfies MainNavItem[],
};

export const FEATURES_LIST = [
  {
    title: 'Powerful Analytics For The Modern Marketer',
    shortTitle: 'Advanced Analytics',
    icon: BarChart,
    slug: 'features/analytics',
  },
  {
    title: 'Branded Links That Stand Out',
    shortTitle: 'Branded Links',
    icon: Airplay,
    slug: 'features/branded-links',
  },
  {
    title: 'Free QR Code Generator',
    shortTitle: 'QR Codes',
    icon: QrCode,
    slug: 'features/qr-codes',
  },
  {
    title: 'Personalize Your Short Links',
    shortTitle: 'Personalization',
    icon: Link2,
    slug: 'features/personalization',
  },
  {
    title: 'Collaborate With Your Team',
    shortTitle: 'Team Collaboration',
    icon: Users,
    slug: 'features/collaboration',
  },
  {
    title: 'Programmatic Link Creation',
    shortTitle: 'API',
    icon: Webhook,
    slug: 'docs',
  },
];
