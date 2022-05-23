import { render, screen, within} from "@testing-library/react";
import LayoutHome from "../../../components/layout";
import "@testing-library/jest-dom";
import { mockNextUseRouter } from "../../../utils/mockUseRouter";
describe("LayoutHome renders",()=>{
    /*beforeEach(()=>{
        mockNextUseRouter({
            pathname:""
        })
        render(<LayoutHome>
        {<></>}
        </LayoutHome>);
    })*/
    test("render main tag",()=>{
        /*const main=screen.getByRole("main");
        expect(main).toBeInTheDocument();
        expect(main).toHaveClass("opacity-100");*/
    })
})