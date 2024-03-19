import { useState } from 'react'
import './App.css'
import ImageUpload from './components/ImageUpload'

function App() {

  const [croppedImage, setCroppedImage] = useState();
  const [fullImage, setFullImage] = useState();

  return (
    <>
      <ImageUpload setCroppedImage={setCroppedImage} setOriginalImage={setFullImage} round aspect={1} sizeLimit={150000}/>
    </>
  )
}

export default App
