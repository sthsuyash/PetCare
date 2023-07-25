import './about.css';
import { AiFillRightCircle } from 'react-icons/ai';

export default function About() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 flex flex-row mx-auto justify-center space-x-20">
                <div className="xs:hidden w-1/2 flex justify-end">
                    <img src="https://via.placeholder.com/250x250" alt="https://via.placeholder.com/250x250" />
                </div>
                <div className="flex flex-col text-left w-1/2 space-y-5">
                    <h1 className="text-5xl font-extrabold dark-blue-text">About Us</h1>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>Pet House & Animal clinic was established with moto to provide qualitative and affordable animal healthcare service to your doorstep.</p>
                    <ul className="listIcon ml-5 font-semibold leading-8 text-lg py-3" style={{ color: "#515151" }}>
                        <li>Comprehensive</li>
                        <li>Professional</li>
                        <li>Compassionate veterinary service</li>
                    </ul>

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Contact
                        <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                    </button>
                </div>
            </div>
        </>
    )
}