var head1 = document.querySelector("#one")
var head2 = document.querySelector("#two")
var head3 = document.querySelector("#three")


head1.addEventListener('mouseover',function functionName() {
  head1.textContent = "Mouse over me"
  head1.style.color = 'red'

})

head1.addEventListener('mouseout',function(){
  head1.textContent = 'HOVER OVER ME!'
    head1.style.color = 'Black'

})

head2.addEventListener('click',function(){
  head2.textContent = 'Clicked On!'
  head2.style.color = 'Green'
})

head3.addEventListener('dblclick',function(){
  head3.textContent = 'Clicked On!'
  head3.style.color = 'Orange'
})
