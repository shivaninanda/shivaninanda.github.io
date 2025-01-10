document.addEventListener('DOMContentLoaded', function() {
    const words = [
        'data analyst',
        'technology consultant',
        'AI enthusiast',
        'robotics enthusiast',
        'web developer',
        'data scientist',
        'business intelligence analyst'
    ];
    let index = 0;
    const dynamicTextElement = document.getElementById('dynamic-text');

    function changeWord() {
        dynamicTextElement.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 1000);
    changeWord(); // Initial call to set the first word
});

function updateDateTime() {
    const currentDayElement = document.getElementById('current-day');
    const currentTimeElement = document.getElementById('current-time');
    const currentTimeZoneElement = document.getElementById('current-timezone');

    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const time = `${hours % 12 || 12}:${minutes} ${ampm}`;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    currentDayElement.textContent = day;
    currentTimeElement.textContent = time;
    currentTimeZoneElement.textContent = timeZone;
}

updateDateTime();
setInterval(updateDateTime, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const body = document.body;

    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Light Mode';
            document.querySelector('.logto img').src = 'SN-whitetext.png';
        } else {
            themeToggleButton.textContent = 'Dark Mode';
            document.querySelector('.logo img').src = 'SN-whitetext.png';
        }
    });
});

