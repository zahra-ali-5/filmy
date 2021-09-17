const Film = require("./fiml.model")

exports.addFilm= async (filmObj)=>{
    try {
        await Film.sync();
        await Film.create(filmObj); 
    } catch(error){
            console.log(error);
    }
};

exports.listFilm = async () => {
try{
    const list= await Film.findAll();
    console.log(list);
}catch(error){
    console.log(error);
}
};

exports.delFilm = async (name)=>{
    try {
         await Film.destroy( {where : {name:name}});
        console.log("del");
    
    }catch(error){
        console.log(error);
    }
};

exports.upFilm = async (updateObj)=>{
    try {
        
        await Film.update({
            like: updateObj.like
           }, {
            where: { name: updateObj.name }
           })
        }catch(error){
        console.log(error);
    }
};
exports.findFilm= async (name)=>{
    try{
        
        const list= await Film.findOne({ where :{name :name}});
        if (list === null) {
            console.log('Not found!');
          } else {
           // console.log(project instanceof Project); // true
            console.log(list); 
            //console.log(list);
         }
        } catch(error){
         console.log(error);
        }

    };

//const project = await Project.findOne({ where: { title: 'My Title' } });
//if (project === null) {
 // console.log('Not found!');
//} else {
//  console.log(project instanceof Project); // true
//  console.log(project.title); // 'My Title'
//}