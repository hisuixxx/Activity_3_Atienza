/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */

    // Activity 2
import { sequelize } from "../models/Device.js";
import { Device } from "../models/Device.js";



await sequelize.sync();
const DeviceController ={
  index: async (req, res) => {
    const data = await Device.findAll();
    res.render("home", {data});
  },

  edit: async (req, res) => {
    const {id} = req.params;
    const data = await Device.findByPk(id);
    res.render("edit", {data});
  },

  add:  (req, res) => {
    res.render("add");
  },

  insert: async (req, res) => {
    const {DeviceName, Description, Model, DeviceType, TotalNumber} = req.body;
    await Device.create({DeviceName, Description, Model, DeviceType, TotalNumber});
    res.redirect("/" );
  },

  update: async (req, res) =>{
    const {id} = req.params;
    const {DeviceName, Description, Model, DeviceType, TotalNumber} = req.body;
    const rep = await Device.update({ DeviceName,  Description, Model, DeviceType, TotalNumber},
       {where: {id}});
    res.redirect("/" );

  },
  
  delete: async (req, res) => {
    const {id} = req.params;
    const deletedCount = await Device.destroy({where: {id}});
    
    
    if (deletedCount === 0) {
      return res.status(404).send("Device not found");
    }
   
    res.redirect("/" );


  },





// Activity 2 
//   all:async (req, res) =>{
//     const data = await Device.findAll();
   
//     res.json(data);
//   },
  
  
//   insert:async (req, res) =>{
//     const {DeviceName,
// Description,
// Model,
// DeviceType,
// TotalNumber} = req.body;
//     const data = Device.create({
//       DeviceName,
// Description,
// Model,
// DeviceType,
// TotalNumber
//     }); 
//     res.json({"data": "successfully inserted"});
//          res.render("add", { Device });

// },


// one:async (req, res) =>{
//       const {id} = req.params;
//        const {DeviceName,
// Description,
// Model,
// DeviceType,
// TotalNumber} = req.body;
//     const data = await Device.findByPk(req.params.id);
//     res.json(data);
   
//   },
 
 
 
//   update:async (req, res) =>{
//     const {id} = req.params;
//     const {DeviceName,
// Description,
// Model,
// DeviceType,
// TotalNumber} = req.body;

//     const rep = await Device.update({
//       DeviceName, 
// Description,
// Model,
// DeviceType,
// TotalNumber
//     }, {where: {id}}); 
//         res.json({"data": "successfully updated"});


//   },



//   delete:async (req, res) =>{
//     const {id} = req.params;
//     const deletedCount = await Device.destroy({where: {id}});

//     if (deletedCount === 0) {
//       return res.status(404).send("Device not found");
//     }

//     if (req.method === "POST") {
//       return res.redirect("/");
//     }

//     res.json({"message": "deleted"});
//   }

};


export { DeviceController };