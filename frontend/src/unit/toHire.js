import { popupState } from '@/stores';

export const toHire = (item) => {
  popupState().setHireType(item);
};