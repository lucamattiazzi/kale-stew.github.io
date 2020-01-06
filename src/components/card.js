import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import '../app.css';

const useStyles = makeStyles({
  card: {
    minWidth: 195,
    maxWidth: 225,
    padding: 12
  },
  subtext: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#8D8D8D'
  },
  title: {
    fontSize: 18
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 8
  }
});

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function ProjectCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <span className={classes.subtext}>{item.topic}</span>
      <h2 className={classes.title}>{item.title}</h2>
      <h3 className={classes.subtitle}>{item.subtitle}</h3>
      <a
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
      >
        Go to ↗
      </a>
    </Card>
  );
}
