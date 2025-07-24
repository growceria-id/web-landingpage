import styled from "styled-components";

export const HeadlineContainer = styled.div`
    max-width: 1800px;
    margin:auto;
    background: linear-gradient(
    rgba(235, 210, 229, 0.8),
    rgba(247, 231, 242, 0.8)
    ), url(${props => props.$image}) center/cover no-repeat;
    padding: 10rem 3rem;
    border-radius: 10px;
    background-size: cover;
`

export const HeadlineWrapper = styled.div`
    max-width: 1200px;
    margin: auto;
`

export const HeadlineTexts = styled.div`
    max-width: 650px;

    margin-left: ${({ alignRight }) => (alignRight ? 'auto' : '0')};
    text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};

`

export const HeadlineTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #701A53;
    margin-bottom: 1rem;
`

export const HeadlineDescription = styled.div`
    font-size: 1rem;
    font-weight: bold;
`

export const HeadlineButton = styled.a`
    background-color: #8C2C6C;

    padding: .5rem 1.5rem;
    width: auto;
    border-radius: .75rem;
    margin-top: 1rem;
    display: inline-block;

    color: #FFFFFF;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        background-color:rgb(196, 114, 150);
    }
`