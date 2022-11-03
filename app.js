
function contact(event){
    event.preventDefault()
    const loading= document.querySelector('.modal-loading')
    const sent = document.querySelector('.modal-sent')
    loading.classList.add("visable")

    emailjs
        .sendForm(
            'service_fidtsqr',
            'template_ydhmglg',
            event.target,
            'BXG7G7ynHt0ghIQFn'
        ).then(() => {
            loading.classList.remove("visable")
            sent.classList.add("visable")
        }).catch(() =>{
            loading.classList.remove("visable")
            alert("email is temporarily anavailable. Please contact me on Dildeepgill@hotmail.com")
        })
}


function toggle(){
    const modal = document.querySelector('.modal')   
    modal.classList.toggle("open")
}


function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x= event.clientX / 40
    const y= event.clientY / 40

    for(let i = 0; i<shapes.length; i++ ){
        const isOdd = i %2 !==0;
        const oddInteger= isOdd? -1: 1;
        shapes[i].style.transform=`translate(${x * oddInteger}px, ${y * oddInteger}px)`         
        
    }
}


