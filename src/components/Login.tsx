import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import useAPI from '../hooks/useAPI';

const Login: FC = () => {
  const { getUser } = useAPI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="grid grid-cols-2 items-center h-full w-full">

    
      
        <div className="justify-self-center max-w-md">
        <div className="flex align-start">
          <h1 className="text-4xl text-black-600">VINCI</h1><span className="text-xs text-violet-600 mt-1 ml-0.5">BETA</span>
        </div>
        <form
          className="flex flex-col mt-12 space-y-6 "
          onSubmit={async (e) => {
            e.preventDefault();

            toast('Sign in successful 😁', { type: 'success' });
            // toast('I am incomplete 😢', { type: 'error' });
          }}
        >
          <input
            type="email"
            className="mt-2 text-black rounded relative border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-lg"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Enter your email"
          />
          {/* <input id="email-address" name="email" type="email" className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"></input> */}
          <input
            type="password"
            className="mt-2 text-black relative rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-lg"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Enter your password"
          />
          <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label htmlFor="remember-me" className="ml-1 block text-sm">Remember me</label>
          </div>

          <div className="text-sm">
            <a href="#" className="text-sm hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
          <input className="mt-2 hover:bg-white/20 cursor-pointer rounded bg-violet-600 text-lg py-2 text-white" type="submit" value="Continue"/>
        </form>
        <div className="h-px bg-black"> </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <label htmlFor="remember-me" className="ml-2 block text-lg text-gray-900">Don't have an account?</label>
          </div>

          <div className="text-sm">
            <a href="#" className="text-lg text-indigo-600 hover:text-indigo-500">Sign in</a>
          </div>
        </div>
        </div>
        <div className="bg-white justify-self-center h-full w-full">
        <img src="../../image_geometric.png" alt="3D geometric shapes" />
      </div>
        </div>
  );
};

export default Login;
