import { render,screen } from "@testing-library/react"
import Footer from "../../components/footer"


describe('initialize', () => {

    test('Footer text', () => {
        render(<Footer/>);

        expect(screen.getByText(/this is footer/i)).toBeInTheDocument();
    })

})