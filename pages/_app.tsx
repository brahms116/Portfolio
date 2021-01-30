import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { createContext, SetStateAction, useState } from "react";

export interface IDataContext {
  id: string;
  setId: React.Dispatch<SetStateAction<string>>;
}
export const dataContext = createContext({} as IDataContext);

const DataContextProvider = (props: { children: React.ReactNode }) => {
  const [id, setId] = useState("initial");
  return (
    <dataContext.Provider value={{ id, setId }}>
      {props.children}
    </dataContext.Provider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </AnimatePresence>
  );
}
export default MyApp;
