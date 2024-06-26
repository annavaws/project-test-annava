import React, { createContext, useContext } from "react";
import { IContextWithChildren } from "./interface";
import axios, { AxiosInstance } from "axios";

const AxiosContext = createContext({});

export const useAxiosContext = () => useContext(AxiosContext);

export const AxiosProvider: React.FC<IContextWithChildren> = ({ children }) => {
  axios.defaults.baseURL = "https://suitmedia-backend.suitdev.com";
  axios.defaults.headers["Content-Type"] = "application/json";

  return <AxiosContext.Provider value={{}}>{children}</AxiosContext.Provider>;
};

// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: "https://suitmedia-backend.suitdev.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const AxiosContext = createContext<AxiosInstance>(axiosInstance);

// export const useAxiosContext = () => useContext(AxiosContext);

// export const AxiosProvider: React.FC<IContextWithChildren> = ({ children }) => {
//   return (
//     <AxiosContext.Provider value={axiosInstance}>
//       {children}
//     </AxiosContext.Provider>
//   );
// };
