import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const SummaryText = styled.p`
  color: var(--text_gray_secundary);
  font-family: var(--font-public-sans);
  font-size: var(--font-size-xxs);
  font-weight: 400;
  line-height: 1.028rem;
  margin-top: 0.5rem;
`;

export const SummaryTitle = styled.strong`
  font-family: var(--font-public-sans);
  font-size: var(--font-size-xl);
  color: var(--text-white);
  font-weight: 700;
`;