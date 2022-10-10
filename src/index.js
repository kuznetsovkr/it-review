import React, {createContext}  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStr from "./store/UserStr";
import CourseStore from "./store/CourseStore";
import AcademicsStore from "./store/AcademicsStore";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

export const Context = createContext(null)
const options = {
    position: positions.MIDDLE,
    timeout: 4000,
    offset: '60px',
    transition: transitions.SCALE
}
console.log()

ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
    <Context.Provider value={{
        user: new UserStr(),
        section: new CourseStore(),
        academic: new AcademicsStore(),
        review: new AcademicsStore()

    }}>
        <App />
    </Context.Provider>,
    </AlertProvider>,
  document.getElementById('root')
);
