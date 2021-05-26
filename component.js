'use strict';

function SayHello() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Hello world'
        )
    );
}

ReactDOM.render(React.createElement(SayHello, null), document.getElementById('container'));