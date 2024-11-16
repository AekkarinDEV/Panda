import { Link } from "react-router-dom"


function Signup() {
  return (
    <div className="bg-zinc-900 h-screen flex items-center justify-center">
      <div className="bg-zinc-800 h-fit w-[570px] rounded-lg px-20 pt-16">
            <h1 className="text-2xl font-semibold text-zinc-200 mb-3">
            Sign up
            </h1>
            <p className="font-normal pl-1 text-zinc-400 mb-6">
            By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
            </p>
            <form action="">
                <input type="text" className="login_input" placeholder="*Email"/>
                <input type="text" className="login_input" placeholder="*username"/>
                <input type="text" className="login_input" placeholder="*password"/>
                <input type="text" className="login_input" placeholder="*confirm password"/>
                <p className="inline-block mr-1 mb-4 pl-2">Already has account?</p>
                <Link to={"/log_in"}>log in</Link>
                <button type="submit" className="block w-full h-12 bg-zinc-700 rounded-3xl mb-6">sign up</button>

            </form>
     </div>
    </div>
  )
}

export default Signup