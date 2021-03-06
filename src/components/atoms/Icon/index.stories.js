import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="close" />
  ))
  .add('palette', () => (
    <Icon icon="close" palette="primary" />
  ))
  .add('palette reverse', () => (
    <Icon icon="close" palette="primary" reverse />
  ))
  .add('height', () => (
    <Icon icon="close" height={100} />
  ))
