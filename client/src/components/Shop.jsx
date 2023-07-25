import { AiFillRightCircle } from 'react-icons/ai'

export default function Shop() {
    return (
        <>
            <div
                className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-y-5 lg:min-h-[328px] flex flex-col items-start text-white"
                style={{ backgroundImage: "url('../assets/shop.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '95%', height: '100%', borderRadius: 24 }}
            >
                <p className="font-semibold text-xl font-inter">One More Friend Thousands More Fun!</p>
                <p className="text-4xl font-black">&quot;Find your furry soulmate at Our Pet Shop.&quot;</p>
                <button
                    className="bg-white  text-amber-500 font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm"
                    onClick={() => window.location.href = '/shop'}
                >
                    Get Now
                    <AiFillRightCircle className="inline-block ml-5 text-2xl text-amber-500 " />
                </button>
            </div>
        </>
    )
}