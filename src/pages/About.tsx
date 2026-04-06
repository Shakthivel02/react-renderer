import React from 'react';
import { Renderer } from '../renderer/Renderer';
import aboutSchema from '../schema/aboutSchema.json';
import type { SchemaNode } from '../types/schema';

import { PageWrapper } from '../components/PageWrapper';

const About: React.FC = () => {
  const schema = aboutSchema as SchemaNode;

  return (
    <PageWrapper>
      <Renderer node={schema} />
    </PageWrapper>
  );
};

export default About;
