import React from 'react'
import CategoryLink from "../../components/categorylink";
import { getCategory, slugify } from "../../utils";
import PlainLink from "../../components/link";
import { Flex, Box, I } from "bricks";

export const Sidebar = ({ author, category, tags }) => (
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
    {getCategory({ category }) && (
      <Box my={2}>
        <Flex fontSize={[0, 0]} justifyContent="center">
          Posted in
        </Flex>
        <Flex justifyContent="center" mt="0.5rem">
          <CategoryLink
            to={`/category/${slugify(getCategory({ category }))}`}
          >
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