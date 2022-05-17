export const appPermissions = {
  APP_VIEW: 'APP_VIEW',
  APP_UPDATE: 'APP_UPDATE',
  APP_SECRET: 'APP_SECRET',
  APP_PERMISSION: 'APP_PERMISSION',
  APP_MANAGE_ROLE: 'APP_MANAGE_ROLE',
};

export const appPermissionDetail = {
  ADMIN: [
    appPermissions.APP_VIEW,
    appPermissions.APP_UPDATE,
    appPermissions.APP_SECRET,
    appPermissions.APP_PERMISSION,
    appPermissions.APP_MANAGE_ROLE,
  ],
  MANAGE: [
    appPermissions.APP_VIEW,
    appPermissions.APP_UPDATE,
    appPermissions.APP_SECRET,
    appPermissions.APP_MANAGE_ROLE,
  ],
  READ: [appPermissions.APP_VIEW],
};
