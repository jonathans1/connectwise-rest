/**
 * Created by jonathans1 on 12/15/2015.
 * @author jonathans1
 */

/**
 *
 * @private
 */
var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Configuration
 * @property {number} id
 * @property {string} name
 * @property ConfigurationTypeReference) type
 * @property ConfigurationStatusReference status
 * @property CompanyReference) company
 * @property ContactReference contact
 * @property SiteReference site
 * @property {number} locationId
 * @property {number} businessUnitId
 * @property {string} deviceIdentifier
 * @property {string} serialNumber
 * @property {string} modelNumber
 * @property {string} tagNumber
 * @property {string} purchaseDate
 * @property {string} installationDate
 * @property MemberReference installedBy
 * @property {string} warrantyExpirationDate
 * @property {string} vendorNotes
 * @property {string} notes
 * @property {string} macAddress
 * @property {string} lastLoginName
 * @property {boolean} billFlag
 * @property {number} backupSuccesses
 * @property {number} backupIncomplete
 * @property {number} backupFailed
 * @property {number} backupRestores
 * @property {string} lastBackupDate
 * @property {string} backupServerName
 * @property number backupBillableSpaceGb
 * @property {string} backupProtectedDeviceList
 * @property {number} backupYear
 * @property {number} backupMonth
 * @property {string} ipAddress
 * @property {string} defaultGateway
 * @property {string} osType
 * @property {string} osInfo
 * @property {string} cpuSpeed
 * @property {string} ram
 * @property {string} localHardDrives
 * @property {number} parentConfigurationId
 * @property CompanyReference vendor
 * @property ManufacturerReference manufacturer
 * @property Array[ConfigurationQuestion] questions
 * @property {boolean} activeFlag
 * @property {string} managementLink
 * @property {string} remoteLink
 * @property SLAReference sla
 * @property Guid mobileGuid
 * @property {object} _info
 * @property {string} _info.activities_href
 * @property {string} _info.childtasks_href
 * @property {string} _info.configurations_href
 * @property {string} _info.documents_href
 * @property {string} _info.lastUpdated
 * @property {string} _info.notes_href
 * @property {string} _info.products_href
 * @property {string} _info.scheduleentries_href
 * @property {string} _info.tasks_href
 * @property {string} _info.timeentries_href
 * @property {string} _info.updatedBy
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function Configurations(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Configurations, ConnectWise);

/**
 * GET
 * @param {Params} params
 * @returns {Configuration[]|promise}
 */
Configurations.prototype.getConfigurations = function (params) {
    return this.api('/company/configurations', 'GET', params);
};

/**
 * GET
 * @param {string|number} id configurationNbr
 * @returns {Configuration|promise}
 */
Configurations.prototype.getConfigurationById = function (id) {
    return this.api('/company/configurations/' + id, 'GET');
};


/**
 * GET
 * @param {string|number} id configurationNbr
 * @returns {Configuration|promise}
 */
Configurations.prototype.getConfigurationByParams = function (opts) {

  var params = {
    'companyId': null,
    'typeId': null,
    'limit': -1
  }


  var conditions = new Array()
  if (opts.companyId && opts.companyId != "")
  {
    conditions.push("company/id=" + opts.companyId)
  }
  if (opts.typeId && opts.typeId != "")
  {
    conditions.push("type/id=" + opts.typeId)
  }

  if (params.limit && params.limit > -1)
  {

  }
/*
  console.log("config conditions", {
    conditions: conditions.join(' AND ')
    //pageSize: 2
  })
*/
    return this.api('/company/configurations/', 'GET', {
      conditions: conditions.join(' AND ')
      //, pageSize: 2
    });
};



/**
 * POST
 * @param {object|Configuration} configuration the new configuration data
 * @param {object} configuration.board
 * @param {string} configuration.board.name
 * @param {object} configuration.company
 * @param {string} configuration.company.identifier The CompanyID in ConnectWise
 * @param {string} configuration.summary
 * @param {string} [configuration.initialDescription]
 * @returns {Configuration|promise} The created configuration, or errors if any occured
 */
Configurations.prototype.createConfiguration = function (configuration) {
    return this.api('/company/configurations', 'POST', configuration);
};

