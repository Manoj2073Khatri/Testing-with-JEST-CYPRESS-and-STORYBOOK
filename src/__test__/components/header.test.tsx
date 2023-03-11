import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Header from "../../components/header"


describe('Header component', () => {

    test('Header text', () => {
        render(<Header/>);

        expect(screen.getByText(/navbar/i)).toBeInTheDocument();
    })


    test('click', () => {
        render(<Header/>);
        userEvent.click(screen.getByText(/home/i))
       
    })
})