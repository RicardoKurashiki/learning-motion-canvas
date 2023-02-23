import { Circle } from '@motion-canvas/2d/lib/components';
import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { all } from '@motion-canvas/core/lib/flow';
import { createSignal } from '@motion-canvas/core/lib/signals';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  const circle = createRef<Circle>();
  const scale = createSignal(1)

  view.add(
    <Circle
      ref={circle}
      width={() => scale() * 100}
      height={() => scale() * 100}
      x={-300}
      fill={'#ffffff'}
    />
  );

  yield* all(
    circle().position.x(-300, 0).to(300, 1),
    scale(3, 0.8),
  );
  yield* circle().fill('#ffffff', 0).to('#A5E876', 1);
});
