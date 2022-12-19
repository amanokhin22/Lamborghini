let map: google.maps.Map;

function initMap(element: HTMLElement): void {
    map = new google.maps.Map(element, {
        center: {lat: 37.23198995596892, lng: -8.628208025282188},
        zoom: 14,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    });
}

export const mapPromise = new Promise<void>(resolve => {
    if (typeof window !== "undefined") {
        // @ts-ignore
        window.runMap = () => {
            resolve()
        }
    }
})

// export const mapActivator: {
//     loaded: boolean,
//     subscribers: Array<() => void>,
//     subscribe: (subscriber: () => void) => void,
//     activate: () => void,
// } = {
//     loaded: false,
//     subscribers: [],
//     subscribe(subscriber) {
//         if (this.loaded) {
//             subscriber();
//         } else {
//             this.subscribers.push(subscriber)
//         }
//     },
//     activate() {
//         if (this.loaded) {
//             this.subscribers.forEach(s => s())
//             this.subscribers = []
//         }
//     }
// }

// if (typeof window !== "undefined") {
//     // @ts-ignore
//     window.activateMap = () => {
//         mapActivator.loaded = true;
//         mapActivator.activate();
//     }
// }


export default initMap;
