export type ComponentType = 'form' | 'input' | 'button' | 'grid' | 'card' | 'typography' | 'table';

export interface BaseSchemaNode {
  type: ComponentType;
  [key: string]: any;
}

export interface TypographySchema extends BaseSchemaNode {
  type: 'typography';
  text: string;
  variant?: 'h1' | 'h2' | 'title' | 'body' | 'secondary';
}

export interface CardSchema extends BaseSchemaNode {
  type: 'card';
  children?: SchemaNode[];
}

export interface TableColumnSchema {
  header: string;
  accessor: string;
}

export interface TableSchema extends BaseSchemaNode {
  type: 'table';
  entityKey: string;
  columns: TableColumnSchema[];
  actions?: Array<{ type: 'delete' | 'edit'; label: string }>;
}

export interface FormSchema extends BaseSchemaNode {
  type: 'form';
  entityKey?: string;
  children?: SchemaNode[];
}

export interface GridSchema extends BaseSchemaNode {
  type: 'grid';
  columns: number;
  children?: SchemaNode[];
}

export interface InputSchema extends BaseSchemaNode {
  type: 'input';
  name: string;
  label: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface ButtonSchema extends BaseSchemaNode {
  type: 'button';
  text: string;
  variant?: string;
  action?: 'submitForm' | string;
}

export type SchemaNode = FormSchema | GridSchema | InputSchema | ButtonSchema | CardSchema | TypographySchema | TableSchema;
