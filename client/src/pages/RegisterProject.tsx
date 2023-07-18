import React, {ChangeEvent} from 'react';
import {FaCamera} from 'react-icons/fa';
const RegisterProject:React.FC = () => {

    const [file, setFile] = React.useState<File | null>(null);
    const handleChangeFile = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        setFile(file || null);
    }

    return (
        <div className="container mx-auto flex justify-center border-2 py-20">
            <form className="container flex flex-col items-center w-1/2 bg-dark-blue rounded-xl p-2">
                <h1 className="text-purple font-bold text-5xl">Registrar proyecto</h1>
                <div className="flex w-full gap-3 mt-5">
                    <div className="flex w-full gap-2 mt-5 flex-col">
                        <div className="flex flex-col">
                            <label className="text-white">Nombre del proyecto:</label>
                            <input className="rounded-xl h-8 bg-purple" type="text" placeholder="nombre del projecto"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white">Link del repositorio</label>
                            <input className="rounded-xl h-8 bg-purple" type="text" placeholder="Link URL repositorio" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white">Link de despliegue</label>
                            <input type="text" placeholder="Link URL despliegue" className="rounded-xl h-8 bg-purple" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white">Fecha de creacion</label>
                            <input type="date" className="rounded-xl h-8 bg-purple text-gray" />
                        </div>
                        <div className="flex flex-col custom-file-input">
                            <label className="text-white relative flex gap-3 flex-col">Imagen del proyecto
                                <FaCamera className="text-white ml-2 h-5 w-5 absolute bottom-2"/>
                                <input type="file" className="text-white rounded-xl h-8 bg-purple file:hidden" onChange={handleChangeFile} hidden/>
                                <input type="text" className="rounded-xl h-8 bg-purple text-right pr-2" name="file" defaultValue={file ? file.name : ''}  readOnly disabled/>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pt-5">
                        <label className="text-white">Descripcion</label>
                        <textarea className="rounded-xl h-40 bg-purple"  placeholder="Descripcion....." />
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