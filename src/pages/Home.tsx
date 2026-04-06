import React from 'react';
import { Renderer } from '../renderer/Renderer';
import schemaData from '../schema/schema.json';
import type { SchemaNode } from '../types/schema';
import { PageWrapper } from '../components/PageWrapper';

const Home: React.FC = () => {
  const schema = schemaData as SchemaNode;

  return (
    <PageWrapper>
      <Renderer node={schema} />
    </PageWrapper>
  );
};

export default Home;
