import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 105px;
  background: #fff;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: '#000';
`;

export const StyledSearchBarContent = styled.div`
  max-width: 600px;
  width: 100%;
  height: 55px;
  background: rgb(0,0,0,0.1);
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #000;
  border-color: #000;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #000;
    z-index: 1000;
  }

  input {
    font-family: 'Abel', sans-serif;
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #000;
    box-sizing: border-box;
    border-color: #000;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
