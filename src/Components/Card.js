import React, { useState } from "react";

/*Inside the cards component we have passed the data. */

function Card({image,name,id,info,price,removeTour}){
    /*Using useState Hook for updating and rendering the data. */
    const [readmore, setReadMore] = useState(false);

    /*description is for selecting the specified data and render that much only.*/
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    /*The readmoreHandler is used to set the value of readMore as true and false.*/
    function readmoreHandler() {
        setReadMore(!readmore);
    }

    return(
        <div className="card">

            <img src={image} className="image" alt="img"/>

            <div className="tourInfo">

                <div className="tourDetails">

                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourName">{name}</h4>

                </div>

                <div className="description">

                    {description}

                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                    
                </div>

            </div>

            <button className="btnRed" onClick ={() => removeTour(id)}>
                Not Interested
            </button>

        </div>
    );
}

export default Card;