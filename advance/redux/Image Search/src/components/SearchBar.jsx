import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';


// video 2:20:30

const SearchBar = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e);
                dispatch(setQuery(text));
                setText('');
            }}
                className='flex p-10 gap-5 px-10 bg-(--c1)'>
                <input value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    className='border-2 px-4 py-2 text-xl rounded outline-none w-full'
                    required
                    type="text" placeholder='Search anything...' />
                <button className='px-4 py-2 text-xl rounded outline-none bg-(--c3) cursor-pointer active:scale-97'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
