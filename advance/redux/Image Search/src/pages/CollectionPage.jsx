import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from "../redux/features/collectionSlice";


const CollectionPage = () => {
  const dispatch = useDispatch();

  const collection = useSelector(state => state.collection.items);

  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (
    <div className="overflow-auto px-10 py-6">
      {collection.length > 0 ?
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-medium">
            Your Collection
          </h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-3 py-1 text-base font-normal rounded">Clear Collection</button>
        </div >
        : <h2 className="text-5xl text-center text-gray-300 font-medium">
          Collection is Empty
        </h2>}

      <div div className='flex justify-start flex-wrap gap-6 w-full' >
        {
          collection.map((item, idx) => {
            return <div key={idx}>
              <CollectionCard item={item} />
            </div>
          })
        }
      </div >
    </div >
  )
}

export default CollectionPage

// video -> 4:40:00