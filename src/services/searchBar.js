import { handleGetProductLocalStorage } from "../persistance/localStorage"
import { handleRenderList } from "../views/store"

export const handleSearchProductByName =()=>{
    const inputHeader=document.getElementById('inputHeader')
    const product=handleGetProductLocalStorage()
    const result=product.filter((el)=>el.nombre.toLowerCase().includes(inputHeader.value))
    handleRenderList(result)
}