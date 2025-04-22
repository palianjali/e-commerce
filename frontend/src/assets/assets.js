
import logo from './logo.webp' 
import search_icon from './search_icon.png'
import profile from './profile.png'
import cart from './cart.png'
import menu from './menu.jpg'
import menu2 from './menu2.png'
import heroimage from './heroimage.jpg'
import hero2 from './hero2.jpg'
import p1_img from './p1_img.jpg'
import p2_img from './p2_img.jpg'
import p3_mg from './p3_mg.jpg'
import p4_img from './p4_img.jpg'
import p5_img from './p5_img.jpg'
import p6_img from './p6_img.jpg'
import p7_img from './p7_img.jpg'
import p8_img from './p8_img.jpg'
import exchangeicon from './exchangeicon.png'
import support from './support.png'
import quality from './quality.png'
import logo2 from './logo2.png'
import drop_down_icon from './drop_down_icon.jpg';
import men1_img from './men1_img.jpg'
import men2_img from './men2_img.jpg'
import kids1_img from './kids1_img.jpg'
import kids2_img from './kids2_img.jpg'
import men3_img from './men3_img.jpg'
import cross_icon from './cross_icon.png'

export const assets ={
    logo,
    search_icon,
    profile,
    cart,
    menu,
    menu2,
    heroimage,
    hero2,
    exchangeicon,
    quality,
    support,
    logo2,
    drop_down_icon,
    cross_icon
}

export const products =[
    {
        id:'aaaa',
        name: 'Round Neck Cotton Top',
        description:'A lightweight',
        price:100,
        image:[p1_img,p2_img],
        category:'Women',
        subCategory: 'Topwear',
        sizes:['S ','M ','L '],
        date:171663445689,
        bestseller:true
    },
    {
        id:'aaab',
        name: 'Miss Chase Women Wide Leg Mid Rise Jeans',
        description:'Bachelorette Party, Christmas, New Year,',
        price:999,
        image:[p2_img],
        category:'Women',
        subCategory: 'Zipper',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },
    {
        id:'aaac',
        name: 'Miss Chase Women Wide Leg Mid Rise Jeans',
        description:'Bachelorette Party, Christmas, New Year,',
        price:999,
        image:[p3_mg],
        category:'Women',
        subCategory: 'Topwear',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },
    {
        id:'aaad',
        name: 'Max Women Printed Round Neck Regular Fit T-Shirt',
        description:'Regular Fit',
        price:269,
        image:[p4_img],
        category:'Women',
        subCategory: 'Topwear',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },
    {
        id:'aaae',
        name: 'LEOTUDE Women Cottonblend Half Sleeve Oversized Regular Fit T-Shirts',
        description:'Cotton blend',
        price:298,
        image:[p5_img],
        category:'Men',
        subCategory: 'Topwear',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },
    {
        id:'aaaf',
        name: "London Hills Women's Casual Printed Round Neck, Oversized Longline Drop Shoulder Boho Style Regular Fit T-Shirt",
        description:'Cotton blend',
        price:429,
        image:[p6_img],
        category:'Women',
        subCategory: 'Club Collar',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:false
    },
    {
        id:'aaaf',
        name: "HELLCAT Beige Trendy Printed Oversized T-Shirt for Women",
        description:'Cotton blend',
        price:289,
        image:[p7_img],
        category:'Women',
        subCategory: 'Crew Neck',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },
    {
        id:'aaag',
        name: "Levi's Women's Brand Logo Relaxed Fit T-Shirt",
        description:'Relaxed Fit',
        price: 599,
        image:[p8_img],
        category:'Women',
        subCategory: 'Crew Neck',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },

    {
        id:'aaah',
        name: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-97-100)",
        description:'Cargo',
        price: 799,
        image:[men1_img],
        category:'Men',
        subCategory: 'Cargo',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },


    {
        id:'aaai',
        name: "The Indian Garage Co Men Regular Fit Checkered Full Sleeves Cutaway Collar Casual Shirt",
        description:'Checkered',
        price: 614,
        image:[men2_img],
        category:'Men',
        subCategory: 'Cutaway',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:false
    },

    {
        id:'aaaj',
        name: "Pure Cotton Printed Pyjama Set for Girls | Sleepwear | Night Suit, Night Wear | Long Sleeves T-Shirt & Pyjama | Regular Wear | 0-14 Years",
        description:'All Over Print',
        price: 599,
        image:[kids1_img],
        category:'Kids',
        subCategory: 'Pajama Set',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },

    {
        id:'aaaj',
        name: "Kidbea® Baby Girls Midi/Knee Frocks Birthday Gift | Summer Dress | New Cute Trendy Frock Made with 100% Linen Fabrics",
        description:'Midi',
        price: 759,
        image:[kids2_img],
        category:'Kids',
        subCategory: 'Midi',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },

    {
        id:'aaah',
        name: "Boldfit Jacket For Men Winter Wear Puffer Standard Length Jacket For Men Monsoon Winter Wear For Men",
        description:'Padded Jacket',
        price: 999,
        image:[men3_img],
        category:'Men',
        subCategory: 'Winterwear',
        sizes:['S','M','L'],
        date:171663445689,
        bestseller:true
    },
]