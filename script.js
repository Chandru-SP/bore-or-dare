const dares = [
    "Sing 'Happy Birthday' to a random stranger.",
    "Do your best impression of a famous celebrity.",
    "Speak in an accent for the next 10 minutes.",
    "Dance like nobody's watching for a full song.",
    "Take a shot of a hot sauce.",
    "Try to juggle three objects for one minute.",
    "Put on a blindfold and try to draw a picture of a cat.",
    "Call a friend and have a conversation in song lyrics.",
    "Eat a spoonful of cinnamon.",
    "Do a handstand for as long as you can.",
    "Recite the alphabet backward as fast as you can.",
    "Send a text to your crush and tell them you like them.",
    "Give a 2-minute stand-up comedy routine.",
    "Take a bite out of a lemon.",
    "Let someone give you a new hairstyle.",
    "Walk around with a 'Kick Me' sign on your back.",
    "Talk in a British accent for the next 10 minutes.",
    "Share an embarrassing childhood story.",
    "Drink a glass of water while standing on one foot.",
    "Text your parents and tell them you're pregnant (then reveal it's a dare).",
    "Put an ice cube down your pants and keep it there for one minute.",
    "Wear socks on your hands for the next three rounds.",
    "Eat a spoonful of mustard.",
    "Call a friend and sing 'Twinkle, Twinkle, Little Star.'",
    "Pretend you're a cat and meow at everyone for the next 10 minutes.",
    "Take a selfie with a funny face and post it on social media.",
    "Do the chicken dance for one full minute.",
    "Put on lipstick without using a mirror.",
    "Speak in a whisper for the next three rounds.",
    "Wear your clothes inside out for the rest of the game.",
    "Put an ice cube in your pants and leave it there until it melts.",
    "Call a random number and sing 'Happy Birthday' to whoever answers.",
    "Eat a spoonful of ketchup.",
    "Balance a spoon on your nose for one minute.",
    "Put an ice cube in your shoe and keep it there until it melts.",
    "Tell a joke without laughing, no matter how bad it is.",
    "Try to lick your elbow.",
    "Go outside and howl at the moon.",
    "Let someone draw a mustache on your face.",
    "Wear a paper bag over your head for the next five rounds.",
    "Act like a news anchor and report on a made-up breaking news story.",
    "Give someone in the room a foot massage.",
    "Call a pet store and ask if they sell unicorns.",
    "Pretend to be a superhero and create your own superhero name and catchphrase.",
    "Try to do the moonwalk like Michael Jackson.",
    "Call a friend and tell them you're moving to Antarctica (then reveal it's a dare).",
    "Sing a song in a foreign language.",
    "Act like a mime for the next three rounds.",
    "Put an ice cube down your shirt and leave it there until it melts.",
    "Tell a funny knock-knock joke.",
    "Draw a mustache on your face without a mirror.",
    "Eat a spoonful of mayonnaise.",
    "Make up a short rap about a random object in the room.",
    "Call a random number and have a 2-minute conversation with them.",
    "Speak in third person for the next 10 minutes.",
    "Do a hand puppet show for the group.",
    "Put on a funny hat and wear it for the next three rounds.",
    "Act like a telemarketer and try to sell a random object in the room.",
    "Take a bite out of a raw onion.",
    "Dance the Macarena.",
    "Call a friend and tell them you're quitting your job to become a professional pogo stick rider.",
    "Tell a cheesy pick-up line to a stranger.",
    "Do a cartwheel or attempt one.",
    "Put an ice cube in your mouth and let it melt without chewing.",
    "Call a random number and sing 'Twinkle, Twinkle, Little Star' to the person who answers.",
    "Wear a pair of underwear on your head for the next five rounds.",
    "Pretend you're a salesperson and try to sell a random item to the group.",
    "Do 20 jumping jacks right now.",
    "Give someone a high-five while shouting 'High-five!'",
    "Call a random number and tell them you're their long-lost cousin.",
    "Sing 'Bohemian Rhapsody' by Queen.",
    "Speak with an exaggerated French accent for the next 10 minutes.",
    "Act like a mime for the next five rounds.",
    "Put an ice cube in your shirt and leave it there until it melts.",
    "Tell a joke without smiling, no matter how funny it is.",
    "Call a friend and have a conversation in a pirate accent.",
    "Wear a towel as a cape and be a 'towel superhero' for the next three rounds.",
    "Make up a short commercial for a made-up product.",
    "Pretend you're a stand-up comedian and tell a joke.",
    "Do the robot dance.",
    "Call a random number and tell them you're moving to the moon (then reveal it's a dare).",
    "Speak in a whisper for the next five rounds.",
    "Put on a blindfold and try to touch your nose with your tongue.",
    "Draw a picture of a dog blindfolded.",
    "Sing 'I Will Survive' by Gloria Gaynor.",
    "Give someone a 5-minute shoulder massage.",
    "Eat a spoonful of hot sauce.",
    "Call a friend and tell them you've become a professional mime.",
    "Act like a cat for one minute.",
    "Take a selfie and post it with a funny caption on social media.",
    "Put an ice cube down your shirt and leave it there until it melts.",
    "Tell a story using only three words at a time.",
    "Call a random number and ask if they've seen your pet unicorn.",
    "Speak with an Irish accent for the next 10 minutes.",
    "Act like a robot for the next five rounds.",
    "Put an ice cube in your shoe and keep it there until it melts.",
    "Do a handstand against a wall.",
    "Call a friend and tell them you've won the lottery (then reveal it's a dare).",
    "Tell a funny joke without laughing.",
    "Wear a sock puppet on your hand for the next three rounds.",
    "Pretend to be a superhero and explain your superpowers.",
    "Put an ice cube in your mouth and let it melt without chewing.",
    "Call a random number and ask if they've seen your lost spaceship.",
    "Sing 'Can't Stop the Feeling' by Justin Timberlake.",
    "Speak with a Russian accent for the next 10 minutes.",
    "Act like a mime for the next 10 minutes.",
    "Put an ice cube down your pants and leave"];


var apiUrl='https://www.boredapi.com/api/activity';

const Element=document.getElementById("content");
const Button=document.getElementById("btn");
const Button1=document.getElementById("btn-dare");
const dareContainer = document.getElementById('dareContainer');

Button.addEventListener('click',function(){
    Element.classList.toggle("animate")
    loadApi(Element)
})

function getRandomDare() {
    const randomIndex = Math.floor(Math.random() * dares.length);
    const randomDare = dares[randomIndex];
    dareContainer.textContent = randomDare;
}

Button1.addEventListener('click',function(){
    console.log("calling")
     Element.style.display='none';
     dareContainer.style.display='flex';
     getRandomDare();
     
    });
    
    function loadApi(holder){
        fetch(apiUrl)
        .then(response=>{
            var x=response.json();
            console.log(x)
            return x;
        })
        .then(data=>{
            console.log(`You should do ${data.activity}`);
            var content=data.activity
            dareContainer.style.display='none';
            Element.style.display='flex';
    holder.textContent=`"${content}"`;


})
.catch(err=>{
    console.log("There was an error", err);
})

}
