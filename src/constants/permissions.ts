import {
  AIR_MARKETER_SMS_MARKETING_TEMPLATES,
  AIR_MARKETER_SOCIAL_MARKETING_CALENDER,
  AIR_SALES_SETTINGS,
  SUPER_ADMIN_BILLING_INVOICES_PERMISSIONS,
  SUPER_ADMIN_DASHBOARD_PERMISSIONS,
  SUPER_ADMIN_PLAN_MANAGEMENT_PERMISSIONS,
  SUPER_ADMIN_USER_MANAGEMENT_PERMISSIONS,
} from './permission-keys';

export const Permissions = {
  view_dashoard: [SUPER_ADMIN_DASHBOARD_PERMISSIONS.VIEW_DASHBOARD],
  user_management: [
    SUPER_ADMIN_USER_MANAGEMENT_PERMISSIONS.USER_LIST,
    SUPER_ADMIN_USER_MANAGEMENT_PERMISSIONS.ADD_USER,
    SUPER_ADMIN_USER_MANAGEMENT_PERMISSIONS.USER_SEARCH_AND_FILTER,
    SUPER_ADMIN_USER_MANAGEMENT_PERMISSIONS.PLAN_MANAGEMENT,
  ],
  PLAN_MANAGEMENT: [SUPER_ADMIN_PLAN_MANAGEMENT_PERMISSIONS.PLAN_LIST],
  BILLING_AND_INVOICES: [
    SUPER_ADMIN_BILLING_INVOICES_PERMISSIONS.BILLING_INVOICES_LIST,
    SUPER_ADMIN_BILLING_INVOICES_PERMISSIONS.BILLING_SEARCH_AND_FILTER,
    SUPER_ADMIN_BILLING_INVOICES_PERMISSIONS.ASSIGN_PLAN,
    SUPER_ADMIN_BILLING_INVOICES_PERMISSIONS.BILLING_EDIT_PLAN,
    SUPER_ADMIN_BILLING_INVOICES_PERMISSIONS.VIEW_BILLING_DETAILS,
  ],
  AIR_SALES_SETTINGS: [
    AIR_SALES_SETTINGS.SEARCH_PIPELINE,
    AIR_SALES_SETTINGS.SEARCH_PIPELINE,
    AIR_SALES_SETTINGS.CREATE_PIPELINE,
    AIR_SALES_SETTINGS.PIPELINE_LIST,
    AIR_SALES_SETTINGS.EDIT_PIPELINE,
    AIR_SALES_SETTINGS.DELETE_PIPELINE,
    AIR_SALES_SETTINGS.PRODUCT_LIST,
    AIR_SALES_SETTINGS.SEARCH_PRODUCT,
    AIR_SALES_SETTINGS.CREATE_PRODUCT,
    AIR_SALES_SETTINGS.ACTIVATE_DEACTIVATE_PRODUCT,
    AIR_SALES_SETTINGS.EDIT_PRODUCT,
    AIR_SALES_SETTINGS.DELETE_PRODUCT,
    AIR_SALES_SETTINGS.SEARCH_ROLE,
    AIR_SALES_SETTINGS.ADD_NEW_ROLE,
    AIR_SALES_SETTINGS.EDIT_ROLE,
    AIR_SALES_SETTINGS.VIEW_ROLE,
    AIR_SALES_SETTINGS.DELETE_ROLE,
    AIR_SALES_SETTINGS.USER_LIST,
    AIR_SALES_SETTINGS.ADD_USER,
    AIR_SALES_SETTINGS.SEARCH_USER,
    AIR_SALES_SETTINGS.ACTIVATE_DEACTIVATE_USER,
    AIR_SALES_SETTINGS.TEAM_LIST,
    AIR_SALES_SETTINGS.SEARCH_TEAM,
    AIR_SALES_SETTINGS.CREATE_TEAM,
    AIR_SALES_SETTINGS.EDIT_TEAM,
    AIR_SALES_SETTINGS.DELETE_TEAM,
    AIR_SALES_SETTINGS.VIEW_TEAM,
    AIR_SALES_SETTINGS.ACTIVATE_DEACTIVATE_EMAIL_NOTIFICATION,
    AIR_SALES_SETTINGS.ACTIVATE_DEACTIVATE_DEALS_NOTIFICATION,
    AIR_SALES_SETTINGS.ACTIVATE_DEACTIVATE_QUOTE_NOTIFICATION,
  ],
  AIR_MARKETER_SOCIAL_MARKETING_CALENDER: [
    AIR_MARKETER_SOCIAL_MARKETING_CALENDER.VIEW_POST,
    AIR_MARKETER_SOCIAL_MARKETING_CALENDER.FILTER_BY_PLATFORM,
    AIR_MARKETER_SOCIAL_MARKETING_CALENDER.FILTER_BY_PROFILE,
    AIR_MARKETER_SOCIAL_MARKETING_CALENDER.CREATE_POST,
  ],
  AIR_MARKETER_SMS_MARKETING_TEMPLATES: [
    AIR_MARKETER_SMS_MARKETING_TEMPLATES.CREATE_TEMPLATE,
    AIR_MARKETER_SMS_MARKETING_TEMPLATES.SEARCH_TEMPLATE,
    AIR_MARKETER_SMS_MARKETING_TEMPLATES.SAVE_TEMPLATE,
    AIR_MARKETER_SMS_MARKETING_TEMPLATES.EDIT_TEMPLATE,
    AIR_MARKETER_SMS_MARKETING_TEMPLATES.DELETE_TEMPLATE,
    AIR_MARKETER_SMS_MARKETING_TEMPLATES.LIST_VIEW,
  ],
};
