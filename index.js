
// const users = [
//     { fullname: "nava lederman", phone: "0548472172", id: "215187956", email: "led054847@gmail.com", calories: 1000 },
//     { fullname: "neomi lederman", phone: "0583227004", id: "986379864", email: "led@gmail.com", calories: 1000 },
//     { fullname: "theila lederman", phone: "0527172267", id: "215197956", email: "yonal5767@gmail.com", calories: 1000 },
// ]

//מערך ירוקת
const vegetables = [
    { id: 1, img: "גזר.jpeg", name: "גזר", Weight: 100, calories: 39 },
    { id: 2, img: "כרובלבן.jpeg", name: "כרב לבן", Weight: 100, calories: 24 },
    { id: 3, img: "עגבניה.jpeg", name: "עגבניה", Weight: 100, calories: 21 },
    { id: 4, img: "גמבה.jpeg", name: "פלפל אדןם", Weight: 100, calories: 28 },
    { id: 5, img: "פלפלצהב.jpeg", name: "פלפל צהוב", Weight: 100, calories: 17 },
    { id: 6, img: "פלפלירוקחריף.jpeg", name: "פלפל ירוק", Weight: 100, calories: 26 },
    { id: 7, img: "מלפפון.jpeg", name: "מלפפון", Weight: 100, calories: 12 },
    { id: 8, img: "חסה.jpg", name: "חסה", Weight: 100, calories: 43 },
    { id: 9, img: "בצללבן.jpg", name: "בצל לבן", Weight: 100, calories: 85 },
    { id: 10, img: "קישואים.jpg", name: "קישואים", Weight: 100, calories: 20 },
]
//מערך חלבונים
const protein = [
    { id: 1, img: "אגוז.jpg", name: "שקדים", Weight: 100, calories: 575 },
    { id: 2, img: "אגוזימלך.jpg", name: "אגוזי מלך", Weight: 100, calories: 654 },
    { id: 3, img: "ביצהקשה.jpg", name: "ביצה קשה", Weight: 100, calories: 155 },
    { id: 4, img: "גבינה.jpg", name: "גבינה לבנה", Weight: 100, calories: 100 },
    { id: 5, img: "דגמושט.jpg", name: "דג מושט", Weight: 100, calories: 128 },
    { id: 6, img: "דגסלמון.jpg", name: "דג סלמון", Weight: 100, calories: 208 },
    { id: 7, img: "חביתה.jpg", name: "חביתה", Weight: 100, calories: 153 },
    { id: 8, img: "חלב.webp", name: "חלב", Weight: 100, calories: 60 },
    { id: 9, img: "עוף.jpg", name: "עוף", Weight: 100, calories: 207 },
    { id: 10, img: "קוטג.jpg", name: "קוטג", Weight: 100, calories: 93 }
]
//מערך פחמימות
const carbohydrate = [
    { id: 1, img: "אורז.jpg", name: "אורז", Weight: 100, calories: 130 },
    { id: 2, img: "בייגל.jpg", name: "בייגל", Weight: 100, calories: 250 },
    { id: 3, img: "חומוס.jpg", name: "חומוס", Weight: 100, calories: 166 },
    { id: 4, img: "חלה.webp", name: "חלה", Weight: 100, calories: 264 },
    { id: 5, img: "פסטה.jpg", name: "פסטה", Weight: 100, calories: 131 },
    { id: 6, img: "קינואה.jpg", name: "קינואה", Weight: 100, calories: 187 },
    { id: 7, img: "תפוחאדמה.jpg", name: "תפוח אדמה", Weight: 100, calories: 76 }
]

const cart = [];
const usercart = [];
const userid = localStorage.getItem("userid");

//פונקציה המופעלת בעת לחיצה על הוספת ירק כלשהו 
function addv(id) {
    let tempcart = localStorage.getItem("cart");
    if (tempcart === null) {
        tempcart = [];
    }
    else
        tempcart = JSON.parse(tempcart);

    const idus = localStorage.getItem("userid");
    const veg = vegetables.find(v => v.id === id);
    const cartitem = { num: tempcart.length, id: idus, name: veg.name, calories: veg.calories };

    tempcart.push(cartitem);

    alert("נוסף בהצלחה בהצלחה!!");
    tempcart = JSON.stringify(tempcart);
    localStorage.setItem("cart", tempcart);
}

//פונקציה המופעלת בעת לחיצה על הוספת חלבון כלשהו 
function addp(id) {
    let tempcart = localStorage.getItem("cart");
    if (tempcart === null) {
        tempcart = [];
    }
    else
        tempcart = JSON.parse(tempcart);

    const idus = localStorage.getItem("userid");
    const pro = protein.find(p => p.id === id);
    const cartitem = { num: tempcart.length, id: idus, name: pro.name, calories: pro.calories };

    tempcart.push(cartitem);

    alert("נוסף בהצלחה בהצלחה!!");
    tempcart = JSON.stringify(tempcart);
    localStorage.setItem("cart", tempcart);
}

