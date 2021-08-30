export const PybIntegrationUtils = {
  integrate() {
    return new Promise((res) => setTimeout(() => res({integrated: true}), 1000));
  },

  authorize(supplierKey: string, authKey: string) {
    return new Promise((res) => setTimeout(() => res({authorized: true}), 1000));
  },

  validateSupplierKey(supplierKey: string) {
    return new Promise((res) => setTimeout(() => res({validation: true}), 500));
  },

  validateAuthKey(authKey: string) {
    return new Promise((res) => setTimeout(() => res({validation: true}), 500));
  },
};
