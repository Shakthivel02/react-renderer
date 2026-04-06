import React from 'react';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';
import { Typography } from '../components/Typography';
import { Table } from '../components/Table';
import type { ComponentType } from '../types/schema';

import { Select } from '../components/Select';
import { FileUpload } from '../components/FileUpload';
import { Checkbox } from '../components/Checkbox';

export const Registry: Record<ComponentType, React.FC<{ schema: any }>> = {
  form: Form,
  input: Input,
  button: Button,
  grid: Grid,
  card: Card,
  typography: Typography,
  table: Table,
  select: Select,
  fileUpload: FileUpload,
  checkbox: Checkbox
};
