import fb from "../assets/icons/facebook.png";
import ig from "../assets/icons/instagram.png";
import github from "../assets/icons/github.png";
import user from "../assets/icons/profile-user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={user} alt="User" width={50} className="cursor-pointer" />

            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank" >
                        <img src={fb} alt="facebook" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={ig} alt="instagram" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://github.com/" target="_blank">
                        <img src={github} alt="github" width={40} />
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;