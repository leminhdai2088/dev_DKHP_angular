// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

/*
const  appConfig = {
    "remoteServiceBaseUrl": "https://localhost:44383",
    "signalRRemoteServiceBaseUrl": "https://localhost:44383",

    "remoteImageBaseUrl": "http://192.168.1.230:3048",

    "allowed_uploads": ".xlsx,.xls,.doc,.docx,.pdf,.rar,.jpeg,.png",
    "remoteImageBaseUrl1": "D:\\Sacom source\\SOURCE SACOM V3 FULL\\SourceCore Full\\aspnet-core\\src\\GSOFTcore.gAMSPro.Web.Host\\wwwroot\\IMAGE_IMPORT",

    "appBaseUrl": "",
    "localeMappings": {
        "angular": [
            {
                "from": "pt-BR",
                "to": "pt"
            },
            {
                "from": "zh-CN",
                "to": "zh"
            },
            {
                "from": "he-IL",
                "to": "he"
            },
            {
                "from": "es-MX",
                "to": "es"
            },
            {
                "from": "vi",
                "to": "en"
            }
        ],
        "moment": [
            {
                "from": "es-MX",
                "to": "es"
            },
            {
                "from": "zh-Hans",
                "to": "zh-cn"
            },
            {
                "from": "vi",
                "to": "en-gb"
            }
        ]
    }
}*/


const localeMappings = {angular: [
    {
        "from": "pt-BR",
        "to": "pt"
    },
    {
        "from": "zh-CN",
        "to": "zh"
    },
    {
        "from": "he-IL",
        "to": "he"
    },
    {
        "from": "es-MX",
        "to": "es"
    },
    {
        "from": "vi",
        "to": "en"
    }
],
    monent: [{"from": "es-MX","to": "es"},{"from": "zh-Hans","to": "zh-cn"},{"from": "vi","to": "en-gb"}]}


export const environment = {
    production: true,
    hmr: false,
    appConfig: 'appconfig.json',
    
    remoteServiceBaseUrl: "https://localhost:7124",
    signalRRemoteServiceBaseUrl: "https://localhost:7124",
    remoteImageBaseUrl: "http://192.168.1.230:3048",
    allowed_uploads: ".xlsx,.xls,.doc,.docx,.pdf,.rar,.jpeg,.png",
    remoteImageBaseUrl1: "D:\\Sacom source\\SOURCE SACOM V3 FULL\\SourceCore Full\\aspnet-core\\src\\GSOFTcore.gAMSPro.Web.Host\\wwwroot\\IMAGE_IMPORT",
    appBaseUrl: "",
    localeMappings:localeMappings
};
