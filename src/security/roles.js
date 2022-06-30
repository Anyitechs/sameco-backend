/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      partsEditor: 'partsEditor',
      partsViewer: 'partsViewer',
      vehiclesEditor: 'vehiclesEditor',
      vehiclesViewer: 'vehiclesViewer',
      overheadEditor: 'overheadEditor',
      overheadViewer: 'overheadViewer',
    };
  }
}

module.exports = Roles;
