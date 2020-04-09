import React from 'react';
import { Link } from '@reach/router'

const NewsThumb = ({ image, newsName, newsId, clickable, desc, date, url }) => (

    <>
        <div className="col-sm">
            <div class="card" style={{ width: '19rem' }}>
                <img src={image} className="card-img-top" alt="newsthumb" />
                <div className="card-body">
                    <h5 className="card-title" style={{ color: 'black' }}>{newsName}</h5>
                    <p className="card-text" style={{ color: 'black' }}>{desc}<p className="text-muted"><a href={url} target="_blank"> Read More</a></p></p>
                    <p className="card-text"><small className="text-muted">Published Date: {date.slice(0, 10)}</small></p>
                </div>
            </div>
            <br></br>
        </div>
    </>

)

export default NewsThumb