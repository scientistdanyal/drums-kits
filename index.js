const kits = ["crash", "kick", "snare", "tom"];
const containerE1 = document.querySelector(".container");

kits.forEach(kit => {
    const btnE1 = document.createElement("button");
    btnE1.classList.add("btn");
    btnE1.innerText = kit;
    btnE1.style.backgroundImage = "url(images/" + kit + ".png)";
    containerE1.appendChild(btnE1);

    btnE1.addEventListener('click', () => {
        playSound(kit);
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            playSound(kit);
        }
    });
});

function playSound(kit) {
    const audioE1 = new Audio('sounds/' + kit + ".mp3");
    audioE1.play();
}
