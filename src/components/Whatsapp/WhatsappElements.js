import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(2px, 0); }
  50% { transform: translate(-2px, 0); }
  75% { transform: translate(2px, 0); }
  100% { transform: translate(0, 0); }
`;

export const WhatsappButton = styled.a`
    position: fixed;
    width: 80px;
    height: 80px;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
    z-index: 1000;
    
    transition: transform 0.2s;

    &:hover {
        animation: ${shake} 0.6s ease-in-out infinite;
    }
`