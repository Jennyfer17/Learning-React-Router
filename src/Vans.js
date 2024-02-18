import {useEffect, useState} from 'react'

export function Vans() {
    const [vans, setVans] = useState([])

    useEffect(
      () => {
        fetch('/api/vans')
          .then(res => res.json())
          .then(data => setVans(data.vans))
      },
      []
    )

  const van  = vans.map(
    data => {
        return (
            <div className="van" key={data.id}>
                <img src={process.env.PUBLIC_URL+data.imageUrl} alt="vans" className="vans-page--img"></img>
                <span>
                    <h3>{data.name}</h3>
                    <p>${data.price}/day</p>                       
                </span>
                <div id={`vans-label-${data.type}`} className='vans-label'> 
                    <p>{data.type}</p>
                </div>
            </div>
        )
    }
  )
    return (
        <div className='vans-page'>
            <h2>Explore our van options</h2>
            <div className='card-van'>
                {van}
            </div>
        </div>
    )
}