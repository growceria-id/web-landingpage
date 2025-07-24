import styled from "styled-components";

export const BannerContainer = styled.div`
    max-width: 1800px;
    min-height: 300px;
    
    display: flex;
    justify-content: center; /* horizontal center */
    align-items: center;     /* vertical center */
    margin:auto;
    
  
  background: ${({ $gradient, $background }) =>
    `linear-gradient(${ $gradient }), url(${$background})`};
  background-size: cover;
`;

export const BannerWrapper = styled.div`
    max-width: 1024px;
    padding: 2rem;
    margin: auto;

    font-weight: bold;
    text-align: center;
`

export const BannerTitle = styled.div`
    font-size: 2rem;
    margin-bottom: 2rem;
`

export const BannerDescription = styled.div`
    margin-bottom: 2rem;

    ul {
        list-style-type: disc;
        list-style-position: inside; /* bullets align with text */
        padding-left: 0;              /* no indent */
    }

    li {
        margin-bottom: 0.5rem;
    }
`
