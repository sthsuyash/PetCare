import { AiFillRightCircle } from 'react-icons/ai'
import BlogCard from './Cards/BlogCard';

const blogs = [
    {
        'title': 'How to Choose the Right Bully Stick for Your Dog',
        'content': 'Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.',
        'image': './src/assets/blog/blog1.png',
        'link': '/blog/1',
    },
    {
        'title': 'Saving Lives: Animal House Shelter And Downtown Pet Supply',
        'content': 'Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.',
        'image': './src/assets/blog/blog2.png',
        'link': '/blog/2',
    },
    {
        'title': 'Himalayan Yak Chews: 11 Benefits You Need To Know',
        'content': 'Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.',
        'image': './src/assets/blog/blog3.png',
        'link': '/blog/3',
    },
];


export default function Blog() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-x-20">
                <div className="mb-16">
                    <h2 className="text-5xl font-extrabold dark-blue-text mb-3">Our Blogs</h2>
                </div>
                {/* loop over all the blogs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog, index) => {
                        return (
                            <BlogCard
                                key={index}
                                title={blog.title}
                                image={blog.image}
                                link={blog.link}
                                content={blog.content}
                            />
                        )
                    })}
                </div>
                <button
                    className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm"
                    onClick={() => window.location.href = '/blog'}
                >
                    View All
                    <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                </button>
            </div>
        </>
    )
}