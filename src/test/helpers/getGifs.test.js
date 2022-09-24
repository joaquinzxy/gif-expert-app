import { getGifs } from "../../helpers/getGifs"

describe('Testing getGifs.test.js', () => { 

    test('should return array of gifs', async () => { 

        const gifs = await getGifs('One punch');

        expect( gifs.length ).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
     })

 })