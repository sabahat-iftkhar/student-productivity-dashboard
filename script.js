// Mark task as done
let doneBtn = document.getElementById('doneBtn');
let completed = document.getElementById('completed');
let progressFill = document.querySelector('.progress-fill');

doneBtn.addEventListener('click', function() {
    let current = parseInt(completed.textContent);
    if(current < 3) {
        completed.textContent = current + 1;
        let widthPercent = ((current + 1)/3) * 100;
        progressFill.style.width = widthPercent + '%';
        alert("Good job! Task completed!");
    } else {
        alert("All tasks are already completed!");
    }
});

// Change motivation quote
let newQuoteBtn = document.getElementById('newQuoteBtn');
let quote = document.getElementById('quote');

let quotes = [
    "The secret to getting ahead is getting started.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream big. Work hard. Stay focused.",
    "Small progress each day adds up to big results."
];

newQuoteBtn.addEventListener('click', function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
});
