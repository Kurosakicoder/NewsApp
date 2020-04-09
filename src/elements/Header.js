import React from 'react';
import { Link } from '@reach/router'
import NewsLogo from '../images/newslogo.png'
import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styles/StyledHeader';

const Header = ({ children }) => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={NewsLogo} alt="newsthumb" />
            </Link>
            {/* <StyledTMDBLogo>
                <h2>Powered by NewsAPI.org</h2>
            </StyledTMDBLogo> */}
        </div>
    </StyledHeader>
)

export default Header