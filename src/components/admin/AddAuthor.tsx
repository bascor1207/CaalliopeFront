import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FormError } from '../forms/FormError';

export const AddAuthor = () => {
  const { register, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (author) => {
    /*adminService.createAuthor(author).then((a: any) => {
      console.log('Author created', a);
      back();
    }).catch((err: any) => {
      setErrorMessage(err.message || 'Unknown error detected');
    });*/
  };

  const back = () => {
    navigate('..');
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {errorMessage && (
        <div className="form-error">
          {errorMessage}
        </div>
      )}
      <div className="form-field">
        <label htmlFor="firstName">First name</label>
        <input id="firstName" {...register('firstName', { required: true, minLength: 2 })} />
        <FormError error={errors.firstName} />
      </div>
      <div className="form-field">
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" {...register('lastName', { required: true, minLength: 2 })} />
        <FormError error={errors.lastName} />
    </div>
      <div className="form-commands">
        <button className="btn" type="button" onClick={back}>
          Cancel
        </button>
        <button className="btn primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};
