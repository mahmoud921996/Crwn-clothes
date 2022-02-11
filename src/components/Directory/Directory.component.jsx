import React from "react";
import { DirectoryMenuContainer } from "./Directory.styled";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menuItem.component";
import { selectDirectorySections } from "./../../redux/directory/directory.selector";
const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </DirectoryMenuContainer>
  );
};

export default Directory;
