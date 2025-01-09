
import divide from '../helper/divide'

describe('divide', () => {
    it('debe retornar un número', () =>
    {  
            const result = divide(8,2);
            expect(typeof result).toBe('number')
    })

    it('debe retornar null', () => 
    {
            const result = divide('string de entrada');
            expect(result).toBe(null);

    }) 
    it('debe retornar 5', () => 
    {
        const result = divide(10,2);
        expect(result).toBe(5)

    }) 
    it('debe retornar 2.5', () => 
    {
            const result = divide(10,4);
            expect(result).toBe(2.5);

    }) 
    it('debe retornar null', () => 
    {
            const result = divide(10,0);
            expect(result).toBe(null);

    }) 



        
  




});
