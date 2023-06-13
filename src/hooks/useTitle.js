import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Tou Hut | ${title}`
    },[title])
}
export default useTitle;