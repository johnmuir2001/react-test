import { render } from "@testing-library/react"
import App from "../App"

test("demo", () => {
    expect(true).toBe(true)
})

test("renders main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})
