import React, {ChangeEvent} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {FaCamera} from 'react-icons/fa';
import {Project} from '../types/InterfaceProject.ts';
const RegisterProject:React.FC = () => {

    const URL:RegExp = /^(https?|ftp):\/\/([^\s\/$?#].[^\s]*)*$/

    const {register,
        handleSubmit,
        formState:{errors}, reset} = useForm<Project>();

    const [file, setFile] = React.useState<File | null>(null);
    const handleChangeFile = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        setFile(file || null);
    }
    const handleSubmitForm:SubmitHandler<Project> = (data:Project)=> {
        // const newProject = {
        //     ...data,
        //     image_project:file
        // }
        console.log(data)
        reset()
    }


    return (
        <div className="container mx-auto flex justify-center border-2 py-20">
            <form className="container flex flex-col items-center w-1/2 bg-dark-blue rounded-xl p-2" onSubmit={handleSubmit(handleSubmitForm)}>
                <h1 className="text-purple font-bold text-5xl">Registrar proyecto</h1>
                <div className="flex w-full gap-3 mt-5">
                    <div className="flex w-full gap-2 mt-5 flex-col">
                        <div className="flex flex-col">
                            <label className="text-white">Nombre del proyecto:</label>
                            <input className="rounded-xl h-8 bg-purple px-2"
                                   {...register("name_project", {required: true})}
                                   type="text"
                                   placeholder="nombre del projecto"
                            />
                            {
                                errors.name_project?.type === 'required' && <span className="text-red font-bold">*Requerido</span>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white">Link del repositorio</label>
                            <input className="rounded-xl h-8 bg-purple px-2"
                                   {...register("repository_link", {required: true, pattern: URL})}
                                   type="text"
                                   placeholder="Link URL repositorio"
                            />
                            {
                                errors.repository_link?.type === 'required' ? <span>*Requerido</span>:
                                    errors.repository_link?.type === 'pattern' && <span className="text-red font-bold">*La url no es valido</span>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white">Link de despliegue</label>
                            <input type="text"
                                   {...register("deployment_link", {required: true, pattern: URL})}
                                   placeholder="Link URL despliegue"
                                   className="rounded-xl h-8 bg-purple px-2"
                            />
                            {
                                errors.deployment_link?.type === 'required' ? <span className="text-red font-bold">*Requerido</span>:
                                    errors.deployment_link?.type === 'pattern' && <span className="text-red font-bold">*La url no es valido</span>
                            }
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white">Fecha de creacion</label>
                            <input
                                type="date"
                                {...register("creation_date", {required: true})}
                                className="rounded-xl h-8 bg-purple text-gray px-2"
                            />
                            {
                                errors.creation_date?.type === 'required' && <span className="text-red font-bold">*Requerido</span>
                            }
                        </div>
                        <div className="flex flex-col custom-file-input">
                            <label className="text-white relative flex gap-3 flex-col">Imagen del proyecto
                                <FaCamera
                                    className="text-white ml-2 h-5 w-5 absolute bottom-2"
                                />
                                <input
                                    type="file"
                                    {...register("image_project", {required: true})}
                                    className="text-white rounded-xl h-8 bg-purple file:hidden"
                                    onChange={handleChangeFile} hidden
                                />
                                <input
                                    type="text"
                                    className="rounded-xl h-8 bg-purple text-right px-2"
                                    name="file" defaultValue={file ? file.name : ''}
                                    readOnly disabled
                                />
                            </label>
                            {
                                errors.image_project?.type === 'required' && <span className="text-red font-bold">*Requerido</span>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-full pt-5">
                        <label className="text-white">Descripcion</label>
                        <textarea
                            className="rounded-xl h-40 bg-purple px-2"
                            {...register("description", {required: true})}
                            placeholder="Descripcion....."
                        />
                        {
                            errors.description?.type === 'required' && <span className="text-red font-bold">*Requerido</span>
                        }
                    </div>
                </div>
                <div className="my-3 w-full flex justify-center">
                    <button  type="submit" className="bg-purple w-1/2 p-3 rounded-xl hover:bg-gray">Enviar proyecto</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterProject;