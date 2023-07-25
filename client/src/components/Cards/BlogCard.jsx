export default function BlogCard({ title, content, image, link }) {
    return (
        <>
            <div className="flex flex-col rounded-3xl p-2 pb-5 text-left">
                <div className="mb-3">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col pl-2">
                    <h3 className="font-extrabold text-left font-helvetica text-lg">{title}</h3>
                    <p className="font-normal mt-2">
                        {content}
                    </p>
                    <a href={link}><button
                        className="my-10 bg-blue-950 hover:bg-blue-800 text-white font-semibold p-3 rounded-lg w-fit font-inter text-sm"
                    >
                        View Details
                    </button>
                    </a>
                </div>
            </div>
        </>
    )
}