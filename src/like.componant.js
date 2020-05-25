"use strict";
exports.__esModule = true;
var LikeComponant = /** @class */ (function () {
    function LikeComponant(likeCount, isSelected) {
        this.likeCount = likeCount;
        this.isSelected = isSelected;
    }
    LikeComponant.prototype.onClick = function () {
        this.likeCount += (this.isSelected) ? 1 : -1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponant;
}());
exports.LikeComponant = LikeComponant;
