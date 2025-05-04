"use strict";
let arr2 = [2, "hi"];
var User;
(function (User) {
    User["ADMIN"] = "admin";
    User["GUEST"] = "guest";
    User["SUPER_ADMIN"] = "super_admin";
})(User || (User = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "500";
    StatusCodes["NOTFOUND"] = "400";
})(StatusCodes || (StatusCodes = {}));
