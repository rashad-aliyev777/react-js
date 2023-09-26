import React, {useState, useEffect} from 'react'
import Mukafat from './Mukafat'



const Mukafatlar = () => {

    const [depoMelumat , setDepoMelumat] = useState([])

    useEffect(() => {
        fetch('src/components/mukafatlar.json')
        .then(cavab => cavab.json())
        .then(melumatlar => setDepoMelumat(melumatlar))
    }, [])

  return (
    <div className='awards-container'>

        {
                depoMelumat.map(birMelumat =>{
                    <Mukafat mukafatSekili={birMelumat.mukafatSekili} mukafatBasligi={birMelumat.mukafatBasligi} mukafatMetni={birMelumat.mukafatMetni} />
                })
        }
        
       
    </div>
  )
}

export default Mukafatlar