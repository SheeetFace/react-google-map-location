import React from 'react';
interface MapLocationProps {
    location?: string | {
        lat: number;
        lng: number;
    };
    width?: string | number;
    height?: string | number;
    zoom?: number;
    mapType?: 'roadmap' | 'satellite';
    loading?: 'lazy' | 'eager';
    style?: React.CSSProperties;
}
declare const MapLocation: React.FC<MapLocationProps>;
export default MapLocation;
