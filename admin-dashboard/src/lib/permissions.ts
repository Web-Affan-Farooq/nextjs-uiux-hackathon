import sanityClient from "./sanity";

const q = `*[_type == "prev"]{preveledge}`;
export const permission = "Allow functions";
// const [data] = await sanityClient.fetch(q);
// permission = data.preveledge;
// permission;