//פונקציה המופעלת בעת לחיצה על הוספת פחמימה כלשהו 
function addc(id) {
    let tempcart = localStorage.getItem("cart");
    if (tempcart === null) {
        tempcart = [];
    }
    else
        tempcart = JSON.parse(tempcart);

    const idus = localStorage.getItem("userid");
    const car = carbohydrate.find(c => c.id === id);
    const cartitem = { num: tempcart.length, id: idus, name: car.name, calories: car.calories };

    tempcart.push(cartitem);

    alert("נוסף בהצלחה בהצלחה!!");
    tempcart = JSON.stringify(tempcart);
    localStorage.setItem("cart", tempcart);
}


//רינדורים:
function onload() {
    renderwelcom();// רינדור מסך פתיחה
  
    // showwelcome();
    // rendervegetables();// רינדור מסך ירקות
    // renderprotein();//רינדור מסך חלבונים
    // rendercarbohydrate();// רינדור מסך פחמימות
    // rendermenue();
}

//פונקציות הצגה והסתרה 
function show(id){
    const d=document.getElementById(id);
    d.style.display="flex";
}
function hide(id){
    const d=document.getElementById(id);
    d.style.display="none";
}


//רינדור מסך פתיחה
function renderwelcom() {
    hide('v');
    hide('p');
    hide('c');
    hide('Options');
    hide('cart');
    hide('end');
    show('welcom');



    const welcomdiv = document.getElementById("welcom");
    welcomdiv.innerHTML = "";

    const welcomCom = ` <div id="registration">

<form onsubmit="onformsubmitregister(event)">
    <h2>הרשמה</h2>

    <p>שם מלא</p>
    <input type="text" name="name">
    <p>טלפון</p>
    <input type="tel" name="phone">
    <p>תעודת זהות</p>
    <input type="text" name="id">
    <p>מייל</p>
    <input type="email"name="email">
    <p>כמה קלוריות אתה מעוניין לצרוך ביום?</p>
    <input type="number" name="calories">
    <div><button type="submit">הרשם</button></div>
    
</form>
</div>

<div id="connection">
<form onsubmit="onformsubmitconnection(event)" >
    <h2>התחברות</h2>
    <p>שם מלא</p>
    <input type="text" name="name">
    <p>תעודת זהות</p>
    <input type="text" name="iddd">
    <div><button type="submit" >התחבר</button></div>
</form>
</div>`;

    welcomdiv.innerHTML += welcomCom;
}

//פונקציה התחברות
function login(fullname, id) {

    let tempusers = localStorage.getItem("users");
    if (tempusers === null) {
        tempusers = [];
    }
    else
        tempusers = JSON.parse(tempusers);


    const user = tempusers.find(u => u.fullname === fullname && u.id === id);

    if (user === undefined)
        alert("משתמש חדש? הרשם !");
    else {
        alert("שלום ל-" + user.fullname);
        localStorage.setItem("userid", id);

        show('Options');
        hide('welcom');
        rendermenue();

    }

}


function onformsubmitconnection(event) {
    event.preventDefault();

    const form = event.target;
    const fullnamevalue = form.name.value;
    const idvalue = form.iddd.value;
    login(fullnamevalue, idvalue);
}
//פונקציה הרשמה למערכת
function register(fullname, phone, id, email, calories) {

    let tempusers = localStorage.getItem("users");
    if (tempusers === null) {
        tempusers = [];
    }
    else
        tempusers = JSON.parse(tempusers);

    const user = tempusers.find(u => u.fullname === fullname && u.id === id);
    const newUser = { fullname, phone, id, email, calories };
    if (user === undefined) {
        tempusers.push(newUser);
        alert("נרשמת בהצלחה!!");
        tempusers = JSON.stringify(tempusers);
        localStorage.setItem("users", tempusers);
        localStorage.setItem("userid", id);
        // show('Options');
        // hide('welcom');
        // rendermenue();
    }
    else
        alert("הינך רשום כבר במערכת, התחבר!");


}

function onformsubmitregister(event) {
    event.preventDefault();

    const form = event.target;
    const fullnamevalue = form.name.value;
    const phonevalue = form.phone.value;
    const idvalue = form.id.value;
    const emailvalue = form.email.value;
    const caloriesvalue = form.calories.value;

    register(fullnamevalue, phonevalue, idvalue, emailvalue, caloriesvalue);
}
// פונקציה שמרנדרת את מסך התפריט של אבות במזון
function rendermenue() {


    const menuedive = document.getElementById("menu");
    menuedive.innerHTML = "";


    const element = `
        <div id="ppp">
        <div class="a">
        <p onclick="show('p');renderprotein();hide('Options')">חלבונים</p>
         </div></div>

         <div id="ccc">
         <div class="b">
             <p onclick="show('c');rendercarbohydrate();hide('Options')" >פחמימות </p>
         </div></div>
 
         <div id="vvv">
         <div class="c">
             <p  onclick="show('v');rendervegetables();hide('Options')">ירקות</p>
         </div></div>
         `;

    menuedive.innerHTML += element;


}





