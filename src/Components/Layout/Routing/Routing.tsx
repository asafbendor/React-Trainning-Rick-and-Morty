import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import RMCard from "../../Pages/RMCard/RMCard";
import RMTable from "../../Pages/RMTable/RMTable";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import App from "../../../App";
import Page404 from "../../Pages/Page404/Page404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/> 
                <Route path="home" element={<Home />}/> 
                <Route index element={<Home />}/>
                <Route path="about" element={<About/>}/>
                <Route path="cards" element={<RMCard/>}/> 
                <Route path="table" element={<RMTable/>}/>
                <Route path="*" element={<Page404/>}/> 
            </Routes> 

        </div>
    );
}

export default Routing;
