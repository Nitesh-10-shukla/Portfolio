import React, { useReducer , useEffect } from "react";
import { GlobalContextContainer } from "./globalContext";
import { getProjects } from "../utils";

const initialState = {
  projects: [],
  blogs: [],
  works: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PROJECTS':
      return { ...state, projects: action.projects };
    case 'WORKS':
      return { ...state, works: action.works };
    case 'BLOGS':
      return { ...state, blogs: action.blogs };
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      dispatch({ type: 'PROJECTS', projects: res });
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };
  
  useEffect(() => {
    fetchProjects();
  }, []);

  const defaultValue = {
    state,
    dispatch
  };

  return (
    <GlobalContextContainer value={defaultValue}>
      {children}
    </GlobalContextContainer>
  );
};

export default GlobalContextProvider;
