import data from "./data";
import {useState} from "react";
import Tours from "./Components/Tours";

function App(){
  /*Here we have Used useState Hook that helps us to render as well as update the change.*/
  const [tours, setTours] = useState(data);
  
  /*This function is for the not intrested butto which when will be clicked will remove that
  card from the UI. */
  function removeTour(id) {
    /*We have just filtred and set newTour data by removing the only passed id. */
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={()=>setTours(data)}>ReFresh</button>
      </div>
    )
  }

  /*props passed in here is {tours and removeTour} */
  return(
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;