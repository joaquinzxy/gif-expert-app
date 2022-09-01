import { GifItem } from "../../components";
import { render, screen } from "@testing-library/react";

describe('testing GifItem.jsx', () => { 
    
    const title = 'Saitama';
    const url = 'https://www.one-punch.com/saitama.jpg'

    test('should match with snapshot', () => { 


        const { container } = render(<GifItem title={ title } url={ url }/>)

        expect( container ).toMatchSnapshot();
     })

     test('should display img with url and alt provided', () => { 

        render(<GifItem title={ title } url={ url }/>);

        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

        // screen.debug();

      })

      test('should display title on component', () => { 

        render(<GifItem title={ title } url={ url }/>);

        expect(screen.getByText(title)).toBeTruthy();

       })

 })