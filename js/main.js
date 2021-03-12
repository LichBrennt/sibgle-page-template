let navStatus = document.querySelectorAll('.nav-status>a')
let nav = document.querySelector('.nav-status')

navStatus.forEach(link =>{
    link.addEventListener('click', function(e){
        navStatus.forEach(status=>{
            status.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})

$(window).scroll(()=>{
    let onTop =$('#section-1').offset().top - window.innerHeight * 0.3
    let sec2 =$('#section-2').offset().top - window.innerHeight * 0.3
    let sec3 =$('#section-3').offset().top - window.innerHeight * 0.3
    $(window).scrollTop()>onTop?nav.classList.add('text-change'):nav.classList.remove('text-change')
})