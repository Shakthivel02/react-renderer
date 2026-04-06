import React, { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm } from '../styles/styledComponents';
import type { FormSchema } from '../types/schema';
import { addEntity, showToast } from '../redux/appReducer/action';
import { Renderer } from '../renderer/Renderer';

interface FormContextProps {
  state: Record<string, any>;
  isSubmitting: boolean;
  handleChange: (name: string, value: any) => void;
  handleSubmit: () => void;
}

export const FormContext = createContext<FormContextProps | null>(null);

export const Form: React.FC<{ schema: FormSchema }> = ({ schema }) => {
  const [formState, setFormState] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (name: string, value: any) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (schema.entityKey) {
      setIsSubmitting(true);

      dispatch(addEntity({ key: schema.entityKey, item: formState }));
      dispatch(showToast({ message: 'Added successfully!', type: 'success' }));

      setFormState({});
      setIsSubmitting(false);
    } else {
      console.warn("Form submitted but no entityKey provided in schema");
    }
  };


  return (
    <FormContext.Provider value={{ state: formState, isSubmitting, handleChange, handleSubmit }}>
      <StyledForm onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {schema.children?.map((child, index) => (
          <Renderer key={index} node={child} />
        ))}
      </StyledForm>
    </FormContext.Provider>
  );
};
