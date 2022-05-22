import { render } from "@testing-library/react"
import TodoList from "./todolist"

test("scénario exemple" , function(){
    render(<TodoList/>)
    const title = screen.getByText('Liste')
    expect(title).toBeInTheDocument
})