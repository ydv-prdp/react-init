import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import AboutClass from './components/AboutClass';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const About = lazy(()=>import("./components/About"))

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState();
    useEffect(()=>{
        const data = {
            name:"pradeep yadav"
        }
        setUserInfo(data.name);
    },[])
    return (
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}>
            <div className='app'>
                    <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1><Shimmer/></h1>}><About/></Suspense>
            },
            {
                path:"/aboutclass",
                element:<AboutClass/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);