// Array of quotes
const quotes = [
    {
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      author: "William James"
    }
  ];
  
  // Select elements
  const quoteText = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");
  const quoteBtn = document.getElementById("quote-btn");
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
  
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
  }
  
  // Event listener for button
  quoteBtn.addEventListener("click", generateQuote);
  