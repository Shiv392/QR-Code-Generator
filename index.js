const wrapper=document.querySelector(".wrapper");
const qrcodebutton=document.querySelector('.form button');
const qrinput=document.querySelector('.form input');
const qrimg=document.querySelector('.qr-code img');

qrcodebutton.addEventListener('click',()=>{
   let qrvalue=qrinput.value;
   if(qrvalue){   //if user enters value 
        qrcodebutton.innerHTML='Generating QR Code';
      qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${qrvalue}`;
      
      qrimg.addEventListener('load',()=>{
         wrapper.classList.add('active'); 
         qrcodebutton.innerHTML='Generate QR Code';
      })
   }
   else return;

   
})

qrinput.addEventListener('keyup',()=>{
   if(!qrinput.value){
      wrapper.classList.remove('active');
   }
})