
import isapple from '../helper/isapple'

describe('isaple', () => {
    it('debe retornar un boolean', () =>
    {  
            const result = isapple('manzana');
            expect(typeof result).toBe('boolean')
    })

    it('debe retornar true', () => 
    {
            const result = isapple('manzana');
            expect(result).toBe(true);

    }) 
    it('debe retornar false', () => 
    {
        const result = isapple('pera');
        expect(result).toBe(false)

    }) 
       
  




});
