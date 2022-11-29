import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";

const Graph = (props) => {
  const [airport, setAirport] = useState("");
  const [flightsData, setFlightsData] = useState([]);

  useEffect(() => {
    async function getFlightsData(newAirport) {
      try {
        let { data, error, status } = await supabase
          .from("Flights")
          .select(`Date, Count, Cases, Deaths`)
          .eq("Airport", newAirport);
  
        console.log(data);
  
        if (error && status !== 406) {
          throw error;
        }
  
        if (data) {
          setFlightsData(data);
        }
      } catch (error) {
        alert(error.message);
      }
    }

    if (props.airport !== airport) {
      getFlightsData(props.airport);
      setAirport(props.airport);
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
    // params : [ // this adds the pan and zoom feature
    //   {
    //     name: "grid",
    //     select: 'interval',
    //     bind: 'scales'
    //   }
    // ],
    vconcat: [
      {
        layer: [
          {
            data: { name: "flights" },
            mark: {
              type: "bar",
              fill: "black",
            },
            encoding: {
              opacity: {
                value: 0.5,
              },

              x: { field: "Date", type: "temporal", title: "Date", scale:{domain: ['2018-01-01', '2021-12-31']}},
              y: { field: "Cases", type: "quantitative"}, 
            },
          },
          {
            data: { name: "flights" },
            mark: {
              type: "line",
              interpolate: "monotone", // (maybe try "step-after") check out different types of interpolations at https://vega.github.io/vega-lite/docs/line.html
              tension: 0,
              stroke: "#4E79A7"
            },
            title: airport + " data",
            encoding: {
              x: { field: "Date", type: "temporal", title: "Date" },
              y: { field: "Count", type: "quantitative",  axis: {titleColor: "#4E79A7"} },
            },
            params: [
              {
                name: "name3",
                select: {
                  type: "point",
                  encodings: ["x"],
                  on: "mouseover",
                  toggle: false,
                  nearest: true,
                },
              },
            ],
          },

          {
            data: { name: "flights" },
            mark: "rule",
            params: [
              {
                name: "hover",
                select: {
                  type: "point",
                  encodings: ["x"],
                  on: "mouseover",
                  nearest: true,
                },
              },
            ],
            encoding: {
              x: { field: "Date", type: "temporal" },
              tooltip: [
                { field: "Date", type: "temporal" },
                { field: "Count", type: "quantitative" },
                { field: "Cases", type: "quantitative" },
              ],
              opacity: {
                condition: { value: 0.6, param: "hover", empty: false },
                value: 0,
              },
            },
          },
        ],
        resolve: {scale: {y: "independent"}}, 
        width: 0.4 * window.innerWidth,
        height: 0.1 * window.innerWidth,
        encoding: {
          x: {
            field: "Date",
            type: "temporal",
            title: "Date",
            scale: {
              domain: {
                param: "name4",
              },
            },
          },
          y: { field: "Count", type: "quantitative" },
        },
        tooltip: [
          {
            type: "temporal",
            field: "date",
          },
          { field: "Count", type: "quantitative" },
        ],
      },
      {
        data: { name: "flights" },
        mark: {
          type: "line",
        },
        encoding: {
          x: { field: "Date", type: "temporal", title: "Date" },
          y: { field: "Count", type: "quantitative" },
        },
        params: [
          {
            name: "name4",
            select: {
              type: "interval",
              encodings: ["x"],
              translate: true,
            },
          },
        ],
        width: 0.4 * window.innerWidth,
        height: 75,
      },
    ],
  };

  return (
    <VegaLite
      spec={spec}
      data={{ flights: flightsData }}
      tooltip={new Handler().call}
      actions={false}
    /> // add "tooltip={new Handler().call}" inside if the given tool tip is not enough and we want to create our own https://github.com/vega/vega-tooltip
  );
};
export default Graph;
