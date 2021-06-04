let myCollapsible = document.querySelectorAll('.accordion-item') // 要改成focus在每個項目
myCollapsible.forEach(e=>{
   e.addEventListener('hide.bs.collapse', function (e) {
      this.classList.remove('shadow-qa');
    })
    e.addEventListener('show.bs.collapse', function () {
      this.classList.add('shadow-qa');
    })
    
})
