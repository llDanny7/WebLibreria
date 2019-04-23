const nameLocalStorage = "BOOKS"

class BookServiceBBDD 
{
    getAll()
    {
        let listBooks = JSON.parse(localStorage.getItem(nameLocalStorage));
        if (listBooks == null) listBooks = [];
        return listBooks;        
    }

    getById(id)
    {
        let listBooks = JSON.parse(localStorage.getItem(nameLocalStorage));
        if (listBooks == null || listBooks.length === 0)
          return null;
        
        return listBooks.find(x => x.id === id);        
    }

    deleteById(id)
    {
      let listBooks = this.getAll();
      let book = listBooks.find(x => x.id === id);
      if (book === undefined)
        return {isOk: false, message: 'Error. No se ha encontrado el libro.'}
      
        listBooks  = listBooks.filter(x => x.id !== id);
      localStorage.setItem(nameLocalStorage, JSON.stringify(listBooks));
  
      return {isOk: true, message: 'El libro se ha eliminado correctamente'};
    }
    
    edit(book)
    {
      if (this.existBook(book))
      {
        return {isOk:false, message:"El libro ya existe"};
      }
      let listBooks = this.getAll();
      let bookBBDD = listBooks.find(x => x.id === book.id);
      if (bookBBDD === undefined)
        return {isOk: false, message: 'Error. No se ha encontrado el libro.'}    
        bookBBDD.name = book.name
      localStorage.setItem(nameLocalStorage, JSON.stringify(listBooks));
      return {isOk: true, message: 'El libro se ha actualizado correctamente.'}    
    }
    
    add(book)
    {    
      if (this.existBook(book))
      {
        return {isOk:false, message:"El libro ya existe"};
      }
      let listBooks = this.getAll();
      book.id = this.getGUID();
      listBooks.push(book);
      localStorage.setItem(nameLocalStorage, JSON.stringify(listBooks));    
      return {isOk: true, message:"El libro se ha añadido correctamente"}
    }
    
    existBook(book)
    {
      const listBooks = JSON.parse(localStorage.getItem(nameLocalStorage));
      let existBook = false;
      if (listBooks!=null)
      {
        existBook = listBooks.some(x => x.title === book.title);
      }
      return existBook;    
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

export const BookService = new BookServiceBBDD();