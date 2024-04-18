import React from 'react';

const AppInput = ({width, label, icon, placeHolder, value, id, type, name, onChange, error}) => {
    return (<div className='mb-[12px]'>
        <p className='font-light text-base mb-2'>{label}</p>
        <div className="relative">
            {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      {icon}
    </span>}
            <input
                type={type}
                id={id}
                value={value ?? ''}
                placeholder={placeHolder??label}
                className={`${width ?? 'w-[520px]'} ${icon? 'pl-10' : ""} p-3 rounded-[12px] border focus:border-primary outline-none ${error ? 'border-red-500' : ''}`}
                name={name}
                onChange={onChange}
            />
        </div>


        {error && <p className='text-red-500 mx-2'>{error}</p>}
    </div>);
};

export default AppInput;

