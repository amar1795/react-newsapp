import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "Kyle Porter",
        "title": "2023 U.S. Open leaderboard: Live coverage, golf scores today in Round 1 at Los Angeles Country Club - CBS Sports",
        "description": "Live scores, updates and highlights from the first round of the 123rd U.S. Open at Los Angeles Country Club",
        "url": "https://www.cbssports.com/golf/news/2023-u-s-open-leaderboard-live-coverage-golf-scores-today-in-round-1-at-los-angeles-country-club/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/15/cbc4c602-2055-4994-9591-73f388ad5a18/thumbnail/1200x675/10b5ed7c77bc50e67db8f8888f163c43/us-open-hill-sign-p3-g.png",
        "publishedAt": "2023-06-15T16:26:25Z",
        "content": "LOS ANGELES -- One of the most anticipated major championships of the last decade has arrived with the 2023 U.S. Open beginning Thursday at Los Angeles Country Club. There are storylines for days. Ph… [+1297 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "WFSB"
        },
        "author": null,
        "title": "Nathan Carman dies awaiting trial for his mother’s death in 2016 fishing trip - Eyewitness News 3",
        "description": "The man charged with killing his mother at sea during a 2016 fishing trip off the coast of New England has died awaiting trial, federal authorities said Thursday. Prosecutors say it was a scheme to inherit millions of dollars.",
        "url": "https://www.wfsb.com/2023/06/15/nathan-carman-dies-awaiting-trial-his-mothers-death-2016-fishing-trip/",
        "urlToImage": "https://gray-wfsb-prod.cdn.arcpublishing.com/resizer/s_C_3goxt2QbUZpihYW3i2nuITI=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/FDSPHZ7PSZEERLOE2RNXTAIOXM.jpg",
        "publishedAt": "2023-06-15T15:42:00Z",
        "content": "BURLINGTON, Vt. (AP) The man charged with killing his mother at sea during a 2016 fishing trip off the coast of New England has died awaiting trial, federal authorities said Thursday. Prosecutors say… [+1778 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Sean Lyngaas",
        "title": "Exclusive: US government agencies hit in global cyberattack - CNN",
        "description": "“Several” US federal government agencies have been hit in a global cyberattack that exploits a vulnerability in widely used software.",
        "url": "https://www.cnn.com/2023/06/15/politics/us-government-hit-cybeattack/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220228105352-hackers.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-06-15T15:34:00Z",
        "content": "Several US federal government agencies have been hit in a global cyberattack that exploits a vulnerability in widely used software.\r\nThe US Cybersecurity and Infrastructure Security Agency is providi… [+2769 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Kwara boat capsize: Mothers die trying to save children in Nigeria - BBC",
        "description": "More than 100 people drowned when the wooden boat they were using to cross the River Niger capsized.",
        "url": "https://www.bbc.com/news/world-africa-65919230",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DEBC/production/_130102075_maria.jpg",
        "publishedAt": "2023-06-15T15:08:33Z",
        "content": "Among the more than 100 people who drowned earlier this week when a boat capsized on the River Niger in central Nigeria were many parents trying to save their children, a survivor tells the BBC.\r\nMoh… [+5418 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Denver Nuggets Parade: Watch Live - 2023 NBA Champions Celebration - FOX31 Denver",
        "description": "Watch live coverage of the Denver Nuggets celebrating their 2023 NBA championship with a parade and rally in downtown Denver on Thursday, June 14.In Denver, ...",
        "url": "https://www.youtube.com/watch?v=GKsPsvorS4s",
        "urlToImage": "https://i.ytimg.com/vi/GKsPsvorS4s/maxresdefault_live.jpg",
        "publishedAt": "2023-06-15T14:57:42Z",
        "content": null
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Karol Suarez,Mia Alberti",
        "title": "American woman and unidentified man found dead in hotel room in Mexican resort town, authorities say - CNN",
        "description": "An American woman and an unidentified man were found dead Tuesday in a hotel room in Mexico, authorities said.",
        "url": "https://www.cnn.com/2023/06/15/americas/mexico-baja-california-sur-american-deaths/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230615033932-01-americans-found-dead-mx-map.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-06-15T14:32:00Z",
        "content": "An American woman and an unidentified man were found dead Tuesday in a hotel room in Mexico, authorities said.\r\nThey were discovered in the Mexican resort village of El Pescadero in Baja California S… [+1547 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Medscape"
        },
        "author": "Massimo Sandal",
        "title": "Latest Data: COVID Vax in Inflammatory, Autoimmune Diseases - Medscape",
        "description": "EULAR 2023 served up a bevy of studies on the protection and safety of COVID vaccines for patients and pregnant and breastfeeding women, as well as on the influence of underlying diseases and drugs.",
        "url": "https://www.medscape.com/viewarticle/993238",
        "urlToImage": "https://img.medscape.com/thumbnail_library/gty_211102_covid_vaccination_doctor_patient_800x450.jpg",
        "publishedAt": "2023-06-15T14:15:57Z",
        "content": "MILAN The impact of the COVID-19 pandemic on patients with rheumatic and nonrheumatic autoimmune diseases is ongoing and not yet fully comprehended. New data presented at the European Alliance of Ass… [+14466 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Athletic"
        },
        "author": "Will Sammon, Chris Kirschner, Brendan Kuty",
        "title": "Yankees-Mets Subway Series takeaways: 9 eye-opening moments - The Athletic",
        "description": "Despite the Yankees’ better record, the title of Best Team In New York may still be far from decided.",
        "url": "https://theathletic.com/4612028/2023/06/15/yankees-mets-subway-series-9-takeaways/",
        "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/06/15013920/AP23166176064852-1024x683.jpg",
        "publishedAt": "2023-06-15T14:14:43Z",
        "content": "By Brendan Kuty\r\n, Chris Kirschner\r\n and Will Sammon\r\nNEW YORK Going into the Subway Series, the Yankees and the Mets were teams still searching for identities.\r\nLeaving it, they didnt seem any close… [+9689 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "Fin Gómez, Aaron Navarro, Musadiq Bidar",
        "title": "Miami Mayor Francis Suarez enters crowded GOP presidential race - CBS News",
        "description": "The 45-year-old mayor, the only Hispanic candidate in the race, declared his candidacy by filing with the FEC ahead of a speech on Thursday.",
        "url": "https://www.cbsnews.com/news/francis-suarez-running-president-miami-mayor/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/14/f18bad5e-5a8e-4138-9a4f-662770afd062/thumbnail/1200x630g7/6d825917f777ced54bcd7688f5e8aeab/gettyimages-1249938391.jpg?v=adb9795b43723798d80fb080371b87b9",
        "publishedAt": "2023-06-15T14:07:00Z",
        "content": "Miami Mayor Francis Suarez became the latest Republican to enter the crowded race for the presidency, filing paperwork with the Federal Election Commission Wednesday.\r\nA senior Republican source fami… [+4626 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "IndieWire"
        },
        "author": "Eric Kohn",
        "title": "Wes Anderson Interview: 'Asteroid City' Influences and More – IndieWire - IndieWire",
        "description": "The filmmaker spoke to IndieWire about his obsessions with two distinct eras in American art and how they inspired his most personal movie.",
        "url": "https://www.indiewire.com/features/interviews/wes-anderson-interview-asteroid-city-1234874967/",
        "urlToImage": "https://www.indiewire.com/wp-content/uploads/2023/06/GettyImages-1492867051.jpg",
        "publishedAt": "2023-06-15T14:00:00Z",
        "content": "Wes Anderson has explored many distinctive milieus over the years, from the fictional Zubrowska of “The Grand Budapest Hotel” to the bottom of the sea in “The Life Aquatic with Steve Zissou” and “Isl… [+16930 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Sana Noor Haq,Elinda Labropoulou",
        "title": "‘Sudden’ shift in weight caused migrant boat to sink, Greek coast guard says, as hundreds more feared dead - CNN",
        "description": "Kassem Abozeed had arrived in Kalamata to try to find his wife and brother-in-law, as relatives poured into the Greek port city on Thursday, searching for their loved ones missing after a migrant boat sank off the coast, killing dozens of people.",
        "url": "https://www.cnn.com/2023/06/15/europe/migrant-boat-sinking-greece-cause-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230614143028-greece-migrant-ship-before.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-06-15T13:36:00Z",
        "content": "Kassem Abozeed had arrived in Kalamata to try to find his wife and brother-in-law, as relatives poured into the Greek port city on Thursday, searching for their loved ones missing after a migrant boa… [+6094 chars]"
        },
        {
        "source": {
        "id": "abc-news",
        "name": "ABC News"
        },
        "author": "Armando Garcia, Quinn Owen",
        "title": "DACA turns 11: As White House calls for immigration reform, 'Dreamers' share their worries - ABC News",
        "description": "The program for young migrants is in legal limbo, awaiting a judge's ruling.",
        "url": "https://abcnews.go.com/Politics/daca-turns-11-white-house-calls-immigration-reform/story?id=100084798",
        "urlToImage": "https://s.abcnews.com/images/Politics/daca-dreamers-alejandro-mayorkas-03-gty-llr-220824_1661388212584_hpMain_2_16x9_992.jpg",
        "publishedAt": "2023-06-15T13:35:15Z",
        "content": "The Deferred Action for Childhood Arrivals program, known as DACA, hit a milestone on Thursday, 11 years after it first began.\r\nAs the White House touts how DACA has helped support young immigrants w… [+6637 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "Mike Wall",
        "title": "Watch 2 NASA astronauts spacewalk outside space station today in this free livestream - Space.com",
        "description": "The roughly 6-hour EVA is scheduled to begin Thursday (June 15) at 8:55 a.m. ET.",
        "url": "https://www.space.com/nasa-spacewalk-june-2023-webcast",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/kt5YpUPFJNbwgGW7yU8wm3-1200-80.jpeg",
        "publishedAt": "2023-06-15T13:27:17Z",
        "content": "Two NASA astronauts are conducting a spacewalk outside the International Space Station on today (June 15), and you can watch the excursion live.\r\nWoody Hoburg and Stephen Bowen were scheduled to begi… [+1883 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "Kerry Breen",
        "title": "NASA's Curiosity rover sends \"postcard\" showing Mars during different times of the day - CBS News",
        "description": "The panoramic postcard shows multiple landmarks on the planet.",
        "url": "https://www.cbsnews.com/news/mars-postcard-nasa-curiosity-rover/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/06/15/ad21b349-921c-42e9-b981-ed83a0b4431a/thumbnail/1200x630/701b9881aeee68265daa39db30bfd9bc/27508-pia25912-web.jpg?v=adb9795b43723798d80fb080371b87b9",
        "publishedAt": "2023-06-15T13:17:00Z",
        "content": "NASA's Mars rover, Curiosity, recently captured a stunning photo of the Martian skies and landscape that offers researchers a glimpse at what the red planet looks like at different times of day.\r\nThe… [+2998 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AnandTech"
        },
        "author": "Gavin Bonshor",
        "title": "Intel To Launch New Core Processor Branding for Meteor Lake: Drop the i, Add Ultra Tier - AnandTech",
        "description": null,
        "url": "https://www.anandtech.com/show/18911/intel-new-core-branding-for-meteor-lake-no-i-new-ultra-tier",
        "urlToImage": "https://images.anandtech.com/doci/18911/Intel_New_Badges_2023_678x452.jpg",
        "publishedAt": "2023-06-15T13:06:55Z",
        "content": "As first hinted at by Intel back in late April, Intel is embarking on a journey to redefine its client processor branding, the biggest such shift in the previous 15 years of the company. Having alrea… [+8224 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Catherine Nicholls,Amarachi Orie",
        "title": "Two-time Oscar-winning actress Glenda Jackson dies at age 87 - CNN",
        "description": "Two-time Oscar-winning actor and former UK politician Glenda Jackson has died peacefully after a short illness at the age of 87.",
        "url": "https://www.cnn.com/2023/06/15/europe/glenda-jackson-obituary-gbr-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230615120116-01-glenda-jackson.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-06-15T13:01:00Z",
        "content": "Two-time Oscar-winning actor and former UK politician Glenda Jackson has died peacefully after a short illness at the age of 87.\r\nGlenda Jackson, two-time Academy Award-winning actress and politician… [+2232 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Variety"
        },
        "author": "Courtney Howard",
        "title": "‘Extraction 2’ Review: Chris Hemsworth’s Streaming Sequel Ratchets Up the Adrenaline-Pumping Action - Variety",
        "description": "A funny thing happened during our worldwide lockdown in 2020. With theaters shuttered, our immediate movie-going futures looking bleak and escapist entertainment becoming a therapeutic necessity, a…",
        "url": "https://variety.com/2023/film/reviews/extraction-2-review-1235644366/",
        "urlToImage": "https://variety.com/wp-content/uploads/2023/06/MCDEXTR_ZX010.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2023-06-15T12:04:00Z",
        "content": "A funny thing happened during our worldwide lockdown in 2020. With theaters shuttered, our immediate movie-going futures looking bleak and escapist entertainment becoming a therapeutic necessity, alo… [+4926 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Boris Johnson deliberately misled parliament, says UK report dubbed 'a charade' by ex-PM - Reuters UK",
        "description": "Boris Johnson deliberately misled the British parliament in an unprecedented way over rule-breaking parties at his office during COVID-19 lockdowns, a committee said on Thursday in a damning verdict that further tarnished the former prime minister",
        "url": "https://www.reuters.com/world/uk/boris-johnson-wilfully-misled-parliament-says-uk-report-dubbed-rubbish-by-ex-pm-2023-06-15/",
        "urlToImage": "https://www.reuters.com/resizer/wNlgt3fuPt_jU_c3L9x5h7_D9k0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DVBRTIZPZBJZ7FQ4XHXHYLKE3E.jpg",
        "publishedAt": "2023-06-15T11:40:00Z",
        "content": "LONDON, June 15 (Reuters) - Boris Johnson deliberately misled the British parliament in an unprecedented way over rule-breaking parties at his office during COVID-19 lockdowns, a committee said on Th… [+4757 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TheStreet"
        },
        "author": "Martin Baccardax",
        "title": "Cava Group Set For NYSE Debut After Pricing IPO at $22 Per Share - TheStreet",
        "description": "The fast-casual chain's shares will trade under the ticker symbol CAVA. The pricing is at the higher end of its target.",
        "url": "https://www.thestreet.com/investing/stocks/cava-group-set-for-nyse-debut-after-pricing-ipo-at-22-per-share",
        "urlToImage": "https://www.thestreet.com/.image/t_share/MTk1Njk1MzM3NDM0Nzg1NzI5/cava-3-lead-js-020623.jpg",
        "publishedAt": "2023-06-15T11:36:49Z",
        "content": "Cava Group will debut on the New York Stock Exchange Thursday after pricing its initial public offering at the higher end of its target, suggesting solid demand for shares in the fast-casual restaura… [+2350 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Holly Ellyatt",
        "title": "Ukraine war live updates: Tensions rise between Russian mercenaries and Kremlin; Ukraine allies focus on air defenses for Kyiv - CNBC",
        "description": "Tensions are emerging between Russian President Vladimir Putin and Russia's high-profile mercenary group. Meanwhile, Ukraine's allies are set to meet.",
        "url": "https://www.cnbc.com/2023/06/15/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107082421-1656505577898-putin.jpg?v=1686815690&w=1920&h=1080",
        "publishedAt": "2023-06-15T11:35:00Z",
        "content": "The Kremlin said it could withdraw from the grain export deal with Ukraine when the current agreement expires in mid-July. \r\nThe agreement, known formally as the \"Black Sea grain Initiative,\" has ena… [+1605 chars]"
        }
        ]
        
    constructor(){
        super();
        this.state={
            articles:this.articles
        }
        
    }
  render() {
    return (
      <div className='container my-3' >
    <h2>NewsMonkey - top Headlines</h2>   
    <div className='row'>
      {this.state.articles.map((element)=>{
       return  <div className='col-md-4' key={element.url}>
        <NewsItem title={element.title.slice(0,44)} description={element.description?.slice(0,88)} newsUrl={element.url} ImageUrl={element.urlToImage}/> 
        </div>
      })}
     
   
      </div>     

    </div>
    )
  }
}

export default News
