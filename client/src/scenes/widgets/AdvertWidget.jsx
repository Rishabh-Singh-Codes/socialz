import { Link, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium} component={Link} href="https://www.linkedin.com/in/rishabh8singh/" target="_blank">Hire me!</Typography>
      </FlexBetween>
      <img
        height="auto"
        width="100%"
        alt="advert"
        src="http://localhost:3001/assets/linkedInRishabhSingh.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Rishabh Singh</Typography>
        <Typography color={medium}  component={Link} href="https://www.linkedin.com/in/rishabh8singh/" target="_blank">LinkedIn</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Looking for a Full-Stack/Front-End developer? Click on the link above to get in 
        contact with Rishabh Singh.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
