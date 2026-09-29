import type { Localized } from './types';

export const profile: {
  name: Localized;
  role: string;
  tagline: Localized;
  location: Localized;
  email: string;
  phone: string;
  photo: string;
  cv: string;
  socials: { github: string; facebook?: string; whatsapp?: string; linkedin?: string };
} = {
  name: { en: 'Detkongkham Soukchaleune', lo: 'ເດດກົງຄຳ ສຸກຈະເລີນ' },
  role: 'Full-Stack Developer',
  tagline: {
    en: 'I build web and mobile apps end to end — from UI design to production.',
    lo: 'ພັດທະນາເວັບ ແລະ ແອັບມືຖືແບບຄົບວົງຈອນ ຕັ້ງແຕ່ອອກແບບ UI ຈົນເຖິງການໃຊ້ງານຈິງ',
  },
  location: { en: 'Vientiane, Laos', lo: 'ນະຄອນຫຼວງວຽງຈັນ' },
  email: 'tavisisombath@gmail.com',
  phone: '+856 20 56468254',
  photo: '/images/profile.webp',
  cv: '/cv-detkongkham.pdf',
  socials: {
    github: 'https://github.com/Detkongkham',
    facebook: 'https://www.facebook.com/share/1CQQwuZsR1/',
    whatsapp: 'https://wa.me/8562056468254',
  },
};
