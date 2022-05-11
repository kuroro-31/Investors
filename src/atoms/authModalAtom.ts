import { atom } from "recoil";

// 型定義
export interface AuthModalState {
  open: boolean;
  view: ModalView;
}
export type ModalView = "login" | "signup" | "resetPassword";

// デフォルトの状態定義
const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

// authModalStateを出力名とする
export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
