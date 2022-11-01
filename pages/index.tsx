import Image from "next/image";
import type { NextPage } from "next";

// components
import Businesses from "../components/Businesses/Businesses";
import ExternalLink from "../components/ExternalLink/ExternalLink";

// styled components
import { Box } from "../components/UI/Box";
import { Copy } from "../components/UI/Copy";
import { Flex } from "../components/UI/Flex";

// constants
import { SLUG_REDDIT_THREAD } from "../constants/urls";

// images
import HomeImg from "../public/images/home.jpg";

const Home: NextPage = () => (
  <>
    <Flex>
      <Box>
        <h1>Welcome to Vancouver Shop Local!</h1>

        <Copy>
          Vancouver Shop Local is an effort that started on the{" "}
          <ExternalLink href={SLUG_REDDIT_THREAD}> Vancouver subreddit</ExternalLink> to help
          support local businesses in the Greater Vancouver Area during the holiday shopping season,
          instead of buying from big chain retailors or online from sites like Amazon. Below,
          you&apos;ll find a list of businesses/artists/crafters.
        </Copy>
      </Box>

      <Box>
        <Image
          src={HomeImg}
          alt="person accepting a package from a local business"
          placeholder="blur"
        />
      </Box>
    </Flex>

    <Businesses />
  </>
);

export default Home;
