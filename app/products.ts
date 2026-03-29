import dcut from "@/public/bags/D-cut4.png"
import loophandle from "@/public/bags/LH4.png"
import ucut from "@/public/bags/u-cut1.png"
import boxbag from "@/public/bags/Box3.png"
import boppbox from "@/public/bags/boppbox.png"
import ucut2 from "@/public/bags/u-cut2.png"
import loophandle2 from "@/public/bags/LH6.png"
import loophandle3 from "@/public/bags/LH7.png"
import dcut2 from "@/public/bags/D-cut5.png"
import dcut3 from "@/public/bags/D-cut6.png"
import dcut4 from "@/public/bags/D-cut7.png"
import box2 from "@/public/bags/Box4.png"
import box3 from "@/public/bags/Box5.png"
import boppbox2 from "@/public/bags/boppbox1.png"
import boppbox3 from "@/public/bags/boppbox2.png"







import { StaticImageData } from "next/image"

export const categories = ["dcut", "ucut", "loophandle", "boxbag", "boppboxbag", "nonwovenboxbag"] as const

// Create a type from the categories array
export type Category = typeof categories[number]

// Define the Product interface
export interface Product {
    name: string
    slug: string
    image: StaticImageData
    description: string
    category: Category[]
    dimensions?: {
        Gusset?: number
        width: number
        height: number
    }
    gsm?: number
}

// Category display names
export const categoryNames: Record<Category, string> = {
    dcut: 'D-Cut',
    ucut: 'U-Cut',
    loophandle: 'Loop Handle',
    boxbag: 'Box Bag',
    boppboxbag: 'Bopp Box Bag',
    nonwovenboxbag: 'Non Woven Box Bag',
}

// Category descriptions for product detail
export const categoryDescriptions: Record<Category, string> = {
    dcut: 'Premium D-cut non-woven bags with clean die-cut handles. Ideal for retail shops, grocery stores, and promotional giveaways. Lightweight yet durable.',
    ucut: 'U-cut non-woven bags featuring a simple, versatile design perfect for everyday retail use. Easy to carry with a comfortable handle cutout.',
    loophandle: 'Sturdy loop handle non-woven bags built for heavier loads. The reinforced handles make them perfect for shopping, gifting, and brand promotion.',
    boxbag: 'Structured box-shaped non-woven bags that stand upright. Great for packaging, food delivery, and premium retail presentation.',
    boppboxbag: 'BOPP laminated box bags with a glossy, high-quality print finish. The lamination adds water resistance and a premium look.',
    nonwovenboxbag: 'Classic non-woven box bags combining durability with eco-friendliness. A sustainable alternative to plastic packaging.',
}

export const Products: Product[] = [
    {
        name:"Laxmi D-cut",
        slug:"laxmi-d-cut",
        image:dcut,
        description:"",
        category:["dcut"],
        dimensions:{
            width:14,
            height:19
        },
    },
    {
        name:"Maosaji U-cut bag",
        slug:"maosaji-u-cut-bag",
        image:ucut2,
        description:"",
        category:["ucut"],
        dimensions:{
            width:14,
            height:16
        },
    },
    {
        name:"Shringaar Loop Handle",
        slug:"shringaar-loop-handle",
        image:loophandle,
        description:"",
        category:["loophandle"],
        dimensions:{
            width:15,
            height:19
        },
        
    },
    {
        name:"Kajri Loop Handle",
        slug:"kajri-loop-handle",
        image:loophandle2,
        description:"",
        category:["loophandle"],
        dimensions:{
            width:16,
            height:19
        },
    },
    {
        name:"BB Box bag",
        slug:"bb-box-bag",
        image:box2,
        description:"",
        category:["boxbag"],
        dimensions:{
            Gusset:8,
            width:11,
            height:8
        },      
    },
    {
        name:"Madhu Textorium Bopp box bag",
        slug:"madhu-textorium-bopp-box-bag",
        image:boppbox2,
        description:"",
        category:["boppboxbag","boxbag"],
        dimensions:{
            Gusset:4,
            width:13,
            height:12
        },
       
    },
    {
        name:"Puncher Bopp box bag",
        slug:"puncher-bopp-box-bag",
        image:boppbox3,
        description:"",
        category:["boppboxbag","boxbag"],
        dimensions:{
            Gusset:4,
            width:12,
            height:13
        },
       
    },
    {
        name:"Bonzelo Box bag",
        slug:"bonzelo-box-bag",
        image:box3,
        description:"",
        category:["boxbag"],
        dimensions:{
            Gusset:8,
            width:13,
            height:8
        },
       
    },
    {
        name:"Saheb Loop Handle",
        slug:"saheb-loop-handle",
        image:loophandle3,
        description:"",
        category:["loophandle"],
        dimensions:{
            width:18,
            height:16
        },

    },
    {
        name:"Bombaywala U-cut bag",
        slug:"bombaywala-u-cut-bag",
        image:ucut,
        description:"",
        category:["ucut"],
        dimensions:{
            width:11,
            height:14
        },
       
    },{
        name:"Bajaj box bag",
        slug:"bajaj-box-bag",
        image:boppbox,
        description:"",
        category:["boppboxbag","boxbag"],
        dimensions:{
            Gusset:4,
            width:14,
            height:13
        },
       
    },
    {
        name:"Non woven box bag",
        slug:"non-woven-box-bag",
        image:boxbag,
        description:"",
        category:["nonwovenboxbag"],
    },
    {
        name:"SHAIL D-cut bag",
        slug:"shail-d-cut-bag",
        image:dcut2,
        description:"",
        category:["dcut"],
        dimensions:{
            width:14,
            height:19
        },
        
    },
    {
        name:"Fusion D-cut bag",
        slug:"fusion-d-cut-bag",
        image:dcut3,
        description:"",
        category:["dcut"]       ,
        dimensions:{
            width:12,
            height:16
        },

    },
    {
        name:"Shree Shyam D-cut bag",
        slug:"shree-shyam-d-cut-bag",
        image:dcut4,
        description:"",
        category:["dcut"]   ,
        dimensions:{
            width:14,
            height:19
        },
        
    }
    
]