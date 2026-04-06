export type ComponentType = 'form' | 'input' | 'button' | 'grid' | 'card' | 'typography' | 'table' | 'select' | 'fileUpload' | 'checkbox';

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
  apiEndpoint?: string;
  actions?: Array<{ type: 'delete' | 'edit'; label: string }>;
  pagination?: { pageSize: number };
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
  placeholder?: string;
  variant?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface ButtonSchema extends BaseSchemaNode {
  type: 'button';
  text: string;
  variant?: string;
  action?: 'submitForm' | string;
}

export interface SelectSchema extends BaseSchemaNode {
  type: 'select';
  name: string;
  label: string;
  options: Array<{ label: string; value: string }>;
}

export interface FileUploadSchema extends BaseSchemaNode {
  type: 'fileUpload';
  name: string;
  label?: string;
  placeholder: string;
  helpText?: string;
}

export interface CheckboxSchema extends BaseSchemaNode {
  type: 'checkbox';
  name: string;
  label: string;
  variant?: 'switch' | 'default';
}

export type SchemaNode = FormSchema | GridSchema | InputSchema | ButtonSchema | CardSchema | TypographySchema | TableSchema | SelectSchema | FileUploadSchema | CheckboxSchema;
