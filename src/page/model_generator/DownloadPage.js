import {useLocation} from "react-router-dom";
import {useState} from "react";

const DownloadPage = (props) => {
    const location = useLocation();
    const { status } = location.state || {};
    const {state, setState} = useState(1)
    return(
        <div>
            <p>Your Model is ready</p>
            <p>{status}</p>
            <button>download as file</button>
            <button>show on screen</button>
        </div>
    )

}
export default DownloadPage;