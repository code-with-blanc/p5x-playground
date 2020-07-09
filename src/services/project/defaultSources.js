/* eslint-disable no-irregular-whitespace */
export default [
  {
    id: 1,
    name: 'Main.js',
    code: `
// Esse playground pode ser usado para explorar o elemento HTML <canvas /> 
//
// O contexto fica disponível na variável ctx
// Ver: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 50, 50);

// Todos os códigos são compilados juntos
// então um pode impoertar objetos do outro
import { getLongCat } from 'Longcat';

console.log(getLongCat());




// Código fonte disponível em:
// https://github.com/pedroblanc/p5x-playground
//
//
// Aviso: versão EXTREMAMENTE inicial
//
// O código de usuário é interpretado no mesmo contexto que a aplicação
// roda e tem acesso a todos os recursos da página.
//
// Ex: descomente para mudar o nome da página
// document.title = 'Hacked!';

`,
  }, {
    id: 2,
    name: 'Longcat',
    code: `
// Longcat is looooooong

// O codigo é transpilado, então podemos usar
// características do ES6, como arrow functions
export const getLongCat = () => {
  return \`
     /\\\\_____/\\\\
    /         \\\\
    |  O   O  |
    \\\\    ∇    |
     \\\\  _|_  /
     /        \\\\______
    /   ________     \\\\
   | _______   \\\\ \\\\__/
   |        \\\\__/
   |        |
   |        |
   |        |
   |        |
   |        |
   |        |
   |        |
   |        |
   |        |
   |        |
   |        |
\`
}


`,
},
];
