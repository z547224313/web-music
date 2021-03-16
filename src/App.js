import React,{ memo } from 'react';
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import route from "@/router";
import store from "@/store";
import {Provider} from "react-redux";
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'


export default memo(function App(props) {
 return (
 <Provider store={store}>
   <BrowserRouter>
     <AppHeader/>
     {renderRoutes(route)}
     <AppFooter/>
   </BrowserRouter>
 </Provider>
 );})

