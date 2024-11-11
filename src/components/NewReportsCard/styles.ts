import styled from "styled-components";

export const StyledButton = styled.button`
  align-items: center;
  background: #000;
  border-radius: 4px;
  border: none;
  color: var(--white);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  padding: 0.5rem 1rem;
  position: relative;
  transition: color 0.3s ease;
  width: 80%;
  z-index: 1;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 4px;
    background-color: var(--white);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #000;
  }

  &:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }

  &:active {
    top: 2px;
  }

  svg {
    display: inline-block;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`;

export const CadContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 21rem;
  height: 14rem;
  align-items: center;
  flex-direction: column;
  background-color: var(--purple);
  border-radius: 0.25rem;
`;

export const CardDescriptions = styled.p`
  color: var(--black);
  font-family: var(--font-public-sans);
  font-weight: 700;
  text-align: center;
`;
