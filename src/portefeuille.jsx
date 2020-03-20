import React,{useState} from 'react'

const Portefeuille=()=>{
    const [pfvalue,setPfValue]=useState(34.45)
    return(
        <div>
            Vous Avez {pfvalue}€ dans votre portefeuille
        </div>
    )
}

export default Portefeuille