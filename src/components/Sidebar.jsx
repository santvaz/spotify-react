import React from "react";
import { assets } from "../assets/assets";

export const Sidebar = () => {
    return (
        <div className="w-full max-w-sm h-full p-2 flex-col gap-2 text-neutral-400 hidden lg:flex">
            <div className="bg-[#121212] h-36 flex flex-col justify-evenly rounded-lg gap-2">
                <div className="flex items-center gap-5 px-6 cursor-pointer hover:text-white duration-500">
                    <img
                        className="w-6"
                        src={assets.home_icon}
                        alt="Botón Inicio de Spotify"
                    />
                    <p className="font-bold">Inicio</p>
                </div>
                <div className="flex items-center gap-5 px-6 cursor-pointer hover:text-white duration-500">
                    <img
                        className="w-6"
                        src={assets.search_icon}
                        alt="Botón de búsqueda de Spotify"
                    />
                    <p className="font-bold">Buscar</p>
                </div>
            </div>
            <div className="bg-[#121212] h-screen rounded-lg">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-5 px-2 cursor-pointer hover:text-white duration-500">
                        <img
                            className="w-6"
                            src={assets.stack_icon}
                            alt="Botón para ir a tu biblioteca de Spotify"
                        />
                        <p className="font-semibold">Tu biblioteca</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="hover:bg-neutral-900 p-2 rounded-full cursor-pointer duration-300">
                            <img className="w-4" src={assets.plus_icon} alt="" />
                        </div>
                        <div className="hover:bg-neutral-900 p-2 rounded-full cursor-pointer duration-300">
                            <img className="w-4" src={assets.arrow_icon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#191919] rounded-lg font-semibold m-2 flex flex-col items-start justify-start gap-1 px-4">
                    <h1>Crea tu primera playlist</h1>
                    <p className="font-light">Te ayudaremos a crear la lista perfecta para ti</p>
                    <button className="px-4 py-1.5 bg-neutral-800 text-sm text-white rounded-full mt-4">
                        Crear playlist
                    </button>
                </div>
                <div className="p-4 bg-[#191919] rounded-lg font-semibold m-2 flex flex-col items-start justify-start gap-1 px-4">
                    <h1>Seguir podcasts</h1>
                    <p className="font-light">Te mantendremos al tanto de nuevos episodios</p>
                    <button className="px-4 py-1.5 bg-neutral-800 text-sm text-white rounded-full mt-4">
                        Explorar podcasts
                    </button>
                </div>
            </div>
        </div>
    );
};
