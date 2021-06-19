//VARIABLES
const avatar = document.getElementById("avatar"); //AVATAR DISPLAY
const avatarSelect = document.getElementById("avatar-options");  //AVATAR SELECT 
const backgroundSelect = document.getElementById("bg-select");  //BACKGROUND SELECT 
const arrow1 = document.getElementById("arrow1"); //BUTTON#1 ARROW
const arrow2 = document.getElementById("arrow2"); //BUTTON#2 ARROW
const body = document.getElementById("body"); //BODY
const container = document.getElementById("container"); //CONTAINER FOR OTHER DIVS
const username = document.getElementById("username"); //USERNAME INPUT
const description = document.getElementById("desc") //DESCRIPTION INPUT
const locationS = document.getElementById("country") //DESCRIPTION INPUT



//SHOW AVATARS BUTTON 
function showSelect() { 
    if ((window.getComputedStyle(avatarSelect).opacity) == '0') {
        avatarSelect.style.opacity = "1"
        avatarSelect.style.height = "max-content"
        
        avatarSelect.style.marginBottom = "0%"
        arrow1.style.transform = "rotate(90deg)"
    } else {
        avatarSelect.style.opacity = "0"
        avatarSelect.style.height = "0px"
        arrow1.style.transform = "rotate(0deg)"
        container.style.height = window.getComputedStyle(body).height;
    }
}

//SHOW BACKGROUND BUTTON 
function showBGSelect(){
    if(window.getComputedStyle(backgroundSelect).opacity == '0'){
        backgroundSelect.style.opacity = '1';
        backgroundSelect.style.height = '100%';  
        backgroundSelect.style.visibility = 'visible';
        container.style.height='max-content';
        arrow2.style.transform = "rotate(90deg)";
    }
    else{
        backgroundSelect.style.opacity = '0';
        backgroundSelect.style.height = '0%';
        backgroundSelect.style.visibility = "hidden";
        container.style.height = window.getComputedStyle(body).height;
        arrow2.style.transform = "rotate(0deg)";
        
    }
}

//CHANGE AVATAR 
function changeAvatar(src) {
    avatar.src = src;  
}

//CHANGE BG 
function changeBG(src) {
    body.style.backgroundImage = `url(${src})`
    chosenBG = src;
}


//REMOVE WHITESPACE FROM USERNAME INPUT
const field = document.querySelector('[id="username"]');

field.addEventListener('keypress', function ( event ) {  
   var key = event.keyCode;
    if (key === 32) {
      event.preventDefault();
    }
});

//OPEN STEAM
function openSteam(){
    if(username.value.length == 0){
        document.getElementById("username").placeholder = "REQUIRED!!!!"
        document.getElementById("username").style.border = "1px solid red";
        alert("Fill out username!")
        return;
    }
    //container.style.opacity = '0'
    //container.style.visibility = 'hidden'
    //window.open("steam.html","_blank");
    alert("Jebaited")
}



