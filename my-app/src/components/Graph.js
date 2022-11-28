import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { VegaLite } from 'react-vega'
import { Handler } from 'vega-tooltip'


const Graph = (props) => {
  const [airport, setAirport] = useState("")
  const [flightsData, setFlightsData] = useState([])

  const getFlightsData = async (newAirport) => {
    try {
        let { data, error, status } = await supabase
            .from('Flights')
            .select(`Date, Count`)
            .eq('Airport', newAirport)
            
        console.log(data)
        
        if (error && status !== 406) {
            throw error
        }

        if (data) {
          setFlightsData(data)
        }
    } catch (error) {
        alert(error.message)
    }
}
  const handleChange = (newAirport) => {
    getFlightsData(newAirport)
  }

  useEffect(() => {
    if(props.airport !== airport) {
      handleChange(props.airport)
      setAirport(props.airport)
    }
  }, [props]);

  const spec = {
    title: airport + " data",
    width: 0.25 * window.innerWidth,
    height: 0.25 * window.innerWidth,
    params : [ // this adds the pan and zoom feature
      {
        name: "grid",
        select: 'interval',
        bind: 'scales'
      } 
    ],
    mark: {
      type: 'line',
      interpolate: 'monotone', // (maybe try "step-after") check out different types of interpolations at https://vega.github.io/vega-lite/docs/line.html
      tension: 0,
      tooltip: true, // equivalent to setting the tooltip property to {"content" "encoding"} (This will show date and amount of flights)
      point: true
    },
    encoding: {
      x: { field: 'Date', type: 'temporal', title: 'Date'},
      y: { field: 'Count', type: 'quantitative', title: "# of Flights"},
    },
    data: { name: 'flights' }, // note: vega-lite data attribute is a plain object instead of an array
  }

  return (
    <VegaLite spec={spec} data={{flights: flightsData, }} tooltip={new Handler().call} actions={false}/> // add "tooltip={new Handler().call}" inside if the given tool tip is not enough and we want to create our own https://github.com/vega/vega-tooltip
  );
}
export default Graph;