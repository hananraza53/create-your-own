// Common logic for the Card Editor

const state = {
    heading: "Graduation Card",
    description: "Join us for a celebration of achievement!",
    bgColor: "#ffffff",
    textColor: "#1f2937",
    bgImage: "",
    border: "2px solid #e5e7eb",
    borderRadius: "16px",
    cardWidth: "100%",
    cardHeight: "auto",
    fontFamily: "'Playfair Display', serif",
    fontSize: "16px",
    headingSize: "32px",
    headingMargin: "0 0 16px 0",
    descriptionMargin: "0"
};

function updatePreview() {
    const card = document.getElementById('customDiv');
    const heading = document.getElementById('cardHeading');
    const description = document.getElementById('cardDescription');

    if (!card || !heading || !description) return;

    // Apply styles to card
    card.style.backgroundColor = state.bgColor;
    card.style.color = state.textColor;
    card.style.backgroundImage = state.bgImage ? `url(${state.bgImage})` : 'none';
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
    card.style.border = state.border;
    card.style.borderRadius = state.borderRadius;
    card.style.width = state.cardWidth;
    card.style.minHeight = state.cardHeight;
    card.style.fontFamily = state.fontFamily;
    card.style.fontSize = state.fontSize;

    // Apply styles to heading
    heading.innerText = state.heading;
    heading.style.fontSize = state.headingSize;
    heading.style.margin = state.headingMargin;

    // Apply styles to description
    description.innerText = state.description;
    description.style.margin = state.descriptionMargin;
}

// Event Listeners for Inputs
function initEventListeners() {
    const inputs = {
        'headingText': 'heading',
        'descriptionText': 'description',
        'bgColor': 'bgColor',
        'textColor': 'textColor',
        'bgImage': 'bgImage',
        'border': 'border',
        'borderRadius': 'borderRadius',
        'cardWidth': 'cardWidth',
        'cardHeight': 'cardHeight',
        'fontFamily': 'fontFamily',
        'headingSize': 'headingSize',
        'fontSize': 'fontSize',
        'headingMargin': 'headingMargin',
        'descriptionMargin': 'descriptionMargin'
    };

    Object.entries(inputs).forEach(([id, stateKey]) => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', (e) => {
                state[stateKey] = e.target.value;
                updatePreview();
            });
            // Set initial value from state
            el.value = state[stateKey];
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-sun');
                icon.classList.toggle('fa-moon');
            }
        });
    }
}

// Download functionality
function downloadCard(format) {
    const card = document.getElementById('customDiv');
    const btn = document.activeElement;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Generating...';
    btn.disabled = true;

    html2canvas(card, {
        useCORS: true,
        scale: 2, // Higher quality
        backgroundColor: null,
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL(`image/${format}`, 1.0);
        link.download = `my_card.${format}`;
        link.click();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }).catch(err => {
        console.error("Error during download:", err);
        alert("Error generating image. Try reducing card size or removing external images.");
        btn.innerHTML = originalText;
        btn.disabled = false;
    });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    // Set initial state from page if needed (e.g. graduation vs wedding)
    const pageType = document.title.split(' ')[0];
    if (pageType === 'Wedding') {
        state.heading = "Wedding Invitation";
        state.description = "Celebrate our special day with us!";
    } else if (pageType === 'Invitation') {
        state.heading = "You're Invited!";
        state.description = "Join us for an unforgettable event.";
    }

    initEventListeners();
    updatePreview();
});
