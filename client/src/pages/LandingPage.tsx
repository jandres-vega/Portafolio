import {ProfileUser} from "../components/ProfileUser.tsx";
import {AboutMe} from "../components/AboutMe.tsx";
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import {CustomIcon} from "../common/CustomIcon.tsx";

const LandingPage = () => {
    return (
        <>
            <ProfileUser />
            <div className="flex justify-center items-center">
                <AboutMe />
            </div>
            <div className="flex mt-5 justify-center gap-6">
                <CustomIcon className="text-5xl hover:scale-125" icon={FaFacebook} />
                <CustomIcon className="text-5xl hover:scale-125" icon={FaInstagram} />
                <a href="https://www.linkedin.com/in/jandres-vega/" target="_blank">
                    <CustomIcon className="text-5xl hover:scale-125" icon={FaLinkedin} />
                </a>
                <a href="https://github.com/jandres-vega" target="_blank">
                    <CustomIcon className="text-5xl hover:scale-125" icon={FaGithub} />
                </a>
            </div>
        </>
    );
};

export {LandingPage};