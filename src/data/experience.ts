import type { TimelineItem } from './types';

export const timeline: TimelineItem[] = [
  {
    kind: 'work',
    period: '08/2025 – 10/2025',
    badge: { en: '3-month internship', lo: 'ຝຶກງານ 3 ເດືອນ' },
    title: { en: 'Intern — UX/UI & Software Development', lo: 'ນັກສຶກສາຝຶກງານ: ອອກແບບ UX/UI ແລະ ຂຽນໂປຣແກຣມ' },
    place: { en: 'Unitel (Star Telecom)', lo: 'ບໍລິສັດ Unitel (Star Telecom)' },
    details: [
      { en: 'Designed UX/UI and developed assigned features over a 3-month internship', lo: 'ອອກແບບ UX/UI ແລະ ຂຽນໂປຣແກຣມຕາມທີ່ໄດ້ຮັບມອບໝາຍ ເປັນເວລາ 3 ເດືອນ' },
    ],
  },
  {
    kind: 'education',
    period: '2022 – 2026',
    badge: { en: 'Honors · CGPA 3.53', lo: 'ຈົບກຽດນິຍົມ · CGPA 3.53' },
    title: { en: 'B.Sc. Software Development — Honors (CGPA 3.53)', lo: 'ປະລິນຍາຕີ ສາຂາພັດທະນາໂປຣແກຣມ (ຈົບນິຍົມ CGPA 3.53)' },
    place: {
      en: 'Faculty of Natural Sciences, National University of Laos',
      lo: 'ຄະນະວິທະຍາສາດທຳມະຊາດ, ມະຫາວິທະຍາໄລແຫ່ງຊາດ',
    },
  },
  {
    kind: 'education',
    period: '2022 – 2025',
    title: { en: 'Higher Diploma in English', lo: 'ຊັ້ນສູງ ສາຂາພາສາອັງກິດ' },
    place: { en: 'Logos Foreign Language Institute', lo: 'ສະຖາບັນພາສາຕ່າງປະເທດ ໂລໂກສ' },
  },
];
