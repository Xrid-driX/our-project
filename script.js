document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Hello, I am Heldrix", "You can call me Drix", "Aspiring, Web developer"];
    const typewriterText = document.querySelector('.typewriter-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseBetweenTexts = 1000;

        if (!isDeleting && charIndex < currentText.length) {
            typewriterText.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseBetweenTexts);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
