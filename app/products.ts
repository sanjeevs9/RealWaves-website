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

export const Products: Product[] = [
    {
        name:"Laxmi D-cut",
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
        image:ucut,
        description:"",
        category:["ucut"],
        dimensions:{
            width:11,
            height:14
        },
       
    },{
        name:"Bajaj box bag",
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
        image:boxbag,
        description:"",
        category:["nonwovenboxbag"],
    },
    {
        name:"SHAIL D-cut bag",
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
        image:dcut4,
        description:"",
        category:["dcut"]   ,
        dimensions:{
            width:14,
            height:19
        },
        
    }
    
]