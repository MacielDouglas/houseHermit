import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="">
          <input type="email" placeholder="fulano@email.com" />
          <input type="password" placeholder="senha" />
          <button className="p-2 w-full bg-slate-900 text-slate-100 rounded-2xl uppercase ">
            login
          </button>
          <div className="text-center py-2 text-slate-800">
            Você ainda não tenho uma conta?
            <Link className="underline" to={'/cadastro'}>
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
