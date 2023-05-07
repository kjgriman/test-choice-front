"use client"; // this is a client component

import { useEffect, useState } from "react"
import {filesService} from '../../services/servicesFiles'
import Spinner from "../spinner";

export default function TableFiles() {
    const [files,setFiles] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        filesService.getFiles().then((resultFiles)=>{
            console.log('resultFiles',resultFiles);
            if (resultFiles && resultFiles.payload) {
                const result =  resultFiles.payload.filter(lines =>{
                    console.log('lines',lines);
                    return lines.lines && lines.lines.length > 0
                });
                console.log('result',result);
                setFiles(result)
            }
        }).catch((err)=>{
            console.log('err',err);
        }).finally(()=>{
            setLoading(false)
        })
    },[])

   

    return (
        <table className="table table-striped table-hover table-bordered">
            {loading && <Spinner/>}
                <thead>
                    <tr>
                        <th scope="col">File Name</th>
                        <th scope="col">Text</th>
                        <th scope="col">Number</th>
                        <th scope="col">Hexadecimal</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((item,ind) => {
                        let linesToShow
                        console.log(item.lines);
                        const { lines } = item
                        if (lines && lines.length > 0) {

                            linesToShow = lines.map((element,i) => {
                                console.log('element',element);
                                return (
                                    <tr key={'tr_'+ind+i}>
                                        <th scope="row">{item.file}</th>
                                        <td>{element.text}</td>
                                        <td>{element.number}</td>
                                        <td>{element.hex}</td>
                                    </tr>
                                )
                            });
                        }
                        return linesToShow
                        
                    })}
                    
                    
                </tbody>
            </table>
    )
}