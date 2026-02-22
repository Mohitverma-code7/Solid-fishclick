function bootNavigate(mapLoad){
    try{
        console.log(`Is navigation loded: ${mapLoad}`);
        if (!mapLoad) {
            throw new Error("map not recoganised")
        }
        return "kal anaa"
    }
    catch(e){
        console.log(e);
        console.log(`navigation failed : ${console.error.message});
        }`);
    }
    finally{
        console.log("navigation success");
    }
}

const statu1 = bootNavigate(true);
console.log(`result: ${statu1}`);
