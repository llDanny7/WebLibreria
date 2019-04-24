const nameLocalStorage = "GENRES";
class GenresServiceBBDD
{
  
  getAll()
  {
    let listGenres = JSON.parse(localStorage.getItem(nameLocalStorage));
    if (listGenres == null) listGenres = [];    
    return listGenres;    
  }

  getById(id)
  {
    let listGenres = JSON.parse(localStorage.getItem(nameLocalStorage));
    if (listGenres == null || listGenres.length === 0)
      return null;
    
    return listGenres.find(x => x.id === id);
  }

  deleteById(id)
  {
    let listGenres = this.getAll();
    let genre = listGenres.find(x => x.id === id);
    if (genre === undefined)
      return {isOk: false, message: 'Error. No se ha encontrado el género.'}
    
    listGenres  = listGenres.filter(x => x.id !== id);
    localStorage.setItem(nameLocalStorage, JSON.stringify(listGenres));

    return {isOk: true, message: 'El género se ha eliminado correctamente'};
  }

  edit(genre)
  {

    let listGenres = this.getAll();
    let genreBBDD = listGenres.find(x => x.id === genre.id);
    if (genreBBDD === undefined)
      return {isOk: false, message: 'Error. No se ha encontrado el género.'}    

    if (genre.name !== genreBBDD.name && this.existGender(genre))
    {
      return {isOk:false, message:"El género ya existe"};
    }      
    genreBBDD.name = genre.name
    localStorage.setItem(nameLocalStorage, JSON.stringify(listGenres));
    return {isOk: true, message: 'El género se ha actualizado correctamente.'}    
  }

  add(genres)
  {    
    if (this.existGender(genres))
    {
      return {isOk:false, message:"El género ya existe"};
    }
    let listGenres = this.getAll();
    genres.id = this.getGUID();
    listGenres.push(genres);
    localStorage.setItem(nameLocalStorage, JSON.stringify(listGenres));    
    return {isOk: true, message:"El género se ha añadido correctamente"}
  }

  existGender(genres)
  {
    const listGenres = JSON.parse(localStorage.getItem(nameLocalStorage));
    let existGender = false;
    if (listGenres!=null)
    {
      existGender = listGenres.some(x => x.name === genres.name);
    }
    return existGender;    
  }

  S4()
  {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
  }

  getGUID()
  {
    const guid = (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0,3) + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toLowerCase();
    return guid;
  }

}

export const GenresService = new GenresServiceBBDD();