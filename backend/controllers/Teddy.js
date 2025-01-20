import TeddybareModel from "../models/AddTeddy.js";

 const getTeddyFilter = async (req, res) => {
    try {
      // Query to find teddies with price > 100
      const teddies = await TeddybareModel.find({ price: { $gt: 100 } });
  
      if (!teddies || teddies.length === 0) {
        return res.status(404).json({ message: "No Teddies Found with Price Greater than 100" });
      }
      res.status(200).json(teddies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export default getTeddyFilter;