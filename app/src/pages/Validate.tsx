import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

function Validate() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="text" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <label>Password</label>
      <input type="password" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Validate;