import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"
import album_art from "./images/album_cover_1.png"

const App = () => {

    return (
        <div>
            <h1>Above It All</h1>
            <Card />
        </div>

    )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

