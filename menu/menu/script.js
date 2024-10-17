const listItems = document.querySelectorAll('.navigation ul li');

listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('.navigation ul li.active').classList.remove('active');
    item.classList.add('active');
    
    // document.querySelector('.indicator').style.transform = `translateX(calc(70px * ${index} - 105px))`;
    document.querySelector('.indicator').style.transform = `translateX(calc(70px * ${index} - 140px))`;
  });
});
