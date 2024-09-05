import { useEffect, useState } from "react";


const HomePages = () =>{
    const [data,setData] = useState([])

    const getData= async () =>{
        const url = 'http://dog.ceo/api/breeds/image/random'
        try{
            const response = await fetch(url)
            const data = await response.json(); 
            setData(data)
        }catch(error){
            console.error('Error al obtener data: ', error)
        }
    }
    useEffect(()=>{
        getData()
    },[]);


    if(!data){
        return <p>Cargando...</p> // mensaje de carga
    }
    return(
        <main>
            <h1>Bienvenido</h1>

            <img src={data.message}/>
        </main>
    )
}

export default HomePages;