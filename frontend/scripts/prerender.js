// 把 entry-server 渲染出的 HTML 塞進 dist/index.html 的 #root
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const indexPath = `${root}dist/index.html`
const ssrDir = `${root}dist-ssr`

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href)
const template = await readFile(indexPath, 'utf8')
const placeholder = '<div id="root"></div>'

if (!template.includes(placeholder)) {
  throw new Error(`dist/index.html 找不到 ${placeholder}`)
}

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('✓ prerendered dist/index.html')
