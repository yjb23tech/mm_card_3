import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {

    return (
        <div>
            <h1>Above It All</h1>
            <Card 
                image_art = "album_cover_2.png" 
                main_title="YEEZUS" 
                artist_name="Kanye West" 
                album_name="TurboGrafx" 
                genre_name="Sophisticated Ignorance"
            />
        </div>

    )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

