type Card = {
  title: string;
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
}) => {
  return (
    <CardContainer hrefLink={hrefLink}>
      <div className="card">
        <div className="header">
          👨🏻‍🍳 {index + 1}. {title}
        </div>
        <hr />
        {description ? <div>{description}</div> : null}
      </div>
    </CardContainer>
  );
};
