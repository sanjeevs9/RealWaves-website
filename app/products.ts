import dcut from "@/public/bags/D-cut4.png"
import loophandle from "@/public/bags/LH4.png"
import ucut from "@/public/bags/u-cut1.png"
import boxbag from "@/public/bags/Box3.png"
import bopploophandle from "@/public/bags/LH5.png"
import boppbox from "@/public/bags/boppbox.png"



import { StaticImageData } from "next/image"

export const Products: {
    name: string
    image: StaticImageData,
    description: string,
    category: string,
    dimensions: {
        Gusset: number,
        width: number,
        height: number
    },
    gsm:number
}[] = [
    {
        name:"D-cut",
        image:dcut,
        description:"",
        category:"dcut",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"Loop Handle",
        image:loophandle,
        description:"",
        category:"loophandle",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"U-cut",
        image:ucut,
        description:"",
        category:"ucut",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"Bopp box bag",
        image:boppbox,
        description:"",
        category:"boppboxbag",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"Bopp loop handle",
        image:bopploophandle,
        description:"",
        category:"bopploophandle",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"Non woven box bag",
        image:boxbag,
        description:"",
        category:"nonwovenboxbag",
        dimensions:{
                    Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    }
]