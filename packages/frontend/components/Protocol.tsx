import { useState } from "react";
import { Card } from "./C";
type Step = {
  title: string;
  href?: string;
  description?: string;
};
type Protocol = {
  slug: string;
  title: string;
  categories: ReadonlyArray<string>;
  description: string;
  steps: ReadonlyArray<Step>;
};

const safeProtocol: Protocol = {
  slug: "safe",
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
const uniswapProtocol: Protocol = {
  slug: "uniswap",
  title: "Swap your first tokens on Celo",
  categories: ["celo", "DeFi", "solo"],
  description:
    "Celo's ecosystem ensures seamless composability across systems, so you never have to worry about fragmented systems or sharded chains",
  steps: [
    {
      title: "Switch the network to Celo",
      href: "https://chainlist.org/chain/42220",
    },
    {
      title: 'Select WETH in "You Pay"',
      description: "WETH is wrapped Ether.",
      href: "https://app.uniswap.org/swap?chain=celo",
    },
    {
      title: 'Select CELO in "You Receive"',
      href: "https://app.uniswap.org/swap?chain=celo",
    },
    {
      title: "Swap!",
    },
  ],
};
const lensProtocol: Protocol = {
  slug: "lens",
  title: "Get social on Lenster",
  categories: ["social", "lens"],
  description:
    "Lenster is a decentralized, and permissionless social media app built with Lens Protocol ",
  steps: [
    {
      title: "Login on Lenster",
      href: "https://lenster.xyz/",
    },
    {
      title: "Follow someone",
      href: "https://lenster.xyz/u/levychain",
    },
    {
      title: "Create a post",
      description:
        "Express your thoughts! Anything you think people will like to see",
    },
  ],
};
const ghoProtocol: Protocol = {
  slug: "gho",
  title: "Stake ETH for GHO",
  categories: ["DeFi", "solo"],
  description:
    "Use Aave to stake the Ethereum for GHO, currently only on the Sepolia Test Net.",
  steps: [
    {
      title: "Connect a wallet",
      description: "Ensure this wallet has Sepolia Test ETH",
      href: "https://gho.aave.com/?marketName=proto_sepolia_gho_v3",
    },
    {
      title: "Switch to Sepolia",
      description: "Staking GHO is currently only available on Sepolia Testnet",
      href: "https://chainlist.org/chain/11155111",
    },
    {
      title: "Enter Amount & Supply ETH",
      description: "Or choose “MAX” to add all available ETH to the supply",
      href: "https://gho.aave.com/?marketName=proto_sepolia_gho_v3",
    },
    {
      title: "Add Token to Wallet",
      description: "Select “Add to wallet” and “Add token”",
    },
  ],
};
const ipfsProtocol: Protocol = {
  slug: "ipfs",
  title: "Publish a file to ipfs",
  categories: ["solo", "developer"],
  description:
    "The InterPlanetary File System is a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable",
  steps: [
    {
      title: "Open Terminal",
      description: 'On a mac or Linux, this is a program called "Terminal"',
    },
    {
      title: "Locate or Create the File",
    },
    {
      title: "Pin a file with `ipfs add YOUR_FILE_HERE`",
      description:
        "Pinning is the mechanism that allows you to tell IPFS to always keep a given object local.",
      href: "https://dweb-primer.ipfs.io/files-on-ipfs/pin-files",
    },
    {
      title: "Start daemon with `ipfs daemon`",
      description:
        "You have to run the IPFS daemon in order to have your local IPFS node become part of the IPFS network and listen to other IPFS peers.",
      href: "https://dweb-primer.ipfs.io/going-online/connect-your-node",
    },
  ],
};
const baseProtocol: Protocol = {
  slug: "base",
  title: "Try Base with friend.tech",
  categories: ["BASE", "social", "DeFi"],
  description: "friend.tech is a crypto-powered social network",
  steps: [
    {
      title: "Open The Website",
      href: "https://friend.tech",
    },
    {
      title: "Use an Invite Code",
      description:
        "If you have friends on the platform, ask them. Otherwise here are a few: ft-s8i5r6ql, ft-40uhiuwa, ft-r8r4mnnx",
    },
    { title: "Connect your Twitter" },
    {
      title: "Purchase Keys",
      description:
        "By owning a key, you get access to someone's chat room. This is the most important part of the platform!",
    },
  ],
};
const acrossProtocol: Protocol = {
  slug: "across",
  title: "Bridge with UMA's Across Protocol",
  categories: ["DeFi", "Bridge"],
  description:
    "Across is the fastest, cheapest and most secure cross-chain bridge for Ethereum, Arbitrum, Optimism, Polygon and other Layer 1 and Layer 2 networks.",
  steps: [
    {
      title: "Open The Website",
      href: "https://across.to/bridge",
    },
    {
      title: 'Enter quantity in "Send"',
      description: "However much you're comfortable with. No more, no less!",
    },
    {
      title: 'Select "Ethereum Mainnet" in "From"',
      description: 'If you prefer a different "From" be my guest! Yes Chef!',
    },
    {
      title: 'Select "Arbitrum One" in "To"',
      description: 'If you prefer a different "To" be my guest! Yes Chef!',
    },
    {
      title: "Confirm Transaction!",
      description:
        "You've made a swap on the most secure bridge! Wait for success in style with a coffee ☕️",
    },
  ],
};
export const protocols: ReadonlyArray<Protocol> = [
  safeProtocol,
  uniswapProtocol,
  lensProtocol,
  ghoProtocol,
  ipfsProtocol,
  baseProtocol,
  acrossProtocol,
];
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
