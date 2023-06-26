import { FC, Suspense, useEffect, useState } from 'react';
import { Await, Link, useLoaderData, defer } from 'react-router-dom';
import getCardsData from '../../service/getCardsData';
import Loader from '../Loader/Loader';
import './Gallery.css';

export interface ICard {
    id: number,
    totem: string,
    letter: string,
    meaning: string,
    element: string,
    symbols: string,
    description: string
}

const Gallery: FC = () => {
    const { posts }: any = useLoaderData();

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [loading, setLoading] = useState(true);
    const onImgLoad = () => setImagesLoaded(prev => prev + 1);

    // eslint-disable-next-line
    useEffect(() => { if (imagesLoaded === 22) setLoading(false); }, [imagesLoaded]);

    return (
        <>
            {loading && <Loader />}
            <Suspense fallback={<h1>123123</h1>}>
                <div className="gallery-container">
                    <Await resolve={posts}>
                        {
                            (resolvedPosts) => (<>
                                {resolvedPosts.allSettled((card: ICard) => (
                                    <Link key={card.id} style={{ display: 'contents' }} to={`card/${card.id}`}>
                                        <img
                                            className="gallery-item"
                                            src={require(`../../assets/img/${card.id}.webp`)}
                                            alt={`${card.totem}`}
                                            onLoad={onImgLoad} />
                                    </Link>
                                ))
                                }
                            </>)
                        }
                    </Await>
                </div>
            </Suspense>
        </>
    );
};

export const cardLoader = async () => {

    return defer({
        posts: getCardsData()
    })
}


export default Gallery;