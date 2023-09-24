import { NextPage } from "next";
import { protocols } from "../components/Protocol";
import Link from "next/link";

// const ProtocolCard:React.FunctionComponent = () => {
//   return (
//       {}
//     </>
//   )
// }

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {protocols.map((protocol) => {
        return (
          <Link href={`/recipe/${protocol.slug}`}>
            <div
              style={{
                borderRadius: "16px",
                border: "1px solid black",
                display: "inline-block",
                padding: "0px 20px",
                cursor: "pointer",
              }}
            >
              <h2>{protocol.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Home;
