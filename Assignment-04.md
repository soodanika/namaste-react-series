# Is JSX mandatory 
    JSX is not mandatory we can use the React elements as well but it is recommended to use JSX since it is easy to read and write.

# Es6 mandatory
    ES6 is not mandatory but it is highly recommended as it has some graet features like - 
        - Arrow function
        - Template Literals
        - Destructuring
        - Spread Operator etc

# commants in JSX
    we can write comments in JSX by wrapping them inside curly braces {/*   */} same for multline

# <React.Fragment></React.Fragment> and <></>
    <></> is a shorthand for <React.Fragment></React.Fragment> 
    <React.Fragment></React.Fragment> is used to group multiple JSX elements in react without introducing an extra DOM element.

# Virtual DOM 
    It is concept used in React to optimize the updating process of actual DOM
        - When we create react componnet and render it for first time react constructs a virtual DOM.
        - If state or prop change a new virtual dom is created.
        - React then comapares the previous DOM with the new one and identifies the differences.
        - After identifying the changes React looks for a way to have minimal changes to update the DOM.
        - It then applies changes to the actual DOM this is more efficient.

# Reconciliation in React
    It is a process in react in which it comapres the previous Virtual DOM with the new one and determines the actual set of changes required to update the actual DOM.

# React Fiber
    It is internal rework of how react handles rendering. It improves performance by enabling better task prioritization etc.

# Keys in react
    these are used in react to uniquely identify and track elements ensuring efficient updates by avoiding unnecessary re-renders.

# Index as keys
        Not having key <<<< Index as key <<<<<< Unique Key

# props in react
    props in react are the properties that can be used to pass values from parent component to a child compoenet to dynamically render content.

# Config driven UI
    Config driven UI is the UI where it is handled on the data, the UI changes as the data changes.

    