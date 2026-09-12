import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {

    const tabs = ['photos', 'gif', 'videos'];

    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.search.activeTab);

    return (
        <div className='flex gap-5 p-10'>
            {
                tabs.map((e, idx) => {
                    return (
                        <button
                            className={`${(activeTab == e ? 'bg-blue-700' : 'bg-gray-500')} px-5 py-2 rounded uppercase cursor-pointer active:scale-95`}
                            key={idx}
                            onClick={() => {
                                dispatch(setActiveTabs(e));
                            }}
                        >
                            {e}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Tabs
