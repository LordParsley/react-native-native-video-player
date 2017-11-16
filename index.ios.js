import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NativeModules } from 'react-native'

const { RNVideoPlayer } = NativeModules

module.exports = {
  showVideoPlayer(url) {
    return RNVideoPlayer.showVideoPlayer(url)
  },
}
