// return a random insult. If name is given, add name in front too.
function getInsult(name) {

  var myArray = [
    "At least when I do a handstand my stomach does not hit me in the face.",
    "How many times do I need to flush to get rid of you?",
    "I bet your brain feels as good as new, seeing that you never use it.",
    "I could eat a bowl of alphabet soup and shit out a smarter statement than that.",
    "I do not exactly hate you, but if you were on fire and I had water, I would drink it.",
    "I am not saying I hate you, but I would unplug your life support to charge my phone.",
    "If I wanted to kill myself I would climb your ego and jump to your IQ.",
    "If I were to slap you, it would be considered animal abuse!",
    "If laughter is the best medicine, your face must be curing the world.",
    "If you are going to be two faced, at least make one of them pretty.",
    "It looks like your face caught on fire and someone tried to put it out with a hammer.",
    "It is better to let someone think you are an idiot than to open your mouth and prove it.",
    "Maybe if you ate some of that makeup you could be pretty on the inside.",
    "Roses are red violets are blue, God made me pretty, what happened to you?",
    "Shut up, you will never be the man your mother is.",
    "Somewhere out there is a tree, tirelessly producing oxygen so you can breathe. I think you owe it an apology.",
    "The last time I saw a face like yours I fed it a banana.",
    "You are so ugly, when your mom dropped you off at school she got a fine for littering.",
    "You should not play hide and seek, no one would look for you.",
    "Your family tree must be a cactus because everybody on it is a prick."
    ]

    var message = myArray[Math.floor(Math.random() * myArray.length)];
    if (name) message = name + ', ' + message;
    return message;
}

module.exports = getInsult
