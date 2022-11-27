import React from 'react'
import { VegaLite } from 'react-vega'
import { Handler } from 'vega-tooltip'

const Graph = () => {

const spec = {
  width: 750,
  height: 750,
  mark: {
    'type': 'line',
    'interpolate': 'monotone', // (maybe try "step-after") check out different types of interpolations at https://vega.github.io/vega-lite/docs/line.html
    'tooltip': true // equivalent to setting the tooltip property to {"content" "encoding"} (This will show date and amount of flights)
  },
  encoding: {
    x: { field: 'Date', type: 'temporal', title: 'Date'},
    y: { field: 'Count', type: 'quantitative', title: "# of Flights"},
  },
  data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
}


  const barData = {
    table: [
      { a: 'A', b: 28 },
      { a: 'B', b: 55 },
      { a: 'C', b: 43 },
      { a: 'D', b: 91 },
      { a: 'E', b: 81 },
      { a: 'F', b: 53 },
      { a: 'G', b: 19 },
      { a: 'H', b: 87 },
      { a: 'I', b: 52 },
    ],
  }

  return (
    <VegaLite spec={spec} data={barData} tooltip={new Handler().call} />
  );

}

export default Graph;