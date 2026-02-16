document.addEventListener('DOMContentLoaded', () => {

  // Task Completion
  const doneBtn = document.getElementById('doneBtn');
  const completed = document.getElementById('completed');
  const progressFill = document.querySelector('.progress-fill');
  let tasksDone = 0;
  const totalTasks = 3;

  doneBtn.addEventListener('click', () => {
    if (tasksDone < totalTasks) {
      tasksDone++;
      completed.textContent = tasksDone;
      progressFill.style.width = (tasksDone / totalTasks * 100) + '%';
      alert("Good job! Task completed!");
    } else {
      alert("All tasks already completed!");
    }
  });

  // Motivation Quotes
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

  // Dark Mode Toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

});
