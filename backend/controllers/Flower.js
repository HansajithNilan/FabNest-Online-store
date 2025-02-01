import FlowerModel from "../models/AddFlower.js";

 const getFlowerFilter = async (req, res) => {
    try {
      // Query to find teddies with price > 100
      const flowers = await FlowerModel.find({ price: { $gt: 100 } });
  
      if (!flowers || flowers.length === 0) {
        return res.status(404).json({ message: "No flowers Found with Price Greater than 100" });
      }
      res.status(200).json(flowers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export default getFlowerFilter;