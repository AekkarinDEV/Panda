import { Link } from "react-router-dom"


function Login() {
  return (
    <div className="bg-zinc-900 h-screen flex items-center justify-center">
      <div className="bg-zinc-800 h-fit w-[570px] rounded-lg px-20 pt-16">
        <h1 className="text-2xl font-semibold text-zinc-200 mb-3">
          Log in
        </h1>
        <p className="font-normal pl-1 text-zinc-400">
           By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
        </p>
        <form action="" className=" pt-6">
          <input type="text" name="user_login_name" className="login_input w-full mb-6" placeholder="username"/>
          <input type="text" name="user_login_password"  className="login_input w-full mb-6" placeholder="password"/>
          <a href="" className="block text-zinc-400">Forgot password?</a>
          <p className="inline text-zinc-400 mr-1">New to Panda?</p>
          <Link to={"/sign_up"} className="inline text-zinc-400">Sign up</Link>
          <button type="submit" className="block w-full bg-zinc-700 h-12 rounded-3xl font-bold mt-6 mb-12">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login