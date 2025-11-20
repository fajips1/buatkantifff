const message = `I don’t know if you need this right now… but if you do, I just want you to remember something.\n\nYou’re stronger than you feel, and you’ve been trying so hard—even when no one sees it.That already makes you incredible.\n\nLife hasn’t been gentle lately, but none of this means you’re failing. You deserve peace, healing, and all the good things coming your way.\n\nSo please keep going, even slowly. And on the days you’re tired or hurting, I hope you know you’re not alone. Someone out here truly believes in you.\n\nI hope you’re taking care of yourself. The world still needs your light.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
