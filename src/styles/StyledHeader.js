import styled from 'styled-components';

export const StyledHeader = styled.div`
    background: rgba(0,0,0,0.3);
    //padding: 0 2px; 
    box-sizing: border-box;
    height: 105px;

    .header-content {
        max-width: 1280px;
        min-height: 120px;
       // padding: 20px 0px;
        margin: 0 auto;
        box-sizing: border-box;
    
    @media screen and (max-width: 500px){
        max-width: 1280px;
        min-height: 0px;
    }
}
`
export const StyledRMDBLogo = styled.img`
    width: 250px;
    // margin-top: 20px;
    height: 104px;

    @media screen and (max-width: 500px){
        width: 150px;
        //margin-top: 5px;
    }
`;

export const StyledTMDBLogo = styled.h2`
    width: 300px;
   //margin-top: 25px;
    float: right;
    font-size: 10px;
    height: 60px;

    @media screen and (max-width: 500px){
        display: inline-block;
        width: 80px;
        //margin-top: 0px;
    }
`
