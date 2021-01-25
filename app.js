//button and h3 tag
const btn = document.querySelector('.talk')
const header = document.querySelector('.header')
const head = document.querySelector('.head')
const l1 = document.querySelector('#l1')
const l2 = document.querySelector('#l2')
const submit = document.querySelector('.submit')
const text = document.querySelector('.text')
const element = document.querySelector('.element')





//messages


//dark mode and white mode
const order1 = ['there you go sir','dark mode activated!']
const order2 = ['there you go sir','White mode activated']

//navigate
const nav1 = ['welcome to home'];
const nav2 = ['wanna know about us'];
const nav3 = ['please login first'];
const nav4 = ['you can contact us here'];
const nav5 = ['wanna know your profile'];


//speech recognition for chrome
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

//when we start talking
recognition.onstart = ()=>{
    console.log('Voice is activated! Speak up!')
}

//result when we stop taking
recognition.onresult = (event)=>{
  const current = event.resultIndex
  const transcript = event.results[current][0].transcript



  readOutLoud(transcript)//printing the message
}

//click event to start talking
btn.addEventListener('click',()=>{
    recognition.start()
})

//chrome speaking
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance()
   // default message
    speech.text = 'i dont know what you said'

    //other messages and commands 
 
     if(message.includes('dark mode')){
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'rgb(33,29,29)';
        l1.style.color = 'white';
        l2.style.color = 'white';
        head.style.color = 'white';
        header.style.border='5px solid white';
        submit.style.color='white';
        const change = order1[Math.floor(Math.random() * order1.length)]
        speech.text = change
    }

    if(message.includes('white mode')){
        document.body.style.backgroundImage = 'none';

        document.body.style.backgroundColor = 'white';
        l1.style.color = 'rgba(255,102,0)';
        l2.style.color = 'rgba(255,102,0)';
        head.style.color = 'rgba(255,102,0)';
        header.style.border='5px solid orange';
        submit.style.color='rgb(255, 102, 0)';
        document.querySelector('h1').style.color='black';
        const change = order2[Math.floor(Math.random() * order2.length)]
        speech.text = change
    }

    if(message.includes('home page')){
       
        window.location.assign('./home.html')

        const change = nav1[Math.floor(Math.random() * nav1.length)]
        speech.text = change
    }
    if(message.includes('about page')){
       
        window.location.assign('./about.html')

        const change = nav2[Math.floor(Math.random() * nav2.length)]
        speech.text = change
    }
    if(message.includes('index page')){
       
        window.location.assign('./index.html')

        const change = nav3[Math.floor(Math.random() * nav3.length)]
        speech.text = change
    }
    if(message.includes('contact page')){
       
        window.location.assign('./contact.html')

        const change = nav4[Math.floor(Math.random() * nav4.length)]
        speech.text = change
    }
    if(message.includes('profile page')){
       
        window.location.assign('./profile.html')

        const change = nav5[Math.floor(Math.random() * nav5.length)]
        speech.text = change
    }

   

    //volume , speed/rate, pitch
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    //to start speaking
    window.speechSynthesis.speak(speech)
}
