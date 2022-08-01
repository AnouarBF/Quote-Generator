const quote = document.getElementById('quote');
const person = document.getElementById('person');
const container = document.getElementById('quote-container');
const next = document.getElementById('next-quote');
const quotes = [
    {
        person: ' Mahatma Gandhi',
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever."
    },
    {
        person: 'Friedrich Nietzsche',
        quote: "That which does not kill us makes us stronger."
    },
    {
        person: 'Bernard M. Baruch',
        quote: "Be who you are and say what you feel, because those who mind don/’t matter and those who matter don/’t mind."
    },
    {
        person: 'Virginia Satir',
        quote: "We must not allow other people’s limited perceptions to define us."
    },
    {
        person: 'Theodore Roosevelt',
        quote: "Do what you can, with what you have, where you are."
    },
    {
        person: 'Oscar Wilde',
        quote: "Be yourself; everyone else is already taken."
    },
    {
        person: "William Shakespeare",
        quote: 'This above all: to thine own self be true.'
    },
    {
        quote: "If you cannot do great things, do small things in a great way.",
        person: 'Napoleon Hill'
    },
    {
        quote: "If opportunity doesn’t knock, build a door.",
        person: 'Milton Berle'
    },
    {
        quote: "Wise men speak because they have something to say; fools because they have to say something.",
        person: 'Plato',
    }, 
    {
        quote: "Strive not to be a success, but rather to be of value.",
        person: ' Albert Einstein'
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        person: ' Robert Frost'
    },
    {
        quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        person: 'Mark Twain'
    },
    {
        quote: "I haven’t failed. I’ve just found 10,000 ways that won’t work.",
        person: 'Thomas Edison'
    },
    {
        quote: "A journey of a thousand leagues begins beneath one’s feet.",
        person: 'Lao Tzu'
    },
    {
        quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        person: 'Maya Angelou'
    },
    {
        quote: "Either you run the day, or the day runs you.",
        person: 'Jim Rohn'
    },
    {
        quote: "Life shrinks or expands in proportion to one’s courage.",
        person: ' Anais Nin'
    },
    {
        quote: "You must be the change you wish to see in the world.",
        person: 'Mahatma Gandhi'
    },
    {
        quote: "What you do speaks so loudly that I cannot hear what you say.",
        person: 'Ralph Waldo Emerson'
    },
    {
        quote: "Believe and act as if it were impossible to fail.",
        person: ' Charles Kettering'
    },
    {
        quote: "The difference between ordinary and extraordinary is that little extra.",
        person: ' Jimmy Johnson'
    },
    {
        quote: "The best way to predict the future is to invent it.",
        person: 'Alan Kay'
    },
    {
        quote: "If I am not for myself, who is for me? And if I am only for myself, what am I? And if not now, when?",
        person: 'Rabbi Hillel'
    }
];

next.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})