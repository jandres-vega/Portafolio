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
                <CustomIcon className="text-5xl cursor-pointer" icon={FaFacebook} />
                <CustomIcon className="text-5xl cursor-pointer" icon={FaInstagram} />
                <CustomIcon className="text-5xl cursor-pointer" icon={FaLinkedin} />
                <CustomIcon className="text-5xl cursor-pointer" icon={FaGithub} />
            </div>
        </>
    );
};

export {LandingPage};