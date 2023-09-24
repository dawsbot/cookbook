import { NextPage } from "next";
import Image from "next/image";
import { protocols } from "../components/Protocol";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Image
          width={180}
          height={180}
          src={
            "https://em-content.zobj.net/source/apple/354/man-cook-light-skin-tone_1f468-1f3fb-200d-1f373.png"
          }
        />
        <br />
      </div>
      <div>
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
    </div>
  );
};
export default Home;
