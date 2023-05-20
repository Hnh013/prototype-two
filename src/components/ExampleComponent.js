import React, { useEffect } from "react";
import Prism from "prismjs";
import '../styles/doc.css';

const ExampleComponent = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (


        <div className="d-flex jc-fs">
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>

    );
}

export default ExampleComponent;