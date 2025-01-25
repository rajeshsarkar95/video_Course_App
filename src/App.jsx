import Sidebar from './componets/sidebar/sidebar'
import VideoPlayer from './componets/videoPlayer/videoPlayer'
import { useState } from 'react';


function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (checked) => {
    setIsChecked(checked); 
    console.log(`Checkbox is now ${checked ? "checked" : "unchecked"}`);
  };
  return (
    <div>
      <VideoPlayer isChecked={isChecked} onCheckChange={handleCheck}/>
      <Sidebar isChecked={isChecked} onCheckChange={handleCheck}/>
    </div>
  )
}

export default App
