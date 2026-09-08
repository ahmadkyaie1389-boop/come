let count = 0;


const button = document.getElementById("funButton");
const message = document.getElementById("message");
const counter = document.getElementById("counter");



const jokes = [

"😂 فکر کردی نجات پیدا کردی؟ تازه شروع شد!",

"🤖 ربات مسخره‌باز فعال شد!",

"🚨 هشدار! مقدار خنده شما کم است!",

"🤣 سیستم اعلام کرد زیادی جدی هستی!",

"👀 دوباره کلیک کردی؟ من دیدمت!",

"🐒 یک میمون کنترل سیستم را گرفته!",

"🍕 جایزه شما یک پیتزای خیالی است!",

"😎 شما قهرمان فشار دادن دکمه شدید!",

"🧠 مغز ربات در حال پردازش... نتیجه: هیچ!",

"😂 خنده با موفقیت ارسال شد!",

"🤡 بخش مسخره‌بازی آماده خدمت است!",

"🐱 گربه‌های اینترنتی تایید کردند!",

"⚠️ خطا 404: جدیت پیدا نشد!",

"🛸 موجودات فضایی هم دیدند!",

"🔥 سطح مسخره‌بازی افزایش یافت!",

"😈 دکمه گفت دوباره منو بزن!",

"🥳 جشن بدون دلیل شروع شد!",

"💀 سیستم تلاش کرد جدی باشد و شکست خورد!",

"🎮 مرحله جدید باز شد!",

"😜 تو عاشق این دکمه شدی!"
];




// کلیک اصلی

button.addEventListener("click", function(){


count++;



counter.innerHTML =
"تعداد نجات‌ها: " + count;



// پیام ویژه هر 10 کلیک

if(count % 10 === 0){


message.innerHTML =
"😂 کصخل مگه نجات پیدا نکردی؟ باز برگشتی؟ 🤣";


}else{


let random =
Math.floor(Math.random()*jokes.length);


message.innerHTML =
jokes[random];


}



// لرزش صفحه

document.body.classList.add("shake");


setTimeout(()=>{

document.body.classList.remove("shake");

},400);




// نور قرمز

let flash =
document.getElementById("flash");


if(flash){


flash.classList.add("flash-active");


setTimeout(()=>{

flash.classList.remove("flash-active");

},500);


}




// صدا

let sound =
document.getElementById("laughSound");


if(sound){

sound.currentTime = 0;

sound.play().catch(()=>{});

}





// انفجار ایموجی

for(let i=0;i<8;i++){


let emoji =
document.createElement("div");


emoji.className="emoji";


emoji.innerHTML="😂";


emoji.style.left =
Math.random()*window.innerWidth+"px";


emoji.style.top =
Math.random()*window.innerHeight+"px";



document.body.appendChild(emoji);



setTimeout(()=>{

emoji.remove();

},1000);


}




// فرار دکمه بعد از 3 بار کلیک


if(count >= 3){

    let box = button.getBoundingClientRect();

    let maxX = window.innerWidth - box.width - 40;
    let maxY = window.innerHeight - box.height - 40;


    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);


    button.style.position="absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";

}


});
// ==============================
// حالت موبایل - فرار از انگشت 📱
// ==============================

let lastTouchTime = 0;

document.addEventListener("touchstart", function(event){

    // جلوگیری از اجرای دوباره به خاطر لمس‌های خیلی سریع
    const now = Date.now();

    if(now - lastTouchTime < 250){
        return;
    }

    lastTouchTime = now;


    const touch = event.touches[0];

    if(!touch){
        return;
    }


    const rect = button.getBoundingClientRect();


    // مرکز دکمه
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;


    // فاصله انگشت تا دکمه
    const distance = Math.sqrt(

        Math.pow(touch.clientX - buttonX, 2) +

        Math.pow(touch.clientY - buttonY, 2)

    );


    // اگر انگشت به دکمه نزدیک شد
    if(distance < 140){

        escapeFromFinger();

    }

});



function escapeFromFinger(){

    // اگر هنوز وارد حالت فرار نشده
    button.style.position = "fixed";

    button.style.zIndex = "9999";


    const padding = 20;


    const maxX =
        window.innerWidth -
        button.offsetWidth -
        padding;


    const maxY =
        window.innerHeight -
        button.offsetHeight -
        padding;


    // مختصات امن
    const x =
        padding +
        Math.random() * Math.max(1, maxX - padding);


    const y =
        padding +
        Math.random() * Math.max(1, maxY - padding);


    button.style.left = x + "px";

    button.style.top = y + "px";


    // پیام
    if(message){

        message.innerHTML =
        "🏃‍♂️💨 نههههه! انگشتت نزدیک شد!";

    }


    // لرزش کوچک
    button.animate(

        [
            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.15) rotate(-5deg)"
            },

            {
                transform:"scale(1) rotate(5deg)"
            },

            {
                transform:"scale(1)"
            }
        ],

        {
            duration:350
        }

    );

}