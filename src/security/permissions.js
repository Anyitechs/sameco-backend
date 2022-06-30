const Roles = require('./roles');
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,


        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      partsImport: {
        id: 'partsImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partsEditor,
        ],
      },
      partsCreate: {
        id: 'partsCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partsEditor,
        ],
        allowedStorageFolders: ['parts'],
      },
      partsEdit: {
        id: 'partsEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partsEditor,
        ],
        allowedStorageFolders: ['parts'],
      },
      partsDestroy: {
        id: 'partsDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.partsEditor,
        ],
        allowedStorageFolders: ['parts'],
      },
      partsRead: {
        id: 'partsRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.partsEditor,
          roles.partsViewer,
        ],
      },
      partsAutocomplete: {
        id: 'partsAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.partsEditor,
          roles.partsViewer,
          roles.overheadEditor,
          roles.overheadViewer,
        ],
      },

      vehiclesImport: {
        id: 'vehiclesImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.vehiclesEditor,
        ],
      },
      vehiclesCreate: {
        id: 'vehiclesCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.vehiclesEditor,
        ],
        allowedStorageFolders: ['vehicles'],
      },
      vehiclesEdit: {
        id: 'vehiclesEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.vehiclesEditor,
        ],
        allowedStorageFolders: ['vehicles'],
      },
      vehiclesDestroy: {
        id: 'vehiclesDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.vehiclesEditor,
        ],
        allowedStorageFolders: ['vehicles'],
      },
      vehiclesRead: {
        id: 'vehiclesRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.vehiclesEditor,
          roles.vehiclesViewer,
        ],
      },
      vehiclesAutocomplete: {
        id: 'vehiclesAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.vehiclesEditor,
          roles.vehiclesViewer,
          roles.overheadEditor,
          roles.overheadViewer,
        ],
      },

      overheadImport: {
        id: 'overheadImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.overheadEditor,
        ],
      },
      overheadCreate: {
        id: 'overheadCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.overheadEditor,
        ],
        allowedStorageFolders: ['overhead'],
      },
      overheadEdit: {
        id: 'overheadEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.overheadEditor,
        ],
        allowedStorageFolders: ['overhead'],
      },
      overheadDestroy: {
        id: 'overheadDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.overheadEditor,
        ],
        allowedStorageFolders: ['overhead'],
      },
      overheadRead: {
        id: 'overheadRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.overheadEditor,
          roles.overheadViewer,
        ],
      },
      overheadAutocomplete: {
        id: 'overheadAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.overheadEditor,
          roles.overheadViewer,

        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
