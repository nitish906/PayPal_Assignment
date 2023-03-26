import {Routes, Route} from  "react-router-dom";
import Form from "./form";
import Home from "./Home";
import Task from "./Task";
import Sprint from "./Sprint";

 
const AllRouter = () => {
     return ( 
          <div>
               <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/home" element={<Form />} />
           
                    <Route path="/sprint" element={<Sprint />} />
                    <Route path="/task" element={<Task />} />
               </Routes>
</div>
      );
}
 
export default AllRouter;