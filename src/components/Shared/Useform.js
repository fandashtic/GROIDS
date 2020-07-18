import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});
  const [form,setForm] = useState(false)

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };
  const handleToChangeFrom = (event) =>{
    event.persist();
    setForm(!form)
  }


  return {
    handleChange,
    handleSubmit,
    values,
    form,
    handleToChangeFrom
  }
};


export default useForm;