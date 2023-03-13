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
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
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
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
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
                    layer: 'censustracts',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'censustracts',
                    opacity: 0
                }
            ]
        }
    ]
};


