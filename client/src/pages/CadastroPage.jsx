import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function newUser(e) {
    e.preventDefault();
    axios.post('/api/cadastro', {
      nome,
      email,
      senha,
    });
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center mb-4">Cadastro</h1>
        <form className="max-w-md mx-auto" onSubmit={newUser}>
          <input
            type="text"
            placeholder="Fulano"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
          />
          <input
            type="email"
            placeholder="fulano@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
          />
          <button className="p-2 w-full bg-slate-900 text-slate-100 rounded-2xl uppercase ">
            cadastre-se
          </button>
          <div className="text-center py-2 text-slate-800">
            Já é membro?
            <Link className="ml-2 underline" to={'/cadastro'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
