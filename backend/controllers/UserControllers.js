import RegisterModel from "../models/UserRegister.js";

export const createUser = (req, res) => {
    RegisterModel.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  }

export const getUser = (req, res) => {
    RegisterModel.find()
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  }
  
export const deleteUser = (req, res) => {
    const id = req.params.id;
  
    RegisterModel.findByIdAndDelete({ _id: id })
      .then((res) => res.json(res))
      .catch((err) => res.json(err));
  }  

export const getById = (req, res) => {
    const id = req.params.id;
    RegisterModel.findById({ _id: id })
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  }
  
export const updateUser = (req, res) => {
    const id = req.params.id;
    RegisterModel.findByIdAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        email: req.body.email,
      }
    )
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  }  