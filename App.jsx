import { createReact } from "react-dom/client"

const App = () => {

    return (
        <div>
            <h1>Above It All</h1>
        </div>

    )
};

const container = document.getElementById("root")
const root = createReact(container)
root.render(<App />)

