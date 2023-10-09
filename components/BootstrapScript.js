// components/JQueryScript.js
import Script from 'next/script'

const BootstrapScript = () => {
    return (
            <Script
                type="text/javascript"
                src="/assets/js/bootstrap.min.js"
            />
    );
};

export default BootstrapScript;
