import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
    return(
        <div className="App">
            <NavBar></NavBar>

            <Catalog></Catalog>

            <Footer />
        </div>
    );
}

export default App;