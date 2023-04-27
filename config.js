var config = {
  style: "mapbox://styles/mapnard/cleqilt6a000i01pd1zh06aog", // replace this with my own style in mapbox studio. This includes the basemap
  accessToken:
    "pk.eyJ1IjoibWFwbmFyZCIsImEiOiJjbGVwNTQ4eHIwNWZvM3hsa2owNjNoOWhzIn0.u3loJf5k_Vtmqr5wH5xY4g",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "Washington D.C. - Lines of Division",
  subtitle:
    "The Intersection of History, Environmental and Socio-economic Factors",
  image: "images/IMG_0890.jpg",
  //byline: 'By Bernard Morris',
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "intro",
      alignment: "left",
      hidden: false,
      title: "One City. Plural Geographies",
      image: "images/IMG_0890.jpg",
      description: `Washington, D.C., formally the District of Columbia, commonly known as 
      Washington or D.C., is the capital city and federal district of the United 
      States. Located on the eastern bank of the Potomac River, the city borders 
      Virginia and Maryland. 
      <p>Divided into four quadrants: Northwest, Southwest, Northeast, Southeast. 
      The U.S. Capitol building marks the center where the quadrants meet.</p>
      <p>From inception, Washington, D.C. has been enmeshed in issues of power, 
      privilege, race, and identity. These battles have left a legacy which is 
      visible in the several geographies across the landscape.</p>
      <p class='credit'>Source: <a href='https://cumulis.epa.gov/supercpad/cursites/csitinfo.cfm?id=0701639' target='_blank'>EPA</a></p>`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        pitch: 0,
        bearing: 0,
        //[-77.01505, 38.88974]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighborhood_clusters",
          opacity: 1,
          duration: 3000,
        },

        {
          layer: "neighborhood_labels",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "neighborhood_clusters",
          opacity: 0,
        },

        {
          layer: "neighborhood_labels",
          opacity: 0,
        },
      ],
    },
    {
      id: "intro-a",
      alignment: "center",
      hidden: false,
      title: "Plural Geographies",
      //src: 'images/IMG_0890.jpg',
      description: `This project is divided into two broad themes - physical/environmental, 
      and socio-economic. The project focuses on the interconnectivity of these 
      geographies, and how they impact each other.
      <p>In this segment, we begin by visualizing th distribution of key metrics within the city.
      These are: 
      <ul>
    <li>Income</li>
    <li>Poverty</li>
    <li>Disability</li>
    <li>Heat Sensitivity Exposure</li>
    <li>Population Distribution (Persons of Color)</li>
    </ul></p>`,
      location: {
        center: [-77.0869, 38.901],
        zoom: 11.5,
        pitch: 0,
        bearing: 0,
        //[-77.01505, 38.88974]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighborhood_clusters",
          opacity: 1,
          duration: 3000,
        },

        {
          layer: "neighborhood_labels",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "neighborhood_clusters",
          opacity: 0,
        },

        {
          layer: "neighborhood_labels",
          opacity: 0,
        },
      ],
    },
    {
      id: "income",
      alignment: "left",
      hidden: false,
      title: "Median Income",
      image: "images/IMG_1243.jpg",
      description: `<p> The data used in this profile is from the U.S. Census Bureau, 2019 American Community Survey 
      <a href='https://www.census.gov/data/developers/data-sets.html'>(ACS)</a>.</p>

      <p> Household income is defined as the sum of money received over a calendar year by all household 
      members 15 years and older. 
      Median household income reflects the relative affluence and prosperity of an area.
      Areas with higher median household incomes are likely to have more educated residents and lower 
      unemployment rates. Higher employment rates lead to better access to healthcare and better health outcomes.

      <p>According to the data, the highest median household income is concentrated
      in the north-west quadrant of the city. Middle and lower income brackets dominate the eastern 
      and south-eastern portions of the city.</p>
      <p> In 2019, the location with the lowest Median Household Income, 
      was Census Tract 98.01. Median Income totalled $13,510. The second and third lowest tracts
      were Census Tracts 74.01 and 75.04, with Median Income of $14,859 and $16,844 respectively.
      Conversely, Census Tracts 9.04, 9.03 (joint highest), 8.04 and 10.03 were the locations
      of the four highest Median Income. These figures stood at $250,001,  $247,946 and $230,510 respectively. </p>
      
      Source:
      <p class='credit'> <a href='https://www.dcracialequity.org/dc-racial-equity-profile'>CORE</a></p>
      <p class='credit'> <a href='https://www.dchealthmatters.org/indicators/index/view?indicatorId=315&localeId=56714'>DC Health Matters</a></p>`,

      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 0,
        // bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "economicdata",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "economicdata",
          opacity: 0,
        },
      ],
    },

    {
      id: "poverty",
      alignment: "left",
      hidden: false,
      title: "Poverty Levels",
      image: "images/IMG_6806b.jpg",
      description: `<p>D.C's distribution of affordable housing reflects
      a legacy of racially discriminatory policies enacted
      for more than a century. These policies displaced
      thousands of black residents and concentrated their
      communities in the eastern sections of the District,
      referred to as “East of the River.” These policies also
      deepened poverty and generated multiple barriers.</p>
      
      <p> Poverty rates describe the share of residents’ incomes that fall beneath 
      the federal poverty level of $25,750 for a family of four in 2019. Black, 
      Latino, and Asian residents have a much higher poverty rate than 
      white residents, or a much larger share of households earning less than 
      the 2019 federal poverty level ($25,750 for a household of four, $12,490 
      for a single-person household).</p> 
      
      <p>In 2019, about 13.5% of the District of Columbia's 
      population lived below the poverty line. D.C. has a higher level of income inequality 
      than any state in the country, with households in the top 20 percent
      of income having  29 times more income than the bottom 20 percent. 
      The bottom fifth of DC households had just two percent of total DC 
      income in 2016.</p> 

      <p>The poverty distribution pattern in D.C is largely reflecdtive of the income
      distribution pattern - with higher rates of poverty existing primarily in the eatern
      portion of the city. In Census Tract 95.1 for example, the entire population 
      exists below the poverty line. </p>

      <p>It is not unusual, for poorer areas to be located near "undesirable land uses" 
      such as nearby highways or industrial areas, which create even more heat.</p>
      <p>In dozens of U.S cities, low-income neighborhoods are more likely to be hotter than wealthier
      areas. This combination of poverty and heat, can have dire consequences especially 
      for individuals with disabilities and/or other comorbidities.</p>
     
      <p class='credit'>Source: <a href='https://www.dcfpi.org/all/income-inequality-dc-highest-country/'>DC Fiscal Policy Institute</a></p>
      <p class='credit'>Source: <a href='https://planning.dc.gov/sites/default/files/dc/sites/op/page_content/attachments/Segregation%20Report%2011-18-20%20FINAL.pdf'>District of Columbia Office of Planning</a></p>
      <img src="images/income_poverty.jpg" alt="Income_Poverty"> 
      <p class='credit'>Poverty Levels and Income Maps</p>
      </p>`,
      
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 0,
        // bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "povertylevels",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "povertylevels",
          opacity: 0,
        },
      ],
    },

    {
      id: "disability",
      alignment: "left",
      hidden: false,
      title: "Disabilities",
      image: "images/disability.jpg",
      description: `<p class='credit'>Photo Credit: <a href= 'https://stock.adobe.com/in/'>Adobe Stock Photos</a></p>
      <p>People in poor health, including people with chronic conditions, disabilities, 
      mobility constraints, and those taking certain medications, are vulnerable 
      to extreme temperatures. People with diabetes, physical impairments, and 
      cognitive deficits are especially at risk during heat waves. </p>

      <p>Excessive heat events, or abrupt and dramatic temperature increases, 
      are particularly dangerous and can result in above-average rates 
       mortality. From 2004 to 2018 the Centers for Disease Control and 
       Prevention recorded 10,527 heat-related deaths in the United States, 
       an average of 702 per year. These numbers include deaths where heat 
       was the underlying cause and deaths where heat was a contributing cause.</p>
      
      <p> Increasing heat exposure along with global warming could be a potential 
      driver for exacerbating inter-city health inequalities. Socioeconoic factors may combine
      to exacerbate already challenging situations. Disproportionate poverty rates, and poor or 
      substandard housing create serious challenges for people with disabilities.</p>
      <p>Low income usually means insufficient funds to run the AC. This leaves individuals especially 
      at risk for heat-related illness. Individuals who fall into 
      multiple categories, such as the poor - who can be old and disabled - are even more
      at risk. </p>`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 60.00,
        // bearing: -16.80
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "disabilities",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "disabilities",
          opacity: 0,
        },
      ],
    },

    {
      id: "heat-sensitivity",
      alignment: "left",
      hidden: false,
      title: "Heat Sensitivity Exposure Index",
      image: "images/DSC_8241.jpg",
      description: ` <p> The Heat Sensitivity Index is calculated using nine socio-economic and health variables.
     Conversely, the Heat Exposure Index is a combination fo three metrics.</p>
     <p> 
     The Heat Sensitivity Exposure Index <a href='https://doee.dc.gov/sites/default/files/dc/sites/ddoe/service_content/attachments/Methodology%20Report_Update%2005.11.22web_0.pdf'>(HESI)</a>
     (HESI), is a combined score of the Heat Sensitivity Index, and the Heat Exposure Index. The HSEI is equal 
     parts sensitivity and exposure. </p>

      <p>Heat islands are urbanized areas that experience higher temperatures than outlying 
      areas. Heat islands can exacerbate the impact of naturally occurring heat
      waves, which are periods of abnormally hot, and often humid, weather. 
      Sensitive populations such as older adults, young children, 
      populations with low income, and individuals in poor health are particularly at risk 
      during these events.</p>
      
      <p>Many people may be surprised to learn that the stated heat index values are for shady 
       locations. If you are exposed to direct sunlight, the heat index value can be 
       increased by up to 15°F. Heat indices meeting or exceeding 103°F can lead to 
       dangerous heat disorders with prolonged exposure and/or physical activity in 
       the heat. </p>

       <p>To calculate vulnerability, you must take into account population sensitivity 
       to the effects of heat, exposure to hotter temperatures, and the adaptive capacity 
       of the community under consideration.`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 60.00,
        // bearing: -16.80
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hsindex",
          opacity: 1,
          duration: 3000,
        },
        {
          layer: "coolingcenters",
          opacity: 1,
          duration: 3000,
        },
        
      ],
      onChapterExit: [
        {
          layer: "hsindex",
          opacity: 0,
        },
        {
          layer: "coolingcenters",
          opacity:0,
        }
      ],
    },
    {
      id: "cooling-centers",
      alignment: "center",
      hidden: false,
      title: "Cooling Centers",
      // image: "images/DSC_3278.jpg",
      description: ` </p>Extreme heat and heat waves have been established as disasters which 
      can lead to a great loss of life. The impact of extreme heat, 
      similar to other disasters, depends upon the vulnerability of the population.</p>

      <p> Cooling centers are locations across the city where individuals 
      can go to gain respite from the heat. In addition to providing a cool place 
      to rest, cooling centers may provide additional services to individuals 
      experiencing homelessness.</p>`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 12.15,
        // pitch: 44.00,
        // bearing: -40.00
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "coolingcenters",
          opacity: 1,
          duration: 3000,
        },

        {
          layer: "censustracts",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "coolingcenters",
          opacity: 0,
        },

        {
          layer: "censustracts",
          opacity: 1,
          duration: 3000,
        },
      ],
    },



    {
      id: "population",
      alignment: "left",
      hidden: false,
      title: "Population Distribution",
      image: "images/DSC_3284.jpg",
      description: `African Americans are the largest racial group in the District.
      hites are the second largest racial group, followed by Hispanics or Latinos, then 
      Asian and Pacific Islanders. This map depicts the population distribution
      of persons of color.`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 0,
        // bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "poc_distribution",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "poc_distribution",
          opacity: 0,
        },
      ],
    },

    {
      id: "intro-b",
      alignment: "center",
      hidden: false,
      title: "Physical Geographies",
      //src: 'images/IMG_0890.jpg',
      description: `In this segment, we will look at some of the physical factors.`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        pitch: 0,
        bearing: 0,
        //[-77.01505, 38.88974]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighborhood_clusters",
          opacity: 1,
          duration: 3000,
        },

        {
          layer: "neighborhood_labels",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "neighborhood_clusters",
          opacity: 0,
        },

        {
          layer: "neighborhood_labels",
          opacity: 0,
        },
      ],
    },

    {
      id: "air-temps",
      alignment: "left",
      hidden: false,
      title: "Air Temperatures",
      image: "images/IMG_0741.jpg",
      description: `Structures such as buildings, roads, and other infrastructure 
      absorb and re-emit the sun’s heat more than natural landscapes 
      such as forests and water bodies. Urban areas, where these 
      structures are highly concentrated and greenery is limited, 
      become “islands” of higher temperatures relative to outlying areas. 
      These pockets of heat are referred to as “heat islands.” 
      <p>Heat islands can form under a variety of conditions, including 
      during the day or night, in small or large cities, in suburban areas, 
      in northern or southern climates, and in any season.
      Heat islands can contribute to a range of environmental, energy, 
      economic, and human health impacts.</p>
      <p>The accompanying map represents the average temperatures within each census
      tract. As can be seen, the warmest temperatures exist centrally and towards the 
      north-east of the study area. It is known, that there is a strong relationship
      between heat and socioeconomic factors.</p>`,

      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 45.00,
        // bearing: -16.80
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "airtemp_mean",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "airtemp_mean",
          opacity: 0,
        },
      ],
    },

    {
      id: "tree-cover",
      alignment: "left",
      hidden: false,
      title: "Tree Cover",
      image: "images/DSC_3405.jpg",
      description: `Trees and other plants help cool the environment, 
      making vegetation a simple and effective way to reduce urban heat 
      islands.
      <p>Trees and vegetation lower surface and air temperatures by 
      providing shade and through evapotranspiration. Shaded surfaces, 
      for example, may be 20 to 45°F (11 to 25°C) 
      cooler than the peak temperatures of unshaded materials.</p>
      <p>Trees and vegetation that directly shade buildings decrease 
      demand for air conditioning.Vegetation reduces runoff and improves 
      water quality by absorbing and filtering rainwater.</p>
      <p> Less green cover would lead to having higher temperatures, and greater
      exposure to heat.
      Trees provide shade, but they also cool the environment down through 
      the evaporation of water from their leaves — a process similar to how humans 
      sweat to cool down. Paving an area, interrupts the cycle.</p>`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 0,
        // bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "treecover",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "treecover",
          opacity: 0,
        },
      ],
    },

    {
      id: "inversion",
      alignment: "center",
      hidden: false,
      title: "Impact of Vegetation on Temperature",
      //src: 'images/IMG_0890.jpg',
      description: `The graphic below highlights the almost inverse relationship
      between the mean air temperatures, and the percentage tree coverage across
      census tracts.
      <img src="images/heat_trees.jpg" alt="Heat_Trees"> 
      <p class='credit'>Mean temperature vs Percentage tree cover</p>`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        pitch: 0,
        bearing: 0,
        //[-77.01505, 38.88974]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighborhood_clusters",
          opacity: 1,
          duration: 3000,
        },

        {
          layer: "neighborhood_labels",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "neighborhood_clusters",
          opacity: 0,
        },

        {
          layer: "neighborhood_labels",
          opacity: 0,
        },
      ],
    },

    {
      id: "drainage-basins",
      alignment: "left",
      hidden: false,
      title: "Watersheds",
      image: "images/IMG_0966.jpg",
      description: `High temperatures of pavement and rooftop surfaces can heat up stormwater runoff,
      which drains into storm sewers and raises water temperatures as it is released 
      into streams, rivers, ponds, and lakes. Water temperature affects all aspects of 
      aquatic life, especially the metabolism and reproduction of many aquatic species. 
      <p>Rapid temperature changes in aquatic ecosystems resulting from warm stormwater 
      runoff can be particularly stressful, and even fatal, to aquatic life.</p>
      <p>One study found that urban streams are hotter on average than streams in 
      forested areas, and that temperatures in urban streams rose over 7°F during small 
      storms due to heated runoff from urban materials.</p>`,
      location: {
        center: [-77.0869, 38.899],
        zoom: 11.15,
        // pitch: 55,
        // bearing: -45.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "watersheds",
          opacity: 1,
          duration: 3000,
        },
        {
          layer: "watershed_names",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "watersheds",
          opacity: 0,
        },

        {
          layer: "watershed_names",
          opacity: 0,
        },
      ],
    },
    {
      id: "conclusion",
      alignment: "center",
      hidden: false,
      title: "Conclusions",
      //src: 'images/IMG_0890.jpg',
      description: `<p>Studies have established that vulnerability to heat waves is a combined 
      result of the socio-economic, physiological, climatological, as well as 
      behavioural variables. This is not only because poverty itself is a health 
      hazard, but because poverty is also tied to other factors that can make it 
      harder to get cool.
      "People with money, of course, can do that a lot better than people with 
      less money," says Dr. Georges Benjamin, executive director of the American 
      Public Health Association. </p>
      <p> The urban poor, already often in hotter environments and already at 
      higher risk for health problems, will have a harder time escaping climate change.</p>`,
      location: {
        center: [-77.0869, 38.901],
        zoom: 11.5,
        pitch: 0,
        bearing: 0,
        //[-77.01505, 38.88974]
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "neighborhood_clusters",
          opacity: 1,
          duration: 3000,
        },

        {
          layer: "neighborhood_labels",
          opacity: 1,
          duration: 3000,
        },
      ],
      onChapterExit: [
        {
          layer: "neighborhood_clusters",
          opacity: 0,
        },

        {
          layer: "neighborhood_labels",
          opacity: 0,
        },
      ],
    },
  ],
};
