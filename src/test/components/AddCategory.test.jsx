import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe(' test addCategory', () => {

    const inputValue = 'Saitama';

    test('should match snapshot', () => {

        const { content } = render(<AddCategory onNewCategory={() => { }} />)
        expect(content).toMatchSnapshot();

    })

    test('should change value on input', () => {

        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole("textbox");

        fireEvent.input(input, { target: { value: inputValue } })

        expect(input.value).toBe(inputValue);

    })

    test('should call onNewCategory if > 1', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue.toUpperCase())


    })

    test('should not called onNewCategory if input empty', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole('form')

        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    })
})
