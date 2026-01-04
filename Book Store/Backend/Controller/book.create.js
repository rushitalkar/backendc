import Book from "../Model/Book.Model.js"
const createBook = async (req,res)=>{
    try {
        const {name ,title , Prize ,Category , image , read_URL} = req.body

        let newBook = new Book({
            name ,
            title ,
            Prize ,
            Category ,
            image ,
            read_URL
        })

        await newBook.save()

        res.status(200).json({
            message : "Book Added Succesfully",newBook 
        })
    } catch (error) {
        res.status(401).json({ message: "internal server error"})
        console.log(error);
    }
}

export default createBook

