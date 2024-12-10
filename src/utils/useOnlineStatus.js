import { useEffect, useState } from "react";


//Steps to create custom Hooks
//1. What is contract

//in this we only have to return not take.
const useOnlineStatus  = ()=>{

    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener('offline',()=> setOnlineStatus(false));

        window.addEventListener('online',()=> setOnlineStatus(true));
    },[]);
    return onlineStatus;
}

export default useOnlineStatus;