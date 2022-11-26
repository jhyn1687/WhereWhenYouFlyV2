import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import { useAsync } from "react-async"
import { supabase } from '../supabaseClient'

const Airport = (props) => {
    const [loading, setLoading] = useState(true)
    const [airports, setAirports] = useState([]);

    const getProfile = async () => {
        try {
            setLoading(true)
            let { data, error, status } = await supabase
                .from('Airports')
                .select('*')
                
            console.log(data)
            
            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setAirports(data)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => getProfile, [])
    
    return loading ? <p> we are loading!!!</p> : <p>{airports[0].IATA}</p>
}
export default Airport;