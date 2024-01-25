import React from 'react'
import Card from './Card';

function Tours({tours,removeTour}){
    //We can too do this with the help of Props...

    return(
        <div className='Tours'>
            <div>
                <h2 className='title'>Pack and Hike</h2>
            </div>

            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} />;
                    })
                }
            </div>

        </div>
    );
}

export default Tours;