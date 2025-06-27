import dcut1 from "@/public/bags/D-cut1.png"
import dcut2 from "@/public/bags/D-cut2.png"
import dcut3 from "@/public/bags/D-cut3.png"
import loophandle1 from "@/public/bags/LH1.png"
import loophandle2 from "@/public/bags/LH2.png"
import ucut from "@/public/bags/u-cut.png"
import boxbag1 from "@/public/bags/Box1.png"
import boxbag2 from "@/public/bags/Box2.png"
import printed from "@/public/bags/printed.png"
import designed from "@/public/bags/designed.png"



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
        image:dcut1,
        description:"",
        category:"dcut",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },
    {
        name:"D-cut",
        image:dcut2,
        description:"",
        category:"dcut",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },
    {
        name:"D-cut",
        image:dcut3,
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
        image:loophandle1,
        description:"",
        category:"loophandle",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },
    {
        name:"Loop Handle",
        image:loophandle2,
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
        name:"Box bag",
        image:boxbag1,
        description:"",
        category:"box",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"Box bag",
        image:boxbag2,
        description:"",
        category:"boxbag",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"Printed bag",
        image:printed,
        description:"",
        category:"printed",
        dimensions:{
            Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    },{
        name:"Designed bag",
        image:designed,
        description:"",
        category:"designed",
        dimensions:{
                    Gusset:0,
            width:0,
            height:0
        },
        gsm:0
    }
]