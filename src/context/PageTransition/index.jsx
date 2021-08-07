import React, { useState, createContext, useContext } from 'react';
import TransitionCover from '../../components/TransitionCover';


const defaultContextValue = {
  setTransitonText: () => console.log('DEFAULT: setTransitonText'),
};

const PageTransitionContext = createContext(defaultContextValue);

export const PageTransitionProvider = ({ children }) => {

  const [transitionText, setTransitonText] = useState('');

  const contextValue = { setTransitonText };

  return (
    <PageTransitionContext.Provider value={contextValue}>
      <TransitionCover text={transitionText}/>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransitionContext = () => useContext(PageTransitionContext);