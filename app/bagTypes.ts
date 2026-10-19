import { StaticImageData } from "next/image"
import dcutImg from "@/public/bags/D-cut4.webp"
import ucutImg from "@/public/bags/u-cut1.webp"
import loopImg from "@/public/bags/LH4.webp"
import boxImg from "@/public/bags/Box3.webp"
import boppImg from "@/public/bags/boppbox.webp"
import { Category, Product, Products } from "./products"

// One landing page per bag type, served at /non-woven-bags/<slug>.
// Copy only states what the business already claims on the site (custom printing,
// delivery across India, recyclable non-woven PP) plus general product facts.
// Price, MOQ and GSM options are deliberately left to a quote until confirmed.

export interface BagFaq {
    q: string
    a: string
}

export interface BagType {
    slug: string
    name: string
    shortName: string
    categories: Category[]
    image: StaticImageData
    title: string
    description: string
    h1: string
    intro: string[]
    bestFor: string[]
    highlights: { label: string; value: string }[]
    faqs: BagFaq[]
}

const commonFaqs: BagFaq[] = [
    {
        q: "Can you print our logo and shop name on the bags?",
        a: "Yes. We print your logo, shop or brand name, address, phone number and tagline, and we can help with the design if you don't have artwork ready.",
    },
    {
        q: "What is the minimum order quantity and price?",
        a: "Both depend on the bag size, fabric GSM, number of print colours and quantity. Call or WhatsApp +91 90099 90000 with your size and quantity and we'll confirm the minimum order and a price.",
    },
    {
        q: "Which GSM should I choose?",
        a: "GSM is the weight of the fabric in grams per square metre: higher GSM means a thicker, stronger bag. India's Plastic Waste Management (Amendment) Rules, 2021 require non-woven carry bags to be at least 60 GSM. Tell us what you'll carry in the bag and we'll recommend a GSM.",
    },
    {
        q: "Do you deliver outside Raipur?",
        a: "Yes. We're based in Saddu, Raipur and supply businesses across Chhattisgarh and in cities across India.",
    },
]

