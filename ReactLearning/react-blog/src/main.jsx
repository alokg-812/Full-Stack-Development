import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import BasicLoginComponent from './Components/BasicLoginComponent.jsx';
import JSX from './Components/JavascriptHTML.jsx';
import Exercise from './Components/JSXExercise.jsx';
import JSXWithCurlyBraces from './Components/JSXWithCurlyBraces.jsx';
import ClickEvent from './Components/ClickEvent.jsx';
import ReactState from './Components/ReactState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <BasicLoginComponent /> */}
    {/* <JSX/> */}
    {/* <Exercise/> */}
    {/* <JSXWithCurlyBraces/> */}
    {/* <ClickEvent /> */}
    <ReactState/>
  </StrictMode>,
)
