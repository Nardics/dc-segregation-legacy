# D.C.'s Legacy of Segregation

## I. Introduction

## What to map ?
Redlining was a system of unofficially grading portions cities according to several factors, including human and economic.
The policies and practices intentionally deprived African-American and other households of color,thus limiting their acess to homeownership and opportunities to build wealth.  

Unwittingly, the practice has left a legacy of obscure/inconspicuous geographies in its wake across the continental United States. Interestingly, according to the [D.C. Policy Center](https://www.dcpolicycenter.org/publications/mapping-segregation-fha/), no map of redlining exists in the National Archives. The fact remains, however, that D.C. was and is very much a city of segregated geographies.
I want to build a project which highlights some environmental and socio-economic factors from this perspective.

This mapping project began as an exploration of the hidden threats posed by leaking underground storage tanks (LUSTs) in the D.C. area. 
The intent was to examine and depict the 'what', 'who' and 'where' of these installations, along with the existing and potential impacts on the general population and the environment.

These geographies fell into two (2) broad categories- Socio-economic factors and Environmental factors.

However, the data began to reveal that there was another story to tell, with emphasis on the same two categories. The data was examined from a historical perspective, with the intent of exploring the legacy of 'redlining', to determine any discernable patterns as a result of the practice.

# Medium for Delivery

The story map is browser-based. 

### Data Stack

Windows 11 - Operating system

QGIS3 - Used to clean data, and obtain initial visualizations

Microsoft Excel - Used to edit CSV data

Adobe Photoshop - creation of collage and comparison maps

[Adobe Color](https://color.adobe.com/create) - used to create color palettes

[Mapbox](https://www.mapbox.com/)


### Data
The project data is sourced from [Open Data DC](https://opendata.dc.gov/)

The following specific datasets have been used in the completion of this project:-


[Heat Sensitivity Exposure Index, Tree Cover, Poverty, Disabilities, Population Distribution and Mean Air Temperature](https://opendata.dc.gov/datasets/heat-sensitivity-exposure-index/explore), data was derived from this single GeoJSON file.

[Economic Characteristics of D.C. Census Tracts](https://opendata.dc.gov/apps/economic-characteristics-of-dc-census-tracts-2017-2021-5-year-acs/explore). The data was filtered and exported in Comma Separated Variable format. This table was joined to the data for heat sensitivity exposure, using QGIS. The resultant data was exported as a GeoJSON file.

[D.C. Census Tracts](https://opendata.dc.gov/datasets/DCGIS::census-tracts-in-2010/explore)

[Social Characteristics of D.C. Census Tracts](https://opendata.dc.gov/apps/social-characteristics-of-dc-census-tracts-2017-2021-5-year-acs/explore)

[Neighborhood Clusters](https://opendata.dc.gov/datasets/neighborhood-clusters/explore)

[Cooling Centers](https://opendata.dc.gov/datasets/cooling-centers-district-of-columbia/explore)

[Watersheds](https://opendata.dc.gov/datasets/dc-watersheds-2/explore)



### Visualization

The Census Tract-level data was used to create the following thematic choropleth maps:

#### Human and Economic Geographies


1. Income - median income
2. Poverty levels -percentage of the population below the poverty line, for the period under examination
3. Disability
4. Heat Sensitivity Exposure
5. Population distribution (percentage of population who were persons of colour)

#### Environmental/Physical Geographies
1. Mean air temperatures
2. Percentage of tree coverage
3. Watersheds




#### Visual Overview

<img src="images/big_picture2.jpg" alt="Figure 3. Modeling Overview" style="max-width: 100%;"></a></p>
## Explanation of Terms


### Redlining

Redlining refers to the federal government's practice in the 1930s of rating neighborhoods to help mortgage lenders 
determine which areas of a city were considered risky. The federal Home Owners' Loan Corporation made maps and shaded 
neighborhoods red that it deemed "hazardous." That risk level was largely based on the number of African Americans and 
immigrants living there.


### Heat Island
According to the EPA, heat islands "are urbanized areas that experience higher temperatures than outlying areas. 
Structures such as buildings, roads, and other infrastructure absorb and re-emit the sun’s heat more than natural 
landscapes such as forests and water bodies. 

Urban areas, where these structures are highly concentrated and greenery is limited, become “islands” of higher 
temperatures relative to outlying areas. Daytime temperatures in urban areas are about 1–7°F higher than temperatures 
in outlying areas and nighttime temperatures are about 2-5°F higher."

Heat islands can form under a variety of conditions, including during the day or night, in small or large cities, in 
suburban areas, in northern or southern climates, and in any season.

Additional information can be found on the [Environmental Protection Agency's](https://www.epa.gov/heatislands/learn-about-heat-islands) website.



### Heat Index
The heat index is also known as the apparent temperature. As defined by the National Weather Service, the heat index 
is "what the temperature feels like to the human body when relative humidity is combined with the air temperature."

Additional insight can be obtained from:


[National Weather Service](https://www.weather.gov/ama/heatindex)

[D.C. Department of Energy and Environment](https://doee.dc.gov/sites/default/files/dc/sites/ddoe/service_content/attachments/Methodology%20Report_Update%2005.11.22web_0.pdf)



### Heat Sensitivity Index (HSI)

This metric is calculated using a total of nine socio-economic and health variables. 
Each variable is standardized and indexed using a weighted formula. Finally the indices are summed.


### Heat Exposure Index (HEI)

Air temperature, Impervious Surface Cover and Tree Canopy Cover are used to determine the Heat Exposure Index. The index is calculated in similar manner to the HSI.

### Heat Sensitivity Exposure Index (HSEI)

The Heat Sensitivity Exposure Index is an equal-part combination of the Heat Sensitivity Index and Heat Exposure Index.


### Poverty Line 

The poverty line is defined as "the estimated minimum level of income needed to secure the necessities of life."


The [Census Bureau](https://www.census.gov/topics/income-poverty/poverty/guidance/poverty-measures.html) gives a comprehensive explanation on how to measure "poverty".

### Disability

The [CDC](https://www.cdc.gov/ncbddd/disabilityandhealth/disability.html) defines 'disability' as: "any condition of the body or mind (impairment) that makes it more difficult for the person with the condition to do certain activities (activity limitation) and interact with the world around them (participation restrictions)."


### Watersheds

The [National Ocean Service](https://oceanservice.noaa.gov/facts/watershed.html) defines 'watershed' as: "a land area that channels rainfall and snowmelt to creeks, streams, and rivers, and eventually to outflow points such as reservoirs, bays, and the ocean."

## Data Source(s)
https://www.nature.com/articles/s41467-021-22799-5
### Social data

https://opendata.dc.gov/apps/social-characteristics-of-dc-census-tracts/

### History/Stories of Redlining


[America's History Of Discrimination](https://www.npr.org/sections/thetwo-way/2016/10/19/498536077/interactive-redlining-map-zooms-in-on-americas-history-of-discrimination)


[Effects of Discrimination](https://www.npr.org/sections/health-shots/2020/11/19/911909187/in-u-s-cities-the-health-effects-of-past-housing-discrimination-are-plain-to-see)

[Historical Impacts on Current Neighborhoods](https://www.npr.org/2020/01/14/795961381/racist-housing-practices-from-the-1930s-linked-to-hotter-neighborhoods-today)


