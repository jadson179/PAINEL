exports.seed = function (knex) {
  return knex('Rooms').del()
    .then(function () {
      return knex('Rooms').insert([
        { RoomID: 1, NumberRoom: "101", NameImage: "brasil.png" },
        { RoomID: 2, NumberRoom: "102", NameImage: "brasil.png" },
        { RoomID: 3, NumberRoom: "103", NameImage: "brasil.png" },
        { RoomID: 4, NumberRoom: "104", NameImage: "brasil.png" },
        { RoomID: 5, NumberRoom: "105", NameImage: "brasil.png" },
        { RoomID: 6, NumberRoom: "106", NameImage: "brasil.png" },
        { RoomID: 7, NumberRoom: "107", NameImage: "brasil.png" },
        { RoomID: 8, NumberRoom: "108", NameImage: "brasil.png" },
        { RoomID: 9, NumberRoom: "109", NameImage: "brasil.png" },
        { RoomID: 10, NumberRoom: "110", NameImage: "brasil.png" },
        { RoomID: 11, NumberRoom: "111", NameImage: "brasil.png" },
        { RoomID: 12, NumberRoom: "112", NameImage: "brasil.png" },
        { RoomID: 13, NumberRoom: "201", NameImage: "brasil.png" },
        { RoomID: 14, NumberRoom: "202", NameImage: "brasil.png" },
        { RoomID: 15, NumberRoom: "203", NameImage: "brasil.png" },
        { RoomID: 16, NumberRoom: "204", NameImage: "brasil.png" },
        { RoomID: 17, NumberRoom: "205", NameImage: "brasil.png" },
        { RoomID: 18, NumberRoom: "206", NameImage: "brasil.png" },
        { RoomID: 19, NumberRoom: "207", NameImage: "brasil.png" },
        { RoomID: 20, NumberRoom: "208", NameImage: "brasil.png" },
        { RoomID: 21, NumberRoom: "209", NameImage: "brasil.png" },
        { RoomID: 22, NumberRoom: "210", NameImage: "brasil.png" },
        { RoomID: 23, NumberRoom: "211", NameImage: "brasil.png" },
        { RoomID: 24, NumberRoom: "212", NameImage: "brasil.png" },
        { RoomID: 25, NumberRoom: "301", NameImage: "brasil.png" },
        { RoomID: 26, NumberRoom: "302", NameImage: "brasil.png" },
        { RoomID: 27, NumberRoom: "303", NameImage: "brasil.png" },
        { RoomID: 28, NumberRoom: "304", NameImage: "brasil.png" },
        { RoomID: 29, NumberRoom: "305", NameImage: "brasil.png" },
        { RoomID: 30, NumberRoom: "306", NameImage: "brasil.png" },
        { RoomID: 31, NumberRoom: "307", NameImage: "brasil.png" },
        { RoomID: 32, NumberRoom: "308", NameImage: "brasil.png" },
        { RoomID: 33, NumberRoom: "309", NameImage: "brasil.png" },
        { RoomID: 34, NumberRoom: "310", NameImage: "brasil.png" },
        { RoomID: 35, NumberRoom: "311", NameImage: "brasil.png" },
        { RoomID: 36, NumberRoom: "312", NameImage: "brasil.png" },
        { RoomID: 37, NumberRoom: "401", NameImage: "brasil.png" },
        { RoomID: 38, NumberRoom: "402", NameImage: "brasil.png" },
        { RoomID: 39, NumberRoom: "403", NameImage: "brasil.png" },
        { RoomID: 40, NumberRoom: "404", NameImage: "brasil.png" },
        { RoomID: 41, NumberRoom: "405", NameImage: "brasil.png" },
        { RoomID: 42, NumberRoom: "406", NameImage: "brasil.png" },
        { RoomID: 43, NumberRoom: "407", NameImage: "brasil.png" },
        { RoomID: 44, NumberRoom: "408", NameImage: "brasil.png" },
        { RoomID: 45, NumberRoom: "409", NameImage: "brasil.png" },
        { RoomID: 46, NumberRoom: "410", NameImage: "brasil.png" },
        { RoomID: 47, NumberRoom: "411", NameImage: "brasil.png" },
        { RoomID: 48, NumberRoom: "412", NameImage: "brasil.png" },
        { RoomID: 49, NumberRoom: "501", NameImage: "brasil.png" },
        { RoomID: 50, NumberRoom: "502", NameImage: "brasil.png" },
        { RoomID: 51, NumberRoom: "503", NameImage: "brasil.png" },
        { RoomID: 52, NumberRoom: "504", NameImage: "brasil.png" },
        { RoomID: 53, NumberRoom: "505", NameImage: "brasil.png" },
        { RoomID: 54, NumberRoom: "506", NameImage: "brasil.png" },
        { RoomID: 55, NumberRoom: "507", NameImage: "brasil.png" },
        { RoomID: 56, NumberRoom: "508", NameImage: "brasil.png" },
        { RoomID: 57, NumberRoom: "509", NameImage: "brasil.png" },
        { RoomID: 58, NumberRoom: "510", NameImage: "brasil.png" },
        { RoomID: 59, NumberRoom: "511", NameImage: "brasil.png" },
        { RoomID: 60, NumberRoom: "512", NameImage: "brasil.png" },
        { RoomID: 61, NumberRoom: "601", NameImage: "brasil.png" },
        { RoomID: 62, NumberRoom: "602", NameImage: "brasil.png" },
        { RoomID: 63, NumberRoom: "603", NameImage: "brasil.png" },
        { RoomID: 64, NumberRoom: "604", NameImage: "brasil.png" },
        { RoomID: 65, NumberRoom: "605", NameImage: "brasil.png" },
        { RoomID: 66, NumberRoom: "606", NameImage: "brasil.png" },
        { RoomID: 67, NumberRoom: "607", NameImage: "brasil.png" },
        { RoomID: 68, NumberRoom: "608", NameImage: "brasil.png" },
        { RoomID: 69, NumberRoom: "609", NameImage: "brasil.png" },
        { RoomID: 70, NumberRoom: "610", NameImage: "brasil.png" },
        { RoomID: 71, NumberRoom: "611", NameImage: "brasil.png" },
        { RoomID: 72, NumberRoom: "612", NameImage: "brasil.png" },
        { RoomID: 73, NumberRoom: "701", NameImage: "brasil.png" },
        { RoomID: 74, NumberRoom: "702", NameImage: "brasil.png" },
        { RoomID: 75, NumberRoom: "703", NameImage: "brasil.png" },
        { RoomID: 76, NumberRoom: "704", NameImage: "brasil.png" },
        { RoomID: 77, NumberRoom: "705", NameImage: "brasil.png" },
        { RoomID: 78, NumberRoom: "706", NameImage: "brasil.png" },
        { RoomID: 79, NumberRoom: "707", NameImage: "brasil.png" },
        { RoomID: 80, NumberRoom: "708", NameImage: "brasil.png" },
        { RoomID: 81, NumberRoom: "709", NameImage: "brasil.png" },
        { RoomID: 82, NumberRoom: "710", NameImage: "brasil.png" },
        { RoomID: 83, NumberRoom: "711", NameImage: "brasil.png" },
        { RoomID: 84, NumberRoom: "712", NameImage: "brasil.png" },
        { RoomID: 85, NumberRoom: "801", NameImage: "brasil.png" },
        { RoomID: 86, NumberRoom: "802", NameImage: "brasil.png" },
        { RoomID: 87, NumberRoom: "803", NameImage: "brasil.png" },
        { RoomID: 88, NumberRoom: "804", NameImage: "brasil.png" },
        { RoomID: 89, NumberRoom: "805", NameImage: "brasil.png" },
        { RoomID: 90, NumberRoom: "806", NameImage: "brasil.png" },
        { RoomID: 91, NumberRoom: "807", NameImage: "brasil.png" },
        { RoomID: 92, NumberRoom: "808", NameImage: "brasil.png" },
        { RoomID: 93, NumberRoom: "809", NameImage: "brasil.png" },
        { RoomID: 94, NumberRoom: "810", NameImage: "brasil.png" },
        { RoomID: 95, NumberRoom: "811", NameImage: "brasil.png" },
        { RoomID: 96, NumberRoom: "812", NameImage: "brasil.png" },
        { RoomID: 97, NumberRoom: "901", NameImage: "brasil.png" },
        { RoomID: 98, NumberRoom: "902", NameImage: "brasil.png" },
        { RoomID: 99, NumberRoom: "903", NameImage: "brasil.png" },
        { RoomID: 100, NumberRoom: "904", NameImage: "brasil.png" },
        { RoomID: 101, NumberRoom: "905", NameImage: "brasil.png" },
        { RoomID: 102, NumberRoom: "906", NameImage: "brasil.png" },
        { RoomID: 103, NumberRoom: "907", NameImage: "brasil.png" },
        { RoomID: 104, NumberRoom: "908", NameImage: "brasil.png" },
        { RoomID: 105, NumberRoom: "909", NameImage: "brasil.png" },
        { RoomID: 106, NumberRoom: "910", NameImage: "brasil.png" },
        { RoomID: 107, NumberRoom: "911", NameImage: "brasil.png" },
        { RoomID: 108, NumberRoom: "912", NameImage: "brasil.png" },
        { RoomID: 109, NumberRoom: "1001", NameImage: "brasil.png" },
        { RoomID: 110, NumberRoom: "1002", NameImage: "brasil.png" },
        { RoomID: 111, NumberRoom: "1003", NameImage: "brasil.png" },
        { RoomID: 112, NumberRoom: "1004", NameImage: "brasil.png" },
        { RoomID: 113, NumberRoom: "1005", NameImage: "brasil.png" },
        { RoomID: 114, NumberRoom: "1006", NameImage: "brasil.png" },
        { RoomID: 115, NumberRoom: "1007", NameImage: "brasil.png" },
        { RoomID: 116, NumberRoom: "1008", NameImage: "brasil.png" },
        { RoomID: 117, NumberRoom: "1009", NameImage: "brasil.png" },
        { RoomID: 118, NumberRoom: "1010", NameImage: "brasil.png" },
        { RoomID: 119, NumberRoom: "1011", NameImage: "brasil.png" },
        { RoomID: 120, NumberRoom: "1012", NameImage: "brasil.png" },
        { RoomID: 121, NumberRoom: "1101", NameImage: "brasil.png" },
        { RoomID: 122, NumberRoom: "1102", NameImage: "brasil.png" },
        { RoomID: 123, NumberRoom: "1103", NameImage: "brasil.png" },
        { RoomID: 124, NumberRoom: "1104", NameImage: "brasil.png" },
        { RoomID: 125, NumberRoom: "1105", NameImage: "brasil.png" },
        { RoomID: 126, NumberRoom: "1106", NameImage: "brasil.png" },
        { RoomID: 127, NumberRoom: "1107", NameImage: "brasil.png" },
        { RoomID: 128, NumberRoom: "1108", NameImage: "brasil.png" },
        { RoomID: 129, NumberRoom: "1109", NameImage: "brasil.png" },
        { RoomID: 130, NumberRoom: "1110", NameImage: "brasil.png" },
        { RoomID: 131, NumberRoom: "1111", NameImage: "brasil.png" },
        { RoomID: 132, NumberRoom: "1112", NameImage: "brasil.png" },
        { RoomID: 133, NumberRoom: "1201", NameImage: "brasil.png" },
        { RoomID: 134, NumberRoom: "1202", NameImage: "brasil.png" },
        { RoomID: 135, NumberRoom: "1203", NameImage: "brasil.png" },
        { RoomID: 136, NumberRoom: "1204", NameImage: "brasil.png" },
        { RoomID: 137, NumberRoom: "1205", NameImage: "brasil.png" },
        { RoomID: 138, NumberRoom: "1206", NameImage: "brasil.png" },
        { RoomID: 139, NumberRoom: "1207", NameImage: "brasil.png" },
        { RoomID: 140, NumberRoom: "1208", NameImage: "brasil.png" },
        { RoomID: 141, NumberRoom: "1209", NameImage: "brasil.png" },
        { RoomID: 142, NumberRoom: "1210", NameImage: "brasil.png" },
        { RoomID: 143, NumberRoom: "1211", NameImage: "brasil.png" },
        { RoomID: 144, NumberRoom: "1212", NameImage: "brasil.png" }
      ]);
    });
};

// Exemple  { RoomID: 1, NumberRoom: "101", NameImage: "brasil.png" },