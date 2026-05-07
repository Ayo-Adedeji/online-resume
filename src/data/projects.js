import serviceis from '../assets/serviceis.png';
import consulateRecruitment from '../assets/consulaterecruitment.png';
import chefZoey from '../assets/1417.png';
import consulateBooks from '../assets/consulatebooks.png';
import ictware from '../assets/ictware.png';

export const featuredProjects = [
  {
    title: 'Service Request Platform',
    description:
      'A home service platform where customers can request repairs, technical support, or device purchases — all delivered to their doorstep without leaving home.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Supabase', 'Paystack', 'Framer Motion'],
    github: null,
    live: 'https://serviceisng.com',
    image: serviceis,
  },
  {
    title: 'Consulate Recruitment Agency',
    description:
      'A recruitment and staffing platform where businesses can request staff for management, cleaning, corporate roles, and more — with admin-controlled job listings and blog updates.',
    tech: ['React', 'Supabase', 'Framer Motion'],
    github: null,
    live: 'https://consulaterecruitment.co.uk',
    image: consulateRecruitment,
  },
  {
    title: 'Chef Zoey — Food Ecosystem',
    description:
      'A stunning showcase website for a chef brand, letting customers explore dishes, understand the food experience, and place orders before buying.',
    tech: ['React', 'Framer Motion', 'Formsubmit'],
    github: null,
    live: 'https://1417bychefzoey.com',
    image: chefZoey,
  },
];

export const moreProjects = [
  {
    title: 'Consulate Books',
    description:
      'An e-bookstore where users can browse a catalog, add multiple books to cart, pay via Paystack, and receive their purchased ebooks by email.',
    tech: ['React', 'Context API', 'Paystack', 'Framer Motion', 'EmailJS'],
    github: null,
    live: 'https://consulatebooks.onrender.com',
    image: consulateBooks,
  },
  {
    title: 'Digital Bridges Summit',
    description:
      'An event landing page for the ictware Digital Bridges Summit, featuring a live sale section, horizontal scroll animations, and Paystack payment integration.',
    tech: ['React', 'Paystack', 'Framer Motion', 'Formsubmit'],
    github: null,
    live: 'https://ictware.com',
    image: ictware,
  },
];
