import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente', () => {

    let button;
    let txtField;
    let heading;
    beforeEach(() => {
        render(<FormUsuario />); //aquí generamos el virtual DOM
        button = screen.getByRole('button', { name: 'Submit' });
        txtField = screen.getByRole('textbox', { name: 'Nombre' });
        heading = screen.getByRole('heading', { name: 'Rellena el formulario' });
    });

    it('se renderiza el botón', () => {
        //comprobamos si la <Box> está en nuestro documento
        expect(button).toBeInTheDocument();
    });

    it('el botón se encuentra en el documento', () => {
        //comprobamos si la <Box> está en nuestro documento
        expect(txtField).toBeInTheDocument();
    });
    
    it('se renderiza la cabecera nivel 2', () => {
  
        //comprobamos si el Box tiene un color de fondo indigo
        expect(heading).toBeInTheDocument();
    });
    
    it('comprobar si al pulsar el botón cambia', async () => {
     
        //usamos el userEvent. Lo primero que debemos hacer es inicializarlo:
        const user = userEvent.setup()
        //simulamos que el usuario clica el botón               
        await user.clear(txtField);
        await user.type(txtField, 'Ismael');
        await user.click(button);
        //Ahora comprobamos que al pulsar en el botón se cambia
        //el color de fondo de la caja (Box) a tomato.
        expect(txtField).toHaveValue('');
       
    });
});