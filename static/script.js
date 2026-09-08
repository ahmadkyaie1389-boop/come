let count = 0;

const button = document.getElementById("funButton");
const message = document.getElementById("message");
const counter = document.getElementById("counter");

const flash = document.getElementById("flash");
const sound = document.getElementById("laughSound");


const jokes = [

"😂 فکر کردی نجات پیدا کردی؟ تازه شروع شد!",

"🤖 هوش مصنوعی مسخره‌باز فعال شد!",

"🤣 دوباره برگشتی؟ دکمه منتظرت بود!",

"🚨 هشدار! میزان خنده کم شده است!",

"🐒 یک میمون کنترل سیستم را گرفته!",

"👀 دیدمت که دوباره کلیک کردی!",

"🔥 سطح مسخره‌بازی افزایش یافت!",

"😈 این دکمه خیلی خوشحال شد!",

"🤡 سیستم جدیت پیدا نکرد!",

"😂 خنده با موفقیت ارسال شد!",

"🐱 گربه‌های اینترنتی تایید کردند!",

"🛸 موجودات فضایی هم این کلیک را دیدند!",

"🎮 مرحله جدید باز شد!",

"🥳 جشن بدون دلیل شروع شد!",

"💻 کامپیوتر هم خندید!"

];



button.addEventListener("click", function(){


count++;


counter.innerHTML =
"تعداد نجات‌ها: " + count;



// پیام ویژه هر 10 کلیک

if(count % 10 === 0){

message.innerHTML =
"😂 کصخل مگه نجات پیدا نکردی؟ باز برگشتی؟ 🤣";

}

else{


let random =
Math.floor(Math.random() * jokes.length);


message.innerHTML =
jokes[random];

}




// لرزش صفحه

document.body.classList.add("shake");


setTimeout(()=>{

document.body.classList.remove("shake");

},400);




// نور اضطراری

if(flash){

flash.classList.add("flash-active");


setTimeout(()=>{

flash.classList.remove("flash-active");

},500);

}




// صدای خنده

if(sound){

sound.currentTime = 0;

sound.play().catch(()=>{});

}




// انفجار ایموجی

for(let i=0;i<8;i++){


let emoji = document.createElement("div");

emoji.className = "emoji";

emoji.innerHTML = "😂";


emoji.style.left =
Math.random()*window.innerWidth + "px";


emoji.style.top =
Math.random()*window.innerHeight + "px";


document.body.appendChild(emoji);



setTimeout(()=>{

emoji.remove();

},1000);


}


});
let progress = 0;

let loading = setInterval(()=>{

progress += 5;

document.getElementById(
"loading-progress"
).style.width = progress+"%";


document.getElementById(
"loading-text"
).innerHTML =
progress+"%";


if(progress>=100){

clearInterval(loading);


document.getElementById(
"loader"
).style.display="none";

}


},100);