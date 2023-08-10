import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {LoginDta} from '../types/InterfaceLogin.ts'
const Login:React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset} = useForm<LoginDta>();

    const REGX_EMAIL:RegExp = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleLogin:SubmitHandler<LoginDta> = (data:LoginDta) => {
        console.log(data)
        reset()
    }
    return (
        <div className="container h-full p-28">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl">Inicia sesion</h1>
                <form className="flex flex-col gap-3 w-1/2 px-20 p-16 bg-dark-blue rounded-xl" onSubmit={handleSubmit(handleLogin)}>
                    <div className="flex flex-col">
                        <label className="text-white">Ingresa el correo</label>
                        <input
                            className="h-10 bg-purple rounded-xl"
                            {...register("email", {required:true, pattern: REGX_EMAIL})}
                            type="text"
                            placeholder="Email"
                        />
                        {
                            errors.email?.type === 'required' ? <span className="text-red font-bold">*Requerido</span>:
                                errors.email?.type === 'pattern' &&<span className="text-red font-bold">No coincide con un email</span>
                        }
                    </div>
                    <div  className="flex flex-col">
                        <label className="text-white">Contraseña</label>
                        <input
                            className="h-10 bg-purple rounded-xl"
                            {...register("password", {required: true})}
                            type="password"
                            placeholder="password"
                        />
                        {
                            errors.password?.type === 'required' && <span className="text-red font-bold">*Requerido</span>
                        }
                    </div>
                    <button
                        type="submit"
                        className="bg-purple h-10 rounded-xl mt-5 text-white hover:bg-dark-blue border">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export {Login};