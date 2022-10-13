console.log("Portfolio");
let Recent=document.getElementsByClassName('Recent');
let nav=document.querySelectorAll('nav');
console.log(Recent);
window.addEventListener('scroll',Event=>{
let v=this.scrollY;
if(73<v){
    nav[0].style.boxShadow="0px 4px 10px 0px rgba(0,0,0,0.1)";
    nav[0].style.backgroundColor="#fff";
}
if(v<73){
    nav[0].style.boxShadow="none";
    nav[0].style.backgroundColor="transparent";
}
},{ passive: true });

const Hire_Me=document.getElementsByClassName('Hire_Me');
console.log(Hire_Me);
Hire_Me[0].addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo(0,2600);
    
    console.log("jdkasd");
})


//navigation bar -->

let navigation=document.getElementsByClassName('navigation');



    for(let i=0;i<navigation.length;i++){
      
        navigation[i].addEventListener('click',()=>{
           navigation[i].classList.add('active');
           for(let j=0;j<navigation.length;j++){
            if(navigation[j]!=navigation[i]){
                navigation[j].classList.remove('active');
            }
           }
        })
        
    }



    function sendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "vansharya703@gmail.com",
            Password : "7B4C8E7B83063E546084D111396FA8160A7D",
            To : 'vanshdeep703@gmail.com',
            From :document.getElementById('Email').value,
            Subject : "This is the subject",
            Body :document.getElementById('Textarea').value,
        }).then(
          message => alert(message)
        );
        // console.log("danshfd");
        // alert("vansh deep arya");
        // Email.send({
        //     SecureToken : "5e220cbc-1aa8-49ff-aff9-1d6a283fcbae",
        //     To : 'vanshdeep703@gmail.com',
        //     From : document.getElementById('Email').value,
        //     Subject : "This is the subject",
        //     Body : document.getElementById('Textarea').value
        // }).then(
        //   message => alert(message)

  

    }
    let menu=document.getElementById('menu');
    let list=document.getElementById('list');
    console.log(list);
    menu.addEventListener('click',()=>{
    
    if(menu.getAttribute('name')==='close-outline'){
        menu.setAttribute('name','menu-outline');
        list.style.top='-270px'
    }else{
        menu.setAttribute('name','close-outline')
        list.style.top='0px'
    }})