import { createRoot } from 'react-dom/client'
import webFontLoader from 'webfontloader'
import App from './App'
import './index.css'

webFontLoader.load({
  google: {
    families: ['Kantumruy Pro:500,600,700', 'Poppins:300,400,500'],
  },
})

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
