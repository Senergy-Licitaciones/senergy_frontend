import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import AsideBurger from "../../../components/layout/AsideBurger";
import "@testing-library/jest-dom";
describe("AsideBurger",()=>{
    beforeEach(()=>{
        cleanup();
        render(<AsideBurger/>);
    });
    test("renders AsideBurger components children",()=>{
        const aside=screen.getByRole("group");
        expect(aside).toHaveClass("-translate-x-full");
    });
    test("open burger ",()=>{
        const btn=screen.getByRole("button",{
            name:/burger-open/i
        });
        fireEvent.click(btn);
        const aside=screen.getByRole("group");
        expect(aside).toHaveClass("translate-x-0");
    })
});