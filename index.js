const kits = ["crash", "snare", "kick", "tom"];

const containerE1 = document.querySelector(".container");

kits.forEach(kit=>{
 
    const btnE1 = document.createElement("button");
    btnE1.classList.add("btn");
    btnE1.style.backgroundImage = "url(images/" + kit + ".png)";
    btnE1.innerText=kit;
    containerE1.appendChild(btnE1);

    audioE1.src ="Sounds/" + kit +".mp3";
    const audioE1 = document.createElement("audio");
    containerE1.appendChild(audioE1);

})