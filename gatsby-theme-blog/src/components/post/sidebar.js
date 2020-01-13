import React from "react";
import CategoryLink from "../../components/categorylink";
import { getCategory, slugify } from "../../utils";
import PlainLink from "../../components/link";
import { Flex, Box, I } from "bricks";

const makeTwoDigits = number => `00${number.toString()}`.slice(-2);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const toMonthText = number => months[number];

const formatDateTime = (dateTimeString, format = "mm/dd/yy hh:MMp") => {
  const dateObj = new Date(dateTimeString);
  const hours = dateObj.getHours();
  const month = dateObj.getMonth();

  return format
    .replace("p", hours >= 12 ? "pm" : "am")
    .replace("P", hours >= 12 ? "PM" : "AM")
    .replace("mmm", toMonthText(month))
    .replace("mm", makeTwoDigits(month + 1))
    .replace("dd", makeTwoDigits(dateObj.getDate()))
    .replace("yyyy", dateObj.getFullYear())
    .replace("yy", makeTwoDigits(dateObj.getFullYear()))
    .replace("hh", makeTwoDigits(hours <= 12 ? hours : hours % 12))
    .replace("MM", makeTwoDigits(dateObj.getMinutes()));
};

export const Sidebar = ({ author, category, tags, datePublished }) => (
  <div>
    <Box my={2}>
      <Flex fontSize={[0, 0]} justifyContent="center">
        Written by
      </Flex>
      <Flex justifyContent="center" mt="0.5rem">
        <PlainLink to={`/author/${slugify(author)}`}>
          <I>{author}</I>
          <br />
        </PlainLink>
      </Flex>
    </Box>
    {datePublished ? (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Published at
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <I>{formatDateTime(datePublished, "mmm dd, yyyy")}</I>
          <br />
        </Flex>
      </Box>
    ) : null}
    {getCategory({ category }) && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Posted in
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <CategoryLink to={`/category/${slugify(getCategory({ category }))}`}>
            {getCategory({ category })}
          </CategoryLink>
        </Flex>
      </Box>
    )}
    {tags && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Tags
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <Flex
            fontSize={[0, 0]}
            color="black.2"
            width={[0.5, 0.5]}
            justifyContent="center"
            flexWrap="wrap"
          >
            {tags.map(tag => {
              const slug = slugify(tag);
              return (
                <Box key={tag} p="0.125rem">
                  <PlainLink key={tag} to={`/tag/${slug}`}>
                    <I>#{slug}</I>
                  </PlainLink>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Box>
    )}
    <Flex justifyContent="center">
      <Box width={[1 / 2, 1 / 2]} fontSize={0} color="black.2">
        If you want to get more posts like this, join our newsletter
      </Box>
    </Flex>
  </div>
);
