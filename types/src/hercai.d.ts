export = Hercai;
/**
 * @typedef {Class} Hercai
 * @see {Hercai}
 * @example import {Hercai} from "hercai";
 * @type {Class}
 * @class
 */
declare class Hercai {

/**
* The Question You Want to Ask Artificial Intelligence.
* @param {string} model "v2"
* @param {string} model "beta"
* @param {string} content The Question You Want to Ask Artificial Intelligence.
* @example client.question({model:"v2",content:"how are you?"})
* @type {string} The Question You Want to Ask Artificial Intelligence.
* @returns {Hercai}
* @async
*/
question(object:{model:"v2"|"beta",content:string}):Promise<{content:string,reply:string}>;


 /**
* Tell Artificial Intelligence What You Want to Draw.
* @param {string} model "v1" , "v2" , "v2-beta"
* @param {string} prompt Tell Artificial Intelligence What You Want to Draw.
* @example client.drawImage({model:"v1",prompt:"anime girl"})
* @type {string} Tell Artificial Intelligence What You Want to Draw.
* @returns {Hercai}
* @async
*/
 drawImage(object:{model:"v1"|"v2"|"v2-beta",prompt:string}):Promise<{model:string,prompt:string,url:string}>;


}

declare namespace Hercai { }
//# sourceMappingURL=hercai.d.ts.map
