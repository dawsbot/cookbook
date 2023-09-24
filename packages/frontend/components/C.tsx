import classNames from "classnames";
type Card = {
  title: string;
  enabled: boolean;
  index: number;
  completed: boolean;
  hrefLink?: string;
  description?: string;
  setActive: (index: number) => void;
};

const CardContainer: React.FunctionComponent<{
  children: any;
  setActive: () => void;
}> = ({ children, setActive }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={() => setActive()}>
      {children}
    </div>
  );
};

export const Card: React.FunctionComponent<Card> = ({
  title,
  index,
  description,
  hrefLink,
  enabled,
  setActive,
  completed,
}) => {
  return (
    <CardContainer setActive={() => setActive(index)}>
      <div className={classNames("card", { disabled: !enabled })}>
        <div className="header">
          {completed ? "✅" : "◻️"}
          👨🏻‍🍳 {index + 1}. {title}
        </div>
        {description ? <div>{description}</div> : null}
        {hrefLink ? (
          <code>
            <a
              href={hrefLink}
              target="_blank"
              style={{ color: "#2F50FF", textDecoration: "underline" }}
            >
              {hrefLink.replace("https://", "")}
            </a>
          </code>
        ) : null}
      </div>
    </CardContainer>
  );
};