export const BagTypes: BagType[] = [
    {
        slug: "d-cut-bags",
        name: "D-Cut Bags",
        shortName: "D-Cut",
        categories: ["dcut"],
        image: dcutImg,
        title: "D-Cut Non-Woven Bags Manufacturer in Raipur",
        description:
            "Custom printed non-woven D-cut bags made in Raipur, Chhattisgarh by RealWaves Packs. For shops, pharmacies and events. Bulk orders across India.",
        h1: "Non-Woven D-Cut Bags Manufacturer in Raipur",
        intro: [
            "A D-cut bag is a flat non-woven bag with a D-shaped handle punched (die-cut) into the top. There is no stitched handle, so it is light, quick to produce and economical in bulk. That is why D-cut bags are the most common carry bag for shops, chemists, sweet shops and garment stores.",
            "RealWaves Packs makes non-woven D-cut bags at our factory in Saddu, Raipur and prints them with your shop name and logo, so every bag that leaves your counter advertises your business.",
        ],
        bestFor: ["Clothing and textile shops", "Kirana and grocery stores", "Medical stores and pharmacies", "Sweet and dry-fruit shops", "Promotional giveaways, events and exhibitions"],
        highlights: [
            { label: "Material", value: "Non-woven polypropylene (PP) fabric" },
            { label: "Handle", value: "Die-cut D-shaped handle, no stitching" },
            { label: "Printing", value: "Custom logo, name and tagline" },
            { label: "Reusable", value: "Yes, and recyclable" },
        ],
        faqs: [
            {
                q: "What is the difference between a D-cut and a U-cut bag?",
                a: "A D-cut bag has a small D-shaped hole punched near the top edge as the handle. A U-cut bag has a wider U-shaped cut-out that forms two straps. D-cut bags give a larger flat area for printing; U-cut bags are easier to carry when full.",
            },
            ...commonFaqs,
        ],
    },
    {
        slug: "u-cut-bags",
        name: "U-Cut Bags",
        shortName: "U-Cut",
        categories: ["ucut"],
        image: ucutImg,
        title: "U-Cut Non-Woven Bags Manufacturer in Raipur",
        description:
            "Non-woven U-cut carry bags with custom printing, made in Raipur, Chhattisgarh by RealWaves Packs. For grocery, retail and daily use. Bulk orders.",
        h1: "Non-Woven U-Cut Bags Manufacturer in Raipur",
        intro: [
            "A U-cut bag has a U-shaped cut-out at the top that forms two straps, like a vest-style carry bag. The straps sit comfortably in the hand, so U-cut bags are a popular everyday carry bag for grocery, vegetable and general retail shops.",
            "We make non-woven U-cut bags in Raipur and print them with your brand, giving customers a reusable bag they will carry again.",
        ],
        bestFor: ["Grocery and supermarket counters", "Fruit and vegetable vendors", "General and departmental stores", "Bakeries and food outlets"],
        highlights: [
            { label: "Material", value: "Non-woven polypropylene (PP) fabric" },
            { label: "Handle", value: "U-shaped cut-out forming two straps" },
            { label: "Printing", value: "Custom logo, name and tagline" },
            { label: "Reusable", value: "Yes, and recyclable" },
        ],
        faqs: [
            {
                q: "Is a U-cut bag stronger than a D-cut bag?",
                a: "For the same fabric GSM the strength is similar, but a U-cut bag spreads the weight across two wider straps, so it is more comfortable to carry when full. For heavy loads, a loop handle bag is the stronger choice.",
            },
            ...commonFaqs,
        ],
    },
    {
        slug: "loop-handle-bags",
        name: "Loop Handle Bags",
        shortName: "Loop Handle",
        categories: ["loophandle"],
        image: loopImg,
        title: "Loop Handle Non-Woven Bags Manufacturer in Raipur",
        description:
            "Strong non-woven loop handle bags with custom printing, made in Raipur, Chhattisgarh by RealWaves Packs. For garments, gifting and heavier loads.",
        h1: "Non-Woven Loop Handle Bags Manufacturer in Raipur",
        intro: [
            "A loop handle bag has separate fabric handles attached to the bag, so it carries heavier loads and can be held in the hand or over the wrist. Loop handle bags look more premium than punched-handle bags and customers keep reusing them.",
            "RealWaves Packs makes non-woven loop handle bags in Raipur for garment and textile showrooms, gifting, weddings and corporate events, printed with your brand.",
        ],
        bestFor: ["Garment and saree showrooms", "Return gifts, weddings and functions", "Corporate gifting and conferences", "Exhibitions and trade fairs"],
        highlights: [
            { label: "Material", value: "Non-woven polypropylene (PP) fabric" },
            { label: "Handle", value: "Separate fabric loop handles" },
            { label: "Printing", value: "Custom logo, name and tagline" },
            { label: "Reusable", value: "Yes, built for repeated use" },
        ],
        faqs: [
            {
                q: "When should I choose a loop handle bag instead of a D-cut bag?",
                a: "Choose loop handles when the bag will carry heavier items such as clothes, boxes or gifts, or when you want a more premium bag customers keep using. D-cut bags are the lower-cost choice for light, everyday items.",
            },
            ...commonFaqs,
        ],
    },
    {
        slug: "box-bags",
        name: "Box Bags",
        shortName: "Box",
        categories: ["boxbag", "nonwovenboxbag"],
        image: boxImg,
        title: "Non-Woven Box Bags Manufacturer in Raipur",
        description:
            "Non-woven box bags with side and bottom gussets that stand upright. Custom printed in Raipur, Chhattisgarh by RealWaves Packs. Bulk orders across India.",
        h1: "Non-Woven Box Bags Manufacturer in Raipur",
        intro: [
            "A box bag has side and bottom gussets, so it opens into a box shape, stands upright and holds its shape. That makes it ideal for sweet boxes, footwear, food delivery, garments and gift packaging.",
            "We make plain and BOPP laminated non-woven box bags in Raipur, printed with your brand for shops, restaurants and corporate gifting.",
        ],
        bestFor: ["Sweet shops and mithai boxes", "Restaurants and food delivery", "Footwear and garment stores", "Gift hampers and corporate gifting"],
        highlights: [
            { label: "Material", value: "Non-woven polypropylene (PP) fabric" },
            { label: "Shape", value: "Side and bottom gussets, stands upright" },
            { label: "Finish", value: "Plain non-woven or BOPP laminated" },
            { label: "Printing", value: "Custom logo, name and tagline" },
        ],
        faqs: [
            {
                q: "What is a gusset?",
                a: "A gusset is the folded side or bottom panel that lets the bag expand into a box shape. Box bags are measured as width × height × gusset, for example 14 × 13 × 4 inches.",
            },
            ...commonFaqs,
        ],
    },
    {
        slug: "bopp-laminated-bags",
        name: "BOPP Laminated Bags",
        shortName: "BOPP Laminated",
        categories: ["boppboxbag"],
        image: boppImg,
        title: "BOPP Laminated Non-Woven Bags Manufacturer in Raipur",
        description:
            "BOPP laminated non-woven bags with glossy full-colour printing and a water-resistant finish. Made in Raipur, Chhattisgarh by RealWaves Packs.",
        h1: "BOPP Laminated Non-Woven Bags Manufacturer in Raipur",
        intro: [
            "A BOPP laminated bag is a non-woven bag with a thin film of BOPP (biaxially oriented polypropylene) laminated onto the fabric. The film carries detailed, full-colour artwork and gives the bag a glossy, water-resistant finish.",
            "Brands choose BOPP laminated bags when the bag itself is part of the packaging: showrooms, premium retail and products that should look as good on the street as on the shelf. We make them in Raipur.",
        ],
        bestFor: ["Branded showrooms and premium retail", "Textile and saree brands", "Product packaging and launches", "Corporate and festive gifting"],
        highlights: [
            { label: "Material", value: "Non-woven PP fabric with BOPP film" },
            { label: "Finish", value: "Glossy, water-resistant lamination" },
            { label: "Printing", value: "Full-colour custom artwork" },
            { label: "Shape", value: "Box bag with gussets" },
        ],
        faqs: [
            {
                q: "What does BOPP stand for?",
                a: "BOPP is biaxially oriented polypropylene, a thin, clear plastic film. Laminating it onto non-woven fabric makes the bag stiffer and water-resistant and lets it carry a glossy, full-colour print.",
            },
            ...commonFaqs,
        ],
    },
]

export function bagTypeBySlug(slug: string) {
    return BagTypes.find((t) => t.slug === slug)
}

// The landing page for a product category, used for breadcrumbs and menu links.
export function bagTypeForCategory(category: Category) {
    return BagTypes.find((t) => t.categories.includes(category))
}

export function productsForBagType(type: BagType): Product[] {
    return Products.filter((p) => p.category.some((c) => type.categories.includes(c)))
}
