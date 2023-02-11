"use strict";

const quotes = [
  {
    author: "Maya Angelou",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    author: "Abraham Lincoln",
    quote:
      "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
  },
  {
    author: "Thomas A. Edison",
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  },
  {
    author: "Barack Obama",
    quote:
      "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere",
  },
  {
    author: "Conrad Hilton",
    quote:
      "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
  },
  {
    author: "Jim Rohn",
    quote:
      "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
  },
  {
    author: "Colin R. Davis",
    quote:
      "The road to success and the road to failure are almost exactly the same.",
  },
  {
    author: "James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    author: "Winston Churchill",
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm",
  },
  {
    author: "Thomas J. Watson",
    quote:
      "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
  },
  {
    author: "Alexander Graham Bell",
    quote: "Before anything else, preparation is the key to success.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "The only person you are destined to become is the person you decide to be.",
  },
  {
    author: "Theodore Roosevelt",
    quote: "Believe you can and you're halfway there.",
  },
  {
    author: "Socrates",
    quote: "An unexamined life is not worth living.",
  },
  {
    author: "Beverly Sills",
    quote:
      "You may be disappointed if you fail, but you are doomed if you don't try.",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Florence Nightingale",
    quote: "I attribute my success to this: I never gave or took any excuse.",
  },
  {
    author: "Aristotle",
    quote:
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
  },
];

const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author-name");
const btnGenerate = document.querySelector(".btn");
const container = document.querySelector(".container");

btnGenerate.addEventListener("click", function () {
  let randNum = Math.trunc(Math.random() * 20);
  const { author, quote } = quotes[randNum];
  quoteEl.innerText = quote;
  authorEl.innerText = author;
});
