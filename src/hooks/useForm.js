import { useState } from 'react';

const useForm = (callback, initialData) => {
  const [values, setValues] = useState(initialData);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    callback(values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export { useForm };
