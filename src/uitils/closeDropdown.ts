interface CloseDropdownProps {
  handleClose: () => void;
}

export const closeDropdown = ({ handleClose }: CloseDropdownProps) => {
  const dropdowns = Array.from(
    document.querySelectorAll(".dropdown")
  ) as HTMLElement[];

  const handleClickOutside = (event: MouseEvent) => {
    const clickedElement = event.target as HTMLElement;
    if (!dropdowns.some((dropdown) => dropdown.contains(clickedElement))) {
      handleClose();
    }
  };

  console.log(dropdowns);

  window.addEventListener("click", handleClickOutside);

  return () => {
    window.removeEventListener("click", handleClickOutside);
  };
};
