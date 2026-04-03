import React from 'react';
import { Renderer } from '../renderer/Renderer';
import schemaData from '../schema/schema.json';
import type { SchemaNode } from '../types/schema';

const Home: React.FC = () => {
  const schema = schemaData as SchemaNode;

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <Renderer node={schema} />
    </div>
  );
};

export default Home;
