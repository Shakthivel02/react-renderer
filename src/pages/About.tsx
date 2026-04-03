import React from 'react';
import { Renderer } from '../renderer/Renderer';
import aboutSchema from '../schema/aboutSchema.json';
import type { SchemaNode } from '../types/schema';

const About: React.FC = () => {
  const schema = aboutSchema as SchemaNode;

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <Renderer node={schema} />
    </div>
  );
};

export default About;
