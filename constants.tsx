import { Icon } from '@iconify/react';

export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Projet',
    path: '/projet',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projet' },
      { title: 'E-commerce', path: 'https://commerce-next-coral.vercel.app.' },
      { title: 'Immobilier', path: 'https://ndakonamobi.onrender.com/' },
       { title: 'Dashboard', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'portofolio',
    path: '/portofolio',
    icon: <Icon icon="lucide:square-user" width="24" height="24" />,
  },
  {
    title: 'contactez',
    path: '/contact',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
    
  },
  {
    title: 'technologies',
    path: '/competences',
    icon: <Icon icon="lucide:backpack" width="24" height="24" />,
  },
];