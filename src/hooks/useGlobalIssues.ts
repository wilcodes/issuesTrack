import React, {useEffect, useState} from "react";
import { getDatabase, ref, get } from "firebase/database";

const useGlobalIssues = ()=>{

    const [globalIssues, setGlobalIssues] = useState<object[] | never>([]);

    const destructureObject = (object: object) => {
        //Transforming the object with all the users into an iteratble array
        let newArray: Array<object> = [];
        const globalIssuesA: Array<object> = [];
        Object.values(object).forEach((issue: object) => {
            newArray.push(issue);
        });
        //Transforming the array of users into a unified array with all the global issues
        newArray.forEach(userIssues=>{
            Object.values(userIssues).forEach((issue: object) => {
                globalIssues.push(issue);
            });
        })
        setGlobalIssues(globalIssuesA);

    };


    const getRecords = async () => {
        const db = getDatabase();
        const issuesRef = await ref(db, "issues/" );
        let userIssues = await get(issuesRef);
        try {
            destructureObject(userIssues.val())
        } catch (e) {
            console.log("Empty remote Issues");
        }
    };

    useEffect(()=>{
        getRecords();
    },[])
    return globalIssues;
}

export default useGlobalIssues;