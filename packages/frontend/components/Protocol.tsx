import { useState } from "react";
import { Card } from "./C";
import { protocols } from "./protocol-data";
type PillProps = {
  category: string;
  index: number;
};
export const colorOptions = ["#A3FFBC", "#C2CCFF", "#FFC2F2"];
const Pill: React.FunctionComponent<PillProps> = ({ category, index }) => {
  return (
    <div
      style={{
        backgroundColor: colorOptions[index],
        borderRadius: "24px",
        padding: "4px 16px",
        margin: "4px",
      }}
    >
      {category}
    </div>
  );
};
export const Protocol: React.FunctionComponent<{ slug: string }> = ({
  slug,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const protocol = protocols.find((protocol) => protocol.slug === slug);
  if (protocol === undefined) {
    return <>"not found"</>;
  }
  return (
    <div style={{ width: "500px" }}>
      <h1>{protocol.title}</h1>
      <p>{protocol.description}</p>
      <div style={{ display: "flex" }}>
        {protocol.categories.map((category, index) => (
          <Pill category={category} index={index} />
        ))}
      </div>
      {protocol.steps.map((step, index) => {
        return (
          <Card
            completed={index < activeIndex}
            title={step.title}
            index={index}
            hrefLink={step.href}
            description={step.description}
            enabled={index === activeIndex}
            setActive={() => setActiveIndex(index)}
          />
        );
      })}
    </div>
  );
};
