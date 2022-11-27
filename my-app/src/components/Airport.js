import React, { useState, useEffect } from 'react';

const Airport = (props) => {
    /**
    * Get back-end response
    * @param response
    * @returns {Promise<never>|*}
    */
    const checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300 || response.status === 0) {
            return response;
        } else {
            return Promise.reject(new Error(response.status + ": " + response.statusText));
        }
    };

    const [long, setLong] = useState([]);
    const [lat, setLat] = useState([]);
    const [name, setName] = useState([]);

    
}