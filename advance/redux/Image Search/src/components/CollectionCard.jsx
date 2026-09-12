import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {

    const dispatch = useDispatch();

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id));
        dispatch(removeToast())
    }

    return (
        <div className='w-[18vw] h-70 relative bg-violet-500 rounded-xl overflow-hidden'>
            <a href={item.url} target='_blank' className='h-full'>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.thumbnail} /> : ''}
            </a>
            <div id="bottom" className='w-full py-5 px-4 absolute bottom-0 text-white flex justify-between items-center gap-3'>
                <h2 className='text-lg h-14 overflow-hidden font-semibold capitalize'>{item.title}</h2>
                <button onClick={() => {
                    removeFromCollection(item);
                    console.log('removed');
                }}
                    className='bg-indigo-600 text-white rounded px-3 py-1 text-sm cursor-pointer active:scale-90'>Remove</button>
            </div>
        </div>
    )
}

export default CollectionCard
