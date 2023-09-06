import  Sequelize  from "sequelize";

export const sequelize = new Sequelize(
"Quejup",
"postgres",
"root",
{
host:"localhost",
dialect: "postgres",
}
);