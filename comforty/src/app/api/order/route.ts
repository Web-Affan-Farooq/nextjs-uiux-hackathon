// ------------->  Backend route for handling user info coming from checkout form

export const POST = async (req:Request) => {
    const data =await req.json();  //  ----------------------------------error identified here 
    console.log(data);
    return Response.json({message:"confimed"});
}