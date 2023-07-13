import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UseMemoSample } from './components/useMemoSample';
// import App from './App';
// import Hellow from './components/Hello'
// import Parent from './components/ContainerSample'
// import Counter from './components/Counter'
// import { Parent } from './components/Parent'
// import { Clock } from './components/useEffectSample'
// import { Parent } from './components/useContextSample'
// import { ImageUploader } from './components/useRefSample'
import { Input } from './components/CustomHook'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Input />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
