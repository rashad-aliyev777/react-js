import React,{useState,useEffect} from 'react'
import YemekSirketler from './YemekSirketler'


const Yemek = () => {
  const[melumatlar,setMelumatlar] = useState([])

useEffect(function(){
    fetch("src/yemekler.json")
    .then(melumatlar=>melumatlar.json())
    .then(frontunBasaDuseceyiForma=>setMelumatlar(frontunBasaDuseceyiForma))

}, [])
console.log(melumatlar);

  return (
    <div>
      {

              melumatlar.map(umumiYemek=>(
            <YemekSirketler yemeyinSekili={umumiYemek.yemeyin_logosu} />
          ))

      }

    </div>
  )
}

export default Yemek