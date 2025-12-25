import { useEffect, useState } from "react"


const useFetchData = (url) => {
    const [allResData,setAllResData] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    },[url]);


    const fetchData = async () => {
        const res =  await fetch(url);
        const jsonData = await res.json();
        setAllResData(jsonData);
        setLoading(false);
    }

    return {allResData,loading,setAllResData}
}


export default useFetchData;