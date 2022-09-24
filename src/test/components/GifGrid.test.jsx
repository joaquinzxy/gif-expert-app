import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components"
import { useFetchGifs } from "../../hooks/useFetchGifs"

jest.mock('../../hooks/useFetchGifs');

describe('testing <GifGrid/>', () => {


    const category = 'ONE PUNCH'

    test('should show loading initially', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })


        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    })

    test('should return hook', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://www.one-punch.com/saitama.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'https://www.one-punch.com/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })


        render(<GifGrid category={category} />)
        expect( screen.getAllByRole('img').length).toBe(gifs.length)
        

    })

})