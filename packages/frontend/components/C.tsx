import classNames from "classnames";
type Card = {
  title: string;
  enabled: boolean;
  index: number;
  hrefLink?: string;
  description?: string;
};

const CardContainer: React.FunctionComponent<{
  hrefLink?: string;
  children: any;
}> = ({ hrefLink, children }) => {
  if (hrefLink) {
    return (
      <a href={hrefLink} target="_blank">
        {children}
      </a>
    );
  }
  return children;
};

export const Card: React.FunctionComponent<Card> = ({
  title,
  index,
  description,
  hrefLink,
  enabled,
}) => {
  return (
    <CardContainer hrefLink={enabled ? hrefLink : undefined}>
      <div className={classNames("card", { disabled: !enabled })}>
        <div className="header">
          👨🏻‍🍳 {index + 1}. {title}
        </div>
        {description ? <div>{description}</div> : null}
      </div>
    </CardContainer>
  );
};
