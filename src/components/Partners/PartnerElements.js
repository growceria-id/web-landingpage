import styled from "styled-components";

export const PartnersContainer = styled.div`
    max-width: 1800px;
    margin: 3rem auto 0 auto;
    padding: 3rem 0;
    background-color: rgba(166, 0, 110, 0.3);
`

export const PartnersWrapper = styled.div`
    margin: auto;
    max-width: 1200px;
    padding: 1.5rem;
`

export const PartnersTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
`

export const PartnersListContainer = styled.div`
    background-color: #FFF;
    border-radius: 1.5rem;
    margin-top: 1rem;
    padding: 2rem;
`

export const PartnersList = styled.div`
    
`

export const PartnersLogo = styled.div`
  height: 200px;
  background-image: url(${props => props.$src});
  background-origin: content-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  
  width: 25%;
  padding: 1rem;
`