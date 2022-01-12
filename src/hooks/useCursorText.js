import { useCallback, useMemo } from "react";
import { isEmpty } from 'lodash';

const cursorSpanId = "cursor-span"

const findOrCreateCursor = () => {
    const existingCursorSpan = document.getElementById(cursorSpanId);

    if (!existingCursorSpan) {
        const newCursorSpan = document.createElement('span');
        newCursorSpan.id = cursorSpanId
        return newCursorSpan;
    } 
    
    return existingCursorSpan;
}

const makeCursorSpan = () => {
    let cursorSpan = findOrCreateCursor();
    document.body.append(cursorSpan);

    window.addEventListener('mousemove', (e) => {
      let lightboxExists = !isEmpty(document.getElementById("gallery-lightbox"))
      if (lightboxExists) return cursorSpan.style.transform = `translate(10000px, 10000px)`;
      return cursorSpan.style.transform = `translate( ${e.clientX - 21}px, ${e.clientY + (21/2)}px )`;
    })

    window.addEventListener('wheel', () => {
      cursorSpan.innerHTML = null;
      cursorSpan.classList.remove('active');
    }, false)
    window.addEventListener('page-change', () => cursorSpan.innerHTML = null, false)

    return cursorSpan;
}

export const useCursorText = () => {

  const cursorSpan = useMemo(() => makeCursorSpan(), []);

  const setText = useCallback((text) => {  
    cursorSpan.innerHTML = text;
    cursorSpan.classList.add('active');
  }, [cursorSpan])

  const clearText = useCallback(() => { 
      cursorSpan.innerHTML = null;
      cursorSpan.classList.remove('active');
  }, [cursorSpan])

  const applyHoverText = (text) => ({
    onMouseEnter: () => setText(text),
    onMouseLeave: () => clearText()
  })

  return { cursorSpan, applyHoverText }

}