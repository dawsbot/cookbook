import { useState } from "react";
import { Card } from "./C";
type Step = {
  title: string;
  href?: string;
  description?: string;
};
type Protocol = {
  title: string;
  categories: ReadonlyArray<string>;
  description: string;
  steps: ReadonlyArray<Step>;
};

const steps: Protocol = {
  title: "Create a personal Multisig",
  categories: ["security", "solo"],
  description:
    "In your DeFi journey, you'll need to keep your funds safe. One of the best ways is using a multisig so that if any one wallet is compromised, your funds are safe!",
  steps: [
    {
      title: "Create a Gnosis SAFE account",
      href: "https://app.safe.global/new-safe/create?chain=eth",
    },
    {
      title: "Add 2+ of your wallet addresses to the account",
    },
    {
      title: "Save and create the SAFE",
    },
    {
      title: "Send a test transaction",
    },
  ],
};
type PillProps = {
  category: string;
  index: number;
};
const colorOptions = ["#A3FFBC", "#C2CCFF", "#FFC2F2"];
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
export const Protocol: React.FunctionComponent = () => {
  const [activeIndex] = useState(0);
  return (
    <>
      <h1>{steps.title}</h1>
      <p>{steps.description}</p>
      <div style={{ display: "flex" }}>
        {steps.categories.map((category, index) => (
          <Pill category={category} index={index} />
        ))}
      </div>
      {steps.steps.map((step, index) => {
        return (
          <Card
            title={step.title}
            index={index}
            hrefLink={step.href}
            description={step.description}
            enabled={index === activeIndex}
          />
        );
      })}
    </>
  );
};
