import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/UsememoUseEffect";
import RouteTest from "./pages/RouteTest";
import ErrorPage from "./pages/ErrorPage";
import TestComponent from "./pages/TestComponent";
import UseTransition from "./pages/loadBalance/UseTransition";
import NoneUseTransition from "./pages/loadBalance/NoneUseTransition";
import UseDeferredValue from "./pages/loadBalance/UseDeferredValue";
import AddScriptTag from "./pages/AddScript/AddScriptTag";
import Wysiwyg from "./pages/Wysiwyg";
import SearchInput from "./pages/SearchInput";
import TypeofTest from "./pages/TypeofTest";
import TestGrahp from "./pages/TestGraph";

const router = createBrowserRouter([
  {
    path: "/", // path입니다.
    element: <Root/>, // 이동할 대상입니다.
    errorElement: <ErrorPage />, //v6 부터 추가된 기능입니다. 에러 발생 시 이동할 곳을 지정할 수 있습니다.
  },
  {
    path: "RouteTest/:testParam", //이와 같이 유동적인 pramater를 받을 수 있습니다.
    element: <RouteTest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ClassComponent",
    element: <TestComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "UseTransition",
    element: <UseTransition />,
    errorElement: <ErrorPage />,
  },
  {
    path: "NoneUseTransition",
    element: <NoneUseTransition />,
    errorElement: <ErrorPage />,
  },
  {
    path: "UseDeferredValue",
    element: <UseDeferredValue />,
    errorElement: <ErrorPage />,
  },
  {
    path: "AddScriptTag",
    element: <AddScriptTag />,
    errorElement: <ErrorPage />,
  },
  {
    path: "WysiwygEditor",
    element: <Wysiwyg />,
    errorElement: <ErrorPage />,
  },
  {
    path: "SearchInput",
    element: <SearchInput />,
    errorElement: <ErrorPage />,
  },
  {
    path: "TypeofTest",
    element: <TypeofTest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "TestGrahp",
    element: <TestGrahp />,
    errorElement: <ErrorPage />,
  },
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); // root를 HTMLElement로 #root에 생성할 것을 선언합니다. 택배 송장입니다.

root.render( // 생성된 root를 랜더링합니다. 택배를 발송합니다.
  <React.StrictMode>
   <RouterProvider router={router} /> {/*RouterProvider에서 router를 받아 읽고 실행합니다.*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
