"use client";

import { useEffect, useCallback, useState } from "react";
// @mui
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import AvatarGroup, { avatarGroupClasses } from "@mui/material/AvatarGroup";
// routes
import { paths } from "src/routes/paths";
import { useParams } from "src/routes/hook";
import { RouterLink } from "src/routes/components";
// utils
import { fShortenNumber } from "src/utils/format-number";
// _mock
import { POST_PUBLISH_OPTIONS } from "src/_mock";
// components
import Iconify from "src/components/iconify";
import Markdown from "src/components/markdown";
import EmptyContent from "src/components/empty-content";
//
import { useBlog } from "../hooks";
import PostDetailsHero from "../post-details-hero";
import PostCommentList from "../post-comment-list";
import PostCommentForm from "../post-comment-form";
import { PostDetailsSkeleton } from "../post-skeleton";
import PostDetailsToolbar from "../post-details-toolbar";

// ----------------------------------------------------------------------

export default function PostDetailsView() {
  const params = useParams();

  const title = params.title as string;

  const { post, postStatus, getPost } = useBlog();

  const [publish, setPublish] = useState("");

  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  useEffect(() => {
    if (title) {
      getPost(title);
    }
  }, [getPost, title]);

  useEffect(() => {
    if (post) {
      setPublish(post?.publish);
    }
  }, [post]);

  const renderSkeleton = <PostDetailsSkeleton />;

  const renderError = (
    <EmptyContent
      filled
      title={`${postStatus.error?.message}`}
      action={
        <Button
          component={RouterLink}
          href={paths.demo.post.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{
        py: 20,
      }}
    />
  );

  const renderPost = post && (
    <>
      <PostDetailsToolbar
        backLink={paths.demo.post.root}
        editLink={paths.demo.post.edit(`${post?.title}`)}
        liveLink={paths.post.details(`${post?.title}`)}
        publish={publish || ""}
        onChangePublish={handleChangePublish}
        publishOptions={POST_PUBLISH_OPTIONS}
      />

      <PostDetailsHero title={post.title} coverUrl={post.coverUrl} />

      <Stack
        sx={{
          maxWidth: 720,
          mx: "auto",
          mt: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 5 }}>
          {post.description}
        </Typography>

        <Markdown children={post.content} />

        <Stack
          spacing={3}
          sx={{
            py: 3,
            borderTop: (theme) => `dashed 1px ${theme.palette.divider}`,
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <Stack direction="row" flexWrap="wrap" spacing={1}>
            {post.tags.map((tag) => (
              <Chip key={tag} label={tag} variant="soft" />
            ))}
          </Stack>

          <Stack direction="row" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  size="small"
                  color="error"
                  icon={<Iconify icon="solar:heart-bold" />}
                  checkedIcon={<Iconify icon="solar:heart-bold" />}
                />
              }
              label={fShortenNumber(post.totalFavorites)}
              sx={{ mr: 1 }}
            />

            <AvatarGroup
              sx={{
                [`& .${avatarGroupClasses.avatar}`]: {
                  width: 32,
                  height: 32,
                },
              }}
            >
              {post.favoritePerson.map((person) => (
                <Avatar
                  key={person.name}
                  alt={person.name}
                  src={person.avatarUrl}
                />
              ))}
            </AvatarGroup>
          </Stack>
        </Stack>

        <Stack direction="row" sx={{ mb: 3, mt: 5 }}>
          <Typography variant="h4">Comments</Typography>

          <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
            ({post.comments.length})
          </Typography>
        </Stack>

        <PostCommentForm />

        <Divider sx={{ mt: 5, mb: 2 }} />

        <PostCommentList comments={post.comments} />
      </Stack>
    </>
  );

  return (
    <Container maxWidth={false}>
      {postStatus.loading ? (
        renderSkeleton
      ) : (
        <>{postStatus.error ? renderError : renderPost}</>
      )}
    </Container>
  );
}
