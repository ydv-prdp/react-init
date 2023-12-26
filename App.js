const heading = React.createElement("h1", {id:"heading"}, "Hello World From React")
const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement(
    "div", 
    {id:"parent"},
    React.createElement(
        "div", 
        {id:"child"},
        [
            React.createElement(
            "h1",
            {},
            "Hello World"
        ),
        React.createElement(
            "h2",
            {},
            "Hello World"
        )
        ]

    )
);
console.log(parent)
root.render(parent);
