import {
  Section,
  Flex,
  Heading,
  Blockquote,
  Button,
  Avatar,
  Link,
  Text
} from "@radix-ui/themes";
import { Link2Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";

export default function CodingProfiles() {
  const { codingProfile: data } = useContext(PageData);
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          Coding Profiles
        </Heading>
        {data.map((val, idx) => (
          <Blockquote size={"3"} wrap={"pretty"} key={idx}>
            <Flex
              direction={{ initial: "column", sm: "row" }}
              mb={"1"}
              gap={"3"}
            >
              <Avatar src={val.img} fallback={val.imgFallback} size={"5"} />
              <Flex
                direction={"column"}
                align={"start"}
                justify={"center"}
                gap={"3"}
              >
                <Heading
                  as={"h1"}
                  size={"8"}
                  weight={"bold"}
                  align={"left"}
                  color={"iris"}
                >
                  {val.platform}
                </Heading>
                <Flex
                  direction={"column"}
                  align={"start"}
                  justify={"center"}
                  width={"100%"}
                  gap={"3"}
                >
                  <Text as={"p"} weight={"light"} size={"3"}>
                    {val.description}
                  </Text>
                  {val.pointsToBeNoted.map((point, innerIdx) => (
                    <Flex
                      key={innerIdx}
                      gap={"1"}
                      align={"start"}
                      justify={"center"}
                    >
                      <TriangleRightIcon className={"mt-1.5 shrink-0"} />
                      <Text weight={"light"} size={"3"} as={"p"}>
                        {point}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
                <Link href={val.url} underline={"hover"} asChild={true}>
                  <Button variant={"surface"}>
                    <Link2Icon />
                    Profile link
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Blockquote>
        ))}
      </Flex>
    </Section>
  );
}
