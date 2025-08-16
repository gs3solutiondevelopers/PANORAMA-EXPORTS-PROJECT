import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ locations = [], center, zoom = 5 }) => {
    useEffect(() => {
        // Remove old map if exists
        const mapContainer = L.DomUtil.get("map");
        if (mapContainer._leaflet_id) {
            mapContainer._leaflet_id = null;
        }

        // Initialize map
        const map = L.map("map").setView([29.0588, 76.0856], 8); // Center Haryana

        // Add OpenStreetMap tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        // Add markers
        locations.forEach((loc) => {
            L.marker([loc.lat, loc.lng])
                .addTo(map)
                .bindPopup(loc.label || "Location");
        });

        return () => {
            map.remove();
        };
    }, [locations, center, zoom]);

    return (
        <div className="w-full h-[500px] rounded-lg shadow-lg" id="map"></div>
    );
};

export default MapComponent;
