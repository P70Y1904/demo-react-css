import { useNavigate } from "react-router-dom";
import person from "../assets/icons/woman.png";

function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
    } 
    return (
        <div className="text-center">
            <p className="font-mono text-4xl font-bold uppercase">About Me</p>
            {"\n\n"}
                <p className="flex justify-center">
                    <img src={person} alt="pp" width={150} className="bg-white rounded-full p-6 " />
                </p>
            {"\n\n"}
            <p className="text-md mt-2 font-bold text-white mx-36">
            A portfolio’s meaning can be defined as a collection of financial assets 
            and investment tools that are held by an individual, a financial institution 
            or an investment firm. To develop a profitable portfolio, it is essential 
            to become familiar with its fundamentals and the factors that influence it. 
            </p>{" "}
            <br/>
            <button className="text-xl text-[#836953] underline font-bold" onClick={() =>handleToDetail()}>NEXT</button>
        </div>
    );
}

export default LandingPage;