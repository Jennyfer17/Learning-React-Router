import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

export function VanDetail() {
    const params = useParams()
    const [vanDetail, setVanDetail] = useState({})

    useEffect(
        ()=> {
            fetch(`/api/vans/${params.id}`)
                .then(res => res.json())
                .then(data => setVanDetail(data.vans))
        },
        [params.id]
    )

    console.log(vanDetail)

    return (
        <div className="vanDetail">
            <img src={process.env.PUBLIC_URL+vanDetail.imageUrl} alt={`${vanDetail.name} van`} className="vanDetail--img"/>

            <div id={`vans-label-${vanDetail.type}`} className='vans-label'>
                <p>{vanDetail.type}</p>
            </div>

            <h2>{vanDetail.name}</h2>
            <p>$<bold>{vanDetail.price}</bold>/day</p>

            <p>
            The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!
            </p>



        </div>
    )
}