import SlipperModel from "../models/AddSlipper.js";

 const getSlipperFilter = async (req, res) => {
    try {
      // Query to find teddies with price > 100
      const slippers = await SlipperModel.find({ price: { $gt: 100 } });
  
      if (!slippers || slippers.length === 0) {
        return res.status(404).json({ message: "No Teddies Found with Price Greater than 100" });
      }
      res.status(200).json(slippers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export default getSlipperFilter;