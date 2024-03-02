export default function fetchMapCdn() {
    // Create a new script element
    const script1 = document.createElement('script');
    // Set the source of the script1 to the CDN URL
    script1.src = 'https://api.mazemap.com/js/v2.0.114/mazemap.min.js';
    script1.async = true;

    const link = document.createElement('link');
    link.href = 'https://api.mazemap.com/js/v2.0.116/mazemap.min.css';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.body.appendChild(script1);
    document.body.appendChild(link);
    console.log('script added');
    return () => {
        document.body.removeChild(script1);
        document.body.removeChild(link);
    };
}
