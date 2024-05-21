// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you a bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what do you call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me a story", "tell me a joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"]
];

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy!"],
  ["I'm doing great, how about you?", "Pretty good, how are you?", "Fantastic, how are things with you?"],
  ["Not much, you?", "Just chatting with you", "Hanging out, you?"],
  ["Age is just a number, and I'm timeless!"],
  ["I'm an AI assistant", "I'm a bot, what about you?"],
  ["I was created by OpenAI", "My creators are the brilliant minds at OpenAI"],
  ["I don't have a name, but you can call me ChatGPT", "I go by ChatGPT, nice to meet you!"],
  ["I love you too!", "Aww, love you too!"],
  ["That's great to hear!", "Awesome!"],
  ["Why do you feel that way?", "I'm here to help, what's wrong?", "Try doing something you enjoy!"],
  ["Sure, what do you need help with?", "Once upon a time...", "Why did the scarecrow win an award? Because he was outstanding in his field!"],
  ["Interesting!", "Got it", "Cool!"],
  ["Goodbye!", "See you later!", "Take care!"],
  ["How about some sushi?", "Pizza is always a good choice!"],
  ["Bro! What's up?"],
  ["Can you be more specific?", "Let's figure this out together"],
  ["That's okay", "I understand", "What would you like to discuss?"],
  ["Please say something :("],
  ["Haha! That's funny!", "Good one!"]
];

// Random for any other user input

const alternative = [
  "I'm not sure I understand",
  "Could you rephrase that?",
  "Tell me more...",
  "Let's try something else",
  "I'm here to listen",
  "I didn't catch that"
];

// Whatever else you want :)

const coronavirus = ["Remember to stay safe!", "Wear a mask in crowded places", "Fortunately, I can't catch viruses!", "Stay informed and healthy!"];
