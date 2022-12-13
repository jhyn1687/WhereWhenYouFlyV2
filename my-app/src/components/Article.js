import React, { useState } from "react";
import InTextGraph from "./InTextGraph";
import Graph from "./Graph";
import { AiFillCaretDown as Down } from "react-icons/ai";

const Article = (props) => {
  const [graph1, setGraph1] = useState({
    airport: "EWN",
    min: "2018-01-01",
    max: "2021-12-31",
  });
  const [graph2, setGraph2] = useState({
    airport: "LAX",
    min: "2018-01-01",
    max: "2021-12-31",
  });

  return (
    <div id="Article">
      <div className="article-paragraph">
        <h1 className="article-header">
          Rural Airports //{" "}
          <button
            className="title-button"
            onClick={() =>
              setGraph1({
                airport: "EWN",
                min: "2018-01-01",
                max: "2021-12-31",
              })
            }
          >
            EWN
          </button>{" "}
          VS.{" "}
          <button
            className="title-button"
            onClick={() =>
              setGraph1({
                airport: "BRW",
                min: "2018-01-01",
                max: "2021-12-31",
              })
            }
          >
            BRW
          </button>
        </h1>
        <div>
          <InTextGraph
            airport={graph1.airport}
            min={graph1.min}
            max={graph1.max}
          />
          <p className="article-text">
            Before April of 2020, both trend lines were mostly steady on average
            and higher than after April of 2020 trend lines on average.
          </p>
          <p className="article-text">
            We can see in the graph for Barrow, Alaska (BRW) in the Wiley
            Post-Will Rogers Meml airport that the count for outgoing flights
            fluctuates between 1 and 2{" "}
            <button
              className="button"
              onClick={() =>
                setGraph1({
                  airport: "BRW",
                  min: "2018-01-01",
                  max: "2020-04-01",
                })
              }
            >
              before April 2020
            </button>
            . But{" "}
            <button
              className="button"
              onClick={() =>
                setGraph1({
                  airport: "BRW",
                  min: "2020-04-01",
                  max: "2021-12-30",
                })
              }
            >
              after April 2020
            </button>
            , the outgoing flights stay at a consistent 1 count everyday.
          </p>
          <p className="article-text">
            Regarding James City, North Carolina (EWN) in the Coastal Carolina
            Regional Airport, the{" "}
            <button
              className="button"
              onClick={() =>
                setGraph1({
                  airport: "EWN",
                  min: "2018-01-01",
                  max: "2020-04-01",
                })
              }
            >
              average outgoing flights fluctuate mostly between 5 - 7
            </button>{" "}
            with an all time low of 1 and all time high of 8.{" "}
            <button
              className="button"
              onClick={() =>
                setGraph1({
                  airport: "EWN",
                  min: "2020-04-01",
                  max: "2021-12-30",
                })
              }
            >
              After April 2020
            </button>
            , the outflight flights fluctuate mostly between 2 - 5 with an all
            time low of 1 and all time high of 6.
          </p>

          <p className="article-text">
            When cases of COVID-19 rose for both states of the respective
            cities, it is noticed that outgoing flight trends blatantly
            decreased. While COVID-19 cases were higher in EWN, the number of
            flights were still on average higher than the number of flights on
            average in BRW with lower COVID-19 cases overall.
          </p>
          <p className="article-text">
            This may be due to the difference in population between the two
            rural cities. BRW has a population of around 4,300 whereas EWN has a
            population of around 5,200. There is an approximate 1,000 difference
            in total population between the two cities.
          </p>
          <p className="article-text">
            An interesting observation is that{" "}
            <button
              className="button"
              onClick={() =>
                setGraph1({
                  airport: "BRW",
                  min: "2020-09-27",
                  max: "2021-11-01",
                })
              }
            >
              while BRW's COVID-19 cases grew in total
            </button>{" "}
            in October 2020 compared to October 2021, the number of outgoing
            flights stayed the same.{" "}
            <button
              className="button"
              onClick={() =>
                setGraph1({
                  airport: "EWN",
                  min: "2020-11-29",
                  max: "2021-10-01",
                })
              }
            >
              But when COVID-19 cases lessened slightly
            </button>{" "}
            from December 2020 compared to September 2021 in EWN, the outgoing
            flights increased from an approximate average of 3 to 4.5.
          </p>
          <p className="article-text">
            While overall outgoing flight trends are similar between the two
            airports, there are slight differences based on factors due to
            population and COVID-19 case trends.
          </p>
        </div>
        <p className="article-text">Citations:</p>
        <a href="https://www.biggestuscities.com/city/barrow-alaska">
          Barrow, Alaska Population
        </a>
        <a href="https://www.census.gov/quickfacts/fact/table/jamescitycdpnorthcarolina/HSD410220">
          James City, North Carolina Population
        </a>
        <Down className="icon-link bounce" />
      </div>
      <hr />
      <div className="article-paragraph">
        <h1 className="article-header">
          Urban Airports //{" "}
          <button
            className="title-button"
            onClick={() =>
              setGraph2({
                airport: "ORD",
                min: "2018-01-01",
                max: "2021-12-31",
              })
            }
          >
            ORD
          </button>{" "}
          VS.{" "}
          <button
            className="title-button"
            onClick={() =>
              setGraph2({
                airport: "LAX",
                min: "2018-01-01",
                max: "2021-12-31",
              })
            }
          >
            LAX
          </button>
        </h1>
        <div>
          <InTextGraph
            airport={graph2.airport}
            min={graph2.min}
            max={graph2.max}
          />
          <p className="article-text">
            We can see numbers for outgoing flights dip way down as soon as
            cases show up in the states.
          </p>
          <p className="article-text">
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "ORD",
                  min: "2020-03-01",
                  max: "2020-03-24",
                })
              }
            >
              Chicago (ORD) goes from around 900's to around 500's{" "}
            </button>{" "}
            while
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "LAX",
                  min: "2020-03-01",
                  max: "2020-03-24",
                })
              }
            >
              LA (LAX) goes from around 600 to 400 flights
            </button>
            . Chicago dips down around twice as much as LA.{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "LAX",
                  min: "2020-03-01",
                  max: "2020-07-04",
                })
              }
            >
              The lowest point for LA
            </button>{" "}
            due to COVID-19 is around 100 outgoing flights while{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "ORD",
                  min: "2020-03-01",
                  max: "2020-07-04",
                })
              }
            >
              for Chicago
            </button>{" "}
            it was around 150 outgoing flights.
          </p>
          <p className="article-text">
            LA has a lot more cases than Chicago during the end of 2020 and the
            start of 2021. However, the difference between outgoing flights
            during this time is around 100, where{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "ORD",
                  min: "2020-09-15",
                  max: "2021-04-15",
                })
              }
            >
              the average for Chicago
            </button>{" "}
            was 400 and{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "LAX",
                  min: "2020-09-15",
                  max: "2021-04-15",
                })
              }
            >
              the average for LA
            </button>{" "}
            was around 300.
          </p>
          <p className="article-text">
            At this time,{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "LAX",
                  min: "2020-01-01",
                  max: "2021-03-01",
                })
              }
            >
              LA was closer
            </button>{" "}
            to the average number of flights that the airport had before the
            COVID-19 era{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "ORD",
                  min: "2020-01-01",
                  max: "2021-03-01",
                })
              }
            >
              than Chicago
            </button>
            , this could have accounted for the increased number of cases. LA's
            bigger population might also have a big factor for this, with LA
            having around 1 million more people living in the city than Chicago
            during this time.
          </p>
          <p className="article-text">
            There is definitely a trend for both cities, such that as the amount
            of COVID-19 cases rises, we see the number of outgoing flights dips.
            The{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "ORD",
                  min: "2020-10-01",
                  max: "2021-12-30",
                })
              }
            >
              highest number of outgoing flights for Chicago
            </button>{" "}
            during the COVID-19 era was around 850 and{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "LAX",
                  min: "2020-10-01",
                  max: "2021-12-30",
                })
              }
            >
              LA's highest
            </button>{" "}
            was around 600.
          </p>
          <p className="article-text">
            The difference between the highest number of outgoing flights before
            and during the COVID-19 era for{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "ORD",
                  min: "2019-08-01",
                  max: "2021-12-30",
                })
              }
            >
              Chicago was around 200
            </button>
            , and for{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "LAX",
                  min: "2019-08-01",
                  max: "2021-12-30",
                })
              }
            >
              LA
            </button>{" "}
            the difference was around 150.
          </p>
          <p className="article-text">
            By the end of 2021, we see a downward trend for the amount of
            flights in both{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "ORD",
                  min: "2021-07-01",
                  max: "2021-12-30",
                })
              }
            >
              Chicago
            </button>{" "}
            and{" "}
            <button
              className="button"
              onClick={() =>
                setGraph2({
                  airport: "LAX",
                  min: "2021-07-01",
                  max: "2021-12-30",
                })
              }
            >
              LA
            </button>{" "}
            as the number of COVID-19 cases increased.
          </p>
          <p className="article-text">
            The relationship between number of flights and COVID-19 cases is
            complicated, as the social responsibility of quarantine was worn
            down over the pandemic. While we do see some responses to COVID
            waves, none of them are as severe as the initial shutdown. Also,
            like we discussed earlier, an increase in the number of flights can
            also result in a higher number of COVID-19 cases, causing almost a
            feedback loop.
          </p>
        </div>
        <p className="article-text">Citations: </p>
        <a href="https://www.usatoday.com/story/travel/news/2022/10/15/what-is-the-busiest-airport/10341892002/">
          What is the busiest airport in the US?
        </a>
        <a href="https://www.bts.gov/topics/airlines-and-airports/rural-airports">
          Rural Airports
        </a>
        <Down className="icon-link bounce" />
      </div>
      <hr />
      <div className="article-paragraph">
        <h1 className="article-header">All Airports // Explore</h1>
        <p className="article-text">
          Check out some other airports by clicking on the dots on the globe on
          the left!
        </p>
        <p className="article-text">A graph will show up below :D</p>
        <Graph airport={props.airport} />
      </div>
    </div>
  );
};

export default Article;
