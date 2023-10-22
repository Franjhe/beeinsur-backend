const config = require('./../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    // db.Proyect = require('./../models/proyect')(sequelize);
    db.Ads = require('../models/ads')(sequelize);
    db.Advisers = require('../models/advisers')(sequelize);
    db.Advisers_commissions = require('../models/advisers_commissions')(sequelize);
    db.Advisers_schedules = require('../models/advisers_schedules')(sequelize);
    db.Age_groups = require('../models/age_groups')(sequelize);
    db.Agencies = require('../models/agencies')(sequelize);
    db.Agencies_commissions = require('../models/agencies_commissions')(sequelize);
    db.Agencies_ibo = require('../models/agencies_ibo')(sequelize);
    db.Agencies_ibo_products = require('../models/agencies_ibo_products')(sequelize);
    db.Authorization_api = require('../models/authorization_api')(sequelize);
    db.Banners = require('../models/banners')(sequelize);
    db.Blog_categories = require('../models/blog_categories')(sequelize);
    db.Blog_tags = require('../models/blog_tags')(sequelize);
    //db.Blogs = require('../models/blogs')(sequelize);
    db.Campaign_fails = require('../models/campaign_fails')(sequelize);
    db.Campaign_lists = require('../models/campaign_lists')(sequelize);
    db.Campaign_send = require('../models/campaign_send')(sequelize);
    //db.Campaigns = require('../models/campaigns')(sequelize);
    // db.Campaigns_push = require('../models/campaigns_push')(sequelize);
    // db.Campaigns_push_details = require('../models/campaigns_push_details')(sequelize);
    // db.Campaigns_push_fails = require('../models/campaigns_push_fails')(sequelize);
    // db.campaigns_push_lists = require('../models/campaigns_push_lists')(sequelize);
    // db.Campaigns_push_send = require('../models/campaigns_push_send')(sequelize);
    db.Categories = require('../models/categories')(sequelize);
    db.Contacts = require('../models/contacts')(sequelize);
    db.Contracts = require('../models/contracts')(sequelize);
    db.Countries = require('../models/countries')(sequelize);
    db.Declaration_age_groups = require('../models/declaration_age_groups')(sequelize);
    db.Declaration_health = require('../models/declaration_health')(sequelize);
    db.Declaration_pathology = require('../models/declaration_pathology')(sequelize);
    db.Downloadable_files = require('../models/downloadable_files')(sequelize);
    db.Events = require('../models/events')(sequelize);
    db.Exchange_rate = require('../models/exchange_rate')(sequelize);
    db.Faqs = require('../models/faqs')(sequelize);
    db.Fee_insurances = require('../models/fee_insurances')(sequelize);
    db.Fee_percentages = require('../models/fee_percentages')(sequelize);
    db.Fee_receipts = require('../models/fee_receipts')(sequelize);
    db.Fees = require('../models/fees')(sequelize);
    db.Files = require('../models/files')(sequelize);
    db.Incident_files = require('../models/incident_files')(sequelize);
    db.Incident_service = require('../models/incident_service')(sequelize);
    db.Information = require('../models/information')(sequelize);
    db.Insurance_beneficiaries = require('../models/insurance_beneficiaries')(sequelize);
    db.Insurance_beneficiaries_temp = require('../models/insurance_beneficiaries_temp')(sequelize);
    db.Insurance_buy = require('../models/insurance_buy')(sequelize);
    db.Insurance_buy_declaration = require('../models/insurance_buy_declaration')(sequelize);
    db.Insurance_buy_declaration_temp = require('../models/insurance_buy_declaration_temp')(sequelize);
    db.Insurance_buy_temp = require('../models/insurance_buy_temp')(sequelize);
    db.Insurance_coupons = require('../models/insurance_coupons')(sequelize);
    db.Insurance_declaration_health = require('../models/insurance_declaration_health')(sequelize);
    db.Insurance_declaration_pathology = require('../models/insurance_declaration_pathology')(sequelize);
    db.Insurance_payment = require('../models/insurance_payment')(sequelize);
    db.Insurance_payment_temp = require('../models/insurance_payment_temp')(sequelize);
    db.Insurance_prices = require('../models/insurance_prices')(sequelize);
    db.Insurance_terms = require('../models/insurance_terms')(sequelize);
    db.Insurance_visiontravel = require('../models/insurance_visiontravel')(sequelize);
    db.Insurance_visiontravel_test = require('../models/insurance_visiontravel_test')(sequelize);
    db.Insurances = require('../models/insurances')(sequelize);
    db.Lists = require('../models/lists')(sequelize);
    db.Newsletters = require('../models/newsletters')(sequelize);
    db.Payment_links = require('../models/payment_links')(sequelize);
    db.Payment_transactions = require('../models/payment_transactions')(sequelize);
    db.Price_age_groups = require('../models/price_age_groups')(sequelize);
    db.Products = require('../models/products')(sequelize);
    db.Products_files = require('../models/products_files')(sequelize);
    db.Profiles = require('../models/profiles')(sequelize);
    db.Quoters = require('../models/quoters')(sequelize);
    db.Recover_password = require('../models/recover_password')(sequelize);
    db.Sections = require('../models/sections')(sequelize);
    db.Services = require('../models/services')(sequelize);
    db.Session_data = require('../models/session_data')(sequelize);
    db.Session_data_adviser = require('../models/session_data_adviser')(sequelize);
    db.Smoker_taxes = require('../models/smoker_taxes')(sequelize);
    db.Status = require('../models/status')(sequelize);
    db.Subscriber_lists = require('../models/subscriber_lists')(sequelize);
    db.Subscribers = require('../models/subscribers')(sequelize);
    db.Subscribers_beneficiaries = require('../models/subscribers_beneficiaries')(sequelize);
    db.Subscribers_test = require('../models/subscribers_test')(sequelize);
    db.Tags = require('../models/tags')(sequelize);
    db.To_send = require('../models/to_send')(sequelize);
    db.Users = require('../models/users')(sequelize);
    db.Users_permits = require('../models/users_permits')(sequelize);

    // sync all models with database
    await sequelize.sync({ alter: true });
}