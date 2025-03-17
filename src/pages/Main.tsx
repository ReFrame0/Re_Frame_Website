import Toppanel from "../components/toppanel";
import "./Main.css"

function Main() {
    return (
        <div>
            <div className="top-panel">
                <Toppanel />
            </div>
            <div className="home">
                <h1>Re:Fream</h1><br />
                <p>세상을 다시(Re) 바라보고,<br />
                새로운 관점을 창조하다.</p>
            </div>
        </div>
    )
}

export default Main;