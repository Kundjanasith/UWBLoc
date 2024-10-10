import {
  ImageAndTextWrapper,
  NavBrand
} from "./Logo.style";
import { LogoProps } from "../../types";

function Logo(props: LogoProps) {
  const { theme, size } = props;

  return (
    <NavBrand>
      <ImageAndTextWrapper
        to={theme === "light" ? "/projects" : "#"}
        theme={theme}
        size={size}
      >
        <img
          src={process.env.PUBLIC_URL + "/static/images/floor_plan_logo.png"}
          alt="Warehouse designer"
          height={size === "medium" ? 36 : 60}
        />
        Warehouse Designer
      </ImageAndTextWrapper>
    </NavBrand>
  );
}

export default Logo;