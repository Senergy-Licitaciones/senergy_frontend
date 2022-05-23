import {render,screen} from "@testing-library/react";
import Footer from "../../../components/layout/Footer";
import "@testing-library/jest-dom";
describe("Footer",()=>{
    it("renders Footer children component",()=>{
        render(<Footer/>);
        const title=screen.getByText(/2022, Senergy. All rights reserved/i);
        expect(title).toBeInTheDocument();
    });
});