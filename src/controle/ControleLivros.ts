// ControleLivros.ts
import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
  new Livro(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1', 'Autor 2']),
  new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Autor 3']),
  new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Autor 4', 'Autor 5']),
];

class ControleLivro {
  public obterLivros(): Array<Livro> {
    return livros;
  }

  public incluirLivro(livro: Livro): void {
    const codigo = Math.max(0, ...livros.map(l => l.codigo)) + 1;
    livro.codigo = codigo;
    livros.push(livro);
  }

  public excluirLivro(codigo: number): void {
    const index = livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivro;

