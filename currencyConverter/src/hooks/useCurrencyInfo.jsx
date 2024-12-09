import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState(null)
    useEffect((currency) => {
        fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
        .then((res) => res.json())
        .then((data) => setData(data[currency]))
    })
}