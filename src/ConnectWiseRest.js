/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 * @typedef {object} CWOptions
 * @property companyId
 * @property publicKey
 * @property privateKey
 * @property companyUrl
 */

/**
 * @type {object} ConnectWiseRest
 * @property {ConnectWise} API
 * @property {FinanceAPI} FinanceAPI
 * @property {ServiceDeskAPI} ServiceDeskAPI
 * @property {TimeAPI} TimeAPI
 */

/**
 *
 * @param {CWOptions} options
 * @returns {{API: (ConnectWise), FinanceAPI: (FinanceAPI), ServiceDeskAPI: (ServiceDeskAPI), CompanyAPI: (CompanyAPI), TimeAPI: (TimeAPI)}}
 * @constructor
 */
function ConnectWiseRest(options) {
    var _ConnectWise = require('./ConnectWise'),
        _FinanceAPI = require('./FinanceAPI'),
        _TimeAPI = require('./TimeAPI'),
        _ServiceDeskAPI = require('./ServiceDeskAPI'),
        _CompanyAPI = require('./CompanyAPI'),
        _ProjectAPI = require('./ProjectAPI');


    return {
        API: new _ConnectWise(options),
        FinanceAPI: new _FinanceAPI(options),
        ServiceDeskAPI: new _ServiceDeskAPI(options),
        CompanyAPI: new _CompanyAPI(options),
        TimeAPI: new _TimeAPI(options),
        ProjectAPI: new _ProjectAPI(options)
    }
}

/**
 *
 * @type {ConnectWiseRest}
 */
module.exports = ConnectWiseRest;

/**
 * @typedef {object} AgreementHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.agreement_href
 */

/**
 * @typedef {object} AgreementTypeHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.type_href
 */

/**
 * @typedef {object} BoardHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.board_href
 */

/**
 * @typedef {object} CompanyHref
 * @property {number} id
 * @property {string} identifier The company ID in ConnectWise
 * @property {object} _info
 * @property {string} _info.company_href
 */

/**
 * @typedef {object} ContactHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.contact_href
 */

/**
 * @typedef {object} CountryHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 */

/**
 * @typedef {object} DocumentHref
 * @property {number} id
 * @property {object} _info
 * @property {string} _info.filename
 */

/**
 * @typedef {object} ItemHref Service Item
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.item_href
 */

/**
 * @typedef {object} PriorityHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.image_href
 * @property {string} _info.priority_href
 */

/**
 * @typedef {object} ProductHref
 * @property {number} id
 * @property {string} identifier
 * @property {object} _info
 * @property {string} _info.identifier
 */

/**
 * @typedef {object} ServiceLocationHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.location_href
 */

/**
 * @typedef {object} ServiceTypeHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 */

/**
 * @typedef {object} ScheduleEntryHref
 * @property {number} id
 * @property {object} _info
 * @property {string} _info.description
 * @property {string} _info.schedule_href
 */

/**
 * @typedef {object} SiteHref
 * @property {number} id
 * @property {object} _info
 * @property {string} _info.name
 * @property {string} _info.site_href
 */

/**
 * @typedef {object} SourceHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.source_href
 */

/**
 * @typedef {object} StatusHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.status_href
 */

/**
 * @typedef {object} SubTypeHref Service Subtype
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.subType_href
 */

/**
 * @typedef {object} TeamHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.team_href
 */

/**
 * @typedef {object} TypeHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.type_href
 */

/**
 * @typedef {object} OpportunityHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} opportunity_href
 */

/**
 * @typedef {object} Params
 * @property {string} [conditions]
 * @property {string} [orderBy]
 * @property {string|number} [page]
 * @property {string|number} [pageSize]
 */

/**
 * @typedef {object} ParamsPage
 * @property {string|number} page
 * @property {string|number} pageSize
 */

/**
 * @typedef {object} ParamsConditions
 * @property {string} [conditions]
 */

/**
 * @typedef {object} ProductHref
 * @property {number} id
 * @property {object} _info
 * @property {string} _info.description
 */

/**
 * @typedef {object} WorkRoleHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.role_href
 */

/**
 * @typedef {object} WorkTypeHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.type_href
 */

/**
 * @typedef {object[]} Operations
 * @property {string} op ['replace','remove']
 * @property {string} path the relative path to the variable to be updated, e.g. status/id
 * @property {string} value
 */

/**
 * @typedef {object} Count
 * @property {number} count the number of matched records.
 */

/**
 * @typedef {object} ConfigurationHref
 * @property {number} id
 * @property {string} deviceIdentifier
 * @property {object} _info
 * @property {string} _info.name
 * @property {string} _info.configuration_href
 *
 */

/**
 * @typedef {object} MemberHref
 * @property {number} id
 * @property {string} identifier the member's ID in CW
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 */

/**
 * @typedef {object} DeleteResponse
 * @property {string} error null if no error
 */

/**
 * @typedef {object} ErrorResponse
 * @property {string} code
 * @property {string} message
 * @property {object[]} errors
 */

/**
 * @typedef {object} CustomField
 * @property {string} caption
 * @property {string} entryMethod
 * @property {number} id
 * @property {number} numberOfDecimals
 * @property {string} type
 * @property {string} value
 *
 */

/**
 * @typedef {object} ProjectStatusHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 *
 */

/**
 * @typedef {object} ProjectTypeHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 *
 */
