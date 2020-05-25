import { LikeComponant } from './like.componant';

let likeComponant = new LikeComponant(10, true);
likeComponant.onClick();
console.log(`isSelected : ${likeComponant.isSelected} likeCount : ${likeComponant.likeCount}`);
