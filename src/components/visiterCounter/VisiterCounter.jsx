import React, { useEffect } from 'react';

const VisitorCounter = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://www.powr.io/powr.js?platform=react';
		script.async = true;
		document.body.appendChild(script);

		script.onload = () => {
			if (window.Powr) {
				window.Powr.io.load('8edede34_1697057547');
			}
		};

		return () => {
			// Limpia el script al desmontar el componente
			document.body.removeChild(script);
		};
	}, []);

	return <div className='powr-visitor-counter' id='8edede34_1697057547'></div>;
};

export default VisitorCounter;
