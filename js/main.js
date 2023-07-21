// get element
let icon_navbar1= document.getElementById("icon1");
let icon_navbar2= document.getElementById("icon2");
let icon_navbar3= document.getElementById("icon3");
let icon_navbar4= document.getElementById("icon4");
let icon_navbar5= document.getElementById("language");
let title_icon4 = document.getElementById("call1");
let text_call = document.getElementById("call_me1");
let title_icon2 = document.getElementById("project1");
let title_icon1 = document.getElementById("about1");
let section1_h1 = document.getElementById("hello");
let info_one    = document.getElementById("info1");
let who_am_i    = document.getElementById("who");
let info_tow    = document.getElementById("info2");
let my_name     = document.getElementById("name");
let name_is     = document.getElementById("NameIs");
let my_project  = document.getElementById("MyProject");
let soon        = document.getElementById("SoonText");
let soon1        = document.getElementById("SoonText1");
let soon2        = document.getElementById("SoonText2");
let soon3        = document.getElementById("SoonText3");
let soon4       = document.getElementById("SoonText4");
let soon5       = document.getElementById("SoonText5");
let preview     = document.getElementById("PreviewText");
let preview1     = document.getElementById("PreviewText1");
let preview2    = document.getElementById("PreviewText2");
let preview3    = document.getElementById("PreviewText3");
let preview4    = document.getElementById("PreviewText4");
let preview5    = document.getElementById("PreviewText5");
let text_copyright    = document.getElementById("copyright");
let text_name    = document.getElementById("name1");
// active icon who i am
function ActiveIcon1(){
  if(icon_navbar2.className || icon_navbar4.className == "material-icons" ){
    icon_navbar2.className = "material-icons-outlined";
    icon_navbar4.className = "material-icons-outlined";
    icon_navbar1.className = "material-icons";
  }else{
    icon_navbar1.className = "material-icons";
  }
} 
// active icon project
function ActiveIcon2(){
  if(icon_navbar1.className || icon_navbar4.className == "material-icons" ){
    icon_navbar1.className = "material-icons-outlined";
    icon_navbar4.className = "material-icons-outlined";
    icon_navbar2.className = "material-icons";
  }else{
    icon_navbar2.className = "material-icons";
  }
}
// inactive all icon
function InactiveAllIcon(){
  icon_navbar1.className="material-icons-outlined";
  icon_navbar2.className="material-icons-outlined";
  icon_navbar4.className="material-icons-outlined";
}
// active icon call me 
function ActiveIcon4(){
  if(icon_navbar2.className || icon_navbar1.className == "material-icons" ){
    icon_navbar2.className = "material-icons-outlined";
    icon_navbar1.className = "material-icons-outlined";
    icon_navbar4.className = "material-icons";
  }else{
    icon_navbar4.className = "material-icons";
  }
}
// change language
function language(){
  icon_navbar1.className="material-icons-outlined";
  icon_navbar2.className="material-icons-outlined";
  icon_navbar4.className="material-icons-outlined";
  if (icon_navbar5.innerText=="EN") {
    icon_navbar5.innerText ="ض";
    title_icon4.title ="Contact Us";
    title_icon2.title ="Project";
    title_icon1.title ="Who am I?";
    section1_h1.innerHTML ="Welcome to the site";
    info_one.innerHTML    ="Web Developer";
    who_am_i.innerHTML    ="Who am I?";
    info_tow.innerHTML    ="Web Developer I <br> started learning programming in 2021 I have experience in programming websites for nearly two years I have not started real projects yet All my projects are an application of what I learned";
    my_name.innerHTML     ="Moataz";
    name_is.innerHTML     ="Hi! My name is";
    my_project.innerHTML  ="project";
    soon.innerText        ="Coming soon";
    soon1.innerText        ="Coming soon";
    soon2.innerText        ="Coming soon";
    soon3.innerText        ="Coming soon";
    soon4.innerText        ="Coming soon";
    soon5.innerText        ="Coming soon";
    preview.innerText     ="Preview";
    preview1.innerText     ="Preview";
    preview2.innerText     ="Preview";
    preview3.innerText     ="Preview";
    preview4.innerText     ="Preview";
    preview5.innerText     ="Preview";
    text_call.innerHTML    ="Contact Us";
    text_copyright.innerHTML ="copyright &COPY;";
    text_name.innerText ="Moataz Mohammed";
  }else{
    icon_navbar5.innerText="EN"
    title_icon4.title ="تواصل معنا";
    title_icon2.title ="مشاريعي";
    title_icon1.title ="من انا ؟";
    section1_h1.innerHTML ="مرحبا بكم قي موقع";
    info_one.innerHTML    ="مطور مواقع الانتر نت";
    who_am_i.innerHTML    ="من انا ؟";
    info_tow.innerHTML    ="مطور ويب <br> بدأت تعلم البرمجة في عام 2021 لدي خبرة في برمجة المواقع منذ ما يقرب من عامين لم أبدأ مشاريع حقيقية بعد كل مشاريعي هي تطبيق لما تعلمته";
    my_name.innerHTML     ="معتز";
    name_is.innerHTML     ="مرحبا! اسمي";
    my_project.innerHTML  ="مشاريعي";
    soon.innerText        ="قريباً";
    soon1.innerText        ="قريباً";
    soon2.innerText        ="قريباً";
    soon3.innerText        ="قريباً";
    soon4.innerText        ="قريباً";
    soon5.innerText        ="قريباً";
    preview.innerText     ="معاينة";
    preview1.innerText     ="معاينة";
    preview2.innerText     ="معاينة";
    preview3.innerText     ="معاينة";
    preview4.innerText     ="معاينة";
    preview5.innerText     ="معاينة";
    text_call.innerHTML    ="تواصل معنا";
    text_copyright.innerHTML ="حقوق الملكية الفكرية &COPY;";
    text_name.innerText ="معتز محمد";
  }
}
// auto copy text number
function ClipboardTextNamber(){
  // get the text field
  let copytext = document.getElementById('TextNamber');
  // select the text field
  copytext.select();
  copytext.setSelectionRange(0,999999); //for mobil devices
  // copy the text inside the text field
  navigator.clipboard.writeText(copytext.value);
  // alert the copied text 
  let style = document.createElement('style');
  style.innerHTML = 'footer .call_me #NumberAlert::before {animation: alert 3s 1;} footer .call_me #NumberAlert::after {animation: alert 3s 1;}';
  document.head.appendChild(style);
}
// auto copy text email
function ClipboardTextEmail(){
  // get the text field
  let copytext = document.getElementById('TextEmail');
  // select the text field
  copytext.select();
  copytext.setSelectionRange(0,999999); //for mobil devices
  // copy the text inside the text field
  navigator.clipboard.writeText(copytext.value);
  // alert the copied text 
  let style = document.createElement('style');
  style.innerHTML = 'footer .call_me #EmailAlert::before {animation: alert 3s 1;} footer .call_me #EmailAlert::after {animation: alert 3s 1;}';
  document.head.appendChild(style);
}


