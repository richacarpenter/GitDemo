"use strict";
exports.__esModule = true;
var like_componant_1 = require("./like.componant");
var likeComponant = new like_componant_1.LikeComponant(10, true);
likeComponant.onClick();
console.log("isSelected : " + likeComponant.isSelected + " likeCount : " + likeComponant.likeCount);
