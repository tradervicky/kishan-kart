import React, { createContext, useContext, useState } from 'react';


const Language = createContext();


export const useLangContext = () => {
  return useContext(Language);
};


export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(true);

  const hindi = () => {
    setLang(true)
  };

  const eng = () => {
    setLang(false);
  };

  return (
    <Language.Provider value={{ lang, hindi, eng }}>
      {children}
    </Language.Provider>
  );
};
