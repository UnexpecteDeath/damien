import './App.css'
import Header from './header/header'
import Article from "./article/article"
import Main from "./main/main"
import Footer from './footer/footer'
import { createContext, useState } from 'react'

type ContextType = {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
};

export const ThemeContext = createContext<ContextType | null>(null)

function App() {

  const [ theme, setTheme ] = useState('dark')
  return (
    <ThemeContext.Provider value={{theme, setTheme }}>
    <div className={`${'container'} ${theme === "dark" ? "" : "dark"}`}>
    <Header/>
    <Article />
    <Main />
    <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
