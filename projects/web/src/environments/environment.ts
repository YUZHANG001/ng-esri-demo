// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    arcgisJsApi: 'https://js.arcgis.com/4.12',
    trustedServers: [
        'www.arcgis.com',
        'www.arcgisonline.cn'
    ],
    dojoConfig: {
        locale: 'zh-cn',
        async: true,
        has: {
            'esri-native-promise': true
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.
 * invokeTask`.
 *
 * This import should be commented out in production mode because it will have
 * a negative impact on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.