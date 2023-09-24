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
  hrefLink?: string;
  children: any;
  setActive: () => void;
}> = ({ hrefLink, children, setActive }) => {
  //   if (hrefLink) {
  //     return <div style={{ cursor: "pointer" }}>{children}</div>;
  //     //   return (
  //     //     // <a href={hrefLink} target="_blank">
  //     //       {children}
  //     //     // </a>
  //     //   );
  //   }
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
    <CardContainer
      hrefLink={enabled ? hrefLink : undefined}
      setActive={() => setActive(index)}
    >
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
