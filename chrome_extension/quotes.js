const quotes = ['Be yourself; everyone else is already taken.',
'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
'So many books, so little time.',
'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
'You only live once, but if you do it right, once is enough.',
'Be the change that you wish to see in the world.',
'If you tell the truth, you don\'t have to remember anything.',
'A friend is someone who knows all about you and still loves you.',
'To live is the rarest thing in the world. Most people exist, that is all.',
'Always forgive your enemies; nothing annoys them so much'
]
document.querySelector('button').addEventListener('click' , ()=>{
    document.querySelector('h1').textContent = quotes[Math.floor(Math.random()*quotes.length)]
})