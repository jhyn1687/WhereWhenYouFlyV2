import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { VegaLite } from "react-vega";
import { Handler } from "vega-tooltip";

const InTextGraph = (props) => {
  const [airport, setAirport] = useState("");
  const [flightsData, setFlightsData] = useState([]);

  useEffect(() => {
    async function getFlightsData(newAirport) {
      try {
        let { data, error, status } = await supabase
          .from("Flights")
          .select(`Date, Count, State, Cases, Deaths`)
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
  }, [props, airport]);

  const spec = {
    layer: [
      {
        data: { name: "flights" },
        mark: {
          type: "line",
          interpolate: "basis", // (maybe try "step-after") check out different types of interpolations at https://vega.github.io/vega-lite/docs/line.html
          tension: 0,
          stroke: "#4E79A7",
        },
        params : [ // this adds the pan and zoom feature
          {
            name: "grid",
            select: {
              type: 'interval',
              encodings: "x"
            },
            bind: 'scales'
          }
        ],
        title: "Outgoing Flights at " + airport + " airport vs. COVID Cases data for " + (flightsData.length > 0 ? flightsData[0].State : ""),
        encoding: {
          x: { field: "Date", type: "temporal", title: "Date", scale: {domain: [props.min, props.max]}
          },
          y: { field: "Count", type: "quantitative", axis: {titleColor: "#4E79A7"}, title: "Outgoing Flights" },
        },
      },
      {
        data: { name: "flights" },
        mark: {
          type: "bar",
          fill: "black",
        },
        encoding: {
          opacity: {
            value: 0.3,
          },
          x: { field: "Date", type: "temporal", title: "Date"},
          y: { field: "Cases", type: "quantitative", axis: {titleColor: "#000000"}, title: "# of COVID Cases" }, 
        },
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
          x: { field: "Date", type: "temporal"},
          tooltip: [
            { field: "Date", type: "temporal" },
            { field: "Count", type: "quantitative", title: "Outgoing Flights" },
            { field: "Cases", type: "quantitative", title: "# of COVID Cases" },
          ],
          opacity: {
            condition: { value: 0.6, param: "hover", empty: false },
            value: 0,
          },
        },
      },
    ],
    resolve: {scale: {y: "independent"}}, 
    encoding: {
      x: {
        field: "Date",
        type: "temporal",
        title: "Date",
      },
    },
    tooltip: [
      {
        type: "temporal",
        field: "date",
      },
      { field: "Count", type: "quantitative" },
    ],
  };

  return (
    airport === "" ? <></> :
    <VegaLite
      className="intext-graph"
      spec={spec}
      data={{ flights: flightsData }}
      tooltip={new Handler().call}
      actions={false}
      width={0.15 * window.innerWidth}
      height={0.3 * window.innerHeight}
    /> 
  );
};
export default InTextGraph;
