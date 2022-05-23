import React, {useState, createContext} from 'react';

export const StaredContext = createContext({
  names: [],
  starItem: name => {},
  removeItem: name => {},
});

const StaredContextProvider = ({children}) => {
  const [names, setNames] = useState([]);

  const starItem = currentName => {
    setNames([...names, currentName]);
  };

  const removeItem = name => {
    setNames(currentName => currentName.filter(itemName => itemName !== name));
  };

  const value = {
    names,
    starItem,
    removeItem,
  };

  return (
    <StaredContext.Provider value={value}>{children}</StaredContext.Provider>
  );
};

export default StaredContextProvider;
