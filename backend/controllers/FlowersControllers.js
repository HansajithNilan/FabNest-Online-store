import FlowerModel from "../models/AddFlower.js";

export const createFlowers = async (req, res) => {
  try {
    const Flower = await FlowerModel.create(req.body);
    res.status(200).json(Flower);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const getFlowers = async (req, res) => {
  try {
    const Flower = await FlowerModel.find();
    if (!Flower) {
      return res.status(404).json({ message: "Flower not fond." });
    }
    res.status(200).json(Flower);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFlowers = async (req, res) => {
  try {
    const { id } = req.params;
    const Flower = await FlowerModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Flowers delete successfull" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};
export const getbyIdfFlowers = async (req, res) => {
  try {
    const { id } = req.params;
    const Flower = await FlowerModel.findById(id);

    if (!Flower) {
      return res.status(404).json({ message: "Flower not found" });
    }
    res.status(200).json(Flower);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export const putFlowers = async (req, res) => {
  try {
    const { id } = req.params;
    const Flower = await FlowerModel.findByIdAndUpdate(id, req.body);

    if (!Flower) {
      res.status(404).json({ message: "Flower Not Update" });
    }
    const UpdateFlower = await FlowerModel.findById(id);
    res.status(200).json(UpdateFlower);
  } catch {
    res.status(500).json({ message: error.message });
  }
};
