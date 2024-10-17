import { CDN_URL, STAR_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    
    const {
        name, 
        avgRating, 
        sla, 
        cuisines, 
        cloudinaryImageId
    } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-image" src={
                    CDN_URL+
                    cloudinaryImageId
                  }></img>
            <h3>{name}</h3>
            <h4>
                <img src={STAR_URL} style={{width:20}}></img>
                    {avgRating} . <span>{sla.slaString}</span>
            </h4>
            <p>{cuisines.join(", ")}</p>
        </div>
    )
};

export default RestaurentCard;