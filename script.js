const calendar = document.getElementById("calendar");
const moodPopup = document.getElementById("moodPopup");
let selectedDay = null;

// Generate calendar for July 2025
for (let i = 1; i <= 31; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.innerHTML = `<span>${i}</span>`;
  day.setAttribute("data-date", `2025-07-${String(i).padStart(2, '0')}`);
  day.addEventListener("click", () => openPopup(day));
  calendar.appendChild(day);
}

// Open popup on day click
function openPopup(day) {
  selectedDay = day;
  moodPopup.style.display = "block";
}

// Handle mood selection
document.querySelectorAll(".mood").forEach(moodBtn => {
  moodBtn.addEventListener("click", () => {
    const mood = moodBtn.getAttribute("data-mood");
    selectedDay.setAttribute("data-mood", mood);
    moodPopup.style.display = "none";

    // Optional: Save to localStorage
    const date = selectedDay.getAttribute("data-date");
    localStorage.setItem(date, mood);
  });
});

// Restore saved moods
window.onload = () => {
  for (let i = 1; i <= 31; i++) {
    const date = `2025-07-${String(i).padStart(2, '0')}`;
    const mood = localStorage.getItem(date);
    if (mood) {
      const day = document.querySelector(`.day[data-date='${date}']`);
      if (day) {
        day.setAttribute("data-mood", mood);
      }
    }
  }
};
