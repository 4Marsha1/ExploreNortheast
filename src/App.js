import './App.css';
import Navbar from "./components/navbar"
import Jumbotron from "./components/jumbotron"
import Explore from "./components/explore/exploreContainer"
import Video from "./components/videoGallery/videoContainer"

function App() {
    return (
        <div className="App">
            <div className="bg-image">
                <Navbar />
                <Jumbotron />
            </div>
            <div className="bg-image-black">
                <Explore />
                <Video />
            </div>
            <div className="bg-image-footer">

            </div>
        </div>
    );
}

export default App;
