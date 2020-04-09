import React from 'react';
import WorldImage from '../images/world.png'

const TopHeader = () => {
    return (
        <>
            <div className="jumbotron-fluid" style={{ backgroundColor: '#e9ecef', paddingBottom: '2rem', marginBottom: '1.5rem' }}>
                <div className="container">
                    <h1 className="display-5" style={{ textAlign: 'center' }}><img src={WorldImage} alt="World Image" /> World News</h1>
                    <div style={{ fontSize: '1.25rem', fontWeight: '300', textAlign: 'center' }}>Get breaking news headlines, and search for articles from over 30,000 news sources and blogs</div>
                </div>
            </div>

        </>
    )
}

export default TopHeader;
