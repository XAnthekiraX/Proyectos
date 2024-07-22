import { useState } from "react";

const btnClass="text-black m-2 bg-gray-400 p-2 rounded-lg hover:bg-gray-200"

const Contador = () => {

    //*Estado del contador donde count = 0
  const [count, setCount] = useState(0);

//*Funcion q al hacer click haga el incremento
const handleIncrement=()=>{
    setCount(count+1);
}


const handleDecrement=()=>{
    if (count !==0) {
        setCount(count-1);
    }
}




  return (
    <div className="text-white w-screen h-auto gap-2 flex-wrap flex justify-center items-center flex-col mt-8">
      <h1 className=" text-[40px] font-bold">Contador de Clicks</h1>
      <div className="w-[80%] min-h-[500px]  flex justify-start text-black  items-center p-10 bg-orange-100 rounded-lg flex-col">
        <span className="text-black font-bold text-[25px]">
          Has clickeado
        </span>
        <span>{count}</span>
        <div className="flex">
          <button 
          className={btnClass}
          onClick={handleIncrement}
           >Incremento</button>
          <button 
          onClick={handleDecrement}
          className={btnClass} >Decremento</button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
