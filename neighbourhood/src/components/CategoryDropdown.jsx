import { IoChevronDown, IoHammerOutline } from "react-icons/io5";
import React, { useState } from "react";
import { PiCat, PiHamburger } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const options = [
  {
    label: "Välj Kategori",
    value: "kategori",
  },
  {
    label: "Verktyg",
    value: "verktyg",
    icon: <IoHammerOutline />,
  },
  {
    label: "Livsmedel",
    value: "livsmedel",
    icon: <PiHamburger />,
  },
  {
    label: "Party",
    value: "party",
    icon: <LuPartyPopper />,
  },
  {
    label: "Djur",
    value: "djur",
    icon: <PiCat />,
  },
  {
    label: "Övrigt",
    value: "övrigt",
    icon: <HiOutlineDotsHorizontal />,
  },
];

export default function CategoryDropdown() {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="dropdown-selected">
          {selected.icon}
          {selected.label}
        </span>
        <IoChevronDown className="chevron" />
      </button>

      {open && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
