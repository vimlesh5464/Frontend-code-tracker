import React, { createContext, useState, useEffect } from "react";
import { getProblems } from "../utils/api"; // API call function

export const ProblemContext = createContext();

export const ProblemProvider = ({ children }) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    getProblems().then(setProblems);
  }, []);

  return (
    <ProblemContext.Provider value={{ problems }}>
      {children}
    </ProblemContext.Provider>
  );
};
