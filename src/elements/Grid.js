import React from 'react';
import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

const Grid = ({ children }) => (
    <StyledGrid>
        <div className="container">
            <div class="row">
                {children}
            </div>
        </div>
    </StyledGrid>
)

export default Grid