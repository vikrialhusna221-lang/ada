let themeIndex = 0;
const themes = [
    'linear-gradient(135deg, #7A1300 0%, #34495e 100%)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    'linear-gradient(135deg, #1a472a 0%, #2d5a4d 100%)'
];

const darkThemes = [
    'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    'linear-gradient(135deg, #1a0d2e 0%, #2d1b4e 100%)',
    'linear-gradient(135deg, #0f1419 0%, #1a2332 100%)',
    'linear-gradient(135deg, #0d1f14 0%, #1a3d2a 100%)'
];

let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    body.style.background = isDarkMode ? darkThemes[themeIndex] : themes[themeIndex];
}

function toggleNavMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navMenu').classList.remove('show');
    }
}

function toggleDropdown() {
    document.getElementById('dropdownMenu').classList.toggle('show');
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdownMenu');
    const userIcon = document.querySelector('.user-icon');
    if (!dropdown.contains(event.target) && !userIcon.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

function openModal(title, message) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('infoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function toggleFooterMenu() {
    document.getElementById('footerMenu').classList.toggle('show');
}
