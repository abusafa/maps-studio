let layers = {
    "_id" : "573d990ece92df03d81b239f",
    "name" : "layers",
    "layers" : [
        {
            "id" : "landmarks",
            "name" : "landmarks",
            "title" : "المعالم",
            "property" : "LANDMARK_NAME",
            "icon" : "ion-ios-search"
        },
        {
            "id" : "districts",
            "name" : "districts",
            "title" : "الأحياء",
            "property" : "DISTRICT_NAME_ARABIC",
            "icon" : "ion-ios-search"
        },
        {
            "id" : "shops",
            "name" : "shops",
            "title" : "المحلات",
            "property" : "SHOP_NAME_ARABIC",
            "icon" : "ion-ios-search"
        },
        {
            "id" : "plans",
            "name" : "parcels",
            "title" : "المخططات",
            "property" : "PLAN_ID",
            "icon" : "ion-ios-search"
        },
        {
            "id" : "parcels",
            "name" : "parcels",
            "title" : "الأراضي",
            "property" : "PARCEL_ID",
            "icon" : "ion-ios-search"
        },
        {
            "id" : "streets",
            "name" : "streets",
            "title" : "الشوارع",
            "property" : "ROAD_NAME_ARABIC",
            "icon" : "ion-ios-search"
        }
    ]
};




let basemaps = {
    "_id" : "573ebb87bb9f93307a2842fc",
    "name" : "basemaps",
    "basemaps" : [ 
        {
            "id" : "mapbox.dark",
            "name" : "dark",
            "label" : "ليلي",
            "type" : "mapbox.tileLayer",
            "icon" : "ion-map",
            "options" : {
                "maxZoom" : 18
            }
        },
        {
            "id" : "mapbox.streets",
            "name" : "streets",
            "label" : "الشوارع",
            "type" : "mapbox.tileLayer",
            "icon" : "ion-map",
            "options" : {
                "maxZoom" : 18
            }
        },
        {
            "id" : "mapbox.satellite",
            "name" : "satellite",
            "label" : "المصور الجوي",
            "type" : "mapbox.tileLayer",
            "icon" : "ion-ios-world-outline",
            "options" : {
                "maxZoom" : 18
            }
        },
        {
            "id" : "unizah",
            "name" : "unizah",
            "url" : "http://localhost:8181/{z}/{x}/{y}@2x.png",
            "label" : "خارطة الأساس",
            "type" : "tileLayer",
            "icon" : "ion-map",
            "options" : {
                "maxZoom" : 18
            }
        }
    ]
};
