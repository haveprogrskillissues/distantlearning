import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)



/*import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| c | d |
\`\`\`
js code

const a = 'b'
\`\`\`

`

ReactDom.render(
    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
    document.body
)
*/