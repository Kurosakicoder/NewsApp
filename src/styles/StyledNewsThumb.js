import styled from 'styled-components';

export const StyledNewsThumb = styled.div`
p{
    width: 16rem;
    text-align: left;
    font-size: 14px;
}
.card-img, .card-img-top {
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);

    :hover {
        opcaity: 0.8;
    }

    .clickable {
        cursor: pointer;
    }
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.col-sm {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}
*, ::after, ::before {
    box-sizing: border-box;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}
.card {
    position: relative;
    display: -ms-flexbox;
   
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
    // img {
    //     width: 18rem;
    //     height: auto;
    //     transition: all 0.3s;
    //     object-fit: cover;
    //     border-radius: .25rem;
    
    // :hover {
    //     opcaity: 0.8;
    // }

    // .clickable {
    //     cursor: pointer;
    // }  
// }  
`