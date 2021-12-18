import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function CreatePost() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isMsg, setMsg] = useState();

  const onSubmit = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch('https://my-worker.samf23987423.workers.dev', requestOptions)
      .then(response => response.json())
      .then(data => setMsg(data.msg));
  };


  return (
    <div className="create-post-container">
      <h3>Join the conversation...</h3>
      {isMsg && <h4 className='postjob-msg'>{isMsg}</h4>}
      <div className='create-post-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder='Post Title' {...register('postTitle', { required: 'This is required' })} />
          {errors.postTitle && <p className='invalid-input'>{errors.postTitle.message}</p>}
          <input type='text' placeholder='Name' {...register('name', { required: 'This is required', maxLength: { value: 20, message: 'Less than 20 characters!' } })} />
          {errors.name && <p className='invalid-input'>{errors.name.message}</p>}
          <textarea type="text" placeholder="Post description, max 250 characters!" {...register('description', { required: "This is required!", maxLength: { value: 250, message: "Max length 250 characters!" } })}>
          </textarea>
          {errors.description && <p className='invalid-input'>{errors.description.message}</p>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default CreatePost;