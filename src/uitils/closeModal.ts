export const closeModal = (handleClose: () => void): void => {
  const modals = document.querySelectorAll(".modal");
  window.onclick = (event: MouseEvent) => {
    modals.forEach((modal) => {
      if (modal === event.target) {
        handleClose();
      }
    });
  };
};
