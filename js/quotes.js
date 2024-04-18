const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated",
        author: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
        author:  "Nelson Mandela",
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;