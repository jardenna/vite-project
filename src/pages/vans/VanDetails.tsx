import { FC, useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

interface VanDetailsProps {
 
}
const VanDetails: FC<VanDetailsProps> = () => {
    const params = useParams()
    const [van, setVan] = useState<any>(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    
    return  <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
         
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button type="button" className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div> 
};
export default VanDetails;