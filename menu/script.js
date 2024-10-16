const listItems = document.querySelectorAll('.navigation ul li');

listItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('.navigation ul li.active').classList.remove('active');
    item.classList.add('active');

    // Move indicator based on the active item
    document.querySelector('.indicator').style.transform = `translateX(calc(70px * ${index}))`;
  });
});
