import { useEffect, useState } from 'react';

const useCourseList = (id) => {
    const [courseList, setCourseList] = useState([]);
    const [loading, setLoading] = useState(true);
    let url= '';
    id?
     url = `https://dreams-learning-server.vercel.app/courseList/${id}`
     :
     url ="https://dreams-learning-server.vercel.app/courseList"

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(data => { setCourseList(data); setLoading(false) })

    }, []);

    return [courseList, loading];
};

export default useCourseList;