import {useEffect, useState} from 'react'

export function useDebounce(value: number, delay: number){
    const [debounceValue, setdebounceValue] = useState(value)

    useEffect( () => {

        const timer = setTimeout( () => setdebounceValue(value), delay || 500)
        console.log('setdebounceValue: ' + value)

        return () => {
            clearTimeout(timer)
        }

    }, [value, delay])
}