
console.log({ React, ReactDOM });

const { Fragment, StrictMode, createElement: e, useState } = React;
const { createRoot } = ReactDOM;

// Show count using a component
// function ShowCount() {
//   const [count, setCount] = useState(2);
//   return e(
//     'section',
//     null,
//     e('h1', null, count),
//   );
// }

function App() {
    const [count, setCount] = useState(0);
    return e(
        Fragment,
        null,
        e('h1', null, 'Count'),
        e('h2', null, count),
        // This is Component
        // e(ShowCount)
    );
}

function renderApp() {
    const id = 'root';
    const domRoot = document.getElementById(id);
    const root = createRoot(domRoot);

    root.render(e(StrictMode, null, e(App)));
}

renderApp();