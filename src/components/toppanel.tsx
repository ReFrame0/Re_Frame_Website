import { useState } from "react";
import "./toppanel.css"

function Toppanel() {
    const [page, setPage] = useState("home");

    return (
        <header>
            <nav>
                <p><a href="">Re:Frame</a></p>
                <div className="nav-right">
                    <ul>
                        <li><a href="">INTRODUCE</a></li>
                        <li><a href="">PROJECT</a></li>
                        <li><a href="">Q&A</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toppanel;