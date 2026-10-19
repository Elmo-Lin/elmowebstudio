import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// 建置時預先渲染成 HTML，讓不執行 JS 的爬蟲也看得到內容
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
