module.exports = (sequelize, Sequelize, DataTypes) => {
  const HopeLayout = sequelize.define(
    "home_layour", // Model name
    {
      // Model attributes
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      image: {
        type: DataTypes.STRING
      },
      layout: {
        type: DataTypes.ENUM('Top Purchases', 'Bestsellers', 'Game Top up', 'Bestsellers Slider', 'Contact Left','Contact Right'),
        allowNull: false,
        defaultValue: 'Top Purchases'
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active'
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  );

  return HopeLayout;
};
