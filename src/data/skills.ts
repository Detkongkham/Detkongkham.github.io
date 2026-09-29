import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'Frontend', lo: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: { en: 'Mobile', lo: 'ແອັບມືຖື' },
    items: ['React Native (Expo)', 'Flutter', 'Dart'],
  },
  {
    title: { en: 'Backend', lo: 'Backend' },
    items: ['Node.js', 'Express', 'Socket.IO', 'BullMQ', 'C#', 'Python', 'Java', 'PHP', 'REST API'],
  },
  {
    title: { en: 'Databases', lo: 'ຖານຂໍ້ມູນ' },
    items: ['PostgreSQL', 'Prisma', 'Redis', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    title: { en: 'Tools & DevOps', lo: 'ເຄື່ອງມື & DevOps' },
    items: ['Git / GitHub', 'GitLab', 'Docker', 'Ubuntu Server', 'Postman', 'Figma'],
  },
  {
    title: { en: 'AI Tools', lo: 'ເຄື່ອງມື AI' },
    items: ['Claude Code', 'Antigravity (Gemini)', 'Google Stitch'],
  },
  {
    title: { en: 'Languages', lo: 'ພາສາ' },
    items: ['Lao — Native', 'English — Intermediate', 'Thai — Intermediate'],
  },
];
