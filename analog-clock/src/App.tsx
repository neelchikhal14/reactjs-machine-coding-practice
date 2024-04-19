import { useTime } from "./useTime";

function App() {
  const [hoursInDeg, secsInDeg, minsInDeg] = useTime();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="clock h-[400px] w-[400px] border-2 rounded-full">
        <div
          style={{ rotate: `${secsInDeg}deg` }}
          className={`minhand h-[5px] w-[5px] bg-green-600 absolute top-[50%] 
        left-[50%] -translate-x-1/2 -translate-y-1/2
        after:absolute
        after:h-[175px]
        after:w-[5px]
        after:bg-blue-400
        after:bottom-0
        rotate-6
        
        after-hand`}
        ></div>
        <div
          style={{ rotate: `${minsInDeg}deg` }}
          className="sechand h-[5px] w-[5px] bg-green-600 absolute top-[50%] 
        left-[50%] -translate-x-1/2 -translate-y-1/2
        after:absolute
        after:h-[100px]
        after:w-[5px]
        after:bg-yellow-400
        after:bottom-0
        after-hand
        "
        ></div>
        <div
          style={{ rotate: `${hoursInDeg}deg` }}
          className="sechand h-[5px] w-[5px] bg-green-600 absolute top-[50%] 
        left-[50%] -translate-x-1/2 -translate-y-1/2
        after:absolute
        after:h-[70px]
        after:w-[5px]
        after:bg-pink-400
        after:bottom-0
  
        after-hand
        "
        ></div>
      </div>
    </div>
  );
}

export default App;
