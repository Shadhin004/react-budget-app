import { useNavigate } from "react-router-dom"
import { Chart } from "../components/HomepageComponents/Chart"

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    Home Page
                    <Chart />
                    <button onClick={() => navigate('/budget-app')}> Go to budget </button>
                </div>
            </div>
        </div>
    )
}
