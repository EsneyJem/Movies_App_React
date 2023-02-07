const API = "https://api.themoviedb.org/3";

export async function get(path){
  return await fetch(API + path,{
    headers:{
      "Content-Type": "application/json;charset=utf-8",
      Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzZhNzhhOTMwMWI4NTY2NmZmNzZlZTkwOGI5NzI0MiIsInN1YiI6IjYzNzkwNmIxMzM2ZTAxMDA3ZmQyN2E1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBSC5SuA5x6yK2unmeEZIytS64bciLzC64K61PZqdAM",
      
    },
  }).then((result => result.json()));
  
}
