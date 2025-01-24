// create your App component here
import React, {useState, useEffect} from 'react'

const App = () => {

  // the state to store the image URL and the loading status
   const [dogImage, setDogImage]=useState('');
   const [loading, setLoading]=useState(true);

   //useEffect hook to fetch dog image when the component mounts

   useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((data)=>{
      setDogImage(data.message);   //sets dog image url
      setLoading(false)      //sets loading to false once the image is fetched
    }) 
   .catch((error)=>console.error('error fetching dog image', error))

  },[]) // empty dependency means it runs once on mount


  return (
    <div>
      {/* Display a <p> tag with the text of "Loading..." when the component is first rendered */}
      {/* show the dog image in an <img> tag, with the alt attribute set to "A Random Dog" */}

       {loading? (<p>Loading...</p>):(<img src={dogImage} alt='A Random Dog'/>)}

    </div>
  )
}

export default App

