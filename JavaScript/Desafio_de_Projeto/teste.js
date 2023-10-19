//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor(tipoItem,danoItem,resistenciaItem  ) {
       this.tipoItem = tipoItem
        this.danoItem = danoItem
        this.resistenciaItem = resistenciaItem
      }
    
      calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
      }
    }
    
    // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
    const tipoItem = gets();
    const danoItem = parseInt(gets());
    const resistenciaItem = parseInt(gets());
    
    //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
    
    
    
    // TODO: Imprima os atributos do item personalizado
    print("Tipo: " + tipoItem);
    print("Dano: " + danoItem );
    print("Resistencia: " + resistenciaItem);
    
    const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);  
    
    // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
    const danoTotal = itemPersonalizado.calcularDano();
    print("Dano em combate: " + danoTotal);