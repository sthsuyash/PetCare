import { AiFillRightCircle } from 'react-icons/ai';
import PetCard from "./Cards/PetCard";

const breeds = [
    {
        name: "Golden Retriever",
        image: "src/assets/pets/golden-retriever.png",
        link: "/breeds/golden-retriever",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "Doberman",
        image: "src/assets/pets/doberman.png",
        link: "/breeds/doberman",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "Apso",
        image: "src/assets/pets/apso.png",
        link: "/breeds/apso",
        gender: "Female",
        age: "1 year",
    },
    {
        name: "Chihuahua",
        image: "src/assets/pets/chihuahua.png",
        link: "/breeds/chiuahua",
        gender: "Female",
        age: "1 year",
    },
    {
        name: "Japanese Spitz",
        image: "src/assets/pets/japanese-spitz.png",
        link: "/breeds/japanese-spitz",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "German Shepard",
        image: "src/assets/pets/german-shepard.png",
        link: "/breeds/german-shepherd",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "Husky",
        image: "src/assets/pets/husky.png",
        link: "/breeds/husky",
        gender: "Female",
        age: "3 months",
    },
    {
        name: "Pug",
        image: "src/assets/pets/pug.png",
        link: "/breeds/pug",
        gender: "Female",
        age: "4 months",
    },
];

export default function Breeds() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-x-20">
                <div className="mb-16">
                    <h2 className="text-5xl font-extrabold dark-blue-text mb-3">Our Pet Collections</h2>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>
                        &quot;Bring joy to your home with a furry companion from out pet selection.&quot;
                    </p>
                </div>
                {/* loop over all the breeds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {breeds.map((breed, index) => {
                        return (
                            <PetCard
                                key={index}
                                name={breed.name}
                                image={breed.image}
                                link={breed.link}
                                gender={breed.gender}
                                age={breed.age}
                            />
                        )
                    })}
                </div>
                <button
                    className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm"
                    onClick={() => window.location.href = '/breeds'}
                >
                    View All
                    <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                </button>
            </div>
        </>
    )
}