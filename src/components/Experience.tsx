import { TriangleRightIcon, Link2Icon } from "@radix-ui/react-icons";
import { Section, Flex, Heading, Blockquote, Link, Button, Text, Avatar } from "@radix-ui/themes";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";

export default function Experience() {
  const { experience: data } = useContext(PageData);
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          Experience
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
                  {val.company}
                </Heading>
                <Heading
                  as={"h3"}
                  size={"5"}
                  color={"gray"}
                  weight={"regular"}
                  align={"left"}
                >
                  {val.role}
                </Heading>
                <Heading
                  as={"h3"}
                  size={"5"}
                  color={"gray"}
                  weight={"regular"}
                  align={"left"}
                >
                  {val.time}
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
                    Resources link
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
