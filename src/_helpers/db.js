const config = require('config.json');
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
    db.Proyect = require('../proyect/proyect.model')(sequelize);
    db.Ads = require('../models/ads')
    db.Advisers = require('../models/advisers')
    db.Advisers_commissions = require('../models/advisers_commissions')
    db.Advisers_schedules = require('../models/advisers_schedules')
    db.Age_groups = require('../models/age_groups')
    db.Agencies = require('../models/agencies')
    db.Agencies_commissions = require('../models/agencies_commissions')
    db.Agencies_ibo = require('../models/agencies_ibo')
    db.Agencies_ibo_products = require('../models/agencies_ibo_products')
    db.Authorization_api = require('../models/authorization_api')
    db.Banners = require('../models/banners')
    db.Blog_categories = require('../models/blog_categories')
    db.Blog_tags = require('../models/blog_tags')
    db.Blogs = require('../models/blogs')
    db.Campaign_fails = require('../models/campaign_fails')
    db.Campaign_lists = require('../models/campaign_lists')
    db.Campaign_send = require('../models/campaign_send')
    db.Campaigns = require('../models/campaigns')
    db.Campaigns_push = require('../models/campaigns_push')
    db.Campaigns_push_details = require('../models/campaigns_push_details')
    db.Campaigns_push_fails = require('../models/campaigns_push_fails')
    db.campaigns_push_lists = require('../models/campaigns_push_lists')
    db.Campaigns_push_send = require('../models/campaigns_push_send')
    db.Categories = require('../models/categories')
    db.Contacts = require('../models/contacts')
    db.Contracts = require('../models/contracts')
    db.Countries = require('../models/countries')
    db.Declaration_age_groups = require('../models/declaration_age_groups')
    db.Declaration_health = require('../models/declaration_health')
    db.Declaration_pathology = require('../models/declaration_pathology')
    db.Downloadable_files = require('../models/downloadable_files')
    db.Events = require('../models/events')
    db.Exchange_rate = require('../models/exchange_rate')
    db.Faqs = require('../models/faqs')
    db.Fee_insurances = require('../models/fee_insurances')
    db.Fee_percentages = require('../models/fee_percentages')
    db.Fee_receipts = require('../models/fee_receipts')
    db.Fees = require('../models/fees')
    db.Files = require('../models/files')
    db.Incident_files = require('../models/incident_files')
    db.Incident_service = require('../models/incident_service')
    db.Information = require('../models/information')
    db.Insurance_beneficiaries = require('../models/insurance_beneficiaries')
    db.Insurance_beneficiaries_temp = require('../models/insurance_beneficiaries_temp')
    db.Insurance_buy = require('../models/insurance_buy')
    db.Insurance_buy_declaration = require('../models/insurance_buy_declaration')
    db.Insurance_buy_declaration_temp = require('../models/insurance_buy_declaration_temp')
    db.Insurance_buy_temp = require('../models/insurance_buy_temp')
    db.Insurance_coupons = require('../models/insurance_coupons')
    db.Insurance_declaration_health = require('../models/insurance_declaration_health')
    db.Insurance_declaration_pathology = require('../models/insurance_declaration_pathology')
    db.Insurance_payment = require('../models/insurance_payment')
    db.Insurance_payment_temp = require('../models/insurance_payment_temp')
    db.Insurance_prices = require('../models/insurance_prices')
    db.Insurance_terms = require('../models/insurance_terms')
    db.Insurance_visiontravel = require('../models/insurance_visiontravel')
    db.Insurance_visiontravel_test = require('../models/insurance_visiontravel_test')
    db.Insurances = require('../models/insurances')
    db.Lists = require('../models/lists')
    db.Newsletters = require('../models/newsletters')
    db.Payment_links = require('../models/payment_links')
    db.Payment_transactions = require('../models/payment_transactions')
    db.Price_age_groups = require('../models/price_age_groups')
    db.Products = require('../models/products')
    db.Products_files = require('../models/products_files')
    db.Profiles = require('../models/profiles')
    db.Quoters = require('../models/quoters')
    db.Recover_password = require('../models/recover_password')
    db.Sections = require('../models/sections')
    db.Services = require('../models/services')
    db.Session_data = require('../models/session_data')
    db.Session_data_adviser = require('../models/session_data_adviser')
    db.Smoker_taxes = require('../models/smoker_taxes')
    db.Status = require('../models/status')
    db.Subscriber_lists = require('../models/subscriber_lists')
    db.Subscribers = require('../models/subscribers')
    db.Subscribers_beneficiaries = require('../models/subscribers_beneficiaries')
    db.Subscribers_test = require('../models/subscribers_test')
    db.Tags = require('../models/tags')
    db.To_send = require('../models/to_send')
    db.Users = require('../models/users')
    db.Users_permits = require('../models/users_permits')

    // sync all models with database
    await sequelize.sync({ alter: true });
}