let count = 0;


const button = document.getElementById("funButton");
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const flash = document.getElementById("flash");
const sound = document.getElementById("laughSound");



const jokes = [

"😂 فکر کردی نجات پیدا کردی؟",

"🤖 هوش مصنوعی مسخره‌باز فعال شد!",

"🤣 دوباره برگشتی؟",

"🚨 وضعیت اضطراری: خنده لازم است!",

"🐒 یک میمون کنترل سیستم را گرفته!",

"👀 من دیدمت که کلیک کردی!",

"🔥 سطح دیوانگی افزایش یافت!",

"😈 این دکمه دوست دارد اذیتت کند!",

"🤡 سیستم جدی بودن شما را پیدا نکرد!",

"😂 هنوز امید داری؟"

];




// کلیک دکمه

button.addEventListener("click",()=>{


count++;


counter.innerHTML =
"تعداد نجات‌ها: " + count;



// پیام هر 10 کلیک

if(count % 10 === 0){

message.innerHTML =
"😂 کصخل مگه نجات پیدا نکردی؟ باز برگشتی؟ 🤣";


}else{


let r =
Math.floor(Math.random()*jokes.length);


message.innerHTML =
jokes[r];

}



// لرزش

document.body.classList.add("shake");


setTimeout(()=>{

document.body.classList.remove("shake");

},400);



// نور

if(flash){

flash.classList.add("flash-active");


setTimeout(()=>{

flash.classList.remove("flash-active");

},500);

}



// صدا

if(sound){

sound.currentTime=0;

sound.play().catch(()=>{});

}



// ایموجی

createEmoji();



// فرار بعد از 3 کلیک

if(count >=3){

moveButton();

}


});






// حرکت امن دکمه

function moveButton(){


button.style.position="fixed";


let width =
button.offsetWidth;


let height =
button.offsetHeight;



let maxX =
window.innerWidth - width - 30;


let maxY =
window.innerHeight - height - 30;



let x =
Math.random()*maxX;


let y =
Math.random()*maxY;



button.style.left =
Math.max(20,x)+"px";


button.style.top =
Math.max(20,y)+"px";


}







// موبایل: نزدیک شدن انگشت

document.addEventListener(
"touchstart",
(e)=>{


let touch =
e.touches[0];


let rect =
button.getBoundingClientRect();



let bx =
rect.left + rect.width/2;


let by =
rect.top + rect.height/2;



let distance =
Math.sqrt(

Math.pow(touch.clientX-bx,2)+

Math.pow(touch.clientY-by,2)

);



if(distance < 150){

moveButton();


message.innerHTML =
"🏃‍♂️ نههههه! انگشتت نزدیک شد!";


}


});







// ساخت ایموجی

function createEmoji(){


for(let i=0;i<6;i++){


let e =
document.createElement("div");


e.className="emoji";


e.innerHTML="😂";


e.style.left =
Math.random()*window.innerWidth+"px";


e.style.top =
Math.random()*window.innerHeight+"px";


document.body.appendChild(e);



setTimeout(()=>{

e.remove();

},1000);


}


}