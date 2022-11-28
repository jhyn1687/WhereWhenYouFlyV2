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

  // const spec = {
  //   title: airport + " data",
  //   width: 0.25 * window.innerWidth,
  //   height: 0.25 * window.innerWidth,
  //   params : [ // this adds the pan and zoom feature
  //     {
  //       name: "grid",
  //       select: 'interval',
  //       bind: 'scales'
  //     } 
  //   ],
  //   mark: {
  //     type: 'line',
  //     interpolate: 'monotone', // (maybe try "step-after") check out different types of interpolations at https://vega.github.io/vega-lite/docs/line.html
  //     tension: 0,
  //     tooltip: true, // equivalent to setting the tooltip property to {"content" "encoding"} (This will show date and amount of flights)
  //     point: true
  //   },
  //   encoding: {
  //     x: { field: 'Date', type: 'temporal', title: 'Date'},
  //     y: { field: 'Count', type: 'quantitative', title: "# of Flights"},
  //   },
  //   data: { name: 'flights' }, // note: vega-lite data attribute is a plain object instead of an array
  // }

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
    layer :[
      {
        data: { name: 'flights' },
        mark: 'line',
        encoding: {
          x: { field: 'Date', type: 'temporal' },
          y: { field: 'Count', type: 'quantitative'},
        },
      },
    ],
    
  }

  const covid = {
    covid: [
      { Date: '2020-1-14', Cases: 100, Deaths: 28 },
      { Date: '2020-3-24', Cases: 150, Deaths: 55 },
      { Date: '2020-7-8', Cases: 80, Deaths: 43 },
      { Date: '2020-11-15', Cases: 200,  Deaths: 91 },
      { Date: '2021-2-10', Cases: 170, Deaths: 81 },
      { Date: '2021-5-27', Cases: 250, Deaths: 53 },
      { Date: '2021-7-2', Cases: 100, Deaths: 25 },
      { Date: '2021-10-19', Cases: 50, Deaths: 16 },
      { Date: '2021-12-30', Cases: 25, Deaths: 3 },
    ],
  }

  return (
    <VegaLite spec={spec} data={{flights: flightsData}} tooltip={new Handler().call} actions={false}/> // add "tooltip={new Handler().call}" inside if the given tool tip is not enough and we want to create our own https://github.com/vega/vega-tooltip
  );
}
export default Graph;