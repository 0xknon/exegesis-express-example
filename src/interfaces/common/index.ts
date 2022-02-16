export * from './exegesis';
export * from './error';

export enum ErrorCode {
  // Auth Error
  INVALID_PARAMETERS = 'general/invalid-parameters',

  // Auth Error
  AUTH_HEADER_MISSING = 'auth/auth-header-missing',
  AUTH_HEADER_INVALID = 'auth/auth-header-invalid',
  AUTH_UNAUTORIZAED = 'auth/unauthorized-user',
  EMAIL_MISSING = 'auth/email-missing',
  ID_TOKEN_INVALID = 'auth/id-token-invalid',
  USER_INACTIVE = 'auth/user-inactive',

  // Admins Error
  ADMIN_EMAIL_EXIST = 'admin/email-exist',
  ADMIN_NOT_FOUND = 'admin/admin-not-found',
  ADMIN_DEACTIVATED = 'admin/admin-deactivated',
  ADMIN_UNAUTHORIZED = 'admin/unauthorized',

  // BusinessUsers Error
  BUSINESS_USER_EMAIL_EXIST = 'business-user/email-exist',
  BUSINESS_USER_DEACTIVATED = 'business-user/business-user-deactivated',

  // Users Error
  USER_EXIST = 'users/user-exist',
  USER_NOT_FOUND = 'users/user-not-found',

  // Brands Error
  BRAND_EXIST = 'brands/brand-exist',
  BRAND_NOT_FOUND = 'brands/brand-not-found',

  // Coupons Error
  COUPON_EXIST = 'coupons/coupon-exist',

  // Groups Error
  GROUP_EXIST = 'groups/group-exist',
  GROUP_NOT_FOUND = 'groups/group-not-found',

  // Subscriptions Error
  SUBSCRIPTION_EXIST = 'subscriptions/subscription-exist',

  // Transactions Error
  TRANSACTION_EXIST = 'transactions/transaction-exist',

  // AWS Error
  AWS_S3_UPLOAD_FAILED = 'aws/s3-upload-failed',

  // Firebase Error
  FIREBASE_CREATE_USER_FAILED = 'firebase/create-user-failed',
  FIREBASE_UPDATE_PASSWORD_FAILED = 'firebase/update-password-failed',
}

export type Image = {
  objectKey: string;
  url?: string;
};
