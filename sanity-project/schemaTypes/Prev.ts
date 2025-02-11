export default {
    name:"prev",
    type:"document",
    title:"Preveledges",
    fields:[
        {
            name: "preveledge",
            type: "string",
            title: "Admin Preveledges",
            options: {
                list: ["View only", "Prohibitted", "Allow functions"],
                layout: "radio"
            }
        }
    ]
}