/**
 * PATCH
 * @param {number} id
 * @param {Operations[]} operations
 * @param {string} operations.op the operation to perform, possible values: ['replace', ?]
 * @param {string} operations.path
 * @param {string|number} operations.value
 * @returns {Configuration|promise} The updated configuration
 */
Configurations.prototype.updateConfiguration = function (id, operations) {
    return this.api('/company/configurations/' + id, 'PATCH', operations);
};

/**
 * GET
 * @param {ParamsConditions} params
 * @param {string} [params.conditions] Conditions string, e.g. 'Summary like "%blah%" AND board/name = "Service Board"'
 * @returns {Count|promise} The number of configurations matching the conditions
 */
Configurations.prototype.getConfigurationsCount = function (params) {
    return this.api('/company/configurations/count', 'GET', params);
};

/**
 * DELETE
 * @param {string|number} id
 * @returns {promise}
 */
Configurations.prototype.deleteConfigurationsById = function (id) {
    return this.api('/company/configurations/' + id, 'DELETE');
};

/**
 * PUT
 * @param id
 * @param {Configuration} configuration
 * @returns {Configuration|promise}
 */
Configurations.prototype.replaceConfiguration = function (id, configuration) {
    return this.api('/company/configurations/' + id, 'PUT', configuration);
};

/**
 * GET
 * @param id
 * @param {Params} [params]
 * @returns {*|promise}
 */
Configurations.prototype.getConfigurationStatuses = function (id, params) {
    return this.api('/company/configurations/' + id + '/statuses', 'GET', params);
};

/**
 * GET
 * @param {number|string} id
 * @returns {Count|promise} The number of statuses associated with configuration number id
 */
Configurations.prototype.getConfigurationStatusesCount = function (id) {
    return this.api('/company/configurations/' + id + '/statuses/count', 'GET');
};

/**
 * GET
 * @param {number|string} id
 * @param {Params} params
 * @returns {Types[]|promise}
 */
Configurations.prototype.getConfigurationTypes = function (id, params) {
    return this.api('/company/configurations/' + id + '/types', 'GET', params);
};

/**
 * GET
 * @param {number|string} id
 * @returns {Count|promise} The count of types attached to configuration id
 */
Configurations.prototype.getConfigurationTypesCount = function (id) {
    return this.api('/company/configurations/' + id + '/types/count', 'GET');
};

/**
 *
 * @param {string|number} id
 * @param {string} status
 * @returns {Configuration[]|promise}
 */
Configurations.prototype.updateConfigurationStatusByName = function (id, status) {
    var deferred = Q.defer(),
        self = this;

    self.getConfigurationById(id)
        .then(function (configuration) {
            var boardId = configuration.board.id;
            self.api('/service/boards/' + boardId + '/statuses', 'GET', {conditions: 'name = "' + status + '"'})
                .then(function (statuses) {
                    if (statuses.length > 0) {
                        var statusId = statuses[0].id;
                        self.updateConfiguration(id, [{
                                "op": 'replace',
                                "path": 'status/id',
                                "value": statusId
                            }])
                            .then(deferred.resolve)
                            .fail(deferred.reject);
                    } else {
                        deferred.reject({
                            code: 'NotFound',
                            errors: null,
                            message: 'Status ' + status + ' not found'
                        });
                    }

                })
                .fail(function (err) {
                    deferred.reject(err);
                });
        })
        .fail(function (err) {
            deferred.reject(err);
        });
    return deferred.promise;
};

/**
 *
 * @param id
 * @param {string} priority - do a %like% match on priority
 * @returns {promise|Configuration}
 */
Configurations.prototype.updateConfigurationPriority = function (id, priority) {
    var self = this;
    return self.api('/service/priorities', 'GET', {
        conditions: 'name like "%' + priority + '%"'
    }).then(function (res) {
        if (res.length > 0) {
            var priorityId = res[0].id;
            return self.updateConfiguration(id, [{
                op: 'replace',
                path: 'priority/id',
                value: priorityId
            }]);
        } else {
            throw {
                code: 'NotFound',
                message: 'Could not find any matching priority.',
                errors: null
            };
        }
    });
};

/**
 *
 * @param id
 * @param {string} serviceType
 * @returns {promise|Configuration}
 */
