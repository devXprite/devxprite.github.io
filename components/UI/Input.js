import React from 'react';

const Input = ({ label, name, placeholder, type = 'text', ...props }) => {
    const InputEl = () => {
        const className = 'bg-transparent md:py-1 text-base outline-none md:text-lg w-full';

        if (type === 'textarea') {
            return (
                <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className={className}
                    rows={4}
                    {...props}
                ></textarea>
            );
        }

        return <input type={type} name={name} id={name} className={className} {...props} />;
    };

    return (
        <div className="group inline-block rounded-md border border-gray-600 bg-gray-800 px-3 py-2 focus-within:border-2 focus-within:border-primary-500">
            <label
                htmlFor={name}
                className="block text-sm font-semibold text-gray-300 group-focus-within:text-primary-500 "
            >
                {label}
            </label>
            <InputEl />
        </div>
    );
};

export default Input;
