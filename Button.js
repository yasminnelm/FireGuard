import { divIcon } from "leaflet";
import React, { useMemo } from 'react'
import { useState} from "react"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import InteractiveMap from "./InteractiveMap";
function Form(){
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (coords) => {
    // Handle the selected coordinates
    setSelectedLocation(coords);
  };

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
      }
   
return(
  <div>
    <form>
        <div>
           <label>Full name :</label>
           <input
          type="text"
          name="name"
           />
         </div>
         <div>
           <label>Location of fire :</label>
           <Select options={options} value={value} onChange={changeHandler} />
         </div>
        <button  class="save">Save</button>
    </form>
<InteractiveMap onMapClick={handleMapClick} />
  </div>  
)
}
function Button() {
    const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
      setShowForm(true); // Afficher le formulaire
    };
  
return(
    <div>
        <button onClick={handleButtonClick} >Add</button>
        {showForm ? <Form /> : null}

    </div>
        )
     }

export default Button;