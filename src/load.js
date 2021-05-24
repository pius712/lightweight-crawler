import Scraper from "./scraper";

export function load(content) {


    return new Scraper (selector);
}

//     selector?: T extends Node
//         ? string | Cheerio<T> | T[] | T
//         : Cheerio<T> | T[],
//         context?: string | Cheerio<Node> | Node[] | Node,
//         r: string | Cheerio<Document> | Document | null = root,
//         opts?: CheerioOptions
// ) {
//         return new LoadedCheerio<T>(selector, context, r, {
//             ...internalOpts,
//             ...flattenOptions(opts),
//         });
//     }
//
// }
//
//
