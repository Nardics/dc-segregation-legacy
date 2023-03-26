var config = {
    style: 'mapbox://styles/mapnard/cleqilt6a000i01pd1zh06aog', // replace this with my own style in mapbox studio. This includes the basemap
    accessToken: 'pk.eyJ1IjoibWFwbmFyZCIsImEiOiJjbGVwNTQ4eHIwNWZvM3hsa2owNjNoOWhzIn0.u3loJf5k_Vtmqr5wH5xY4g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Washington D.C. - Lines of Division',
    subtitle: 'The Intersection of History, Environmental and Socio-economic Factors',
    image: 'images/IMG_0890.jpg',
    //byline: 'By Bernard Morris',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'One City, Two Sides',
            //image: 'images/IMG_0890.jpg',
            description: 'Washington, D.C., formally the District of Columbia, commonly known as Washington or D.C., is the capital city and federal district of the United States. Located on the eastern bank of the Potomac River, the city borders Virginia and Maryland. <p> Divided into four quadrants: Northwest, Southwest, Northeast, Southeast. The U.S. Capitol building marks the center where the quadrants meet.</p>',
            location: {
                center: [-77.069, 38.9202],
                zoom: 12,
                pitch: 0,
                bearing: 0
                //[-77.01505, 38.88974]
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'neighborhood_clusters',
                    opacity: 1,
                    duration: 3000
                },

                {
                    layer: 'neighborhood_labels',
                    opacity: 1,
                    duration: 3000
                }
            ],
            onChapterExit: [
                {
                    layer: 'neighborhood_clusters',
                    opacity: 0
                },

                {
                    layer: 'neighborhood_labels',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Air Temperatures',
            image: 'images/IMG_0741.jpg',
            description: 'Structures such as buildings, roads, and other infrastructure absorb and re-emit the sun’s heat more than natural landscapes such as forests and water bodies. Urban areas, where these structures are highly concentrated and greenery is limited, become “islands” of higher temperatures relative to outlying areas. These pockets of heat are referred to as “heat islands.” <p>Heat islands can form under a variety of conditions, including during the day or night, in small or large cities, in suburban areas, in northern or southern climates, and in any season.</p> <p>Heat islands can contribute to a range of environmental, energy, economic, and human health impacts. </p',
            
            location: {
                center: [-77.0869, 38.9202],
                zoom: 12.15,
                // pitch: 45.00,
                // bearing: -16.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'airtemp_mean',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'airtemp_mean',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Heat Sensitivity Index',
            image: 'images/DSC_8241.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 13.15,
                // pitch: 60.00,
                // bearing: -16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hsindex',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'hsindex',
                    opacity: 0
                }
            ]
        },

        {
            id: 'nth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asthma',
            image: 'images/DSC_8241.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.55,
                // pitch: 60.00,
                // bearing: -16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'asthma',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'asthma',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Economics',
            image: 'images/DSC_5646.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'economicdata',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'economicdata',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Tree Cover',
            image: 'images/IMG_0863.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-76.9540, 38.9202],
                zoom: 11.5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'treecover',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'treecover',
                    opacity: 0
                }
            ]
        },

        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Cooling Centers',
            image: 'images/DSC_3278.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0759, 38.9302],
                zoom: 12,
                // pitch: 44.00,
                // bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'coolingcenters',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'coolingcenters',
                    opacity: 0
                }
            ]


        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Watersheds',
            image: 'images/IMG_0966.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-76.9540, 38.9202],
                zoom: 10.5,
                // pitch: 55,
                // bearing: -45.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'watersheds',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'watershed_names',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'watersheds',
                    opacity: 0
                },

                {
                    layer: 'watershed_names',
                    opacity: 0
                }
            ]


        },
        {
            id: 'eigth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Storage Tanks',
            image: 'images/DSC_5646.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.15,
                // pitch: 60.00,
                // bearing: -16.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'storagetanks',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'storagetanks',
                    opacity: 0
                }
            ]


        },

        {
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Population Distribution',
            image: 'images/DSC_3284.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'poc_distribution',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'poc_distribution',
                    opacity: 0
                }
            ]


        },
        {
            id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Poverty Levels',
            image: 'images/DSC_3278.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center:[-76.9540, 38.9202],
                zoom: 11.5,
                // pitch: 0,
                // bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'povertylevels',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'povertylevels',
                    opacity: 0
                }
            ]


        },


        
    ]
};


