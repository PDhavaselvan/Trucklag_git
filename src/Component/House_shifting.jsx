import React, { useEffect } from 'react';

function HouseShifting() {
    
    useEffect(() => {
        // Initialize the Google Map when the component mounts
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 13.0827, lng: 80.2707 },
            zoom: 12 
        });
        
        return () => {
            
        };
    }, []);
    
    return(
        <>
        <div id="map">

        </div>
        </>
    )
    
}
export default HouseShifting;