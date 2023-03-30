const Department = require("../../models/department");
const Doctor = require("../../models/doctor");
const mailer = require("../../config/mailer");
const Client = require("../../models/client")
const Admin = require("../../models/admin")
const jwt=require("jsonwebtoken")
const createToken = (_id) => {
  return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

module.exports = {
  addDepartment: async (req, res) => {
    console.log(req.file);

    const DepartmentExist = await Department.findOne({
      department: req.body.department.toUpperCase(),
    });
    if (DepartmentExist) {
      res.status(201).json({ err: "Department Already Exist" });
     
    } else {
      const newDepartment = new Department({
        department: req.body.department.toUpperCase(),
        image: req.file.path,
      });
      await newDepartment.save();
      res.status(201).json({ message: "succcessfully added" });
    }
  },
  login: async (req,res)=>{
    try {
      const password=req.body.password
      const email=req.body.email
      
      const credentials = await Admin.findOne({email:req.body.email})
     
      if(credentials.email==email&&credentials.password==password){
        console.log(credentials._id);
        const token=createToken(credentials._id)
        console.log(token);
        res.status(201).json({status:true,token})
      }else{
        res.json({error:"Incorrect password or email"})
        console.log("error");
      }
      
    } catch (error) {
      
    }

  },
  addDoctor: async (req, res) => {
    try {
      const departments = await Department.find();
      console.log(departments);
      res.json({status:true});
    } catch (error) {
      console.log(error);
    }
  },
  doctorData: async (req, res) => {
    try {
      console.log(req.file.path);

      console.log(req.body.name);
      const newDoctor = new Doctor({
        name: req.body.name,
        department: req.body.department,
        mobile: req.body.mobile,
        email: req.body.email,
        speciality: req.body.speciality,
        languages: req.body.language,
        hospitals: req.body.hospital,
        image: req.file.path,
      });
      await newDoctor.save();

      let mailDetails = {
        from: "mankindmedicare@gmail.com",
        to: req.body.email,
        subject: "User Verification",

        html: `<p>YOUR CREDENTIALS TO ACCESS MANKIND WEBSITE IS <br> Email : ${req.body.email} <br>  Password : ${mailer.OTP}</p>`,
      };
      mailer.mailTransporter.sendMail(mailDetails, (err, data) => {
        console.log(data);
        if (err) {
          console.log(err);
        } else {
          console.log("otp mailed");
        }
      });

      res.status(201).json({ message: "Successfully Mail send" });
    } catch (error) {}
  },
  getClients: async (req, res) => {
    try {
    clientDetails=await Client.find()
    console.log(clientDetails);
    res.json(clientDetails)

  }
  catch (error) {
   
 }

  },
  getDoctors: async (req,res)=>{
    try {
      doctorDetails=await Doctor.find()
      console.log(doctorDetails);
      res.json(doctorDetails)
      
    } catch (error) {
      
    }
  },
  getDepartments: async (req,res)=>{
    try {
      departmentDetails=await Department.find()
      console.log(departmentDetails);
      res.json(departmentDetails)
      
    } catch (error) {
      
    }
    
},
}
