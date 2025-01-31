export default {
    name: "approach",
    type: "document",
    title: "Approaches",
    fields:[
        {
            name:"approachTitle",
            type:"string",
            title:"Title",
        },
        {
            name:"todos",
            type:"array",
            of:[{type:"string"}],
            title:"Implementations in this project"
        }
    ]
}