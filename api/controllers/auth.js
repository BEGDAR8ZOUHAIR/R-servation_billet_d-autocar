import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) =>
{
    try
    {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword,

        })
        await newUser.save();
        res.status(200).send("User created successfully");
    } catch (err) {
        res.status(500).json(err);
    }
}
// login
export const login = async (req, res) =>
{
   try {
       const user = await User.findOne({email: req.body.email});
       if (!user) return res.status(400).json("User not found");
       res.status(200).json(user);
       const isPasswordValid = await bcrypt.compareSync(req.body.password, user.password);
       if (!isPasswordValid) return res.status(400).json("Wrong password");

       const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
       const {password,isAdmin, ...others} = user._doc;
       res.cookie("access_token", token, {
              httpOnly: true,
       })
           .status(200).json(...others);
   } catch (err) {
       res.status(500).json(err);
   }
    
}
