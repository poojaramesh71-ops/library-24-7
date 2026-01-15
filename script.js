const texts = [
    "Fixed Seating Available",
    "High-Speed Wi-Fi",
    "Computer Access",
    "Silent Study Environment"
];

let i = 0;
const textEl = document.getElementById("changing-text");

function rotateText(){
    textEl.textContent = texts[i];
    i = (i + 1) % texts.length;
}

setInterval(rotateText, 2000);
rotateText();

function updatePrice(){
    const d = document.getElementById("duration").value;
    let p = d==1?500:d==3?1500:d==6?3000:d==12?5000:0;
    document.getElementById("price").innerText = p;
}

function submitForm(e){
    e.preventDefault();
    alert("Subscription successful!");
}
