import {render, screen} from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"



describe("Contact Us Page Test Case", ()=>{
    it("Should load contact us component", ()=>{
        render(<ContactUs/>)
        const heading = screen.getByRole("heading") 
        expect(heading).toBeInTheDocument();
    })
    test("Should load button inside contact us component", ()=>{
        render(<ContactUs/>)
        const button = screen.getByRole("button") 
        expect(button).toBeInTheDocument();
    })
    test("Should load button text inside contact us component", ()=>{
        render(<ContactUs/>)
        const buttonText = screen.getByText("Submit") 
        expect(buttonText).toBeInTheDocument();
    })
    test("Should load button inside contact us component", ()=>{
        render(<ContactUs/>)
        const placeholderName = screen.getByPlaceholderText("Name") 
        expect(placeholderName).toBeInTheDocument();
    })
    test("Should load two input boxes on the contact component", ()=>{
        render(<ContactUs/>)
        const inputBoxes = screen.getAllByRole("textbox") 
        expect(inputBoxes.length).toBe(2);
    })
})
