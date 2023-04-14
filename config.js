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
      title: "One City. Many Faces",
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
      title: "Economics",
      image: "images/IMG_1243.jpg",
      description: `<p> The data used in this profile is from the U.S. Census Bureau, 2019 American Community Survey 
      <a href='https://www.census.gov/data/developers/data-sets.html'>(ACS)</a>.</p>

      <p> Household income is defined as the sum of money received over a calendar year by all household 
      members 15 years and older. 
      Median household income reflects the relative affluence and prosperity of an area.
      Areas with higher median household incomes are likely to have more educated residents and lower 
      unemployment rates. Higher employment rates lead to better access to healthcare and better health outcomes.

      <p> Inequitable economic systems threaten sustainable growth because 
      groups of residents lack purchasing power and struggle to drive demand 
      or invest in human capital. In addition to undermining long-term growth, 
      racial inequity hampers crisis resilience by undermining social cohesion 
      and political stability. </p>
      <p>According to the data, the highest median household income is heavily concentrated
      in the the north-west quadrant of the city. Middle and lower income brackets dominate the eastern and south-eastern
      portions of the city.</p>
      
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
      image: "images/IMG_1243.jpg",
      description: `<p>D.C. has a higher level of income inequality 
      than any state in the country, with households in the top 20 percent
      of income having  29 times more income than the bottom 20 percent. 
      The bottom fifth of DC households had just two percent of total DC 
      income in 2016.</p>
      <p> Poverty rates describe the share of residents’ incomes that fall beneath 
      the federal poverty level of $25,750 for a family of four in 2019. Black, 
      Latino, and Asian residents have a much higher poverty rate than 
      white residents, or a much larger share of households earning less than 
      the 2019 federal poverty level ($25,750 for a household of four, $12,490 
      for a single-person household).</p> 
      <p>It is not unusual, for poorer areas to be located near "undesirable land uses" 
      such as nearby highways or industrial areas, which create even more heat.
      
      <p class='credit'>Source: <a href='https://www.dcfpi.org/all/income-inequality-dc-highest-country/'>DC Fiscal Policy Institute</a></p>
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
      image: "images/DSC_8241.jpg",
      description: `<p>People in poor health, including people with chronic conditions, disabilities, 
      mobility constraints, and those taking certain medications, are vulnerable 
      to extreme temperatures. People with diabetes, physical impairments, and 
      cognitive deficits are especially at risk during heat waves</p>

      <p>Excessive heat events, or abrupt and dramatic temperature increases, 
      are particularly dangerous and can result in above-average rates 
       mortality. From 2004 to 2018 the Centers for Disease Control and 
       Prevention recorded 10,527 heat-related deaths in the United States, 
       an average of 702 per year. These numbers include deaths where heat 
       was the underlying cause and deaths where heat was a contributing cause.</p>
      
      <p> Increasing heat exposure along with global warming could be a potential 
      driver for exacerbating inter-city health inequalities. </p>`,
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
      description: `Heat islands can also exacerbate the impact of naturally occurring heat
       waves, which are periods of abnormally hot, and often humid, weather. 
       Sensitive populations are particularly at risk during these events.
      <p>Populations particularly at risk include: older adults, young children, 
      populations with low income, and individuals in poor health.</p>
      <p> The heat index, also known as the apparent temperature, is what the 
      temperature feels like to the human body when relative humidity is combined 
      with the air temperature.  This has important considerations for the human 
      body's comfort.  When the body gets too hot, it begins to perspire or sweat 
      to cool itself off.  If the perspiration is not able to evaporate, the body 
      cannot regulate its temperature.  Evaporation is a cooling process.  
      When perspiration is evaporated off the body, it effectively reduces the body's 
      temperature.  When the atmospheric moisture content (i.e. relative humidity) 
      is high, the rate of evaporation from the body decreases.  In other words, 
      the human body feels warmer in humid conditions.  The opposite is true when 
      the relative humidity decreases because the rate of perspiration increases. 
      The body actually feels cooler in arid conditions. 
      There is direct relationship between the air temperature and relative humidity 
      and the heat index, meaning as the air temperature and relative humidity 
      increase (decrease), the heat index increases (decreases). </p>
      <p> It surprises many people to learn that the heat index values are for shady 
      locations. If you are exposed to direct sunlight, the heat index value can be 
      increased by up to 15°F.  Heat indices meeting or exceeding 103°F can lead to 
      dangerous heat disorders with prolonged exposure and/or physical activity in 
      the heat. </p>`,
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
      ],
      onChapterExit: [
        {
          layer: "hsindex",
          opacity: 0,
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
      id: "cooling-centers",
      alignment: "left",
      hidden: false,
      title: "Cooling Centers",
      image: "images/DSC_3278.jpg",
      description: `<p> Cooling centers are locations across the city where individuals can 
      go to gain respite from the heat. In addition to providing a cool place 
      to rest, cooling centers may provide additional services to individuals 
      experiencing homelessness.
      </p>Extreme heat and heat waves have been established as disasters which 
      can lead to a great loss of life.However, the impact of extreme heat, 
      similar to other disasters, depends upon the vulnerability of the population.
      <p>Studies have established that vulnerability to heat waves is a combined 
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
        center: [-77.0869, 38.899],
        zoom: 11.15,
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
  ],
};
