import React, {useEffect, useState} from 'react';
import {Inertia} from "@inertiajs/inertia";
import {usePrevious} from "@material-tailwind/react";

const SearchInput = ({width, icon, placeHolder, id, type, name, error}) => {
    const [value, setValue] = useState('');

    const prevValues = usePrevious(value);

    function handleChange(e) {
        setValue(e.target.value)
    }



    useEffect(() => {
        if (prevValues) {
            Inertia.get(window.location.href, {
                'search':value
            }, {
                replace: true,
                preserveState: true
            });
        }

    }, [value]);

    return (<div className='mb-[12px]'>
        <div className="relative">
            {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
         </span>}
            <input
                type={type}
                id={id}
                value={value ?? ''}
                placeholder={placeHolder}
                className={`${width ?? 'w-[520px]'} ${icon ? 'pl-10' : ""} p-3 rounded-[12px] border focus:border-primary outline-none ${error ? 'border-red-500' : ''}`}
                value={value}
                name={name}
                onChange={handleChange}
            />
        </div>


        {error && <p className='text-red-500 mx-2'>{error}</p>}
    </div>);
};

export default SearchInput;

