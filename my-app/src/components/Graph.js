import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { VegaLite } from 'react-vega'
import { Handler } from 'vega-tooltip'


const Graph = (props) => {
  const [airport, setAirport] = useState("")
  const [data, setData] = useState([])

  const getData = async (newAirport) => {
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
            setData(data)
        }
    } catch (error) {
        alert(error.message)
    }
}
  const handleChange = (newAirport) => {
    getData(newAirport)
  }

  useEffect(() => {
    if(props.airport !== airport) {
      handleChange(props.airport)
      setAirport(props.airport)
    }
  }, [props]);

  const spec = {
    title: airport + " data",
    width: 750,
    height: 750,
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
    data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
  }

  return (
    <VegaLite spec={spec} data={{table: data}} tooltip={new Handler().call} actions={false}/> // add "tooltip={new Handler().call}" inside if the given tool tip is not enough and we want to create our own https://github.com/vega/vega-tooltip
  );
}
export default Graph;

// const Graph = () => {
//   const [airport, setAirport] = useState("")
//   const spec = {
//     title: airport + "something",
//     width: 750,
//     height: 750,
//     mark: {
//       type: 'line',
//       interpolate: 'monotone', // (maybe try "step-after") check out different types of interpolations at https://vega.github.io/vega-lite/docs/line.html
//       tooltip: true, 
//       point: true // the tooltip does not work without adding points for some reason. Will probably need to switch to something like what we had for A3
//     },
//     encoding: {
//       x: { field: 'Date', type: 'temporal', title: 'Date'},
//       y: { field: 'Count', type: 'quantitative', title: "# of Flights"},
//     },
//     data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
//   }


//   const barData = {
//     table: [
//       { Date: '2018-10-10', Count: 176 },
//       { Date: '2019-5-20', Count: 200 },
//       { Date: '2020-4-15', Count: 45 },
//       { Date: '2020-8-24', Count: 91 },
//       { Date: '2020-12-12', Count: 100 },
//       { Date: '2021-2-5', Count: 53 },
//       { Date: '2021-5-27', Count: 169 },
//       { Date: '2021-8-3', Count: 150 },
//       { Date: '2021-9-7', Count: 52 },
//     ],
//   }

//   return (
//     <VegaLite spec={spec} data={barData} tooltip={new Handler().call} /> //if the given tool tip is not enough and we want to create our own https://github.com/vega/vega-tooltip
//   );
// }
// export default Graph;