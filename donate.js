
let daata = [
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1664110172/production/images/campaign/571268/medical_1553587798_1664104680.jpg",desc:"3 Year Old Kid With Multi Organ Failure On ECMO Threapy, Need Your Help",raise:"$14,37,030",create:"Obaidullah"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663754600/production/images/campaign/569349/IMG-20220921-WA0003_a4xvoa_1663754845.jpg",desc:"Support Priyanka To Recover From Accidental Injuries",raise:"$8,74,639",create:"T Yeswanth"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1662482717/production/images/campaign/562290/medical_1553587798_1662482716.jpg",desc:"Save a Life - Help my father get a liver Transplant",raise:"$12,43,873",create:"Akansha Pandey"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1664093694/production/images/campaign/571176/WhatsApp_Image_2022-09-25_at_13.35.36_bmb5ga_1664093698.jpg",desc:"In the memory of Sanjai - Education Fund for Twin Daughters",raise:"$7,77,145",create:"Umang Mathil"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663660274/production/images/campaign/568791/IMG-20220919-WA0022_pfkowf_1663661020.jpg",desc:"Save Gaumata from Lumpi Skin",raise:"$4,97,509",create:"Jai Sia Ram"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1661095595/production/images/campaign/553835/nuvjufeu6mct6jcba4ie_1661095598.jpg",desc:"Aravind(TR) Srinivasan Birthday Fundraiser For Nellai Cancer Hospital",raise:"$8,56,795",create:"Tharuvai Angel"},
    
];
<<<<<<< HEAD
let data = JSON.parse(localStorage.getItem('milaap'))||[];
function dis(){
   
=======
let data = JSON.parse(localStorage.getItem('milaap'))||[]
function dis(){
     
>>>>>>> a6460789a1eb5203c80240be69fe89a8fa056cef
    // let arr = [];
    // document.getElementById('submit').addEventListener('click',function(){
        // console.log(data);
        // function dis(){
        console.log("sachin");
    let img = document.getElementById('image').value;
    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;
    let amount = document.getElementById('amount').value;
    if(name!==''&& img!==''&&desc!==''&&amount!==''){
        
        let obj = {create:name,
            desc:desc,
            raise:amount,
            img:img
        };
        console.log(obj);
        data.push(obj);
        localStorage.setItem('milaap',JSON.stringify(data));
        // daata.push(data);
        
        document.getElementById('image').value=null;
        document.getElementById('name').value= null;
        document.getElementById('desc').value=null;
        document.getElementById('amount').value=null;
        document.getElementById('number').value = null;
        alert('successful !');
    }else{
        alert('fill required credentials !');
    }
// });
}
disp();
function disp(){
    data.forEach((ele)=>{
    let div = document.createElement('div');
    div.setAttribute('class','card');
    let img = document.createElement('img');
    img.setAttribute('class','img')
    img.src = ele.img;
    let desc = document.createElement('p');
    desc.innerText = ele.desc;
    let cr = document.createElement('div');
    cr.setAttribute('class','cr');
    let r = document.createElement('div');
    let raise = document.createElement('p');
    raise.innerText = `Raised: ${ele.raise}`;
    r.append(raise);
    let c = document.createElement('div');
    let create = document.createElement('p');
    create.innerText = `Created By: ${ele.create}`;
    c.append(create);
    cr.append(r,c);
    div.append(img,desc,cr);
    document.querySelector('#card2').append(div);
})
}

    // let obj = {
        
    //     desc : "fnjvrinjehg",
    //     create : "Sachin",
    //     raise : '54321',
    //     img : 'https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1661095595/production/images/campaign/553835/nuvjufeu6mct6jcba4ie_1661095598.jpg',
    // } 
    // function dataaa(){

    //     daata.push(obj);
    // }
    // dataaa();
    // console.log(data);

    display();
function display(){

    daata.forEach((ele)=>{
        let div = document.createElement('div');
        div.setAttribute('class','card');
        let img = document.createElement('img');
        img.setAttribute('class','img')
        img.src = ele.img;
        let desc = document.createElement('p');
        desc.innerText = ele.desc;
        let cr = document.createElement('div');
        cr.setAttribute('class','cr');
        let r = document.createElement('div');
        let raise = document.createElement('p');
        raise.innerText = `Raised: ${ele.raise}`;
        r.append(raise);
        let c = document.createElement('div');
        let create = document.createElement('p');
        create.innerText = `Created By: ${ele.create}`;
        c.append(create);
        cr.append(r,c);
        div.append(img,desc,cr);
        document.querySelector('#cards').append(div);
    })
}


// =============================================================

myhalf();
function myhalf(){

let see = document.getElementById('half1');
let half = [
    {img:"https://images.milaap.org/milaap/image/upload/v1593006781/campaign_listing/provide_tax-brand.png",p:"Provide Tax Benefits"},
    {img:"https://images.milaap.org/milaap/image/upload/v1593006784/campaign_listing/urgent-brand.png",p:"Need Urgent Help"},
    {img:"https://images.milaap.org/milaap/image/upload/v1593006781/campaign_listing/match_donation-brand.png",p:"Match Your Donation"},
];


    half.forEach((ele)=>{
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = ele.img;
        let p = document.createElement('p');
        p.innerText = ele.p;
        div.append(img,p);
        see.append(div);
    })
}

// ========================================================

myfunction();
function myfunction(){

let see2 = document.getElementById('half2');
let half3 = [
    {img:"https://images.milaap.org/milaap/image/upload/v1593006781/campaign_listing/provide_tax-brand.png",p:"Medical"},
    {img:"https://images.milaap.org/milaap/image/upload/v1593006784/campaign_listing/urgent-brand.png",p:"Memorials"},
    {img:"https://images.milaap.org/milaap/image/upload/v1593006781/campaign_listing/match_donation-brand.png",p:"Education"},
]

    half3.forEach((ele)=>{
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = ele.img;
        let p = document.createElement('p');
        p.innerText = ele.p;
        div.append(img,p);
        see2.append(div);
    })
}

// ========================================================

myfun();
function myfun(){

let arr = [
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663089110/production/images/campaign/565577/IMG_2697_mamr67_1663092105.jpg",raise:"$4,63,365",create:"Srini Swami",desc:"Sponsor girls education at Ikhvelos in rural communities of Rajasthan"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1656141839/production/images/campaign/520272/slider-2_rvhlqy_1656141843.jpg",raise:"$98,158",create:"Help Foundations",desc:"Donate to Feed The Hungry Abandoned Elderly Homeless People in India"},
    {img:"https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663059094/production/images/campaign/556923/IMG-20220913-WA0002_o43yz7_1663059539.jpg",raise:"$1,46,150",create:"Indielove Society",desc:"Help us care for abandoned dogs"},
]


    arr.forEach((ele)=>{
        let div = document.createElement('div');
        div.setAttribute('class','card');
        let img = document.createElement('img');
        img.setAttribute('class','img')
        img.src = ele.img;
        let desc = document.createElement('p');
        desc.innerText = ele.desc;
        let cr = document.createElement('div');
        cr.setAttribute('id','cr');
        let r = document.createElement('div');
        let raise = document.createElement('p');
        raise.innerText = `Raised: ${ele.raise}`;
        r.append(raise);
        let c = document.createElement('div');
        let create = document.createElement('p');
        create.innerText = `Created By: ${ele.create}`;
        c.append(create);
        cr.append(r,c);
        div.append(img,desc,cr);
        document.querySelector('#dog').append(div);
    })
}

// ============================================================


let fund = document.getElementById('fund');
let fund1 = document.createElement('div');
let para = document.createElement('h2');
para.innerText = 'Do you want to raise funds for a medical emergency?';
let btn = document.createElement('button');
btn.innerText = ' Start a fundraiser';
btn.setAttribute('id','btn');
btn.onclick = ()=>{window.location.href = "fundraise.html";}
fund1.append(para,btn);
fund.append(fund1);
