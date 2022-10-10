import React, {useEffect, useState} from 'react'
import GB from "../assets/GB.svg"
import {fetchAcademy, fetchAllAcademy, fetchAllCategory, fetchOneCategory} from "../http/reviewAPI";

const SchoolTable = props => {
    const [didMount, setDidMount] = useState(false);
    const [academic, setAcademic] = useState([])
    useEffect(() =>{
        setDidMount(true);
        fetchAllAcademy().then(data => setAcademic(data))

        return () => {
            setDidMount(false);
        }
    }, [])
    return (

        <table className="table table-hover">
            <tbody>
                {academic.map(item => (
                    <tr key={item.id} >
                        <td style={{maxWidth:"5px"}}>
                            <img src ={GB} style={{width:60,float:"right"}}/>
                        </td>
                        <td
                            style={{fontWeight: 600, color:"black", verticalAlign:"middle"}}>
                            {item.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export { SchoolTable }
