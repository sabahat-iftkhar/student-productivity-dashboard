// ===== Task Completion Logic =====
const doneBtn = document.getElementById('doneBtn');
const completed = document.getElementById('completed');
const progressFill = document.querySelector('.progress-fill');

doneBtn.addEventListener('click', () => {
  let current = parseInt(completed.textContent);

  if (current < 3) {
    current++;
    completed.textContent = current;
    progressFill.style.width = (current / 3) * 100 + '%';
    alert("Good job! Task completed!");
  } else {
    alert("All tasks are already completed!");
  }
});

// ===== Motivation Quotes =====
const newQuoteBtn = document.getElementById('newQuoteBtn');
const quote = document.getElementById('quote');

const quotes = [
  "The secret to getting ahead is getting started.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big. Work hard. Stay focused.",
  "Small progress each day adds up to big results."
];

newQuoteBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
});

// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
