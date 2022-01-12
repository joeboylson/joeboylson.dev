const handleWindowResize = () => {

  const elements = Array.from(document.getElementsByClassName("js-body-copy"));
  
  elements.forEach(ele => {
    const { width } = ele.getBoundingClientRect();
    const columns = Math.ceil(width / 700);
    ele.setAttribute("style", `column-count: ${columns}`);
  })
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("page-change", handleWindowResize);
handleWindowResize();
