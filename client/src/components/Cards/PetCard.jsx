// this is a component to render card from the props of the pet

export default function PetCard({ name, image, link, gender, age }) {
    return (
        <>
            <div className="flex flex-col border border-dotted rounded-3xl p-2 pb-5">
                <div className="mb-3">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col pl-2">
                    <h3 className="font-extrabold text-left">{name}</h3>
                    <div className="flex flex-row space-x-5">
                        <div>Gender: <span className="font-bold">{gender}</span></div>
                        <div>Age: <span className="font-bold">{age}</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
