import React from "react";
import "./SidebarRow.scss";
import { Avatar } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface SidebarRowProps {
  src?: string;
  Icon?: React.ComponentType<SvgIconProps>;
  title: string;
}

const SidebarRow: React.FC<SidebarRowProps> = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
