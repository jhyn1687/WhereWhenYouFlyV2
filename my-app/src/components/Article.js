import React from "react";

const Article = () => {
  return (
    <div id="Article">
      <h1 style={{color:"white"}}>Rural Airports the East Versus the West (BRW and EWN)</h1>
      <p style={{color:"white"}}>
      Trends for Specific Rural Airports East vs West: Before April of 2020, 
      both trend lines were mostly steady on average and higher than after April of 
      2020 trend lines on average. We can see in the graph for Barrow, Alaska (BRW) 
      in the Wiley Post-Will Rogers Meml airport that the count for outgoing flights fluctuates 
      between 1 and 2 before April 2020. But after April 2020, the outgoing flights stay at a consistent
       1 count everyday. Regarding James City, North Carolina (EWN) in the Coastal Carolina Regional Airport,
        the average outgoing flights fluctuate mostly between 5 - 7 with an all time low of 1 and all time 
        high of 8. After April 2020, the outflight flights fluctuate mostly between 2 - 5 with an all time 
        low of 1 and all time high of 6. When cases of COVID-19 rose for both states of the respective cities,
         it is noticed that outgoing flight trends blatantly decreased. While COVID-19 cases were higher in EWN,
          the number of flights were still on average higher than the number of flights on average in BRW with 
          lower COVID-19 cases overall. This may be due to the difference in population between the two rural
           cities. BRW has a population of around 4,300 whereas EWN has a population of around 5,200. There is
            an approximate 1,000 difference in total population between the two cities. An interesting
             observation is that while BRW’s COVID-19 cases grew in total in October 2020 compared to October
              2021, the number of outgoing flights stayed the same. But when COVID-19 cases lessened slightly
               from December 2020 compared to September 2021 in EWN, the outgoing flights increased from an 
               approximate average of 3 to 4.5. While overall outgoing flight trends are similar between the
                two airports, there are slight differences based on factors due to population and COVID-19 case 
                trends. <br/>
      Citations: <br/>
      https://www.biggestuscities.com/city/barrow-alaska <br/>
      https://www.census.gov/quickfacts/fact/table/jamescitycdpnorthcarolina/HSD410220 <br/>

      </p>

    </div>
  );
};

export default Article;