//הצגת מסכים של התפריט

// מרנדר את תצוגת הירקות
function rendervegetables() {

    const vegetablesdive = document.getElementById("vegetables");
    vegetablesdive.innerHTML = "";

    for (let i = 0; i < vegetables.length; i++) {
        const element = `
        <div class="card">
    <img src="image1/${vegetables[i].img}" alt="">
    <p> שם מוצר: ${vegetables[i].name}</p>
    <p>${vegetables[i].Weight}:גרם</p>
    <p>${vegetables[i].calories}:קלוריות</p>
    <button onclick="addv(${vegetables[i].id});">הוסף</button>
</div>`;

        vegetablesdive.innerHTML += element;
    }
}

//מרנדר את אתצוגת החלבונים
function renderprotein() {

    const proteindive = document.getElementById("protein");
    proteindive.innerHTML = "";

    for (let i = 0; i < protein.length; i++) {
        const element = `
        <div class="card">
    <img src="chel_img/${protein[i].img}" alt="">
    <p> שם מוצר: ${protein[i].name}</p>
    <p>${protein[i].Weight}:גרם</p>
    <p>${protein[i].calories}:קלוריות</p>
    <button onclick="addp(${protein[i].id});">הוסף</button>
</div>`;

        proteindive.innerHTML += element;
    }
}

//מרנדר את תוצגת הפחמימות
function rendercarbohydrate() {

    const carbohydratedive = document.getElementById("carbohydrate");
    carbohydratedive.innerHTML = "";

    for (let i = 0; i < carbohydrate.length; i++) {
        const element = `
        <div class="card">
    <img src="pach_img/${carbohydrate[i].img}" alt="">
    <p> שם מוצר: ${carbohydrate[i].name}</p>
    <p>${carbohydrate[i].Weight}:גרם</p>
    <p>${carbohydrate[i].calories}:קלוריות</p>
    <button onclick="addc(${carbohydrate[i].id});">הוסף</button>
</div>`;

        carbohydratedive.innerHTML += element;
    }
}


//מרנדר את העגלה של המתשמש שמחובר באותו רגע
function mycart() {
    let tempcart = localStorage.getItem("cart");
    if (usercart === null) {
        usercart = [];
    }
    else
        tempcart = JSON.parse(tempcart);

    for (let i = 0; i < tempcart.length; i++) {

        if (tempcart[i].id === userid) {
            usercart.push(tempcart[i]);

             const usreCartStr = JSON.stringify(usercart);
            localStorage.setItem("usercart", usreCartStr);
        }


    }
    console.log(usercart);

}

//מציג את כל מה שיש למשתמש המחובר בעגלה שלו
function endofday() {
    mycart();

    let tempcart = localStorage.getItem("usercart");
    if (usercart === null) {
        usercart = [];
    }
    else
        tempcart = JSON.parse(tempcart);

        const cartdiv = document.getElementById("food");
    cartdiv.innerHTML = "";

    for (let i = 0; i < tempcart.length; i++) {
                const element1 = `            
         <div>${tempcart[i].name} | ${tempcart[i].calories} </div>`;
        
                cartdiv.innerHTML += element1;
            }
}

//מחשב כמה קלוריות אכל המשתמש המחובר לאורך כךל היום
function sum(){

    let tempcart = localStorage.getItem("usercart");
    if (usercart === null) {
        usercart = [];
    }
    else
        tempcart = JSON.parse(tempcart);

    let s=0;

    for (let i = 0; i < tempcart.length; i++) {
      s+=tempcart[i].calories;
    }
     
    const idddd = tempcart[1].id;


    let tempu = localStorage.getItem("users");
    tempu = JSON.parse(tempu);


    const user = tempu.find( u=>u.id === idddd);

    const finish = document.getElementById("allthesum");




    if(s>user.calories){
        let ss=s-user.calories;
        const element1=`אופססס קצת חרגת!! אכלת ${ss}קלוריות מעל מה שמותר לך`;
        finish.innerHTML+=element1;
      
    //     const newarr=localStorage.getItem("cart");
    //     newarr=JSON.parse(cart);

    //     const n= newarr.filter(u=>u.id!==userid);
    //    const n1=JSON.stringify(n);
    //     localStorage.setItem("cart",n1);
    }
    else{
        let ss=user.calories-s;
        const element1=` אנחנו גאים בך!! צרכת היום ${s}קלוריות !לך תתפנק על עוד ${ss}קלוריות`;
        finish.innerHTML+=element1;



    //     const newarr=localStorage.getItem("cart");
    //     newarr=JSON.parse(cart);

    //     const n= newarr.filter(u=>u.id!==userid);
    //    const n1=JSON.stringify(n);
    //     localStorage.setItem("cart",n1);
    }

  

}











