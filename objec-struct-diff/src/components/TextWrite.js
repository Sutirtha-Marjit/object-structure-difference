import React from 'react';
import './TextWritter.css';

const TextWrite = ({ heading, onChange }) => {

    const [beautifiedContent, setBeautifiedContent] = React.useState('{}');
    const [errMSG, setErrMSG] = React.useState(null);

    const jsonEditHandler = (e) => {
        let content = null;
        try {
            content = e.currentTarget.value;
            content = JSON.parse(content);
            const opContent = JSON.stringify(content, undefined, 4);
            if (onChange) {
                onChange(content);
            }
            setBeautifiedContent(opContent);
            setErrMSG(null);
        } catch (e) {
            setBeautifiedContent('{}');
            setErrMSG('JSON is improper!');
        }
    };

    return <div className="text-writer-zone">
        <h5>{heading}</h5>
        <textarea rows="12" onChange={jsonEditHandler} className="json-writter-textarea"></textarea>
        <div className="beautified">
            <pre>
                {beautifiedContent}
            </pre>
        </div>
        <br />
        {errMSG && <div className="alert alert-danger"><small>{errMSG}</small></div>}
    </div>
};

export default TextWrite;