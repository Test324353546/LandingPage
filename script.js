// JavaScript for character modal interaction
document.addEventListener("DOMContentLoaded", () => {
    const characterCards = document.querySelectorAll(".character-card");
    // Character data
    const characters = {
        hades: {
            name: "Hades",
            description: "The King of the Underworld, trapped between his duty and his love for Persephone."
        },
        persephone: {
            name: "Persephone",
            description: "The goddess of spring, torn between her innocence and her dark side."
        }
    };

        
    // Add event listeners to character cards
    characterCards.forEach(card => {
        card.addEventListener("click", () => {
            const characterKey = card.classList[1]; // Get character class (hades or persephone)
            openModal(characterKey);
        });
    });

    
});
// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
function handleKeyPress(event, character) {
    if (event.key === "Enter" || event.key === " ") {
        showCharacterDetails(character);
    }
}

function showCharacterDetails(character) {
    // Example function to handle character detail display
    alert(character + " details are displayed");
    // You can add code to display/hide character details
}

function toggleContent() {
    const moreContent = document.getElementById('moreContent');
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Check the current display style of the additional content
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        toggleBtn.textContent = 'Show Less'; // Change button text
    } else {
        moreContent.style.display = 'none';
        toggleBtn.textContent = 'Show More'; // Change button text back
    }
}

