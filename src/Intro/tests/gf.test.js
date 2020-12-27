import {saludar, getActiveUser} from '../gf';

describe( 'Pruebas de gf', () =>{

    test('Debe saludar correctamente', () =>{

        const name = 'Johann';
        
        const saludo = saludar(name);

        expect(saludo).toBe('Hola, Johann')
    })
    
    test('Si saludar es vacio', () =>{
        expect(saludar()).toBe('Hola, Daniela');

    })

});

describe('Otro metodo', () => {
    test('Deberia retornar el usuario', () => {
        const fetchUser = getActiveUser('Johann');
        const user = {
            uid: 'AB12',
            username : 'Johann'
        };

        expect(fetchUser).toEqual(user);
    })
    
})


describe('Prueba object', ()=>{
    test('Object Comparison', () =>{
        const hero1 = {
            id: 'Batman',
            name: 'Bruce',
            owner: 'DC'
        }
        const hero2 = {
            id: 'Batman',
            name: 'Bruce',
            owner: 'DC'
        }
        expect(hero1).toEqual(hero2);
    })
})