const quotes = [
  { quote: "The purpose of our lives is to be happy.", author: "- Dalai Lama" },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    author: "- John Lennon",
  },
  { quote: "Get busy living or get busy dying.", author: "- Stephen King" },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West",
  },
  {
    quote:
      "In three words I can sum up everything I’ve learned about life: it goes on.",
    author: "- Robert Frost",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "- Oscar Wilde",
  },
  { quote: "Happiness depends upon ourselves.", author: "- Aristotle" },
  { quote: "Turn your wounds into wisdom.", author: "- Oprah Winfrey" },
  { quote: "The best way out is always through.", author: "- Robert Frost" },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "- Theodore Roosevelt",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "- Buddha",
  },
  {
    quote: "It’s never too late to be what you might have been.",
    author: "- George Eliot",
  },
  { quote: "Everything you can imagine is real.", author: "- Pablo Picasso" },
  { quote: "Dream big and dare to fail.", author: "- Norman Vaughan" },
  { quote: "What we think, we become.", author: "- Buddha" },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    author: "- Milton Berle",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "- Albert Einstein",
  },
  {
    quote:
      "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "- Anonymous",
  },
  {
    quote: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "- Anonymous",
  },
  {
    quote: "Everything has beauty, but not everyone sees it.",
    author: "- Confucius",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "- Mark Twain",
  },
  {
    quote: "Success is not final; failure is not fatal.",
    author: "- Winston Churchill",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "- William James",
  },
  {
    quote: "With the new day comes new strength and new thoughts.",
    author: "- Eleanor Roosevelt",
  },
  {
    quote: "It always seems impossible until it is done.",
    author: "- Nelson Mandela",
  },
  { quote: "Quality is not an act, it is a habit.", author: "- Aristotle" },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "- Eleanor Roosevelt",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "- Albert Einstein",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "- Theodore Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "- Franklin D. Roosevelt",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become.",
    author: "- Zig Ziglar",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "- Walt Whitman",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "- Lao Tzu",
  },
  {
    quote: "Well done is better than well said.",
    author: "- Benjamin Franklin",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "- Wayne Gretzky",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "- Albert Einstein",
  },
  {
    quote: "Whether you think you can or think you can’t, you’re right.",
    author: "- Henry Ford",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "- Booker T. Washington",
  },
  {
    quote: "Don’t wait. The time will never be just right.",
    author: "- Napoleon Hill",
  },
  {
    quote: "Try to be a rainbow in someone’s cloud.",
    author: "- Maya Angelou",
  },
  {
    quote: "Do something today that your future self will thank you for.",
    author: "- Anonymous",
  },
  {
    quote: "A champion is defined not by their wins but by how they recover.",
    author: "- Serena Williams",
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "- Will Rogers",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "- Confucius",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "- George Addair",
  },
  {
    quote: "Success doesn’t come to you, you go to it.",
    author: "- Marva Collins",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "- Ralph Waldo Emerson",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "- Helen Keller",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "- Steve Jobs",
  },
  {
    quote:
      "Don’t quit. Suffer now and live the rest of your life as a champion.",
    author: "- Muhammad Ali",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "- Oscar Wilde",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "- Winston Churchill",
  },
  { quote: "The best revenge is massive success.", author: "- Frank Sinatra" },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "- Chris Grosser",
  },
  {
    quote: "Your time is limited, don’t waste it living someone else’s life.",
    author: "- Steve Jobs",
  },
  { quote: "If you can dream it, you can achieve it.", author: "- Zig Ziglar" },
  {
    quote: "Be the change you wish to see in the world.",
    author: "- Mahatma Gandhi",
  },
  {
    quote: "Don’t count the days, make the days count.",
    author: "- Muhammad Ali",
  },
  { quote: "Be a voice, not an echo.", author: "- Albert Einstein" },
  {
    quote: "If you’re going through hell, keep going.",
    author: "- Winston Churchill",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "- C.S. Lewis",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "- Abraham Lincoln",
  },
  { quote: "Do what is right, not what is easy.", author: "- Roy T. Bennett" },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "- Arthur Ashe",
  },
  {
    quote: "What consumes your mind controls your life.",
    author: "- Anonymous",
  },
  { quote: "Courage is one step ahead of fear.", author: "- Coleman Young" },
  { quote: "Make each day your masterpiece.", author: "- John Wooden" },
  {
    quote: "Once you choose hope, anything’s possible.",
    author: "- Christopher Reeve",
  },
  {
    quote: "Don’t wish it were easier, wish you were better.",
    author: "- Jim Rohn",
  },
  { quote: "We become what we think about.", author: "- Earl Nightingale" },
  {
    quote: "The biggest risk is not taking any risk.",
    author: "- Mark Zuckerberg",
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "- Suzy Kassem",
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "- Anonymous",
  },
  {
    quote: "Success is a journey, not a destination.",
    author: "- Arthur Ashe",
  },
  {
    quote: "Great things never come from comfort zones.",
    author: "- Anonymous",
  },
  {
    quote: "The key to success is to focus on goals, not obstacles.",
    author: "- Anonymous",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "- John D. Rockefeller",
  },
  {
    quote: "Aim for the moon. If you miss, you may hit a star.",
    author: "- W. Clement Stone",
  },
  { quote: "You are stronger than you think.", author: "- Anonymous" },
  { quote: "Your only limit is your mind.", author: "- Anonymous" },
  { quote: "Wherever you go, go with all your heart.", author: "- Confucius" },
  {
    quote: "Light tomorrow with today.",
    author: "- Elizabeth Barrett Browning",
  },
  {
    quote: "Don’t let small minds convince you that your dreams are too big.",
    author: "- Anonymous",
  },
  {
    quote: "If you can imagine it, you can achieve it.",
    author: "- William Arthur Ward",
  },
  {
    quote: "Act as if it were impossible to fail.",
    author: "- Dorothea Brande",
  },
  {
    quote: "The best dreams happen when you’re awake.",
    author: "- Cherie Gilderbloom",
  },
  {
    quote: "Be fearless in pursuit of what sets your soul on fire.",
    author: "- Jennifer Lee",
  },
  { quote: "Don’t stop until you’re proud.", author: "- Anonymous" },
  { quote: "Little things make big days.", author: "- Anonymous" },
  {
    quote: "Success is the sum of small efforts repeated day in and day out.",
    author: "- Robert Collier",
  },
  {
    quote: "Difficult roads often lead to beautiful destinations.",
    author: "- Anonymous",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "- Nelson Mandela",
  },
  {
    quote: "Pain is temporary. Quitting lasts forever.",
    author: "- Lance Armstrong",
  },
  { quote: "The best is yet to come.", author: "- Anonymous" },
  {
    quote: "Don't compare your beginning to someone else's middle.",
    author: "- Jon Acuff",
  },
];

function generateQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("quote").textContent = randomQuote.quote;
  document.getElementById("author").textContent = randomQuote.author;
}

function copyQuote() {
  let quoteText = document.getElementById("quote").innerText;
  let authorText = document.getElementById("author").innerText;

  let finalText = `${quoteText} ${authorText}`;

  navigator.clipboard.writeText(finalText).then(() => {
    document.getElementById("copied-msg").innerText = "Copied to clipboard!";
    setTimeout(() => {
      document.getElementById("copied-msg").innerText = "";
    }, 1500);
  });
}
