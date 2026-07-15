import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(`${email} : submitted`);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-xl p-20">
                <form onSubmit={(e)=>{
                    submitHandler(e);
                }} className="flex flex-col items-center justify-center">
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }} 
                    className="py-3 px-5 border-2 border-emerald-600 rounded-full text-xl text-white outline-none bg-transparent placeholder:text-gray-400" type="email" placeholder="acd@example.com" required
                    />

                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    className="mt-3 py-3 px-5 border-2 border-emerald-600 rounded-full text-xl text-white outline-none bg-transparent placeholder:text-gray-400" type="password" name="" id="" placeholder="Password" 
                    required
                    />
                    <button className="w-full mt-7 py-2 px-8 border-2 bg-emerald-600 rounded-full border-none text-xl text-white font-semibold outline-none placeholder:text-white">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
