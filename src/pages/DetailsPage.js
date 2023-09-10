import { useNavigate } from "react-router-dom";
function DetailsPage() {
    const navigate = useNavigate();
    const handletoLanding = () => {
        navigate("/");
    }
    return (
        <div>
            <p>Details Page</p>
            <br/>
            <button className="text-xl text-[#836953] underline font-bold" onClick={() =>handletoLanding()}>Back</button>
        </div>
    );
}

export default DetailsPage;