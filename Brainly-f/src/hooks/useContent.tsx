import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){
    const [contents , setContents]= useState([]);



    const fetchContents = async()=> {
         const response= await axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            },
         });
            setContents(response.data.contents)
        };
    useEffect(() => {
        fetchContents();
    },[] );
 
    return {contents, fetchContents };

}