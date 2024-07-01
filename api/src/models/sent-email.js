module.exports = function (sequelize, DataTypes) {
  const SentEmail = sequelize.define('SentEmail',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailTemplate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sentAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      readAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      uuid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'sent_emails',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'sent_emails_userId_fk',
          using: 'BTREE',
          fields: [
            { name: 'userId' }
          ]
        }
      ]
    }
  )

  SentEmail.associate = function (models) {
    SentEmail.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  }

  return SentEmail
}