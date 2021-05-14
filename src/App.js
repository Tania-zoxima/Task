import logo from './logo.svg';
import './App.css';
import pen1 from './pic1.jpg'
import pen2 from './pic2.jpg'
import pen3 from './pic3.jpg'
import pen4 from './pic4.jpg'
import { useEffect, useState } from 'react';
import Progressbar from './Progressbar';

function App() {
  const [bimg, setBimg] = useState(pen4)
  const [level, setLevel] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel(level+1)
    }, 50);
    return () => 
      clearInterval(timer);
  }, [level])

  const progess = (key) => {
    switch (key) {
      case 1:
        setIsOpen(true)
        setTimeout(() => {
          setBimg(pen1) 
        }, 6000)
        setLevel(0);
        
       
        break;
      case 2:
        setIsOpen(true)
        
        setTimeout(() => {
          setBimg(pen2) 
        }, 6000)
        setLevel(0);
        
        
        break;
      case 3:
        setIsOpen(true)
        
        setTimeout(() => {
          setBimg(pen3) 
        }, 6000)
        setLevel(0);
        
        break;
        

      default:
        break;
    }
  }
  return (
    <div className="container">
      <div className="upperdiv" >
        <div className="upperleftdiv">
          <img onClick={()=>progess(1)} className="img1" src={pen1}></img>
          <img onClick={()=>progess(2)} className="img1" src={pen2}></img>
          <img onClick={()=>progess(3)} className="img1" src={pen3}></img>
        </div>
        <div className="upperrightdiv">
          <img className="img2" src={bimg}></img>
        </div>
      </div>
      <div className="lowerdiv">
        <div className="lowerLeftDiv">
          <h2>Parker : Vector Ball Pen | Blue ink</h2>
        </div>
        <div className="lowerrightdiv">
          <h3>Price <br />Rs200</h3>
        </div></div>
        
      <Progressbar open={isOpen} onClose={() => setIsOpen(false)} level={level}/>
    </div>
    
  );
}

export default App;
