import { NextPage } from "next";
import Image from "next/image";
import { colorOptions, protocols } from "../components/Protocol";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Image
          width={160}
          height={160}
          src={
            "https://em-content.zobj.net/source/apple/354/man-cook-light-skin-tone_1f468-1f3fb-200d-1f373.png"
          }
        />
        <br />
        <>
          <h2>Latest Recipes</h2>
          {protocols.map((protocol, index) => {
            return (
              <Link href={`/recipe/${protocol.slug}`}>
                <div
                  style={{
                    borderRadius: "16px",
                    border: "1px solid black",
                    display: "inline-block",
                    margin: "0px 20px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "80px",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                      backgroundColor: colorOptions[index],
                    }}
                  />
                  <h2 style={{ padding: "0px 30px" }}>{protocol.title}</h2>
                </div>
              </Link>
            );
          })}
        </>
      </div>
    </div>
  );
};
export default Home;
