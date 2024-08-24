const map = L.map('map').setView([17.3861775, 78.5114709], 12); // Center map to Hyderabad with a zoom level

// Add a tile layer to the map (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create a marker cluster group
const markers = L.markerClusterGroup();
const uniqueLocations= [
    {
      "Street": "L B NAGAR",
      "City": "HYDERABAD",
      "lat": 17.3498286,
      "lon": 78.5479138
    },
    {
      "Street": "AMBERPET",
      "City": "HYDERABAD",
      "lat": 17.3861775,
      "lon": 78.5114709
    },
    {
      "Street": "VANASTHALIPURAM",
      "City": "HYDERABAD",
      "lat": 17.3303179,
      "lon": 78.568278
    },
    {
      "Street": "MALAKPET",
      "City": "HYDERABAD",
      "lat": 17.3736706,
      "lon": 78.4996484
    },
    {
      "Street": "NALGONDA",
      "City": "NALGONDA",
      "lat": 17.0606367,
      "lon": 79.2832849
    },
    {
      "Street": "UPPAL",
      "City": "MEDCHAL",
      "lat": 17.4025091,
      "lon": 78.5612562
    },
    {
      "Street": "DILSUKHNAGAR",
      "City": "HYDERABAD",
      "lat": 17.3684433,
      "lon": 78.5228597
    },
    {
      "Street": "L B NAGAR",
      "City": "RANGA REDDY",
      "lat": 17.3498286,
      "lon": 78.5479138
    },
    {
      "Street": "NAGARKURNOOL",
      "City": "NAGARKURNOOL",
      "lat": 16.4870296,
      "lon": 78.3169003
    },
    {
      "Street": "OLD CITY",
      "City": "HYDERABAD",
      "lat": 25.3927942,
      "lon": 68.3711364
    },
    {
      "Street": "HIMAYAT NAGAR",
      "City": "HYDERABAD",
      "lat": 17.4039678,
      "lon": 78.483456
    },
    {
      "Street": "KARMANGHAT",
      "City": "HYDERABAD",
      "lat": 17.3410061,
      "lon": 78.5329747
    },
    {
      "Street": "HAYAT NAGAR",
      "City": "HYDERABAD",
      "lat": 17.3966535,
      "lon": 78.3970195
    },
    {
      "Street": "KARMANGHAT",
      "City": "RANGA REDDY",
      "lat": 17.3410061,
      "lon": 78.5329747
    },
    {
      "Street": "SHAMSHABAD",
      "City": "RANGA REDDY",
      "lat": 17.2611444,
      "lon": 78.3931943
    },
    {
      "Street": "SAROOR NAGAR",
      "City": "RANGA REDDY",
      "lat": 17.3564017,
      "lon": 78.5318948
    },
    {
      "Street": "BALANAGAR",
      "City": "HYDERABAD",
      "lat": 17.4768224,
      "lon": 78.4219645
    },
    {
      "Street": "YADADRI BHUVANAGIRI",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.5172789,
      "lon": 78.8863383
    },
    {
      "Street": "MAHABUBNAGAR",
      "City": "MAHABUBNAGAR",
      "lat": 16.7540965,
      "lon": 78.0249611
    },
    {
      "Street": "UPPAL",
      "City": "HYDERABAD",
      "lat": 17.4025091,
      "lon": 78.5612562
    },
    {
      "Street": "NIZAMABAD",
      "City": "NIZAMABAD",
      "lat": 18.6732693,
      "lon": 78.0978477
    },
    {
      "Street": "MIRYALAGUDA",
      "City": "MIRYALAGUDA",
      "lat": 16.8601014,
      "lon": 79.5339903
    },
    {
      "Street": "KHAMMAM",
      "City": "KHAMMAM",
      "lat": 17.2465351,
      "lon": 80.1500326
    },
    {
      "Street": "RAJENDRANAGAR",
      "City": "HYDERABAD",
      "lat": 17.299985,
      "lon": 78.4434738
    },
    {
      "Street": "BORABANDA",
      "City": "HYDERABAD",
      "lat": 17.4590687,
      "lon": 78.4078664
    },
    {
      "Street": "KARIMNAGAR",
      "City": "KARIMNAGAR",
      "lat": 18.4348122,
      "lon": 79.1328042
    },
    {
      "Street": "KACHIGUDA",
      "City": "HYDERABAD",
      "lat": 17.3900402,
      "lon": 78.4946205
    },
    {
      "Street": "GHATKESAR",
      "City": "MEDCHAL",
      "lat": 17.4510837,
      "lon": 78.6843022
    },
    {
      "Street": "SERILINGAMPALLY",
      "City": "HYDERABAD",
      "lat": 17.4656574,
      "lon": 78.3406724
    },
    {
      "Street": "KAMAREDDY",
      "City": "KAMAREDDY",
      "lat": 18.3222091,
      "lon": 78.3387118
    },
    {
      "Street": "SERILINGAMPALLY",
      "City": "RANGA REDDY",
      "lat": 17.4656574,
      "lon": 78.3406724
    },
    {
      "Street": "MEHEDIPATNAM",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "NANDYAL",
      "City": "KURNOOL",
      "lat": 15.6723894,
      "lon": 78.2923247
    },
    {
      "Street": "MIYAPUR",
      "City": "HYDERABAD",
      "lat": 17.4981608,
      "lon": 78.3567628
    },
    {
      "Street": "BHADRADRI KOTHAGUDEM",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.5512916,
      "lon": 80.6144535
    },
    {
      "Street": "MIYAPUR",
      "City": "MEDCHAL",
      "lat": 17.4951229,
      "lon": 78.3574077
    },
    {
      "Street": "KRISHNA",
      "City": "KRISHNA",
      "lat": 15.9841631,
      "lon": 80.8962416
    },
    {
      "Street": "SAROOR NAGAR",
      "City": "HYDERABAD",
      "lat": 17.3564017,
      "lon": 78.5318948
    },
    {
      "Street": "NACHARAM",
      "City": "HYDERABAD",
      "lat": 17.4284936,
      "lon": 78.5528098
    },
    {
      "Street": "SANTOSH NAGAR",
      "City": "HYDERABAD",
      "lat": 17.3477116,
      "lon": 78.5043699
    },
    {
      "Street": "VISAKHAPATNAM",
      "City": "VISAKHAPATNAM",
      "lat": 17.7231276,
      "lon": 83.3012842
    },
    {
      "Street": "SURYAPET",
      "City": "SURYAPET",
      "lat": 17.1405328,
      "lon": 79.6225105
    },
    {
      "Street": "MACHERLA",
      "City": "GUNTUR",
      "lat": 16.4834701,
      "lon": 79.3691684
    },
    {
      "Street": "JAGTIAL",
      "City": "JAGTIAL",
      "lat": 18.7956633,
      "lon": 78.9162397
    },
    {
      "Street": "VATTEPALLY",
      "City": "HYDERABAD",
      "lat": 17.3305423,
      "lon": 78.4621512
    },
    {
      "Street": "KOTI",
      "City": "HYDERABAD",
      "lat": 17.3847309,
      "lon": 78.4836642
    },
    {
      "Street": "CHELIMILLA",
      "City": "MAHABUBNAGAR",
      "lat": 16.9876628,
      "lon": 77.7766187
    },
    {
      "Street": "ADILABAD",
      "City": "ADILABAD",
      "lat": 19.6759452,
      "lon": 78.5339895
    },
    {
      "Street": "AMEERPET",
      "City": "HYDERABAD",
      "lat": 17.4375012,
      "lon": 78.4482505
    },
    {
      "Street": "IBRAHIMPATNAM",
      "City": "RANGA REDDY",
      "lat": 17.1952924,
      "lon": 78.6508564
    },
    {
      "Street": "NAMPALLY",
      "City": "HYDERABAD",
      "lat": 17.3923995,
      "lon": 78.4701477
    },
    {
      "Street": "A S RAO NAGAR",
      "City": "MEDCHAL",
      "lat": 17.4799497,
      "lon": 78.5568336
    },
    {
      "Street": "GACHIBOWLI",
      "City": "RANGA REDDY",
      "lat": 17.4436222,
      "lon": 78.3519638
    },
    {
      "Street": "WARANGAL (URBAN)",
      "City": "WARANGAL (URBAN)",
      "lat": 17.4761785,
      "lon": 78.3582269
    },
    {
      "Street": "CHELPUR",
      "City": "JAYASHANKAR BHUPALPALLY",
      "lat": 18.3678979,
      "lon": 79.849364
    },
    {
      "Street": "JANGAON",
      "City": "JANGOAN",
      "lat": 17.7243771,
      "lon": 79.1570824
    },
    {
      "Street": "SHADNAGAR",
      "City": "RANGA REDDY",
      "lat": 17.0671702,
      "lon": 78.2045948
    },
    {
      "Street": "RTC X ROADS",
      "City": "HYDERABAD",
      "lat": 17.4063252,
      "lon": 78.5001204
    },
    {
      "Street": "SHABAD",
      "City": "RANGA REDDY",
      "lat": 17.1619328,
      "lon": 78.1317666
    },
    {
      "Street": "SEC -WEST",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "RANGA REDDY",
      "City": "RANGA REDDY",
      "lat": 17.3316717,
      "lon": 78.5336658
    },
    {
      "Street": "BIHAR",
      "City": "PATNA",
      "lat": 25.6093239,
      "lon": 85.1235252
    },
    {
      "Street": "SEC-BAD",
      "City": "HYDERABAD",
      "lat": 17.4179557,
      "lon": 78.4911548
    },
    {
      "Street": "MALKAJGIRI",
      "City": "MEDCHAL",
      "lat": 17.4511764,
      "lon": 78.5368997
    },
    {
      "Street": "HAYAT NAGAR",
      "City": "RANGA REDDY",
      "lat": 17.4020724,
      "lon": 78.3910617
    },
    {
      "Street": "KUKATPALLY",
      "City": "HYDERABAD",
      "lat": 17.4930841,
      "lon": 78.4054408
    },
    {
      "Street": "RAJENDRANAGAR",
      "City": "RANGA REDDY",
      "lat": 17.3200738,
      "lon": 78.418589
    },
    {
      "Street": "PEDDAPALLI",
      "City": "PEDDAPALLI",
      "lat": 18.6177235,
      "lon": 79.3868069
    },
    {
      "Street": "MAHABUBABAD",
      "City": "MAHABUBABAD",
      "lat": 17.595749,
      "lon": 79.9999224
    },
    {
      "Street": "VIKARABAD",
      "City": "VIKARABAD",
      "lat": 17.3379216,
      "lon": 77.9039857
    },
    {
      "Street": "KADAPA",
      "City": "KADAPA",
      "lat": 14.4752936,
      "lon": 78.8216861
    },
    {
      "Street": "MAHESWARAM",
      "City": "RANGA REDDY",
      "lat": 17.1346733,
      "lon": 78.394434
    },
    {
      "Street": "ALWAL",
      "City": "MEDCHAL",
      "lat": 17.5022292,
      "lon": 78.5088584
    },
    {
      "Street": "PRAKASHAM",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "NAGARAM",
      "City": "MEDCHAL",
      "lat": 17.4891828,
      "lon": 78.6017275
    },
    {
      "Street": "VIZIANAGARAM",
      "City": "VIZIANAGARAM",
      "lat": 18.1139259,
      "lon": 83.3979562
    },
    {
      "Street": "ECIL",
      "City": "HYDERABAD",
      "lat": 17.4500506,
      "lon": 78.5809645
    },
    {
      "Street": "TARNAKA",
      "City": "HYDERABAD",
      "lat": 17.4285479,
      "lon": 78.5379433
    },
    {
      "Street": "GUNTUR",
      "City": "GUNTUR",
      "lat": 16.2915189,
      "lon": 80.4541588
    },
    {
      "Street": "BOWENPALLY",
      "City": "HYDERABAD",
      "lat": 17.4755371,
      "lon": 78.4792282
    },
    {
      "Street": "ORISSA",
      "City": "NAYAGARH",
      "lat": 20.2393682,
      "lon": 85.050728
    },
    {
      "Street": "ECIL",
      "City": "MEDCHAL",
      "lat": 17.5058547,
      "lon": 78.5242397
    },
    {
      "Street": "BALANAGAR",
      "City": "MEDCHAL",
      "lat": 17.4768224,
      "lon": 78.4219645
    },
    {
      "Street": "SIDDIPET",
      "City": "SIDDIPET",
      "lat": 18.1017739,
      "lon": 78.8520128
    },
    {
      "Street": "BEGUMPET",
      "City": "HYDERABAD",
      "lat": 17.446195,
      "lon": 78.463016
    },
    {
      "Street": "TANDUR",
      "City": "ADILABAD",
      "lat": 19.15183,
      "lon": 79.45024
    },
    {
      "Street": "KOMPALLY",
      "City": "HYDERABAD",
      "lat": 17.5354727,
      "lon": 78.5097274
    },
    {
      "Street": "KURNOOL",
      "City": "KURNOOL",
      "lat": 15.8309251,
      "lon": 78.0425373
    },
    {
      "Street": "KARNATAKA",
      "City": "BANGALORE",
      "lat": 12.9767936,
      "lon": 77.590082
    },
    {
      "Street": "ALWAL",
      "City": "HYDERABAD",
      "lat": 17.5022292,
      "lon": 78.5088584
    },
    {
      "Street": "SECUNDERABAD",
      "City": "HYDERABAD",
      "lat": 17.4337246,
      "lon": 78.5006827
    },
    {
      "Street": "NIRMAL",
      "City": "NIRMAL",
      "lat": 19.0924602,
      "lon": 78.3486041
    },
    {
      "Street": "Un Identified Address",
      "City": "MEDCHAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MALKAJGIRI",
      "City": "HYDERABAD",
      "lat": 17.4511764,
      "lon": 78.5368997
    },
    {
      "Street": "ANANTAPUR",
      "City": "ANANTAPUR",
      "lat": 14.6783221,
      "lon": 77.6065039
    },
    {
      "Street": "NAGARAM",
      "City": "HYDERABAD",
      "lat": 17.4910112,
      "lon": 78.613677
    },
    {
      "Street": "MANCHERIAL",
      "City": "MANCHERIAL",
      "lat": 18.8761795,
      "lon": 79.4449696
    },
    {
      "Street": "CHAMPA",
      "City": "JANJGIR-CHAMPA",
      "lat": 22.0308423,
      "lon": 82.6460412
    },
    {
      "Street": "KUKATPALLY",
      "City": "MEDCHAL",
      "lat": 17.4930841,
      "lon": 78.4054408
    },
    {
      "Street": "MEDCHAL",
      "City": "MEDCHAL",
      "lat": 17.6402806,
      "lon": 78.4751223
    },
    {
      "Street": "RAJANNA SIRCILLA",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.3897573,
      "lon": 78.8085973
    },
    {
      "Street": "HARIYANA",
      "City": "GURGAON",
      "lat": 28.4646148,
      "lon": 77.0299194
    },
    {
      "Street": "MEDAK",
      "City": "MEDAK",
      "lat": 18.0458792,
      "lon": 78.2651993
    },
    {
      "Street": "MAHARASHTRA",
      "City": "PUNE",
      "lat": 18.5213738,
      "lon": 73.8545071
    },
    {
      "Street": "BIDAR",
      "City": "BIDAR",
      "lat": 17.9143767,
      "lon": 77.5263568
    },
    {
      "Street": "DEVARAPALLI",
      "City": "KRISHNA",
      "lat": 16.2962997,
      "lon": 80.8211792
    },
    {
      "Street": "MAHARASHTRA",
      "City": "MUMBAI",
      "lat": 19.0785451,
      "lon": 72.878176
    },
    {
      "Street": "NARAYANPET",
      "City": "NARAYANPET",
      "lat": 16.7477612,
      "lon": 77.4949954
    },
    {
      "Street": "CHICKMAGALUR",
      "City": "CHICKMAGALUR",
      "lat": 13.32231,
      "lon": 75.774
    },
    {
      "Street": "SHAMIRPET",
      "City": "MEDCHAL",
      "lat": 17.5942672,
      "lon": 78.5743878
    },
    {
      "Street": "HYDERABAD",
      "City": "HYDERABAD",
      "lat": 17.360589,
      "lon": 78.4740613
    },
    {
      "Street": "KOMPALLY",
      "City": "MEDCHAL",
      "lat": 17.5448987,
      "lon": 78.4872615
    },
    {
      "Street": "NANDED",
      "City": "NANDED",
      "lat": 19.1725722,
      "lon": 77.2914124
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "LUCKNOW",
      "lat": 26.8381,
      "lon": 80.9346001
    },
    {
      "Street": "EAST GODAVARI",
      "City": "EAST GODAVARI",
      "lat": 17.233496,
      "lon": 81.7225986
    },
    {
      "Street": "PEDAVEGI",
      "City": "WEST GODAVARI",
      "lat": 16.8161224,
      "lon": 81.1097445
    },
    {
      "Street": "Un Identified Address",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "ORISSA",
      "City": "KALAHANDI",
      "lat": 19.8265756,
      "lon": 83.0408702
    },
    {
      "Street": "KHAIRTABAD",
      "City": "HYDERABAD",
      "lat": 17.4097231,
      "lon": 78.4637978
    },
    {
      "Street": "ABIDS",
      "City": "HYDERABAD",
      "lat": 17.3894783,
      "lon": 78.477182
    },
    {
      "Street": "WARANGAL (RURAL)",
      "City": "WARANGAL (RURAL)",
      "lat": 17.98459,
      "lon": 79.59942
    },
    {
      "Street": "SANGAREDDY",
      "City": "SANGAREDDY",
      "lat": 17.6155151,
      "lon": 78.0817225
    },
    {
      "Street": "WEST GODAVARI",
      "City": "WEST GODAVARI",
      "lat": 16.912044,
      "lon": 81.4377673
    },
    {
      "Street": "BALANTHARAM",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "MAHARASHTRA",
      "City": "CHANDRAPUR",
      "lat": 20.0967555,
      "lon": 79.5045475
    },
    {
      "Street": "YADAMARI",
      "City": "CHITTOOR",
      "lat": 13.1596298,
      "lon": 79.0397249
    },
    {
      "Street": "MULUGU",
      "City": "MULUGU",
      "lat": 18.1932372,
      "lon": 79.9413676
    },
    {
      "Street": "NAGPUR",
      "City": "NAGPUR",
      "lat": 21.1498134,
      "lon": 79.0820556
    },
    {
      "Street": "GACHIBOWLI",
      "City": "HYDERABAD",
      "lat": 17.4436222,
      "lon": 78.3519638
    },
    {
      "Street": "GUJARATH",
      "City": "AHMEDABAD",
      "lat": 23.02579,
      "lon": 72.58727
    },
    {
      "Street": "WARANGAL (RURAL)",
      "City": "WARANGAL (URBAN)",
      "lat": 17.945546,
      "lon": 79.5976263
    },
    {
      "Street": "THIMMAPUR",
      "City": "KARIMNAGAR",
      "lat": 18.3726097,
      "lon": 79.1585111
    },
    {
      "Street": "JARKAND",
      "City": "BOKARO",
      "lat": 23.6991279,
      "lon": 85.9910689
    },
    {
      "Street": "CUTTACK",
      "City": "CUTTACK",
      "lat": 20.4686,
      "lon": 85.8792
    },
    {
      "Street": "MAHARASHTRA",
      "City": "PARBHANI",
      "lat": 19.2901981,
      "lon": 76.6026443
    },
    {
      "Street": "MAHARASHTRA",
      "City": "GADCHIROLI",
      "lat": 19.7590704,
      "lon": 80.1622807
    },
    {
      "Street": "MAHARASHTRA",
      "City": "THANE",
      "lat": 19.3592411,
      "lon": 73.3708245
    },
    {
      "Street": "MAHARASHTRA",
      "City": "AURANGABAD",
      "lat": 19.877263,
      "lon": 75.3390241
    },
    {
      "Street": "THIRUVALLUR",
      "City": "THIRUVALLUR",
      "lat": 13.1313595,
      "lon": 79.9262525
    },
    {
      "Street": "IDUKKI",
      "City": "IDUKKI",
      "lat": 9.8497872,
      "lon": 76.9797914
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "GORAKHPUR",
      "lat": 26.6677977,
      "lon": 83.3642334
    },
    {
      "Street": "KANGAL",
      "City": "SIDDIPET",
      "lat": 18.0331177,
      "lon": 78.7196955
    },
    {
      "Street": "PONDA",
      "City": "NORTH GOA",
      "lat": 15.4952105,
      "lon": 73.8373692
    },
    {
      "Street": "THRISSUR",
      "City": "THRISSUR",
      "lat": 10.5270099,
      "lon": 76.214621
    },
    {
      "Street": "JOGULAMBA GADWAL",
      "City": "JOGULAMBA GADWAL",
      "lat": 16.2347032,
      "lon": 77.7946371
    },
    {
      "Street": "KODURU",
      "City": "KRISHNA",
      "lat": 15.9877137,
      "lon": 81.0527074
    },
    {
      "Street": "WANAPARTHY",
      "City": "WANAPARTHY",
      "lat": 16.3617799,
      "lon": 78.0610836
    },
    {
      "Street": "WEST BENGAL",
      "City": "BARDHAMAN",
      "lat": 23.2495714,
      "lon": 87.8681751
    },
    {
      "Street": "CHITTOOR",
      "City": "CHITTOOR",
      "lat": 13.2161224,
      "lon": 79.0972819
    },
    {
      "Street": "KOMARAM BHEEM ASIFABAD",
      "City": "KOMARAM BHEEM ASIFABAD",
      "lat": 19.3593461,
      "lon": 79.2960404
    },
    {
      "Street": "PUNJAGUTTA",
      "City": "HYDERABAD",
      "lat": 17.4286964,
      "lon": 78.4519072
    },
    {
      "Street": "KODAD",
      "City": "SURYAPET",
      "lat": 16.9947802,
      "lon": 79.9749826
    },
    {
      "Street": "YADGIR",
      "City": "YADGIR",
      "lat": 16.7446491,
      "lon": 77.1297018
    },
    {
      "Street": "AFZALGUNJ",
      "City": "HYDERABAD",
      "lat": 17.3734999,
      "lon": 78.4763376
    },
    {
      "Street": "BIHAR",
      "City": "NALANDA",
      "lat": 25.1364914,
      "lon": 85.4436546
    },
    {
      "Street": "VIJAYAWADA",
      "City": "KRISHNA",
      "lat": 16.5315766,
      "lon": 80.8029504
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "KANPUR DEHAT",
      "lat": 26.4585639,
      "lon": 79.8548052
    },
    {
      "Street": "GULBARGA",
      "City": "GULBARGA",
      "lat": 17.3407433,
      "lon": 76.8311069
    },
    {
      "Street": "BIHAR",
      "City": "SAMASTIPUR",
      "lat": 25.7747884,
      "lon": 85.8672314
    },
    {
      "Street": "NACHARAM",
      "City": "MEDCHAL",
      "lat": 17.4284936,
      "lon": 78.5528098
    },
    {
      "Street": "KARNATAKA",
      "City": "BELGAUM",
      "lat": 15.8572666,
      "lon": 74.5069343
    },
    {
      "Street": "CHHATTISGARH",
      "City": "DURG",
      "lat": 21.1982964,
      "lon": 81.4007922
    },
    {
      "Street": "JARKAND",
      "City": "EAST SINGHBHUM",
      "lat": 22.613184,
      "lon": 86.3819399
    },
    {
      "Street": "VEERAPUNAYUNIPALLE",
      "City": "KADAPA",
      "lat": 14.387056,
      "lon": 78.4694628
    },
    {
      "Street": "VELDURTHI",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "BANJARA HILLS",
      "City": "HYDERABAD",
      "lat": 17.4177464,
      "lon": 78.4399014
    },
    {
      "Street": "NELLORE",
      "City": "NELLORE",
      "lat": 14.4493717,
      "lon": 79.9873763
    },
    {
      "Street": "MAHARASHTRA",
      "City": "SOLAPUR",
      "lat": 17.8499067,
      "lon": 75.2763203
    },
    {
      "Street": "BADVEL",
      "City": "KADAPA",
      "lat": 14.6790402,
      "lon": 79.0495967
    },
    {
      "Street": "MAHARASHTRA",
      "City": "YAVATMAL",
      "lat": 20.0638677,
      "lon": 78.3565663
    },
    {
      "Street": "JUBILEE HILLS",
      "City": "HYDERABAD",
      "lat": 17.4308362,
      "lon": 78.4102882
    },
    {
      "Street": "BIDHANNAGAR",
      "City": "BARDHAMAN",
      "lat": 23.5259085,
      "lon": 87.3429877
    },
    {
      "Street": "CHEVELLA",
      "City": "RANGA REDDY",
      "lat": 17.3062296,
      "lon": 78.1370079
    },
    {
      "Street": "MALLAPUR",
      "City": "JAGTIAL",
      "lat": 18.9700102,
      "lon": 78.7053522
    },
    {
      "Street": "VAVILALAPALLY",
      "City": "KARIMNAGAR",
      "lat": 18.4438262,
      "lon": 79.1285341
    },
    {
      "Street": "KANNUR",
      "City": "KANNUR",
      "lat": 11.8763836,
      "lon": 75.3737973
    },
    {
      "Street": "MAIKOD",
      "City": "MEDAK",
      "lat": 17.75,
      "lon": 78.25
    },
    {
      "Street": "JAYASHANKAR BHUPALPALLY",
      "City": "JAYASHANKAR BHUPALPALLY",
      "lat": 18.4431879,
      "lon": 79.8668237
    },
    {
      "Street": "MOTHEY",
      "City": "SURYAPET",
      "lat": 17.1688508,
      "lon": 79.8031059
    },
    {
      "Street": "ORISSA",
      "City": "JHARSUGUDA",
      "lat": 21.8019368,
      "lon": 83.9713964
    },
    {
      "Street": "LATUR",
      "City": "LATUR",
      "lat": 18.3982273,
      "lon": 76.5625913
    },
    {
      "Street": "HASANAPURAM",
      "City": "NELLORE",
      "lat": 14.6647319,
      "lon": 79.7627383
    },
    {
      "Street": "PONDURU",
      "City": "SRIKAKULAM",
      "lat": 18.362788,
      "lon": 83.7767868
    },
    {
      "Street": "DAMOH",
      "City": "DAMOH",
      "lat": 23.8360587,
      "lon": 79.4321389
    },
    {
      "Street": "SONAPUR",
      "City": "SONAPUR",
      "lat": 26.1192493,
      "lon": 91.9702229
    },
    {
      "Street": "WEST BENGAL",
      "City": "DARJEELING",
      "lat": 27.0377554,
      "lon": 88.263176
    },
    {
      "Street": "BALESHWAR",
      "City": "BALESWAR",
      "lat": 21.5012299,
      "lon": 86.9238099
    },
    {
      "Street": "CHITVEL",
      "City": "KADAPA",
      "lat": 14.1728461,
      "lon": 79.330904
    },
    {
      "Street": "ANTARVEDI",
      "City": "EAST GODAVARI",
      "lat": 16.33333,
      "lon": 81.73333
    },
    {
      "Street": "SRIKAKULAM",
      "City": "SRIKAKULAM",
      "lat": 18.2949307,
      "lon": 83.8938844
    },
    {
      "Street": "BHUBANESWAR (M CORP )",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.27241,
      "lon": 85.83385
    },
    {
      "Street": "ATREYA PURAM",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "KERALA",
      "City": "ERNAKULAM",
      "lat": 9.98408,
      "lon": 76.2741457
    },
    {
      "Street": "MADHYA PRADESH",
      "City": "INDORE",
      "lat": 22.7203616,
      "lon": 75.8681996
    },
    {
      "Street": "KIRLAMPUDI",
      "City": "EAST GODAVARI",
      "lat": 17.201998,
      "lon": 82.181185
    },
    {
      "Street": "BARDHAMAN",
      "City": "BARDHAMAN",
      "lat": 23.2495714,
      "lon": 87.8681751
    },
    {
      "Street": "NAGOLAVANCHA",
      "City": "KHAMMAM",
      "lat": 17.5,
      "lon": 80.33333
    },
    {
      "Street": "KANCHI",
      "City": "SRIKAKULAM",
      "lat": 18.5,
      "lon": 84
    },
    {
      "Street": "HUSNABAD",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "MEHSAUL",
      "City": "SITAMARHI",
      "lat": 26.5946649,
      "lon": 85.5021206
    },
    {
      "Street": "PATHANKOT",
      "City": "PATHANKOT",
      "lat": 32.2692452,
      "lon": 75.6528858
    },
    {
      "Street": "MIDUTHURU",
      "City": "KADAPA",
      "lat": 14.6603229,
      "lon": 78.6903864
    },
    {
      "Street": "BELLARY",
      "City": "BELLARY",
      "lat": 15.1622025,
      "lon": 76.8815329
    },
    {
      "Street": "ATMAKUR ",
      "City": "SURYAPET",
      "lat": 17.2515761,
      "lon": 79.7006764
    },
    {
      "Street": "PENDLURU",
      "City": "KADAPA",
      "lat": 14.4389453,
      "lon": 78.3610456
    },
    {
      "Street": "ZIRAKPUR",
      "City": "ZIRAKPUR",
      "lat": 30.6591847,
      "lon": 76.8210973
    },
    {
      "Street": "LEPAKSHI",
      "City": "ANANTAPUR",
      "lat": 14.6321073,
      "lon": 77.6250314
    },
    {
      "Street": "NARKEDIMILLI",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "CHHATTISGARH",
      "City": "KORBA",
      "lat": 22.5198217,
      "lon": 82.6350029
    },
    {
      "Street": "KOTHAPETA",
      "City": "EAST GODAVARI",
      "lat": 16.718281,
      "lon": 81.894087
    },
    {
      "Street": "PURULIA",
      "City": "PURULIA",
      "lat": 23.3291882,
      "lon": 86.3672378
    },
    {
      "Street": "ORISSA",
      "City": "SAMBALPUR",
      "lat": 21.5570606,
      "lon": 84.1528515
    },
    {
      "Street": "TAMIL NADU",
      "City": "CHENNAI",
      "lat": 13.0836939,
      "lon": 80.270186
    },
    {
      "Street": "ORISSA",
      "City": "GANJAM",
      "lat": 19.6090067,
      "lon": 84.7080633
    },
    {
      "Street": "ULAVAPADU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "HANIMAPUR",
      "City": "VIKARABAD",
      "lat": 17.3381,
      "lon": 77.90441
    },
    {
      "Street": "WEST BENGAL",
      "City": "HOWRAH",
      "lat": 22.5736296,
      "lon": 88.3251045
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "VARANASI",
      "lat": 25.3356491,
      "lon": 83.0076292
    },
    {
      "Street": "AMBALA",
      "City": "AMBALA",
      "lat": 30.3843674,
      "lon": 76.770421
    },
    {
      "Street": "SIROHI",
      "City": "SIROHI",
      "lat": 24.8858,
      "lon": 72.8589
    },
    {
      "Street": "BIRBHUM",
      "City": "BIRBHUM",
      "lat": 24,
      "lon": 87.583333
    },
    {
      "Street": "MANUBOLU",
      "City": "NELLORE",
      "lat": 14.2451563,
      "lon": 79.8698278
    },
    {
      "Street": "Un Identified Address",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "TRIPURA",
      "City": "WEST TRIPURA",
      "lat": 23.9153328,
      "lon": 91.3879341
    },
    {
      "Street": "ANAPARTHI",
      "City": "EAST GODAVARI",
      "lat": 16.9097103,
      "lon": 81.9500923
    },
    {
      "Street": "KRISHNAGIRI",
      "City": "KURNOOL",
      "lat": 15.5283852,
      "lon": 77.8033967
    },
    {
      "Street": "JINNARAM",
      "City": "MEDAK",
      "lat": 17.6321182,
      "lon": 78.3298239
    },
    {
      "Street": "DHELAGARAN",
      "City": "GONDA",
      "lat": 27.13253,
      "lon": 81.96897
    },
    {
      "Street": "MARIKAL",
      "City": "NARAYANPET",
      "lat": 16.6036234,
      "lon": 77.7282091
    },
    {
      "Street": "ANANTHAGIRI",
      "City": "SURYAPET",
      "lat": 16.9990185,
      "lon": 79.9518039
    },
    {
      "Street": "BRAHMAMGARIMATTAM",
      "City": "KADAPA",
      "lat": 14.8545941,
      "lon": 78.8752543
    },
    {
      "Street": "PATHI KONDA",
      "City": "KURNOOL",
      "lat": 15.58333,
      "lon": 78.33333
    },
    {
      "Street": "JARKAND",
      "City": "RANCHI",
      "lat": 23.3700501,
      "lon": 85.3250387
    },
    {
      "Street": "THEEGELA GUTTA PALLI",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "BIHAR",
      "City": "GAYA",
      "lat": 24.6793889,
      "lon": 85.0115833
    },
    {
      "Street": "ORISSA",
      "City": "PURI",
      "lat": 19.8076083,
      "lon": 85.8252538
    },
    {
      "Street": "WEST BENGAL",
      "City": "MURSHIDABAD",
      "lat": 24.1745993,
      "lon": 88.2721335
    },
    {
      "Street": "TIMMAPUR",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "HARIDASPUR",
      "City": "BIRBHUM",
      "lat": 24,
      "lon": 87.58333
    },
    {
      "Street": "MADHYA PRADESH",
      "City": "SHAHDOL",
      "lat": 23.3002343,
      "lon": 81.364771
    },
    {
      "Street": "RAICHUR",
      "City": "RAICHUR",
      "lat": 16.1983225,
      "lon": 77.3527444
    },
    {
      "Street": "KARNATAKA",
      "City": "DAKSHINA KANNADA",
      "lat": 12.8226433,
      "lon": 75.2265036
    },
    {
      "Street": "JARKAND",
      "City": "HAZARIBAGH",
      "lat": 24.0866962,
      "lon": 85.4912231
    },
    {
      "Street": "WEST BENGAL",
      "City": "KOLKATA",
      "lat": 22.5726459,
      "lon": 88.3638953
    },
    {
      "Street": "SURI",
      "City": "BIRBHUM",
      "lat": 23.9080538,
      "lon": 87.5277255
    },
    {
      "Street": "CHHATTISGARH",
      "City": "RAIPUR",
      "lat": 21.2380912,
      "lon": 81.6336993
    },
    {
      "Street": "GUWAHATI",
      "City": "KAMRUP",
      "lat": 26.1805978,
      "lon": 91.753943
    },
    {
      "Street": "SHAMSHABAD",
      "City": "HYDERABAD",
      "lat": 17.260048,
      "lon": 78.386917
    },
    {
      "Street": "SANTOSH NAGAR",
      "City": "RANGA REDDY",
      "lat": 17.4002276,
      "lon": 78.373528
    },
    {
      "Street": "KANDUKUR",
      "City": "RANGA REDDY",
      "lat": 17.0643848,
      "lon": 78.489005
    },
    {
      "Street": "SIRCILLA",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.3897573,
      "lon": 78.8085973
    },
    {
      "Street": "KOTHAGUDEM",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.1357837,
      "lon": 78.8986809
    },
    {
      "Street": "KRISHNAREDDYPET",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "RAJU PALEM",
      "City": "KADAPA",
      "lat": 14.4775,
      "lon": 78.82353
    },
    {
      "Street": "VILLUPURAM",
      "City": "VILLUPURAM",
      "lat": 11.9930877,
      "lon": 79.5167872
    },
    {
      "Street": "KODARMA",
      "City": "KODARMA",
      "lat": 24.4351882,
      "lon": 85.5279448
    },
    {
      "Street": "DEVARAKADRA",
      "City": "MAHABUBNAGAR",
      "lat": 16.6237104,
      "lon": 77.839363
    },
    {
      "Street": "SIKAR",
      "City": "SIKAR",
      "lat": 27.6091864,
      "lon": 75.1395503
    },
    {
      "Street": "KORAPUT",
      "City": "KORAPUT",
      "lat": 19,
      "lon": 83
    },
    {
      "Street": "YELAMANCHILI",
      "City": "WEST GODAVARI",
      "lat": 16.477879,
      "lon": 81.7842589
    },
    {
      "Street": "RAJASTHAN",
      "City": "ALWAR",
      "lat": 27.4140048,
      "lon": 76.6170387
    },
    {
      "Street": "KONDAPUR",
      "City": "SANGAREDDY",
      "lat": 18.0589518,
      "lon": 77.7798772
    },
    {
      "Street": "VANASTHALIPURAM",
      "City": "RANGA REDDY",
      "lat": 17.3303179,
      "lon": 78.568278
    },
    {
      "Street": "RAJAVARAM",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "WEST BENGAL",
      "City": "SOUTH 24 PARGANAS",
      "lat": 22.1776733,
      "lon": 88.5307853
    },
    {
      "Street": "UTUKURU",
      "City": "KRISHNA",
      "lat": 16.66667,
      "lon": 81
    },
    {
      "Street": "PETLAD",
      "City": "ANAND",
      "lat": 22.4770467,
      "lon": 72.8003365
    },
    {
      "Street": "TRIPURA",
      "City": "DHALAI",
      "lat": 23.8253158,
      "lon": 91.9732227
    },
    {
      "Street": "UTTAM NAGAR",
      "City": "WEST DELHI",
      "lat": 28.6215226,
      "lon": 77.0611064
    },
    {
      "Street": "MOTHEY",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "WEST BENGAL",
      "City": "COOCH BEHAR",
      "lat": 26.2559197,
      "lon": 89.4201143
    },
    {
      "Street": "KAMRUP",
      "City": "KAMRUP",
      "lat": 26.1390895,
      "lon": 91.7463206
    },
    {
      "Street": "MANTHANI",
      "City": "KARIMNAGAR",
      "lat": 18.65087,
      "lon": 79.66501
    },
    {
      "Street": "DELHI",
      "City": "DELHI",
      "lat": 28.4851694,
      "lon": 77.1963652
    },
    {
      "Street": "UDDAVOLU",
      "City": "VIZIANAGARAM",
      "lat": 18.5247094,
      "lon": 83.6057852
    },
    {
      "Street": "AMBERPET",
      "City": "MEDCHAL",
      "lat": 17.3852326,
      "lon": 78.5288541
    },
    {
      "Street": "KARIMABAD",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "BANDARUPALLE",
      "City": "MULUGU",
      "lat": 18.2147174,
      "lon": 79.9246788
    },
    {
      "Street": "YAMUNANAGAR",
      "City": "YAMUNANAGAR",
      "lat": 30.1231349,
      "lon": 77.286329
    },
    {
      "Street": "JANNARAM",
      "City": "MANCHERIAL",
      "lat": 19.1219171,
      "lon": 78.9959894
    },
    {
      "Street": "MANTHANI",
      "City": "PEDDAPALLI",
      "lat": 18.6512469,
      "lon": 79.665771
    },
    {
      "Street": "JALUMURU",
      "City": "SRIKAKULAM",
      "lat": 18.5341112,
      "lon": 84.037989
    },
    {
      "Street": "KARNATAKA",
      "City": "KARNATAKA OTHERS",
      "lat": 13.3110315,
      "lon": 76.9402058
    },
    {
      "Street": "NALANDA",
      "City": "NALANDA",
      "lat": 25.1364914,
      "lon": 85.4436546
    },
    {
      "Street": "KOTA",
      "City": "KOTA",
      "lat": 25.1737019,
      "lon": 75.8574194
    },
    {
      "Street": "ORISSA",
      "City": "BARGARH",
      "lat": 21.2319922,
      "lon": 83.5652737
    },
    {
      "Street": "KARNATAKA",
      "City": "BELLARY",
      "lat": 15.1433952,
      "lon": 76.9193876
    },
    {
      "Street": "CHANDAMPET",
      "City": "NALGONDA",
      "lat": 16.5776533,
      "lon": 78.8949329
    },
    {
      "Street": "GOVINDARAOPET",
      "City": "MULUGU",
      "lat": 18.1977379,
      "lon": 80.1297712
    },
    {
      "Street": "DULLAPALLE",
      "City": "MEDCHAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BALANAGAR",
      "City": "RANGA REDDY",
      "lat": 16.9479919,
      "lon": 78.1894763
    },
    {
      "Street": "BUCHIREDDYPALEM",
      "City": "NELLORE",
      "lat": 14.540432,
      "lon": 79.8932165
    },
    {
      "Street": "MALAJGIRI",
      "City": "MEDCHAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "DALU",
      "City": "CACHAR",
      "lat": 24.9228991,
      "lon": 92.7815312
    },
    {
      "Street": "MALKJAGIRI",
      "City": "MEDCHAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "CHHATTISGARH",
      "City": "RAIGARH",
      "lat": 22.2361795,
      "lon": 83.3529534
    },
    {
      "Street": "EAST MEDINIPUR",
      "City": "EAST MEDINIPUR",
      "lat": 22.4107334,
      "lon": 87.8649777
    },
    {
      "Street": "CHANDIGARH",
      "City": "CHANDIGARH",
      "lat": 30.7334421,
      "lon": 76.7797143
    },
    {
      "Street": "WADDEPALLY",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "ALLAHABAD",
      "City": "ALLAHABAD",
      "lat": 25.4381302,
      "lon": 81.8338005
    },
    {
      "Street": "KASHIBUGGA",
      "City": "WARANGAL (URBAN)",
      "lat": 17.9814907,
      "lon": 79.6318731
    },
    {
      "Street": "JARKAND",
      "City": "GIRIDH",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MOGULLAPALLE",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "KOLHAPUR",
      "City": "KOLHAPUR",
      "lat": 16.7028412,
      "lon": 74.2405329
    },
    {
      "Street": "MAHARASHTRA",
      "City": "AMRAVATI",
      "lat": 21.1545412,
      "lon": 77.6442962
    },
    {
      "Street": "JAMSHEDPUR",
      "City": "EAST SINGHBHUM",
      "lat": 22.8015194,
      "lon": 86.2029579
    },
    {
      "Street": "BIHAR",
      "City": "MUZAFFARPUR",
      "lat": 26.1482548,
      "lon": 85.3316097
    },
    {
      "Street": "NELLIMARLA",
      "City": "VIZIANAGARAM",
      "lat": 18.162553,
      "lon": 83.4473402
    },
    {
      "Street": "MAHABUBABAD",
      "City": "WARANGAL",
      "lat": 17.594432,
      "lon": 80.0023489
    },
    {
      "Street": "RAGHUNATHPALLY",
      "City": "JANGOAN",
      "lat": 17.8678833,
      "lon": 79.4831161
    },
    {
      "Street": "KAGAZ NAGAR",
      "City": "KOMARAM BHEEM ASIFABAD",
      "lat": 19.35851,
      "lon": 79.28415
    },
    {
      "Street": "GANJAM",
      "City": "GANJAM",
      "lat": 19.3952541,
      "lon": 85.0462766
    },
    {
      "Street": "KAKINADA",
      "City": "EAST GODAVARI",
      "lat": 16.9174762,
      "lon": 82.0280289
    },
    {
      "Street": "LUXETTIPET",
      "City": "MANCHERIAL",
      "lat": 18.9192282,
      "lon": 79.2328067
    },
    {
      "Street": "BHONGIR",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.5172789,
      "lon": 78.8863383
    },
    {
      "Street": "CHANDRAGIRI",
      "City": "CHITTOOR",
      "lat": 13.588502,
      "lon": 79.3143005
    },
    {
      "Street": "JAMMALA MADUGU",
      "City": "KADAPA",
      "lat": 14.4775,
      "lon": 78.82353
    },
    {
      "Street": "KESARA",
      "City": "MEDCHAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "RAMAGUNDAM",
      "City": "PEDDAPALLI",
      "lat": 18.7615156,
      "lon": 79.4787848
    },
    {
      "Street": "THOGUTA",
      "City": "SIDDIPET",
      "lat": 18.0135898,
      "lon": 78.713243
    },
    {
      "Street": "BUVANAGIRI",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 11.44154,
      "lon": 79.64568
    },
    {
      "Street": "LINGALA GHANPUR",
      "City": "JANGOAN",
      "lat": 17.6573065,
      "lon": 79.1974125
    },
    {
      "Street": "KEESARA",
      "City": "MEDCHAL",
      "lat": 17.5249309,
      "lon": 78.6665345
    },
    {
      "Street": "KONDAPURAM",
      "City": "KADAPA",
      "lat": 14.8080978,
      "lon": 78.1607455
    },
    {
      "Street": "YADAGIRIGUTTA",
      "City": "NALGONDA",
      "lat": 17.5951313,
      "lon": 78.9523686
    },
    {
      "Street": "YADAGIRIGUTTA",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.5840567,
      "lon": 78.9467282
    },
    {
      "Street": "KORATLA",
      "City": "JAGTIAL",
      "lat": 18.823632,
      "lon": 78.717897
    },
    {
      "Street": "MUSHEERABAD",
      "City": "HYDERABAD",
      "lat": 17.4191423,
      "lon": 78.4985732
    },
    {
      "Street": "KURNOOL.",
      "City": "KURNOOL",
      "lat": 15.8309251,
      "lon": 78.0425373
    },
    {
      "Street": "HANAMKONDA",
      "City": "WARANGAL (URBAN)",
      "lat": 18.00563,
      "lon": 79.56766
    },
    {
      "Street": "MEDIPALLY",
      "City": "MEDCHAL",
      "lat": 17.4206569,
      "lon": 78.5920428
    },
    {
      "Street": "JAGITYAL",
      "City": "JAGTIAL",
      "lat": 18.8249636,
      "lon": 78.8788332
    },
    {
      "Street": "SIRSILLA",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.3897573,
      "lon": 78.8085973
    },
    {
      "Street": "RAJAHMUNDRY",
      "City": "EAST GODAVARI",
      "lat": 17.0050454,
      "lon": 81.7804732
    },
    {
      "Street": "ELURU",
      "City": "WEST GODAVARI",
      "lat": 16.8143508,
      "lon": 81.5038136
    },
    {
      "Street": "NIDADAVOLE",
      "City": "WEST GODAVARI",
      "lat": 16.9027,
      "lon": 81.67451
    },
    {
      "Street": "SIDDIPET",
      "City": "MEDAK",
      "lat": 18.1017696,
      "lon": 78.847454
    },
    {
      "Street": "GHATKESAR",
      "City": "RANGA REDDY",
      "lat": 17.4512161,
      "lon": 78.6834812
    },
    {
      "Street": "PUDUR",
      "City": "RANGA REDDY",
      "lat": 17.6224676,
      "lon": 78.5269763
    },
    {
      "Street": "KOTHAGUDEM",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.5512916,
      "lon": 80.6144535
    },
    {
      "Street": "VELGATOOR",
      "City": "JAGTIAL",
      "lat": 18.8444685,
      "lon": 79.1721124
    },
    {
      "Street": "KAPRA",
      "City": "MEDCHAL",
      "lat": 17.4846356,
      "lon": 78.5610095
    },
    {
      "Street": "MANGAPET",
      "City": "MULUGU",
      "lat": 18.2526756,
      "lon": 80.5181551
    },
    {
      "Street": "ONGOLE",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PALAKURTHY",
      "City": "JANGOAN",
      "lat": 17.6599189,
      "lon": 79.4310915
    },
    {
      "Street": "GUDUR",
      "City": "NELLORE",
      "lat": 14.3694176,
      "lon": 80.0393888
    },
    {
      "Street": "JAWAHAR NAGAR",
      "City": "MEDCHAL",
      "lat": 17.5100445,
      "lon": 78.5590092
    },
    {
      "Street": "BHAINSA",
      "City": "NIRMAL",
      "lat": 19.107085,
      "lon": 77.9635656
    },
    {
      "Street": "WARANGAL",
      "City": "WARANGAL (URBAN)",
      "lat": 17.4761785,
      "lon": 78.3582269
    },
    {
      "Street": "GUDIVADA",
      "City": "KRISHNA",
      "lat": 16.4329976,
      "lon": 80.9937151
    },
    {
      "Street": "KOMAROLU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "RAMGARH",
      "City": "RAMGARH",
      "lat": 23.6303213,
      "lon": 85.5215878
    },
    {
      "Street": "PEDDAVOORA",
      "City": "NALGONDA",
      "lat": 17.167467,
      "lon": 79.5012231
    },
    {
      "Street": "SANGAREDDY",
      "City": "MEDAK",
      "lat": 17.75,
      "lon": 78.25
    },
    {
      "Street": "QUTHBULLAPUR",
      "City": "MEDCHAL",
      "lat": 17.5029283,
      "lon": 78.4600049
    },
    {
      "Street": "ADONI",
      "City": "KURNOOL",
      "lat": 15.625197,
      "lon": 77.2729124
    },
    {
      "Street": "NARSAPUR",
      "City": "MEDAK",
      "lat": 17.7384006,
      "lon": 78.279637
    },
    {
      "Street": "KANNEPALLI",
      "City": "MANCHERIAL",
      "lat": 19.1508287,
      "lon": 79.6675436
    },
    {
      "Street": "NEREDUCHERLA",
      "City": "SURYAPET",
      "lat": 16.9061851,
      "lon": 79.6672919
    },
    {
      "Street": "JAIPUR",
      "City": "MANCHERIAL",
      "lat": 18.8464525,
      "lon": 79.5856465
    },
    {
      "Street": "VEMULAWADA",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.4674786,
      "lon": 78.8699
    },
    {
      "Street": "WARANGAL URBAN",
      "City": "WARANGAL (URBAN)",
      "lat": 17.4761785,
      "lon": 78.3582269
    },
    {
      "Street": "HUZURABAD",
      "City": "KARIMNAGAR",
      "lat": 18.2018461,
      "lon": 79.3956971
    },
    {
      "Street": "MUMBAI",
      "City": "MUMBAI",
      "lat": 19.0815772,
      "lon": 72.8866275
    },
    {
      "Street": "CHEGUNTA",
      "City": "MEDAK",
      "lat": 17.9709103,
      "lon": 78.4631576
    },
    {
      "Street": "KHAMMAM URBAN",
      "City": "KHAMMAM",
      "lat": 17.2465351,
      "lon": 80.1500326
    },
    {
      "Street": "LINGSUGUR",
      "City": "RAICHUR",
      "lat": 16.1563,
      "lon": 76.5242
    },
    {
      "Street": "MANGALAGIRI",
      "City": "GUNTUR",
      "lat": 16.4318209,
      "lon": 80.5688069
    },
    {
      "Street": "SECUNDERABAD",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "UPPAL",
      "City": "RANGA REDDY",
      "lat": 17.347072,
      "lon": 78.5496742
    },
    {
      "Street": "MUDDANUR",
      "City": "KADAPA",
      "lat": 14.6916641,
      "lon": 78.3919622
    },
    {
      "Street": "DURG",
      "City": "DURG",
      "lat": 21.1896499,
      "lon": 81.2851077
    },
    {
      "Street": "PRODDATUR",
      "City": "KADAPA",
      "lat": 14.7417612,
      "lon": 78.5510642
    },
    {
      "Street": "BOINPALLE",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.5118985,
      "lon": 78.9385659
    },
    {
      "Street": "CHINNAKODUR",
      "City": "SIDDIPET",
      "lat": 18.1613649,
      "lon": 78.8994489
    },
    {
      "Street": "HANAMKONDA",
      "City": "WARANGAL",
      "lat": 18.008389,
      "lon": 79.5811916
    },
    {
      "Street": "WARANGAL",
      "City": "WARANGAL (RURAL)",
      "lat": 17.98459,
      "lon": 79.59942
    },
    {
      "Street": "KARUR",
      "City": "KARUR",
      "lat": 10.9596041,
      "lon": 78.0807797
    },
    {
      "Street": "SAIDAPUR",
      "City": "KARIMNAGAR",
      "lat": 18.216511,
      "lon": 79.2967414
    },
    {
      "Street": "HAYATHNAGAR",
      "City": "RANGA REDDY",
      "lat": 17.3281147,
      "lon": 78.6045399
    },
    {
      "Street": "GAMPALAGUDEM",
      "City": "KRISHNA",
      "lat": 16.9997437,
      "lon": 80.5233832
    },
    {
      "Street": "MAYURBHANJ",
      "City": "MAYURBHANJ",
      "lat": 21.75,
      "lon": 86.5
    },
    {
      "Street": "GAJWEL",
      "City": "SIDDIPET",
      "lat": 17.8456745,
      "lon": 78.6828741
    },
    {
      "Street": "DELHI CANTT",
      "City": "SOUTH WEST DELHI",
      "lat": 28.5806,
      "lon": 77.0672
    },
    {
      "Street": "WARANGAL",
      "City": "WARANGAL",
      "lat": 17.9820644,
      "lon": 79.5970954
    },
    {
      "Street": "WARGAL",
      "City": "SIDDIPET",
      "lat": 17.7748024,
      "lon": 78.6165655
    },
    {
      "Street": "SULTANABAD",
      "City": "PEDDAPALLI",
      "lat": 18.5279573,
      "lon": 79.3192023
    },
    {
      "Street": "NIRMAL",
      "City": "ADILABAD",
      "lat": 19.1001646,
      "lon": 78.3352192
    },
    {
      "Street": "SAROORNAGAR",
      "City": "RANGA REDDY",
      "lat": 17.3585595,
      "lon": 78.5546103
    },
    {
      "Street": "TANUR",
      "City": "NIRMAL",
      "lat": 19.0084222,
      "lon": 77.84233
    },
    {
      "Street": "NAGARKURNOOL",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "JINNARAM",
      "City": "SANGAREDDY",
      "lat": 17.632223,
      "lon": 78.3322406
    },
    {
      "Street": "BANGALORE",
      "City": "BANGALORE",
      "lat": 12.9767936,
      "lon": 77.590082
    },
    {
      "Street": "ELLANTHAKUNTA",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.3082095,
      "lon": 78.9531706
    },
    {
      "Street": "BAHADURPURA",
      "City": "HYDERABAD",
      "lat": 17.3570672,
      "lon": 78.4545419
    },
    {
      "Street": "THIRUVANANTHAPURAM",
      "City": "THIRUVANANTHAPURAM",
      "lat": 8.4882267,
      "lon": 76.947551
    },
    {
      "Street": "ASPARI",
      "City": "KURNOOL",
      "lat": 15.5250543,
      "lon": 77.3961388
    },
    {
      "Street": "NARSAMPET",
      "City": "WARANGAL (RURAL)",
      "lat": 17.9307513,
      "lon": 79.8923272
    },
    {
      "Street": "CHENNUR",
      "City": "KADAPA",
      "lat": 14.5155762,
      "lon": 78.7637969
    },
    {
      "Street": "HUSNABAD",
      "City": "SIDDIPET",
      "lat": 18.1266495,
      "lon": 79.2111468
    },
    {
      "Street": "JADCHERLA",
      "City": "MAHABUBNAGAR",
      "lat": 16.7699159,
      "lon": 78.1377227
    },
    {
      "Street": "BANSWADA",
      "City": "KAMAREDDY",
      "lat": 18.3821084,
      "lon": 77.8763494
    },
    {
      "Street": "AMEENPUR",
      "City": "SANGAREDDY",
      "lat": 17.5435893,
      "lon": 78.3076646
    },
    {
      "Street": "ANANTHAPUR",
      "City": "ANANTAPUR",
      "lat": 14.5404644,
      "lon": 77.6620826
    },
    {
      "Street": "DUBBAK",
      "City": "SIDDIPET",
      "lat": 18.1737336,
      "lon": 78.6657035
    },
    {
      "Street": "DHANBAD",
      "City": "DHANBAD",
      "lat": 23.7952809,
      "lon": 86.4309638
    },
    {
      "Street": "SADAR",
      "City": "SAMBALPUR",
      "lat": 21.4600983,
      "lon": 84.0854846
    },
    {
      "Street": "VEENAVANKA",
      "City": "KARIMNAGAR",
      "lat": 18.260733,
      "lon": 79.3404716
    },
    {
      "Street": "KURAVI",
      "City": "MAHABUBABAD",
      "lat": 17.5250148,
      "lon": 80.0011003
    },
    {
      "Street": "MACHAREDDY",
      "City": "KAMAREDDY",
      "lat": 18.3315154,
      "lon": 78.4967687
    },
    {
      "Street": "SECH BHAWAN",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.5750899,
      "lon": 88.4337664
    },
    {
      "Street": "SATTENAPALLE",
      "City": "GUNTUR",
      "lat": 16.3774638,
      "lon": 80.2090461
    },
    {
      "Street": "KAMAREDDY",
      "City": "NIZAMABAD",
      "lat": 18.3226987,
      "lon": 78.3377444
    },
    {
      "Street": "ASIF NAGAR",
      "City": "HYDERABAD",
      "lat": 17.3857483,
      "lon": 78.4505083
    },
    {
      "Street": "MUPKAL",
      "City": "NIZAMABAD",
      "lat": 18.9128779,
      "lon": 78.3582835
    },
    {
      "Street": "DURGAPUR",
      "City": "BARDHAMAN",
      "lat": 23.5350475,
      "lon": 87.3380425
    },
    {
      "Street": "LINGAMPET",
      "City": "KAMAREDDY",
      "lat": 18.2396917,
      "lon": 78.1299316
    },
    {
      "Street": "BANGALORE SOUTH",
      "City": "BANGALORE",
      "lat": 12.97194,
      "lon": 77.59369
    },
    {
      "Street": "DINDIGUL",
      "City": "DINDIGUL",
      "lat": 10.365646,
      "lon": 77.9693256
    },
    {
      "Street": "KOTHACHERUVU",
      "City": "ANANTAPUR",
      "lat": 14.181384,
      "lon": 77.769456
    },
    {
      "Street": "YELDURTHY",
      "City": "MEDAK",
      "lat": 17.905244,
      "lon": 78.3719961
    },
    {
      "Street": "CHAPAD",
      "City": "KADAPA",
      "lat": 14.7098117,
      "lon": 78.6616649
    },
    {
      "Street": "ROURKELA",
      "City": "SUNDERGARH",
      "lat": 22.2642489,
      "lon": 84.8650718
    },
    {
      "Street": "BHIMAVARAM",
      "City": "WEST GODAVARI",
      "lat": 16.5427689,
      "lon": 81.527344
    },
    {
      "Street": "GOLLAPALLE",
      "City": "JAGTIAL",
      "lat": 18.79473,
      "lon": 78.91661
    },
    {
      "Street": "KAZIPET",
      "City": "WARANGAL (URBAN)",
      "lat": 17.96409,
      "lon": 79.47978
    },
    {
      "Street": "VELACHERI",
      "City": "CHENNAI",
      "lat": 13.08784,
      "lon": 80.27847
    },
    {
      "Street": "THYGARAYA NAGAR",
      "City": "CHENNAI",
      "lat": 13.08784,
      "lon": 80.27847
    },
    {
      "Street": "GWALIOR CITY",
      "City": "GWALIOR",
      "lat": 26.2232301,
      "lon": 78.1525375
    },
    {
      "Street": "BRAHMAPUR SADAR",
      "City": "GANJAM",
      "lat": 19.5,
      "lon": 84.5
    },
    {
      "Street": "BACHUPALLY",
      "City": "MEDCHAL",
      "lat": 17.5410548,
      "lon": 78.3635484
    },
    {
      "Street": "ANKAPALLE",
      "City": "VISAKHAPATNAM",
      "lat": 17.68009,
      "lon": 83.20161
    },
    {
      "Street": "JAMMIKUNTA",
      "City": "KARIMNAGAR",
      "lat": 18.2897332,
      "lon": 79.4739441
    },
    {
      "Street": "FAROOQNAGAR",
      "City": "RANGA REDDY",
      "lat": 17.0791536,
      "lon": 78.2039881
    },
    {
      "Street": "GURGAON",
      "City": "GURGAON",
      "lat": 28.4891009,
      "lon": 77.0111934
    },
    {
      "Street": "PEDAPALLI",
      "City": "PEDDAPALLI",
      "lat": 18.61357,
      "lon": 79.37442
    },
    {
      "Street": "MIRDODDI",
      "City": "SIDDIPET",
      "lat": 18.0789173,
      "lon": 78.6774945
    },
    {
      "Street": "PUTTAPARTHI",
      "City": "ANANTAPUR",
      "lat": 14.1652,
      "lon": 77.8117
    },
    {
      "Street": "NIDAMARRU",
      "City": "WEST GODAVARI",
      "lat": 17,
      "lon": 81.16667
    },
    {
      "Street": "ASANSOL",
      "City": "BARDHAMAN",
      "lat": 23.6871297,
      "lon": 86.9746587
    },
    {
      "Street": "TIRUPATI",
      "City": "CHITTOOR",
      "lat": 13.3181801,
      "lon": 79.5925947
    },
    {
      "Street": "TOOPRAN",
      "City": "MEDAK",
      "lat": 17.8332346,
      "lon": 78.4782458
    },
    {
      "Street": "SONPETH",
      "City": "PARBHANI",
      "lat": 18.9800057,
      "lon": 76.572859
    },
    {
      "Street": "RAYACHOTI",
      "City": "KADAPA",
      "lat": 14.0579396,
      "lon": 78.7477719
    },
    {
      "Street": "NARAYANKHED",
      "City": "MEDAK",
      "lat": 18.0562064,
      "lon": 77.8762622
    },
    {
      "Street": "LOKESWARAM",
      "City": "NIRMAL",
      "lat": 19.09685,
      "lon": 78.34407
    },
    {
      "Street": "SERILINGAMPALLE",
      "City": "RANGA REDDY",
      "lat": 17.4653297,
      "lon": 78.3437434
    },
    {
      "Street": "CHINTHAPALLY",
      "City": "NALGONDA",
      "lat": 16.8009155,
      "lon": 78.8203275
    },
    {
      "Street": "JANGOAN",
      "City": "JANGAON",
      "lat": 17.7243771,
      "lon": 79.1570824
    },
    {
      "Street": "JHARASANGAM",
      "City": "SANGAREDDY",
      "lat": 17.763648,
      "lon": 77.7135994
    },
    {
      "Street": "BHARMAR",
      "City": "KANGRA",
      "lat": 32.1680036,
      "lon": 75.954705
    },
    {
      "Street": "SAIDABAD",
      "City": "HYDERABAD",
      "lat": 17.359533,
      "lon": 78.5147979
    },
    {
      "Street": "SANGEM",
      "City": "WARANGAL (RURAL)",
      "lat": 17.8901006,
      "lon": 79.7090064
    },
    {
      "Street": "JAKRANPALLE",
      "City": "NIZAMABAD",
      "lat": 18.67154,
      "lon": 78.0988
    },
    {
      "Street": "CHIGURUMAMIDI",
      "City": "KARIMNAGAR",
      "lat": 18.2369125,
      "lon": 79.1969847
    },
    {
      "Street": "NOIDA",
      "City": "GAUTAM BUDDHA NAGAR",
      "lat": 28.5706333,
      "lon": 77.3272147
    },
    {
      "Street": "JANGAON",
      "City": "JANGAON",
      "lat": 17.7243771,
      "lon": 79.1570824
    },
    {
      "Street": "YAVATMAL",
      "City": "YAVATMAL",
      "lat": 20.390344,
      "lon": 78.1328518
    },
    {
      "Street": "VELDURTHI",
      "City": "KURNOOL",
      "lat": 15.5306439,
      "lon": 77.9650071
    },
    {
      "Street": "HINGOLI",
      "City": "HINGOLI",
      "lat": 19.8035118,
      "lon": 77.1792598
    },
    {
      "Street": "PARKAL",
      "City": "WARANGAL (RURAL)",
      "lat": 18.1863383,
      "lon": 79.7068435
    },
    {
      "Street": "KOVVUR",
      "City": "WEST GODAVARI",
      "lat": 17.0162,
      "lon": 81.72934
    },
    {
      "Street": "BALAPUR",
      "City": "RANGA REDDY",
      "lat": 17.3096061,
      "lon": 78.4999427
    },
    {
      "Street": "CHIMAKURTHI",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "TIRUMALAGIRI",
      "City": "HYDERABAD",
      "lat": 17.4746717,
      "lon": 78.5069513
    },
    {
      "Street": "CHIRALA",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "HUZURNAGAR",
      "City": "SURYAPET",
      "lat": 16.9003733,
      "lon": 79.8745838
    },
    {
      "Street": "HOMNABAD",
      "City": "BIDAR",
      "lat": 17.77074,
      "lon": 77.12519
    },
    {
      "Street": "GANDIPET",
      "City": "RANGA REDDY",
      "lat": 17.3746754,
      "lon": 78.2997185
    },
    {
      "Street": "YERRAGUNTLA",
      "City": "KADAPA",
      "lat": 14.643735,
      "lon": 78.5358327
    },
    {
      "Street": "GUNTAKAL",
      "City": "ANANTAPUR",
      "lat": 15.163811,
      "lon": 77.3761354
    },
    {
      "Street": "SATARA",
      "City": "SATARA",
      "lat": 17.688321,
      "lon": 74.0041726
    },
    {
      "Street": "KHAIRATABAD",
      "City": "HYDERABAD",
      "lat": 17.4129744,
      "lon": 78.4610582
    },
    {
      "Street": "ASIFABAD",
      "City": "KOMARAM BHEEM ASIFABAD",
      "lat": 19.3593461,
      "lon": 79.2960404
    },
    {
      "Street": "MOGALTHUR",
      "City": "WEST GODAVARI",
      "lat": 16.3987325,
      "lon": 81.5715202
    },
    {
      "Street": "SUNDARGARH",
      "City": "SUNDERGARH",
      "lat": 22.1226562,
      "lon": 84.0368319
    },
    {
      "Street": "MARIPEDA",
      "City": "MAHABUBABAD",
      "lat": 17.3794533,
      "lon": 79.8724723
    },
    {
      "Street": "RAMAREDDY",
      "City": "KAMAREDDY",
      "lat": 18.4100957,
      "lon": 78.3663685
    },
    {
      "Street": "IEEJA",
      "City": "JOGULAMBA GADWAL",
      "lat": 16.013753,
      "lon": 77.67574
    },
    {
      "Street": "NARKETPALLE",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "PATANCHERUVU",
      "City": "SANGAREDDY",
      "lat": 17.5457884,
      "lon": 78.2222266
    },
    {
      "Street": "PALAKURTHY",
      "City": "PEDDAPALLI",
      "lat": 18.7183083,
      "lon": 79.3816841
    },
    {
      "Street": "HUMNABAD",
      "City": "BIDAR",
      "lat": 17.7332412,
      "lon": 77.2178892
    },
    {
      "Street": "RANCHI",
      "City": "RANCHI",
      "lat": 23.3700501,
      "lon": 85.3250387
    },
    {
      "Street": "BANTARAM",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "INDORE CITY-2",
      "City": "INDORE",
      "lat": 22.7395765,
      "lon": 75.8810107
    },
    {
      "Street": "DUVVUR",
      "City": "KADAPA",
      "lat": 14.8370076,
      "lon": 78.6583457
    },
    {
      "Street": "PAMUR",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PODILI",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BARAKAR",
      "City": "BARDHAMAN",
      "lat": 23.9474358,
      "lon": 86.6251124
    },
    {
      "Street": "RAIKODE",
      "City": "MEDAK",
      "lat": 17.83835,
      "lon": 77.74655
    },
    {
      "Street": "DARSI",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "POLAVARAM",
      "City": "WEST GODAVARI",
      "lat": 16.4502707,
      "lon": 81.7579318
    },
    {
      "Street": "BHUPALPALLE",
      "City": "JAYASHANKAR BHUPALPALLY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MUGPAL",
      "City": "NIZAMABAD",
      "lat": 18.6173972,
      "lon": 78.118049
    },
    {
      "Street": "PEDDAPALLE",
      "City": "PEDDAPALLI",
      "lat": 18.61357,
      "lon": 79.37442
    },
    {
      "Street": "PEDDAPALLY",
      "City": "PEDDAPALLI",
      "lat": 18.6183107,
      "lon": 79.374479
    },
    {
      "Street": "PENUMANTRA",
      "City": "WEST GODAVARI",
      "lat": 16.641085,
      "lon": 81.6555566
    },
    {
      "Street": "ASIF NAGAR     ",
      "City": "HYDERABAD",
      "lat": 17.3857483,
      "lon": 78.4505083
    },
    {
      "Street": "BICCAVOLU",
      "City": "EAST GODAVARI",
      "lat": 16.9514267,
      "lon": 82.0238963
    },
    {
      "Street": "KOTHAPALLE",
      "City": "KARIMNAGAR",
      "lat": 18.2604359,
      "lon": 78.5853878
    },
    {
      "Street": "TADIPATRI",
      "City": "ANANTAPUR",
      "lat": 14.9069559,
      "lon": 78.0097071
    },
    {
      "Street": "NILANGA",
      "City": "LATUR",
      "lat": 18.0834186,
      "lon": 76.7998827
    },
    {
      "Street": "DORNAKAL",
      "City": "MAHABUBABAD",
      "lat": 17.4419208,
      "lon": 80.1516156
    },
    {
      "Street": "PEDDAMANDADDI",
      "City": "WANAPARTHY",
      "lat": 16.4452279,
      "lon": 78.0232042
    },
    {
      "Street": "ATMAKUR",
      "City": "WARANGAL (RURAL)",
      "lat": 18.0758014,
      "lon": 79.7402233
    },
    {
      "Street": "CHILAKALURIPET",
      "City": "GUNTUR",
      "lat": 16.2903377,
      "lon": 80.4239303
    },
    {
      "Street": "JULAPALLE",
      "City": "PEDDAPALLI",
      "lat": 18.61357,
      "lon": 79.37442
    },
    {
      "Street": "BEJJUR",
      "City": "KOMARAM BHEEM ASIFABAD",
      "lat": 19.3479342,
      "lon": 79.8653269
    },
    {
      "Street": "DIMA HASAO",
      "City": "DIMA HASAO",
      "lat": 25.5,
      "lon": 93
    },
    {
      "Street": "CHANDARLAPADU",
      "City": "KRISHNA",
      "lat": 16.6931042,
      "lon": 80.2047689
    },
    {
      "Street": "KOLLAPUR",
      "City": "NAGARKURNOOL",
      "lat": 16.1061268,
      "lon": 78.3194833
    },
    {
      "Street": "DUMA",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.71,
      "lon": 88.7108
    },
    {
      "Street": "BHADRACHALAM",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.6688019,
      "lon": 80.8940083
    },
    {
      "Street": "PAKALA",
      "City": "CHITTOOR",
      "lat": 13.45268,
      "lon": 79.1193927
    },
    {
      "Street": "TANDUR",
      "City": "VIKARABAD",
      "lat": 17.2509364,
      "lon": 77.5841263
    },
    {
      "Street": "DAMERA",
      "City": "WARANGAL (RURAL)",
      "lat": 18.0546163,
      "lon": 79.6354222
    },
    {
      "Street": "NIZAMABAD RURAL",
      "City": "NIZAMABAD",
      "lat": 18.675926,
      "lon": 78.1400123
    },
    {
      "Street": "MULUGU",
      "City": "WARANGAL",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "NAGARI",
      "City": "CHITTOOR",
      "lat": 13.3208103,
      "lon": 79.585197
    },
    {
      "Street": "CHINTAKANI",
      "City": "KHAMMAM",
      "lat": 17.1239112,
      "lon": 80.2031146
    },
    {
      "Street": "BUKKAPATNAM",
      "City": "ANANTAPUR",
      "lat": 14.196404,
      "lon": 77.799498
    },
    {
      "Street": "INKOLLU",
      "City": "PRAKASHAM",
      "lat": 15.8283452,
      "lon": 80.1943964
    },
    {
      "Street": "BHOJPURA",
      "City": "JAIPUR",
      "lat": 27.0184739,
      "lon": 75.3894925
    },
    {
      "Street": "TADIMARRI",
      "City": "ANANTAPUR",
      "lat": 14.5589149,
      "lon": 77.8580308
    },
    {
      "Street": "RAMACHANDRAPURAM",
      "City": "SANGAREDDY",
      "lat": 17.5119496,
      "lon": 78.2759356
    },
    {
      "Street": "ARMUR",
      "City": "NIZAMABAD",
      "lat": 18.7808166,
      "lon": 78.3111997
    },
    {
      "Street": "MARKOOK",
      "City": "SIDDIPET",
      "lat": 17.753387,
      "lon": 78.7201309
    },
    {
      "Street": "RAMAGUNDAM",
      "City": "KARIMNAGAR",
      "lat": 18.7692028,
      "lon": 79.4742393
    },
    {
      "Street": "AMBALA CITY",
      "City": "AMBALA",
      "lat": 30.3780749,
      "lon": 76.7646449
    },
    {
      "Street": "GANNAVARAM",
      "City": "KRISHNA",
      "lat": 16.5561295,
      "lon": 80.7961511
    },
    {
      "Street": "DHARMARAM",
      "City": "KARIMNAGAR",
      "lat": 18.305898,
      "lon": 79.4896084
    },
    {
      "Street": "CHITYAL",
      "City": "NALGONDA",
      "lat": 17.2314588,
      "lon": 79.1293471
    },
    {
      "Street": "NARAYANKHED",
      "City": "SANGAREDDY",
      "lat": 18.0347921,
      "lon": 77.7772967
    },
    {
      "Street": "ABDULLAPURMET",
      "City": "RANGA REDDY",
      "lat": 17.3209561,
      "lon": 78.6929681
    },
    {
      "Street": "MATTAMPALLI",
      "City": "SURYAPET",
      "lat": 16.7512497,
      "lon": 79.8632253
    },
    {
      "Street": "KAMEPALLY",
      "City": "KHAMMAM",
      "lat": 17.4503034,
      "lon": 80.2833428
    },
    {
      "Street": "VELPUR",
      "City": "NIZAMABAD",
      "lat": 18.7651179,
      "lon": 78.3932958
    },
    {
      "Street": "POCHAMPALLE",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "NADIGUDEM",
      "City": "SURYAPET",
      "lat": 17.0891019,
      "lon": 79.8677387
    },
    {
      "Street": "SHADNAGAR",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BIBINAGAR",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.4747737,
      "lon": 78.7963608
    },
    {
      "Street": "MOTHKUR",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.4278329,
      "lon": 79.2642694
    },
    {
      "Street": "CHOUTUPPAL",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "PODURU",
      "City": "WEST GODAVARI",
      "lat": 16.568745,
      "lon": 81.7403731
    },
    {
      "Street": "CHOUTUPPAL",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.2526027,
      "lon": 78.8964038
    },
    {
      "Street": "RAIPARTHY",
      "City": "WARANGAL (RURAL)",
      "lat": 17.7049309,
      "lon": 79.6065803
    },
    {
      "Street": "MOINABAD",
      "City": "RANGA REDDY",
      "lat": 17.3271524,
      "lon": 78.2737052
    },
    {
      "Street": "MADUGULAPALLY",
      "City": "NALGONDA",
      "lat": 16.972741,
      "lon": 79.4596481
    },
    {
      "Street": "ACHAMPET",
      "City": "NAGARKURNOOL",
      "lat": 16.3999846,
      "lon": 78.6379866
    },
    {
      "Street": "GUDUR",
      "City": "MAHABUBABAD",
      "lat": 17.7988349,
      "lon": 79.9788493
    },
    {
      "Street": "RAJENDRANAGR",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "DEVARAKONDA",
      "City": "NALGONDA",
      "lat": 16.6931795,
      "lon": 78.9147252
    },
    {
      "Street": "PEDA ADISHARLA PALLI",
      "City": "NALGONDA",
      "lat": 16.6852406,
      "lon": 79.0675521
    },
    {
      "Street": "ACHAMPET",
      "City": "GUNTUR",
      "lat": 16.6312811,
      "lon": 80.1209666
    },
    {
      "Street": "CHARMINAR",
      "City": "HYDERABAD",
      "lat": 17.3616024,
      "lon": 78.4746421
    },
    {
      "Street": "GADWAL",
      "City": "JOGULAMBA GADWAL",
      "lat": 16.2347032,
      "lon": 77.7946371
    },
    {
      "Street": "THIMMAJIPET",
      "City": "NAGARKURNOOL",
      "lat": 16.6675633,
      "lon": 78.1903855
    },
    {
      "Street": "CHANDRAPUR",
      "City": "CHANDRAPUR",
      "lat": 19.9508161,
      "lon": 79.2986673
    },
    {
      "Street": "BALKONDA",
      "City": "NIZAMABAD",
      "lat": 18.8727247,
      "lon": 78.3357967
    },
    {
      "Street": "JANAKAVARAMPANGULURU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "CHEVELA",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BALLIKURUVA",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "KROSURU",
      "City": "GUNTUR",
      "lat": 16.542404,
      "lon": 80.138509
    },
    {
      "Street": "BAPATLA",
      "City": "GUNTUR",
      "lat": 16.0676587,
      "lon": 80.3466607
    },
    {
      "Street": "RAIGAD",
      "City": "RAIGAD",
      "lat": 18.2369566,
      "lon": 73.4471601
    },
    {
      "Street": "SHAHDOL",
      "City": "SHAHDOL",
      "lat": 23.2859237,
      "lon": 81.3648409
    },
    {
      "Street": "BAREILLY",
      "City": "BAREILLY",
      "lat": 28.4582344,
      "lon": 79.4047452
    },
    {
      "Street": "NUTHANKAL",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "KHORDHA",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.1643884,
      "lon": 85.6135673
    },
    {
      "Street": "KORUKONDA",
      "City": "EAST GODAVARI",
      "lat": 17.1582031,
      "lon": 81.8340624
    },
    {
      "Street": "CHERUKUPALLE",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "PATANCHERU",
      "City": "MEDAK",
      "lat": 17.53334,
      "lon": 78.2645
    },
    {
      "Street": "NILGIRIS",
      "City": "NILGIRIS",
      "lat": 11.4234973,
      "lon": 76.8660258
    },
    {
      "Street": "VIDAPANAKAL",
      "City": "ANANTAPUR",
      "lat": 15.0412389,
      "lon": 77.1778523
    },
    {
      "Street": "KONDAPI",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BILASPUR",
      "City": "BILASPUR",
      "lat": 21.9893403,
      "lon": 82.109965
    },
    {
      "Street": "VARNI",
      "City": "NIZAMABAD",
      "lat": 18.53257,
      "lon": 77.8958328
    },
    {
      "Street": "BHOPAL.",
      "City": "BHOPAL",
      "lat": 23.2584857,
      "lon": 77.401989
    },
    {
      "Street": "RAYAGADA",
      "City": "RAYAGADA",
      "lat": 19.1753646,
      "lon": 83.41068
    },
    {
      "Street": "MUNCHINGI PUTTU",
      "City": "VISAKHAPATNAM",
      "lat": 17.68009,
      "lon": 83.20161
    },
    {
      "Street": "BARH",
      "City": "PATNA",
      "lat": 25.4509766,
      "lon": 85.7002486
    },
    {
      "Street": "ANTHASAGARAM",
      "City": "NELLORE",
      "lat": 14.08333,
      "lon": 79.58333
    },
    {
      "Street": "BHARUCH",
      "City": "BHARUCH",
      "lat": 21.7080427,
      "lon": 72.9956936
    },
    {
      "Street": "BANDLAGUDA",
      "City": "HYDERABAD",
      "lat": 17.3714879,
      "lon": 78.5727265
    },
    {
      "Street": "MALKAJGIRRI",
      "City": "MEDCHAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MARKAPUR",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "DUM DUM PARK",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.603428,
      "lon": 88.4230377
    },
    {
      "Street": "HITECH CITY",
      "City": "HYDERABAD",
      "lat": 17.4698143,
      "lon": 78.3853779
    },
    {
      "Street": "TADEPALLIGUDEM",
      "City": "WEST GODAVARI",
      "lat": 16.8102437,
      "lon": 81.526592
    },
    {
      "Street": "DEHRADUN CITY",
      "City": "DEHRADUN",
      "lat": 30.32295,
      "lon": 78.03168
    },
    {
      "Street": "BALANAGAR",
      "City": "MAHABUBNAGAR",
      "lat": 16.9496097,
      "lon": 78.1835173
    },
    {
      "Street": "KALLA",
      "City": "WEST GODAVARI",
      "lat": 16.4969229,
      "lon": 81.42384
    },
    {
      "Street": "TANDUR",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "AMALAPURAM",
      "City": "EAST GODAVARI",
      "lat": 16.5875812,
      "lon": 82.0085853
    },
    {
      "Street": "KALWAKURTHY",
      "City": "NAGARKURNOOL",
      "lat": 16.6721316,
      "lon": 78.4880729
    },
    {
      "Street": "HYDERABAD",
      "City": "RANGA REDDY",
      "lat": 17.299985,
      "lon": 78.4434738
    },
    {
      "Street": "CHIKMAGALUR",
      "City": "CHICKMAGALUR",
      "lat": 13.32231,
      "lon": 75.774
    },
    {
      "Street": "PERUR",
      "City": "CHITTOOR",
      "lat": 13.41667,
      "lon": 79
    },
    {
      "Street": "KESHAMPET",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "VAISHALI",
      "City": "VAISHALI",
      "lat": 28.6496701,
      "lon": 77.339575
    },
    {
      "Street": "KUNTIGHAT",
      "City": "HOWRAH",
      "lat": 22.57688,
      "lon": 88.31857
    },
    {
      "Street": "SUNDARGARH",
      "City": "SUNDARGARH",
      "lat": 22.25,
      "lon": 84.5
    },
    {
      "Street": "KOLLAM",
      "City": "KOLLAM",
      "lat": 8.8879509,
      "lon": 76.5955013
    },
    {
      "Street": "THOOTHUKUDI",
      "City": "THOOTHUKUDI",
      "lat": 8.8052602,
      "lon": 78.1452745
    },
    {
      "Street": "RAMANNAPETA",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.2872144,
      "lon": 79.091519
    },
    {
      "Street": "ATMAKUR (S);",
      "City": "SURYAPET",
      "lat": 17.2515761,
      "lon": 79.7006764
    },
    {
      "Street": "KENDRAPARA",
      "City": "KENDRAPARA",
      "lat": 20.5042089,
      "lon": 86.4159937
    },
    {
      "Street": "AREPALLE",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "PALAKURTHY",
      "City": "JANGAON",
      "lat": 17.6590725,
      "lon": 79.4370417
    },
    {
      "Street": "VEDDEMANU",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "NIMGAON KORHALE",
      "City": "AHMAD NAGAR",
      "lat": 31.35983,
      "lon": 73.09577
    },
    {
      "Street": "MADGUL",
      "City": "RANGA REDDY",
      "lat": 16.8505235,
      "lon": 78.6889185
    },
    {
      "Street": "DELHI",
      "City": "WEST DELHI",
      "lat": 28.6545456,
      "lon": 77.0810555
    },
    {
      "Street": "KANDLAKOYA",
      "City": "MEDCHAL",
      "lat": 17.5916202,
      "lon": 78.4928378
    },
    {
      "Street": "ITIKYALA",
      "City": "JOGULAMBA GADWAL",
      "lat": 16.086063,
      "lon": 77.8548074
    },
    {
      "Street": "YELLAREDDY GUDA",
      "City": "MEDCHAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "KODAKANDLA",
      "City": "WARANGAL (URBAN)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "BHADRAK",
      "City": "BHADRAK",
      "lat": 21.0633288,
      "lon": 86.5053731
    },
    {
      "Street": "WEST BENGAL",
      "City": "JALPALGURI",
      "lat": null,
      "lon": null
    },
    {
      "Street": "JANGAREDDYGUDEM",
      "City": "WEST GODAVARI",
      "lat": 17,
      "lon": 81.16667
    },
    {
      "Street": "JARKAND",
      "City": "DHANBAD",
      "lat": 23.7952809,
      "lon": 86.4309638
    },
    {
      "Street": "NARAYANAPURAM",
      "City": "ANANTAPUR",
      "lat": 14.5011876,
      "lon": 77.1416481
    },
    {
      "Street": "KRISHNAPURAM",
      "City": "ANANTAPUR",
      "lat": 14.5020719,
      "lon": 77.6101778
    },
    {
      "Street": "DHARMARAM",
      "City": "PEDDAPALLI",
      "lat": 18.7342119,
      "lon": 79.1913983
    },
    {
      "Street": "MUNAGALA",
      "City": "SURYAPET",
      "lat": 17.0514347,
      "lon": 79.8356585
    },
    {
      "Street": "SURGUJA",
      "City": "SURGUJA",
      "lat": 23.1211958,
      "lon": 83.1923497
    },
    {
      "Street": "VENKATAPURAM",
      "City": "MULUGU",
      "lat": 18.3043854,
      "lon": 80.5489974
    },
    {
      "Street": "JAIPUR CITY",
      "City": "JAIPUR",
      "lat": 26.9154576,
      "lon": 75.8189817
    },
    {
      "Street": "CHOWDERGUDEM",
      "City": "RANGA REDDY",
      "lat": 17.0641728,
      "lon": 77.9697913
    },
    {
      "Street": "KOMAGUDEM",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.55106,
      "lon": 80.61779
    },
    {
      "Street": "WEST BENGAL",
      "City": "HOOGHLY",
      "lat": 22.9099402,
      "lon": 88.0120825
    },
    {
      "Street": "MALKAPUR",
      "City": "MAHABUBNAGAR",
      "lat": 16.9438471,
      "lon": 78.0013969
    },
    {
      "Street": "JAIPUR",
      "City": "JAIPUR",
      "lat": 26.9154576,
      "lon": 75.8189817
    },
    {
      "Street": "NUTHANKAL",
      "City": "MEDCHAL",
      "lat": 17.6816378,
      "lon": 78.4420006
    },
    {
      "Street": "KESHAMPET",
      "City": "RANGA REDDY",
      "lat": 16.9165158,
      "lon": 78.3539478
    },
    {
      "Street": "NARAYANAPUR",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.1606458,
      "lon": 78.8847744
    },
    {
      "Street": "BOLPUR",
      "City": "BIRBHUM",
      "lat": 23.661154,
      "lon": 87.6962424
    },
    {
      "Street": "KASHIBUGGA",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "CHEVELLA",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "JABALPUR",
      "City": "JABALPUR",
      "lat": 23.1701522,
      "lon": 79.9324505
    },
    {
      "Street": "ORISSA",
      "City": "CUTTACK",
      "lat": 20.4686,
      "lon": 85.8792
    },
    {
      "Street": "BHATPARA",
      "City": "BHATPARA",
      "lat": 22.8672074,
      "lon": 88.4016363
    },
    {
      "Street": "INDORE",
      "City": "INDORE",
      "lat": 22.7203616,
      "lon": 75.8681996
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "GHAZIABAD",
      "lat": 28.7678881,
      "lon": 77.4606672
    },
    {
      "Street": "MUNPALLE",
      "City": "SANGAREDDY",
      "lat": 17.6896995,
      "lon": 77.8735773
    },
    {
      "Street": "GOA UNIVERSITY",
      "City": "NORTH GOA",
      "lat": 15.4552727,
      "lon": 73.8377502
    },
    {
      "Street": "LINGAMPET",
      "City": "RAJANNA SIRCILLA",
      "lat": null,
      "lon": null
    },
    {
      "Street": "JAGATSINGHAPUR",
      "City": "JAGATSINGHAPUR",
      "lat": 20.2719296,
      "lon": 86.1599013
    },
    {
      "Street": "SIRIVELLA",
      "City": "KURNOOL",
      "lat": 15.58333,
      "lon": 78.33333
    },
    {
      "Street": "KOLLIPARA",
      "City": "GUNTUR",
      "lat": 16.2888174,
      "lon": 80.7501439
    },
    {
      "Street": "EAST MIDNAPORE",
      "City": "EAST MIDNAPORE",
      "lat": 22.42114,
      "lon": 87.32257
    },
    {
      "Street": "MARPALLE",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "RAJKOT",
      "City": "RAJKOT",
      "lat": 22.3053263,
      "lon": 70.8028377
    },
    {
      "Street": "CHHATTISGARH",
      "City": "BASTAR",
      "lat": 19.1191282,
      "lon": 81.8291865
    },
    {
      "Street": "GOVINDARAJULAGUTTA",
      "City": "WARANGAL (URBAN)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "NAGULUPPALAPADU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "REDDYGUDEM",
      "City": "KRISHNA",
      "lat": 16.66667,
      "lon": 81
    },
    {
      "Street": "KANDRIGA",
      "City": "CHITTOOR",
      "lat": 13.2773044,
      "lon": 79.0953629
    },
    {
      "Street": "BAGALKOT",
      "City": "BAGALKOT",
      "lat": 16.1860585,
      "lon": 75.7065484
    },
    {
      "Street": "MAHABUBABAD",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "SANTHANUTHLAPADU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "KINWAT",
      "City": "NANDED",
      "lat": 19.577469,
      "lon": 78.2440088
    },
    {
      "Street": "AINAVILLI",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "HASANPARTHY",
      "City": "WARANGAL (URBAN)",
      "lat": 18.0689971,
      "lon": 79.5252161
    },
    {
      "Street": "SANGLI",
      "City": "SANGLI",
      "lat": 16.8502534,
      "lon": 74.5948885
    },
    {
      "Street": "KESARA",
      "City": "RANGA REDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PEGADAPALLE",
      "City": "JAGTIAL",
      "lat": 18.79473,
      "lon": 78.91661
    },
    {
      "Street": "BHONGIR",
      "City": "YADADRI",
      "lat": 17.5172789,
      "lon": 78.8863383
    },
    {
      "Street": "BIJAPUR",
      "City": "BIJAPUR",
      "lat": 22.5861244,
      "lon": 77.0402065
    },
    {
      "Street": "ARMOOR",
      "City": "NIZAMABAD",
      "lat": 18.7904482,
      "lon": 78.2907202
    },
    {
      "Street": "MANGANJ",
      "City": "SUPAUL",
      "lat": 26.11503,
      "lon": 86.59527
    },
    {
      "Street": "SHANKARPALLE",
      "City": "RANGA REDDY",
      "lat": 17.4406443,
      "lon": 78.1438559
    },
    {
      "Street": "KALYANDURG",
      "City": "ANANTAPUR",
      "lat": 14.5517958,
      "lon": 77.1119702
    },
    {
      "Street": "BIDHAN NAGAR",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.5911381,
      "lon": 88.4073009
    },
    {
      "Street": "KASIPET",
      "City": "MANCHERIAL",
      "lat": 18.9565637,
      "lon": 79.1161534
    },
    {
      "Street": "MADHEPURA",
      "City": "MADHEPURA",
      "lat": 25.9259562,
      "lon": 86.8204296
    },
    {
      "Street": "BHONGIR",
      "City": "NALGONDA",
      "lat": 17.51544,
      "lon": 78.88563
    },
    {
      "Street": "PAMARRU",
      "City": "KRISHNA",
      "lat": 16.3226443,
      "lon": 80.9605914
    },
    {
      "Street": "LINGALA GHANPUR",
      "City": "WARANGAL (RURAL)",
      "lat": 17.85,
      "lon": 79.36667
    },
    {
      "Street": "CHILPUR",
      "City": "JANGOAN",
      "lat": null,
      "lon": null
    },
    {
      "Street": "NALLAJERLA",
      "City": "WEST GODAVARI",
      "lat": 16.912044,
      "lon": 81.4377673
    },
    {
      "Street": "BANGALORE NORTH",
      "City": "BANGALORE",
      "lat": 12.9767936,
      "lon": 77.590082
    },
    {
      "Street": "RAIPUR",
      "City": "RAIPUR",
      "lat": 21.2380912,
      "lon": 81.6336993
    },
    {
      "Street": "BELDANGA",
      "City": "MURSHIDABAD",
      "lat": 23.9378,
      "lon": 88.2449
    },
    {
      "Street": "WEST MAMBALAM",
      "City": "CHENNAI",
      "lat": 13.0428296,
      "lon": 80.2270184
    },
    {
      "Street": "METPALLY",
      "City": "JAGTIAL",
      "lat": 18.8492378,
      "lon": 78.6261549
    },
    {
      "Street": "ASWAPURAM",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.8354792,
      "lon": 80.8291196
    },
    {
      "Street": "ASWARAOPETA",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.3712945,
      "lon": 81.171894
    },
    {
      "Street": "TADWAI",
      "City": "KAMAREDDY",
      "lat": 18.312754,
      "lon": 78.2517378
    },
    {
      "Street": "RAIKAL",
      "City": "JAGTIAL",
      "lat": 18.9047907,
      "lon": 78.8080213
    },
    {
      "Street": "CHUNCHUPALLY",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.5231938,
      "lon": 80.6051016
    },
    {
      "Street": "SHAYAMPET",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "KOLKATTA.",
      "City": "KOLKATA",
      "lat": 22.56263,
      "lon": 88.36304
    },
    {
      "Street": "DOULTHABAD",
      "City": "VIKARABAD",
      "lat": 16.9858375,
      "lon": 77.5553965
    },
    {
      "Street": "NASPUR",
      "City": "MANCHERIAL",
      "lat": 18.873316,
      "lon": 79.4999242
    },
    {
      "Street": "KOLAPAKKAM",
      "City": "KANCHIPURAM",
      "lat": 12.83515,
      "lon": 79.70006
    },
    {
      "Street": "TIRUMALAGIRI",
      "City": "SURYAPET",
      "lat": 17.4681198,
      "lon": 79.4502758
    },
    {
      "Street": "GALLERIA DLF-IV",
      "City": "GURGAON",
      "lat": 28.4672918,
      "lon": 77.0817598
    },
    {
      "Street": "KAGAZ NAGAR",
      "City": "KOMRAM BHEEM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SARANGAPUR",
      "City": "NIRMAL",
      "lat": 19.0398413,
      "lon": 78.7223074
    },
    {
      "Street": "NANGANALLUR",
      "City": "KANCHIPURAM",
      "lat": 12.9827844,
      "lon": 80.1891661
    },
    {
      "Street": "LINGALA GHANPUR",
      "City": "WARANGAL (URBAN)",
      "lat": 17.85,
      "lon": 79.36667
    },
    {
      "Street": "GORAKHPUR",
      "City": "GORAKHPUR",
      "lat": 26.7600217,
      "lon": 83.3668129
    },
    {
      "Street": "TANDUR",
      "City": "MANCHERIAL",
      "lat": 19.1519551,
      "lon": 79.4488599
    },
    {
      "Street": "UNGUTURU",
      "City": "WEST GODAVARI",
      "lat": 16.912044,
      "lon": 81.4377673
    },
    {
      "Street": "NAGARAM",
      "City": "RANGA REDDY",
      "lat": 17.2594945,
      "lon": 77.7839394
    },
    {
      "Street": "NUTHANKAL",
      "City": "SURYAPET",
      "lat": 17.32863,
      "lon": 79.6967444
    },
    {
      "Street": "SADASIVANAGAR",
      "City": "KAMAREDDY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "KOHEDA",
      "City": "SIDDIPET",
      "lat": 18.1710494,
      "lon": 79.0930528
    },
    {
      "Street": "NAGAREDDIPET",
      "City": "KAMAREDDY",
      "lat": 18.1165455,
      "lon": 78.1203893
    },
    {
      "Street": "PALVANCHA",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.6997439,
      "lon": 80.6890514
    },
    {
      "Street": "KOTAGIRI",
      "City": "NIZAMABAD",
      "lat": 18.5729602,
      "lon": 77.8236852
    },
    {
      "Street": "AMADAGUR",
      "City": "ANANTAPUR",
      "lat": 13.889337,
      "lon": 78.026787
    },
    {
      "Street": "BEMETARA",
      "City": "DURG",
      "lat": 21.7,
      "lon": 81.53333
    },
    {
      "Street": "SUDAMA NAGAR",
      "City": "INDORE",
      "lat": 22.6883222,
      "lon": 75.8321475
    },
    {
      "Street": "DHAROOR",
      "City": "VIKARABAD",
      "lat": 17.2951422,
      "lon": 77.7795154
    },
    {
      "Street": "IDAISEVAL",
      "City": "THOOTHUKUDI",
      "lat": 8.78333,
      "lon": 78.13333
    },
    {
      "Street": "BUKKARAYA SAMUDRAM",
      "City": "ANANTAPUR",
      "lat": 14.7050329,
      "lon": 77.69242
    },
    {
      "Street": "YELLANDU",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.5915639,
      "lon": 80.3216885
    },
    {
      "Street": "MIRYALAGUDA",
      "City": "NALGONDA",
      "lat": 16.8710119,
      "lon": 79.5617353
    },
    {
      "Street": "VALIGONDA",
      "City": "YADADRI",
      "lat": 17.3772563,
      "lon": 79.0209072
    },
    {
      "Street": "THANE",
      "City": "THANE",
      "lat": 19.1943294,
      "lon": 72.9701779
    },
    {
      "Street": "GADWAL",
      "City": "GADWAL",
      "lat": 16.2251954,
      "lon": 77.809493
    },
    {
      "Street": "BHUPALPALLE",
      "City": "JAYASHANKAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "YEMMIGANUR",
      "City": "KURNOOL",
      "lat": 15.7454965,
      "lon": 77.5110453
    },
    {
      "Street": "DOMAKONDA",
      "City": "KAMAREDDY",
      "lat": 18.2523366,
      "lon": 78.4584884
    },
    {
      "Street": "ROHINI COURTS",
      "City": "NORTH WEST DELHI",
      "lat": 28.70113,
      "lon": 77.10154
    },
    {
      "Street": "ALAIR",
      "City": "YADADRI",
      "lat": 17.6467579,
      "lon": 79.0738512
    },
    {
      "Street": "MUSTABAD",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.2806421,
      "lon": 78.7114191
    },
    {
      "Street": "YELLANUR",
      "City": "ANANTAPUR",
      "lat": 14.6525584,
      "lon": 78.0369593
    },
    {
      "Street": "THADEPALLE",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "CHOPPADANDI",
      "City": "KARIMNAGAR",
      "lat": 18.5773287,
      "lon": 79.1675524
    },
    {
      "Street": "DAHEGAON",
      "City": "KOMRAM BHEEM DISTRICT",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SINDHNUR",
      "City": "RAICHUR",
      "lat": 15.7620985,
      "lon": 76.5950148
    },
    {
      "Street": "ENKOOR",
      "City": "KHAMMAM",
      "lat": 17.3284346,
      "lon": 80.4406512
    },
    {
      "Street": "NAIDUPETA",
      "City": "NELLORE",
      "lat": 14.08333,
      "lon": 79.58333
    },
    {
      "Street": "GHAZIABAD",
      "City": "GHAZIABAD",
      "lat": 28.6711527,
      "lon": 77.4120356
    },
    {
      "Street": "UTTARKRISHNAPUR",
      "City": "CACHAR",
      "lat": 24.78213,
      "lon": 92.85771
    },
    {
      "Street": "VADODARA",
      "City": "VADODARA",
      "lat": 22.2973142,
      "lon": 73.1942567
    },
    {
      "Street": "PALAKODERU",
      "City": "WEST GODAVARI",
      "lat": 16.5861648,
      "lon": 81.5469086
    },
    {
      "Street": "PEDDAPAPPUR",
      "City": "ANANTAPUR",
      "lat": 14.9296529,
      "lon": 77.8611195
    },
    {
      "Street": "MUKPAL",
      "City": "NIZAMABAD",
      "lat": 18.9228134,
      "lon": 78.3727381
    },
    {
      "Street": "BHADRADRI",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 18.0285467,
      "lon": 80.7388511
    },
    {
      "Street": "DICHPALLY",
      "City": "NIZAMABAD",
      "lat": 18.6135803,
      "lon": 78.2244196
    },
    {
      "Street": "GHANPUR (MULUG)",
      "City": "JAYASHANKAR",
      "lat": 18.3098774,
      "lon": 79.8726224
    },
    {
      "Street": "KALLURU",
      "City": "KHAMMAM",
      "lat": 17.1902732,
      "lon": 80.5623977
    },
    {
      "Street": "SITARAMPUR",
      "City": "BARDHAMAN",
      "lat": 23.7229245,
      "lon": 86.8932509
    },
    {
      "Street": "MALIKIPURAM",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "YELLAREDDIPET",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.3724805,
      "lon": 78.6486905
    },
    {
      "Street": "NARASARAOPETA",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "CHIVEMLA",
      "City": "SURYAPET",
      "lat": 17.1529571,
      "lon": 79.6864283
    },
    {
      "Street": "LINGAL",
      "City": "NAGARKURNOOL",
      "lat": 16.2685557,
      "lon": 78.516517
    },
    {
      "Street": "GUDUR",
      "City": "KRISHNA",
      "lat": 16.2159096,
      "lon": 81.0815906
    },
    {
      "Street": "VISSANNAPET",
      "City": "KRISHNA",
      "lat": 16.66667,
      "lon": 81
    },
    {
      "Street": "KODAKANDLA",
      "City": "JANGAON",
      "lat": 17.5325139,
      "lon": 79.5039153
    },
    {
      "Street": "JAGGAYYAPETA",
      "City": "KRISHNA",
      "lat": 16.8938,
      "lon": 80.09807
    },
    {
      "Street": "ASANSOL BAZAR",
      "City": "BARDHAMAN",
      "lat": 23.6854886,
      "lon": 86.9738499
    },
    {
      "Street": "DHONE",
      "City": "KURNOOL",
      "lat": 15.4199313,
      "lon": 77.887827
    },
    {
      "Street": "PONNUR",
      "City": "GUNTUR",
      "lat": 16.0683776,
      "lon": 80.5522462
    },
    {
      "Street": "KRUTHIVENNI",
      "City": "KRISHNA",
      "lat": 16.66667,
      "lon": 81
    },
    {
      "Street": "MOPIDEVI",
      "City": "KRISHNA",
      "lat": 16.064595,
      "lon": 80.9272822
    },
    {
      "Street": "NUZENDLA",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "KANDUKUR",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PITTALAVANIPALEM",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "MIRYALAGUDA",
      "City": "MIRYALGUDA",
      "lat": 16.8702377,
      "lon": 79.5562492
    },
    {
      "Street": "DONAKONDA",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SEDAM",
      "City": "GULBARGA",
      "lat": 17.3282206,
      "lon": 76.8482029
    },
    {
      "Street": "REGONDA",
      "City": "JAYASHANKAR",
      "lat": 18.2435154,
      "lon": 79.769926
    },
    {
      "Street": "VINUKONDA",
      "City": "GUNTUR",
      "lat": 16.0568212,
      "lon": 79.7501118
    },
    {
      "Street": "GANGAWATI",
      "City": "KOPPAL",
      "lat": 15.43342,
      "lon": 76.5293
    },
    {
      "Street": "RAVER",
      "City": "JALGAON",
      "lat": 21.2222313,
      "lon": 76.0444182
    },
    {
      "Street": "KAGAZ NAGAR",
      "City": "KOMRAM BHEEM DISTRICT",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PORUMAMILLA",
      "City": "KADAPA",
      "lat": 14.4739463,
      "lon": 78.9098436
    },
    {
      "Street": "KALLUR",
      "City": "KURNOOL",
      "lat": 15.7997394,
      "lon": 78.0316912
    },
    {
      "Street": "KULKACHARLA",
      "City": "VIKARABAD",
      "lat": 17.0150535,
      "lon": 77.8755632
    },
    {
      "Street": "DAMERCHERLA",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "ASIFABAD",
      "City": "KOMRAM BHEEM DISTRICT",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BODHAN",
      "City": "NIZAMABAD",
      "lat": 18.6536941,
      "lon": 77.8936802
    },
    {
      "Street": "RAZOLE",
      "City": "EAST GODAVARI",
      "lat": 16.47608,
      "lon": 81.83912
    },
    {
      "Street": "SHANKARAPATNAM",
      "City": "KARIMNAGAR",
      "lat": 18.2787065,
      "lon": 79.2970848
    },
    {
      "Street": "GADWAL",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "TADA",
      "City": "NELLORE",
      "lat": 13.58593,
      "lon": 80.0315
    },
    {
      "Street": "KAIKALUR",
      "City": "KRISHNA",
      "lat": 16.55084,
      "lon": 81.21177
    },
    {
      "Street": "0",
      "City": "SAROORNAGAR",
      "lat": 17.3611655,
      "lon": 78.5387443
    },
    {
      "Street": "0",
      "City": "BODUPPAL",
      "lat": 17.4200755,
      "lon": 78.5827841
    },
    {
      "Street": "KHAMMAM RURAL",
      "City": "KHAMMAM",
      "lat": 17.2441946,
      "lon": 80.1073612
    },
    {
      "Street": "SINGARENI",
      "City": "KHAMMAM",
      "lat": 17.5020887,
      "lon": 80.2893009
    },
    {
      "Street": "PARCHUR",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "CHOUUPPAL",
      "City": "YADADRI",
      "lat": null,
      "lon": null
    },
    {
      "Street": "DANDEPALLE",
      "City": "MANCHERIAL",
      "lat": 18.9978049,
      "lon": 79.1545912
    },
    {
      "Street": "DUNDIGAL",
      "City": "MEDCHAL",
      "lat": 17.6075319,
      "lon": 78.4141732
    },
    {
      "Street": "RAMACHANDRA PURAM",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "0",
      "City": "ERRAGADDA",
      "lat": 17.4487999,
      "lon": 78.4356074
    },
    {
      "Street": "MANCHERIAL",
      "City": "ADILABAD",
      "lat": 18.8726523,
      "lon": 79.4446921
    },
    {
      "Street": "0",
      "City": "NALGONDA",
      "lat": 17.0840193,
      "lon": 79.2761995
    },
    {
      "Street": "HYDERABAD",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "NALGONDA.",
      "City": "NALGONDA",
      "lat": 17.0606367,
      "lon": 79.2832849
    },
    {
      "Street": "WYRA",
      "City": "KHAMMAM",
      "lat": 17.1936232,
      "lon": 80.3594327
    },
    {
      "Street": "GHANPUR",
      "City": "WANAPARTHY",
      "lat": 16.5530227,
      "lon": 78.0602063
    },
    {
      "Street": "TIRUMALAYAPALEM",
      "City": "KHAMMAM",
      "lat": 17.3100806,
      "lon": 80.0354546
    },
    {
      "Street": "MELLACHERVU",
      "City": "SURYAPET",
      "lat": 16.8217637,
      "lon": 79.9507891
    },
    {
      "Street": "KURAVI",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "BOMMARASPETA",
      "City": "VIKARABAD",
      "lat": 17.1296117,
      "lon": 77.707227
    },
    {
      "Street": "POCHAMPALLY",
      "City": "YADADRI",
      "lat": 17.3630941,
      "lon": 78.8228944
    },
    {
      "Street": "CHOUTUPPAL",
      "City": "YADADRI",
      "lat": 17.2526027,
      "lon": 78.8964038
    },
    {
      "Street": "TURKAYAMJAL",
      "City": "RANGA REDDY",
      "lat": 17.2877936,
      "lon": 78.5885165
    },
    {
      "Street": "PALAKEEDU",
      "City": "SURYAPET",
      "lat": 16.8002105,
      "lon": 79.7055664
    },
    {
      "Street": "RAMANNAPETA",
      "City": "YADADRI",
      "lat": 17.2872144,
      "lon": 79.091519
    },
    {
      "Street": "DACHEPALLE",
      "City": "GUNTUR",
      "lat": 16.59461,
      "lon": 79.73546
    },
    {
      "Street": "GODAVARIKHANI",
      "City": "PEDDAPALLI",
      "lat": 18.7512548,
      "lon": 79.5058532
    },
    {
      "Street": "NARSINGI",
      "City": "RANGA REDDY",
      "lat": 17.3915187,
      "lon": 78.3598924
    },
    {
      "Street": "BELLAMKONDA",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "KAMAVARAPU KOTA",
      "City": "WEST GODAVARI",
      "lat": 17,
      "lon": 81.16667
    },
    {
      "Street": "SRIGANGANAGAR",
      "City": "SRI GANGANAGAR",
      "lat": 29.9319645,
      "lon": 73.8723448
    },
    {
      "Street": "VEERAVASARAM",
      "City": "WEST GODAVARI",
      "lat": 16.5377719,
      "lon": 81.6248154
    },
    {
      "Street": "GANAPAVARAM",
      "City": "WEST GODAVARI",
      "lat": 16.7091231,
      "lon": 81.5271973
    },
    {
      "Street": "PULIVENDULA",
      "City": "KADAPA",
      "lat": 14.480467,
      "lon": 78.7710337
    },
    {
      "Street": "LALGANJ",
      "City": "RAE BARELI",
      "lat": 26.2191,
      "lon": 81.24499
    },
    {
      "Street": "TANUKU",
      "City": "WEST GODAVARI",
      "lat": 16.752289,
      "lon": 81.6740039
    },
    {
      "Street": "ALIGARH",
      "City": "ALIGARH",
      "lat": 27.8815412,
      "lon": 78.0690216
    },
    {
      "Street": "LINGAMPET",
      "City": "NIZAMABAD",
      "lat": 18.2384511,
      "lon": 78.1264843
    },
    {
      "Street": "NAKREKAL",
      "City": "NALGONDA",
      "lat": 17.1647574,
      "lon": 79.4274007
    },
    {
      "Street": "KARIMNGAR",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "CUDDALORE",
      "City": "CUDDALORE",
      "lat": 11.7426938,
      "lon": 79.7503064
    },
    {
      "Street": "PEDAPADU",
      "City": "WEST GODAVARI",
      "lat": 16.642624,
      "lon": 81.0376373
    },
    {
      "Street": "JAIPUR.",
      "City": "JAIPUR",
      "lat": 26.9154576,
      "lon": 75.8189817
    },
    {
      "Street": "PARVATHIPURAM",
      "City": "VIZIANAGARAM",
      "lat": 18.7711288,
      "lon": 83.4243477
    },
    {
      "Street": "0",
      "City": "KONDAPUR",
      "lat": 17.7108322,
      "lon": 78.2953504
    },
    {
      "Street": "THIRUPATI URBAN",
      "City": "CHITTOOR",
      "lat": 13.41667,
      "lon": 79
    },
    {
      "Street": "CHINNA KODUR",
      "City": "MEDAK",
      "lat": 17.70846,
      "lon": 78.0203
    },
    {
      "Street": "KONAPUR",
      "City": "MEDAK",
      "lat": 17.9458569,
      "lon": 78.0777627
    },
    {
      "Street": "AMRAVATI",
      "City": "AMRAVATI",
      "lat": 20.9316219,
      "lon": 77.7588455
    },
    {
      "Street": "GHANPUR",
      "City": "JANGAON",
      "lat": 17.8061904,
      "lon": 79.383449
    },
    {
      "Street": "PITLAM",
      "City": "NIZAMABAD",
      "lat": 18.22257,
      "lon": 77.82386
    },
    {
      "Street": "DUMIYANI",
      "City": "RAJKOT",
      "lat": 22.29161,
      "lon": 70.79322
    },
    {
      "Street": "CHAS",
      "City": "BOKARO",
      "lat": 23.6544338,
      "lon": 86.1456444
    },
    {
      "Street": "GOPALAPURAM",
      "City": "WEST GODAVARI",
      "lat": 17.1,
      "lon": 81.51667
    },
    {
      "Street": "NAWABPET",
      "City": "RANGA REDDY",
      "lat": 17.427463,
      "lon": 77.9614265
    },
    {
      "Street": "KANPUR",
      "City": "KANPUR",
      "lat": 20.4038898,
      "lon": 85.1744113
    },
    {
      "Street": "KESHAMPETA",
      "City": "RANGA REDDY",
      "lat": 16.9519221,
      "lon": 78.3471029
    },
    {
      "Street": "PATNA.",
      "City": "PATNA",
      "lat": 25.6093239,
      "lon": 85.1235252
    },
    {
      "Street": "LUCKNOW",
      "City": "LUCKNOW",
      "lat": 26.8381,
      "lon": 80.9346001
    },
    {
      "Street": "BHIND",
      "City": "BHIND",
      "lat": 26.5884918,
      "lon": 78.7771882
    },
    {
      "Street": "PENUGONDA",
      "City": "WEST GODAVARI",
      "lat": 16.6539593,
      "lon": 81.744602
    },
    {
      "Street": "KOTHAVALASA",
      "City": "VIZIANAGARAM",
      "lat": 17.8958429,
      "lon": 83.1837095
    },
    {
      "Street": "PEDANA",
      "City": "KRISHNA",
      "lat": 16.2517108,
      "lon": 81.1443033
    },
    {
      "Street": "JARADA",
      "City": "GANJAM",
      "lat": 19.1177395,
      "lon": 84.5251151
    },
    {
      "Street": "BULDANA",
      "City": "BULDHANA",
      "lat": 20.53208,
      "lon": 76.179911
    },
    {
      "Street": "CHATRAI",
      "City": "KRISHNA",
      "lat": 17.0001507,
      "lon": 80.8646336
    },
    {
      "Street": "0",
      "City": "MUSHEERABAD",
      "lat": 17.4191423,
      "lon": 78.4985732
    },
    {
      "Street": "KOLKATA",
      "City": "KOLKATA",
      "lat": 22.5726459,
      "lon": 88.3638953
    },
    {
      "Street": "SAHADEVKHUNTA",
      "City": "BALESHWAR",
      "lat": 21.5330157,
      "lon": 86.9203864
    },
    {
      "Street": "BANAPUR",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.18268,
      "lon": 85.61629
    },
    {
      "Street": "UNIDENTIFIED",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "WEST-SANABANDH",
      "City": "BANKURA",
      "lat": 23.23241,
      "lon": 87.0716
    },
    {
      "Street": "RAJANNA SIRCILLA",
      "City": "RAJANNA SIRICILLA",
      "lat": 18.3918734,
      "lon": 78.8091845
    },
    {
      "Street": "THIMMAPUR LMD COLONY",
      "City": "KARIMNAGAR",
      "lat": 18.357252,
      "lon": 79.1697979
    },
    {
      "Street": "ORISSA",
      "City": "NABARANGAPUR",
      "lat": 19.6096232,
      "lon": 82.2987685
    },
    {
      "Street": "BHALLAMPUR",
      "City": "SIDDIPET",
      "lat": 18.10483,
      "lon": 78.84858
    },
    {
      "Street": "YANAM",
      "City": "YANAM",
      "lat": 16.7385032,
      "lon": 82.2106199
    },
    {
      "Street": "WEST BENGAL",
      "City": "WEST MIDNAPORE",
      "lat": 22.0521107,
      "lon": 88.0712466
    },
    {
      "Street": "GOPALGANJ",
      "City": "GOPALGANJ",
      "lat": 26.5382307,
      "lon": 84.4588742
    },
    {
      "Street": "SADAR",
      "City": "KALAHANDI",
      "lat": 19.9198165,
      "lon": 83.2063482
    },
    {
      "Street": "MAHARASHTRA",
      "City": "MAHARASHTRA OTHERS",
      "lat": null,
      "lon": null
    },
    {
      "Street": "RAJASTHAN",
      "City": "JODHPUR",
      "lat": 26.2967719,
      "lon": 73.0351433
    },
    {
      "Street": "RAJA BOLLARAM",
      "City": "MEDCHAL",
      "lat": 17.6379181,
      "lon": 78.5368609
    },
    {
      "Street": "BHATPARA",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.8571157,
      "lon": 88.3971976
    },
    {
      "Street": "RAJUPALEM",
      "City": "GUNTUR",
      "lat": 16.0793664,
      "lon": 80.2967511
    },
    {
      "Street": "CHHATARPUR",
      "City": "CHHATARPUR",
      "lat": 24.9204657,
      "lon": 79.5839755
    },
    {
      "Street": "KHAGARIA",
      "City": "KHAGARIA",
      "lat": 25.506425,
      "lon": 86.4663243
    },
    {
      "Street": "DAVANAGERE",
      "City": "DAVANAGERE",
      "lat": 14.4661266,
      "lon": 75.9206361
    },
    {
      "Street": "KHEDA",
      "City": "KHEDA",
      "lat": 22.7516133,
      "lon": 72.6857205
    },
    {
      "Street": "MADHUBANI",
      "City": "MUZAFFARPUR",
      "lat": 26.100285,
      "lon": 85.3323501
    },
    {
      "Street": "BOTAD",
      "City": "BOTAD",
      "lat": 22.1686,
      "lon": 71.6685
    },
    {
      "Street": "BIJINAPALLY",
      "City": "NAGARKURNOOL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SURARAM",
      "City": "MEDCHAL",
      "lat": 17.5360946,
      "lon": 78.4186386
    },
    {
      "Street": "SITTARGANJ",
      "City": "UDHAM SINGH NAGAR",
      "lat": 29.05414,
      "lon": 79.46308
    },
    {
      "Street": "MADDUR",
      "City": "SIDDIPET",
      "lat": 17.9268435,
      "lon": 79.0472745
    },
    {
      "Street": "EAST SINGHBHUM",
      "City": "EAST SINGHBHUM",
      "lat": 22.8092139,
      "lon": 86.2091549
    },
    {
      "Street": "MANGALORE",
      "City": "DAKSHINA KANNADA",
      "lat": 12.8698101,
      "lon": 74.8430082
    },
    {
      "Street": "KOTHUR",
      "City": "PEDDAPALLI",
      "lat": 18.6616843,
      "lon": 79.2374518
    },
    {
      "Street": "BODUPPAL",
      "City": "UPPAL",
      "lat": 17.4053501,
      "lon": 78.588911
    },
    {
      "Street": "THONDANGI",
      "City": "EAST GODAVARI",
      "lat": 17.245205,
      "lon": 82.453841
    },
    {
      "Street": "BHUKTHAPUR",
      "City": "ADILABAD",
      "lat": 19.6748039,
      "lon": 78.5269123
    },
    {
      "Street": "MADHYA PRADESH",
      "City": "CHHINDWARA",
      "lat": 22.2071897,
      "lon": 78.798833
    },
    {
      "Street": "JAMMU & KASHMIR",
      "City": "JAMMU & KASHMIR",
      "lat": 32.7185614,
      "lon": 74.8580917
    },
    {
      "Street": "MANOPAD",
      "City": "JOGULAMBA GADWAL",
      "lat": 15.9934721,
      "lon": 77.9421386
    },
    {
      "Street": "RAJAGANGAPUR",
      "City": "SUNDERGARH",
      "lat": 22.11667,
      "lon": 84.03333
    },
    {
      "Street": "BIHAR",
      "City": "ARARIA",
      "lat": 26.2651013,
      "lon": 87.3699437
    },
    {
      "Street": "FAROOQNAGAR",
      "City": "SHADNAGAR",
      "lat": 17.0671702,
      "lon": 78.2045948
    },
    {
      "Street": "NANDIKOTKUR",
      "City": "KURNOOL",
      "lat": 15.8257824,
      "lon": 78.1510674
    },
    {
      "Street": "MOOSAPET",
      "City": "KUKATPALLY",
      "lat": 17.4685307,
      "lon": 78.4206695
    },
    {
      "Street": "AMANGAL",
      "City": "RANGA REDDY",
      "lat": 16.8497797,
      "lon": 78.5325679
    },
    {
      "Street": "GONDA",
      "City": "GONDA",
      "lat": 27.1334827,
      "lon": 81.9619743
    },
    {
      "Street": "KHANPUR",
      "City": "NIRMAL",
      "lat": 31.867317,
      "lon": 75.631258
    },
    {
      "Street": "MIYAPUR",
      "City": "MIYAPUR",
      "lat": 17.4981608,
      "lon": 78.3567628
    },
    {
      "Street": "REZIMENTAL BAZAR",
      "City": "SEC-BAD",
      "lat": 47.3942,
      "lon": 8.75268
    },
    {
      "Street": "A G COLONY",
      "City": "AMEERPET",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MAKTHAL",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "RAJANNA SIRICILLA",
      "City": "RAJANNA SIRICILLA",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MANCHAL",
      "City": "RANGA REDDY",
      "lat": 17.1615948,
      "lon": 78.720088
    },
    {
      "Street": "AJMER",
      "City": "AJMER",
      "lat": 26.4691,
      "lon": 74.639
    },
    {
      "Street": "YERRAMPETA",
      "City": "WEST GODAVARI",
      "lat": 17,
      "lon": 81.16667
    },
    {
      "Street": "KORUKONDAPALLE",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "KALLURU",
      "City": "KURNOOL",
      "lat": 15.58333,
      "lon": 78.33333
    },
    {
      "Street": "KERALA",
      "City": "ALAPPUZHA",
      "lat": 9.5006651,
      "lon": 76.4124143
    },
    {
      "Street": "SYDAPURAM",
      "City": "NELLORE",
      "lat": 14.2160997,
      "lon": 79.6916359
    },
    {
      "Street": "MADHYA PRADESH",
      "City": "BHOPAL",
      "lat": 23.2584857,
      "lon": 77.401989
    },
    {
      "Street": "VISSANNAPETA",
      "City": "KRISHNA",
      "lat": 16.9386437,
      "lon": 80.7817705
    },
    {
      "Street": "PEDAKURAPADU",
      "City": "GUNTUR",
      "lat": 16.4691884,
      "lon": 80.2609495
    },
    {
      "Street": "PATNA",
      "City": "PATNA",
      "lat": 25.6093239,
      "lon": 85.1235252
    },
    {
      "Street": "BALLIA",
      "City": "BALLIA",
      "lat": 25.759429,
      "lon": 84.1489095
    },
    {
      "Street": "KHORDHA",
      "City": "KHORDHA",
      "lat": 20.1727724,
      "lon": 85.6138614
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "SONBHADRA",
      "lat": 24.4148159,
      "lon": 83.0637517
    },
    {
      "Street": "PUNJAB",
      "City": "PATIALA",
      "lat": 30.2092777,
      "lon": 76.3397231
    },
    {
      "Street": "SIVASAGAR",
      "City": "SIVASAGAR",
      "lat": 26.9834936,
      "lon": 94.6394226
    },
    {
      "Street": "GANDHINAGAR",
      "City": "GANDHINAGAR",
      "lat": 23.2232877,
      "lon": 72.6492267
    },
    {
      "Street": "ASSAM",
      "City": "KAMRUP",
      "lat": 26.146886,
      "lon": 91.2227397
    },
    {
      "Street": "KHAIRATABAD",
      "City": "KHAIRTABAD",
      "lat": 17.4118898,
      "lon": 78.4628592
    },
    {
      "Street": "WEST BENGAL",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.6926815,
      "lon": 88.6625795
    },
    {
      "Street": "DENTAM",
      "City": "WEST SIKKIM",
      "lat": 27.2617762,
      "lon": 88.1306563
    },
    {
      "Street": "JALPAIGURI",
      "City": "JALPAIGURI",
      "lat": 26.5241586,
      "lon": 88.7197513
    },
    {
      "Street": "HOOGHLY",
      "City": "HOOGHLY",
      "lat": 22.9052114,
      "lon": 88.3760639
    },
    {
      "Street": "NELAKONDAPALLI",
      "City": "KHAMMAM",
      "lat": 17.103344,
      "lon": 80.053632
    },
    {
      "Street": "KONDAPUR",
      "City": "GACHIBOWLI",
      "lat": 17.4702246,
      "lon": 78.3654561
    },
    {
      "Street": "UNNAO",
      "City": "UNNAO",
      "lat": 26.543584,
      "lon": 80.487148
    },
    {
      "Street": "LINGAMPALLY",
      "City": "SERILINGAMPALLY",
      "lat": 17.4881832,
      "lon": 78.316112
    },
    {
      "Street": "ASIF NAGAR",
      "City": "MEHEDIPATNAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PALAMU",
      "City": "PALAMU",
      "lat": 23.916667,
      "lon": 84.083333
    },
    {
      "Street": "YEDAPALLI",
      "City": "NIZAMABAD",
      "lat": 18.6787193,
      "lon": 77.9531001
    },
    {
      "Street": "BARABAZAR",
      "City": "KOLKATA",
      "lat": 22.5813727,
      "lon": 88.3528379
    },
    {
      "Street": "MULUGU",
      "City": "SIDDIPET",
      "lat": 17.7436949,
      "lon": 78.62977
    },
    {
      "Street": "SRINAGAR.",
      "City": "SRINAGAR.",
      "lat": 34.0747444,
      "lon": 74.8204443
    },
    {
      "Street": "ATMAKUR",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.4684461,
      "lon": 79.1371576
    },
    {
      "Street": "AGIRIPALLI",
      "City": "KRISHNA",
      "lat": 16.685033,
      "lon": 80.787802
    },
    {
      "Street": "ORISSA",
      "City": "BALESHWAR",
      "lat": 21.5197916,
      "lon": 86.8790638
    },
    {
      "Street": "BOMMIDI",
      "City": "DHARMAPURI",
      "lat": 11.9824026,
      "lon": 78.2450064
    },
    {
      "Street": "GHANPUR",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "AGRA",
      "City": "AGRA",
      "lat": 27.1752554,
      "lon": 78.0098161
    },
    {
      "Street": "NARASAPURAM",
      "City": "WEST GODAVARI",
      "lat": 16.4386399,
      "lon": 81.7014603
    },
    {
      "Street": "GADCHIROLI",
      "City": "GADCHIROLI",
      "lat": 20.1853965,
      "lon": 80.003509
    },
    {
      "Street": "AMRITSAR",
      "City": "AMRITSAR",
      "lat": 31.6343083,
      "lon": 74.8736788
    },
    {
      "Street": "GOBARDANGA",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.883175,
      "lon": 88.7621132
    },
    {
      "Street": "GANAPAVARAM",
      "City": "SURYAPET",
      "lat": 17.0224353,
      "lon": 79.8192541
    },
    {
      "Street": "ORISSA",
      "City": "BHADRAK",
      "lat": 20.9854052,
      "lon": 86.5934226
    },
    {
      "Street": "KANCHIKA CHERLA",
      "City": "KRISHNA",
      "lat": 16.66667,
      "lon": 81
    },
    {
      "Street": "PEDAVEEDU",
      "City": "SURYAPET",
      "lat": 16.7603602,
      "lon": 79.8416985
    },
    {
      "Street": "KONDURU",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "BOLARUM",
      "City": "ALWAL",
      "lat": 17.529823,
      "lon": 78.5155062
    },
    {
      "Street": "JAMSHEDPUR",
      "City": "JAMSHEDPUR",
      "lat": 22.7682803,
      "lon": 86.2011172
    },
    {
      "Street": "NAGARKURNOOL",
      "City": "NAGAR KURNOOL",
      "lat": 16.4411838,
      "lon": 78.3058081
    },
    {
      "Street": "VETTEMAL",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "LOTHUKUNTA",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "REGODE",
      "City": "MEDAK",
      "lat": 17.9792672,
      "lon": 77.8516528
    },
    {
      "Street": "BHEEMPUR",
      "City": "ADILABAD",
      "lat": 19.312447,
      "lon": 78.6354026
    },
    {
      "Street": "VIJAYA NAGAR COLONY",
      "City": "NAMPALLY",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PEBBAIR",
      "City": "WANAPARTHY",
      "lat": 16.2052789,
      "lon": 77.9941964
    },
    {
      "Street": "BEGUMPET",
      "City": "BEGUMPET",
      "lat": 17.4421395,
      "lon": 78.4585964
    },
    {
      "Street": "MALKAJGIRI",
      "City": "MALKAJGIRI",
      "lat": 17.4483438,
      "lon": 78.5289727
    },
    {
      "Street": "AMBERPET",
      "City": "AMBERPET",
      "lat": 17.3921953,
      "lon": 78.5178213
    },
    {
      "Street": "KETHAPALLI",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "KARAIKAL",
      "City": "KARAIKAL",
      "lat": 10.91571,
      "lon": 79.8375761
    },
    {
      "Street": "TRIPURARAM",
      "City": "NALGONDA",
      "lat": 16.8250802,
      "lon": 79.4712468
    },
    {
      "Street": "NANDIGAM",
      "City": "RANGA REDDY",
      "lat": 17.1173229,
      "lon": 78.2600868
    },
    {
      "Street": "PANGAL",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "MANIKONDA",
      "City": "GACHIBOWLI",
      "lat": 17.4135407,
      "lon": 78.3744251
    },
    {
      "Street": "BIJILIPUR",
      "City": "MEDAK",
      "lat": 17.876194,
      "lon": 77.9513504
    },
    {
      "Street": "KOTHAGUDA",
      "City": "HYDERABAD",
      "lat": 17.458705,
      "lon": 78.3638803
    },
    {
      "Street": "BHUVANESHWAR",
      "City": "BHUVANESHWAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "GWALIOR",
      "City": "GWALIOR",
      "lat": 26.2037247,
      "lon": 78.1573628
    },
    {
      "Street": "JANJGIR - CHAMPA",
      "City": "JANJGIR - CHAMPA",
      "lat": 22.0090841,
      "lon": 82.578896
    },
    {
      "Street": "HALDWANI",
      "City": "NAINITAL",
      "lat": 29.2144809,
      "lon": 79.5279012
    },
    {
      "Street": "NAWADA",
      "City": "NAWADA",
      "lat": 28.6202758,
      "lon": 77.0450787
    },
    {
      "Street": "DANDEPALLI",
      "City": "MANCHERIAL",
      "lat": 18.9976666,
      "lon": 79.1590506
    },
    {
      "Street": "GORANTLA",
      "City": "GUNTUR",
      "lat": 16.3426917,
      "lon": 80.4408374
    },
    {
      "Street": "RAYANPET",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BANGERMAU",
      "City": "UNNAO",
      "lat": 26.54706,
      "lon": 80.48781
    },
    {
      "Street": "DUMKA",
      "City": "DUMKA",
      "lat": 24.2677937,
      "lon": 87.2485495
    },
    {
      "Street": "INDUKURPET",
      "City": "NELLORE",
      "lat": 14.5110295,
      "lon": 80.114006
    },
    {
      "Street": "GATTIKAL",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 11.44154,
      "lon": 79.64568
    },
    {
      "Street": "GARIDEPALLI",
      "City": "SURYAPET",
      "lat": 16.8942085,
      "lon": 79.7643776
    },
    {
      "Street": "0",
      "City": "BANJARA HILLS",
      "lat": 17.4177464,
      "lon": 78.4399014
    },
    {
      "Street": "ASIFNAGAR",
      "City": "HYDERABAD",
      "lat": 17.3942691,
      "lon": 78.441236
    },
    {
      "Street": "KUSUMANCHI",
      "City": "KHAMMAM",
      "lat": 17.225571,
      "lon": 79.9554551
    },
    {
      "Street": "GUNDLAPALLY",
      "City": "NALGONDA",
      "lat": 16.5523731,
      "lon": 78.690691
    },
    {
      "Street": "ASSAM",
      "City": "DIBRUGARH",
      "lat": 27.4844597,
      "lon": 94.9019447
    },
    {
      "Street": "BHEEMADEVARPALLE",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "SRINAGAR.",
      "City": "SRINAGAR",
      "lat": 34.0747444,
      "lon": 74.8204443
    },
    {
      "Street": "MADHYA PRADESH",
      "City": "JABALPUR",
      "lat": 23.1701522,
      "lon": 79.9324505
    },
    {
      "Street": "WEST BENGAL",
      "City": "JALPAIGURI",
      "lat": 26.6262804,
      "lon": 88.7334485
    },
    {
      "Street": "KHURDA (KHORDHA)",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.1540594,
      "lon": 85.7086509
    },
    {
      "Street": "WEST BENGAL",
      "City": "BIRBHUM",
      "lat": 24.0621532,
      "lon": 87.6982823
    },
    {
      "Street": "SHAMIRPET",
      "City": "HYDERABAD",
      "lat": 17.5736892,
      "lon": 78.5662793
    },
    {
      "Street": "INAVOLU",
      "City": "WARANGAL (URBAN)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "CHEGUR ",
      "City": "HYDERABAD",
      "lat": 17.1548623,
      "lon": 78.250879
    },
    {
      "Street": "BHIWANI",
      "City": "BHIWANI",
      "lat": 28.7931703,
      "lon": 76.1391283
    },
    {
      "Street": "ELIGEDU",
      "City": "PEDDAPALLI",
      "lat": 18.61357,
      "lon": 79.37442
    },
    {
      "Street": "GAJAPATI",
      "City": "GAJAPATI",
      "lat": 19.1845062,
      "lon": 84.3526387
    },
    {
      "Street": "ORISSA",
      "City": "BALESWAR",
      "lat": 21.5012299,
      "lon": 86.9238099
    },
    {
      "Street": "MAHARASHTRA",
      "City": "HINGOLI",
      "lat": 19.5431163,
      "lon": 77.1739432
    },
    {
      "Street": "NORTH 24 PARGANAS",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.596323,
      "lon": 88.4082206
    },
    {
      "Street": "KATLAKUNTA",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "GUDAVALLI",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "BURARI",
      "City": "NORTH DELHI",
      "lat": 28.7559747,
      "lon": 77.16538
    },
    {
      "Street": "NENNAL",
      "City": "MANCHERIAL",
      "lat": 19.0719945,
      "lon": 79.6300435
    },
    {
      "Street": "KORUMILLI",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "KERALA",
      "City": "KOZHIKODE",
      "lat": 11.2450558,
      "lon": 75.7754716
    },
    {
      "Street": "RAJASTHAN",
      "City": "RAJASTHAN",
      "lat": 24.8768151,
      "lon": 75.6294284
    },
    {
      "Street": "JARKAND",
      "City": "JARKAND",
      "lat": null,
      "lon": null
    },
    {
      "Street": "CACHAR",
      "City": "CACHAR",
      "lat": 24.7856047,
      "lon": 92.7955799
    },
    {
      "Street": "KERALA",
      "City": "PATHANAMTHITTA",
      "lat": 9.2780841,
      "lon": 76.9737443
    },
    {
      "Street": "ORISSA",
      "City": "JAJAPUR",
      "lat": 20.8277892,
      "lon": 86.3798353
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "UTTAR PRADESH",
      "lat": 26.8420914,
      "lon": 80.9478208
    },
    {
      "Street": "DEHRADUN",
      "City": "DEHRADUN",
      "lat": 30.3255646,
      "lon": 78.0436813
    },
    {
      "Street": "KANDHAMAL",
      "City": "KANDHAMAL",
      "lat": 20.4857331,
      "lon": 84.2247507
    },
    {
      "Street": "BIHAR",
      "City": "BIHAR",
      "lat": 25.1672903,
      "lon": 85.5502398
    },
    {
      "Street": "MUNAGANOORU",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "WADDEPALLY",
      "City": "JOGULAMBA GADWAL",
      "lat": 15.9389412,
      "lon": 77.8408288
    },
    {
      "Street": "TAMIL NADU",
      "City": "VELLORE",
      "lat": 12.9021849,
      "lon": 79.061104
    },
    {
      "Street": "MIRYALGUDA",
      "City": "MIRYALGUDA",
      "lat": 16.8722,
      "lon": 79.56247
    },
    {
      "Street": "ORISSA",
      "City": "KORAPUT",
      "lat": 18.7232023,
      "lon": 82.6100596
    },
    {
      "Street": "BAPATLA",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "TAMIL NADU",
      "City": "KANNIYAKUMARI",
      "lat": 8.3279814,
      "lon": 77.3541173
    },
    {
      "Street": "AGRAHARAM",
      "City": "GUNTUR",
      "lat": 16.3002221,
      "lon": 80.4240155
    },
    {
      "Street": "ORISSA",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.1643884,
      "lon": 85.6135673
    },
    {
      "Street": "SONAKHALI",
      "City": "WEST MIDNAPORE",
      "lat": 22.42114,
      "lon": 87.32257
    },
    {
      "Street": "JAIPUR.",
      "City": "JAIPUR.",
      "lat": 26.9154576,
      "lon": 75.8189817
    },
    {
      "Street": "MURSHIDABAD",
      "City": "MURSHIDABAD",
      "lat": 24.1745993,
      "lon": 88.2721335
    },
    {
      "Street": "PATHANAMTHITTA",
      "City": "PATHANAMTHITTA",
      "lat": 9.2655337,
      "lon": 76.7871514
    },
    {
      "Street": "GUMMAMPADU",
      "City": "WEST GODAVARI",
      "lat": 17,
      "lon": 81.16667
    },
    {
      "Street": "PERAVALI",
      "City": "WEST GODAVARI",
      "lat": 16.749847,
      "lon": 81.734411
    },
    {
      "Street": "PEDDAMPET",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "SINGANAMALA",
      "City": "ANANTAPUR",
      "lat": 14.8494334,
      "lon": 77.7410733
    },
    {
      "Street": "ANKIREDDIPALEM",
      "City": "GUNTUR",
      "lat": 16.2883618,
      "lon": 80.3915763
    },
    {
      "Street": "HARIYANA",
      "City": "FARIDABAD",
      "lat": 28.4031478,
      "lon": 77.3105561
    },
    {
      "Street": "VONTIMITTA",
      "City": "KADAPA",
      "lat": 14.3948294,
      "lon": 79.0218613
    },
    {
      "Street": "GAJWEL",
      "City": "GAJWEL",
      "lat": 17.8597645,
      "lon": 78.6677635
    },
    {
      "Street": "PEDAPAPPUR",
      "City": "ANANTAPUR",
      "lat": 14.6794,
      "lon": 77.59877
    },
    {
      "Street": "POCHAMPALLY",
      "City": "YADADRI BHUVANAGIRI",
      "lat": 17.3630941,
      "lon": 78.8228944
    },
    {
      "Street": "CHEEDIKADA",
      "City": "VISAKHAPATNAM",
      "lat": 17.927342,
      "lon": 82.8931162
    },
    {
      "Street": "DESHAIPET",
      "City": "WARANGAL (RURAL)",
      "lat": 18.0023237,
      "lon": 79.6136919
    },
    {
      "Street": "MAHARASHTRA",
      "City": "AHMEDNAGAR",
      "lat": 19.1627725,
      "lon": 74.8580243
    },
    {
      "Street": "GANNERVARAM",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "JAMMU TAWI",
      "City": "JAMMU",
      "lat": 32.7060401,
      "lon": 74.8799925
    },
    {
      "Street": "BHIMARAM",
      "City": "MANCHERIAL",
      "lat": 18.8488193,
      "lon": 79.6753889
    },
    {
      "Street": "ABHIRAMPUR",
      "City": "BARDHAMAN",
      "lat": 23.25572,
      "lon": 87.85691
    },
    {
      "Street": "KARIMPUR",
      "City": "NADIA",
      "lat": 23.9816034,
      "lon": 88.6296098
    },
    {
      "Street": "KATNI",
      "City": "KATNI",
      "lat": 23.8339621,
      "lon": 80.392456
    },
    {
      "Street": "MUDINEPALLI",
      "City": "KRISHNA",
      "lat": 16.3534884,
      "lon": 81.0767318
    },
    {
      "Street": "THULLUR",
      "City": "GUNTUR",
      "lat": 16.5187082,
      "lon": 80.495003
    },
    {
      "Street": "MOLKACHARLA",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "ATCHUTAPURAM",
      "City": "VIZIANAGARAM",
      "lat": 18.41102,
      "lon": 83.37677
    },
    {
      "Street": "MALDHAKAL",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "ROMPICHERLA",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "MATTEWADA",
      "City": "WARANGAL (URBAN)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "BETHOLU",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "AGIRIPALLE",
      "City": "KRISHNA",
      "lat": 16.68333,
      "lon": 80.65
    },
    {
      "Street": "MADANAPALLI",
      "City": "CHITTOOR",
      "lat": 12.8228649,
      "lon": 78.3705177
    },
    {
      "Street": "KANCHIPURAM",
      "City": "KANCHIPURAM",
      "lat": 12.836393,
      "lon": 79.7053304
    },
    {
      "Street": "PAPIREDDIPALLE",
      "City": "NELLORE",
      "lat": 14.08333,
      "lon": 79.58333
    },
    {
      "Street": "TIRUVANNAMALAI",
      "City": "TIRUVANNAMALAI",
      "lat": 12.2343228,
      "lon": 79.0761989
    },
    {
      "Street": "RAJGANJ",
      "City": "JALPALGURI",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MADHUBANI",
      "City": "MADHUBANI",
      "lat": 26.3488763,
      "lon": 86.0770181
    },
    {
      "Street": "DEWAS",
      "City": "DEWAS",
      "lat": 22.96363,
      "lon": 76.054867
    },
    {
      "Street": "WEST BENGAL",
      "City": "MALDA",
      "lat": 25.0057449,
      "lon": 88.1398483
    },
    {
      "Street": "SIWAN",
      "City": "SIWAN",
      "lat": 26.2184558,
      "lon": 84.3585062
    },
    {
      "Street": "GANDHAMGUDA",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "ALIJAPUR",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "BARUGUDEM",
      "City": "KHAMMAM",
      "lat": 17.2657034,
      "lon": 80.0771778
    },
    {
      "Street": "KARAMPUDI",
      "City": "GUNTUR",
      "lat": 16.29974,
      "lon": 80.45729
    },
    {
      "Street": "SRIGANGANAGAR",
      "City": "SRIGANGANAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MEDIKONDURU",
      "City": "GUNTUR",
      "lat": 16.346464,
      "lon": 80.3002
    },
    {
      "Street": "VANGARA",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "JEYPORE",
      "City": "KORAPUT",
      "lat": 18.8812875,
      "lon": 82.552768
    },
    {
      "Street": "KARANPUR",
      "City": "KARANPUR",
      "lat": 25.1486458,
      "lon": 87.726411
    },
    {
      "Street": "KAREDU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MUDHOLE",
      "City": "NIRMAL",
      "lat": 18.9761092,
      "lon": 77.9100425
    },
    {
      "Street": "YADAGIRIGUTTA",
      "City": "YADADRI",
      "lat": 17.5826847,
      "lon": 78.945891
    },
    {
      "Street": "SECUNDERABAD",
      "City": "SECUNDERABAD",
      "lat": 17.4359536,
      "lon": 78.5000501
    },
    {
      "Street": "MOTHKUR",
      "City": "YADADRI",
      "lat": 17.4278329,
      "lon": 79.2642694
    },
    {
      "Street": "GANGADHARA",
      "City": "KARIMNAGAR",
      "lat": 18.5888465,
      "lon": 79.0099528
    },
    {
      "Street": "BEJJANKI",
      "City": "SIDDIPET",
      "lat": 18.2526246,
      "lon": 79.0197873
    },
    {
      "Street": "KONDAPAK",
      "City": "SIDDIPET",
      "lat": 17.9909921,
      "lon": 78.8469397
    },
    {
      "Street": "KAREMPUDI",
      "City": "GUNTUR",
      "lat": 16.42919,
      "lon": 79.72167
    },
    {
      "Street": "PAPANNAPET",
      "City": "MEDAK",
      "lat": 18.0366896,
      "lon": 78.0886904
    },
    {
      "Street": "BACHANNAPET",
      "City": "JANGOAN",
      "lat": 17.7882751,
      "lon": 79.03394
    },
    {
      "Street": "MANTRALAYAM",
      "City": "KURNOOL",
      "lat": 15.9413643,
      "lon": 77.4236981
    },
    {
      "Street": "PINAPAKA",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.6252115,
      "lon": 80.7855471
    },
    {
      "Street": "MULUG",
      "City": "MULUGU",
      "lat": 18.1585442,
      "lon": 79.9482182
    },
    {
      "Street": "JAGDEVPUR",
      "City": "SIDDIPET",
      "lat": 17.7687104,
      "lon": 78.8082776
    },
    {
      "Street": "KONDAPAK",
      "City": "MEDAK",
      "lat": 17.974378,
      "lon": 78.8781466
    },
    {
      "Street": "MORTAD",
      "City": "NIZAMABAD",
      "lat": 18.8141464,
      "lon": 78.4644943
    },
    {
      "Street": "MANUGURU",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 17.9383442,
      "lon": 80.8179917
    },
    {
      "Street": "DENDULURU",
      "City": "WEST GODAVARI",
      "lat": 17,
      "lon": 81.16667
    },
    {
      "Street": "RAVULAPALEM",
      "City": "EAST GODAVARI",
      "lat": 16.7553523,
      "lon": 81.8357702
    },
    {
      "Street": "GHANPUR (STN)",
      "City": "WARANGAL (URBAN)",
      "lat": 19.83333,
      "lon": 79.75
    },
    {
      "Street": "MAKLOOR",
      "City": "NIZAMABAD",
      "lat": 18.7815117,
      "lon": 78.0986577
    },
    {
      "Street": "MACHILIPATNAM",
      "City": "KRISHNA",
      "lat": 16.1817369,
      "lon": 81.1348181
    },
    {
      "Street": "RAMAYAMPET",
      "City": "MEDAK",
      "lat": 18.1163712,
      "lon": 78.4307212
    },
    {
      "Street": "SAMBALPUR",
      "City": "SAMBALPUR",
      "lat": 21.4705391,
      "lon": 83.9761511
    },
    {
      "Street": "MIRYALGUDA",
      "City": "NALGONDA",
      "lat": 16.8702377,
      "lon": 79.5562492
    },
    {
      "Street": "BAYYARAM",
      "City": "MAHABUBABAD",
      "lat": 17.5758073,
      "lon": 80.106679
    },
    {
      "Street": "KAPILESWARA PURAM",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "CHERIAL",
      "City": "SIDDIPET",
      "lat": 17.9239547,
      "lon": 78.9690304
    },
    {
      "Street": "AURAD",
      "City": "BIDAR",
      "lat": 18.2548557,
      "lon": 77.4151663
    },
    {
      "Street": "BHATTIPROLU",
      "City": "GUNTUR",
      "lat": 16.0996333,
      "lon": 80.7824214
    },
    {
      "Street": "SHAHPURA RAJ",
      "City": "BHILWARA",
      "lat": 25.5,
      "lon": 74.75
    },
    {
      "Street": "BESTAVARIPETA",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BASAVAKALYAN",
      "City": "BIDAR",
      "lat": 17.871446,
      "lon": 76.9517496
    },
    {
      "Street": "GARLA",
      "City": "MAHABUBABAD",
      "lat": 17.4886507,
      "lon": 80.1423025
    },
    {
      "Street": "PARBHANI",
      "City": "PARBHANI",
      "lat": 19.2447104,
      "lon": 76.776084
    },
    {
      "Street": "THORRUR",
      "City": "MAHABUBABAD",
      "lat": 17.582996,
      "lon": 79.6589492
    },
    {
      "Street": "ILLANDAKUNTA",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "BAIREDDI PALLE",
      "City": "CHITTOOR",
      "lat": 13.41667,
      "lon": 79
    },
    {
      "Street": "DOULTABAD",
      "City": "SIDDIPET",
      "lat": 17.9601137,
      "lon": 78.5813356
    },
    {
      "Street": "PEDDAPALLY",
      "City": "KARIMNAGAR",
      "lat": 18.612709,
      "lon": 79.3795664
    },
    {
      "Street": "MOTAKONDUR",
      "City": "YADADRI",
      "lat": 17.5309185,
      "lon": 79.0756406
    },
    {
      "Street": "BHEEMGAL",
      "City": "NIZAMABAD",
      "lat": 18.7016214,
      "lon": 78.4480669
    },
    {
      "Street": "BENGAL ENAMEL",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.71,
      "lon": 88.7108
    },
    {
      "Street": "QUTHBULLAPUR",
      "City": "RANGA REDDY",
      "lat": 17.4903423,
      "lon": 78.4344919
    },
    {
      "Street": "TURKAPALLY",
      "City": "YADADRI",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BALLYGUNGE",
      "City": "KOLKATA",
      "lat": 22.5280337,
      "lon": 88.3659084
    },
    {
      "Street": "UDUMALAIPETTAI",
      "City": "TIRUPPUR",
      "lat": 10.5839,
      "lon": 77.25
    },
    {
      "Street": "BIBINAGAR",
      "City": "YADADRI",
      "lat": 17.4747737,
      "lon": 78.7963608
    },
    {
      "Street": "TANGUTUR",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SEC BAD",
      "City": "SECUNDERABAD",
      "lat": 17.4179557,
      "lon": 78.4911548
    },
    {
      "Street": "SRIRAMPUR",
      "City": "PEDDAPALLI",
      "lat": 18.4892335,
      "lon": 79.5274087
    },
    {
      "Street": "GADWEL",
      "City": "SIDDIPET",
      "lat": 18.10483,
      "lon": 78.84858
    },
    {
      "Street": "KONARAOPETA",
      "City": "RAJANNA SIRCILLA",
      "lat": 18.4810209,
      "lon": 78.689602
    },
    {
      "Street": "THALLADA",
      "City": "KHAMMAM",
      "lat": 17.1977284,
      "lon": 80.4487822
    },
    {
      "Street": "KAVALI",
      "City": "NELLORE",
      "lat": 14.9135846,
      "lon": 79.9926902
    },
    {
      "Street": "KARLAPALEM",
      "City": "GUNTUR",
      "lat": 15.93729,
      "lon": 80.55178
    },
    {
      "Street": "METPALLY",
      "City": "KARIMNAGAR",
      "lat": 18.290412,
      "lon": 79.369698
    },
    {
      "Street": "GAJWEL",
      "City": "MEDAK",
      "lat": 17.84085,
      "lon": 78.6876681
    },
    {
      "Street": "LINGALA GHANPUR",
      "City": "JANGAON",
      "lat": 17.6573065,
      "lon": 79.1974125
    },
    {
      "Street": "BALUGAON",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.18268,
      "lon": 85.61629
    },
    {
      "Street": "KHANAPUR",
      "City": "WARANGAL (RURAL)",
      "lat": 17.9249152,
      "lon": 79.887821
    },
    {
      "Street": "NAGARAM",
      "City": "GUNTUR",
      "lat": 16.5008004,
      "lon": 80.6053949
    },
    {
      "Street": "CHILKUR",
      "City": "SURYAPET",
      "lat": 16.9651657,
      "lon": 79.8586073
    },
    {
      "Street": "NIZAMPATNAM",
      "City": "GUNTUR",
      "lat": 16.0242831,
      "lon": 80.5358381
    },
    {
      "Street": "FARIDABAD CITY",
      "City": "FARIDABAD",
      "lat": 28.3926973,
      "lon": 77.3041452
    },
    {
      "Street": "GEESUGONDA",
      "City": "WARANGAL (RURAL)",
      "lat": 17.9631763,
      "lon": 79.6963142
    },
    {
      "Street": "METPALLE",
      "City": "JAGTIAL",
      "lat": 18.79473,
      "lon": 78.91661
    },
    {
      "Street": "THALLAREVU",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "SHANKARAMPET (R)",
      "City": "MEDAK",
      "lat": 17.9930448,
      "lon": 78.3847932
    },
    {
      "Street": "JAJAPUR",
      "City": "JAJAPUR",
      "lat": 20.8522696,
      "lon": 86.3385714
    },
    {
      "Street": "NEKKONDA",
      "City": "WARANGAL (RURAL)",
      "lat": 17.796417,
      "lon": 79.805957
    },
    {
      "Street": "KESAMUDRAM",
      "City": "MAHABUBABAD",
      "lat": 17.6903072,
      "lon": 79.8971365
    },
    {
      "Street": "PUNGANUR",
      "City": "CHITTOOR",
      "lat": 13.4042835,
      "lon": 78.5567022
    },
    {
      "Street": "NANDIGAMA",
      "City": "KRISHNA",
      "lat": 16.3001799,
      "lon": 81.152299
    },
    {
      "Street": "KHOWAI",
      "City": "KHOWAI",
      "lat": 24.0467383,
      "lon": 91.6232095
    },
    {
      "Street": "KORISAPADU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BHARATPUR",
      "City": "BARDHAMAN",
      "lat": 23.4079274,
      "lon": 87.4473439
    },
    {
      "Street": "ASANSOL COURT",
      "City": "BARDHAMAN",
      "lat": 23.25572,
      "lon": 87.85691
    },
    {
      "Street": "ROORKEE",
      "City": "HARIDWAR",
      "lat": 29.8693496,
      "lon": 77.8902124
    },
    {
      "Street": "DEGLUR",
      "City": "NANDED",
      "lat": 18.4677555,
      "lon": 77.4998835
    },
    {
      "Street": "SIRIKONDA",
      "City": "NIZAMABAD",
      "lat": 18.5474901,
      "lon": 78.4833857
    },
    {
      "Street": "KANIGIRI",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PENPAHAD",
      "City": "SURYAPET",
      "lat": 17.0258164,
      "lon": 79.682883
    },
    {
      "Street": "NARKETPALLY",
      "City": "NALGONDA",
      "lat": 17.2041231,
      "lon": 79.1939724
    },
    {
      "Street": "GURRAMPODE",
      "City": "NALGONDA",
      "lat": 16.8653748,
      "lon": 79.1097379
    },
    {
      "Street": "MUDIGONDA",
      "City": "KHAMMAM",
      "lat": 17.1820184,
      "lon": 80.0920033
    },
    {
      "Street": "KUDLIGI",
      "City": "BELLARY",
      "lat": 14.90467,
      "lon": 76.38441
    },
    {
      "Street": "MOOSARAMBAGH",
      "City": "HYDERABAD",
      "lat": 17.3743532,
      "lon": 78.5160835
    },
    {
      "Street": "KATTANGUR",
      "City": "NALGONDA",
      "lat": 17.1600637,
      "lon": 79.3119979
    },
    {
      "Street": "KALASAPADU",
      "City": "KADAPA",
      "lat": 15.1057457,
      "lon": 78.9433638
    },
    {
      "Street": "ANUMULA (HALIYA);",
      "City": "NALGONDA",
      "lat": 16.8237178,
      "lon": 79.2823065
    },
    {
      "Street": "CHANDUR",
      "City": "NALGONDA",
      "lat": 16.9794401,
      "lon": 79.0584117
    },
    {
      "Street": "TRIPURANTHAKAM",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MAHABUBABNAGAR",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "ALAMPUR",
      "City": "GADWAL",
      "lat": 15.8799583,
      "lon": 78.1350753
    },
    {
      "Street": "ATMAKUR",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SURYAPET",
      "City": "NALGONDA",
      "lat": 17.14176,
      "lon": 79.60691
    },
    {
      "Street": "MUNUGODE",
      "City": "NALGONDA",
      "lat": 17.0795326,
      "lon": 79.0766713
    },
    {
      "Street": "WANAPARTHY",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "USHAGRAM",
      "City": "BARDHAMAN",
      "lat": 23.25572,
      "lon": 87.85691
    },
    {
      "Street": "BELGHARIA",
      "City": "NORTH 24 PARGANAS",
      "lat": 22.6656371,
      "lon": 88.3980035
    },
    {
      "Street": "ANEKAL",
      "City": "BANGALORE",
      "lat": 12.97194,
      "lon": 77.59369
    },
    {
      "Street": "DEOGHAR",
      "City": "DEOGHAR",
      "lat": 24.4898318,
      "lon": 86.6990182
    },
    {
      "Street": "PENU KONDA",
      "City": "ANANTAPUR",
      "lat": 14.6794,
      "lon": 77.59877
    },
    {
      "Street": "SRIRAMPUR",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "NASHIK",
      "City": "NASHIK",
      "lat": 20.0112475,
      "lon": 73.7902364
    },
    {
      "Street": "PUTTUR",
      "City": "CHITTOOR",
      "lat": 13.4398525,
      "lon": 79.5527833
    },
    {
      "Street": "PALAKOL",
      "City": "WEST GODAVARI",
      "lat": 16.5151124,
      "lon": 81.7278654
    },
    {
      "Street": "MAHABOOBNAGAR",
      "City": "MAHABUBNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "ATMAKUR",
      "City": "ANANTAPUR",
      "lat": 14.6101628,
      "lon": 77.4287532
    },
    {
      "Street": "BHEL",
      "City": "HARIDWAR",
      "lat": 29.9386101,
      "lon": 78.1122779
    },
    {
      "Street": "MUTHUKUR",
      "City": "NELLORE",
      "lat": 14.2844219,
      "lon": 80.09304
    },
    {
      "Street": "ADDANKI",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "DARBHANGA",
      "City": "DARBHANGA",
      "lat": 26.156999,
      "lon": 85.8995065
    },
    {
      "Street": "JAGITYAL",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "KODAVALUR",
      "City": "NELLORE",
      "lat": 14.5917757,
      "lon": 79.9854475
    },
    {
      "Street": "DHARWAD",
      "City": "DHARWARD",
      "lat": null,
      "lon": null
    },
    {
      "Street": "KURUPAM",
      "City": "VIZIANAGARAM",
      "lat": 18.86644,
      "lon": 83.55204
    },
    {
      "Street": "TIMMAPUR (LMD COLONY",
      "City": "KARIMNAGAR",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PEDDAVADUGUR",
      "City": "ANANTAPUR",
      "lat": 15.0060336,
      "lon": 77.7349988
    },
    {
      "Street": "PURBI SINGHBHUM",
      "City": "EAST SINGHBHUM",
      "lat": 22.5,
      "lon": 85.5
    },
    {
      "Street": "SIDDIPET RURAL",
      "City": "SIDDIPET",
      "lat": 18.196707,
      "lon": 78.7493561
    },
    {
      "Street": "MAREDPALLE",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "BANKIPORE",
      "City": "PATNA",
      "lat": 25.6214221,
      "lon": 85.1398427
    },
    {
      "Street": "JAINAD",
      "City": "ADILABAD",
      "lat": 19.7357379,
      "lon": 78.6424355
    },
    {
      "Street": "CHINTALAPUDI",
      "City": "WEST GODAVARI",
      "lat": 17.06835,
      "lon": 80.98295
    },
    {
      "Street": "ADDATEEGALA",
      "City": "EAST GODAVARI",
      "lat": 17.480709,
      "lon": 82.022574
    },
    {
      "Street": "GUWHATI",
      "City": "KAMRUP METROPOLITAN",
      "lat": 26.09003,
      "lon": 91.8216
    },
    {
      "Street": "VEERAGHATTAM",
      "City": "SRIKAKULAM",
      "lat": 18.6374966,
      "lon": 83.6753977
    },
    {
      "Street": "ORISSA",
      "City": "ORISSA",
      "lat": 20.4647134,
      "lon": 85.8587015
    },
    {
      "Street": "BELGAUM",
      "City": "BELGAUM",
      "lat": 15.8593476,
      "lon": 74.6142405
    },
    {
      "Street": "CHENNUR",
      "City": "MANCHERIAL",
      "lat": 18.8555246,
      "lon": 79.7904908
    },
    {
      "Street": "BIRKOOR",
      "City": "KAMAREDDY",
      "lat": 18.4646279,
      "lon": 77.7999286
    },
    {
      "Street": "MAHARASHTRA",
      "City": "JALGAON",
      "lat": 20.8428826,
      "lon": 75.5261246
    },
    {
      "Street": "KAMALA PURAM",
      "City": "KADAPA",
      "lat": 14.4775,
      "lon": 78.82353
    },
    {
      "Street": "UTTAR PRADESH",
      "City": "GAUTAM BUDDHA NAGAR",
      "lat": 28.3695198,
      "lon": 77.5970893
    },
    {
      "Street": "EDAPALLI",
      "City": "NIZAMABAD",
      "lat": 18.67154,
      "lon": 78.0988
    },
    {
      "Street": "SILIGURI",
      "City": "DARJEELING",
      "lat": 26.7164127,
      "lon": 88.4309916
    },
    {
      "Street": "SIDHOUT",
      "City": "KADAPA",
      "lat": 14.5488131,
      "lon": 79.0262577
    },
    {
      "Street": "RAXAUL",
      "City": "EAST CHAMPARAN",
      "lat": 26.9868738,
      "lon": 84.8447219
    },
    {
      "Street": "BIKANER",
      "City": "BIKANER",
      "lat": 28.0159286,
      "lon": 73.3171367
    },
    {
      "Street": "CHICALIM",
      "City": "SOUTH GOA",
      "lat": 15.3918926,
      "lon": 73.8344664
    },
    {
      "Street": "NIRMAL_RURAL",
      "City": "NIRMAL",
      "lat": 19.1160966,
      "lon": 78.3883713
    },
    {
      "Street": "KOTARI",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.18268,
      "lon": 85.61629
    },
    {
      "Street": "WEST MIDNAPORE",
      "City": "WEST MIDNAPORE",
      "lat": 22.4207025,
      "lon": 87.3269963
    },
    {
      "Street": "SAVALYAPURAM",
      "City": "GUNTUR",
      "lat": 16.1273659,
      "lon": 79.867195
    },
    {
      "Street": "KHAMMAM",
      "City": "MANCHERIAL",
      "lat": 18.87074,
      "lon": 79.42863
    },
    {
      "Street": "NIZAMPUR",
      "City": "SANGAREDDY",
      "lat": 17.6797825,
      "lon": 78.0016207
    },
    {
      "Street": "MEDCHAL",
      "City": "HYDERABAD",
      "lat": 17.4930644,
      "lon": 78.3914079
    },
    {
      "Street": "PATUSARI",
      "City": "JHUNJHUNU",
      "lat": 28.05036,
      "lon": 75.45329
    },
    {
      "Street": "KOWDIPALLE",
      "City": "MEDAK",
      "lat": 17.9005108,
      "lon": 78.2064706
    },
    {
      "Street": "VENKATAPURAM",
      "City": "KHAMMAM",
      "lat": 16.8502396,
      "lon": 80.5497505
    },
    {
      "Street": "PUDUCHERRY",
      "City": "PUDUCHERRY",
      "lat": 11.9340568,
      "lon": 79.8306447
    },
    {
      "Street": "DAKKILI",
      "City": "NELLORE",
      "lat": 14.1107237,
      "lon": 79.5505698
    },
    {
      "Street": "ROHTAS",
      "City": "ROHTAS",
      "lat": 24.6723487,
      "lon": 83.920904
    },
    {
      "Street": "CHHATTISGARH",
      "City": "BILASPUR",
      "lat": 22.1638486,
      "lon": 82.1365923
    },
    {
      "Street": "BALAYAPALLI",
      "City": "NELLORE",
      "lat": 14.0643401,
      "lon": 79.6862273
    },
    {
      "Street": "RAMANAKKAPETA",
      "City": "EAST GODAVARI",
      "lat": 17.83333,
      "lon": 81.83333
    },
    {
      "Street": "RAMABHADRA PURAM",
      "City": "VIZIANAGARAM",
      "lat": 18.41102,
      "lon": 83.37677
    },
    {
      "Street": "MADHYA PRADESH",
      "City": "REWA",
      "lat": 24.7560846,
      "lon": 81.3810574
    },
    {
      "Street": "KERALA",
      "City": "THIRUVANANTHAPURAM",
      "lat": 8.4882267,
      "lon": 76.947551
    },
    {
      "Street": "UPPARAPALEM",
      "City": "GUNTUR",
      "lat": 16.0811972,
      "lon": 80.5008602
    },
    {
      "Street": "GANGUVARI SINGADAM",
      "City": "SRIKAKULAM",
      "lat": 18.5,
      "lon": 84
    },
    {
      "Street": "ALAMURU",
      "City": "EAST GODAVARI",
      "lat": 16.78333,
      "lon": 81.9
    },
    {
      "Street": "RAISEN",
      "City": "RAISEN",
      "lat": 23.25,
      "lon": 78.083333
    },
    {
      "Street": "VATTICHERUKURU",
      "City": "GUNTUR",
      "lat": 16.1819319,
      "lon": 80.4480743
    },
    {
      "Street": "HOSPET",
      "City": "BELLARY",
      "lat": 15.2689139,
      "lon": 76.4049127
    },
    {
      "Street": "DHARPALLY",
      "City": "NIZAMABAD",
      "lat": 18.5791422,
      "lon": 78.3600283
    },
    {
      "Street": "SECUNDERABAD",
      "City": "0",
      "lat": 17.4337246,
      "lon": 78.5006827
    },
    {
      "Street": "MEDCHAL",
      "City": "RANGA REDDY",
      "lat": 17.6224676,
      "lon": 78.5269763
    },
    {
      "Street": "PALAKONDA",
      "City": "SRIKAKULAM",
      "lat": 18.8022859,
      "lon": 83.9437704
    },
    {
      "Street": "NALLABELLI",
      "City": "WARANGAL (RURAL)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "KULCHARAM",
      "City": "MEDAK",
      "lat": 17.9552947,
      "lon": 78.1984351
    },
    {
      "Street": "SRI SAILAM",
      "City": "KURNOOL",
      "lat": 15.58333,
      "lon": 78.33333
    },
    {
      "Street": "KARAPA",
      "City": "EAST GODAVARI",
      "lat": 16.89914,
      "lon": 82.167114
    },
    {
      "Street": "GUNDALA",
      "City": "JANGOAN",
      "lat": null,
      "lon": null
    },
    {
      "Street": "ANDOLE",
      "City": "SANGAREDDY",
      "lat": 17.8150925,
      "lon": 78.0751839
    },
    {
      "Street": "TEKUMATLA",
      "City": "JAYASHANKAR",
      "lat": 18.3845832,
      "lon": 79.6327257
    },
    {
      "Street": "NARSIMHULAPET",
      "City": "MAHABUBABAD",
      "lat": 17.5101795,
      "lon": 79.8047304
    },
    {
      "Street": "MANDAMARRI",
      "City": "MANCHERIAL",
      "lat": 18.9541567,
      "lon": 79.4877933
    },
    {
      "Street": "BHOPALPATTNAM",
      "City": "BIJAPUR",
      "lat": 19.0000057,
      "lon": 80.403874
    },
    {
      "Street": "VEMULAPALLY",
      "City": "NALGONDA",
      "lat": 16.9285292,
      "lon": 79.5297288
    },
    {
      "Street": "REPALLE",
      "City": "GUNTUR",
      "lat": 16.0639775,
      "lon": 80.5565975
    },
    {
      "Street": "DEVADURGA",
      "City": "RAICHUR",
      "lat": 16.4210218,
      "lon": 76.9330038
    },
    {
      "Street": "NUZVID",
      "City": "KRISHNA",
      "lat": 16.6501445,
      "lon": 80.9622511
    },
    {
      "Street": "KUMBAKONAM",
      "City": "THANJAVUR",
      "lat": 10.9604108,
      "lon": 79.3820861
    },
    {
      "Street": "JHALAWAR",
      "City": "JHALAWAR",
      "lat": 24.5931704,
      "lon": 76.1664528
    },
    {
      "Street": "PITHAPURAM",
      "City": "EAST GODAVARI",
      "lat": 17.1159034,
      "lon": 82.2582448
    },
    {
      "Street": "DUGGONDI",
      "City": "WARANGAL (RURAL)",
      "lat": 18.0206552,
      "lon": 79.8065154
    },
    {
      "Street": "MADANAPALLE",
      "City": "CHITTOOR",
      "lat": 13.3165349,
      "lon": 78.5699429
    },
    {
      "Street": "KADIRI",
      "City": "ANANTAPUR",
      "lat": 14.6765166,
      "lon": 77.6051064
    },
    {
      "Street": "PONDICHERRY",
      "City": "PUDUCHERRY",
      "lat": 11.9340568,
      "lon": 79.8306447
    },
    {
      "Street": "NERADIGONDA",
      "City": "ADILABAD",
      "lat": 19.2847998,
      "lon": 78.4245148
    },
    {
      "Street": "ULHASNAGAR",
      "City": "THANE",
      "lat": 19.2236329,
      "lon": 73.1671515
    },
    {
      "Street": "SADASIVPET",
      "City": "SANGAREDDY",
      "lat": 17.6211902,
      "lon": 77.9503264
    },
    {
      "Street": "BHEEMADEVARPALLE",
      "City": "WARANGAL (URBAN)",
      "lat": 18,
      "lon": 79.83333
    },
    {
      "Street": "UDGIR",
      "City": "LATUR",
      "lat": 18.3921349,
      "lon": 77.1196118
    },
    {
      "Street": "VANGOOR",
      "City": "HYDERABAD",
      "lat": 17.38405,
      "lon": 78.45636
    },
    {
      "Street": "BANTUMILLI",
      "City": "KRISHNA",
      "lat": 16.3705818,
      "lon": 81.2724702
    },
    {
      "Street": "BHIWANDI",
      "City": "THANE",
      "lat": 19.3025562,
      "lon": 73.0588072
    },
    {
      "Street": "CUMBUM",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "CHERLA",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": 18.080054,
      "lon": 80.8255624
    },
    {
      "Street": "BHADRADRI",
      "City": "BHADRADRI",
      "lat": 18.0285467,
      "lon": 80.7388511
    },
    {
      "Street": "BOKARO",
      "City": "BOKARO",
      "lat": 23.6544338,
      "lon": 86.1456444
    },
    {
      "Street": "DEVARUPPULA",
      "City": "JANGOAN",
      "lat": 17.5486512,
      "lon": 79.3590183
    },
    {
      "Street": "YACHARAM",
      "City": "RANGA REDDY",
      "lat": 17.0446138,
      "lon": 78.6646143
    },
    {
      "Street": "UMARIA",
      "City": "UMARIA",
      "lat": 23.5230597,
      "lon": 80.8226567
    },
    {
      "Street": "MANAKONDUR",
      "City": "KARIMNAGAR",
      "lat": 18.4013037,
      "lon": 79.1859734
    },
    {
      "Street": "RAJAMPET",
      "City": "KAMAREDDY",
      "lat": 18.2629239,
      "lon": 78.3357787
    },
    {
      "Street": "CHENNARAOPET",
      "City": "WARANGAL (RURAL)",
      "lat": 17.8698344,
      "lon": 79.8623939
    },
    {
      "Street": "MALKHACHAK",
      "City": "SARAN",
      "lat": 25.91667,
      "lon": 84.75
    },
    {
      "Street": "PEDAPALLI",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "PATHA PATNAM",
      "City": "SRIKAKULAM",
      "lat": 18.5,
      "lon": 84
    },
    {
      "Street": "TENALI",
      "City": "GUNTUR",
      "lat": 16.2377735,
      "lon": 80.6464219
    },
    {
      "Street": "NANGNOOR",
      "City": "SIDDIPET",
      "lat": 18.0720842,
      "lon": 79.0274816
    },
    {
      "Street": "PENUGANCHIPROLU",
      "City": "KRISHNA",
      "lat": 16.9083333,
      "lon": 80.2378812
    },
    {
      "Street": "DHARMAPURI",
      "City": "JAGTIAL",
      "lat": 18.9492756,
      "lon": 79.0954665
    },
    {
      "Street": "KOTHAGUDEM",
      "City": "BHADRADRI",
      "lat": 17.5512916,
      "lon": 80.6144535
    },
    {
      "Street": "BELLURI",
      "City": "ADILABAD",
      "lat": 19.7062974,
      "lon": 78.5480121
    },
    {
      "Street": "BICHKUNDA",
      "City": "KAMAREDDY",
      "lat": 18.401589,
      "lon": 77.7077969
    },
    {
      "Street": "TUPRAN",
      "City": "MEDAK",
      "lat": 17.8406731,
      "lon": 78.4777406
    },
    {
      "Street": "SRIKALAHASTI",
      "City": "CHITTOOR",
      "lat": 13.7466555,
      "lon": 79.7123243
    },
    {
      "Street": "DAHEGAON",
      "City": "KOMRAM BHEEM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SIRCILLA",
      "City": "RAJANNA",
      "lat": 18.3897573,
      "lon": 78.8085973
    },
    {
      "Street": "GARDANIBAGH",
      "City": "PATNA",
      "lat": 25.5953536,
      "lon": 85.1164632
    },
    {
      "Street": "ODELA",
      "City": "PEDDAPALLI",
      "lat": 18.4543213,
      "lon": 79.4472776
    },
    {
      "Street": "ACHALPUR",
      "City": "AMRAVATI",
      "lat": 21.2407925,
      "lon": 77.427797
    },
    {
      "Street": "SIRSILLA",
      "City": "RAJANNA",
      "lat": 18.3897573,
      "lon": 78.8085973
    },
    {
      "Street": "GIDDALURU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "VUYYURU",
      "City": "KRISHNA",
      "lat": 16.3638021,
      "lon": 80.8427241
    },
    {
      "Street": "KODURU",
      "City": "KADAPA",
      "lat": 14.873783,
      "lon": 78.1050974
    },
    {
      "Street": "AURANGABAD",
      "City": "AURANGABAD",
      "lat": 19.8597998,
      "lon": 75.3114008
    },
    {
      "Street": "VAYALPAD",
      "City": "CHITTOOR",
      "lat": 13.63732,
      "lon": 78.62991
    },
    {
      "Street": "NARAYANAPET",
      "City": "NARAYANPET",
      "lat": 18.7369273,
      "lon": 78.2569907
    },
    {
      "Street": "SIRPURKAGAZNGR",
      "City": "ADILABAD",
      "lat": 19.67203,
      "lon": 78.5359
    },
    {
      "Street": "KODUMUR",
      "City": "KURNOOL",
      "lat": 15.6694267,
      "lon": 77.8743657
    },
    {
      "Street": "DEVARUPPULA",
      "City": "JANGAON",
      "lat": 17.5472145,
      "lon": 79.3569946
    },
    {
      "Street": "VETAPALEM",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MAKTHAL",
      "City": "NARAYANPET",
      "lat": 16.5010823,
      "lon": 77.5133174
    },
    {
      "Street": "SHAIKPET",
      "City": "HYDERABAD",
      "lat": 17.4057955,
      "lon": 78.4006536
    },
    {
      "Street": "KORBA",
      "City": "KORBA",
      "lat": 36.5728862,
      "lon": 10.857624
    },
    {
      "Street": "KOHIR",
      "City": "SANGAREDDY",
      "lat": 17.5996678,
      "lon": 77.7169218
    },
    {
      "Street": "KANEKAL",
      "City": "ANANTAPUR",
      "lat": 14.8164787,
      "lon": 77.0710806
    },
    {
      "Street": "DACHEPALLI",
      "City": "GUNTUR",
      "lat": 16.5951535,
      "lon": 79.7380878
    },
    {
      "Street": "HAJIPUR",
      "City": "MANCHERIAL",
      "lat": 18.8660747,
      "lon": 79.3055807
    },
    {
      "Street": "CHINAGANJAM",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "SURAT",
      "City": "SURAT",
      "lat": 21.2094892,
      "lon": 72.8317058
    },
    {
      "Street": "HINDUPUR",
      "City": "ANANTAPUR",
      "lat": 13.8328005,
      "lon": 77.4919044
    },
    {
      "Street": "VEERULLAPADU",
      "City": "KRISHNA",
      "lat": 16.66667,
      "lon": 81
    },
    {
      "Street": "KHANDAGIRI",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.18268,
      "lon": 85.61629
    },
    {
      "Street": "HAVELIGHANPUR",
      "City": "MEDAK",
      "lat": 18.0853527,
      "lon": 78.2621819
    },
    {
      "Street": "NANDIGAMA",
      "City": "RANGA REDDY",
      "lat": 17.1191265,
      "lon": 78.2559744
    },
    {
      "Street": "ZAHEERABAD",
      "City": "SANGAREDDY",
      "lat": 17.679403,
      "lon": 77.6153076
    },
    {
      "Street": "BANSWADA",
      "City": "NIZAMABAD",
      "lat": 18.3806583,
      "lon": 77.8767653
    },
    {
      "Street": "UPUNUNTHALA",
      "City": "NAGARKURNOOL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "ATMAKUR.",
      "City": "KURNOOL",
      "lat": 15.88109,
      "lon": 78.58704
    },
    {
      "Street": "VEMSOOR",
      "City": "KHAMMAM",
      "lat": 17.1282763,
      "lon": 80.7901855
    },
    {
      "Street": "KODAD",
      "City": "NALGONDA",
      "lat": 16.9957665,
      "lon": 79.9568774
    },
    {
      "Street": "SOLAPUR",
      "City": "SOLAPUR",
      "lat": 17.6699734,
      "lon": 75.9008118
    },
    {
      "Street": "GUNDALA",
      "City": "NALGONDA",
      "lat": 17.16667,
      "lon": 79.5
    },
    {
      "Street": "NARAYANAPUR",
      "City": "YADADRI",
      "lat": 17.1606458,
      "lon": 78.8847744
    },
    {
      "Street": "YAMJAL",
      "City": "RANGA REDDY",
      "lat": 17.2703677,
      "lon": 78.5774198
    },
    {
      "Street": "SILIGURI",
      "City": "SILIGURI",
      "lat": 26.7237854,
      "lon": 88.4137127
    },
    {
      "Street": "GAJUWAKA",
      "City": "VISAKHAPATNAM",
      "lat": 17.6813983,
      "lon": 83.2130062
    },
    {
      "Street": "JATANI",
      "City": "KHURDA (KHORDHA)",
      "lat": 20.1641699,
      "lon": 85.6988547
    },
    {
      "Street": "MANOPAD",
      "City": "GADWAL",
      "lat": 15.9934721,
      "lon": 77.9421386
    },
    {
      "Street": "JALANDHAR",
      "City": "JALANDHAR",
      "lat": 31.3323762,
      "lon": 75.576889
    },
    {
      "Street": "PIDUGURALLA",
      "City": "GUNTUR",
      "lat": 16.4798487,
      "lon": 79.8738542
    },
    {
      "Street": "SANTHAMAGULURU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "NARANGI",
      "City": "KAMRUP",
      "lat": 26.182101,
      "lon": 91.8333811
    },
    {
      "Street": "PATNA CITY",
      "City": "PATNA",
      "lat": 25.5859403,
      "lon": 85.2306381
    },
    {
      "Street": "SHORAPUR",
      "City": "YADGIR",
      "lat": 16.5476954,
      "lon": 76.7379578
    },
    {
      "Street": "MUSTABAD",
      "City": "KARIMNAGAR",
      "lat": 18.43915,
      "lon": 79.12856
    },
    {
      "Street": "HISAR",
      "City": "HISAR",
      "lat": 29.1562688,
      "lon": 75.7292303
    },
    {
      "Street": "DUILLYA",
      "City": "HOWRAH",
      "lat": 22.57688,
      "lon": 88.31857
    },
    {
      "Street": "NAWADA KUTCHERY",
      "City": "NAWADA",
      "lat": 24.8867,
      "lon": 85.54364
    },
    {
      "Street": "MYLAVARAM",
      "City": "KADAPA",
      "lat": 14.9149445,
      "lon": 78.2921393
    },
    {
      "Street": "HYDERABAD",
      "City": "0",
      "lat": 17.360589,
      "lon": 78.4740613
    },
    {
      "Street": "RENIGUNTA",
      "City": "CHITTOOR",
      "lat": 13.6415767,
      "lon": 79.501955
    },
    {
      "Street": "RATAUPURMAIKPUR",
      "City": "BHAGALPUR",
      "lat": 25.24446,
      "lon": 86.97183
    },
    {
      "Street": "KHAGARIA MUKHYA DAKGHAR",
      "City": "KHAGARIA",
      "lat": 25.51049,
      "lon": 86.47627
    },
    {
      "Street": "COOCH BEHAR",
      "City": "COOCH BEHAR",
      "lat": 26.3223696,
      "lon": 89.4592445
    },
    {
      "Street": "KALIDINDI",
      "City": "KRISHNA",
      "lat": 16.505681,
      "lon": 81.293499
    },
    {
      "Street": "KORIYA",
      "City": "KORIYA",
      "lat": 42.6547032,
      "lon": 23.2218615
    },
    {
      "Street": "BELLAMPALLI",
      "City": "MANCHERIAL",
      "lat": 19.0639032,
      "lon": 79.4873121
    },
    {
      "Street": "KOVUR",
      "City": "NELLORE",
      "lat": 14.5036085,
      "lon": 79.9868404
    },
    {
      "Street": "YELLAREDDY",
      "City": "KAMAREDDY",
      "lat": 18.2136013,
      "lon": 78.0323875
    },
    {
      "Street": "VARANASI",
      "City": "VARANASI",
      "lat": 25.3356491,
      "lon": 83.0076292
    },
    {
      "Street": "MYDUKUR",
      "City": "KADAPA",
      "lat": 14.7358132,
      "lon": 78.7258905
    },
    {
      "Street": "BOKAKHAT",
      "City": "GOLAGHAT",
      "lat": 26.6935737,
      "lon": 93.5453657
    },
    {
      "Street": "HIMAYATHNAGAR",
      "City": "HYDERABAD",
      "lat": 17.4022136,
      "lon": 78.4836242
    },
    {
      "Street": "BHALKI",
      "City": "BIDAR",
      "lat": 18.0484556,
      "lon": 77.2176221
    },
    {
      "Street": "BURGAMPADU",
      "City": "BHADRADRI KOTHAGUDEM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "PUNE",
      "City": "PUNE",
      "lat": null,
      "lon": null
    },
    {
      "Street": "RACHERLA",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "MADDIPADU",
      "City": "PRAKASHAM",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BHILWARA",
      "City": "BHILWARA",
      "lat": null,
      "lon": null
    },
    {
      "Street": "BASAR",
      "City": "NIRMAL",
      "lat": null,
      "lon": null
    },
    {
      "Street": "TIRUCHIRAPPALLI",
      "City": "TIRUCHIRAPPALLI",
      "lat": null,
      "lon": null
    }
  ]
  // Add markers to the map
  const validLocations = uniqueLocations.filter(location => location.lat != null && location.lon != null);

  // Add markers to the map
  validLocations.forEach(location => {
    const marker = L.marker([location.lat, location.lon])
      .bindPopup(`<b>${location.Street}</b><br>${location.City}`)
      .on('mouseover', function(e) {
        this.openPopup();
      })
      .on('mouseout', function(e) {
        this.closePopup();
      });
  
    markers.addLayer(marker);
  });
  
  // Add marker cluster group to the map
  map.addLayer(markers);