Configurations.prototype.updateConfigurationServiceType = function (id, serviceType) {
    var self = this;
    return self.getConfigurationById(id)
        .then(function (configuration) {
            var boardId = configuration.board.id;
            return self.api('/service/boards/' + boardId + '/types', 'GET', {
                conditions: 'name = "' + serviceType + '"'
            }).then(function (types) {
                if (types.length > 0) {
                    var serviceTypeId = types[0].id;
                    return self.updateConfiguration(id, [{
                        op: 'replace',
                        path: 'type/id',
                        value: serviceTypeId
                    }]);
                } else {
                    throw {
                        code: 'NotFound',
                        message: 'Could not find any matching service types.',
                        errors: null
                    };
                }
            });
        });
};

/**
 *
 * @param id
 * @param {string} serviceSubType
 * @returns {promise|Configuration}
 */
Configurations.prototype.updateConfigurationServiceSubType = function (id, serviceSubType) {
    var self = this;
    return self.getConfigurationById(id)
        .then(function (configuration) {
            var boardId = configuration.board.id;
            return self.api('/service/boards/' + boardId + '/subtypes', 'GET', {
                conditions: 'name = "' + serviceSubType + '"'
            }).then(function (types) {
                if (types.length > 0) {
                    var serviceSubTypeId = types[0].id;
                    return self.updateConfiguration(id, [{
                        op: 'replace',
                        path: 'subType/id',
                        value: serviceSubTypeId
                    }]);
                } else {
                    throw {
                        code: 'NotFound',
                        message: 'Could not find any matching service subtypes.',
                        errors: null
                    };
                }
            });
        });
};

/**
 *
 * @param id
 * @param {string} type
 * @param {string} subtype
 * @param {string} item
 * @returns {promise|Configuration}
 */
Configurations.prototype.updateConfigurationTypeSubTypeItem = function (id, type, subtype, item) {
    var self = this;
    return self.updateConfigurationServiceType(id, type).then(function () {
        return self.updateConfigurationServiceSubType(id, subtype).then(function () {
            return self.updateConfigurationServiceItem(id, item);
        })
    })
};

/**
 *
 * @param id
 * @param {string} serviceItem
 * @returns {promise|Configuration}
 */
Configurations.prototype.updateConfigurationServiceItem = function (id, serviceItem) {
    var self = this;
    return self.getConfigurationById(id)
        .then(function (configuration) {
            var boardId = configuration.board.id;
            return self.api('/service/boards/' + boardId + '/items', 'GET', {
                conditions: 'name = "' + serviceItem + '"'
            }).then(function (items) {
                if (items.length > 0) {
                    var serviceItemId = items[0].id;
                    return self.updateConfiguration(id, [{
                        op: 'replace',
                        path: 'item/id',
                        value: serviceItemId
                    }]);
                } else {
                    throw {
                        code: 'NotFound',
                        message: 'Could not find any matching service items.',
                        errors: null
                    };
                }
            });
        });
};

/**
 *
 * @param {string|number} id configurationNbr
 * @param {string|number} customFieldId
 * @param {string|number} value
 * @returns {Configuration|promise}
 */
Configurations.prototype.updateConfigurationCustomFieldById = function (id, customFieldId, value) {
    return this.updateConfiguration(id, [{
        op: 'replace',
        path: 'customFields/' + customFieldId + '/value',
        value: value
    }]);
};

/**
 *
 * @param {string|number} id configurationNbr
 * @param {string|number} caption
 * @param {string|number} value
 * @returns {Configuration|promise}
 */
Configurations.prototype.updateConfigurationCustomFieldByCaption = function (id, caption, value) {
    var self = this;
    return self.getConfigurationById(id)
        .then(function (configuration) {
            var customFieldId;
            configuration.customFields.forEach(function (elem, idx) {
                if (elem.caption === caption) {
                    customFieldId = idx;
                }
            });

            if (customFieldId === undefined) {
                throw {
                    code: 'InvalidCustomFieldName',
                    message: 'No custom field found with caption specified',
                    errors: null
                };
            }

            return self.updateConfigurationCustomFieldById(id, customFieldId, value);
        });
};

/**
 *
 * @type {Configurations}
 */
module.exports = Configurations;
