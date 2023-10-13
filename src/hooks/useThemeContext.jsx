import { useContext } from "react";
import { ThemeProvider } from "../contexts/themeContext";

export function  useThemeContext(){
const context = useContext(ThemeProvider)

if(!context){
    throw new Error("useThemeContext must be used in useThemeContext ")
}
return context
}