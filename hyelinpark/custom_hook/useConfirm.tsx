type Props = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const useConfirm = ({ message, onConfirm, onCancel }: Props) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (!onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
