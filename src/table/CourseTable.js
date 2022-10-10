import React, {useEffect, useState} from 'react'
import letter_S from "../assets/course.svg"
import {fetchAllCategory, fetchAllClass} from "../http/reviewAPI";

const CourseTable = props => {
    const [didMount, setDidMount] = useState(false);
    const [course, setCourse] = useState([])
    useEffect(() =>{
        setDidMount(true);
        fetchAllClass().then(data => setCourse(data))

        return () => {
            setDidMount(false);
        }
    }, [])
    return (
        <table className="table table-hover">
            <tbody>
                {course.map(course => (
                    <tr key={course.id} >
                        <td style={{ maxWidth:"40px"}}>
                            {<img src={letter_S} style={{width:60,float:"right"}}/>}
                        </td>
                        <td
                            style={{fontWeight: 600, color:"black", verticalAlign:"middle"}}>
                            {course.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export { CourseTable }
