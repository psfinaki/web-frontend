import { Avatar as MuiAvatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { User } from "api";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { routeToUser } from "routes";

import { getProfileLinkA11yLabel } from "./constants";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "100%",
    position: "absolute",
    top: 0,
    width: "100%",
    maxWidth: "18rem",
    maxHeight: "18rem",
  },

  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  defaultSize: {
    height: "3rem",
    width: "3rem",
  },

  grow: {
    height: 0,
    paddingTop: "min(18rem, 100%)",
    width: "100%",
  },

  root: {
    flexShrink: 0,
    position: "relative",
  },
}));

export interface AvatarProps {
  children?: React.ReactNode;
  user?: User;
  grow?: boolean;
  className?: string;
  isProfileLink?: boolean;
  style?: React.CSSProperties;
}

export default function Avatar({
  user,
  grow,
  className,
  isProfileLink = true,
  ...otherProps
}: AvatarProps) {
  const classes = useStyles();

  const username = user?.username ?? "";
  const name = user?.name ?? "";

  return (
    <div
      className={classNames(
        className,
        { [classes.defaultSize]: !className },
        classes.root,
        { [classes.grow]: grow }
      )}
      {...otherProps}
    >
      {user ? (
        isProfileLink ? (
          <Link href={routeToUser(username)}>
            <a
              className={classes.link}
              aria-label={getProfileLinkA11yLabel(name)}
            >
              <MuiAvatar
                className={classes.avatar}
                alt={name}
                src={user?.avatarUrl}
              >
                {name.split(/\s+/).map((name) => name[0])}
              </MuiAvatar>
            </a>
          </Link>
        ) : (
          <MuiAvatar
            className={classes.avatar}
            alt={name}
            src={user?.avatarUrl}
          >
            {name.split(/\s+/).map((name) => name[0])}
          </MuiAvatar>
        )
      ) : otherProps.children ? (
        <MuiAvatar className={classes.avatar}>{otherProps.children}</MuiAvatar>
      ) : (
        <Skeleton variant="circle" className={classes.avatar} />
      )}
    </div>
  );
}
