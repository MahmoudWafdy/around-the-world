import { useEffect, useState } from "react";

export const UseFetchData =(country)=>{
    const [result, setResult] = useState([]);
    //make a douplicate use state from countriesList to use it only on filter
    const [filteredCountries, setFilteredCountries] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if(country){
            fetchFromApi()
        } else{
            fetchFromLocalStorage()
        }
       
    }, []);
const fetchFromApi = ()=>{
    let url = "https://restcountries.com/v3.1/all";
    setIsLoading(true);
    if(country){
        url = `https://restcountries.com/v3.1/name/${country}`
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (country) { //country page
                setResult(data[0])
            } else { //home page
                setResult(data);
                setFilteredCountries(data);
                localStorage.setItem("countries",JSON.stringify(data))
            }
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
}

 const fetchFromLocalStorage = ()=>{
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
        setResult(data);
        setFilteredCountries(data);
    }else{
        fetchFromApi()
        
    }
 }
    

    return {result,filteredCountries,isLoading,isError,setFilteredCountries}

}
