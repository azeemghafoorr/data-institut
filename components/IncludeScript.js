// components/JQueryScript.js
import Script from 'next/script'

const IncludeScript = () => {
    return (

            <Script
                type="text/javascript"
                src="/assets/js/include.js"
            />
    );
};

export default IncludeScript;
