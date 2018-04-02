import React from 'react';
import ReactDOM from 'react-dom';
import ContactsApp from './components/ContactsApp'
import registerServiceWorker from './registerServiceWorker';
let contacts =[
    {name: "a" ,email: "sdwe@gmail.com"},
    {name: "cxc" ,email: "gaeraon@gmail.com"},
    {name: "Pete Hunt" ,email: "floagphoen@qq.com"},
    {name: "Paul O'Shannessy" ,email: "zoshguz@163.com"},
];
ReactDOM.render(<ContactsApp contacts={contacts}/>, document.getElementById('root'));
registerServiceWorker();
