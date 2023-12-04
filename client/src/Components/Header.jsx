import logo from '../assets/Logo.svg';
import lupa from '../assets/search.svg';
import menu from '../assets/menur.svg';
import userLogo from '../assets/user.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 flex justify-between">
      <Link to={'/'} className="flex items-center gap-1 w-10">
        <img src={logo} alt="" />
        <span className="font-bold text-xl">housecrab</span>
      </Link>
      <div className="flex border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-sm shadow-gray-500">
        <div className="self-center">Qualquer lugar</div>
        <div className="border-l border-gray-300"></div>
        <div className="self-center">Qualquer semana</div>
        <div className="border-l border-gray-300"></div>
        <div className="self-center">Hospedes</div>
        <div className="border-l border-gray-300"></div>
        <button className="bg-neutral-500 p-2 rounded-full">
          <img className="w-4" src={lupa} alt="ícone de pesquisa" />
        </button>
      </div>
      <div className="flex border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-sm shadow-gray-500 items-center">
        <img className="w-4" src={menu} alt="" />
        <Link to={'/login'} className="bg-neutral-500 p-2 rounded-full">
          <img className="w-4" src={userLogo} alt="" />
        </Link>
      </div>
    </header>
  );
}
