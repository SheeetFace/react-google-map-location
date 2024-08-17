import React, { useState, useEffect } from 'react';

interface MapLocationProps {
    location?: string | { lat: number; lng: number };
    width?: string | number;
    height?: string | number;
    zoom?: number;
    mapType?: 'roadmap' | 'satellite';
    loading?: 'lazy' | 'eager';
    style?: React.CSSProperties;
}

const MapLocation: React.FC<MapLocationProps> = ({
        location,
        width = '100%',
        height = '100%',
        zoom = 16,
        mapType = 'roadmap',
        loading = 'lazy',
        style,
    }) => {

    const [mapUrl, setMapUrl] = useState<string | null>(null);

    useEffect(() => {
        let mapTypeParam = mapType === 'satellite' ? 'k' : 'm';
        let url = '';

        if(location){
            if(typeof location === 'string'){
                const query = encodeURIComponent(location);
                url = `https://maps.google.com/maps?q=${query}&t=${mapTypeParam}&z=${zoom}&output=embed`;
            }else if(location.lat !== undefined && location.lng !== undefined){
                const { lat, lng } = location;
                url = `https://maps.google.com/maps?q=${lat},${lng}&t=${mapTypeParam}&z=${zoom}&output=embed`;
            }
        }else url = `https://maps.google.com/maps?ll=0,0&t=${mapTypeParam}&z=3&output=embed`;
        

        setMapUrl(url)
    },[location,zoom,mapType])

    return (
        <iframe
            src={mapUrl || 'https://maps.google.com/maps?ll=0,0&t=m&z=3&output=embed'}
            width={width}
            height={height}
            style={{ border: 0, ...style }}
            allowFullScreen
            loading={loading}
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
        />
    )
}

export default MapLocation;