import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

type Props = {
  slides: { src: string; alt: string }[];
  /** -1 = ປິດ */
  index: number;
  onClose: () => void;
};

/** ເປີດຮູບເຕັມຈໍ: ໂຫຼດແບບ lazy ຈາກ ProjectCard ເມື່ອກົດຮູບຄັ້ງທຳອິດ */
export default function Gallery({ slides, index, onClose }: Props) {
  return (
    <Lightbox
      open={index >= 0}
      index={Math.max(index, 0)}
      close={onClose}
      slides={slides}
      plugins={[Counter, Zoom]}
      controller={{ closeOnBackdropClick: true }}
      styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' } }}
    />
  );
}
