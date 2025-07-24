import styled from "styled-components";

export const ProductsContainer = styled.div`
    max-width: 1800px;
    margin: 1rem auto;
    padding: 1rem 0;
`

export const ProductsWrapper = styled.div`
    margin: auto;
    max-width: 1200px;
`

export const ProductsTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

export const ProductsListContainer = styled.div`
    border-radius: 1.5rem;
    margin-top: 1rem;
    padding: 2rem;
`

export const ProductsList = styled.div`
    padding: 1rem;
`

export const ProductsData = styled.div`
    border-radius: 0.5rem;
    min-height: 5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

    padding: 1rem;

    border-radius: 1rem;
`

export const ProductsImg = styled.div`
  height: 250px;
  background-origin: content-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url('${props => props.$src}');
`

export const ProductsName = styled.div`
    font-weight: bold;
    font-size: 1.25rem;

    text-align: center;
    margin-top: .5rem;
`

export const ProductsCategoryContainer = styled.div`
    border-radius: 1.5rem;
    margin-top: 1rem;
    padding: 2rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 1rem;
    }
`

export const ProductsCategoryList = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  display: flex;

  border-bottom: 1rem;
  scroll-behavior: smooth;

    @media screen and (max-width: 768px) {
        border-bottom: .2rem solid #ccc;
    }
`

export const ProductsCategoryData = styled.div`
    width: 23%;
    margin: 1%;
    border-radius: 0.5rem;
    min-height: 5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

    padding: 1rem;

    border-radius: 1rem;

    cursor: pointer;
    
    @media screen and (max-width: 768px) {
        min-width: 40vw;
        min-height: 5.5rem;
        margin: 1%;
    }
        
    @media screen and (max-width: 608px) {
        min-width: 60vw;
        min-height: 5.5rem;
    }


    &.active {
        background-color: #8C2C6C;
        color: white;
    }
`

export const ProductShowcaseContainer = styled.div`
    background-color: rgba(235, 210, 229, 0.3);
`