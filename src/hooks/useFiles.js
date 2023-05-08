const { useState, useEffect } = require("react")
import { filesService } from '../services/servicesFiles'


export const useFiles = () => {

    const [files,setFiles] = useState([])
    const [isLoadingFiles, setIsLoadingFiles] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{

        setIsLoadingFiles(true)

        filesService.getFiles()
        .then((resultFiles)=>{
            if (resultFiles && resultFiles.payload) {
                const result =  resultFiles.payload.filter(lines =>{
                    return lines.lines && lines.lines.length > 0
                });
                setFiles(result)
            }
        }).catch((err)=>{
            setError(err)
        }).finally(()=>{
            setIsLoadingFiles(false)
        })
    },[])
    
    return {
        files,
        isLoadingFiles,
        error
    }
}
