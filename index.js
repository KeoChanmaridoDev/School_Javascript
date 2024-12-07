function toggleMenu() {
    document.getElementById('dropdown').classList.toggle('hidden');
    
}
function toggleMenu1() {
    document.getElementById('social').classList.toggle('hidden');
}

function hideAllCards() {
    var cards = document.querySelectorAll("#setec, #rupp, #ace");
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.add("hidden");
    }
}


function setec() {
    hideAllCards(); 
    
    document.getElementById("setec").classList.remove("hidden");  
    document.getElementById('dropdown').classList.add('hidden'); 
    document.getElementById("social-btn").classList.remove("hidden");
    document.getElementById('blank').classList.toggle('hidden');
    document.getElementById("facebook").href = "https://www.facebook.com/setecedu";
    document.getElementById("telegram").innerHTML = "+855 12 395 190";
    document.getElementById("youtube").href = "https://www.youtube.com/@setecinstitute7131";


    const links = document.getElementsByClassName("link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("hidden");
    }
}

// Rupp function
function rupp() {
    hideAllCards();  
    document.getElementById("rupp").classList.remove("hidden");  
    document.getElementById('dropdown').classList.add('hidden'); 
    document.getElementById("social-btn").classList.remove("hidden");
    document.getElementById("facebook").href = "https://www.facebook.com/profile.php?id=100083062174327";
    document.getElementById("telegram").innerHTML = "+855 023 883 640";
    document.getElementById("youtube").href = "https://www.youtube.com/@សមាគមនិស្សិតសាកលវិទ្យាល័យភូមិ";

    const links = document.getElementsByClassName("link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("hidden");
    }

}

// Ace function
function ace() {
    hideAllCards();  
    document.getElementById("ace").classList.remove("hidden");  
    document.getElementById('dropdown').classList.add('hidden');
    document.getElementById("social-btn").classList.remove("hidden");
    document.getElementById("facebook").href = "https://www.facebook.com/ace.cambodia";
    document.getElementById("telegram").innerHTML = "+855 023 222 325";
    document.getElementById("youtube").href = "https://www.youtube.com/@IDPCambodia";

    const links = document.getElementsByClassName("link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("hidden");
    }

}

function addBlank(){
    document.getElementById("addCheck").classList.toggle("hidden");
    document.querySelectorAll(".social").forEach (element =>{
        element.setAttribute('target', '_blank')
    })   
}