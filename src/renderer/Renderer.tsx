import React from 'react';
import { Registry } from './Registry';
import type { SchemaNode } from '../types/schema';
import { ErrorBox } from '../styles/styledComponents';

export const Renderer: React.FC<{ node: SchemaNode }> = ({ node }) => {
  if (!node || !node.type) {
    return <ErrorBox>Invalid schema node missing type.</ErrorBox>;
  }

  const Component = Registry[node.type];

  if (!Component) {
    console.warn(`Unknown component type: ${node.type}`);
    return <ErrorBox>Unknown component type: {node.type}</ErrorBox>;
  }

  return <Component schema={node} />;
};
