import React from "react";
import { InView } from "react-intersection-observer";
import InTextGraph from "./InTextGraph";

const Article = (props) => {
  return (
    <div id="Article">
      <div className="article-paragraph">
        <h1 style={{ color: "white" }}>
          Rural Airports // EWN VS. BRW
        </h1>
        <p style={{ color: "white" }}>
          Trends for Specific Rural Airports East vs West: Before April of 2020,
          both trend lines were mostly steady on average and higher than after
          April of 2020 trend lines on average. We can see in the graph for
          Barrow, Alaska (BRW) in the Wiley Post-Will Rogers Meml airport that
          the count for outgoing flights fluctuates between 1 and 2 before April
          2020. But after April 2020, the outgoing flights stay at a consistent
          1 count everyday. Regarding James City, North Carolina (EWN) in the
          Coastal Carolina Regional Airport, the average outgoing flights
          fluctuate mostly between 5 - 7 with an all time low of 1 and all time
          high of 8. After April 2020, the outflight flights fluctuate mostly
          between 2 - 5 with an all time low of 1 and all time high of 6. When
          cases of COVID-19 rose for both states of the respective cities, it is
          noticed that outgoing flight trends blatantly decreased. While
          COVID-19 cases were higher in EWN, the number of flights were still on
          average higher than the number of flights on average in BRW with lower
          COVID-19 cases overall. This may be due to the difference in
          population between the two rural cities. BRW has a population of
          around 4,300 whereas EWN has a population of around 5,200. There is an
          approximate 1,000 difference in total population between the two
          cities. An interesting observation is that while BRW's COVID-19 cases
          grew in total in October 2020 compared to October 2021, the number of
          outgoing flights stayed the same. But when COVID-19 cases lessened
          slightly from December 2020 compared to September 2021 in EWN, the
          outgoing flights increased from an approximate average of 3 to 4.5.
          While overall outgoing flight trends are similar between the two
          airports, there are slight differences based on factors due to
          population and COVID-19 case trends. <br />
          Citations: <br />
          https://www.biggestuscities.com/city/barrow-alaska <br />
          https://www.census.gov/quickfacts/fact/table/jamescitycdpnorthcarolina/HSD410220{" "}
          <br />
        </p>
      </div>
      <div className="article-paragraph">
        <h1 className="article-header">
          Urban Airports // ORD VS. LAX
        </h1>
        <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)} triggerOnce={true}>
          <InTextGraph airport={"LAX"} style={{alignSelf:"center"}} min={'2018-01-01'} max={'2019-04-02'}/>
        </InView>
        
        <p className="article-text">
          We can see numbers for outgoing flights dip way down as soon as cases
          show up in the states.
        </p>
        <p className="article-text">
          Chicago (ORD) goes from around 900 to around 500 while LA (LAX) goes
          from around 600 to 400 flights. Chicago dips down around twice as much
          as LA. The lowest point for LA and Chicago due to covid is around 200
          outgoing flights.
        </p>
        <p className="article-text">
          LA has a lot more cases than Chicago during the end of 2020 and the
          start of 2021. However, the difference between outgoing flights during
          this time is around 100, where the average for Chicago was 400 and the
          Average for LA was around 300.
        </p>
        <p className="article-text">
          At this time, LA was closer to the average number of flights that the
          airport had before the covid era, this could have accounted for the
          increased number of cases. LA's bigger population might also have a
          big factor for this, with LA having around 1 million more people
          living in the city than Chicago during this time.
        </p>
        <p className="article-text">
          There is definitely a trend for both cities, such that as the amount
          of covid cases rises, we see the number of outgoing flights dips. The
          highest number of outgoing flights for Chicago during the COVID era
          was around 850 and LA's highest was around 600.
        </p>
        <p className="article-text">
          The difference between the highest number of outgoing flights before
          and during the covid era for Chicago was around 200, and for LA the
          difference was around 150.
        </p>
        <p className="article-text">
          By the end of 2021, we see a downward trend for the amount of flights
          in both airports as the number of covid cases increased.
        </p>
        <p className="article-text">
          The relationship between number of flights and COVID cases is
          complicated, as the social responsibility of quarantine was worn down
          over the pandemic. While we do see some responses to COVID waves, none
          of them are as severe as the initial shutdown. Also, like we discussed
          earlier, an increase in the number of flights can also result in a
          higher number of COVID cases, causing almost a feedback loop.
        </p>
        <p className="article-text">
          Citations: <br />
          https://www.usatoday.com/story/travel/news/2022/10/15/what-is-the-busiest-airport/10341892002/{" "}
          <br />
          https://www.bts.gov/topics/airlines-and-airports/rural-airports <br />
        </p>
      </div>
      
      <div className="article-paragraph">
        <h1 className="article-header">
          All Airports // Explore
        </h1>
        <p className="article-text">
          Check out some other airports by clicking on the dots on the globe on the left!
        </p>
      </div>
    </div>
  );
};

export default Article;
