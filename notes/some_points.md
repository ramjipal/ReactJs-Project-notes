`single page application`: reactjs is single page application where server sends all the html, css, javascript once to the client and after that the javascript handles the navigation of different page by changing the component's data or text.


`multi page application`: here server sends html, css, javascript to client ,each time a new page is render.

---

- close all tags in reacts like `<img src = "blabla" />`
---
`re-render`: whenever any state is changed like password, count browser render the html or javascript again
which means if we are calling a function which is changing any state variable say count then re-rendering happend which in turn again call the same function and this is done infinitly
