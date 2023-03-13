var config = {
    style: 'mapbox://styles/mapnard/cleqilt6a000i01pd1zh06aog', // replace this with my own style in mapbox studio. This includes the basemap
    accessToken: 'pk.eyJ1IjoibWFwbmFyZCIsImEiOiJjbGVwNTQ4eHIwNWZvM3hsa2owNjNoOWhzIn0.u3loJf5k_Vtmqr5wH5xY4g',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'A Tale of Two Cities',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'One City, Two Sides',
            image: '../src/images/DSC_3278.jpg',
            description: 'This is a test image that seems not to be loading though I copied the relative path. However, the text updates',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'neighborhood_clusters',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'neighborhood_clusters',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: '../src/images/DSC_3284.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            title: 'Third Title',
            image: '../src/images/DSC_5646.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Fourth Title',
            image: '../src/images/DSC_8241.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
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
            alignment: 'fully',
            hidden: false,
            title: 'Fifth Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
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
            alignment: 'fully',
            hidden: false,
            title: 'Sixth Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
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
            alignment: 'fully',
            hidden: false,
            title: 'Seventh Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'watersheds',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'watersheds',
                    opacity: 0
                }
            ]


        },
        {
            id: 'eigth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Eighth Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
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
            alignment: 'fully',
            hidden: false,
            title: 'Ninth Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
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
            alignment: 'fully',
            hidden: false,
            title: 'Tenth Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.0869, 38.9202],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
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

