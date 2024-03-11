import { describe, expect } from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Testes de unidade para o model Editora', () => {
  const objetoEditora = {
    nome: 'CDC',
    cidade: 'Sao Paulo',
    email: 's@s.com',
  };

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objetoEditora);

    expect(editora).toEqual(
      expect.objectContaining(objetoEditora),
    );
  });

  // skip é um metodo do jester que pula o teste pra melhorar visualização ou
  // desenvolver melhor depois
  it.skip('Deve salvar editora no BD', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar().then((dados) => {
      expect(dados.nome).toBe('CDC');
    });
  });

  it.skip('Deve salvar no BD usando a sintaxe moderna', async () => {
    const editora = new Editora(objetoEditora);

    const dados = await editora.salvar();

    const retornado = await Editora.pegarPeloId(dados.id);

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
