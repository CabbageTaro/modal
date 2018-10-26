/* @flow */
type OnClickEvent = SyntheticEvent<HTMLButtonElement>;
type OnClick<T> = (event: T) => void;

type ButtonProps = {
  isShowYesButton?: boolean,
  yesLabel?: string,
  yesHandler?: OnClick<OnClickEvent>,
  isShowNolButton?: boolean,
  noLabel?: string,
  noHandler?: OnClick<OnClickEvent>,
};

type Props = {
  isModal: boolean,
  handleCloseModal: (isModal: boolean) => boolean,
  size?: string,
  height?: number,
  ModalBody?: any,
  children?: Function,
  className?: string,
  title?: string,
  actionMessage?: string,
  resource?: string,
} & ButtonProps;

export type {Props, OnClickEvent};
