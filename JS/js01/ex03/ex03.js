document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('li');
    menuItems.forEach(item => {

        item.addEventListener('mouseover', () => {
            item.style.backgroundColor= "lightblue";
        })

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = "cornflowerblue";
        })

        item.addEventListener('click', (e) => {
            alert(`You clicked on ${e.target.textContent}`);
        })
    })
})