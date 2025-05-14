const RegisterForm = () => {
  return (
    <form className='login-form'>
      <div>
        <label htmlFor='name'>Full Name</label>
        <input
          type='text'
          name='name'
          id='name'
        />
      </div>

      <div>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          name='email'
          id='email'
        />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
        />
      </div>

      <div>
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          name='phone'
          id='phone'
        />
      </div>

      <div>
        <label htmlFor='bio'>Bio</label>
        <input
          className='min-h-16'
          type='text'
          name='bio'
          id='bio'
        />
      </div>

      <button
        type='submit'
        className='btn-primary font-bold rounded py-2 text-white w-full mt-4 bg-[#1455ac] hover:bg-[#1b529a]'>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
