import {Routes, Route} from  "react-router-dom";
import Form from "./form";
import Home from "./Home";
 
const AllRouter = () => {
     return ( 
          <div>
               <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/form" element={<Form/>} />
               </Routes>
</div>
      );
}
 
export default AllRouter;