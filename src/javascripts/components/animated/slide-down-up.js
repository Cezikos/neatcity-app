// @flow
import * as React from 'react';
import { Animated, Easing } from 'react-native';


type Props = {
  active: boolean,
  children: React.Node
};

type State = {
  animatedHeight: Animated.Value,
  animatedOpacity: Animated.Value
};

export default class SlideDownUp extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      animatedHeight: new Animated.Value(0),
      animatedOpacity: new Animated.Value(0)
    };
  }

  componentWillReceiveProps = (nextProps : Props) => {
    if (nextProps.active !== this.props.active) {
      const sequence = [
        Animated.timing(this.state.animatedHeight, {
          toValue: nextProps.active ? 230 : 0,
          easing: Easing.inOut(Easing.quad),
          duration: 200,
        }),
        Animated.timing(this.state.animatedOpacity, {
          toValue: nextProps.active ? 1 : 0,
          easing: Easing.inOut(Easing.quad),
          duration: 100,
        })
      ];

      Animated.sequence(nextProps.active ? sequence : sequence.reverse()).start();
    }
  }

  render() {
    return (
      <Animated.View
        style={{
          overflow: 'hidden',
          backgroundColor: 'transparent',
          height: this.state.animatedHeight}}>
        <Animated.View
          style={{
            opacity: this.state.animatedOpacity}}>
          {this.props.children}
        </Animated.View>
      </Animated.View>
    );
  }
}
