// migrations/XXXXXXXXXXXXXX-add-user-id-to-job-applications.js
"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("job_applications", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users", // you can use the table name here
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("job_applications", "UserId");
  },
};
