import React, { ReactNode, createContext, useContext, useState } from "react";

type Screen = "Products" | "Checkout" | "Order-Complete";

interface NavigationContextProps {
  currentScreen: Screen;
  navigate: (screen: Screen) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("Products");

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <NavigationContext.Provider value={{ currentScreen, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextProps => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
