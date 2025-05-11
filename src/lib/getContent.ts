import data from "../data/data.json";

export function getContent(language: "en" | "si" | "ar", key: string) {
    // @ts-ignore
    return data[language]?.[key] || {};
}

// export function getBlogs(language:"en"|"si"|"ar", section: string){
//     // @ts-ignore
//     return data[language]?.[section]||{}
// }