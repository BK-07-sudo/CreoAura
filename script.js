function changeLanguage() {
    let language = document.getElementById("language-selector").value;

    if (language === "ta") {
        document.getElementById("hero-title").innerText = "CreoAura: உங்கள் கனவு, எங்கள் உருவாக்கம்.";
        document.getElementById("hero-text").innerText = 
            "உங்கள் பிராண்டை உருவாக்குவதற்கான சிறந்த ஃப்ரீலான்சிங், வீடியோ எடிட்டிங், லோகோ வடிவமைப்பு, சாட்போட் உருவாக்கம் மற்றும் டிஜிட்டல் மார்க்கெட்டிங் தீர்வுகள்.";
        document.getElementById("hero-welcome").innerText= "CreoAuraக்கு வருக, இங்கே உங்கள் பார்வையை உயிர்ப்பிக்க முடியும்."
        document.getElementById("contact-us").innerText = "தொடர்பு கொள்ளுங்கள்";
        document.querySelector(".services h2").innerText = "எங்கள் சேவைகள்"
    } else {
        document.getElementById("hero-title").innerText = "CreoAura: Your Vision, Our Creation.";
        document.getElementById("hero-text").innerText = 
            "Powering your brand with expert Freelancing, Video Editing, Logo Design, Chatbot Creation, and comprehensive Digital Marketing solutions.";
        document.getElementById("contact-us").innerText = "Contact Us";
    }
}
function showDescription(service, event) {
    const descriptions = {
        'Freelancing': {
            en: 'Expert freelancers ready to bring your projects to life.\nWe offer a wide range of skills, from writing to graphic design, ensuring your project is in capable hands.',
            ta: 'உங்கள் திட்டங்களை உயிர்ப்பிக்க தயாரான நிபுண ஃப்ரீலான்சர்கள்.\nஎங்கள் சேவைகள் எழுத்து, கிராஃபிக் வடிவமைப்பு போன்ற பல திறன்களை உள்ளடக்கியது, உங்கள் திட்டம் திறமையான கைகளில் உள்ளது.'
        },
        'Logo Design': {
            en: 'Creative logo designs that represent your brand identity.\nOur team works closely with you to create a logo that captures the essence of your business.',
            ta: 'உங்கள் பிராண்ட் அடையாளத்தை பிரதிபலிக்கும் படைப்பாற்றல் லோகோ வடிவமைப்புகள்.\nஎங்கள் குழு உங்கள் வணிகத்தின் அடிப்படையைப் பிடிக்கும் லோகோ உருவாக்குவதற்காக உங்களுடன் நெருக்கமாக வேலை செய்கிறது.'
        },
        'Chatbot Creation': {
            en: 'Intelligent chatbots to enhance customer interaction.\nWe develop chatbots that provide instant responses and improve user engagement.',
            ta: 'வாடிக்கையாளர் தொடர்பை மேம்படுத்த நுண்ணறிவு சாட்போட்டுகள்.\nநாங்கள் உடனடி பதில்களை வழங்கும் மற்றும் பயனர் ஈடுபாட்டை மேம்படுத்தும் சாட்போட்டுகளை உருவாக்குகிறோம்.'
        },
        'Video Editing': {
            en: 'Professional video editing services for stunning visuals.\nOur editors are skilled in creating captivating videos that tell your story effectively.',
            ta: 'அழகான காட்சிகளுக்கான தொழில்முறை வீடியோ எடிட்டிங் சேவைகள்.\nஎங்கள் எடிட்டர்கள் உங்கள் கதையை திறமையாகச் சொல்லும் கவர்ச்சிகரமான வீடியோக்களை உருவாக்குவதில் திறமையானவர்கள்.'
        },
        'Digital Marketing': {
            en: 'Comprehensive digital marketing strategies for growth.\nWe tailor our marketing strategies to meet your specific business needs and goals.',
            ta: 'வளர்ச்சிக்கான முழுமையான டிஜிட்டல் மார்க்கெட்டிங் உத்திகள்.\nஉங்கள் குறிப்பிட்ட வணிக தேவைகள் மற்றும் இலக்குகளை பூர்த்தி செய்ய எங்கள் மார்க்கெட்டிங் உத்திகளை தனிப்பயனாக்குகிறோம்.'
        }
    };

    const language = document.getElementById("language-selector").value;
    const descriptionBox = document.getElementById('floating-description');
    descriptionBox.innerText = descriptions[service][language];
    descriptionBox.style.display = 'block';

    // Calculate position based on the button hovered
    const buttonRect = event.target.getBoundingClientRect();
    const boxWidth = descriptionBox.offsetWidth;
    const boxHeight = descriptionBox.offsetHeight;

    // Positioning logic
    if (service === 'Freelancing') {
        // Position to the left of the button
        descriptionBox.style.top = buttonRect.top + window.scrollY + 'px';
        descriptionBox.style.left = buttonRect.left - boxWidth + 'px';
    } else if (service === 'Logo Design') {
        // Position below the button
        descriptionBox.style.top = buttonRect.bottom + window.scrollY + 'px';
        descriptionBox.style.left = buttonRect.left + 'px';
    } else if (service === 'Chatbot Creation') {
        // Position below the button
        descriptionBox.style.top = buttonRect.bottom + window.scrollY + 'px';
        descriptionBox.style.left = buttonRect.left + 'px';
    } else if (service === 'Video Editing') {
        // Position below the button
        descriptionBox.style.top = buttonRect.bottom + window.scrollY + 'px';
        descriptionBox.style.left = buttonRect.left + 'px';
    } else if (service === 'Digital Marketing') {
        // Position to the right of the button
        descriptionBox.style.top = buttonRect.top + window.scrollY + 'px';
        descriptionBox.style.left = buttonRect.right + 'px';
    }
}// Add event listeners for social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        window.location.href = this.href; // Redirect to the link's URL
    });
});