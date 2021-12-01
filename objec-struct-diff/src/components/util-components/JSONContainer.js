import './JSONContainer.css';
import JSONView from './JSONView';
function JSONContainer(props) {

    const jsonObject = { a: 90, b: [{ f: 90, n: 0, bn: true }], m: "india" };

    return <div className="json-container">
        <JSONView jsonObject={jsonObject}></JSONView>
    </div>

}

export default JSONContainer;