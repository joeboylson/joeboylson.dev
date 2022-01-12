const getScrollContainer = () => document.getElementById("scroll-container")

const scrollMainTo = (value) => {
  const ele = getScrollContainer();
  if (isNaN(value)) return;
  
  ele.style.transform = `translateY(${value}px)`;
  ele.setAttribute("data-scroll", value);
}

const handleWheel = (e) => {
  const ele = getScrollContainer();
  const {height} = ele.getBoundingClientRect();
  
  const scrollableHeight = Math.round(height - window.innerHeight);
  if (scrollableHeight <= 0) return;
  
  const prevScrolled = ele.getAttribute("data-scroll");
  const translateY = Math.round( Number(prevScrolled) - (e.deltaY / 10) );
  const inverseTranslateY = translateY * -1;
  
  if (inverseTranslateY < 0) return scrollMainTo(0);
  if (inverseTranslateY > scrollableHeight) return scrollMainTo(scrollableHeight * -1);
  
  scrollMainTo(translateY)
}

const resetScroll = () => scrollMainTo(0);

window.addEventListener('wheel', handleWheel);
window.addEventListener("page-change", resetScroll);