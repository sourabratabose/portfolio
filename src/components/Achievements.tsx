import {
  Section,
  Flex,
  Heading,
  Text,
  Badge,
  Em,
  Link,
} from "@radix-ui/themes";
import { Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { PageData } from "../contexts/PageDataContext";
import AchievementsData, { Achievement } from "../types/AchievementsData";
import { Link2Icon, TriangleRightIcon } from "@radix-ui/react-icons";

export default function Achievements() {
  const { achievements: data } = useContext(PageData);
  return (
    <Section p={"3"} asChild={true}>
      <Flex direction={"column"} gap={"5"} width={"100%"}>
        <Heading as={"h1"} size={"8"} weight={"bold"} align={"left"}>
          Achievements
        </Heading>
        <Text as={"p"} weight={"light"} size={"3"}>
          Know more about me and my other achievements in my career. Hope you
          will find them interesting and useful while knowing me as a
          professional.
        </Text>
        {data.map((val: AchievementsData, idx: number) => {
          return (
            <Fragment key={idx}>
              <Heading
                align={"left"}
                color={"gray"}
                weight={"regular"}
                size={"5"}
                as={"h3"}
              >
                {val.category}
              </Heading>
              <Flex direction={"row"} wrap={"wrap"} gap={"3"} key={idx}>
                {val.achievements.map(
                  (achievement: Achievement, innerIdx: number) => (
                    <Flex
                      key={idx * 10 + innerIdx}
                      gap={"1"}
                      align={"start"}
                      justify={"start"}
                      width={"100%"}
                    >
                      <TriangleRightIcon className={"mt-1.5 shrink-0"} />
                      <Flex gap={"1"} align={"start"} width={"100%"} wrap={"wrap"}>
                        {achievement.url != undefined ? (
                          <Link href={achievement.url} underline={"hover"}>
                            <Badge color={"bronze"} size={"3"}>
                              {achievement.heading} <Link2Icon />
                            </Badge>
                          </Link>
                        ) : (
                          <Badge color={"bronze"} size={"3"}>
                            {achievement.heading}
                          </Badge>
                        )}
                        {achievement.date != undefined ? (
                          <Text className="text-nowrap">
                            <Em>( {achievement.date} )</Em> : 
                          </Text>
                        ) : <Text> : </Text>}
                        <Text as={"p"} weight={"light"} size={"3"} wrap={"nowrap"}>
                          {achievement.description}
                        </Text>
                      </Flex>
                    </Flex>
                  )
                )}
              </Flex>
            </Fragment>
          );
        })}
      </Flex>
    </Section>
  );
}
