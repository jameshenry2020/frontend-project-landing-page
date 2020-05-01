window.addEventListener('scroll', function(){
    var header=document.querySelector('header');
    
       header.classList.toggle('sticky', window.scrollY > 0)
})
var accordion=document.querySelectorAll('.accordion-header');
accordionArr=Array.from(accordion);
accordionArr.forEach(cur =>{
    cur.addEventListener('click',function(){
        cur.classList.toggle('active')
    })
})

// signup toggle script

var client_link=document.querySelector('.btn1');
var author_link=document.querySelector('.btn2');
var client_form=document.querySelector('.client-form');
var author_form=document.querySelector('.author-form');

author_link.addEventListener('click', function(e){
      e.preventDefault()
      author_form.style.display='block';
      client_form.style.display='none';
      author_link.style.background='#04c434';
      client_link.style.background='#424040';
})
client_link.addEventListener('click', function(e){
    e.preventDefault()
    author_form.style.display='none';
    client_form.style.display='block';
    author_link.style.background='#424040';
    client_link.style.background='#04c434';
})