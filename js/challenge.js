//Timer////////////////////////////////////////////////////
let counter = document.querySelector("#counter")
let numCounter = parseInt(counter.innerHTML)
let interval = setInterval(function(){
            counter.innerText = numCounter++
            }, 1000);

//Minus Button////////////////////////////////////////////////////
let minus = document.querySelector('#minus')
minus.addEventListener('click', function(){
    counter.innerText = numCounter--
})
minus.disabled = false

//Plus Button////////////////////////////////////////////////////
let plus = document.querySelector('#plus')
plus.addEventListener('click', function(){
    counter.innerText = numCounter++
})
plus.disabled = false

// if li class is equal to number counter, then no append but increment likes by clicks
// if class is not the same we want to append a new list, and reset number of likes
//

//Like Button////////////////////////////////////////////////////////////
let heart = document.querySelector('#heart')
let numLikes = 0
let obj = {}
let li = document.createElement('li')

heart.addEventListener('click', function(){

obj[numCounter] ? obj[numCounter]+=1 : obj[numCounter]=1

li.innerHTML = `${counter.innerText} is liked ${obj[numCounter]} time!`;
    
document.querySelector('.likes').append(li)

    // obj[numCounter] ? obj[numCounter]+=1 : obj[numCounter]=1
    // let li = document.createElement('li')
    // li.className = `${counter.innerText}`
    // li.innerHTML = `${counter.innerText} is liked ${obj[numCounter]} time!`

    
    // document.querySelector('.likes').append(li)
})
heart.disabled = false




//Pause Button/////////////////////////////////////////////////////////////////////////////
let pause = document.querySelector('#pause')
pause.addEventListener('click', function(){

    minus.disabled = !minus.disabled
    plus.disabled = !plus.disabled 
    heart.disabled = !heart.disabled
    restart.disabled = !restart.disabled
    restart.hidden = !restart.hidden

        if(pause.innerText === 'pause'){
            clearInterval(interval)
            pause.innerHTML = 'resume'
        }else if(pause.innerText === 'resume'){
            interval = setInterval(function(){
                counter.innerText = numCounter++
                }, 1000);
            pause.innerHTML = 'pause'
        }

})

//Restart Button////////////////////////////////////////////////////
let restart = document.querySelector('#restart')
restart.addEventListener('click', function(){
    counter.innerText = 0
    numCounter = 0
})
restart.disabled = true
restart.hidden = true

//Comment Box////////////////////////////////////////////////////
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addComment(e.target.comment_input.value)
    form.reset()
})
function addComment(comment){
    let p = document.createElement('p')
    p.textContent = `${comment} `
    document.querySelector('#list').appendChild(p)
}