import { useState } from "react"

export function useConfirmation() {
  const [isOpen, setIsOpen] = useState(false)
  const [confirmationState, setConfirmationState] = useState({
    title: "",
    message: "",
    onConfirm: () => {},
    confirmText: "Yes, Proceed",
    cancelText: "Cancel",
    confirmVariant: "danger",
    icon: "warning",
  })

  const confirm = ({
    title = "Confirm Action",
    message = "Are you sure you want to proceed with this action?",
    onConfirm,
    confirmText = "Yes, Proceed",
    cancelText = "Cancel",
    confirmVariant = "danger",
    icon = "warning",
  }) => {
    return new Promise((resolve) => {
      setConfirmationState({
        title,
        message,
        onConfirm: () => {
          if (onConfirm) onConfirm()
          resolve(true)
          setIsOpen(false)
        },
        confirmText,
        cancelText,
        confirmVariant,
        icon,
      })
      setIsOpen(true)
    })
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return {
    confirm,
    isOpen,
    handleClose,
    confirmationState,
  }
}
