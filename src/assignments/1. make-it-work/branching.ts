interface ISuperSmartTeslaCarProps {
  direction: "left" | "right";
  nextAction: "gas" | "break";
}
export const superSmartTeslaCar = (props: ISuperSmartTeslaCarProps) => {
  const { direction, nextAction } = props;
  if (direction === "left") {
    return `Turning left and then ${nextAction}`;
  } else {
    return `Turning right and then ${nextAction}`;
  }
};
