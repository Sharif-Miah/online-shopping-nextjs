const LoginForm = () => {
  return (
    <form className='login-form'>
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

      <button
        type='submit'
        className='btn-primary font-bold rounded py-2 text-white w-full mt-4 bg-[#1455ac] hover:bg-[#1b529a]'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
