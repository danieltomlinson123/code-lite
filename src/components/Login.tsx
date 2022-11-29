import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import useAPI from '../hooks/useAPI';

const Login: FC = () => {
  const { getUser } = useAPI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="grid grid-cols-2 items-center h-full w-full">

        <div className="justify-self-center w-full max-w-sm flex flex-col">
        <div className="flex align-start justify-center">
          <h1 className="text-4xl text-black-600 font-semibold">VINCI</h1><span className="text-xs text-vinci-light mt-1 ml-0.5 font-semibold">BETA</span>
        </div>
        <form
          className="flex flex-col mt-12"
          onSubmit={async (e) => {
            e.preventDefault();

            toast('Sign in successful 😁', { type: 'success' });
            // toast('I am incomplete 😢', { type: 'error' });
          }}
        >
          <input
            type="email"
            className="text-black rounded-lg relative border border-stone-300 px-5 py-4 text-stone-900 placeholder-stone-400 focus:z-10 focus:border-vinci focus:outline-none focus:ring-vinci text-lg"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Enter your email"
          />
          {/* <input id="email-address" name="email" type="email" className="relative block w-full appearance-none rounded-none rounded-t-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-500 focus:z-10 focus:border-vinci focus:outline-none focus:ring-vinci sm:text-sm" placeholder="Email address"></input> */}
          <input
            type="password"
            className="mt-4 text-black relative rounded-lg border border-stone-300 px-5 py-4 text-stone-900 placeholder-stone-400 focus:z-10 focus:border-vinci focus:outline-none focus:ring-vinci text-lg"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Enter your password"
          />
          <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg py-4 border-stone-300 text-vinci focus:ring-vinci-light" />
            <label htmlFor="remember-me" className="ml-1 block text-sm">Remember me</label>
          </div>

          <div className="text-sm">
            <a href="#" className="text-sm hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        {/* this margin top is not changing */}
          <input className="mt-6 hover:bg-white/20 cursor-pointer rounded-lg bg-vinci hover:bg-vinci-hover text-lg py-4 text-white font-semibold" type="submit" value="Continue"/>
        </form>
        <div className="h-px bg-stone-300 mt-8"> </div>
        <div className="flex items-center justify-center mt-3">
          <div className="flex items-center">
            <div className="ml-2 block text-lg text-stone-400">Don't have an account?</div>
          </div>

          <div className="text-sm">
            <a href="#" className="text-lg text-violet-600 hover:text-violet-500 ml-1">Sign up</a>
          </div>
        </div>
        </div>
        <div className="bg-white justify-self-center w-full h-fit">
        <img src="../../image_geometric.png" alt="3D geometric shapes" className="max-w-none"/>
      </div>
        </div>
  );
};

export default Login;
