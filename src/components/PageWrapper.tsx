import React from 'react';
import styled from 'styled-components';
import { StyledPageContainer, fadeIn } from '../styles/styledComponents';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageEntryAnimation = styled.div`
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <PageEntryAnimation>
      <StyledPageContainer>
        {children}
      </StyledPageContainer>
    </PageEntryAnimation>
  );
};

export default PageWrapper;
