const form = require('./form');
const data = require('./data');

const result = {};
const arrayCompoentn = ['datagrid', 'hergrid'];
const objectComponent = ['component', 'wall', 'panel'];

const mapDataGridToScheme = (datagrid, result) => {

}

function foo(form, result) {
    if (Array.isArray(form)) {
        if (form.tree, Array.isArray(form.components)) {
            if (form.type === 'datagrid') {
                mapDataGridToScheme()
                result[form['key']] = [];
            } else {
                result[form['key']] = {};
            }
            form.components.forEach(component => foo(component, []))
            foo(form.components, result[form['key']]);
        } else {
            if (form.input) {
                if (Array.isArray(result)) {
                    result.push({
                        [form['key']]: true
                    })
                } else {
                    result[form['key']] = true
                }
            }
        }
        form.forEach(child => {
            if (typeof child === 'object') {
                child.forEach(subChild => foo(subChild, result));
            }
        })
    } else {
        for (let key in form) {
            if (form.tree && Array.isArray(form.components)) {
                if (form.type === 'datagrid') {
                    result[form['key']] = [];
                } else {
                    result[form['key']] = {};
                }
                foo(form.components, result[form['key']]);
            } else {
                if (form.input) {
                    result[form['key']] = true;
                } else {
                    if (typeof form[key] === 'object') {
                        foo(form[key], result);
                    }
                }
            }
        }
    }
}

foo(form, result);
console.log(result, data);
console.log(1);