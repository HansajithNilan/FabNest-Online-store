import TeddybareModel from "../models/AddTeddy.js";

export const createTeddy = async (req, res) => {
  try {
    const Teddy = await TeddybareModel.create(req.body);
    res.status(200).json(Teddy);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const getTeddy = async (req, res) => {
  try {
    const teddy = await TeddybareModel.find();
    if (!teddy) {
      return res.status(404).json({ message: "Teddy Bares Not Found" });
    }
    res.status(200).json(teddy);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTeddy = async (req, res) => {
  try {
    const { id } = req.params;

    const teddy = await TeddybareModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Teddy Delete Succefull !" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const getbyIdTeddy = async (req, res) => {
  try {
    const { id } = req.params;
    const teddy = await TeddybareModel.findById(id);

    if (!teddy) {
      return res.status(404).json({ message: "Teddy Bare Not Found !" });
    }
    res.status(200).json(teddy);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const putTeddy = async (req, res) => {
  try {
    const { id } = req.params;
    const teddy = await TeddybareModel.findByIdAndUpdate(id, req.body);

    if (!teddy) {
      res.status(404).json({ message: "Teddy Not Updated" });
    }
    const Updatedteddy = await TeddybareModel.findById(id);
    res.status(200).json(Updatedteddy);
  } catch {
    res.status(500).json({ message: error.message });
  }
};
