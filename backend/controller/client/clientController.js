const twilio = require("../../util/twilio")
const Client=require('../../models/client')
const bcrypt = require('bcrypt')

module.exports = {
    addClient: async(req,res)=>{
        try {
           
            const userData = req.body
            console.log(userData);
            
            const number = req.body.mobile
            const existUser = await Client.findOne({mobile:userData.mobile})
            if(existUser){
                res.status(401).json({message: "Mobile number already registered" , state:false})

            }else{
                twilio.sendVerificationToken(number);
                res.status(200).json({message:"OTP send"});
            }
            res.status(200).json("data received");

        }catch(error){

        }
    },
    submit: async (req, res) => {
        try {
          const otp = req.body.OTP;
          const number = req.body.data.mobile;
          const userData = req.body.data;
          console.log(userData);
          const passwordHash = await bcrypt.hash(userData.password, 10);
          console.log(userData);
          const existUser = await Client.findOne({ mobile: userData.mobile });
          
      
          if(existUser){
            res.status(201).json({ message: "Mobile number already registered", state: false });
          }else{
            const twilioStatus = await twilio.checkVerificationToken(otp, number);
            if(twilioStatus){
              const newClient = new Client({
                name: userData.name,
                age:userData.age,
                mobile: userData.mobile,
                email: userData.email,
                password: passwordHash,
                gender:userData.gender,
                address:userData.address
              });
              await newClient.save();
              res.status(201).json()
          
            }else{
              res.status(401).json({message:"OTP is invalid"})
            }
          }
        } catch (error) {
          console.log(error);
        }
      },

       login: async (req, res) => {
        try {
          const data = req.body;
          console.log(data);
          const existUser = await Client.findOne({ mobile: data.mobile });
          if (existUser) {
            const passwordMatch = await bcrypt.compare(
              data.password,
              existUser.password
            );
            if (data.mobile == existUser.mobile && passwordMatch == true) {
              res.status(200).json({  create: true });
              console.log("success");
            }else{
              res.status(401).json({message:"Invalid Credentials"})
            }
          }else{
            res.status(401).json({err:"User Doesn't Exist"})
          }
        } catch (error) {
          console.log(error);
        }
      }
    }









