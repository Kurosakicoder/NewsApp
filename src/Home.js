import React, { useState, useEffect } from 'react';

import SearchBar from './elements/SearchBar';
import NewsThumb from './elements/NewsThumb';
import Spinner from './elements/Spinner';
import { useHomeFetch } from './hooks/useHomeFetch';
import Grid from './elements/Grid';
import NoImage from '../src/images/no_image.jpg'
import { API_KEY, TOP_NEWS, SEARCH_URL } from './config'

const Home = () => {

    const [{ state, loading, error }, fetchNews] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('')
    const searchNews = search => {
        const endpoint = search ? `${SEARCH_URL}${search}&language=en&apiKey=${API_KEY}` : `${TOP_NEWS}`
        setSearchTerm(endpoint)
        fetchNews(endpoint)
    }
    if (error) {
        return <div>Something went wrong..</div>
    }

    return (
        <React.Fragment>
            <SearchBar callback={searchNews} />
            <br></br>
            <Grid>
                {state.news.map(n => (
                    <NewsThumb
                        key={n.title}
                        image={n.urlToImage ? n.urlToImage : NoImage}
                        newsId={n.title}
                        newsName={n.title}
                        desc={n.content}
                        url={n.url}
                        date={n.publishedAt}
                    />
                ))
                }
            </Grid>
            {
                loading && <Spinner />
            }
        </React.Fragment>
    )

};


export default Home;