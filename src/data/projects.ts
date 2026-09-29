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
    phoneCover: '/images/projects/aura/mobile/home.webp',
    moreImages: [
      '/images/projects/aura/web/login.webp',
      '/images/projects/aura/web/reports.webp',
      '/images/projects/aura/web/system-map.webp',
      '/images/projects/aura/mobile/login.webp',
      '/images/projects/aura/mobile/appointments.webp',
      '/images/projects/aura/mobile/services.webp',
      '/images/projects/aura/mobile/booking-service.webp',
      '/images/projects/aura/mobile/profile.webp',
    ],
    links: {
      videos: [
        'https://youtu.be/I6eBbszHEE8',
        'https://youtu.be/mnGoOScS5ik',
        'https://youtu.be/Cp3mvMHwJZE',
      ],
    },
    features: [
      {
        icon: 'calendar',
        title: { en: 'Booking & front desk', lo: 'ການຈອງ ແລະ ໜ້າຮ້ານ' },
        items: [
          {
            en: 'Slot engine that computes free times from staff schedules, leave, branch closures, rooms and equipment',
            lo: 'ລະບົບຄິດໄລ່ຊ່ວງເວລາຫວ່າງ (slot engine) ຈາກຕາຕະລາງຊ່າງ, ມື້ລາພັກ, ມື້ປິດສາຂາ, ຫ້ອງ ແລະ ອຸປະກອນ',
          },
          {
            en: 'Double-booking prevention with row-level locks and time-range checks',
            lo: 'ກັນການຈອງຊ້ອນ (double-booking) ດ້ວຍ row-level lock ແລະ ການກວດຊ່ວງເວລາ',
          },
          {
            en: 'Mobile booking wizard, group and family bookings, and a waitlist that auto-fills cancelled slots',
            lo: 'Booking wizard ໃນແອັບມືຖື, ການຈອງເປັນກຸ່ມ ຫຼື ຄອບຄົວ, waitlist ທີ່ດຶງຄົນມາແທນອັດຕະໂນມັດເມື່ອມີຄົນຍົກເລີກ',
          },
          {
            en: 'QR check-in, walk-in queue tickets and a command-center Queue screen',
            lo: 'Check-in ດ້ວຍ QR, ບັດຄິວ walk-in, ໜ້າ Queue ແບບ command center',
          },
          {
            en: 'Appointments console with 4 views and a master calendar',
            lo: 'ໜ້າ Appointments console 4 ມຸມມອງ ແລະ Master calendar',
          },
        ],
      },
      {
        icon: 'wallet',
        title: { en: 'Finance & payments (Treasury)', lo: 'ການເງິນ ແລະ ການຈ່າຍເງິນ (Treasury)' },
        items: [
          {
            en: 'Split tender: pay one bill across deposit, points, cash and QR',
            lo: 'Split tender: ຈ່າຍບິນດຽວໄດ້ຫຼາຍຊ່ອງທາງ (ມັດຈຳ, ຄະແນນ, ເງິນສົດ, QR)',
          },
          {
            en: 'Multi-currency (LAK, THB, USD) with exchange-rate tables',
            lo: 'ຫຼາຍສະກຸນເງິນ (LAK, THB, USD) ພ້ອມຕາຕະລາງອັດຕາແລກປ່ຽນ',
          },
          {
            en: 'Per-branch bank accounts, provider adapters switchable Mock ⇄ LIVE, HMAC-signed idempotent webhooks',
            lo: 'ບັນຊີທະນາຄານແຍກຕາມສາຂາ, provider adapter ທີ່ສະຫຼັບ Mock ⇄ LIVE ໄດ້, webhook ທີ່ມີ HMAC ແລະ ກັນການປະມວນຜົນຊ້ຳ (idempotent)',
          },
          {
            en: 'Tiered bank-slip OCR: QR decode first → tesseract fallback → staff confirmation, with risk signals and SLA alerts',
            lo: 'ອ່ານສະລິບໂອນເງິນດ້ວຍ OCR ເປັນຂັ້ນ: ລອງອ່ານ QR ກ່ອນ → ຖ້າບໍ່ໄດ້ຈຶ່ງໃຊ້ tesseract → ພະນັກງານຢືນຢັນ; ມີສັນຍານຄວາມສ່ຽງ ແລະ ແຈ້ງເຕືອນ SLA',
          },
          {
            en: 'Reconciliation by importing bank statements for matching, period locking and cash-drawer management',
            lo: 'ກະທົບຍອດ (reconciliation) ດ້ວຍການ import ລາຍການທະນາຄານມາຈັບຄູ່, ລັອກງວດບັນຊີ ແລະ ຈັດການລິ້ນຊັກເງິນສົດ',
          },
          {
            en: 'Expenses with approvals, budgets, recurring items and petty cash; P&L, VAT, invoice numbering, credit notes and Z-reports',
            lo: 'ລາຍຈ່າຍ: ອະນຸມັດ, ງົບປະມານ, ລາຍຈ່າຍປະຈຳເດືອນ, ເງິນສົດຍ່ອຍ; ມີລາຍງານ P&L, VAT, ເລກໃບເກັບເງິນ, ໃບລົດໜີ້ ແລະ Z-report',
          },
          {
            en: 'Immutable ledger enforced by DB triggers, and serializable transactions with automatic retry',
            lo: 'Ledger ທີ່ແກ້ໄຂບໍ່ໄດ້ ເພາະມີ DB trigger ລັອກໄວ້, ແລະ transaction ແບບ serializable ທີ່ retry ເອງ',
          },
        ],
      },
      {
        icon: 'package',
        title: { en: 'Inventory & purchasing', lo: 'ສາງ ແລະ ການຈັດຊື້' },
        items: [
          {
            en: 'Per-service BOM for automatic stock deduction, stock ledger, weighted average cost (WAC), lots and expiry dates',
            lo: 'BOM ຕໍ່ບໍລິການ ເພື່ອຕັດສະຕັອກອັດຕະໂນມັດ, stock ledger, ຕົ້ນທຶນສະເລ່ຍ (WAC), lot ແລະ ວັນໝົດອາຍຸ',
          },
          {
            en: 'Stock counts, goods received notes (GRN), purchase orders (PO), cross-branch transfers (DRAFT → IN_TRANSIT → COMPLETED) and units of measure (UoM)',
            lo: 'ນັບສະຕັອກ, ໃບຮັບສິນຄ້າ (GRN), ໃບສັ່ງຊື້ (PO), ໂອນສິນຄ້າຂ້າມສາຂາ (DRAFT → IN_TRANSIT → COMPLETED), ຫົວໜ່ວຍນັບ (UoM)',
          },
        ],
      },
      {
        icon: 'users',
        title: { en: 'Staff & payroll', lo: 'ພະນັກງານ ແລະ ເງິນເດືອນ' },
        items: [
          {
            en: 'GPS-geofenced clock-in, shift schedules and leave',
            lo: 'ລົງເວລາດ້ວຍ GPS geofence, ຕາຕະລາງວຽກ, ມື້ລາພັກ',
          },
          {
            en: 'Commission paid on actually collected revenue, payroll runs, payslips, OT, social security, income tax and year-to-date totals',
            lo: 'ຄ່າຄອມມິດຊັນທີ່ຈ່າຍຕາມຍອດທີ່ເກັບເງິນໄດ້ແທ້, ຮອບຈ່າຍເງິນເດືອນ, payslip, OT, ປະກັນສັງຄົມ, ອາກອນລາຍໄດ້, ຍອດສະສົມທັງປີ (YTD)',
          },
          { en: 'KPIs, leaderboards and targets', lo: 'KPI, leaderboard ແລະ ເປົ້າໝາຍ' },
          { en: 'Staff portal in the mobile app (10 screens)', lo: 'Staff portal ໃນແອັບມືຖື (10 ໜ້າຈໍ)' },
        ],
      },
      {
        icon: 'megaphone',
        title: { en: 'Customers & marketing', lo: 'ລູກຄ້າ ແລະ ການຕະຫຼາດ' },
        items: [
          {
            en: 'Multi-service courses and packages (purchasable in the app), loyalty points with a ledger and VIP tiers',
            lo: 'ຄອສ ຫຼື ແພັກເກັດທີ່ລວມຫຼາຍບໍລິການ (ລູກຄ້າຊື້ເອງໃນແອັບໄດ້), ຄະແນນສະສົມພ້ອມ ledger, ລະດັບ VIP',
          },
          {
            en: 'Gift cards, referral and affiliate program, time-based dynamic pricing (happy hour)',
            lo: 'ບັດຂອງຂວັນ, ລະບົບແນະນຳໝູ່ ແລະ affiliate, dynamic pricing ຕາມຊ່ວງເວລາ (happy hour)',
          },
          {
            en: 'Marketing campaigns with consent handling and suppression lists',
            lo: 'ແຄມເປນການຕະຫຼາດ ທີ່ຮອງຮັບການຍິນຍອມ (consent) ແລະ ລາຍຊື່ຫ້າມສົ່ງ (suppression list)',
          },
          { en: 'Multi-channel notifications via BullMQ', lo: 'ແຈ້ງເຕືອນຫຼາຍຊ່ອງທາງຜ່ານ BullMQ' },
          {
            en: 'Treatment records (EMR), before/after photos and consent forms with digital signatures',
            lo: 'ປະຫວັດການປິ່ນປົວ (EMR), ຮູບ Before/After, ແບບຟອມຍິນຍອມພ້ອມລາຍເຊັນດິຈິຕອນ',
          },
        ],
      },
      {
        icon: 'chat',
        title: { en: 'Real-time & communication', lo: 'Real-time ແລະ ການສື່ສານ' },
        items: [
          {
            en: 'Platform-wide chat: staff ↔ staff (cross-branch) and customer ↔ branch, with images, voice messages, read receipts and blocking',
            lo: 'ລະບົບແຊັດທົ່ວທັງແພລດຟອມ: ພະນັກງານ ↔ ພະນັກງານ (ຂ້າມສາຂາ), ລູກຄ້າ ↔ ສາຂາ; ສົ່ງຮູບ ແລະ ຂໍ້ຄວາມສຽງໄດ້; ມີສະຖານະອ່ານແລ້ວ ແລະ ການບລັອກ',
          },
          {
            en: 'Home service: live GPS tracking of technicians via Redis Pub/Sub + WebSocket',
            lo: 'ບໍລິການເຖິງບ້ານ: ຕິດຕາມຕຳແໜ່ງ GPS ຂອງຊ່າງແບບສົດ ຜ່ານ Redis Pub/Sub + WebSocket',
          },
        ],
      },
      {
        icon: 'building',
        title: { en: 'Multi-branch & reporting', lo: 'ບໍລິຫານຫຼາຍສາຂາ ແລະ ລາຍງານ' },
        items: [
          {
            en: 'Tenant isolation by branchId and fine-grained RBAC: a BRANCH_ADMIN sees and edits only their own branch',
            lo: 'ແຍກຂໍ້ມູນຕາມ branchId (tenant isolation), ສິດ RBAC ແບບລະອຽດ, BRANCH_ADMIN ເຫັນ ແລະ ແກ້ໄດ້ສະເພາະສາຂາຂອງຕົນ',
          },
          {
            en: 'Command-center dashboard, ledger-style reports and a System Map (React Flow) showing system flows with live status',
            lo: 'Dashboard ແບບ command center, ໜ້າລາຍງານແບບ ledger, System Map (React Flow) ທີ່ສະແດງ flow ຂອງລະບົບພ້ອມສະຖານະສົດ',
          },
        ],
      },
    ],
    engineering: [
      {
        icon: 'clock',
        title: { en: 'Time & timezones', lo: 'ເລື່ອງເວລາ ແລະ timezone' },
        body: {
          en: 'Standardized Asia/Vientiane time across the system. Found and fixed a bug where Prisma raw SQL shifted times by 7 hours, which silently broke double-booking protection. Hermes ships without timezone data, so I wrote my own helper.',
          lo: 'ວາງມາດຕະຖານເວລາ Asia/Vientiane ທົ່ວລະບົບ. ພົບ ແລະ ແກ້ bug ທີ່ Prisma raw SQL ເລື່ອນເວລາ 7 ຊົ່ວໂມງ ເຊິ່ງເຮັດໃຫ້ຕົວກັນການຈອງຊ້ອນບໍ່ເຮັດວຽກ. ພົບວ່າ Hermes ບໍ່ມີຂໍ້ມູນ timezone ຈຶ່ງຂຽນ helper ຂຶ້ນມາເອງ',
        },
      },
      {
        icon: 'shield',
        title: { en: 'Money correctness', lo: 'ຄວາມຖືກຕ້ອງຂອງເງິນ' },
        body: {
          en: 'Immutable ledger, serializable transactions, idempotent webhooks, and atomic course deduction and refunds.',
          lo: 'Ledger ທີ່ແກ້ໄຂບໍ່ໄດ້, transaction ແບບ serializable, webhook ທີ່ກັນການປະມວນຜົນຊ້ຳ, ການຕັດ ຫຼື ຄືນຄອສແບບ atomic',
        },
      },
      {
        icon: 'gauge',
        title: { en: 'Performance', lo: 'ປະສິດທິພາບ' },
        body: {
          en: 'Replaced client-side aggregation (capped at 200 rows) with server-side summary endpoints.',
          lo: 'ແທນການລວມຂໍ້ມູນຝັ່ງ client (ຈຳກັດ 200 ແຖວ) ດ້ວຍ summary endpoint ຝັ່ງ server',
        },
      },
      {
        icon: 'scan',
        title: { en: 'Zero-cost OCR', lo: 'OCR ທີ່ບໍ່ມີຄ່າໃຊ້ຈ່າຍ' },
        body: {
          en: 'Bank slips are read fully offline, with no paid APIs.',
          lo: 'ອ່ານສະລິບໄດ້ offline ທັງໝົດ, ບໍ່ເພິ່ງ API ທີ່ຕ້ອງເສຍເງິນ',
        },
      },
      {
        icon: 'palette',
        title: { en: 'Design system', lo: 'ລະບົບ Design' },
        body: {
          en: 'Design systems for both web and mobile with dark mode and 5 color themes, Lao typography rules (no letter-spacing or uppercase), plus motion and haptics.',
          lo: 'ມີ design system ທັງ Web ແລະ Mobile, ຮອງຮັບ dark mode ແລະ 5 ໂທນສີ, ມີກົດການຈັດຕົວອັກສອນລາວ (ບໍ່ໃຊ້ letter-spacing ຫຼື ຕົວພິມໃຫຍ່), ມີລະບົບ motion ແລະ haptics',
        },
      },
    ],
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
    highlights: [
      {
        en: 'Parts sales (POS) with product catalog, stock levels and low-stock alerts',
        lo: 'ຂາຍອາໄຫຼ່ (POS) ພ້ອມລາຍການສິນຄ້າ, ຈຳນວນຄົງເຫຼືອ ແລະ ແຈ້ງເຕືອນອາໄຫຼ່ໃກ້ໝົດ',
      },
      {
        en: 'Repair orders tracked by customer, vehicle and status',
        lo: 'ຕິດຕາມລາຍການສ້ອມແປງຕາມລູກຄ້າ, ລົດ ແລະ ສະຖານະ',
      },
      {
        en: 'Payments by cash or bank transfer (LAO QR), with printed receipts',
        lo: 'ຊຳລະດ້ວຍເງິນສົດ ຫຼື ເງິນໂອນ (LAO QR) ແລະ ພິມໃບບິນ',
      },
      {
        en: 'Dashboard and reports: revenue, best-selling parts, stock and services',
        lo: 'Dashboard ແລະ ລາຍງານ: ລາຍຮັບ, ອາໄຫຼ່ຂາຍດີ, ສາງ ແລະ ບໍລິການ',
      },
    ],
    role: 'Full-Stack Developer & UI/UX Designer',
    stack: ['C#', 'SQL Server', 'Figma'],
    images: [
      '/images/projects/garage/dashboard.webp',
      '/images/projects/garage/sales.webp',
      '/images/projects/garage/repairs.webp',
      '/images/projects/garage/payment.webp',
    ],
    moreImages: ['/images/projects/garage/reports.webp', '/images/projects/garage/receipt.webp'],
  },
  {
    slug: 'drinks',
    title: 'Beverage Sales App',
    summary: {
      en: 'A mobile app for selling beverages, with a Node.js REST API backend.',
      lo: 'ແອັບມືຖືສຳລັບຂາຍເຄື່ອງດື່ມປະເພດນ້ຳ ພ້ອມ REST API ດ້ວຍ Node.js',
    },
    highlights: [
      {
        en: 'Customer menu with categories, search, cart and promotional pricing',
        lo: 'ເມນູສຳລັບລູກຄ້າ: ແຍກປະເພດ, ຄົ້ນຫາ, ກະຕ່າສິນຄ້າ ແລະ ລາຄາໂປຣໂມຊັ່ນ',
      },
      {
        en: 'Staff order workflow: accept or cancel pending orders, order history and reorder',
        lo: 'ຈັດການອໍເດີ້ສຳລັບພະນັກງານ: ຢືນຢັນ ຫຼື ຍົກເລີກອໍເດີ້, ປະຫວັດການສັ່ງຊື້ ແລະ ສັ່ງຊື້ຄືນ',
      },
      {
        en: 'Promotions with percentage discounts and date ranges',
        lo: 'ໂປຣໂມຊັ່ນ: ສ່ວນຫຼຸດເປັນເປີເຊັນ ພ້ອມກຳນົດຊ່ວງວັນທີ',
      },
      {
        en: 'Admin management for products, categories, sizes, users and roles',
        lo: 'ຈັດການຂໍ້ມູນພື້ນຖານ: ສິນຄ້າ, ປະເພດ, ຂະໜາດ, ຜູ້ໃຊ້ ແລະ ຕຳແໜ່ງ',
      },
    ],
    role: 'Full-Stack Developer',
    stack: ['Flutter', 'Node.js', 'Express', 'MySQL'],
    images: [
      '/images/projects/drinks/menu.webp',
      '/images/projects/drinks/admin-menu.webp',
      '/images/projects/drinks/pending-orders.webp',
      '/images/projects/drinks/products.webp',
    ],
    moreImages: ['/images/projects/drinks/promotions.webp', '/images/projects/drinks/cancelled-orders.webp'],
  },
];
