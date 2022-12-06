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

      <h1 style={{color:"white"}}>Urban Airports the East Versus the West (LAX and ORD)</h1>
      <p style={{color:"white"}}>
      We can see both amounts for flights out dip way down as soon as cases show up in the state. 
      Chicago (ORD)  goes from aount 900 to around 500 while LA (LAX) goes from around 600 to 400 flights. 
      Chicago dips down around twice as much as LA. The lowest that LA and Chicago both get because of covid
       is around 200 flights out. LA has a lot more cases than Chicago during the end of 2020 and the start 
       of 2021 however the difference between flights going out during this time is around 100 Where the average
        for Chicago was 400 and the Average for LA was around 300. At this time LA was closer to the average 
        amount of flights that the airport had before the covid era, this could have accounted for the increased
         amount of cases. LA’s bigger population might also have a big factor for this, with LA having around 
         1 million more people living in the city than Chicago during this time. There is definitely the trend 
         for both that as the amount covid cases rises we see the amount of flights out dips. The highest amount 
         of flight going out for Chicago during the covid era was around 850 and LA’s highest was around 600. The 
         difference between the highest amount of flights out before and during the covid era for Chicago was 
         around 200, and for LA the difference was around 150. As of the end of 2021 we see a downward trend 
         for the amount of flights in both airports as the number of covid cases increased. <br/>
      Citations: <br/>
      https://www.usatoday.com/story/travel/news/2022/10/15/what-is-the-busiest-airport/10341892002/ <br/>
      https://www.bts.gov/topics/airlines-and-airports/rural-airports <br/>
      </p>
    </div>
  );
};

export default Article;
