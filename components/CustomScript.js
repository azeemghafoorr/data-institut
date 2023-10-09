// components/JQueryScript.js
import Script from 'next/script'

const CustomScript = () => {
    return (
            <Script
                type="text/javascript"
                src="/assets/js/custom.js"
            />
    );
};

export default CustomScript;
