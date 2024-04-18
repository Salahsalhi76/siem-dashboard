import React, {useState} from 'react';

const PasswordInput = ({label, placeHolder, id, error,value, name = 'password', onChange}) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='mb-[12px]'>
            <p className='font-light text-base mb-2'>{label}</p>
            <input
                type={visible ? 'text' : 'password'}
                id={id}
                value={value ?? ''}
                placeholder={placeHolder}
                className={`w-[520px] p-3 rounded-[12px] border   focus:border-primary  outline-none ${error?'border-red-500':''}`}
                name={name}
                onChange={onChange}
            />
            {error &&
                <p className='text-red-500 mx-2'>{error}</p>
            }
        </div>
    );
};

export default PasswordInput;
