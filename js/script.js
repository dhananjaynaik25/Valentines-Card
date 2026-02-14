document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.getElementById("envelope");
    const message  = document.getElementById("message");
    const typewriter = document.getElementById("typewriter");

    let opened = false;

    envelope.addEventListener("click", () => {
        if (opened) return;
        opened = true;

        // Open the envelope
        envelope.classList.add("open");

        setTimeout(() => {
            // Reveal message
            message.classList.remove("hidden");
            message.classList.add("visible");

            // Start typewriter text
            animateText();

            // Start floating hearts
            startHearts();
        }, 600);
    });

    const fullText = 
`Happy Valentine's Day, My Dearest Jahanvi ❤️

Two beautiful years together — forever to go…

Every moment with you is magic.
You are my peace, my joy, my home.

Forever yours,
Dhananjay 💕`;

    function animateText() {
        let index = 0;
        function type() {
            if (index < fullText.length) {
                typewriter.textContent += fullText.charAt(index);
                index++;
                setTimeout(type, 40);
            }
        }
        type();
    }

    function startHearts() {
        const heartsBg = document.getElementById("hearts");
        function createHeart() {
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.textContent = ["❤️","💖","💕","💘","💝"][Math.floor(Math.random()*5)];
            heart.style.left = Math.random() * 100 + "%";
            heart.style.animationDuration = (Math.random()*4 + 3) + "s";
            heartsBg.appendChild(heart);
            setTimeout(() => heart.remove(), 7000);
        }
        setInterval(createHeart, 400);
    }

});