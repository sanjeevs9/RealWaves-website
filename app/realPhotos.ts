import type { StaticImageData } from 'next/image';
import printingPress from '@/public/factory/printing-press.webp';
import pressTeam from '@/public/factory/press-team.webp';
import bagMachine from '@/public/factory/bag-machine.webp';
import fabricRolls from '@/public/factory/fabric-rolls.webp';
import bagLine from '@/public/factory/bag-line.webp';
import vaahiniFront from '@/public/real-bags/vaahini-front.webp';
import vaahiniAngle from '@/public/real-bags/vaahini-angle.webp';
import vaahiniSide from '@/public/real-bags/vaahini-side.webp';
import vaahiniGloss from '@/public/real-bags/vaahini-gloss.webp';
import bharatBootHouse from '@/public/real-bags/bharat-boot-house.webp';
import bharatBootHouse3d from '@/public/real-bags/bharat-boot-house-3d.webp';
import fashionStory from '@/public/real-bags/fashion-story.webp';
import mummys from '@/public/real-bags/mummys.webp';
import mahavir from '@/public/real-bags/mahavir.webp';
import panchvati from '@/public/real-bags/panchvati.webp';
import panchvati3d from '@/public/real-bags/panchvati-3d.webp';
import bombaywala from '@/public/real-bags/bombaywala.webp';

// Photos taken at our factory and of real bags we printed (camera originals, cropped
// and colour-corrected for the web). 3D designs come from our design archive.
export type Photo = { img: StaticImageData; alt: string; caption: string };

export const FACTORY_PHOTOS: Photo[] = [
  { img: printingPress, alt: 'A roll of printed non-woven fabric on the printing machine at RealWaves', caption: 'Printing your design on the fabric roll' },
  { img: pressTeam, alt: 'RealWaves team members at the printing machine', caption: 'Our team at the press' },
  { img: bagMachine, alt: 'An automatic bag-making machine at the RealWaves factory', caption: 'Bag-making machines' },
  { img: fabricRolls, alt: 'Printed non-woven fabric rolls stacked in the RealWaves warehouse', caption: 'Fabric rolls ready to cut' },
  { img: bagLine, alt: 'Printed fabric running through the bag-making line', caption: 'From roll to bag on the line' },
];

export type RealBag = Photo & { shop: string };

const vaahini = (img: StaticImageData, view: string): RealBag => ({
  img, shop: 'Vaahini Shopping Mall', caption: view, alt: `The BOPP laminated Vaahini Shopping Mall bag we printed, ${view.toLowerCase()}`,
});

// Real photos of printed bags, per bag-style landing page
export const REAL_BAGS: Record<string, RealBag[]> = {
  'box-bags': [
    { img: bharatBootHouse, shop: 'Bharat Boot House', caption: 'Box bag', alt: 'Orange printed box bag for Bharat Boot House, held by hand' },
    { img: panchvati, shop: 'Panchvati Sweets', caption: 'Box bag', alt: 'Cream box bag with a gold paisley print for Panchvati Sweets' },
    { img: bombaywala, shop: 'Bombaywala', caption: 'Box bag', alt: 'Cream box bag with red handles printed for Bombaywala' },
    { img: fashionStory, shop: 'Fashion Story', caption: 'Box bag', alt: 'Striped box bag printed for Fashion Story menswear' },
    { img: mahavir, shop: 'Mahavir', caption: 'Box bag', alt: 'White and orange box bag printed for Mahavir sarees' },
    { img: mummys, shop: "Mummy's", caption: 'Box bag', alt: "Cream box bag with brown handles printed for Mummy's" },
  ],
  'bopp-laminated-bags': [
    vaahini(vaahiniFront, 'Front'),
    vaahini(vaahiniAngle, 'Front and side gusset'),
    vaahini(vaahiniGloss, 'Glossy laminated finish'),
    vaahini(vaahiniSide, 'Side gusset'),
  ],
};

// 3D design next to the printed bag (homepage "See your bag before we print")
export const DESIGN_TO_BAG = [
  { shop: 'Bharat Boot House', design: bharatBootHouse3d, bag: bharatBootHouse },
  { shop: 'Panchvati Sweets', design: panchvati3d, bag: panchvati },
];
