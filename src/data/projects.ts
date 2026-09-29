import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'aura',
    title: 'Aura Beauty & Clinic Platform',
    summary: {
      en: 'An end-to-end management platform for beauty clinics and salons — a web admin console plus customer and staff mobile apps.',
      lo: 'ລະບົບຈັດການຄລີນິກ ແລະ ຮ້ານເສີມສວຍແບບຄົບວົງຈອນ ປະກອບດ້ວຍ Web Admin ແລະ ແອັບມືຖືສຳລັບລູກຄ້າ ແລະ ພະນັກງານ',
    },
    highlights: [
      {
        en: 'Online booking, walk-in queue, QR check-in and live GPS tracking for home-service staff',
        lo: 'ຈອງຄິວອອນລາຍ, ຈັດຄິວໜ້າຮ້ານ, Check-in ດ້ວຍ QR ແລະ ຕິດຕາມ GPS ພະນັກງານນອກສະຖານທີ່ແບບສົດ',
      },
      {
        en: 'Finance: payments, bank-slip verification with OCR, bank reconciliation, expenses and VAT invoices',
        lo: 'ການເງິນ: ຮັບຊຳລະ, ກວດສະລິບໂອນດ້ວຍ OCR, ກະທົບຍອດທະນາຄານ, ລາຍຈ່າຍ ແລະ ໃບເກັບເງິນ VAT',
      },
      {
        en: 'Inventory, purchase orders, cross-branch transfers, payroll and staff commission',
        lo: 'ສາງສິນຄ້າ, ໃບສັ່ງຊື້, ໂອນສິນຄ້າລະຫວ່າງສາຂາ, ເງິນເດືອນ ແລະ ຄ່າຄອມມິດຊັ່ນພະນັກງານ',
      },
      {
        en: 'Real-time chat with Socket.IO; background jobs (reminders, OCR, stock alerts) with Redis + BullMQ',
        lo: 'ແຊັດ Real-time ດ້ວຍ Socket.IO; ວຽກເບື້ອງຫຼັງ (ແຈ້ງເຕືອນ, OCR, ແຈ້ງເຕືອນສິນຄ້າ) ດ້ວຍ Redis + BullMQ',
      },
      {
        en: 'Security: JWT + TOTP 2FA, role- and branch-based access control, rate limiting',
        lo: 'ຄວາມປອດໄພ: JWT + 2FA (TOTP), ຈຳກັດສິດຕາມບົດບາດ ແລະ ສາຂາ, Rate limiting',
      },
    ],
    role: 'Full-Stack Developer & UI/UX Designer',
    stack: ['TypeScript', 'React', 'React Native (Expo)', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'Socket.IO', 'Tailwind CSS', 'Docker'],
    // ຮູບອື່ນທີ່ມີໃຫ້ເລືອກ: web/login, reports, system-map · mobile/login, appointments, services, booking-service, profile
    images: [
      '/images/projects/aura/web/dashboard.webp',
      '/images/projects/aura/web/appointments.webp',
      '/images/projects/aura/web/queue.webp',
      '/images/projects/aura/web/branches.webp',
      '/images/projects/aura/web/chat.webp',
      '/images/projects/aura/mobile/welcome.webp',
      '/images/projects/aura/mobile/home.webp',
      '/images/projects/aura/mobile/booking-time.webp',
      '/images/projects/aura/mobile/booking-success.webp',
    ],
    links: {
      videos: [
        'https://youtu.be/I6eBbszHEE8',
        'https://youtu.be/mnGoOScS5ik',
        'https://youtu.be/Cp3mvMHwJZE',
      ],
    },
    featured: true,
    privateSource: true,
  },
  {
    slug: 'garage',
    title: 'Car Repair Shop Management System',
    summary: {
      en: 'Graduation project — a desktop app for managing sales and repair services at a car repair shop.',
      lo: 'ໂຄງການຈົບຊັ້ນ: ລະບົບຈັດການການຂາຍ ແລະ ບໍລິການຮ້ານແປງລົດໃຫຍ່ (Desktop app)',
    },
    highlights: [],
    role: 'Full-Stack Developer & UI/UX Designer',
    stack: ['C#', 'SQL Server', 'Figma'],
    images: ['/images/projects/garage/cover.webp'],
  },
  {
    slug: 'drinks',
    title: 'Beverage Sales App',
    summary: {
      en: 'A mobile app for selling beverages, with a Node.js REST API backend.',
      lo: 'ແອັບມືຖືສຳລັບຂາຍເຄື່ອງດື່ມປະເພດນ້ຳ ພ້ອມ REST API ດ້ວຍ Node.js',
    },
    highlights: [],
    role: 'Full-Stack Developer',
    stack: ['Flutter', 'Node.js', 'Express', 'MySQL'],
    images: ['/images/projects/drinks/cover.webp'],
  },
];
