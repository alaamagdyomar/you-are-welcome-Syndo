
import { useState, useEffect } from 'react';

function getValue (key, initValue) {
    let storedValue;
    try{
        storedValue = JSON.parse(localStorage.getItem(key))
    }catch(e){
        
    }
    if(storedValue){
        return storedValue
    }else{
        return initValue
    }
}

export default function useLocalStorage (key, initValue){
    let [value, setValue] = useState(()=>{
        return getValue(key, initValue)
    });
    useEffect(()=>{
        localStorage[key] = value;
    }, [value])

    return [value, setValue]
}