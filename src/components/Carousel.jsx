import { motion, useMotionValue } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

function Carousel({ children, size, items, numItemInFrame }) {
  const [itemIdx, setItemIdx] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && itemIdx < size - numItemInFrame) {
      setItemIdx((idx) => idx + numItemInFrame);
    } else if (x >= DRAG_BUFFER && itemIdx > 0) {
      setItemIdx((idx) => idx - numItemInFrame);
    }
  };

  return (
    <>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-2"
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${(itemIdx / numItemInFrame) * 95}%`, // Keep this unchanged
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
        >
          {children}
        </motion.div>
      </div>
      <Dot
        items={items}
        itemIdx={itemIdx}
        setItemIdx={setItemIdx}
        numItemInFrame={numItemInFrame}
        size={size}
      />
    </>
  );
}

function Dot({ itemIdx, setItemIdx, numItemInFrame, size }) {
  const numberOfDots = Math.ceil(size / numItemInFrame);

  return (
    <div className="flex justify-center">
      <div className="mt-2 flex gap-2">
        {Array.from({ length: numberOfDots }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setItemIdx(idx * numItemInFrame)}
            className={`h-3 w-3 rounded-full border-[1px] border-zinc-300 ${ itemIdx === idx *
            numItemInFrame && "bg-zinc-600" }`}
          />
        ))}
      </div>
    </div>
  );
}

Dot.propTypes = {
  itemIdx: PropTypes.number,
  setItemIdx: PropTypes.func,
  numItemInFrame: PropTypes.number,
  size: PropTypes.number,
};

Carousel.propTypes = {
  children: PropTypes.any,
  size: PropTypes.number,
  items: PropTypes.array,
  numItemInFrame: PropTypes.number,
};

export default Carousel;
