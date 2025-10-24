import Book from "../Model/Book.Model.js"
 const getBook = async (req,res)=>{
    try {
        const  book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({message : error.message})
        console.log(error);
        
    }
}

export default getBook
