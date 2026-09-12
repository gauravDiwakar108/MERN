import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react';
import ResultCard from './ResultCard';

const ResultGrid = () => {

    const dispatch = useDispatch();

    const { query, activeTab, results, loading, error } = useSelector((store) => store.search);


    useEffect(() => {
        if (!query.trim()) return;
        const getData = async () => {

            try {
                dispatch(setLoading());
                let data;
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }));
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: new URL(item.url).pathname
                            .split("/")
                            .filter(Boolean)
                            .pop()
                            .replace(/-\d+$/, "")
                            .replace(/-/g, " "),
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }));
                }
                if (activeTab == 'gif') {
                    let response = await fetchGIF(query);
                    // console.log(response.data);
                    data = response.data.map((item) => ({
                        id: item.id,
                        type: "gif",
                        title: item.title,
                        thumbnail: item.images.downsized.url,
                        src: item.embed_url,
                        url: item.url
                    }));
                }
                dispatch(setResults(data));
            } catch (err) {
                dispatch(setError(err.message));
            }
        };
        getData();
    }, [query, activeTab, dispatch]);

    if (error) return <h1>Error</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <div className='flex justify-between flex-wrap gap-3 overflow-auto px-5'>
            {
                results.map((item, idx) => {
                    return <div key={idx}>
                        {/*  */}
                            <ResultCard item={item} />
                        {/* </a> */}
                    </div>
                })
            }
        </div>
    )
}

export default ResultGrid
