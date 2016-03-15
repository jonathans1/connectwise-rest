/**
 * Created by kgrube on 12/20/2015.
 * @author kgrube
 */

/**
 *
 * @param options
 * @returns {{TimeAPI: (TimeEntries|exports|module.exports)}}
 * @constructor
 */
function CompanyAPI(options) {
    var _Configurations = require('./Configurations');
    return {
        Configurations: new _Configurations(options)
    }
}

/**
 *
 * @type {TimeEntries}
 */
module.exports = CompanyAPI;
