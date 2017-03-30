# react-ckeditor-wrapper
---

## install

[![react-ckeditor-wrapper](https://nodei.co/npm/react-ckeditor-wrapper.png)](https://npmjs.org/package/react-ckeditor-wrapper)

## Usage

```js
var CKEditor = require('react-ckeditor-wrapper');
 
class Example  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        content: 'content',
        }
    }

    updateContent(value) {
        this.setState({content:value})
    }
    
    render() {
        return (<CKEditor value={this.state.content} onChange={this.updateContent.bind(this)} />)
    }
}
```

## Development

```
npm install
npm start
```


## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>value</td>
          <td>string</td>
          <td></td>
          <td>Specifies the default value</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>function</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>config</td>
          <td>object</td>
          <td></td>
          <td>CKEditor config</td>
        </tr>
    </tbody>
</table>



## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rc-input-number is released under the MIT license.