import './JSONView.css';
import CompareUtil from '../../utils/compare.util';
import KeyGen from '../../utils/keygen';
function JSONView(props) {

    let viewContent = [];
    if (props.jsonObject) {
        const lines = CompareUtil.beautifiedJSON(props.jsonObject).split('\n');
        viewContent = lines.map((line, i) => {

            return (<div className="row" key={KeyGen(i)}>
                <div className="ln">{i}</div>
                <div className="con"><pre>{line}</pre></div>
            </div>);
        });

    }

    return <div className="json-view text-light">
        {viewContent}
    </div>

}

export default JSONView;