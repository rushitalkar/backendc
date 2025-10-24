import User from '../Model/User.model.js'
import bcrypt from 'bcryptjs'
export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const user = await User.findOne({ email })

        if (user) {
            res.status(400).json({ message: "User Already Exist" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        let newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save()
        res.status(200).json({ message: "User Created Successfully", newUser })

    } catch (error) {
        res.status(401).json({ message: "internal server error" })
        console.log(error);

    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body

        let user = await User.findOne({ email })

        if (!user) {
            res.status(400).json({ message: "Invaild Email" })
        }

        let isPassword = bcrypt.compare(password, user.password)

        if (!isPassword) {
            res.status(400).json({ message: "Password not Match" })
        }

        res.status(200).json({ message: "Login Sucessfully", user })
        console.log("login Sucessfully !!");

    } catch (error) {
        res.status(400).json({ message: "internal server error" })
    }

}