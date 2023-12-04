// Importa o módulo mongoose
import mongoose from 'mongoose';

// Cria um esquema simplificado para o usuário
const UserSchema = mongoose.Schema(
  {
    nome: String,
    email: { type: String, unique: true },
    senha: String,
  },
  { timestamps: true },
); // Adiciona os campos createdAt e updatedAt automaticamente

// Exporta o modelo usando o esquema
export default mongoose.model('User', UserSchema);

// import mongoose from 'mongoose';

// // Define o esquema do usuário
// const { Schema } = mongoose;
// const UserSchema = new Schema({
//   nome: String,
//   email: { type: String, unique: true },
//   senha: String,
// });

// // Cria o modelo com base no esquema
// const UserModel = mongoose.model('User', UserSchema);

// // Exporta o modelo para uso em outros arquivos
// export default UserModel;
