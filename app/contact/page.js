import Input from '@/components/UI/Input';
import { FaPaperPlane } from 'react-icons/fa';

const inputFields = [
    {
        name: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
    },
    {
        name: 'subject',
        label: 'Subject',
        placeholder: 'Enter your subject',
    },
    {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Enter your message',
    },
];

const page = () => {
    return (
        <main>
            <h1>Contact Me</h1>
            <h3>Want to connect? My inbox is always open!</h3>

            <section>
                <form action="" className="mx-auto flex w-full max-w-screen-sm flex-col gap-5">
                    {inputFields.map(Input)}

                    <button type="submit" className="btn-gradient w-max ml-auto mt-6">
                        <span>Send Message</span>
                        <FaPaperPlane className='animate' />
                    </button>
                </form>
            </section>
        </main>
    );
};

export default page;
