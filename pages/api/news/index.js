import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const { News } = db.models;
  const data = await News.findAll();
  res.send(data);
};
