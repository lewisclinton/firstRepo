//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Nelson Mandela', 
     'quote': 'It always seems impossible until it is done',
     'year': '1994'

    },
    {'author': 'Maya Angelou', 
     'quote': 'You will face many defeats in life, but never let yourself be defeated',
     'year': '1995'
    },
    {'author': 'Walt Disney', 
     'quote': 'All our dreams can come true if we have the courage to pursue them.',
     'year': '1957'
    },
    {'author': 'Albert Einstein', 
     'quote': 'Strive not to be a success, but rather to be of value.',
     'year': '1931'
    },
    {'author': 'Steve Jobs', 
     'quote': 'Your time is limited, so do not waste it living someone else’s life.',
     'year': '2005'
    },
    {'author': 'Hellen Keller', 
     'quote': 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence',
     'year': '1920'
    },
    {'author': 'Eleanor Roosevelt', 
     'quote': 'The future belongs to those who believe in the beauty of their dreams.',
     'year': '1960'
    },
    {'author': 'Zig Ziglar', 
     'quote': 'You don’t have to be great to start, but you have to start to be great',
     'year': '1975'
    },
    {'author': 'Tony Robins', 
     'quote': 'The only limit to your impact is your imagination and commitment.',
     'year': '1991'
    },
];

function generateQuote(){
    // const randomIndex = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    const randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[randomIndex].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrayOfQuotes[randomIndex].author}`;
    document.querySelector('#yearOutput').textContent = `${arrayOfQuotes[randomIndex].year}`;
    
}