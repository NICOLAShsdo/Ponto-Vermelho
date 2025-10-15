const dot = document.getElementById("dot");

dot.addEventListener("click", () => {
    const maxX = window.innerWidth - dot.offsetWidth;
    const maxY = window.innerHeight - dot.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    dot.style.left = '${randomX}px';
    dot.style.top = '${randomX}px';
});