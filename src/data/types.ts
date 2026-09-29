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
  /** ຮູບໜ້າຈໍມືຖືທີ່ສະແດງໃນກອບໂທລະສັບ (ຕ້ອງຢູ່ໃນ images ຫຼື moreImages) */
  phoneCover?: string;
  links?: {
    /** ລິ້ງ YouTube, ມີຫຼາຍອັນຈະສະແດງເປັນປຸ່ມ 1, 2, 3 */
    videos?: string[];
    demo?: string;
    github?: string;
  };
  /** ຟີເຈີແບ່ງຕາມໝວດ: ສະແດງເປັນແຖບ (tabs) ແທນ highlights */
  features?: FeatureGroup[];
  /** ຈຸດເດັ່ນດ້ານວິສະວະກຳ / ບັນຫາຍາກທີ່ແກ້ໄດ້ */
  engineering?: EngineeringNote[];
  /** true = ສະແດງເປັນ card ໃຫຍ່ຢູ່ເທິງສຸດ */
  featured?: boolean;
  /** true = ສະແດງໝາຍເຫດວ່າ source code ເປັນ private */
  privateSource?: boolean;
};

/** ຊື່ໄອຄອນ: ProjectCard ແປງເປັນໄອຄອນ lucide */
export type IconKey =
  | 'calendar' | 'wallet' | 'package' | 'users' | 'megaphone' | 'chat' | 'building'
  | 'clock' | 'shield' | 'gauge' | 'scan' | 'palette';

export type FeatureGroup = {
  icon: IconKey;
  title: Localized;
  items: Localized[];
};

export type EngineeringNote = {
  icon: IconKey;
  title: Localized;
  body: Localized;
};

export type SkillGroup = {
  title: Localized;
  items: string[];
};

export type TimelineItem = {
  /** ເລືອກໄອຄອນ ແລະ ປ້າຍ: ວຽກ ຫຼື ການສຶກສາ */
  kind: 'work' | 'education';
  period: string;
  title: Localized;
  place: Localized;
  details?: Localized[];
  /** ປ້າຍເດັ່ນ ເຊັ່ນ ຈົບກຽດນິຍົມ */
  badge?: Localized;
};
