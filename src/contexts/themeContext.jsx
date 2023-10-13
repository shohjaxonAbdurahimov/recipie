import { createContext, useReducer } from "react"

export const ThemeProvider = createContext()

const updateState = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload }
            case "CHANGE_THEME":
                return { ...state, theme: action.payload }
        default:
            return state
    }
}

export function ThemeContextProvider({ children }) {
    const [state, dispatch] = useReducer(updateState,  {
        color: "black",
        theme: "light"
    });
    const changeColor = (color) => {
        dispatch({ type: "CHANGE_COLOR", payload: color })
    }
    const changeTheme = (theme) => {
        console.log("1",theme)
        dispatch({ type: "CHANGE_THEME", payload: theme })
    }

    return (

        <ThemeProvider.Provider value={{ ...state, changeColor,changeTheme }}>
            {children}
        </ThemeProvider.Provider>
    )
}

