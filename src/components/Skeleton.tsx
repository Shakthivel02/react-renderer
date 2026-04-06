import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 6px;
`;

export const TableSkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px 0;
`;

export const SkeletonRow = styled(SkeletonBase)`
  height: 44px;
  width: 100%;
`;

export const SkeletonHeader = styled(SkeletonBase)`
  height: 44px;
  width: 100%;
  margin-bottom: 4px;
  opacity: 0.7;
`;
