export type Lang = 'en' | 'lo';

/** ຂໍ້ຄວາມທີ່ມີທັງສອງພາສາ */
export type Localized = Record<Lang, string>;

export type Project = {
  slug: string;
  title: string;
  summary: Localized;
  highlights: Localized[];
  role: string;
  stack: string[];
  /** ຮູບທຳອິດ = ຮູບປົກ */
  images: string[];
  /** ຮູບເພີ່ມເຕີມ: ບໍ່ສະແດງໃນການ໌ດ, ເບິ່ງໄດ້ໃນ Lightbox ເທົ່ານັ້ນ */
  moreImages?: string[];
  links?: {
    /** ລິ້ງ YouTube, ມີຫຼາຍອັນຈະສະແດງເປັນປຸ່ມ 1, 2, 3 */
    videos?: string[];
    demo?: string;
    github?: string;
  };
  /** true = ສະແດງເປັນ card ໃຫຍ່ຢູ່ເທິງສຸດ */
  featured?: boolean;
  /** true = ສະແດງໝາຍເຫດວ່າ source code ເປັນ private */
  privateSource?: boolean;
};

export type SkillGroup = {
  title: Localized;
  items: string[];
};

export type TimelineItem = {
  period: string;
  title: Localized;
  place: Localized;
  details?: Localized[];
};
