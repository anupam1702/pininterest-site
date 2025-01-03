
import First from "./component/first/First";
import Second from "./component/second/Second";
import Third from "./component/third/Third";
import Fourth from "./component/fourth/Fourth";
import Fifth from "./component/fifth/Fifth";
import Sixth from './component/sixth/Sixth'
import Seventh from "./component/seven/Seventh";
import Eight from "./component/eight/Eight";

export default function Home() {
  return (
    <div className="flex flex-col h-auto w-auto mx-auto">
     <First/>
     <Second/>
     <Third/>
     <Fourth/>
     <Fifth/>
     <Sixth/>
     <Seventh/>
     <Eight/>
    </div>
  )
};

