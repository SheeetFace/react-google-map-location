import React, { useState, useEffect } from 'react';
const MapLocation = ({ location, width = '100%', height = '100%', zoom = 16, mapType = 'roadmap', loading = 'lazy', style, }) => {
    const [mapUrl, setMapUrl] = useState(null);
    useEffect(() => {
        let mapTypeParam = mapType === 'satellite' ? 'k' : 'm';
        let url = '';
        if (location) {
            if (typeof location === 'string') {
                const query = encodeURIComponent(location);
                url = `https://maps.google.com/maps?q=${query}&t=${mapTypeParam}&z=${zoom}&output=embed`;
            }
            else if (location.lat !== undefined && location.lng !== undefined) {
                const { lat, lng } = location;
                url = `https://maps.google.com/maps?q=${lat},${lng}&t=${mapTypeParam}&z=${zoom}&output=embed`;
            }
        }
        else
            url = `https://maps.google.com/maps?ll=0,0&t=${mapTypeParam}&z=3&output=embed`;
        setMapUrl(url);
    }, [location, zoom, mapType]);
    return (React.createElement("iframe", { src: mapUrl || 'https://maps.google.com/maps?ll=0,0&t=m&z=3&output=embed', width: width, height: height, style: Object.assign({ border: 0 }, style), allowFullScreen: true, loading: loading, referrerPolicy: "no-referrer-when-downgrade", title: "Google Maps" }));
};
export default MapLocation;
