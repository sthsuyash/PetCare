import ServiceCard from "./Cards/ServiceCard";
import { AiFillRightCircle } from 'react-icons/ai';

const services = [
    {
        title: "Dog/Cat Grooming",
        description: "We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.",
        image: '../assets/services/pet-grooming.png',
        link: '/services/pet-grooming'
    },
    {
        title: "Home Treatment",
        description: "Our goal is to ensure pet welfare through home treatment and prompt client response.",
        image: "../assets/services/home-treatment.png",
        link: '/services/home-treatment'
    },
    {
        title: "Clinical Treatment",
        description: "Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.",
        image: "../assets/services/clinical-treatment.png",
        link: '/services/clinical-treatment'
    },
    {
        title: "Puppies Buying & Selling",
        description: "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
        image: "../assets/services/puppies-buy-sell.png",
        link: '/services/puppies-buying-selling'
    },
    {
        title: "Dog Training",
        description: "Our team of dog trainers is passionate, dedicated, and has years of professional experience.",
        image: "../assets/services/dog-training.png",
        link: '/services/dog-training'
    },
    {
        title: "Dog Mating",
        description: "Quality breeding requires experience and passion. We can arrange and facilitate quality breed mating.",
        image: "../assets/services/dog-mating.png",
        link: '/services/dog-mating'
    }
]

export default function Services() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-x-20">
                <div className="mb-16">
                    <h2 className="text-5xl font-extrabold dark-blue-text mb-3">Our Services</h2>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>
                        We provide a wide range of products & services for pets such as food, toys, grooming supplies, and veterinary care. <br />We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends.
                    </p>
                </div>
                {/* loop over all the breeds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                image={service.image}
                                description={service.description}
                                link={service.link}
                            />
                        )
                    })}
                </div>
                <button
                    className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm text-center"
                    onClick={() => window.location.href = '/services'}
                >
                    View More
                    <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                </button>
            </div>
        </>
    )
}