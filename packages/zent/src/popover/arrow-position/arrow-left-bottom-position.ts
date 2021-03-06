import { PositionFunctionImpl } from '../position-function';

import createPlacement from '../placement/create';
import createArrowPosition from './create';

const locate: PositionFunctionImpl = (
  anchorBoundingBox,
  containerBoundingBox,
  contentDimension,
  options
) => {
  const x = anchorBoundingBox.left - contentDimension.width - options.cushion;
  const middle = (anchorBoundingBox.top + anchorBoundingBox.bottom) / 2;
  const y = middle - (contentDimension.height - __ARROW_OFFSET_VERTICAL__);

  return createArrowPosition(x, y, `left-bottom`);
};

const ArrowLeftBottomPosition = createPlacement(locate);

export default ArrowLeftBottomPosition;
