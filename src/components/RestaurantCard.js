import * as img from '../utils/config'

const RestaurantCard = (props) => {
    const {resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        <div className='res-card'>
            <img className="image" alt="res-image" src={img.IMG_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}


export default RestaurantCard;