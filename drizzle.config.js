/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://wheels_owner:9NdrkiBlcGV5@ep-sparkling-bread-a5vyr9h6.us-east-2.aws.neon.tech/wheels?sslmode=require'
    }
  };