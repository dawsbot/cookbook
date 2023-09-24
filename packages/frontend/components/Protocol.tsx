import { Card } from "./C";
type Step = {
  title: string;
  href?: string;
  description?: string;
};
type Protocol = {
  title: string;
  description: string;
  steps: ReadonlyArray<Step>;
};

const steps: Protocol = {
  title: "Protect your funds with a Multisig",
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
export const Protocol: React.FunctionComponent = () => {
  return (
    <>
      <h1>{steps.title}</h1>
      <p>{steps.description}</p>
      {steps.steps.map((step, index) => {
        return (
          <Card
            title={step.title}
            index={index}
            hrefLink={step.href}
            description={step.description}
          />
        );
      })}
    </>
  );
};
