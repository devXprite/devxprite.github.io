import Link from 'next/link';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-md rounded-lg bg-gray-800 p-8 shadow-lg shadow-black/50">
                <h3 className="text-2xl font-semibold md:text-3xl">Get In Touch</h3>

                <div className="mt-2 flex items-center gap-5">
                    <p className="text-base text-gray-300 md:text-lg">
                        I'm open to hearing about new opportunities and collaborations. Feel free to ask your doubts,
                        questions, or just say hi.
                    </p>

                    <Link href={'/contact'} className="btn h-min whitespace-nowrap bg-gray-200 text-gray-950">
                        <span>Contact Me</span>
                        <FaPaperPlane className="animate" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;
