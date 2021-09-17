const command = process.argv[2];
const {addFilm, listFilm, delFilm, upFilm, findFilm} =require("./film/film.methods")

const app = async () => {
    switch(command){
        case "add":
            const filmObj ={
                name : process.argv[3],
                actor: process.argv[4],
                like: process.argv[5],
            };
            await addFilm(filmObj);
            break;
            //pass filmObj to addFilm Function
    
        case "list":
                await listFilm();
                break;

        case "del":
            
            const name = process.argv[3];
                    
            
            await delFilm(name);
            break;
            
        case "update":
            const updateObj ={
            name : process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
            };
            
            await upFilm(updateObj);
            break;
                   
        case "find":
            const myname = process.argv[3];
            await findFilm(myname);
            break;

            //find films from mySql DB
    }
}

app();