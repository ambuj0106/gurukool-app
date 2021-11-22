import { useEffect } from 'react';
const useScript = resourceUrl => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = true;
        script.type = "text/babel";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [resourceUrl]);
};

export default useScript;