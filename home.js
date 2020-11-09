const Items=document.querySelectorAll('.item-wrapper')

    Items.forEach(Item => {
        Item.addEventListener('mouseover', ()=>{
            Item.childNodes[1].classList.add('img-darken')
        })
        Item.addEventListener('mouseout', ()=>{
            Item.childNodes[1].classList.remove('img-darken')
        })
    } )