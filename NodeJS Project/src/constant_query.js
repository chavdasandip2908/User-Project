const tables_name = require("./tables");

const SQL_Query = {

    INSERT_USER_QUERY: `INsert INTO ${tables_name.USER_TABLE} SET ?`,
    UPDATE_USER_QUERY: `UPDATE ${tables_name.USER_TABLE} SET ? where user_id = ? `,
    DELETE_USER_QUERY: `DELETE FROM ${tables_name.USER_TABLE} WHERE user_id = ?`,
    GET_ALL_USER_QUERY: `select * from ${tables_name.USER_TABLE}`,
    GET_ONE_USER_QUERY: `select * from ${tables_name.USER_TABLE} where user_id = ?`,

    INSERT_ADDRESS_QUERY: `INsert INTO ${tables_name.INSERT_ADDRESS_QUERY} SET ?`,
    UPDATE_ADDRESS_QUERY: `UPDATE ${tables_name.INSERT_ADDRESS_QUERY} SET ? where user_id = ? `,
    DELETE_ADDRESS_QUERY: `DELETE FROM ${tables_name.ADDRESS_TABLE} WHERE user_id = ?`,
    GET_ALL_ADDRESS_QUERY: `select * from ${tables_name.ADDRESS_TABLE}`,
    GET_ONE_ADDRESS_QUERY: `select * from ${tables_name.ADDRESS_TABLE} where user_id = ?`,

    INSERT_MOBILE_QUERY: `INsert INTO ${tables_name.MOBILE_NUMBER_TABLE} SET ?`,
    UPDATE_MOBILE_QUERY: `UPDATE ${tables_name.MOBILE_NUMBER_TABLE} SET ? where user_id = ? `,
    DELETE_MOBILE_QUERY: `DELETE FROM ${tables_name.MOBILE_NUMBER_TABLE} WHERE user_id = ?`,
    GET_ALL_MOBILE_QUERY: `select * from ${tables_name.MOBILE_NUMBER_TABLE}`,
    GET_ONE_MOBILE_QUERY: `select * from ${tables_name.MOBILE_NUMBER_TABLE} where user_id = ?`
}
module.exports = SQL_Query;
